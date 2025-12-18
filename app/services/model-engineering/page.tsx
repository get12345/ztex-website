import { Metadata } from "next";
import Image from "next/image";
import { PricingSection } from "@/components/pricing-section";
import { FAQSection } from "@/components/faq-section";

export const metadata: Metadata = {
  title: "高度AI導入・技術顧問 | 株式会社ZTEX",
  description: "LLMの専門的知見に基づき、貴社独自のAI環境を構築。モデルのチューニングやRAG構成の改善により、ビジネス特化の高精度なAIを実現します。",
};

const faqs = [
  {
    question: "社内にGPUサーバーが必要ですか？",
    answer: "必ずしも必要ではありません。初期フェーズではAWSやGCPなどのクラウドGPU利用を推奨しています。機密性が極めて高く、オンプレミス環境が必須の場合のみ、ハードウェア選定からサポートいたします。",
  },
  {
    question: "学習データ（社内文書）の整備ができていないのですが。",
    answer: "ご安心ください。データのクレンジング（整形）作業からご支援します。PDF、Word、Excelなどが散在している状態でも、それらをAIが読み取れる形式に変換するパイプライン構築から承ります。",
  },
  {
    question: "RAG（検索拡張）とファインチューニングの違いは何ですか？",
    answer: "RAGは「カンニングペーパーを見ながら答える」仕組みで、最新情報や社内規定の参照に向いています。ファインチューニングは「脳みそを書き換える」仕組みで、特定の口調や回答フォーマットを覚えさせるのに向いています。目的に応じて使い分け、あるいは組み合わせます。",
  },
  {
    question: "オープンソースモデル（Llama等）の商用利用は安全ですか？",
    answer: "はい。各モデルのライセンス（Apache 2.0やLlama Community License等）を厳密に確認し、商用利用可能なモデルのみを選定・採用します。ライセンスリスクのない安全な開発を行います。",
  },
];

export default function ModelEngineeringPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "高度AI導入・技術顧問",
    provider: {
      "@type": "Organization",
      name: "株式会社ZTEX",
      url: "https://ztex-japan.com",
    },
    description: "LLMの専門的知見に基づき、貴社独自のAI環境を構築。RAGやFine-tuningによりビジネス特化の高精度なAIを実現。",
    areaServed: "JP",
    serviceType: "AI Engineering",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI Engineering Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "社内規定特化RAG構築" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "ドメイン特化モデル構築" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "PoC開発" } }
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
        <p className="section-eyebrow">
          SERVICE 03 — AI MODEL ENGINEERING LAB
        </p>

        <h1 className="mt-3 text-2xl font-semibold md:text-3xl lg:text-4xl">
          高度AI導入・技術顧問
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-neutral-400 md:text-base">
          大規模言語モデル（LLM）の専門的知見に基づき、貴社独自のAI環境を構築。
          ※RLHF/LoRA等の高度技術も踏まえ、セキュリティと実益を兼ね備えた最適解を提案します。
          モデルの「中身」に踏み込んだチューニングを行い、目的に特化した高精度なAIを一緒に作り込みます。
        </p>

        <div className="mt-8 md:mt-12 aspect-video w-full overflow-hidden rounded-xl border border-neutral-800 relative">
          <Image
            src="/images/kouseido.jpeg"
            alt="AI Model Engineering Lab"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
            priority
          />
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/30 p-6">
            <h2 className="text-sm font-semibold text-neutral-100 md:text-base">
              こんな課題に
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-neutral-400">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1 w-1 rounded-full bg-neutral-600" />
                既存の汎用LLMだと、専門分野の回答精度が物足りない
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1 w-1 rounded-full bg-neutral-600" />
                社内データや独自ナレッジをもっと活かしたい
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1 w-1 rounded-full bg-neutral-600" />
                LLMの推論コストを抑えつつ精度をキープしたい
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1 w-1 rounded-full bg-neutral-600" />
                RAG 構成を改善して「幻覚」を減らしたい
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-neutral-900/30 p-6">
            <h2 className="text-sm font-semibold text-neutral-100 md:text-base">
              提供できること
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-neutral-400">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1 w-1 rounded-full bg-neutral-600" />
                用途に応じたベースモデルの選定 (Llama 3, Mistral, Gemma etc.)
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1 w-1 rounded-full bg-neutral-600" />
                データセット設計と前処理、評価指標の設計
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1 w-1 rounded-full bg-neutral-600" />
                LoRA / Fine-tuning の方針策定と検証
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1 w-1 rounded-full bg-neutral-600" />
                RAG + エージェント構成の改善提案
              </li>
            </ul>
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
                title: "社内規定特化RAG",
                desc: "数千ページの社内マニュアルや規定を検索可能に。単純なベクトル検索だけでなく、ハイブリッド検索とRe-rankingで精度を向上。",
              },
              {
                title: "専門用語特化モデル",
                desc: "医療・法律・金融など、汎用モデルでは誤りやすい専門用語を学習させた軽量モデル（SLM）を構築し、オンプレミスで運用。",
              },
              {
                title: "カスタマーサポート自動応答",
                desc: "過去の問い合わせ履歴（QAデータ）をFine-tuningし、自社のトーン＆マナーで回答できる自動応答ボットを開発。",
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
            最先端のオープンソースモデルとライブラリを駆使し、最適なアーキテクチャを構築します。
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {["Python", "PyTorch", "Hugging Face", "LangChain", "LlamaIndex", "WandB", "vLLM", "AWS / GCP"].map((tech) => (
              <span key={tech} className="rounded-full border border-neutral-800 bg-neutral-900/50 px-4 py-1.5 text-xs text-neutral-300">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <PricingSection type="consult" />
      <PricingSection type="consult" />
      <FAQSection items={faqs} />
    </div>
  );
}
