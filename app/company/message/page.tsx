import { Metadata } from "next";

export const metadata: Metadata = {
  title: "代表挨拶 | 株式会社ZTEX",
  description:
    "株式会社ZTEX（ジーテックス）代表取締役からのメッセージ。創業の経緯や、東北の中小企業へのAI導入に向けた想いをお伝えします。",
  keywords: ["株式会社ZTEX", "代表挨拶", "AI導入", "メッセージ"],
  openGraph: {
    title: "代表挨拶 | 株式会社ZTEX",
    description: "株式会社ZTEX代表取締役からのメッセージ。",
  },
    alternates: {
        canonical: "/company/message",
    },
};

export default function MessagePage() {
  return (
    <div className="min-h-screen bg-black text-neutral-50 pb-20">
      <div className="section-inner pt-16 md:pt-20 mt-16">
        <p className="section-eyebrow">MESSAGE</p>
        <h1 className="mt-3 text-3xl font-semibold md:text-4xl mb-16">代表挨拶</h1>

        <section className="mb-24">
          <div className="max-w-3xl space-y-6 text-[15px] leading-8 text-neutral-300">
            <p>
              この度は株式会社ZTEXのホームページをご覧いただき、誠にありがとうございます。
            </p>
            <p>
              当社は2023年3月、仙台にて3名で創業いたしました。
              創業当初はブロックチェーン技術を活用した複数店舗間ポイント交換サービスの開発に取り組んでおりましたが、事業を進める中で「技術だけでは、現場の課題は解決できない」という壁に直面しました。
            </p>
            <p>この経験が、私たちの転機となりました。</p>
            <p>
              技術ありきではなく、現場の業務課題から逆算して最適な解決策を設計する。このアプローチに切り替えたことで、アプリ開発、AIを活用した画像認識システム、基幹システム構築など、クライアントの実務に直結するシステム受託開発を手がけるようになりました。
            </p>
            <p>
              そして2025年、AI事業へ本格参入。現在は全国の中小企業に対し、AI導入による業務効率化支援を主軸事業としております。
            </p>
            <p>
              私自身は、2020年に内閣府のムーンショット計画の記事に出会い、「AIが人間と同等以上の知能を獲得する未来」に強い確信を持ちました。そこからPythonを専門としたプログラミングスクールの運営を経て（受講生約10名）、ChatGPTの登場をきっかけに、より本格的にAI事業へ舵を切りました。
            </p>
            <p>
              技術面では、日本語LLM（llm-jp）を用いたモデル開発やファインチューニング、誤差逆伝播によるモデルの最適化、画像生成AIにおけるサンプリング手法やパラメータ調整など、AIの&quot;中身&quot;を理解した上での開発を行ってきました。
            </p>
            <p>
              だからこそ、単なるツール導入ではなく、「なぜこのAIが最適なのか」「どう設定すれば成果が出るのか」という根本から設計・改善できることが当社の強みです。
            </p>
            <p>
              当社は東北出身のメンバーで構成されており、地域特有の価値観や人とのつながりを大切にしています。実際に現場へ足を運び、課題や温度感を肌で感じ取りながら、現実的かつ成果の出る提案を行っております。
            </p>
            <p>
              これまでに30社以上の企業様へAI導入支援を行い、業務時間の最大80%以上削減、月間60〜100時間の業務削減を実現。継続契約率は9割以上を維持しております。
            </p>
            <div className="my-10 pl-5 border-l-2 border-neutral-600">
              <p className="text-neutral-100 text-lg sm:text-xl font-medium tracking-wider">
                「現場と先端技術の組み合わせから、自由に生きられる世界を創る」
              </p>
            </div>
            <p>
              この信念のもと、AIを通じて企業と地域社会に価値を提供し続けてまいります。
            </p>
            <p className="mt-12 text-right text-neutral-400">代表取締役</p>
          </div>
        </section>
      </div>
    </div>
  );
}
