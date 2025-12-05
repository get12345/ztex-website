"use server";

import { revalidatePath } from "next/cache";
import nodemailer from "nodemailer";
import { signToken, verifyToken, ContactData } from "@/lib/token";

/**
 * Step 1: フォームデータを受け取り、本人確認メールを送る
 */
export async function submitContact(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const category = formData.get("category") as string;
  const message = formData.get("message") as string;

  // データの検証 (簡易)
  if (!name || !email || !category || !message) {
    return { success: false, error: "必須項目が入力されていません。" };
  }

  // トークン生成
  const contactData: ContactData = { name, email, phone, category, message };
  const token = signToken(contactData);

  // 確認用URL
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const verifyUrl = `${baseUrl}/verify?token=${token}`;

  // メール送信設定
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  // ユーザーへの確認メール
  const mailOptions = {
    from: "info@ztex-japan.com",
    to: email, // ユーザーに送る
    subject: "【ZTEX】お問い合わせ確認（まだ完了していません）",
    text: `
${name} 様

株式会社ZTEXにお問い合わせいただきありがとうございます。
以下のリンクをクリックして、お問い合わせを完了させてください。

■ お問い合わせ完了リンク
${verifyUrl}

※このリンクは24時間有効です。
※お心当たりがない場合は、このメールを破棄してください。

--------------------------------------------------
株式会社ZTEX
info@ztex-japan.com
--------------------------------------------------
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Error sending verification email:", error);
    return { success: false, error: "確認メールの送信に失敗しました。" };
  }
}

/**
 * Step 2: トークンを検証し、管理者にメールを送る
 */
export async function verifyAndSend(token: string) {
  const data = verifyToken(token);
  if (!data) {
    return { success: false, error: "無効なトークン、または期限切れです。" };
  }

  const { name, email, phone, category, message } = data;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  // 管理者への通知メール
  const adminMailOptions = {
    from: "info@ztex-japan.com",
    to: "info@ztex-japan.com", // 管理者に送る
    subject: `【ZTEX】お問い合わせ: ${category} (${name}様)`,
    text: `
Webサイトより新しいお問い合わせがありました（本人確認済み）。

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
    await transporter.sendMail(adminMailOptions);
    return { success: true };
  } catch (error) {
    console.error("Error sending admin email:", error);
    return { success: false, error: "管理者への送信に失敗しました。" };
  }
}
