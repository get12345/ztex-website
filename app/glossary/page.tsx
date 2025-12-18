import { Metadata } from "next";
import Link from "next/link";
import { glossaryTerms } from "@/lib/glossary-data";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "AI/AX用語集 | 株式会社ZTEX",
    description:
        "AIトランスフォーメーション（AX）、RAG、エージェントAIなど、最新のAI技術に関する専門用語をわかりやすく解説します。",
};

export default function GlossaryPage() {
    return (
        <div className="min-h-screen bg-black text-neutral-50">
            <div className="section-inner py-16 md:py-24">
                <div className="mb-12">
                    <p className="section-eyebrow">KNOWLEDGE BASE</p>
                    <h1 className="mt-3 text-3xl font-semibold md:text-4xl">AI/AX 用語集</h1>
                    <p className="mt-4 max-w-2xl text-neutral-400">
                        AI技術は日々進化しています。
                        経営者やプロジェクト責任者が知っておくべき重要キーワードを定義・解説しました。
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {glossaryTerms.map((item) => (
                        <Link
                            key={item.slug}
                            href={`/glossary/${item.slug}`}
                            className="group relative block overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/30 p-6 transition-colors hover:border-neutral-700 hover:bg-neutral-900/50"
                        >
                            <h2 className="mb-3 text-lg font-bold text-neutral-100 group-hover:text-white">
                                {item.term}
                            </h2>
                            <p className="mb-6 text-sm leading-relaxed text-neutral-400 line-clamp-3">
                                {item.definition}
                            </p>
                            <div className="flex items-center text-xs font-medium text-neutral-500 group-hover:text-white">
                                詳細を見る <ArrowRight className="ml-2 h-3 w-3" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
