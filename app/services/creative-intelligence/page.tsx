import { PricingSection } from "@/components/pricing-section";
import { FAQSection } from "@/components/faq-section";

export default function CreativeIntelligencePage() {
  return (
    <main className="min-h-screen bg-black text-neutral-50">
      <div className="section-inner py-16 md:py-20">
        <p className="section-eyebrow">
          SERVICE 04 — AI CREATIVE INTELLIGENCE STUDIO
        </p>

        <h1 className="mt-3 text-2xl font-semibold md:text-3xl lg:text-4xl">
          AI Creative Intelligence Studio
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-neutral-400 md:text-base">
          Sora / Runway / Midjourney / Pika などのツールを組み合わせ、
          コンセプトづくりからビジュアル生成、動画構成、納品フォーマット設計まで一気通貫でサポートします。
        </p>

        <div className="mt-8 md:mt-12 aspect-video w-full overflow-hidden rounded-xl border border-neutral-800">
          <img
            src="/images/creative.png"
            alt="AI Creative Intelligence Studio"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/30 p-6">
            <h2 className="text-sm font-semibold text-neutral-100 md:text-base">
              対応できるクリエイティブ
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-neutral-400">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1 w-1 rounded-full bg-neutral-600" />
                サービス紹介・採用向けショート動画
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1 w-1 rounded-full bg-neutral-600" />
                SNS用ビジュアル / バナー / サムネイル
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1 w-1 rounded-full bg-neutral-600" />
                LP用のキービジュアルや背景アート
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1 w-1 rounded-full bg-neutral-600" />
                AI生成を前提とした「企画・構成」からの伴走
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-neutral-900/30 p-6">
            <h2 className="text-sm font-semibold text-neutral-100 md:text-base">
              プロセス例
            </h2>
            <ol className="mt-4 space-y-3 text-sm text-neutral-400">
              <li className="flex items-start gap-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-800 text-[10px] text-neutral-300">1</span>
                目的・ターゲット・配信チャネルのヒアリング
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-800 text-[10px] text-neutral-300">2</span>
                コンセプト案・ビジュアルトーンの方向性整理
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-800 text-[10px] text-neutral-300">3</span>
                画像・動画生成のプロンプト設計とサンプル生成
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-800 text-[10px] text-neutral-300">4</span>
                フィードバックを踏まえてブラッシュアップ・納品
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
                title: "SNSショート動画量産",
                desc: "台本作成から音声合成、動画生成、字幕入れまでをAIで半自動化。週数本の投稿を低コストで実現。",
              },
              {
                title: "広告クリエイティブ生成",
                desc: "ターゲット層に合わせたバリエーション豊かなバナー画像を大量生成し、ABテストのサイクルを高速化。",
              },
              {
                title: "ブランドムービー制作",
                desc: "実写撮影が難しい抽象的なイメージや近未来的な世界観を、AI動画生成技術で表現し、ブランドイメージを刷新。",
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
            進化の速い画像・動画生成AIツールをキャッチアップし、最適な組み合わせで制作します。
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {["Midjourney", "Stable Diffusion", "Runway Gen-2/Gen-3", "Sora (OpenAI)", "Pika", "Luma Dream Machine", "Adobe Firefly", "ElevenLabs"].map((tech) => (
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
