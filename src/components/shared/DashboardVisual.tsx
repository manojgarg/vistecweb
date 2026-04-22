"use client";

import { motion } from "framer-motion";
import { TrendingDown, TrendingUp, ShieldCheck, Activity } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const chartData = [62, 58, 55, 51, 47, 44, 39, 35, 32, 29, 26, 24];

export function DashboardVisual() {
  const max = Math.max(...chartData);
  const points = chartData
    .map((v, i) => {
      const x = (i / (chartData.length - 1)) * 320;
      const y = 140 - (v / max) * 120;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");

  return (
    <div className="relative">
      <div aria-hidden className="absolute -inset-8 bg-gradient-mesh opacity-60 blur-2xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative grid gap-4"
      >
        <div className="grid grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-xl border border-white/10 bg-navy-900/70 p-5 backdrop-blur-xl shadow-lg"
          >
            <div className="flex items-center justify-between">
              <span className="text-caption uppercase tracking-widest text-gray-400">
                Denial rate
              </span>
              <TrendingDown className="h-4 w-4 text-blue-400" aria-hidden />
            </div>
            <div className="mt-3 text-3xl font-bold text-white">
              <AnimatedCounter value={7.2} suffix="%" decimals={1} />
            </div>
            <div className="mt-2 text-caption text-blue-400">−68% vs baseline</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-xl border border-white/10 bg-navy-900/70 p-5 backdrop-blur-xl shadow-lg"
          >
            <div className="flex items-center justify-between">
              <span className="text-caption uppercase tracking-widest text-gray-400">
                Clean claim
              </span>
              <TrendingUp className="h-4 w-4 text-blue-400" aria-hidden />
            </div>
            <div className="mt-3 text-3xl font-bold text-white">
              <AnimatedCounter value={98.5} suffix="%" decimals={1} />
            </div>
            <div className="mt-2 text-caption text-blue-400">+14 pts industry avg</div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-xl border border-white/10 bg-navy-900/70 p-5 backdrop-blur-xl shadow-lg"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-caption uppercase tracking-widest text-gray-400">
                AR days (90-day trend)
              </div>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="font-mono text-2xl font-bold text-white">
                  <AnimatedCounter value={31} />
                </span>
                <span className="text-caption text-blue-400">−20 days</span>
              </div>
            </div>
            <Activity className="h-4 w-4 text-blue-400" aria-hidden />
          </div>
          <svg
            viewBox="0 0 320 150"
            className="mt-4 h-24 w-full"
            preserveAspectRatio="none"
            aria-hidden
          >
            <defs>
              <linearGradient id="line-grad" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#F55800" />
                <stop offset="100%" stopColor="#FF7A2E" />
              </linearGradient>
              <linearGradient id="area-grad" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#F55800" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#F55800" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.polyline
              points={points}
              fill="none"
              stroke="url(#line-grad)"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.polygon
              points={`0,150 ${points} 320,150`}
              fill="url(#area-grad)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            />
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 rounded-xl border border-blue-600/40 bg-blue-600/10 px-5 py-4 backdrop-blur-xl"
        >
          <div className="grid h-9 w-9 place-items-center rounded-md bg-blue-600/20 text-blue-600">
            <ShieldCheck className="h-4 w-4" />
          </div>
          <div>
            <div className="text-body-sm font-semibold text-gray-900">PARCS prevented 142 denials this week</div>
            <div className="text-caption text-gray-600">Root cause: coding · Resolved pre-submission</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
