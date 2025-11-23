// components/hero.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-neutral-900/70 bg-black">
      {/* 背景ネットワーク */}
      <NeuralMeshBackground />

      {/* 左側の黒グラデで文字を読みやすく */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

      {/* コンテンツ本体 */}
      <div className="relative z-10">
        <div className="section-inner flex min-h-[calc(100vh-3.5rem)] items-center py-14 md:py-20">
          <div className="max-w-xl space-y-7 md:space-y-8">
            <p className="text-xs font-medium tracking-[0.35em] text-neutral-500">
              SOFT FRAME
            </p>

            <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
              自由に生きる人の、<br />
              やわらかなフレームになる。
            </h1>

            <p className="text-sm leading-relaxed text-neutral-300 md:text-base">
              AI × 自動化 × デザインで、あなたの時間に「余白」をつくるクリエイティブパートナー。
              中小企業・個人事業主・店舗の現場に寄り添いながら、やさしく仕組み化していきます。
            </p>

            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="rounded-full bg-neutral-50 px-6 text-xs font-semibold text-neutral-950 hover:bg-white"
              >
                <a href="#contact">まずは無料で相談する</a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="rounded-full border-neutral-600/70 bg-transparent px-6 text-xs text-neutral-100 hover:bg-neutral-900"
              >
                <a href="#services">できることを見る</a>
              </Button>
            </div>

            <p className="text-[10px] leading-relaxed text-neutral-500">
              *「AI × 自動化 × クリエイティブ」で常識の外に余白をつくり、あなたのビジネスのために設計し直します。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * 幾何学的なニューラルネットワーク風の背景
 * - 黒ベース
 * - 白＆エメラルドの細いライン
 * - 点ごとにバラバラな揺れとパルス
 */
function NeuralMeshBackground() {
  return (
    <div className="pointer-events-none absolute inset-0">
      {/* ベースの黒＋ごく薄いグラデーション */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-950 to-black" />

      {/* ネットワーク本体 */}
      <motion.svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        initial="hidden"
        animate="visible"
      >
        {/* 下地の薄いグリッド（かなり控えめ） */}
        <BaseGrid />

        {/* 動くネットワーク */}
        <DynamicNetwork />
      </motion.svg>
    </div>
  );
}

/** 薄い下地のグリッド */
function BaseGrid() {
  const cols = 12;
  const rows = 8;
  const vertical = [];
  const horizontal = [];

  for (let i = 0; i <= cols; i++) {
    const x = (100 / cols) * i;
    vertical.push(
      <line
        key={`v-${i}`}
        x1={x}
        y1={0}
        x2={x}
        y2={100}
        stroke="rgba(148,163,184,0.12)"
        strokeWidth={0.04}
      />
    );
  }

  for (let j = 0; j <= rows; j++) {
    const y = (100 / rows) * j;
    horizontal.push(
      <line
        key={`h-${j}`}
        x1={0}
        y1={y}
        x2={100}
        y2={y}
        stroke="rgba(148,163,184,0.12)"
        strokeWidth={0.04}
      />
    );
  }

  return (
    <g>
      {vertical}
      {horizontal}
    </g>
  );
}

/** 実際に動くノード＋ライン */
function DynamicNetwork() {
  const nodes: { x: number; y: number; group: number }[] = [];
  const cols = 10;
  const rows = 6;

  // 少しランダムに寄せたノードを生成
  for (let i = 0; i <= cols; i++) {
    for (let j = 0; j <= rows; j++) {
      const gx = 100 / cols;
      const gy = 100 / rows;
      const seed = i * 31 + j * 17;
      const jitterX = (pseudoRandom(seed) - 0.5) * gx * 0.45;
      const jitterY = (pseudoRandom(seed + 1) - 0.5) * gy * 0.45;

      nodes.push({
        x: i * gx + jitterX,
        y: j * gy + jitterY,
        group: (i + j) % 3,
      });
    }
  }

  // 全ノードをつないだエッジ（隣接＋対角線＋たまにスキップ）
  const edges: { a: number; b: number; accent: boolean }[] = [];
  const idx = (i: number, j: number) => i * (rows + 1) + j;

  for (let i = 0; i <= cols; i++) {
    for (let j = 0; j <= rows; j++) {
      const current = idx(i, j);
      if (i < cols) {
        const to = idx(i + 1, j);
        edges.push({
          a: current,
          b: to,
          accent: (i + j) % 4 === 0,
        });
      }
      if (j < rows) {
        const to = idx(i, j + 1);
        edges.push({
          a: current,
          b: to,
          accent: (i + j) % 5 === 0,
        });
      }
      if (i < cols && j < rows && (i + j) % 3 === 0) {
        const to = idx(i + 1, j + 1);
        edges.push({
          a: current,
          b: to,
          accent: (i + j) % 6 === 0,
        });
      }
      // たまに2マス飛びで斜めに結ぶ
      if (i < cols - 1 && j > 0 && (i + j) % 7 === 0) {
        const to = idx(i + 2, j - 1);
        if (to < nodes.length) {
          edges.push({
            a: current,
            b: to,
            accent: true,
          });
        }
      }
    }
  }

  return (
    <g>
      {/* ライン群：細くて本数多め。一本ずつ違う揺れ & パルス */}
      {edges.map((edge, index) => {
        const a = nodes[edge.a];
        const b = nodes[edge.b];
        const baseDelay = (index % 13) * 0.18;
        const stroke = edge.accent
          ? "rgba(45,212,191,0.85)" // エメラルド
          : "rgba(248,250,252,0.42)"; // 白っぽい

        const width = edge.accent ? 0.22 : 0.06;

        // アニメーションで少しだけ端を揺らす
        const wiggleAmp = edge.accent ? 0.8 : 0.4;

        return (
          <motion.line
            key={index}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            stroke={stroke}
            strokeWidth={width}
            strokeLinecap="round"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.15, edge.accent ? 0.9 : 0.55, 0.2],
              x1: [a.x - wiggleAmp, a.x + wiggleAmp * 0.5, a.x],
              y1: [a.y + wiggleAmp * 0.5, a.y - wiggleAmp, a.y],
              x2: [b.x + wiggleAmp * 0.5, b.x - wiggleAmp, b.x],
              y2: [b.y - wiggleAmp, b.y + wiggleAmp * 0.5, b.y],
              strokeDashoffset: edge.accent ? [40, 0, -40] : 0,
            }}
            transition={{
              duration: edge.accent ? 10 : 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: baseDelay,
            }}
            strokeDasharray={edge.accent ? "3 14" : "0.1 8"}
          />
        );
      })}

      {/* ノード群：小さめで、個別に点滅＋じわっと揺れる */}
      {nodes.map((node, index) => {
        const delay = (index % 17) * 0.15;
        const isAccent = node.group === 0;
        const baseRadius = isAccent ? 0.5 : 0.32;

        return (
          <g key={index}>
            {/* 外側のうっすらグロー */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={baseRadius * 3}
              fill={
                isAccent
                  ? "rgba(45,212,191,0.25)"
                  : "rgba(226,232,240,0.15)"
              }
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.0, 0.5, 0.1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay,
              }}
            />
            {/* 中心の点 */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={baseRadius}
              fill={
                isAccent ? "rgba(45,212,191,0.95)" : "rgba(248,250,252,0.95)"
              }
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.3, 1, 0.3],
                r: [baseRadius * 0.9, baseRadius * 1.1, baseRadius],
              }}
              transition={{
                duration: 4.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay,
              }}
            />
          </g>
        );
      })}
    </g>
  );
}

/**
 * SSRでもズレないようにする簡易疑似乱数
 */
function pseudoRandom(seed: number) {
  const x = Math.sin(seed * 127.1) * 43758.5453;
  return x - Math.floor(x);
}
