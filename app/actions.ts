"use server";


import nodemailer from "nodemailer";

/**
 * お問い合わせフォームのデータを受け取る Server Action
 */
export async function submitContact(formData: FormData) {
  const name = (formData.get("name") as string || "").trim();
  const email = (formData.get("email") as string || "").trim();
  const phone = (formData.get("phone") as string || "").trim();
  const category = (formData.get("category") as string || "").trim();
  const message = (formData.get("message") as string || "").trim();
  const recaptchaToken = formData.get("recaptchaToken") as string;

  // === サーバー側バリデーション ===
  if (!name || !email || !category || !message) {
    return { success: false, error: "必須項目が入力されていません。" };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: "メールアドレスの形式が正しくありません。" };
  }

  if (name.length > 100) {
    return { success: false, error: "お名前が長すぎます（100文字以内）。" };
  }
  if (email.length > 254) {
    return { success: false, error: "メールアドレスが長すぎます。" };
  }
  if (phone && phone.length > 20) {
    return { success: false, error: "電話番号が長すぎます。" };
  }
  if (message.length > 5000) {
    return { success: false, error: "お問い合わせ内容が長すぎます（5000文字以内）。" };
  }

  const validCategories = ["service", "recruit", "media", "partnership", "other"];
  if (!validCategories.includes(category)) {
    return { success: false, error: "不正なお問い合わせ種別です。" };
  }

  // reCAPTCHA 検証
  if (!recaptchaToken) {
    return { success: false, error: "reCAPTCHAトークンがありません。" };
  }

  try {
    const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
    });
    const verifyData = await verifyRes.json();

    if (!verifyData.success || verifyData.score < 0.5) {
      console.warn("reCAPTCHA validation failed:", verifyData);
      return { success: false, error: "スパムの可能性があるため送信できませんでした。" };
    }
  } catch (err) {
    console.error("reCAPTCHA verification error:", err);
    return { success: false, error: "セキュリティ検証中にエラーが発生しました。" };
  }

  console.log("ZTEX contact:", { name, email, phone, category, message });
  console.log("Env check:", {
    user: process.env.GMAIL_USER ? "Set" : "Not Set",
    pass: process.env.GMAIL_APP_PASSWORD ? "Set" : "Not Set"
  });

  // Gmail SMTP 設定
  // 環境変数 GMAIL_USER (Primary Account), GMAIL_APP_PASSWORD が必要
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER, // info@ztex-japan.com (Primary)
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: "info@ztex-japan.com", // Send as alias
    to: "info@ztex-japan.com",   // Send to info address
    subject: `【ZTEX】お問い合わせ: ${category} (${name}様)`,
    text: `
Webサイトより新しいお問い合わせがありました。

--------------------------------------------------
■ お名前
${name}

■ メールアドレス
${email}

■ 電話番号
${phone || "未入力"}

■ お問い合わせ種別
${category}

■ お問い合わせ内容
${message}
--------------------------------------------------
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: "メール送信に失敗しました。" };
  }
}
