// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "株式会社ZTEX | 自由に生きる人の、やわらかなフレームになる。",
  description:
    "株式会社ZTEXは、AI × 自動化 × デザインで、中小企業・個人事業主・店舗の時間に余白を生み出すクリエイティブパートナーです。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`min-h-screen bg-black text-white ${inter.className}`}>
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
            <main className="flex-1">
              {children}
            </main>

            {/* ★ 全ページ共通フッター（常に一番下に出す） */}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}


