"use server";

import { revalidatePath } from "next/cache";
import nodemailer from "nodemailer";

/**
 * お問い合わせフォームのデータを受け取る Server Action
 */
export async function submitContact(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const category = formData.get("category") as string;
  const message = formData.get("message") as string;

  console.log("SOFT FRAME contact:", { name, email, phone, category, message });
  console.log("Env check:", {
    user: process.env.GMAIL_USER ? "Set" : "Not Set",
    pass: process.env.GMAIL_APP_PASSWORD ? "Set" : "Not Set"
  });

  // Gmail SMTP 設定
  // 環境変数 GMAIL_USER (Primary Account), GMAIL_APP_PASSWORD が必要
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER, // ztex.ltd@gmail.com (Primary)
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: "ztex.ltd-info@gmail.com", // Send as alias
    to: "ztex.ltd-info@gmail.com",   // Send to info address
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
