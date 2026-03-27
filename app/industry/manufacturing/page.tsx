import { Metadata } from "next";
import { PricingSection } from "@/components/pricing-section";
import { FAQSection } from "@/components/faq-section";
import { AlertCircle, Wrench, Printer, Send, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "製造業向けAI業務自動化ソリューション | 株式会社ZTEX",
  description: "宮城・東北の中小製造業向け。FAX・PDFの自動入力、匠のノウハウのAI化、日報の自動集計などで、技術伝承とバックオフィスの壁を打破します。",
  keywords: ["製造業", "AI導入", "業務自動化", "仙台", "宮城", "生産管理", "技術伝承", "受発注自動化"],
  openGraph: {
    title: "製造業向けAI業務自動化ソリューション | 株式会社ZTEX",
    description: "宮城・東北の中小製造業向け。FAX自動入力、AI技術伝承など「ソフト面」の業務自動化を支援します。",
  },
    alternates: {
        canonical: "/industry/manufacturing",
    },
};

const faqs = [
  {
    question: "手書きのFAXや指定フォーマットのPDF注文書でも本当に読み取れますか？",
    answer: "はい、可能です。最新のAI-OCRとLLMを組み合わせることで、手書きのクセや非定型なフォーマットでも、文脈を理解して高精度にデータ化（CSV等）し、社内システムへ流し込むことが可能です。",
  },
  {
    question: "自社専用AI（RAG）を作るには、どのようなデータが必要ですか？",
    answer: "既存のPDFマニュアル、過去のトラブル対応報告書、社内規定、熟練者へのヒアリングメモなど、テキスト化されているデータであれば形式を問わず学習させることが可能です。",
  },
  {
    question: "システムに詳しい専任担当者がいませんが、運用できますか？",
    answer: "はい。ZTEXでは現場の皆様が使いやすい形（LINEやChatworkでの入出力など）をご提案し、運用開始後もチャットやオンラインでの保守サポートを定額で提供しています。",
  },
  {
    question: "工場内にWi-Fi環境がない現場でも導入できますか？",
    answer: "はい。クラウドベースのシステムだけでなく、スマートフォン回線を利用したLINEからの日報入力など、ネットワーク環境に制約がある現場にも対応可能なアーキテクチャで設計します。",
  },
];

export default function ManufacturingIndustryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "製造業向けAI業務自動化ソリューション",
    provider: {
      "@type": "Organization",
      name: "株式会社ZTEX",
      url: "https://ztex-japan.com",
    },
    description: "宮城・東北の中小製造業向け。FAX・PDFの入力自動化、匠のノウハウのRAG化、日報集計などで事務・情報伝達を効率化。",
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
        <p className="section-eyebrow">INDUSTRY 02 — MANUFACTURING</p>

        <h1 className="mt-3 text-2xl font-semibold md:text-3xl lg:text-4xl">
          事務作業と技術伝承の壁をAIで突破する。<br className="hidden md:block" />
          <span className="text-neutral-300">中小製造業向けの業務自動化</span>
        </h1>
        <p className="mt-6 max-w-2xl text-sm text-neutral-300 md:text-base leading-relaxed">
          製造業＝工場の機械化だけではありません。「人の業務」におけるアナログな課題こそが深刻なボトルネックです。<br />
          ZTEXは、高額なセンサー導入や大がかりなシステム改修ではなく、既存のパソコンやスマホから手軽に始められる「ソフト面（業務ワークフロー）」のAI自動化を提案します。
        </p>

        <div className="mt-12 w-full lg:max-w-4xl mx-auto rounded-xl border border-neutral-800 bg-neutral-900/30 p-6 md:p-8">
          <h2 className="text-lg font-semibold text-neutral-100 md:text-xl border-l-4 border-white pl-4 mb-6">
            現場のこんな「アナログ課題」を解決します
          </h2>
          <ul className="space-y-4 text-sm md:text-base text-neutral-300">
            <li className="flex items-start gap-3">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
              熟練の職人が定年を迎えるが、若手に技術（カンやコツ）が口伝や紙のマニュアルでは引き継がれていない…
            </li>
            <li className="flex items-start gap-3">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
              取引先から送られてくる大量の手書きFAXやPDFの注文書を、事務員が毎日手作業でシステムに入力している…
            </li>
            <li className="flex items-start gap-3">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
              現場からの日報が紙やLINEでバラバラに届き、本社の集計や報告書の作成に時間がかかり残業が発生している…
            </li>
            <li className="flex items-start gap-3">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
              昔の図面や過去の見積もり書をキャビネットやサーバーから探し出すのに多大な時間がかかっている…
            </li>
          </ul>
        </div>

        {/* AI Solutions */}
        <div className="mt-20">
          <h2 className="text-xl font-semibold text-neutral-100 md:text-2xl mb-8">
            スモールスタートで実現するAIソリューション
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            
            <div className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 p-6 hover:border-neutral-700 transition-colors">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900 border border-neutral-800">
                 <Wrench className="h-5 w-5 text-neutral-400" />
              </div>
              <h3 className="mb-3 text-lg font-medium text-neutral-100">
                「匠の技」のデータ化とAI技術伝承
              </h3>
              <p className="text-sm leading-relaxed text-neutral-300">
                ベテラン職人の作業マニュアル、過去のトラブル対応履歴、安全基準などをデータ化し、自社専用AI（RAGチャットボット）に学習させます。若手社員がスマホで「〇〇の切削加工時の注意点は？」と質問すれば、熟練者のノウハウが即答する「社内知恵袋」を構築します。
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 p-6 hover:border-neutral-700 transition-colors">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900 border border-neutral-800">
                 <Printer className="h-5 w-5 text-neutral-400" />
              </div>
              <h3 className="mb-3 text-lg font-medium text-neutral-100">
                受発注業務（FAX・PDF）の完全自動化
              </h3>
              <p className="text-sm leading-relaxed text-neutral-300">
                取引先から届く手書きのFAXや非定型のPDF注文書をAI-OCRが自動解析。n8nを活用し、解析データをそのまま自社の生産管理システムや会計ソフト（弥生、freeeなど）へ自動転記します。事務員の入力ミスと残業をゼロにするフローです。
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 p-6 hover:border-neutral-700 transition-colors">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900 border border-neutral-800">
                 <Send className="h-5 w-5 text-neutral-400" />
              </div>
              <h3 className="mb-3 text-lg font-medium text-neutral-100">
                現場からの報告・日報の自動集計
              </h3>
              <p className="text-sm leading-relaxed text-neutral-300">
                現場スタッフがスマホ（LINE等）から音声や簡単なテキストで「〇〇の部品が不足気味」と送るだけで、AIが文脈を解釈し丁寧な文章に整形。そのまま本社のKintone等の業務管理ツールやチャットツール（Slack等）の指定トピックへ自動で分類・報告します。
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 p-6 hover:border-neutral-700 transition-colors">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900 border border-neutral-800">
                 <Search className="h-5 w-5 text-neutral-400" />
              </div>
              <h3 className="mb-3 text-lg font-medium text-neutral-100">
                過去データ検索と見積もり作成のスピードアップ
              </h3>
              <p className="text-sm leading-relaxed text-neutral-300">
                過去の膨大な図面データ、見積書、部材価格表をAIが瞬時に横断検索。「この仕様の見積もりを作って」と指示するだけで、類似案件から適正な原価と納期を割り出し、見積書のドラフトを数分で作成。営業とバックオフィスの負担を軽減します。
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
