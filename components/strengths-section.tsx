// components/strengths-section.tsx

const strengths = [
  {
    title: "現場と経営、両方の目線で設計",
    body: "経営者・現場メンバー・クリエイター、それぞれの立場の“しんどさ”を聞き分け、誰か一人だけが我慢しない設計を心がけています。",
  },
  {
    title: "小さく始めて、静かに広げる",
    body: "いきなり全社導入ではなく、1部門・1業務から。成功体験を積みながら、少しずつ仕組みを横展開していきます。",
  },
  {
    title: "AI教育とセットの伴走型",
    body: "ただ仕組みを納品するのではなく、「使い方」をチームに定着させるところまでサポート。内製化の芽を育てます。",
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
