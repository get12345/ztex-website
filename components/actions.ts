// app/actions.ts
"use server";

import { revalidatePath } from "next/cache";

/**
 * お問い合わせフォームから送られてきたデータを受け取る Server Action
 * 今はコンソールにログを出すだけのダミー実装。
 * 実運用ではここでメール送信やDB保存などに差し替えます。
 */
export async function submitContact(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  console.log("SOFT FRAME contact:", { name, email, message });

  await new Promise((resolve) => setTimeout(resolve, 500));

  revalidatePath("/");
}
