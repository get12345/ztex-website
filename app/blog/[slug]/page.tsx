import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog-data";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) return { title: "Not Found" };

    return {
        title: `${post.title} | ZTEX ブログ`,
        description: post.description,
        openGraph: {
            type: "article",
            title: post.title,
            description: post.description,
            publishedTime: post.date,
        },
        alternates: {
            canonical: `https://ztex-japan.com/blog/${post.slug}`,
        },
    };
}

export function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

/** Simple markdown-like renderer for blog content */
function renderContent(content: string) {
    const lines = content.split("\n");
    const elements: React.ReactNode[] = [];
    let inTable = false;
    let tableRows: string[][] = [];
    let inList = false;
    let listItems: React.ReactNode[] = [];
    let listOrdered = false;

    const flushList = () => {
        if (inList && listItems.length > 0) {
            if (listOrdered) {
                elements.push(
                    <ol key={`ol-${elements.length}`} className="my-4 list-decimal space-y-2 pl-6 text-neutral-300">
                        {listItems}
                    </ol>
                );
            } else {
                elements.push(
                    <ul key={`ul-${elements.length}`} className="my-4 list-disc space-y-2 pl-6 text-neutral-300">
                        {listItems}
                    </ul>
                );
            }
            listItems = [];
            inList = false;
        }
    };

    const flushTable = () => {
        if (inTable && tableRows.length > 0) {
            const header = tableRows[0];
            const body = tableRows.slice(1).filter(row =>
                !row.every(cell => /^[-:]+$/.test(cell.trim()))
            );
            elements.push(
                <div key={`table-${elements.length}`} className="my-6 overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-neutral-700">
                                {header.map((cell, i) => (
                                    <th key={i} className="px-3 py-2 text-left font-semibold text-neutral-200">
                                        {cell.trim()}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {body.map((row, ri) => (
                                <tr key={ri} className="border-b border-neutral-800/50">
                                    {row.map((cell, ci) => (
                                        <td key={ci} className="px-3 py-2 text-neutral-400">
                                            {cell.trim()}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
            tableRows = [];
            inTable = false;
        }
    };

    const formatInline = (text: string): React.ReactNode => {
        // Bold
        const parts = text.split(/(\*\*[^*]+\*\*)/g);
        return parts.map((part, i) => {
            if (part.startsWith("**") && part.endsWith("**")) {
                return <strong key={i} className="text-neutral-100 font-semibold">{part.slice(2, -2)}</strong>;
            }
            return part;
        });
    };

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        // Table rows
        if (line.trim().startsWith("|") && line.trim().endsWith("|")) {
            flushList();
            inTable = true;
            const cells = line.split("|").slice(1, -1);
            tableRows.push(cells);
            continue;
        } else if (inTable) {
            flushTable();
        }

        // Horizontal rule
        if (line.trim() === "---") {
            flushList();
            elements.push(<hr key={`hr-${i}`} className="my-8 border-neutral-800" />);
            continue;
        }

        // Headers
        if (line.startsWith("## ")) {
            flushList();
            elements.push(
                <h2 key={`h2-${i}`} className="mb-4 mt-10 text-xl font-bold text-white md:text-2xl">
                    {line.slice(3)}
                </h2>
            );
            continue;
        }
        if (line.startsWith("### ")) {
            flushList();
            elements.push(
                <h3 key={`h3-${i}`} className="mb-3 mt-8 text-lg font-semibold text-neutral-100 md:text-xl">
                    {line.slice(4)}
                </h3>
            );
            continue;
        }

        // Unordered list
        if (line.trim().startsWith("- ")) {
            if (!inList || listOrdered) {
                flushList();
                inList = true;
                listOrdered = false;
            }
            listItems.push(
                <li key={`li-${i}`}>{formatInline(line.trim().slice(2))}</li>
            );
            continue;
        }

        // Ordered list
        if (/^\d+\.\s/.test(line.trim())) {
            if (!inList || !listOrdered) {
                flushList();
                inList = true;
                listOrdered = true;
            }
            listItems.push(
                <li key={`li-${i}`}>{formatInline(line.trim().replace(/^\d+\.\s/, ""))}</li>
            );
            continue;
        }

        // Non-list line, flush list
        if (inList) {
            flushList();
        }

        // Empty line
        if (line.trim() === "") {
            continue;
        }

        // Paragraph
        elements.push(
            <p key={`p-${i}`} className="my-4 leading-relaxed text-neutral-300">
                {formatInline(line)}
            </p>
        );
    }

    flushList();
    flushTable();

    return elements;
}

export default async function BlogArticlePage({ params }: Props) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    const jsonLdData = [
        {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            author: {
                "@type": "Organization",
                name: "株式会社ZTEX",
                url: "https://ztex-japan.com",
            },
            publisher: {
                "@type": "Organization",
                name: "株式会社ZTEX",
                url: "https://ztex-japan.com",
            },
            mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `https://ztex-japan.com/blog/${post.slug}`,
            },
            keywords: post.tags.join(", "),
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://ztex-japan.com",
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: "Blog",
                    item: "https://ztex-japan.com/blog",
                },
                {
                    "@type": "ListItem",
                    position: 3,
                    name: post.title,
                    item: `https://ztex-japan.com/blog/${post.slug}`,
                },
            ],
        },
    ];

    // Related posts (same category, excluding current)
    const relatedPosts = blogPosts
        .filter((p) => p.slug !== post.slug)
        .slice(0, 2);

    return (
        <div className="min-h-screen bg-black text-neutral-50">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
            />
            <div className="section-inner py-20 md:py-28">
                <Button
                    asChild
                    variant="outline"
                    className="mb-8 border-neutral-800 text-neutral-400 hover:bg-neutral-900 hover:text-white"
                >
                    <Link href="/blog">
                        <ArrowLeft className="mr-2 h-4 w-4" /> ブログ一覧に戻る
                    </Link>
                </Button>

                <article className="mx-auto max-w-3xl">
                    <header className="mb-10 border-b border-neutral-800 pb-10">
                        <div className="flex items-center gap-3">
                            <span className="rounded-full border border-neutral-700 px-2.5 py-0.5 text-[10px] font-medium text-neutral-400">
                                {post.category}
                            </span>
                            <time className="text-xs tabular-nums text-neutral-500">
                                {post.date}
                            </time>
                            <span className="text-xs text-neutral-600">
                                by {post.author}
                            </span>
                        </div>
                        <h1 className="mt-6 text-2xl font-bold leading-tight text-white md:text-4xl md:leading-tight">
                            {post.title}
                        </h1>
                        <p className="mt-4 text-base leading-relaxed text-neutral-400">
                            {post.description}
                        </p>
                        <div className="mt-5 flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full bg-neutral-900 px-3 py-1 text-xs text-neutral-500"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </header>

                    <div className="prose-custom">
                        {renderContent(post.content)}
                    </div>

                    {/* CTA */}
                    <div className="mt-16 rounded-2xl border border-neutral-800 bg-neutral-950 p-8 text-center">
                        <h3 className="text-lg font-semibold text-white">
                            AIの活用にお悩みですか？
                        </h3>
                        <p className="mx-auto mt-2 max-w-md text-sm text-neutral-400">
                            ZTEXでは、AI導入の相談から実装・定着まで一気通貫でサポートしています。まずはお気軽にご相談ください。
                        </p>
                        <Button
                            asChild
                            className="mt-6 rounded-full bg-white px-8 text-black hover:bg-neutral-200"
                        >
                            <Link href="/contact">無料相談を申し込む</Link>
                        </Button>
                    </div>

                    {/* Related Posts */}
                    {relatedPosts.length > 0 && (
                        <div className="mt-16">
                            <h3 className="mb-6 text-sm font-semibold text-neutral-400">
                                関連記事
                            </h3>
                            <div className="grid gap-4 md:grid-cols-2">
                                {relatedPosts.map((related) => (
                                    <Link
                                        key={related.slug}
                                        href={`/blog/${related.slug}`}
                                        className="group rounded-lg border border-neutral-800 bg-neutral-900/30 p-5 transition-colors hover:border-neutral-700"
                                    >
                                        <span className="text-[10px] text-neutral-500">
                                            {related.category}
                                        </span>
                                        <h4 className="mt-2 text-sm font-medium text-neutral-200 transition-colors group-hover:text-white">
                                            {related.title}
                                        </h4>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </article>
            </div>
        </div>
    );
}
