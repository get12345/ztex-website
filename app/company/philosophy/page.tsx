import { Metadata } from "next";

export const metadata: Metadata = {
  title: "企業理念・ビジョン | 株式会社ZTEX",
  description:
    "株式会社ZTEX（ジーテックス）の企業理念、ミッション、ビジョンをご紹介します。AI技術の力で、人が本来やるべき価値ある仕事に集中できる社会を実現します。",
  keywords: ["株式会社ZTEX", "企業理念", "ミッション", "ビジョン", "AI導入"],
  openGraph: {
    title: "企業理念・ビジョン | 株式会社ZTEX",
    description: "株式会社ZTEXの企業理念、ミッション、ビジョンをご紹介します。",
  },
    alternates: {
        canonical: "/company/philosophy",
    },
};

export default function PhilosophyPage() {
  return (
    <div className="min-h-screen bg-black text-neutral-50 pb-20">
      <div className="section-inner pt-16 md:pt-20 mt-16">
        <p className="section-eyebrow">PHILOSOPHY</p>
        <h1 className="mt-3 text-3xl font-semibold md:text-4xl mb-16">理念・ミッション・ビジョン</h1>

        <section className="mb-24">
          <div className="space-y-16">
            <div>
              <h2 className="text-[13px] uppercase tracking-[0.2em] text-neutral-500 mb-2">
                Philosophy
              </h2>
              <p className="text-lg font-medium text-neutral-200 mb-4 tracking-wider">
                自由に生きられる世界を創る
              </p>
              <p className="text-sm leading-relaxed text-neutral-400 max-w-2xl">
                AI技術の力で、人が本来やるべき価値ある仕事に集中できる社会を実現します。
                <br />
                <br />
                単純作業や属人化された業務から解放され、誰もが自分らしく働き、生きられる世界を。
              </p>
            </div>

            <div>
              <h2 className="text-[13px] uppercase tracking-[0.2em] text-neutral-500 mb-2">
                Mission
              </h2>
              <p className="text-lg font-medium text-neutral-200 mb-4 tracking-wider">
                AIの力で日本の中小企業の生産性を最大化する
              </p>
              <p className="text-sm leading-relaxed text-neutral-400 max-w-2xl">
                宮城を拠点に、全国の中小企業に対し、業務効率化・自動化の支援を行っています。
                <br />
                <br />
                現場に直接足を運び、課題や温度感を正確に把握した上で、費用対効果まで明確にした&quot;実行可能なAI導入&quot;を提供します。
                <br />
                <br />
                対応業種は建設・リフォーム業、不動産業、営業会社、介護業をはじめ、業種を問わず幅広くご支援が可能です。
              </p>
            </div>

            <div>
              <h2 className="text-[13px] uppercase tracking-[0.2em] text-neutral-500 mb-2">
                Vision
              </h2>
              <p className="text-lg font-medium text-neutral-200 mb-4 tracking-wider">
                2030年、東北から「人手不足」という言葉をなくす
              </p>
              <p className="text-sm leading-relaxed text-neutral-400 max-w-2xl">
                少子高齢化が全国でも特に進む東北において、AIによる業務の標準化・可視化・自動化を推進し、人が足りなくても回る仕組みを、一社ずつ確実に築いていく。
                <br />
                <br />
                その積み重ねが、東北全体の働き方を変え、地域の持続可能な経済を支える力になると信じています。
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
