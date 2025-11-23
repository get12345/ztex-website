import Link from "next/link";
import { Button } from "@/components/ui/button";
import { newsItems } from "@/lib/data";
import { ArrowLeft } from "lucide-react";


export default function NewsPage() {
    return (
        <main className="min-h-screen bg-black text-neutral-50">
            <div className="mx-auto max-w-4xl px-4 py-20 md:px-6 lg:py-28">
                <div className="mb-12">
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
                    <h1 className="mt-6 text-3xl font-bold tracking-tight md:text-4xl">NEWS</h1>
                    <p className="mt-4 text-neutral-400">最新のお知らせ</p>
                </div>

                <div className="space-y-6">
                    {newsItems.map((item, i) => (
                        <article key={i} className="flex flex-col gap-2 border-b border-neutral-800 pb-6 sm:flex-row sm:items-baseline sm:gap-8">
                            <time className="text-sm font-mono text-neutral-500 shrink-0">{item.date}</time>
                            <div className="flex flex-col gap-2">
                                <span className="inline-block w-fit rounded bg-neutral-900 px-2 py-0.5 text-[10px] font-medium text-neutral-400 border border-neutral-800">
                                    {item.category}
                                </span>
                                <h2 className="text-base font-medium text-neutral-200 hover:text-white transition-colors">
                                    {item.title}
                                </h2>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    );
}
