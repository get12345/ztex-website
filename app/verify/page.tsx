"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { verifyAndSend } from "@/app/actions";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function VerifyContent() {
    const searchParams = useSearchParams();
    const token = searchParams.get("token");
    const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (!token) {
            setStatus("error");
            setMessage("トークンが見つかりません。");
            return;
        }

        const verify = async () => {
            try {
                const result = await verifyAndSend(token);
                if (result.success) {
                    setStatus("success");
                } else {
                    setStatus("error");
                    setMessage(result.error || "認証に失敗しました。");
                }
            } catch (error) {
                setStatus("error");
                setMessage("エラーが発生しました。");
            }
        };

        verify();
    }, [token]);

    return (
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8 text-center backdrop-blur-sm max-w-lg mx-auto mt-20">
            {status === "loading" && (
                <div>
                    <h2 className="mb-4 text-2xl font-bold text-white">確認中...</h2>
                    <p className="text-neutral-400">認証処理を行っています。しばらくお待ちください。</p>
                </div>
            )}

            {status === "success" && (
                <div>
                    <h2 className="mb-4 text-2xl font-bold text-white">お問い合わせ完了</h2>
                    <p className="mb-8 text-neutral-400">
                        本人確認が完了し、お問い合わせを受け付けました。<br />
                        担当者よりご連絡させていただきます。
                    </p>
                    <Link href="/">
                        <Button className="h-12 min-w-[200px] rounded-full bg-white px-8 text-base font-medium text-black hover:bg-neutral-200">
                            トップへ戻る
                        </Button>
                    </Link>
                </div>
            )}

            {status === "error" && (
                <div>
                    <h2 className="mb-4 text-2xl font-bold text-red-500">エラーが発生しました</h2>
                    <p className="mb-8 text-neutral-400">
                        {message}<br />
                        有効期限切れの可能性があります。再度フォームより送信してください。
                    </p>
                    <Link href="/contact">
                        <Button variant="outline" className="border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:text-white">
                            フォームに戻る
                        </Button>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default function VerifyPage() {
    return (
        <main className="min-h-screen bg-black pt-24 pb-20 px-4">
            <Suspense fallback={<div className="text-white text-center mt-20">Loading...</div>}>
                <VerifyContent />
            </Suspense>
        </main>
    );
}
