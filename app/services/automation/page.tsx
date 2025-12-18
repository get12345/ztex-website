import { Metadata } from "next";
import Image from "next/image";
import { PricingSection } from "@/components/pricing-section";
import { FAQSection } from "@/components/faq-section";

export const metadata: Metadata = {
  title: "業務フロー自動化・効率化支援 | 株式会社ZTEX",
  description: "API連携やノーコードツールを活用し、手作業に依存した事務処理や反復業務を自動化。利益率の高い組織体制を構築します。",
};

const faqs = [
  {
    question: "レガシーな基幹システム（オンプレミス）とも連携できますか？",
    answer: "はい、可能です。APIがない古いシステムでも、RPA技術による画面操作や、CSVファイルの自動入出力などを組み合わせることで連携を実現します。",
  },
  {
    question: "自動化フローでエラーが起きた場合はどうなりますか？",
    answer: "設計段階でエラーハンドリングを組み込みます。エラー発生時には即座に担当者のSlack/Teamsへ通知が飛び、どの処理で止まったかが分かるように構築するため、迅速な復旧が可能です。",
  },
  {
    question: "セキュリティポリシーが厳しく、外部クラウドツールを使えないのですが。",
    answer: "問題ございません。イントラネット内で完結するオンプレミス版のn8n構築や、Pythonスクリプトによるローカル自動化など、貴社のセキュリティ基準に合わせたアーキテクチャをご提案します。",
  },
  {
    question: "担当者が退職しても運用できますか？",
    answer: "はい。属人化を防ぐため、処理フローの可視化ドキュメントを作成し、納品時に引き継ぎを行います。また、保守サポート契約をいただければ、トラブル時の対応や仕様変更も弊社が代行いたします。",
  },
];

export default function AutomationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "業務フロー自動化・効率化支援",
    provider: {
      "@type": "Organization",
      name: "株式会社ZTEX",
      url: "https://ztex-japan.com",
    },
    description: "API連携やノーコードツールを活用し、手作業に依存した事務処理や反復業務を自動化。利益率の高い組織体制を構築します。",
    areaServed: "JP",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Automation Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "営業リード対応自動化"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "経理・請求フロー効率化"
          }
        }
      ]
    }
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

      {/* ... (rest of the content) */}
      <div className="section-inner py-16 md:py-20">
        <p className="section-eyebrow">SERVICE 01 — AI AUTOMATION DESIGN</p>

        <h1 className="mt-3 text-2xl font-semibold md:text-3xl lg:text-4xl">
          業務フロー自動化・効率化支援
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-neutral-400 md:text-base">
          API連携やノーコードツールを活用し、手作業に依存した事務処理や反復業務を自動化。
          人為的ミスの削減とコスト適正化により、利益率の高い組織体制を構築します。
          現場のワークフローに合わせた設計を行うため、「動かない自動化」にはしません。
        </p>

        <div className="mt-8 md:mt-12 aspect-video w-full overflow-hidden rounded-xl border border-neutral-800 relative">
          <Image
            src="/images/jidouka.jpeg"
            alt="AI Automation Design"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
            priority
          />
        </div>

        {/* 概要グリッド */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/30 p-6">
            <h2 className="text-sm font-semibold text-neutral-100 md:text-base">
              こういう業務に向いています
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-neutral-400">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1 w-1 rounded-full bg-neutral-600" />
                各種フォームからの問い合わせ内容を自動でスプレッドシートへ集約
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1 w-1 rounded-full bg-neutral-600" />
                レポート作成用のデータ収集・整形・定期送信
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1 w-1 rounded-full bg-neutral-600" />
                請求・入金状況の自動チェックとリマインド
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-neutral-900/30 p-6">
            <h2 className="text-sm font-semibold text-neutral-100 md:text-base">
              進め方のイメージ
            </h2>
            <ol className="mt-4 space-y-3 text-sm text-neutral-400">
              <li className="flex items-start gap-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-800 text-[10px] text-neutral-300">1</span>
                現在の業務フロー・ツール構成をヒアリング
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-800 text-[10px] text-neutral-300">2</span>
                「ボトルネックになっている作業」を洗い出し・優先順位づけ
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-800 text-[10px] text-neutral-300">3</span>
                n8n や各種SaaSを組み合わせてプロトタイプを構築
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-800 text-[10px] text-neutral-300">4</span>
                数週間のトライアル運用でチューニング後、本導入
              </li>
            </ol>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mt-20">
          <h2 className="text-xl font-semibold text-neutral-100 md:text-2xl">
            Use Cases
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "営業リード対応の自動化",
                desc: "HPからの問い合わせをSlackに即時通知し、内容に応じてSalesforceへ自動登録。一次返信メールもAIが下書きを作成。",
              },
              {
                title: "経理・請求フローの効率化",
                desc: "メールで届く請求書PDFをOCRで読み取り、支払一覧表（スプレッドシート）に自動転記。支払期日のリマインドも自動化。",
              },
              {
                title: "SNS運用・分析レポート",
                desc: "各SNSのインサイトデータを毎日自動取得し、Looker Studioで可視化。前日比や急上昇投稿を朝イチでチャット通知。",
              },
            ].map((item) => (
              <div key={item.title} className="group relative overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950 p-5 hover:border-neutral-700">
                <h3 className="mb-2 text-sm font-medium text-neutral-200">{item.title}</h3>
                <p className="text-xs leading-relaxed text-neutral-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-20">
          <h2 className="text-xl font-semibold text-neutral-100 md:text-2xl">
            Tech Stack
          </h2>
          <p className="mt-2 text-sm text-neutral-400">
            コストパフォーマンスと拡張性を考慮し、最適なツールを選定します。
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {["n8n", "Zapier", "Make", "Google Apps Script", "Python", "Slack API", "Notion API", "OpenAI API"].map((tech) => (
              <span key={tech} className="rounded-full border border-neutral-800 bg-neutral-900/50 px-4 py-1.5 text-xs text-neutral-300">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <PricingSection type="consult" />
      <FAQSection items={faqs} />
    </div>
  );
}
