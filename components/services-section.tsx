// components/services-section.tsx

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "AI Automation Design",
    body: "n8n / Zapier / Make / API連携を活用し、反復作業や事務処理を“静かに流れるフロー”として自動化します。業務効率化と人的コスト削減を同時に実現。",
    href: "/services/automation",
    image: "/images/automation.png",
    features: [
      "業務フローの可視化・再設計",
      "ノーコードツールによる自動化実装",
      "API連携によるツール間接続",
    ],
  },
  {
    title: "AI Training & Reskilling Program",
    body: "企業・学校向けに実施している生成AI研修をベースに、現場メンバーのAIリテラシーを体系的に底上げ。AI活用の“内製化”を伴走支援します。",
    href: "/services/training",
    image: "/images/traning.png",
    features: [
      "階層別・職種別カリキュラム",
      "実践的なプロンプトエンジニアリング",
      "社内ガイドライン策定支援",
    ],
  },
  {
    title: "AI Model Engineering Lab",
    body: "Fine-tuning / LoRA / RLAIF / Attention最適化 / RAG強化など、AIモデルそのものを性能向上。企業専用の“強いAI”を設計します。",
    href: "/services/model-engineering",
    image: "/images/model.png",
    features: [
      "LLMのファインチューニング",
      "RAG（検索拡張生成）システムの構築",
      "特化型モデルの検証・開発",
    ],
  },
  {
    title: "AI Creative Intelligence Studio",
    body: "Sora / Runway / Midjourney / Pika を用い、画像・動画・構成案・ストーリー生成まで一貫サポート。AI × 映像の新しい表現を創造します。",
    href: "/services/creative-intelligence",
    image: "/images/creative.png",
    features: [
      "AIによる画像・動画生成",
      "クリエイティブ制作の効率化",
      "新規ブランド・IP開発支援",
    ],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="border-b border-neutral-900/80">
      <div className="section-inner py-10 md:py-14">
        <p className="section-eyebrow">SERVICES</p>

        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <h2 className="section-title">
            AI × AUTOMATION × CREATIVE
            <br />
            未来の業務設計を、いま。
          </h2>
          <p className="section-description max-w-md">
            現場の「時間が奪われている場所」を見える化し、
            自動化・教育・AIモデル高度化・クリエイティブの4軸から
            最小投資で最大インパクトを生む支援を行います。
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Card
              key={service.title}
              className="flex flex-col overflow-hidden border-neutral-800/80 bg-neutral-950/70 text-neutral-100 
                         shadow-[0_0_40px_rgba(0,0,0,0.7)]
                         transition-transform transition-colors
                         hover:-translate-y-0.5 hover:border-neutral-600/80 hover:bg-neutral-900/80"
            >
              <div className="relative h-48 w-full bg-neutral-900">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover opacity-80 transition-opacity group-hover:opacity-100"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-lg md:text-xl">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col justify-between gap-6 p-0">
                  <div className="space-y-4">
                    <p className="text-xs text-neutral-400 md:text-sm">
                      {service.body}
                    </p>
                    <ul className="space-y-1">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-[11px] text-neutral-500"
                        >
                          <span className="block h-1 w-1 rounded-full bg-neutral-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    asChild
                    variant="link"
                    className="h-auto w-fit p-0 text-xs text-neutral-300 hover:text-white hover:no-underline group"
                  >
                    <Link href={service.href} className="flex items-center gap-1">
                      View Detail
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

