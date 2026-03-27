import { Metadata } from "next";
import { PricingSection } from "@/components/pricing-section";
import { FAQSection } from "@/components/faq-section";
import { AlertCircle, UserPlus, CalendarDays, BookOpen, Bot } from "lucide-react";

export const metadata: Metadata = {
  title: "採用・人事のAI業務自動化 | 株式会社ZTEX",
  description: "採用活動に時間を割けない担当者・小規模企業向け。スカウト文面自動生成、面接調整、社内ヘルプデスクAIで採用から定着までを効率化。",
  keywords: ["採用自動化", "人事AI", "スカウト自動化", "社内ヘルプデスクAI", "ZTEX", "仙台", "HRテック"],
  openGraph: {
    title: "採用・人事のAI業務自動化 | 株式会社ZTEX",
    description: "少人数の人事・採用担当者向け。スカウト作成から社内FAQ対応まで、コア業務に集中できるHRワークフローを構築します。",
  },
    alternates: {
        canonical: "/task/hr",
    },
};

const faqs = [
  {
    question: "AIが書いたスカウト文は「機械的」になりませんか？",
    answer: "自社の魅力（強み、社風、待遇）と、候補者のレジュメ（経歴・スキル）をプロンプトで適切に掛け合わせることで、驚くほどパーソナライズされた、熱意の伝わるスカウト文面を生成できます。最終的な確認・微調整のみ担当者が行う形をお勧めしています。",
  },
  {
    question: "応募者の個人情報をAIに読み込ませるのはセキュリティ上不安です。",
    answer: "入力データを学習に利用しない設定（エンタープライズ向けのAPI利用など）を施したLLMモデルを使用するため、候補者の個人情報が外部で学習データとして使われることはありません。",
  },
  {
    question: "自社専用の社内ヘルプデスク（RAG）を作るには手間がかかりますか？",
    answer: "既存のPDF形式の就業規則や、Wordの社内マニュアル、過去のQ&A集のスプレッドシートがあれば、それらを取り込むだけで初期構築が行えます。導入後のメンテナンスもチャットベースで簡単に行える仕組みを構築します。",
  },
];

export default function HRTaskPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "採用・人事のAI業務自動化",
    provider: {
      "@type": "Organization",
      name: "株式会社ZTEX",
      url: "https://ztex-japan.com",
    },
    description: "採用活動に時間を割けない担当者向け。スカウト文面の生成、日程調整、社内ルールのAIチャットボット化で人事業務を効率化。",
    areaServed: "JP",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-black text-neutral-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="section-inner py-16 md:py-20 mt-16">
        <p className="section-eyebrow">TASK 03 — HR / RECRUITING</p>

        <h1 className="mt-3 text-2xl font-semibold md:text-3xl lg:text-4xl">
          採用担当を「面接・定着活動」に集中させる。<br className="hidden md:block" />
          <span className="text-neutral-400">採用・労務・人事のAI業務自動化</span>
        </h1>
        <p className="mt-6 max-w-2xl text-sm text-neutral-300 md:text-base leading-relaxed">
          採用難の時代、人事担当者は応募者に少しでも早く、熱意を持ってアプローチしなければなりません。しかし、スカウトメールの作成や日程調整、社員からの問い合わせ対応など「作業」に忙殺されているのが現状です。<br />
          ZTEXのAI導入支援により、作業を自動化し「候補者との面接」「社員のケア」など人間にしかできないコア業務に時間を使える環境を作ります。
        </p>

        <div className="mt-12 w-full lg:max-w-4xl mx-auto rounded-xl border border-neutral-800 bg-neutral-900/30 p-6 md:p-8">
          <h2 className="text-lg font-semibold text-neutral-100 md:text-xl border-l-4 border-white pl-4 mb-6">
            採用・人事部門の「悩み」
          </h2>
          <ul className="space-y-4 text-sm md:text-base text-neutral-300">
            <li className="flex items-start gap-3">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
              ダイレクトリクルーティングで候補者一人ひとりに合わせたスカウト文を作るのに多大な時間がかかっている…
            </li>
            <li className="flex items-start gap-3">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
              応募者との面接日程の調整メールのやり取りが煩雑で、対応が遅れて他社に取られてしまう。
            </li>
            <li className="flex items-start gap-3">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
              「有給の取得方法は？」「経費精算のルールは？」といった社員からの同じような定型質問に、都度対応している。
            </li>
            <li className="flex items-start gap-3">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
              人事専任の担当者がおらず（あるいは1名しかおらず）、採用活動自体が属人化し現場が回っていない。
            </li>
          </ul>
        </div>

        {/* AI Solutions */}
        <div className="mt-20">
          <h2 className="text-xl font-semibold text-neutral-100 md:text-2xl mb-8">
            ZTEXが提供する自動化ソリューション
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            
            <div className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 p-6 hover:border-neutral-700 transition-colors">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900 border border-neutral-800">
                 <UserPlus className="h-5 w-5 text-neutral-400" />
              </div>
              <h3 className="mb-3 text-lg font-medium text-neutral-100">
                スカウト文面のAI自動パーソナライズ
              </h3>
              <p className="text-sm leading-relaxed text-neutral-400">
                候補者のレジュメ（職務経歴書）と、自社の魅力・求める人物像をAIに入力。「なぜあなたにスカウトを送ったのか」が伝わる、個別に最適化された（パーソナライズされた）熱意あるスカウト文面を1分で自動作成します。
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 p-6 hover:border-neutral-700 transition-colors">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900 border border-neutral-800">
                 <CalendarDays className="h-5 w-5 text-neutral-400" />
              </div>
              <h3 className="mb-3 text-lg font-medium text-neutral-100">
                応募者への面接日程調整の自動化
              </h3>
              <p className="text-sm leading-relaxed text-neutral-400">
                書類選考を通過した応募者に対し、n8nを経由してGoogleカレンダー等と連携した「空き日程調整ツール」のURLを自動送信。日程が確定すると、関係者のカレンダー登録と同席者へのSlack通知、Web会議URLの発行までを裏側で全自動処理します。
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 p-6 hover:border-neutral-700 transition-colors">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900 border border-neutral-800">
                 <Bot className="h-5 w-5 text-neutral-400" />
              </div>
              <h3 className="mb-3 text-lg font-medium text-neutral-100">
                社内ヘルプデスクAI（RAGチャットボット）
              </h3>
              <p className="text-sm leading-relaxed text-neutral-400">
                就業規則、経費精算マニュアル、福利厚生のルール、過去のよくある質問（FAQ）をデータ化し自社専用のAIに学習。社員が「出張旅費の精算方法は？」とチャットで聞けば、24時間365日いつでもAIが社内規程に基づいて即答します。
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 p-6 hover:border-neutral-700 transition-colors">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900 border border-neutral-800">
                 <BookOpen className="h-5 w-5 text-neutral-400" />
              </div>
              <h3 className="mb-3 text-lg font-medium text-neutral-100">
                採用対応・入社手続き状況の可視化
              </h3>
              <p className="text-sm leading-relaxed text-neutral-400">
                複数の求人媒体からの応募者情報を、AIとn8nで一元化してNotionやKintoneへ自動集約。選考ステータスや、内定後の入社手続き（アカウント発行や備品手配など）のタスク漏れを防ぐリマインドシステムを構築します。
              </p>
            </div>

          </div>
        </div>

      </div>

      <PricingSection type="consult" />
      <FAQSection items={faqs} />
    </div>
  );
}
