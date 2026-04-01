import { Metadata } from "next";
import { PricingSection } from "@/components/pricing-section";
import { FAQSection } from "@/components/faq-section";
import { AlertCircle, FileText, Smartphone, ClipboardCheck, Bot } from "lucide-react";

export const metadata: Metadata = {
  title: "建設業向けAI業務自動化ソリューション | 株式会社ZTEX",
  description: "宮城・東北の建設業界向け。図面からの積算支援、工事写真台帳の自動生成、施工計画書のドラフト作成など、現場監督の「パソコン仕事」をAIで劇的に効率化します。",
  keywords: ["建設業", "AI導入", "業務自動化", "仙台", "宮城", "施工管理", "見積作成", "工事写真台帳"],
  openGraph: {
    title: "建設業向けAI業務自動化ソリューション | 株式会社ZTEX",
    description: "図面からの積算支援、工事写真台帳の自動生成など、現場監督の「パソコン仕事」をAIで劇的に効率化します。",
  },
    alternates: {
        canonical: "/industry/construction",
    },
};

const faqs = [
  {
    question: "現在使っている施工管理アプリやシステムとの連携は可能ですか？",
    answer: "はい、可能です。多くのSaaS（Kintone、スパイダープラス、Chatwork等）はn8nを通じてAPI連携が可能です。APIがない古いシステムでもRPA技術を組み合わせて連携を実現します。",
  },
  {
    question: "現場の職人さんはスマホの操作に不慣れですが大丈夫でしょうか？",
    answer: "問題ありません。現場からの報告は「使い慣れたチャットアプリ」から写真やスタンプ、音声メッセージを送るだけで完了するように設計します。面倒な文字入力はAIが代行します。",
  },
  {
    question: "社内の図面データやマニュアルをAIに学習させると、情報漏洩の危険はありませんか？",
    answer: "セキュリティを最優先に構築します。オープンな学習データとして利用されないクローズドな環境（API連携時のオプトアウト設定等）でAIモデルを構築するため、社外に情報が漏れることはありません。",
  },
  {
    question: "導入までどれくらいの期間がかかりますか？",
    answer: "課題のヒアリングから始まり、まずは1つの小さな業務（例：日報の自動集計のみ）であれば最短2〜3週間でプロトタイプを稼働させます。現場でテストしながら段階的に機能を拡張していきます。",
  },
];

export default function ConstructionIndustryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "建設業向けAI業務自動化ソリューション",
    provider: {
      "@type": "Organization",
      name: "株式会社ZTEX",
      url: "https://ztex-japan.com",
    },
    description: "宮城・東北の建設業界向け。図面からの積算支援、工事写真台帳の自動生成、施工計画書のドラフト作成など、現場監督の「パソコン仕事」を自動化。",
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
        <p className="section-eyebrow">INDUSTRY 01 — CONSTRUCTION</p>

        <h1 className="mt-3 text-2xl font-semibold md:text-3xl lg:text-4xl">
          「現場」は変えずに「事務・管理」を劇的に効率化。<br className="hidden md:block" />
          <span className="text-neutral-300">宮城・東北を中心に全国の建設業向けAI導入</span>
        </h1>
        <p className="mt-6 max-w-2xl text-sm text-neutral-300 md:text-base leading-relaxed">
          建設業において最も自動化すべきは「現場監督（担当者）のパソコン仕事・書類仕事」です。<br />
          ZTEXは、最新の生成AIと自動化ツール（n8n）を組み合わせ、属人的な事務作業を極限まで削減。人手不足の現場をシステム面から強力にサポートします。
        </p>

        <div className="mt-12 w-full lg:max-w-4xl mx-auto rounded-xl border border-neutral-800 bg-neutral-900/30 p-6 md:p-8">
          <h2 className="text-lg font-semibold text-neutral-100 md:text-xl border-l-4 border-white pl-4 mb-6">
            現場のこんな「悩み」を解決します
          </h2>
          <ul className="space-y-4 text-sm md:text-base text-neutral-300">
            <li className="flex items-start gap-3">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
              図面や工数が変わるたびに、見積もりの作り直しや再積算で深夜残業になっている…
            </li>
            <li className="flex items-start gap-3">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
              現場の写真整理、黒板の準備、各種報告書の作成などに毎日1時間以上取られている…
            </li>
            <li className="flex items-start gap-3">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
              ベテランの現場監督のノウハウ（カンやコツ）が若手に引き継がれず、属人的になっている…
            </li>
            <li className="flex items-start gap-3">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
              元請けからの急な指示変更や図面の最新版が現場に伝わるのが遅れ、トラブルになる…
            </li>
          </ul>
        </div>

        {/* AI Solutions */}
        <div className="mt-20">
          <h2 className="text-xl font-semibold text-neutral-100 md:text-2xl mb-8">
            ZTEXが提供するAI自動化ソリューション
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            
            <div className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 p-6 hover:border-neutral-700 transition-colors">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900 border border-neutral-800">
                 <FileText className="h-5 w-5 text-neutral-400" />
              </div>
              <h3 className="mb-3 text-lg font-medium text-neutral-100">
                見積書・図面のAI読み取りと積算支援
              </h3>
              <p className="text-sm leading-relaxed text-neutral-300">
                図面のPDFや過去の見積もりデータをAIが読み取り、拾い出し作業をサポート。AIが積算のドラフト（叩き台）を自動で作成することで、ゼロから手作業で作っていた属人的な見積もり作成のスピードと精度を圧倒的に向上させます。
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 p-6 hover:border-neutral-700 transition-colors">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900 border border-neutral-800">
                 <Smartphone className="h-5 w-5 text-neutral-400" />
              </div>
              <h3 className="mb-3 text-lg font-medium text-neutral-100">
                現場写真からの工事写真台帳・報告書自動生成
              </h3>
              <p className="text-sm leading-relaxed text-neutral-300">
                現場でスマホで写真を撮り、チャット等に簡単な音声メモを残すだけでOK。AIが音声をテキスト化し、写真の内容に合わせて工事報告書や是正指示書の所定フォーマットへ自動転記。帰社後の「パソコン仕事」をゼロに近づけます。
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 p-6 hover:border-neutral-700 transition-colors">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900 border border-neutral-800">
                 <ClipboardCheck className="h-5 w-5 text-neutral-400" />
              </div>
              <h3 className="mb-3 text-lg font-medium text-neutral-100">
                施工計画書やKY（危険予知）活動の自動化
              </h3>
              <p className="text-sm leading-relaxed text-neutral-300">
                現場の基本情報や過去の類似工事のデータを入力するだけで、現場に合わせた施工計画書の文面案や、毎日のKY（危険予知）活動のポイントをAIが自動生成。現場監督の心理的・時間的負担を激減させます。
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 p-6 hover:border-neutral-700 transition-colors">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900 border border-neutral-800">
                 <Bot className="h-5 w-5 text-neutral-400" />
              </div>
              <h3 className="mb-3 text-lg font-medium text-neutral-100">
                「ベテラン現場監督」のAI技術伝承
              </h3>
              <p className="text-sm leading-relaxed text-neutral-300">
                過去の安全基準、現場トラブル解決事例、各種社内マニュアルをデータ化。「配管クレーン作業の安全基準は？」とスマホで聞けば、最新基準や過去の事例をもとにAIが瞬時に回答する「社内知恵袋（RAG）」を構築します。
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
