import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { glossaryTerms } from "@/lib/glossary-data";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

type Props = {
    params: {
        slug: string;
    };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const term = glossaryTerms.find((t) => t.slug === params.slug);
    if (!term) return { title: "Not Found" };

    return {
        title: `${term.term}の意味とは？ | ZTEX AI用語集`,
        description: term.definition,
        openGraph: {
            type: "article",
            title: `${term.term}の意味とは？ | 株式会社ZTEX`,
            description: term.definition,
        },
    };
}

export function generateStaticParams() {
    return glossaryTerms.map((term) => ({
        slug: term.slug,
    }));
}

export default function GlossaryDetailPage({ params }: Props) {
    const term = glossaryTerms.find((t) => t.slug === params.slug);

    if (!term) {
        notFound();
    }

    // JSON-LD for "DefinedTerm" schema to help AEO
    const jsonLd = {
        "@context": "https://schema.org/",
        "@type": "DefinedTerm",
        name: term.term,
        description: term.definition,
        inDefinedTermSet: {
            "@type": "DefinedTermSet",
            name: "ZTEX AI/AX Glossary",
            url: "https://ztex-japan.com/glossary",
        },
        sameAs: term.sameAs,
    };

    return (
        <div className="min-h-screen bg-black text-neutral-50">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="section-inner py-20 md:py-28">
                <Button
                    asChild
                    variant="outline"
                    className="mb-8 border-neutral-800 text-neutral-400 hover:bg-neutral-900 hover:text-white"
                >
                    <Link href="/glossary">
                        <ArrowLeft className="mr-2 h-4 w-4" /> 用語集一覧に戻る
                    </Link>
                </Button>

                <article className="mx-auto max-w-3xl">
                    <header className="mb-10 border-b border-neutral-800 pb-10">
                        <p className="mb-4 text-xs font-medium uppercase tracking-wider text-neutral-500">
                            AI KEYWORD
                        </p>
                        <h1 className="text-3xl font-bold text-white md:text-5xl">
                            {term.term}
                        </h1>
                        <p className="mt-6 text-lg leading-relaxed text-neutral-300">
                            {term.definition}
                        </p>
                    </header>

                    <div className="prose prose-invert max-w-none text-neutral-300">
                        <div className="whitespace-pre-line leading-loose text-base md:text-lg">
                            {term.longDescription}
                        </div>
                    </div>

                    {term.relatedTerms.length > 0 && (
                        <div className="mt-16 rounded-xl border border-neutral-800 bg-neutral-900/30 p-6">
                            <h3 className="mb-4 text-sm font-semibold text-neutral-400">
                                関連キーワード
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {term.relatedTerms.map((related) => (
                                    <span
                                        key={related}
                                        className="rounded-full bg-neutral-800 px-3 py-1 text-xs text-neutral-300"
                                    >
                                        {related}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </article>

                <div className="mt-20 text-center">
                    <div className="inline-block rounded-2xl border border-neutral-800 bg-neutral-950 p-8">
                        <h3 className="text-lg font-semibold text-white mb-2">「{term.term}」の自社活用にお悩みですか？</h3>
                        <p className="text-neutral-400 text-sm mb-6 max-w-md mx-auto">
                            ZTEXでは、{term.term}を含む最新技術を、御社の経営課題に合わせて実装までサポートします。
                        </p>
                        <Button asChild className="rounded-full bg-white text-black hover:bg-neutral-200 px-8">
                            <Link href="/contact">無料相談を申し込む</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
