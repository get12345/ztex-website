import React from "react";

const performanceData = [
  { label: "導入企業数", value: "30社以上" },
  { label: "最大業務削減率", value: "80%以上" },
  { label: "月間業務削減時間", value: "60〜100時間" },
  { label: "継続契約率", value: "9割以上" },
  { label: "対応エリア", value: "全国対応（本社：仙台）" },
  { label: "対応業種", value: "建設・不動産・営業・介護 ほか業種不問" },
];

export function PerformanceSection() {
  return (
    <section className="bg-black text-neutral-50 py-16 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="mb-12 md:mb-20 text-center">
          <p className="section-eyebrow">PERFORMANCE</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">実績サマリー</h2>
        </div>

        <div className="mx-auto max-w-4xl">
          <dl className="divide-y divide-neutral-800 border-t border-b border-neutral-800">
            {performanceData.map((item) => (
              <div key={item.label} className="grid grid-cols-1 gap-4 py-6 md:grid-cols-3">
                <dt className="font-medium text-[15px] text-neutral-400">{item.label}</dt>
                <dd className="text-neutral-200 md:col-span-2 font-medium text-lg">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
