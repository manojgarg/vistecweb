"use client";

import { motion } from "framer-motion";
import { Brain, FileText, Coins, RefreshCcw } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Denial Prediction",
    description:
      "Analyzes 847 variables per claim to predict denial probability before submission.",
    bullets: ["Pre-submission risk scoring", "Payer-specific pattern detection", "Confidence thresholds per code"],
  },
  {
    icon: FileText,
    title: "Coding Optimization",
    description:
      "NLP-driven chart review that identifies missed charges, coding errors, and documentation gaps.",
    bullets: ["Transformer-based NLP", "Specialty-tuned rule engines", "CDI alerts in the chart workflow"],
  },
  {
    icon: Coins,
    title: "Payment Intelligence",
    description:
      "Detects underpayments, contractual variances, and payer-specific anomalies in real-time.",
    bullets: ["Contract rate benchmarking", "Anomaly detection", "Root-cause variance drill-down"],
  },
  {
    icon: RefreshCcw,
    title: "Continuous Learning",
    description:
      "Every claim outcome feeds back into the model. PARCS gets smarter with every transaction.",
    bullets: ["Per-client fine-tuning", "Outcome-labeled retraining", "Drift monitoring + rollback"],
  },
];

export function AIEngineDetail() {
  return (
    <motion.ul
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, margin: "-80px" }}
      variants={{ initial: {}, whileInView: { transition: { staggerChildren: 0.1 } } }}
      className="grid gap-5 md:grid-cols-2"
    >
      {features.map((f) => {
        const Icon = f.icon;
        return (
          <motion.li
            key={f.title}
            variants={{
              initial: { opacity: 0, y: 24 },
              whileInView: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-xl border border-white/10 bg-navy-900/60 p-7 transition-colors hover:border-blue-500/30"
          >
            <div className="grid h-12 w-12 place-items-center rounded-lg border border-blue-500/30 bg-blue-500/10 text-blue-300">
              <Icon className="h-5 w-5" aria-hidden />
            </div>
            <h3 className="mt-5 text-h4 font-semibold text-white">{f.title}</h3>
            <p className="mt-2 text-body-sm text-gray-400">{f.description}</p>
            <ul className="mt-4 flex flex-col gap-2">
              {f.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-body-sm text-gray-300">
                  <span className="mt-[9px] h-1 w-1 flex-none rounded-full bg-blue-500" />
                  {b}
                </li>
              ))}
            </ul>
          </motion.li>
        );
      })}
    </motion.ul>
  );
}
