"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

import { casesData } from "@/lib/data";


export function CasesSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!scrollerRef.current) return;
    setStart(true);
  }, []);

  return (
    <section id="cases" className="border-b border-neutral-900/80 overflow-hidden">
      <div className="py-10 md:py-14">
        <div className="section-inner mb-10">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="section-eyebrow">CASES</p>
              <h2 className="section-title">ZTEX の導入イメージ</h2>
            </div>
            <p className="section-description max-w-md">
              個人情報や守秘義務の関係で、ここではイメージベースで紹介しています。
              実際のお打ち合わせでは、業種・規模・既存ツールを踏まえて、
              具体的なフロー図や概算コストまで一緒に整理します。
            </p>
          </div>
        </div>

        {/* Cases Container */}
        <div
          ref={scrollerRef}
          className={cn(
            "w-full",
            // Mobile: Manual Scroll
            "overflow-x-auto snap-x snap-mandatory scrollbar-hide",
            // Desktop: Infinite Scroll Mask
            "md:overflow-hidden md:[mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]"
          )}
        >
          <div
            className={cn(
              "flex gap-6 py-4",
              // Mobile: Padding & Width
              "w-max px-4",
              // Desktop: Animation
              "md:w-max md:px-0 md:animate-infinite-scroll hover:[animation-play-state:paused]"
            )}
          >
            {/* Original Items */}
            {casesData.map((item, idx) => (
              <Card
                key={item.title + idx}
                className="flex w-[85vw] md:w-[400px] flex-col shrink-0 overflow-hidden border-neutral-800/80 bg-neutral-950/60 text-neutral-100 shadow-[0_0_30px_rgba(0,0,0,0.6)] snap-center"
              >
                <div className="relative h-48 w-full bg-neutral-900">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover opacity-80 transition-opacity hover:opacity-100"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <CardHeader className="p-0 mb-3 space-y-1">
                    <p className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                      {item.label}
                    </p>
                    <CardTitle className="text-sm md:text-base leading-snug">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {item.body}
                    </p>
                  </CardContent>
                </div>
              </Card>
            ))}

            {/* Duplicates for Infinite Scroll (Desktop Only) */}
            {casesData.map((item, idx) => (
              <Card
                key={item.title + "-dup-" + idx}
                className="hidden md:flex w-[400px] flex-col shrink-0 overflow-hidden border-neutral-800/80 bg-neutral-950/60 text-neutral-100 shadow-[0_0_30px_rgba(0,0,0,0.6)]"
              >
                <div className="relative h-48 w-full bg-neutral-900">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover opacity-80 transition-opacity hover:opacity-100"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <CardHeader className="p-0 mb-3 space-y-1">
                    <p className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                      {item.label}
                    </p>
                    <CardTitle className="text-sm md:text-base leading-snug">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {item.body}
                    </p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
