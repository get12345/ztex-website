import Image from "next/image";
import { casesData } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export default function CasesPage() {
    return (
        <main className="min-h-screen bg-black pt-24 pb-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-16 text-center">
                    <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                        CASES
                    </h1>
                    <p className="text-neutral-400">
                        ZTEXの導入事例をご紹介します。
                    </p>
                </div>

                <div className="mx-auto max-w-5xl space-y-20">
                    {casesData.map((item, idx) => (
                        <div
                            key={idx}
                            className="group relative flex flex-col gap-8 overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/30 p-6 md:flex-row md:items-center md:p-8"
                        >
                            {/* Image */}
                            <div className="relative aspect-video w-full overflow-hidden rounded-xl md:w-1/2">
                                <div className="absolute inset-0 bg-neutral-800 animate-pulse" />
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col justify-center space-y-4 md:w-1/2">
                                <div>
                                    <Badge variant="outline" className="mb-3 border-neutral-700 text-neutral-400">
                                        {item.label}
                                    </Badge>
                                    <h2 className="text-2xl font-bold text-white md:text-3xl">
                                        {item.title}
                                    </h2>
                                </div>

                                <p className="text-lg font-medium text-neutral-200">
                                    {item.body}
                                </p>

                                <div className="border-t border-neutral-800 pt-4">
                                    <p className="text-sm leading-relaxed text-neutral-400">
                                        {item.detail}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
