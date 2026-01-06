import { Metadata } from "next";
import Image from "next/image";
import { PricingSection } from "@/components/pricing-section";
import { FAQSection } from "@/components/faq-section";

export const metadata: Metadata = {
  title: "AI人材育成・内製化支援 | 株式会社ZTEX",
  description: "一時的なツール導入で終わらせず、現場社員がAIを使いこなせる状態まで伴走。「自走できる組織」への変革を促し、長期的な競争力を高めます。",
};

const faqs = [
  {
    question: "ITスキルが高くない社員でもついていけますか？",
    answer: "はい、大丈夫です。参加者のスキルレベルに合わせて、用語の解説からハンズオンの難易度まで調整いたします。まずは「AIを触ってみる」ところから始め、徐々に実務への応用へとステップアップしていきます。",
  },
  {
    question: "オンライン（Zoom等）での研修は可能ですか？",
    answer: "可能です。ZoomやTeams、Google Meetを用いたオンライン研修の実績も多数ございます。画面共有を活用したハンズオンや、アーカイブ動画の提供も可能です。",
  },
  {
    question: "助成金（人材開発支援助成金など）は利用できますか？",
    answer: "はい、カリキュラムの内容や時間数によっては、リスキリング関連の助成金対象となる場合があります。申請に必要な書類作成のサポートも提携社労士を通じてご案内可能ですので、ご相談ください。",
  },
  {
    question: "少人数（数名）からの実施は可能ですか？",
    answer: "可能です。少人数のチーム単位でのワークショップや、経営幹部層向けの集中講座など、規模感に合わせてプランニングいたします。",
  },
  {
    question: "研修後のフォローアップはありますか？",
    answer: "はい、研修は「やりっぱなし」では効果が薄れてしまいます。研修後のQA対応（チャットサポート）や、実際の業務でAIを使ってみて出てきた課題に対するフィードバック会など、定着支援も行っています。",
  },
];

export default function TrainingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI人材育成・内製化支援",
    provider: {
      "@type": "Organization",
      name: "株式会社ZTEX",
      url: "https://ztex-japan.com",
    },
    description: "現場社員がAIを使いこなせる状態まで伴走。「自走できる組織」への変革を促します。",
    areaServed: "JP",
    serviceType: "Employee Training",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Training Programs",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "生成AI基礎研修" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "プロンプトエンジニアリング" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI業務適用ワークショップ" } }
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
      {/* 上：サービス概要 */}
      <div className="section-inner py-16 md:py-20">
        <p className="section-eyebrow">
          SERVICE 02 — AI TRAINING & RESKILLING PROGRAM
        </p>

        <h1 className="mt-3 text-2xl font-semibold md:text-3xl lg:text-4xl">
          AI人材育成・内製化支援
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-neutral-400 md:text-base">
          一時的なツール導入で終わらせず、現場社員がAIを使いこなせる状態まで伴走。
          「自走できる組織」への変革を促し、長期的な競争力を高めます。
          ChatGPT / Claude / Gemini などの基礎から、社内業務に落とし込むワークショップまで設計します。
        </p>

        <div className="mt-8 md:mt-12 aspect-video w-full overflow-hidden rounded-xl border border-neutral-800 relative">
          <Image
            src="/images/kyouiku.jpeg"
            alt="AI Training & Reskilling Program"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
            priority
          />
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/30 p-6">
            <h2 className="text-sm font-semibold text-neutral-100 md:text-base">
              主な研修テーマ
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-neutral-400">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1 w-1 rounded-full bg-neutral-600" />
                非エンジニア向け「生成AIの前提知識・リスク管理」
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1 w-1 rounded-full bg-neutral-600" />
                日常業務で使えるプロンプト設計とテンプレート化
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1 w-1 rounded-full bg-neutral-600" />
                AIとRPA／ノーコードツールを組み合わせた業務改善
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1 w-1 rounded-full bg-neutral-600" />
                社内ナレッジを活かすRAG的な活用の考え方
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-neutral-900/30 p-6">
            <h2 className="text-sm font-semibold text-neutral-100 md:text-base">
              フォーマット
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-neutral-400">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1 w-1 rounded-full bg-neutral-600" />
                オンライン / オフラインどちらも対応
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1 w-1 rounded-full bg-neutral-600" />
                1回完結型〜数ヶ月のリスキリングプログラムまで設計可能
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1 w-1 rounded-full bg-neutral-600" />
                録画・資料の共有により、復習や新入社員教育にも再利用可能
              </li>
            </ul>
          </div>
        </div>

        {/* Curriculum Examples */}
        <div className="mt-20">
          <h2 className="text-xl font-semibold text-neutral-100 md:text-2xl">
            Curriculum Examples
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              {
                level: "Basic",
                title: "生成AI基礎 & リテラシー",
                desc: "「AIで何ができるのか」を正しく理解し、セキュリティや著作権のリスクを学びます。全社員向け。",
              },
              {
                level: "Standard",
                title: "プロンプトエンジニアリング",
                desc: "「欲しい回答を引き出す」ための指示出しテクニックを習得。メール作成、要約、アイデア出しの実践。",
              },
              {
                level: "Advanced",
                title: "業務フローへの組み込み",
                desc: "実際の業務課題を持ち寄り、AIを使ってどう解決するかを議論・設計するワークショップ形式。",
              },
            ].map((item) => (
              <div key={item.title} className="group relative overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950 p-5 hover:border-neutral-700">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wider text-neutral-500">{item.level}</span>
                </div>
                <h3 className="mb-2 text-sm font-medium text-neutral-200">{item.title}</h3>
                <p className="text-xs leading-relaxed text-neutral-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-20">
          <h2 className="text-xl font-semibold text-neutral-100 md:text-2xl">
            Tools We Teach
          </h2>
          <p className="mt-2 text-sm text-neutral-400">
            特定のツールに依存せず、本質的な「AIとの対話力」を育てますが、以下の主要ツールは重点的にカバーします。
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {["ChatGPT (OpenAI)", "Claude (Anthropic)", "Gemini (Google)", "Perplexity", "Microsoft Copilot", "Midjourney", "Notion AI"].map((tech) => (
              <span key={tech} className="rounded-full border border-neutral-800 bg-neutral-900/50 px-4 py-1.5 text-xs text-neutral-300">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 下：このプログラム専用のプラン & FAQ */}
      <PricingSection />
      <FAQSection items={faqs} />
    </div>
  );
}