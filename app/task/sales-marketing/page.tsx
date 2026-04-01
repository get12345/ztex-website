import { Metadata } from "next";
import { PricingSection } from "@/components/pricing-section";
import { FAQSection } from "@/components/faq-section";
import { AlertCircle, FileText, LineChart, Users, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "営業・マーケティングのAI業務自動化 | 株式会社ZTEX",
  description: "リソース不足の営業・マーケティング部門向け。SNS自動運用、AIによる提案書半自動化、顧客リスト抽出で「売上を作る」時間を最大化します。",
  keywords: ["営業自動化", "SNS自動投稿", "AI提案書", "顧客分析", "マーケティングAI", "ZTEX"],
  openGraph: {
    title: "営業・マーケティングのAI業務自動化 | 株式会社ZTEX",
    description: "プロポーザル作成支援から各種SNSやチャットアプリの自動運用まで、売上を作る時間をAIで生み出します。",
  },
    alternates: {
        canonical: "/task/sales-marketing",
    },
};

const faqs = [
  {
    question: "各種SNSやチャットアプリの自動投稿でアカウントが凍結されないか心配です。",
    answer: "公式のAPI（Meta公式APIなど）を利用して安全な範囲で自動化を構築するため、スパム判定による凍結リスクは最小限に抑えられます。ガイドラインを遵守した運用フローを設計します。",
  },
  {
    question: "AIが勝手にお客様へ間違った返信をする事故は防げますか？",
    answer: "はい。完全な自動送信ではなく、AIが「下書き（ドラフト）を作成し、担当者が確認して送信する」というヒューマン・イン・ザ・ループ（人間が介在する）設計を基本としています。",
  },
  {
    question: "顧客リストを持っていなくても活用できますか？",
    answer: "もちろん可能です。まずはWebサイトの問い合わせフォームとCRMを直結し、将来に繋がるリードを自動で蓄積していく「仕組み作り」からスタートしましょう。",
  },
];

export default function SalesMarketingTaskPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "営業・マーケティングのAI業務自動化",
    provider: {
      "@type": "Organization",
      name: "株式会社ZTEX",
      url: "https://ztex-japan.com",
    },
    description: "SNS運用、AIによる提案書生成、問い合わせ自動CRM連携により、営業が「売上を作る時間」を生み出します。",
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
        <p className="section-eyebrow">TASK 01 — SALES & MARKETING</p>

        <h1 className="mt-3 text-2xl font-semibold md:text-3xl lg:text-4xl">
          「売上を作る時間」を最大化する。<br className="hidden md:block" />
          <span className="text-neutral-300">営業・マーケティングのAI業務自動化</span>
        </h1>
        <p className="mt-6 max-w-2xl text-sm text-neutral-300 md:text-base leading-relaxed">
          営業担当者が「資料作成」や「顧客リストの整理」、「SNSの投稿作業」に追われていては、本来の「顧客と向き合う時間」が奪われてしまいます。<br />
          ZTEXは、最新の生成AIと自動化・連携ツールを組み合わせ、時間のかかる作業を効率化。少人数のチームでも売上を最大化する「攻めのAI導入」を実現します。
        </p>

        <div className="mt-12 w-full lg:max-w-4xl mx-auto rounded-xl border border-neutral-800 bg-neutral-900/30 p-6 md:p-8">
          <h2 className="text-lg font-semibold text-neutral-100 md:text-xl border-l-4 border-white pl-4 mb-6">
            営業・マーケティング部門の「悩み」
          </h2>
          <ul className="space-y-4 text-sm md:text-base text-neutral-300">
            <li className="flex items-start gap-3">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
              過去の提案書や見積もりを探すのに時間がかかり、新規の提案資料作成に半日潰れてしまう…
            </li>
            <li className="flex items-start gap-3">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
              新規獲得のためにSNSや公式チャットを運用したいが、毎日の投稿や返信をする余力がない…
            </li>
            <li className="flex items-start gap-3">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
              Webからの問い合わせがメールで届くため、誰が返信したか分からなくなり対応漏れが発生する…
            </li>
            <li className="flex items-start gap-3">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
              溜まった名刺や顧客リストが存在するだけで、営業活動（アプローチ対象の抽出）に活かせていない…
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
                 <FileText className="h-5 w-5 text-neutral-400" />
              </div>
              <h3 className="mb-3 text-lg font-medium text-neutral-100">
                提案書・相見積もりの半自動生成
              </h3>
              <p className="text-sm leading-relaxed text-neutral-300">
                過去の優秀な提案データや製品カタログをAIに学習させます。「顧客の業種」と「課題」を入力するだけで、最適な提案構成や相見積もりのドラフト（叩き台）を最短数分で自動作成。営業の資料作成時間を大幅に削ります。
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 p-6 hover:border-neutral-700 transition-colors">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900 border border-neutral-800">
                 <LineChart className="h-5 w-5 text-neutral-400" />
              </div>
              <h3 className="mb-3 text-lg font-medium text-neutral-100">
                公式SNS・チャットの自動運用・分析
              </h3>
              <p className="text-sm leading-relaxed text-neutral-300">
                ブログ記事や商品情報から、SNSやチャット配信用のテキストをAIが自動生成・要約。カレンダーベースで指定日時に自動投稿します。さらに各投稿のエンゲージメント（反応率）を自動取得し、レポート化まで一貫して行います。
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 p-6 hover:border-neutral-700 transition-colors">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900 border border-neutral-800">
                 <Users className="h-5 w-5 text-neutral-400" />
              </div>
              <h3 className="mb-3 text-lg font-medium text-neutral-100">
                最適な営業リストのAI抽出
              </h3>
              <p className="text-sm leading-relaxed text-neutral-300">
                眠っている既存顧客リストや名刺データと、現在の外部環境（ニュース、トレンド）をAIがかけ合わせ、「今アプローチすべき確度の高い企業」を自動抽出して営業担当のSlack等へレコメンドします。
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 p-6 hover:border-neutral-700 transition-colors">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900 border border-neutral-800">
                 <Mail className="h-5 w-5 text-neutral-400" />
              </div>
              <h3 className="mb-3 text-lg font-medium text-neutral-100">
                問い合わせからCRMへの完全連携
              </h3>
              <p className="text-sm leading-relaxed text-neutral-300">
                Webサイトへの問い合わせ発生時、各種連携ツールを経由してSalesforceやHubSpot、Kintone等の顧客管理システム（CRM）へ顧客情報を即座に自動入力。同時に担当者へリマインドを飛ばし、対応漏れによる機会損失をゼロにします。
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
