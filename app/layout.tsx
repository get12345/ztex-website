// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "株式会社ZTEX | 技術を経営の確かな推進力に。",
    template: "%s | 株式会社ZTEX",
  },
  description:
    "AI導入・AXコンサルティングの株式会社ZTEX（ジーテックス）。業務自動化から高度AI実装、AI人材育成まで、経営課題を解決する「実利ある技術」を提供します。仙台・宮城から全国対応。",
  keywords: ["AI導入", "AXコンサルティング", "業務自動化", "DX", "AI研修", "株式会社ZTEX", "ジーテックス"],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "株式会社ZTEX",
  alternateName: "ZTEX Inc.",
  url: "https://ztex-japan.com",
  logo: "https://ztex-japan.com/logo.png",
  description: "AI導入・AXコンサルティングの専門企業。中小企業の経営課題を技術で解決します。",
  foundingDate: "2023-03-07",
  address: {
    "@type": "PostalAddress",
    streetAddress: "福室2丁目8番17号 福室マンション314号",
    addressLocality: "仙台市宮城野区",
    addressRegion: "宮城県",
    postalCode: "983-0005",
    addressCountry: "JP",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "info@ztex-japan.com",
    areaServed: "JP",
    availableLanguage: "Japanese",
  },
  knowsAbout: [
    "Artificial Intelligence",
    "Business Process Automation",
    "Digital Transformation",
    "AX (AI Transformation)",
    "LLM Engineering",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`min-h-screen bg-black text-white ${inter.className}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* 画面全体の黒グラデ背景 */}
        <div className="relative min-h-screen bg-[radial-gradient(circle_at_top,_#181818_0,_#020202_55%,_#000000_100%)]">
          {/* 外枠ライン */}
          <div className="pointer-events-none absolute inset-2 rounded-3xl border border-neutral-900/70" />

          {/* 上部のごく薄いハイライト */}
          <div className="pointer-events-none absolute inset-x-6 top-0 h-16 bg-gradient-to-b from-white/6 via-white/0 to-transparent blur-3xl" />

          {/* コンテンツ本体 */}
          <div className="relative z-10 flex min-h-screen flex-col rounded-3xl border border-neutral-950/80 bg-black/80 shadow-[0_0_120px_rgba(0,0,0,0.9)]">
            {/* ★ 全ページ共通ヘッダー */}
            <Header />

            {/* ★ ページごとの中身（ここに /, /services/..., /company などが入る） */}
            {children}

            {/* ★ 全ページ共通フッター（常に一番下に出す） */}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}


