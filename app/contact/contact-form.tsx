"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { submitContact } from "@/app/actions";
import Script from "next/script";

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        const formData = new FormData(e.currentTarget);

        try {
            // reCAPTCHA トークン取得
            // @ts-ignore
            const token = await window.grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, { action: 'submit_contact' });
            formData.append("recaptchaToken", token);

            const result = await submitContact(formData);

            if (result.success) {
                setIsSubmitted(true);
            } else {
                setError("送信に失敗しました。時間をおいて再度お試しください。");
            }
        } catch (error) {
            console.error(error);
            setError("予期せぬエラーが発生しました。");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-black pt-24 pb-20 text-neutral-50">
            <Script
                src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
                strategy="afterInteractive"
            />
            <div className="container mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-2xl">
                    <div className="mb-12 text-center">
                        <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                            CONTACT
                        </h1>
                        <p className="text-neutral-400">
                            制作のご依頼、お見積もり、その他ご相談など
                            <br className="hidden sm:block" />
                            お気軽にお問い合わせください。
                        </p>
                    </div>

                    {isSubmitted ? (
                        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8 text-center backdrop-blur-sm">
                            <h2 className="mb-4 text-2xl font-bold text-white">
                                送信完了いたしました
                            </h2>
                            <p className="mb-8 text-neutral-400">
                                お問い合わせありがとうございます。
                                <br />
                                担当者より通常3営業日以内にご連絡させていただきます。
                            </p>
                            <Button
                                onClick={() => setIsSubmitted(false)}
                                variant="outline"
                                className="border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:text-white"
                            >
                                フォームに戻る
                            </Button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-8">
                            {error && (
                                <div className="rounded-lg border border-red-900/50 bg-red-950/30 p-4 text-sm text-red-400">
                                    <p className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" x2="12" y1="8" y2="12" /><line x1="12" x2="12.01" y1="16" y2="16" /></svg>
                                        {error}
                                    </p>
                                </div>
                            )}
                            <div className="space-y-4">
                                {/* お名前 */}
                                <div className="space-y-2">
                                    <Label htmlFor="name" className="text-neutral-300">
                                        お名前 <span className="text-red-500">*</span>
                                    </Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        required
                                        placeholder="山田 太郎"
                                        className="border-neutral-800 bg-neutral-900/50 text-white placeholder:text-neutral-600 focus:border-neutral-600"
                                    />
                                </div>

                                {/* メールアドレス */}
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-neutral-300">
                                        メールアドレス <span className="text-red-500">*</span>
                                    </Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        placeholder="example@ztex-japan.com"
                                        className="border-neutral-800 bg-neutral-900/50 text-white placeholder:text-neutral-600 focus:border-neutral-600"
                                    />
                                </div>

                                {/* 電話番号 */}
                                <div className="space-y-2">
                                    <Label htmlFor="phone" className="text-neutral-300">
                                        電話番号
                                    </Label>
                                    <Input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        placeholder="03-1234-5678"
                                        className="border-neutral-800 bg-neutral-900/50 text-white placeholder:text-neutral-600 focus:border-neutral-600"
                                    />
                                </div>

                                {/* お問い合わせ種別 */}
                                <div className="space-y-2">
                                    <Label htmlFor="category" className="text-neutral-300">
                                        お問い合わせ種別 <span className="text-red-500">*</span>
                                    </Label>
                                    <Select name="category" required>
                                        <SelectTrigger className="border-neutral-800 bg-neutral-900/50 text-white focus:border-neutral-600">
                                            <SelectValue placeholder="選択してください" />
                                        </SelectTrigger>
                                        <SelectContent className="border-neutral-800 bg-neutral-900 text-white">
                                            <SelectItem value="service">サービス導入について</SelectItem>
                                            <SelectItem value="recruit">採用について</SelectItem>
                                            <SelectItem value="media">取材・メディア掲載について</SelectItem>
                                            <SelectItem value="partnership">協業・パートナーシップについて</SelectItem>
                                            <SelectItem value="other">その他</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* お問い合わせ内容 */}
                                <div className="space-y-2">
                                    <Label htmlFor="message" className="text-neutral-300">
                                        お問い合わせ内容 <span className="text-red-500">*</span>
                                    </Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        required
                                        placeholder="お問い合わせ内容をご記入ください"
                                        className="min-h-[200px] border-neutral-800 bg-neutral-900/50 text-white placeholder:text-neutral-600 focus:border-neutral-600"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="h-12 min-w-[200px] rounded-full bg-white px-8 text-base font-medium text-black hover:bg-neutral-200 disabled:opacity-50"
                                >
                                    {isSubmitting ? "送信中..." : "送信する"}
                                </Button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
