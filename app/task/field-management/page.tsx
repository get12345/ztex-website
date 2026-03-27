import { Metadata } from "next";
import { PricingSection } from "@/components/pricing-section";
import { FAQSection } from "@/components/faq-section";
import { AlertCircle, MessageCircle, Mic, Timer, Camera } from "lucide-react";

export const metadata: Metadata = {
  title: "現場・プロジェクト管理のAI業務自動化 | 株式会社ZTEX",
  description: "現場からのアナログなLINE報告を日報やシステムへ自動変換・登録。議事録作成や進捗管理の遅れを防ぐ情報共有DX。",
  keywords: ["現場管理AI", "プロジェクト自動化", "日報自動作成", "議事録AI", "n8n", "ZTEX", "仙台", "施工管理DX"],
  openGraph: {
    title: "現場・プロジェクト管理のAI業務自動化 | 株式会社ZTEX",
    description: "現場の職人さんは普段通りLINEで報告するだけ。AIがテキストを整形し、社内システムへ日報・報告を自動登録します。",
  },
    alternates: {
        canonical: "/task/field-management",
    },
};

const faqs = [
  {
    question: "現場スタッフが新しいアプリの使い方を覚えるのは難しいのですが…",
    answer: "ご安心ください。現場の皆様が日常的に使っている「LINE」などを入り口とするアーキテクチャで設計します。新しいアプリを覚える必要はなく、これまで通りLINEでメッセージや写真を送るだけで、裏側でAIが自動処理を行います。",
  },
  {
    question: "現場特有の専門用語や略語が含まれる音声・テキストでも正しく読み取れますか？",
    answer: "はい。事前の構築・チューニングフェーズにおいて、貴社特有の専門用語・略語・言い回しの辞書をLLMに学習（プロンプト等による補正）させるため、高い精度で意図を汲み取った形式に整形することが可能です。",
  },
  {
    question: "遅延アラートの通知先（Slack、メール等）は自由に設定できますか？",
    answer: "柔軟に設定可能です。n8nというハブプラットフォームを経由するため、例えば「軽度な遅延は現場用のChatworkへ」「深刻な部材トラブルは幹部用のSlackとメールへ」といった細かな条件分岐・通知ルーティングが構築できます。",
  },
];

export default function FieldManagementTaskPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "現場・プロジェクト管理のAI業務自動化",
    provider: {
      "@type": "Organization",
      name: "株式会社ZTEX",
      url: "https://ztex-japan.com",
    },
    description: "現場からのLINE等での報告をAIで自動整形し、日報やシステムへ登録。現場と本社の情報伝達のタイムラグを解消します。",
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
        <p className="section-eyebrow">TASK 04 — FIELD & PROJECT MANAGEMENT</p>

        <h1 className="mt-3 text-2xl font-semibold md:text-3xl lg:text-4xl">
          「現場」と「本社」のタイムラグをなくす。<br className="hidden md:block" />
          <span className="text-neutral-400">現場・プロジェクト管理のAI業務自動化</span>
        </h1>
        <p className="mt-6 max-w-2xl text-sm text-neutral-300 md:text-base leading-relaxed">
          建設・建築から、外回りの営業、メンテナンス業務まで。「現場」と「本社（管理側）」の情報伝達の遅れは、品質やスケジュールの致命的なトラブルに直結します。<br />
          ZTEXは、現場スタッフの「普段通りの報告（LINE等）」を受け取り、裏側でAI・n8nが自動整形・システム連携を行うことで、現場への負担・教育コストなしで情報共有のリアルタイム化（DX）を実現します。
        </p>

        <div className="mt-12 w-full lg:max-w-4xl mx-auto rounded-xl border border-neutral-800 bg-neutral-900/30 p-6 md:p-8">
          <h2 className="text-lg font-semibold text-neutral-100 md:text-xl border-l-4 border-white pl-4 mb-6">
            現場・プロジェクト管理における「悩み」
          </h2>
          <ul className="space-y-4 text-sm md:text-base text-neutral-300">
            <li className="flex items-start gap-3">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
              現場からの日報が手書きやLINEの長文などフォーマットが定まっておらず、本社の担当者が毎日「代書・再入力」している。
            </li>
            <li className="flex items-start gap-3">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
              工程やプロジェクトの遅延が、深刻な状況になってから初めて本社の管理者に伝わり、トラブルの火消しに追われる。
            </li>
            <li className="flex items-start gap-3">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
              現場スタッフに新しい「業務管理アプリ」の導入・教育を試みたが、入力が面倒だと定着せずに終わってしまった。
            </li>
            <li className="flex items-start gap-3">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
              定例会議の議事録作成に時間がかかり、本来の「誰が、いつまでに、何をやるか（TODO）」の共有が遅れている。
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
                 <MessageCircle className="h-5 w-5 text-neutral-400" />
              </div>
              <h3 className="mb-3 text-lg font-medium text-neutral-100">
                LINE等からの「日報・報告」自動変換
              </h3>
              <p className="text-sm leading-relaxed text-neutral-400">
                現場のスタッフは「普段使いのLINE」に音声メモや写真で「〇〇の作業完了、部材足りない」と送るだけ。AIが必要な情報を抽出し、社内の正式な日報フォーマットへテキストを自動整形。Kintoneや業務システムへ直接登録します。
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 p-6 hover:border-neutral-700 transition-colors">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900 border border-neutral-800">
                 <Mic className="h-5 w-5 text-neutral-400" />
              </div>
              <h3 className="mb-3 text-lg font-medium text-neutral-100">
                打ち合わせ議事録のAI自動要約とTODO抽出
              </h3>
              <p className="text-sm leading-relaxed text-neutral-400">
                現場や本社での定例会議の録音データ（またはオンライン会議のツール連携）から、文字起こしだけでなく内容を構造化して「決定事項」と「誰がいつまでにやるべきタスク（TODO）」をAIが自動抽出。関係者のチャットへ展開します。
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 p-6 hover:border-neutral-700 transition-colors">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900 border border-neutral-800">
                 <Timer className="h-5 w-5 text-neutral-400" />
              </div>
              <h3 className="mb-3 text-lg font-medium text-neutral-100">
                工程・スケジュール遅延の自動検知アラート
              </h3>
              <p className="text-sm leading-relaxed text-neutral-400">
                日報データや、資材の発注・納入システムのデータを横断的に監視。当初予定していたスケジュールから「一定日数の遅れ」や「天候不良による停滞」をシステム（n8n）が自動検知し、クリティカルになる前に管理者のSlack等のチャットへ警告通知を発生させます。
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 p-6 hover:border-neutral-700 transition-colors">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900 border border-neutral-800">
                 <Camera className="h-5 w-5 text-neutral-400" />
              </div>
              <h3 className="mb-3 text-lg font-medium text-neutral-100">
                写真整理・画像データ自動分類のRPA
              </h3>
              <p className="text-sm leading-relaxed text-neutral-400">
                現場から毎日送られてくる数十〜百枚の進捗写真などを、ファイル名や送信メッセージの内容に基づいて、AIが自動で「工区別」「日付別」「トラブル箇所」の適切なクラウドフォルダ（Google Drive等）に仕分けして保存します。
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
