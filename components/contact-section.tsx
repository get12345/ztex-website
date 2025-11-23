"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-neutral-900 bg-black py-24 md:py-32">
      <div className="container mx-auto px-4 text-center md:px-6">
        <div className="mx-auto max-w-2xl space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              CONTACT
            </h2>
            <p className="text-neutral-400 md:text-lg">
              AI導入、業務自動化、Web制作など<br />
              お気軽にご相談ください。
            </p>
          </div>

          <Button
            asChild
            className="h-14 rounded-full bg-white px-10 text-base font-medium text-black transition-all hover:bg-neutral-200 hover:scale-105"
          >
            <Link href="/contact">
              お問い合わせフォームへ
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
