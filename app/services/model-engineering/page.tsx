import { PricingSection } from "@/components/pricing-section";
import { FAQSection } from "@/components/faq-section";

export default function ModelEngineeringPage() {
  return (
    <main className="min-h-screen bg-black text-neutral-50">
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

        <div className="mt-8 md:mt-12 aspect-video w-full overflow-hidden rounded-xl border border-neutral-800">
          <img
            src="/images/model.png"
            alt="AI Model Engineering Lab"
            className="h-full w-full object-cover"
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
      <FAQSection />
    </main>
  );
}
