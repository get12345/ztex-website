// components/flow-section.tsx

const steps = [
  {
    label: "STEP 01",
    title: "お問い合わせ（オンライン）",
    body: "現状のお困りごと・理想の姿・予算感などをざっくばらんにお聞きします。",
  },
  {
    label: "STEP 02",
    title: "現状整理 & ラフな設計",
    body: "業務フロー・使用ツール・データの流れを書き出し、「どこから手を付けるのが良さそうか」を一緒に決めます。",
  },
  {
    label: "STEP 03",
    title: "詳細設計 & 実装",
    body: "必要に応じてPoC（小さな実験）から実施し、確実に効果が出そうな部分から仕組み化していきます。",
  },
  {
    label: "STEP 04",
    title: "運用フォロー & 改善",
    body: "導入後もしばらくはチャットや定例でフォロー。現場の声を取り入れながら、少しずつ精度を高めます。",
  },
];

export function FlowSection() {
  return (
    <section className="border-b border-neutral-900/80">
      <div className="section-inner py-10 md:py-14">
        <p className="section-eyebrow">FLOW</p>
        <h2 className="section-title">制作・導入の流れ</h2>

        <ol className="mt-6 space-y-5 text-sm text-neutral-400">
          {steps.map((step) => (
            <li
              key={step.label}
              className="flex flex-col gap-2 border-l border-neutral-800 pl-4 md:flex-row md:gap-4"
            >
              <div className="text-[11px] uppercase tracking-[0.25em] text-neutral-500">
                {step.label}
              </div>
              <div>
                <p className="text-sm text-neutral-100 md:text-base">
                  {step.title}
                </p>
                <p className="section-description mt-1">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
