"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    label: "STEP 01",
    title: "お問い合わせ（オンライン）",
    body: "現状のお困りごと・理想の姿・予算感などをざっくばらんにお聞きします。",
  },
  {
    label: "STEP 02",
    title: "現状整理 & ラフな設計",
    body: "業務フロー・使用ツール・データの流れを書き出し、「どこから手を付けるのが良さそうか」を一緒に決めます。",
  },
  {
    label: "STEP 03",
    title: "詳細設計 & 実装",
    body: "必要に応じてPoC（小さな実験）から実施し、確実に効果が出そうな部分から仕組み化していきます。",
  },
  {
    label: "STEP 04",
    title: "運用フォロー & 改善",
    body: "導入後もしばらくはチャットや定例でフォロー。現場の声を取り入れながら、少しずつ精度を高めます。",
  },
];

export function FlowSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  // 縦スクロールを横スクロールに変換
  // PCやスマホで横幅の差が出るため、全体の約 -65% を移動させる設定
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  return (
    <section ref={targetRef} className="relative h-[250vh] bg-black">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden border-b border-neutral-900/80">
        <div className="flex h-full w-full items-center">
          
          <div className="ml-5 md:ml-12 shrink-0 w-[80vw] md:w-[400px]">
            <p className="section-eyebrow">FLOW</p>
            <h2 className="section-title">制作・導入の流れ</h2>
            <p className="section-description mt-2 hidden md:block">
              （スクロールして進行をご確認ください）
            </p>
          </div>

          <motion.div style={{ x }} className="flex gap-8 px-10">
            {steps.map((step) => (
              <div
                key={step.label}
                className="w-[70vw] md:w-[350px] shrink-0 border-l border-neutral-800 bg-neutral-950/40 p-6 shadow-[0_0_20px_rgba(0,0,0,0.5)] rounded-r-xl"
              >
                <div className="text-[11px] uppercase tracking-[0.25em] text-neutral-500">
                  {step.label}
                </div>
                <p className="mt-4 text-base md:text-lg text-neutral-100 font-semibold">
                  {step.title}
                </p>
                <p className="section-description mt-3">{step.body}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

