"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "開発期間はどのくらいかかりますか？",
    answer:
      "プロジェクトの規模により異なりますが、小規模な自動化ツールであれば2週間〜1ヶ月、本格的なWebアプリケーション開発であれば2〜3ヶ月程度が目安となります。まずはヒアリングにて要件を整理し、概算スケジュールをご提示いたします。",
  },
  {
    question: "AIやITの知識が全くなくても大丈夫ですか？",
    answer:
      "はい、全く問題ございません。専門用語を使わず、分かりやすい言葉でご説明いたします。現状の課題や「こうなったらいいな」というイメージをお話しいただくだけで、最適な解決策をご提案させていただきます。",
  },
  {
    question: "予算が決まっているのですが、その範囲内で提案してもらえますか？",
    answer:
      "はい、ご予算に合わせたプランニングが可能です。「まずはここだけ自動化する」「段階的に機能を拡張する」など、柔軟にご提案させていただきますので、お気軽にご相談ください。",
  },
  {
    question: "開発後の保守・運用サポートはありますか？",
    answer:
      "はい、ございます。システムの安定稼働を見守る保守プランや、定期的な改善提案を行う伴走支援プランなどをご用意しております。導入後も安心して使い続けていただけるようサポートいたします。",
  },
  {
    question: "遠方ですが、依頼は可能ですか？",
    answer:
      "はい、全国どこからでもご依頼可能です。基本的にはZoomやGoogle Meetを用いたオンライン会議にて進行させていただきます。必要に応じて対面での打ち合わせも可能です（交通費別途）。",
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
            お客様からよくいただくご質問をまとめました。
            <br />
            その他ご不明な点がございましたら、お気軽にお問い合わせください。
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
