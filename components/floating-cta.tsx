"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { MessageSquare } from "lucide-react";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // 画面を少しスクロールしたら表示する
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          className="fixed bottom-6 right-6 z-50 md:bottom-10 md:right-10"
        >
          <Link href="/contact">
            <div className="group relative flex h-14 items-center justify-center gap-2 rounded-full bg-white px-6 shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all hover:scale-105 hover:bg-neutral-200">
              {/* 背後のふわっとした光（Ping Animation） */}
              <div className="absolute -inset-1 -z-10 rounded-full bg-white/30 opacity-75 blur-md transition-all group-hover:animate-pulse group-hover:bg-white/50" />
              
              <MessageSquare className="h-5 w-5 text-black" />
              <span className="text-sm font-semibold text-black">無料相談</span>
            </div>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
