// components/strengths-section.tsx

const strengths = [
  {
    title: "経営と現場をつなぐ導入設計",
    body: "経営者の「投資対効果」への要求と、現場の「実用性」への懸念。双方の課題を解消し、全社が一丸となって推進できるプロジェクトを設計します。",
  },
  {
    title: "スモールスタートからの段階的展開",
    body: "リスクを最小限に抑えるため、特定の部署・業務から導入を開始。確実な成果を検証した上で適用範囲を拡大する、堅実なステップを提案します。",
  },
  {
    title: "「技術顧問」としての継続的な支援",
    body: "システムの納品で終了せず、技術進歩の速いAI領域のパートナーとして並走。常に最新の知見を提供し、貴社の技術戦略を支え続けます。",
  },
];

export function StrengthsSection() {
  return (
    <section className="border-b border-neutral-900/80">
      <div className="section-inner py-10 md:py-14">
        <p className="section-eyebrow">ADVANTAGE</p>
        <h2 className="section-title">ZTEX が選ばれる理由</h2>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {strengths.map((item) => (
            <div
              key={item.title}
              className="space-y-3 border-l border-neutral-800 pl-4"
            >
              <h3 className="text-sm font-medium text-neutral-100 md:text-base">
                {item.title}
              </h3>
              <p className="section-description text-xs md:text-sm">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
