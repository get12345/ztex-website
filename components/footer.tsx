// components/footer.tsx
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-neutral-900/80 bg-black pt-12 pb-8">
      <div className="section-inner grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div className="col-span-2 md:col-span-1">
          <p className="text-xl tracking-[0.35em] text-neutral-300 mb-4">ZTEX</p>
          <p className="text-xs leading-relaxed text-neutral-500">
            技術を経営の確かな推進力に。<br />
            宮城・仙台から全国のDX・AXを支援。
          </p>
        </div>
        
        <div className="flex flex-col gap-2">
          <p className="text-[11px] font-semibold tracking-wider text-neutral-500 mb-2">INDUSTRY</p>
          <Link href="/industry/construction" className="text-xs text-neutral-300 hover:text-neutral-100 transition-colors">建設業向け自動化</Link>
          <Link href="/industry/manufacturing" className="text-xs text-neutral-300 hover:text-neutral-100 transition-colors">製造業向け自動化</Link>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-[11px] font-semibold tracking-wider text-neutral-500 mb-2">TASK</p>
          <Link href="/task/sales-marketing" className="text-xs text-neutral-300 hover:text-neutral-100 transition-colors">営業・マーケティング</Link>
          <Link href="/task/back-office" className="text-xs text-neutral-300 hover:text-neutral-100 transition-colors">事務・バックオフィス</Link>
          <Link href="/task/hr" className="text-xs text-neutral-300 hover:text-neutral-100 transition-colors">採用・労務・人事</Link>
          <Link href="/task/field-management" className="text-xs text-neutral-300 hover:text-neutral-100 transition-colors">現場・プロジェクト管理</Link>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-[11px] font-semibold tracking-wider text-neutral-500 mb-2">ABOUT</p>
          <Link href="/services/training" className="text-xs text-neutral-300 hover:text-neutral-100 transition-colors">AI人材育成研修</Link>
          <Link href="/cases" className="text-xs text-neutral-300 hover:text-neutral-100 transition-colors">導入事例</Link>
          <Link href="/blog" className="text-xs text-neutral-300 hover:text-neutral-100 transition-colors">ブログ</Link>
          <Link href="/company" className="text-xs text-neutral-300 hover:text-neutral-100 transition-colors">会社概要</Link>
          <Link href="/legal/tokushoho" className="text-xs text-neutral-300 hover:text-neutral-100 transition-colors">特定商取引法に基づく表記</Link>
          <Link href="/legal/privacy" className="text-xs text-neutral-300 hover:text-neutral-100 transition-colors">プライバシーポリシー</Link>
        </div>
      </div>

      <div className="border-t border-neutral-900/80 pt-8">
        <div className="section-inner flex flex-col md:flex-row items-center justify-between text-[10px] text-neutral-600">
          <div className="flex gap-4">
            <p>Operated by 株式会社ZTEX</p>
          </div>
          <p className="mt-4 md:mt-0">© {new Date().getFullYear()} ZTEX Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
