// components/pricing-section.tsx

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Light",
    price: "¥50,000〜",
    tag: "まずは1テーマから試したい方向け",
    features: ["単発相談 90分", "簡易レポート", "導入イメージの整理"],
  },
  {
    name: "Standard",
    price: "¥150,000〜 / 月",
    tag: "AI × 自動化を本格的に進めたいチーム向け",
    features: [
      "月1〜2回のオンラインMTG",
      "n8nなどを用いた自動化フロー構築",
      "簡易ダッシュボード構築",
    ],
  },
  {
    name: "Partner",
    price: "個別お見積もり",
    tag: "中長期の伴走・複数拠点展開向け",
    features: [
      "経営層〜現場までを含めた設計",
      "AI研修・リスキリングプログラム",
      "継続的な改善サイクル設計",
    ],
  },
];

type PricingProps = {
  type?: "standard" | "consult";
};

export function PricingSection({ type = "standard" }: PricingProps) {
  return (
    <section id="pricing" className="border-b border-neutral-900/80">
      <div className="section-inner py-10 md:py-14">
        <p className="section-eyebrow">PRICING</p>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="section-title">
            {type === "standard" ? (
              <>
                無理のないサイズから、
                <br />
                一緒に始めていきましょう。
              </>
            ) : (
              <>
                お客様の課題に合わせて、
                <br />
                最適なプランをご提案します。
              </>
            )}
          </h2>
          <p className="section-description max-w-md">
            {type === "standard"
              ? "ここに記載の金額はあくまで目安です。工数や関わり方によって変動するため、まずはお問い合わせで現状をお聞かせください。"
              : "本サービスは、要件や規模により費用が異なります。ヒアリングの上、個別にお見積もりを作成いたしますので、まずはお気軽にご相談ください。"}
          </p>
        </div>

        <div className="mt-8">
          {type === "standard" ? (
            <div className="grid gap-4 md:grid-cols-3">
              {plans.map((plan, idx) => (
                <Card
                  key={plan.name}
                  className={`border-neutral-800/80 bg-neutral-950/70 text-neutral-100 shadow-[0_0_40px_rgba(0,0,0,0.8)] ${idx === 1 ? "border-neutral-500/90" : ""
                    }`}
                >
                  <CardHeader className="space-y-2">
                    <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-500">
                      {plan.name}
                    </p>
                    <CardTitle className="text-lg">{plan.price}</CardTitle>
                    <p className="text-xs text-neutral-400">{plan.tag}</p>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <ul className="space-y-1 text-xs text-neutral-400">
                      {plan.features.map((f) => (
                        <li key={f}>・{f}</li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      variant={idx === 1 ? "default" : "outline"}
                      className={`mt-3 h-8 rounded-full text-[11px] ${idx === 1
                          ? "bg-neutral-100 text-black hover:bg-white"
                          : "border-neutral-700 bg-transparent text-neutral-100 hover:bg-neutral-900"
                        }`}
                    >
                      <Link href="/contact">このプランについて問い合わせる</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="border-neutral-800/80 bg-neutral-950/70 text-neutral-100 shadow-[0_0_40px_rgba(0,0,0,0.8)]">
              <CardHeader>
                <CardTitle className="text-xl">Custom Plan</CardTitle>
                <p className="text-sm text-neutral-400">
                  仕様確認・要件定義を行い、都度お見積もり
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-sm text-neutral-300 leading-relaxed">
                  プロジェクトの規模、技術的な難易度、納期などに合わせて柔軟にプランニングいたします。
                  <br />
                  「まずは何ができるか知りたい」という段階でも構いません。
                </p>
                <Button
                  asChild
                  className="h-10 rounded-full bg-neutral-100 px-8 text-sm font-medium text-black hover:bg-white"
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    お問い合わせ・お見積もり依頼 <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
