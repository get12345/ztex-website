"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "まだAIで何ができるか具体的になっていませんが、相談しても良いですか？",
    answer:
      "はい、もちろんです。「何ができるか」の整理からご支援するのが私たちの役割です。貴社の現状の業務フローや経営課題をヒアリングさせていただき、「どこにAIを適用すれば最も利益率が上がるか」という視点で、具体的な活用プランをご提案いたします。",
  },
  {
    question: "アナログな業務が多いですが、自動化は可能ですか？",
    answer:
      "可能です。いきなりすべてをデジタル化するのではなく、手書き書類のOCR（デジタル読み取り）化や、電話対応の自動文字起こしなど、アナログ業務とデジタル技術を繋ぐ設計を行います。現場の混乱を避け、段階的に効率化を進めるプランを策定します。",
  },
  {
    question: "情報漏洩やセキュリティ面が心配です。",
    answer:
      "セキュリティは最優先事項として設計します。貴社のデータが外部の学習に利用されないセキュアな環境構築（Azure OpenAI Service 等の活用）や、ローカル環境でのLLM構築も可能です。企業ガバナンスに準拠した導入をご提案します。",
  },
  {
    question: "社内にエンジニアがいませんが、運用は可能ですか？",
    answer:
      "問題ございません。システムを納品して終わりではなく、貴社の「社外システム部」として伴走いたします。また、最終的には社内の皆様がご自身でツールを扱えるよう、実務に即したトレーニングや内製化支援も並行して行います。",
  },
  {
    question: "AI導入だけでなく、Web制作やブランディングも依頼できますか？",
    answer:
      "はい、一気通貫でお引き受け可能です。AIを活用したクリエイティブ制作（画像・動画生成）から、Webサイト・LPへの実装、その後のマーケティング施策まで、全体設計を含めてサポートできる点が弊社の強みです。",
  },
  {
    question: "自社専用のAI（ファインチューニング等）を構築することはできますか？",
    answer:
      "可能です。一般的なAI活用だけでなく、貴社独自のナレッジを学習させたRAG構築や、特定タスクに特化させるための追加学習（LoRA / RLHF等の高度技術）にも対応しています。技術的な難易度が高い案件もまずはご相談ください。",
  },
  {
    question: "予算が限られていますが、スモールスタートは可能ですか？",
    answer:
      "推奨しております。最初から大規模なシステムを組むのではなく、特定の業務フローひとつを自動化するPoC（概念実証）から始め、費用対効果を確認しながら段階的に展開範囲を広げる進め方が最もリスクが低く、確実です。",
  },
  {
    question: "開発期間の目安はどのくらいですか？",
    answer:
      "プロジェクトによりますが、業務改善ツールであれば2週間〜1ヶ月、本格的なAIシステム開発であれば2〜3ヶ月程度が目安です。スピード感を重視しつつ、現場で「本当に使える」品質まで作り込む工程を重視しています。",
  },
];

export function FAQSection() {
  return (
    <section className="border-b border-neutral-900/80 bg-black">
      <div className="section-inner py-20 md:py-28">
        <div className="mb-12 md:mb-16">
          <p className="section-eyebrow">FAQ</p>
          <h2 className="section-title">よくあるご質問</h2>
          <p className="section-description">
            AI導入から「経営と現場の課題解決」まで。
            <br />
            経営者様・プロジェクト責任者様から寄せられる主な疑問にお答えします。
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="border border-neutral-800 bg-neutral-900/30 px-6 rounded-lg data-[state=open]:bg-neutral-900/50 transition-colors"
              >
                <AccordionTrigger className="text-left text-sm md:text-base font-medium text-neutral-200 hover:text-white py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-[15px] text-neutral-400 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
