// components/services-section.tsx

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "業務フロー自動化・効率化支援",
    body: "API連携やノーコードツールを活用し、手作業に依存した事務処理や反復業務を自動化。人為的ミスの削減とコスト適正化により、利益率の高い組織体制を構築します。",
    href: "/services/automation",
    image: "/images/jidouka.jpeg",
    features: [
      "業務フローの可視化・再設計",
      "ノーコードツールによる自動化実装",
      "API連携によるツール間接続",
    ],
  },
  {
    title: "AI人材育成・内製化支援",
    body: "一時的なツール導入で終わらせず、現場社員がAIを使いこなせる状態まで伴走。「自走できる組織」への変革を促し、長期的な競争力を高めます。",
    href: "/services/training",
    image: "/images/kyouiku.jpeg",
    features: [
      "階層別・職種別カリキュラム",
      "実践的なプロンプトエンジニアリング",
      "社内ガイドライン策定支援",
    ],
  },
  {
    title: "高度AI導入・技術顧問",
    body: "大規模言語モデル（LLM）の専門的知見に基づき、貴社独自のAI環境を構築。※RLHF/LoRA等の高度技術も踏まえ、セキュリティと実益を兼ね備えた最適解を提案します。",
    href: "/services/model-engineering",
    image: "/images/kouseido.jpeg",
    features: [
      "LLMのファインチューニング",
      "RAG（検索拡張生成）システムの構築",
      "特化型モデルの検証・開発",
    ],
  },
  {
    title: "生成AI活用ブランディング・制作",
    body: "最新の生成AI技術を駆使し、高品質なクリエイティブを迅速に制作。広報・販促活動におけるコストパフォーマンスを最大化し、認知拡大に貢献します。",
    href: "/services/creative-intelligence",
    image: "/images/media.jpeg",
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

