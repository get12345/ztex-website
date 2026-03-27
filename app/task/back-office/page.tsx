import { Metadata } from "next";
import { PricingSection } from "@/components/pricing-section";
import { FAQSection } from "@/components/faq-section";
import { AlertCircle, FileDigit, Landmark, CheckSquare, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "事務・バックオフィスのAI業務自動化 | 株式会社ZTEX",
  description: "定型業務に追われる事務員・経理部門向け。AI-OCRとn8n連携で、手入力や転記作業などの「見えない残業」をゼロにします。",
  keywords: ["バックオフィス自動化", "事務効率化", "AI-OCR", "経理AI", "n8n", "ZTEX", "仙台"],
  openGraph: {
    title: "事務・バックオフィスのAI業務自動化 | 株式会社ZTEX",
    description: "紙の請求書や手書きFAXのデータ化から会計システム連携まで、管理部門のDXを実現します。",
  },
    alternates: {
        canonical: "/task/back-office",
    },
};

const faqs = [
  {
    question: "紙と手書きの文化が根強いのですが、いきなり自動化できるでしょうか？",
    answer: "一気にすべてを変える必要はありません。まずは「一番時間がかかっている特定機能（例：毎月の請求書の入力のみ）」に絞って小さくスタートし、社内の理解を得ながら広げていくことをお勧めします。",
  },
  {
    question: "既存で導入しているSaaS（freee、Money Forwardなど）との連携は可能ですか？",
    answer: "はい、可能です。多くのクラウド会計・労務システムはAPIを持たせているため、n8nを経由してシームレスにデータ連携・自動入力のフローを構築できます。",
  },
  {
    question: "AI-OCRの読み取り精度はどのくらいですか？",
    answer: "印字された文字であれば98%以上の精度を誇ります。手書き文字の場合でも、近年のLLM（大規模言語モデル）を組み合わせることで文脈から推測補正し、非常に高い精度でデータ化が可能です。最終的に人間がチェックしやすいUIでの運用を設計します。",
  },
];

export default function BackOfficeTaskPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "事務・バックオフィスのAI業務自動化",
    provider: {
      "@type": "Organization",
      name: "株式会社ZTEX",
      url: "https://ztex-japan.com",
    },
    description: "定型業務に追われる事務員向け。紙・PDFのAI-OCR読み取りや経費精算自動チェックで業務効率化。",
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
        <p className="section-eyebrow">TASK 02 — BACK OFFICE</p>

        <h1 className="mt-3 text-2xl font-semibold md:text-3xl lg:text-4xl">
          「見えない残業」をゼロにする。<br className="hidden md:block" />
          <span className="text-neutral-400">事務・バックオフィスのAI業務自動化</span>
        </h1>
        <p className="mt-6 max-w-2xl text-sm text-neutral-300 md:text-base leading-relaxed">
          会社を支える事務・経理・総務部門。毎日の「転記作業」「メールの仕分け」「書類の確認」が積もり積もって、本来の業務効率化や財務戦略に時間が使えていない企業が後を絶ちません。<br />
          ZTEXは、高精度なAI-OCRとワークフロー自動化（n8n）を駆使し、紙やPDFのアナログ処理を一掃する「定型業務の完全自動化」を提供します。
        </p>

        <div className="mt-12 w-full lg:max-w-4xl mx-auto rounded-xl border border-neutral-800 bg-neutral-900/30 p-6 md:p-8">
          <h2 className="text-lg font-semibold text-neutral-100 md:text-xl border-l-4 border-white pl-4 mb-6">
            バックオフィス部門の「悩み」
          </h2>
          <ul className="space-y-4 text-sm md:text-base text-neutral-300">
            <li className="flex items-start gap-3">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
              取引先各社からバラバラの形式（紙、PDF、手書きのFAX）で送られてくる請求書を、毎日手作業で会計ソフトに入力している。
            </li>
            <li className="flex items-start gap-3">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
              社員からの各種申請（経費、稟議、休暇）の記載漏れ・ミスチェックに時間がかかり、差し戻しのやり取りがストレスになっている。
            </li>
            <li className="flex items-start gap-3">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
              取引先からの似たような定型メールの問い合わせ・受発注対応に追われ、他の業務が進まない。
            </li>
            <li className="flex items-start gap-3">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
              月末月初など特定の時期に作業が集中し、担当者がいつも残業しているが、人を増やす余裕はない。
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
                 <FileDigit className="h-5 w-5 text-neutral-400" />
              </div>
              <h3 className="mb-3 text-lg font-medium text-neutral-100">
                紙・PDFのAI-OCR読み取り
              </h3>
              <p className="text-sm leading-relaxed text-neutral-400">
                形式がバラバラな請求書や納品書、手書きのFAXをスキャナで読み込む、あるいは指定メールにPDFを送るだけで、AI-OCRが「日付・金額・取引先名」などの必要情報を自動抽出。CSV等でデータ化します。
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 p-6 hover:border-neutral-700 transition-colors">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900 border border-neutral-800">
                 <Landmark className="h-5 w-5 text-neutral-400" />
              </div>
              <h3 className="mb-3 text-lg font-medium text-neutral-100">
                会計システム等への自動転記連携
              </h3>
              <p className="text-sm leading-relaxed text-neutral-400">
                読み取ったデータを、担当者が手動で入力するのではなく、n8nを経由してそのまま自社で利用中の会計システムやERP、Kintoneなどのデータベースへ自動転記。入力にかかる時間とヒューマンエラーを文字通り「ゼロ」にします。
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 p-6 hover:border-neutral-700 transition-colors">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900 border border-neutral-800">
                 <CheckSquare className="h-5 w-5 text-neutral-400" />
              </div>
              <h3 className="mb-3 text-lg font-medium text-neutral-100">
                経費精算・申請書類の自動チェック
              </h3>
              <p className="text-sm leading-relaxed text-neutral-400">
                交通費精算や立て替え経費の領収書の数字と、申請内容に相違がないかをAIが自動で突合チェック。社内規定から逸脱しているものがあれば、担当者の確認前に申請者へ自動で差し戻しの通知を送ります。
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 p-6 hover:border-neutral-700 transition-colors">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900 border border-neutral-800">
                 <Mail className="h-5 w-5 text-neutral-400" />
              </div>
              <h3 className="mb-3 text-lg font-medium text-neutral-100">
                定型メールの自動判別と返信ドラフト
              </h3>
              <p className="text-sm leading-relaxed text-neutral-400">
                代表アドレスに届く大量のメールをLLM（生成AI）が内容を理解して自動でフォルダに分類。「問い合わせ」「受発注」「営業」などを即座に見分け、受発注やよくある質問には返信文の下書き（ドラフト）まで自動作成します。
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
