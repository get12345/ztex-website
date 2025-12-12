// app/company/page.tsx

export default function CompanyPage() {
  return (
    <main className="min-h-screen bg-black text-neutral-50">
      <div className="section-inner py-16 md:py-20">
        <p className="section-eyebrow">COMPANY</p>

        <h1 className="mt-3 text-3xl font-semibold md:text-4xl">
          会社概要
        </h1>

        {/* ここに会社情報を並べていく */}
        <div className="mt-8">
          <dl className="divide-y divide-neutral-800 border-t border-neutral-800">
            <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-3">
              <dt className="font-medium text-neutral-400">会社名</dt>
              <dd className="text-neutral-200 md:col-span-2">株式会社ZTEX (ジーテックス)</dd>
            </div>
            <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-3">
              <dt className="font-medium text-neutral-400">所在地</dt>
              <dd className="text-neutral-200 md:col-span-2">
                〒983-0005
                <br />
                宮城県仙台市宮城野区福室2丁目8番17号 福室マンション314号
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-3">
              <dt className="font-medium text-neutral-400">設立</dt>
              <dd className="text-neutral-200 md:col-span-2">2023年3月7日</dd>
            </div>
            <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-3">
              <dt className="font-medium text-neutral-400">資本金</dt>
              <dd className="text-neutral-200 md:col-span-2">5,000,000円</dd>
            </div>

            <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-3">
              <dt className="font-medium text-neutral-400">事業内容</dt>
              <dd className="text-neutral-200 md:col-span-2">
                システム開発 / AI導入支援 / AXコンサルティング / Web制作
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-3">
              <dt className="font-medium text-neutral-400">営業時間</dt>
              <dd className="text-neutral-200 md:col-span-2">
                10:00〜18:00（土日・祝日を除く）
              </dd>
            </div>
          </dl>
        </div>
      </div >
    </main >
  );
}
