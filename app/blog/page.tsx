import { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
    title: "ブログ | 株式会社ZTEX",
    description:
        "AI導入、業務自動化、AIエージェントに関する最新情報やナレッジを発信。仙台・宮城から全国の企業のDX推進をサポートします。",
    openGraph: {
        type: "website",
        title: "ブログ | 株式会社ZTEX",
        description:
            "AI導入、業務自動化、AIエージェントに関する最新ナレッジを発信。",
    },
};

const categoryColors: Record<string, string> = {
    AI導入: "border-blue-800 text-blue-400",
    業務自動化: "border-emerald-800 text-emerald-400",
    AIトレンド: "border-purple-800 text-purple-400",
};

export default function BlogPage() {
    const sorted = [...blogPosts].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return (
        <div className="min-h-screen bg-black text-neutral-50">
            <div className="section-inner py-20 md:py-28">
                <Button
                    asChild
                    variant="link"
                    className="px-0 text-neutral-400 hover:text-white"
                >
                    <Link href="/" className="flex items-center gap-2">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Top
                    </Link>
                </Button>

                <div className="mt-6">
                    <p className="section-eyebrow">KNOWLEDGE</p>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
                        BLOG
                    </h1>
                    <p className="mt-4 max-w-xl text-sm text-neutral-400 md:text-base">
                        AI導入・業務自動化・最新テクノロジーに関するナレッジを発信しています。
                    </p>
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {sorted.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="group flex flex-col rounded-xl border border-neutral-800 bg-neutral-950 p-6 transition-all hover:border-neutral-700 hover:bg-neutral-900/50"
                        >
                            <div className="flex items-center gap-3">
                                <span
                                    className={`rounded-full border px-2.5 py-0.5 text-[10px] font-medium ${categoryColors[post.category] ||
                                        "border-neutral-700 text-neutral-400"
                                        }`}
                                >
                                    {post.category}
                                </span>
                                <time className="text-xs tabular-nums text-neutral-600">
                                    {post.date}
                                </time>
                            </div>

                            <h2 className="mt-4 text-base font-semibold leading-snug text-neutral-200 transition-colors group-hover:text-white md:text-lg">
                                {post.title}
                            </h2>

                            <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-neutral-500">
                                {post.description}
                            </p>

                            <div className="mt-auto pt-5">
                                <div className="flex flex-wrap gap-1.5">
                                    {post.tags.slice(0, 3).map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded bg-neutral-900 px-2 py-0.5 text-[10px] text-neutral-500"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
