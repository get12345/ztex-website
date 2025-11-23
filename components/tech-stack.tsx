"use client";

import { cn } from "@/lib/utils";

const technologies = [
    { name: "OpenAI", type: "AI Model" },
    { name: "Anthropic", type: "AI Model" },
    { name: "Google Gemini", type: "AI Model" },
    { name: "n8n", type: "Workflow Automation" },
    { name: "Make", type: "Workflow Automation" },
    { name: "Supabase", type: "Database" },
    { name: "Next.js", type: "Framework" },
    { name: "Vercel", type: "Infrastructure" },
    { name: "Python", type: "Language" },
    { name: "TypeScript", type: "Language" },
    { name: "Stripe", type: "Payment" },
    { name: "Slack", type: "Communication" },
];

export function TechStack() {
    return (
        <section className="border-b border-neutral-900/80 bg-black py-10 overflow-hidden">
            <div className="mb-6 text-center">
                <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                    Supported Technologies
                </p>
            </div>

            <div className="relative flex w-full overflow-hidden py-4">
                {/* Gradients for fade effect */}
                <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-black to-transparent" />
                <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-black to-transparent" />

                {/* Marquee Container */}
                <div className="flex w-max animate-infinite-scroll gap-12 px-12 hover:[animation-play-state:paused]">
                    {/* Original Set */}
                    {technologies.map((tech, idx) => (
                        <div
                            key={tech.name + idx}
                            className="flex items-center gap-3 opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                        >
                            <span className="text-xl font-bold text-neutral-300">{tech.name}</span>
                        </div>
                    ))}

                    {/* Duplicate Set for seamless loop */}
                    {technologies.map((tech, idx) => (
                        <div
                            key={tech.name + "-dup-" + idx}
                            className="flex items-center gap-3 opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                        >
                            <span className="text-xl font-bold text-neutral-300">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
