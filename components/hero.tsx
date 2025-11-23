"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { newsItems } from "@/lib/data";

/**
 * Hero セクション
 * - 画面上部いっぱいのキャッチコピーエリア
 * - 背景は Canvas で描画する幾何学的なネットワークアニメーション
 */
export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // === Canvas アニメーション（幾何学的ネットワーク） ==========================
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // キャンバスサイズ
    let width = 0;
    let height = 0;

    // 動く点（ノード）たち
    let points: { x: number; y: number; vx: number; vy: number }[] = [];

    // requestAnimationFrame の ID（クリーンアップ用）
    let frameId: number;

    // 画面幅に応じた点の数を決める
    const getPointCount = (w: number) => {
      if (w > 1200) return 130;
      if (w > 768) return 100;
      return 70;
    };

    // キャンバスサイズと座標系の更新
    const resizeCanvas = () => {
      const ratio = window.devicePixelRatio || 1;
      const newWidth = canvas.clientWidth;
      const newHeight = canvas.clientHeight;

      canvas.width = newWidth * ratio;
      canvas.height = newHeight * ratio;

      // 拡大率に応じてスケールを合わせる
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

      // 幅が変わった時のみポイントを再配置（モバイルのアドレスバー伸縮対策）
      if (newWidth !== width) {
        width = newWidth;
        height = newHeight;
        initPoints();
      } else {
        // 高さが変わっただけなら、高さ情報のみ更新してポイントは維持
        height = newHeight;
      }
    };

    // 点（ノード）の初期化
    const initPoints = () => {
      const count = getPointCount(width);
      points = [];

      for (let i = 0; i < count; i++) {
        points.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.25, // 速度（X）
          vy: (Math.random() - 0.5) * 0.25, // 速度（Y）
        });
      }
    };

    // 1フレーム分の描画処理
    const drawFrame = () => {
      // キャンバス全体をクリア
      ctx.clearRect(0, 0, width, height);

      // --- 点の更新 & 描画 ----------------------------------------------------
      ctx.fillStyle = "rgba(255,255,255,0.8)";

      points.forEach((p) => {
        // 位置を更新
        p.x += p.vx;
        p.y += p.vy;

        // 端まで行ったら反対側に回り込む
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // 点（ノード）を小さく描画
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.1, 0, Math.PI * 2);
        ctx.fill();
      });

      // --- 点同士を線で結ぶ ---------------------------------------------------
      const maxDist = 180; // 繋げる距離のしきい値（少し広げる）

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const a = points[i];
          const b = points[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const t = 1 - dist / maxDist; // 近いほど 1 に近づく
            const alpha = t * 0.8; // 透明度（はっきり見えるように 0.35 -> 0.8）

            // 一部の線だけアクセントカラー（エメラルド）にする
            const accent = (i * 17 + j * 13) % 23 === 0;

            ctx.strokeStyle = accent
              ? `rgba(45,212,191,${alpha})` // エメラルド
              : `rgba(255,255,255,${alpha})`; // 白
            ctx.lineWidth = accent ? 1.0 : 0.5; // 線を太くする

            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // 次のフレームを予約
      frameId = requestAnimationFrame(drawFrame);
    };

    // 初期セットアップ
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    frameId = requestAnimationFrame(drawFrame);

    // クリーンアップ（コンポーネントが破棄されたら実行）
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(frameId);
    };
  }, []);

  // === レイアウト（テキスト & CTA） ==========================================
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-neutral-900 bg-black"
    >
      {/* ▼ 背景キャンバス（幾何学的ネットワーク） */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      {/* ▼ 薄い黒グラデーション（テキストを読みやすくするためのヴェール） */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />

      {/* ▼ テキストコンテンツ */}
      <div className="relative z-10 mx-auto flex min-h-[88dvh] max-w-6xl flex-col items-start justify-center px-4 py-20 md:min-h-[93dvh] md:px-6 lg:py-28">
        <motion.div
          className="max-w-xl space-y-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* タグライン */}
          <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 md:text-xs">
            AI × AUTOMATION × DESIGN
          </p>

          {/* メインコピー */}
          <h1
            className="text-2xl font-bold leading-tight text-neutral-50 
             sm:text-3xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-snug"
          >
            <span className="whitespace-nowrap">
              自由に生きられる世界を創る。
            </span>
          </h1>
          {/* サブコピー */}
          <p className="text-sm leading-relaxed text-neutral-400 md:text-lg md:leading-relaxed">
            雑務や反復作業は、AIと自動化に預けて。
            <br />
            あなた自身は「創る」「決める」に集中できる世界へ。
          </p>

          {/* News Section */}
          <div id="news" className="mt-16 w-full max-w-md rounded-2xl border border-white/10 bg-black/20 p-5 backdrop-blur-sm md:mt-20 md:bg-neutral-950/30 md:backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-[10px] font-medium tracking-widest text-neutral-400">NEWS</span>
              <a href="/news" className="text-[10px] text-neutral-400 hover:text-neutral-200 transition-colors">View All →</a>
            </div>
            <ul className="mt-4 space-y-3">
              {newsItems.slice(0, 3).map((item, i) => (
                <li key={i} className="group flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
                  <span className="text-[10px] text-neutral-500 font-mono group-hover:text-neutral-400 transition-colors">{item.date}</span>
                  <a href="/news" className="text-xs text-neutral-300 group-hover:text-white transition-colors line-clamp-1">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}