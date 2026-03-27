// components/services-section.tsx

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const industryServices = [
  {
    title: "建設業向けAI自動化",
    body: "図面からの積算支援、現場写真からの台帳自動生成など、現場監督をパソコン仕事から解放します。",
    href: "/industry/construction",
    image: "/images/construction_ai.png",
    features: ["見積書・図面AI読み取り", "工事写真台帳の自動生成", "社内AIチャットボット"],
  },
  {
    title: "製造業向けAI自動化",
    body: "アナログなFAX受発注の自動入力や、定年退職するベテラン職人のノウハウ伝承をAIで実現します。",
    href: "/industry/manufacturing",
    image: "/images/manufacturing_ai.png",
    features: ["FAX・PDFのAI-OCR化", "匠の技のRAG化", "過去データの横断検索"],
  },
];

const taskServices = [
  {
    title: "営業・マーケティング",
    body: "提案書や見積もりの半自動生成、SNS更新などで「売上を作る」コア業務に集中できる環境を作ります。",
    href: "/task/sales-marketing",
    image: "/images/sales_ai.png",
    features: ["提案書ドラフト生成", "SNS自動運用", "顧客リスト自動抽出"],
  },
  {
    title: "事務・バックオフィス",
    body: "紙やPDFの請求書入力、経費精算の自動チェックなど「見えない残業」をゼロにします。",
    href: "/task/back-office",
    image: "/images/backoffice_ai.png",
    features: ["会計システム自動連携", "経費精算自動チェック", "定型メール自動返信"],
  },
  {
    title: "採用・労務・人事",
    body: "個別スカウト文面の生成や面接調整、社内規定FAQ対応など、採用と定着のワークフローを効率化。",
    href: "/task/hr",
    image: "/images/hr_ai.png",
    features: ["スカウト文面自動生成", "面接日程の自動調整", "社内ヘルプデスクAI"],
  },
  {
    title: "現場・プロジェクト管理",
    body: "LINEからの報告を日報へ自動変換。現場と本社の情報伝達のタイムラグを完全に解消します。",
    href: "/task/field-management",
    image: "/images/field_management_ai.png",
    features: ["LINE報告の自動日報化", "議事録AI自動要約", "遅延検知アラート"],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="border-b border-neutral-900/80">
      <div className="section-inner py-10 md:py-14">
        <p className="section-eyebrow">SOLUTIONS</p>

        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end mb-12">
          <h2 className="section-title">
            INDUSTRY & TASK
            <br />
            業界・業務特化型AI自動化
          </h2>
          <p className="section-description max-w-md">
            「AIを導入する」のではなく「現場の悩みを解決する」。
            業界特有のアナログ課題と、各部門の定型業務をピンポイントで狙い撃ちし、最小投資で最大の効率化を実現します。
          </p>
        </div>

        {/* Industry Section */}
        <div className="mb-16">
          <h3 className="text-lg font-semibold text-neutral-200 border-l-4 border-neutral-500 pl-3 mb-6">業界別ソリューション</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {industryServices.map((service) => (
              <Card
                key={service.title}
                className="flex flex-col overflow-hidden border-neutral-800/80 bg-neutral-950/70 text-neutral-100 shadow-[0_0_40px_rgba(0,0,0,0.7)] transition-transform hover:-translate-y-0.5 hover:border-neutral-600/80"
              >
                <div className="relative h-48 w-full bg-neutral-900">
                  <Image src={service.image} alt={service.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover opacity-80 transition-opacity hover:opacity-100" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-lg md:text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col justify-between gap-6 p-0">
                    <div className="space-y-4">
                      <p className="text-xs text-neutral-300 md:text-sm">{service.body}</p>
                      <ul className="space-y-1">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-[11px] text-neutral-500">
                            <span className="block h-1 w-1 rounded-full bg-neutral-600" />{feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button asChild variant="link" className="h-auto w-fit p-0 text-xs text-neutral-300 hover:text-white group">
                      <Link href={service.href} className="flex items-center gap-1">View Detail<ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" /></Link>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Task Section */}
        <div>
          <h3 className="text-lg font-semibold text-neutral-200 border-l-4 border-neutral-500 pl-3 mb-6">業務別ソリューション</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {taskServices.map((service) => (
              <Card
                key={service.title}
                className="flex flex-col overflow-hidden border-neutral-800/80 bg-neutral-950/70 text-neutral-100 shadow-[0_0_40px_rgba(0,0,0,0.7)] transition-transform hover:-translate-y-0.5 hover:border-neutral-600/80"
              >
                <div className="relative h-48 w-full bg-neutral-900">
                  <Image src={service.image} alt={service.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover opacity-80 transition-opacity hover:opacity-100" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-lg md:text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col justify-between gap-6 p-0">
                    <div className="space-y-4">
                      <p className="text-xs text-neutral-300 md:text-sm">{service.body}</p>
                      <ul className="space-y-1">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-[11px] text-neutral-500">
                            <span className="block h-1 w-1 rounded-full bg-neutral-600" />{feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button asChild variant="link" className="h-auto w-fit p-0 text-xs text-neutral-300 hover:text-white group">
                      <Link href={service.href} className="flex items-center gap-1">View Detail<ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" /></Link>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

