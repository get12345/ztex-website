// components/footer.tsx
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-neutral-900/80 bg-black">
      <div className="section-inner flex flex-col gap-6 py-8 text-xs text-neutral-500 md:flex-row md:items-center md:justify-between">
        {/* 左側：ロゴ・運営会社 */}
        <div className="space-y-2">
          <p className="text-[11px] tracking-[0.25em] text-neutral-400">
            ZTEX
          </p>
          <div className="space-y-1 text-[10px] text-neutral-600">
            <p>Operated by 株式会社ZTEX</p>
            <p>© {new Date().getFullYear()} ZTEX Inc. All rights reserved.</p>
          </div>
        </div>

        {/* 右側：各種リンク */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <Link
            href="/company"
            className="text-[11px] text-neutral-400 hover:text-neutral-100 transition-colors"
          >
            会社概要
          </Link>
          <Link
            href="/legal/tokushoho"
            className="text-[11px] text-neutral-400 hover:text-neutral-100 transition-colors"
          >
            特定商取引法に基づく表記
          </Link>
          <Link
            href="/legal/privacy"
            className="text-[11px] text-neutral-400 hover:text-neutral-100 transition-colors"
          >
            プライバシーポリシー
          </Link>
        </div>
      </div>
    </footer>
  );
}
