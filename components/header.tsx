// components/header.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const serviceLinks = [
  {
    href: "/services/automation",
    label: "AI Automation Design",
  },
  {
    href: "/services/training",
    label: "AI Training & Reskilling Program",
  },
  {
    href: "/services/model-engineering",
    label: "AI Model Engineering Lab",
  },
  {
    href: "/services/creative-intelligence",
    label: "AI Creative Intelligence Studio",
  },
];

// ホーム + ハッシュ でどのページからでもTOPに戻れるようにする
// components/header.tsx の navItems 部分だけ修正

const navItems = [
  { href: "/cases", label: "CASES" },
  { href: "/news", label: "NEWS" },
  { href: "/company", label: "COMPANY" },
  { href: "/recruit", label: "RECRUIT" },
];
export function Header() {
  const [open, setOpen] = useState(false); // モバイル全体メニュー
  const [isServicesOpen, setIsServicesOpen] = useState(false); // サービスドロップダウン

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-900/80 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 md:px-6">
        {/* 左：ロゴ */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-sm tracking-[0.35em] text-neutral-300">
            ZTEX
          </span>
        </Link>

        {/* 右側 */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* ▼ デスクトップナビ */}
          <nav className="hidden items-center gap-5 text-[13px] text-neutral-300 md:flex">
            {/* TOP Link */}
            <Link
              href="/"
              className="hover:text-neutral-50 transition-colors"
            >
              TOP
            </Link>

            {/* ▼ サービス ドロップダウン（ホバーで開閉しやすく調整） */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                type="button"
                className="inline-flex items-center gap-1 text-[13px] text-neutral-300 hover:text-neutral-50 transition-colors"
              >
                SERVICES
                <span className="text-xs text-neutral-500">▾</span>
              </button>

              {/* ボタンのすぐ下から少し余白をつけてドロップダウンを出す */}
              <div
                className={`
        absolute right-0 top-full z-50 pt-2
        transition-all duration-150
        ${isServicesOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"}
      `}
              >
                <div className="w-64 rounded-xl border border-neutral-800 bg-black/95 shadow-xl shadow-black/70">
                  <div className="flex flex-col py-2">
                    {serviceLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="px-4 py-2.5 text-sm text-neutral-200 hover:bg-neutral-900"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* その他メニュー */}
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-neutral-50 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* デスクトップ CTA（TOPの contact セクションへ） */}
          <Button
            asChild
            variant="outline"
            className="hidden h-9 rounded-full border-neutral-600 bg-transparent px-5 text-[12px] text-neutral-100 hover:bg-neutral-900 md:inline-flex"
          >
            <Link href="/contact">CONTACT</Link>
          </Button>

          {/* ▼ モバイル：ハンバーガー（PCでは非表示） */}
          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-700 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="メニューを開く"
          >
            <span className="flex flex-col items-center justify-center gap-[3px]">
              <span className="block h-[1.5px] w-4 rounded-full bg-neutral-100" />
              <span className="block h-[1.5px] w-4 rounded-full bg-neutral-100" />
              <span className="block h-[1.5px] w-4 rounded-full bg-neutral-100" />
            </span>
          </button>
        </div>
      </div>

      {/* ▼ モバイル用ドロワーメニュー */}
      {open && (
        <div className="border-t border-neutral-900 bg-black/95 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-3 text-sm text-neutral-200">
            {/* TOP */}
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="py-1.5 font-medium text-neutral-300"
            >
              TOP
            </Link>

            {/* Services */}
            <p className="mt-1 text-[11px] font-medium text-neutral-500">
              SERVICES
            </p>
            <div className="mt-1 flex flex-col gap-1">
              {serviceLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-1.5"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* その他ナビ */}
            <div className="mt-3 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-1.5"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* モバイル用 CTA も TOP の contact へ */}
            <Button
              asChild
              variant="outline"
              className="mt-3 rounded-full border-neutral-600 bg-transparent text-xs text-neutral-100 hover:bg-neutral-900"
            >
              <Link href="/contact" onClick={() => setOpen(false)}>
                CONTACT
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
