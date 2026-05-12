// components/header.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const industryLinks = [
  { href: "/industry/construction", label: "建設業向け" },
  { href: "/industry/manufacturing", label: "製造業向け" },
];

const taskLinks = [
  { href: "/task/sales-marketing", label: "営業・マーケティング" },
  { href: "/task/back-office", label: "事務・バックオフィス" },
  { href: "/task/hr", label: "採用・人事・労務" },
  { href: "/task/field-management", label: "現場・プロジェクト管理" },
];

const companyLinks = [
  { href: "/company/philosophy", label: "企業理念" },
  { href: "/company/message", label: "代表挨拶" },
  { href: "/company", label: "会社概要" },
];

// ホーム + ハッシュ でどのページからでもTOPに戻れるようにする
// components/header.tsx の navItems 部分だけ修正

const navItems1 = [
  { href: "/cases", label: "CASES" },
  { href: "/blog", label: "BLOG" },
  { href: "/news", label: "NEWS" },
];

const navItems2 = [
  { href: "/recruit", label: "RECRUIT" },
];
export function Header() {
  const [open, setOpen] = useState(false); // モバイル全体メニュー
  const [isServicesOpen, setIsServicesOpen] = useState(false); // サービスドロップダウン
  const [isCompanyOpen, setIsCompanyOpen] = useState(false); // 会社情報ドロップダウン

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-900/80 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 md:px-6">
        {/* 左：ロゴ */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl md:text-2xl font-bold tracking-[0.35em] text-neutral-300">
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
                aria-haspopup="true"
                aria-expanded={isServicesOpen}
              >
                SERVICES
                <span className="text-xs text-neutral-500" aria-hidden="true">▾</span>
              </button>

              {/* ボタンのすぐ下から少し余白をつけてドロップダウンを出す */}
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full z-50 pt-3 pointer-events-auto"
                  >
                <div className="w-[520px] rounded-xl border border-neutral-800 bg-black/95 shadow-xl shadow-black/80 flex p-3">
                  <div className="w-1/3 flex flex-col border-r border-neutral-800 pr-3">
                    <p className="px-3 py-1.5 text-[11px] font-semibold tracking-wider text-neutral-500">INDUSTRY</p>
                    {industryLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="rounded-md px-3 py-2.5 text-xs text-neutral-200 hover:bg-neutral-900 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                  <div className="w-1/3 flex flex-col border-r border-neutral-800 px-3">
                    <p className="px-3 py-1.5 text-[11px] font-semibold tracking-wider text-neutral-500">TASK</p>
                    {taskLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="rounded-md px-3 py-2.5 text-xs text-neutral-200 hover:bg-neutral-900 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                  <div className="w-1/3 flex flex-col pl-3">
                    <p className="px-3 py-1.5 text-[11px] font-semibold tracking-wider text-neutral-500">TRAINING</p>
                    <Link
                      href="/services/training"
                      className="rounded-md px-3 py-2.5 text-xs text-neutral-200 hover:bg-neutral-900 transition-colors"
                    >
                      AI教育研修
                    </Link>
                  </div>
                </div>
              </motion.div>
              )}
              </AnimatePresence>
            </div>
            {navItems1.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-neutral-50 transition-colors"
              >
                {item.label}
              </Link>
            ))}

            {/* ▼ 会社情報 ドロップダウン */}
            <div
              className="relative"
              onMouseEnter={() => setIsCompanyOpen(true)}
              onMouseLeave={() => setIsCompanyOpen(false)}
            >
              <button 
                type="button" 
                className="inline-flex items-center gap-1 text-[13px] text-neutral-300 hover:text-neutral-50 transition-colors"
                aria-haspopup="true"
                aria-expanded={isCompanyOpen}
              >
                COMPANY
                <span className="text-xs text-neutral-500" aria-hidden="true">▾</span>
              </button>

              {/* ボタンのすぐ下から少し余白をつけてドロップダウンを出す */}
              <AnimatePresence>
                {isCompanyOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full z-50 pt-3 pointer-events-auto"
                  >
                <div className="w-40 rounded-xl border border-neutral-800 bg-black/95 shadow-xl shadow-black/80 flex flex-col p-2">
                  {companyLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-md px-3 py-2 text-xs text-neutral-200 hover:bg-neutral-900 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
              )}
              </AnimatePresence>
            </div>

            {/* その他メニュー 後半 */}
            {navItems2.map((item) => (
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
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={open}
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
      <AnimatePresence>
      {open && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="border-t border-neutral-900 bg-black/95 md:hidden overflow-hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-3 text-sm text-neutral-200">
            {/* TOP */}
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="py-1.5 font-medium text-neutral-300"
            >
              TOP
            </Link>

            {/* Services (Industry & Task & Training) */}
            <p className="mt-2 text-[11px] font-medium text-neutral-500">
              INDUSTRY
            </p>
            <div className="mt-1 flex flex-col gap-1 pl-2 border-l border-neutral-800">
              {industryLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-1.5 text-[13px]"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <p className="mt-3 text-[11px] font-medium text-neutral-500">
              TASK
            </p>
            <div className="mt-1 flex flex-col gap-1 pl-2 border-l border-neutral-800">
              {taskLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-1.5 text-[13px]"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <p className="mt-3 text-[11px] font-medium text-neutral-500">
              TRAINING
            </p>
            <div className="mt-1 flex flex-col gap-1 pl-2 border-l border-neutral-800">
              <Link
                href="/services/training"
                onClick={() => setOpen(false)}
                className="py-1.5 text-[13px]"
              >
                AI教育研修
              </Link>
            </div>

            <div className="mt-3 flex flex-col gap-1">
              {navItems1.map((item) => (
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

            {/* Company */}
            <p className="mt-3 text-[11px] font-medium text-neutral-500">
              COMPANY
            </p>
            <div className="mt-1 flex flex-col gap-1 pl-2 border-l border-neutral-800">
              {companyLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-1.5 text-[13px]"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* その他ナビ 後半 */}
            <div className="mt-3 flex flex-col gap-1">
              {navItems2.map((item) => (
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
        </motion.div>
      )}
      </AnimatePresence>
    </header>
  );
}
