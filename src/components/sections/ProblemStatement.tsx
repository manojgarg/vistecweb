"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Clock, Layers } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { SectionHeading, SectionSubtext } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const problems = [
  {
    icon: AlertTriangle,
    stat: "41% of providers report 10%+ claims denied",
    detail: "Up from 30% in 2022. Denials are accelerating.",
    tone: "amber",
  },
  {
    icon: Clock,
    stat: "Manual workflows drain $18.8B annually",
    detail: "Staff spend hours on tasks AI can do in seconds.",
    tone: "blue",
  },
  {
    icon: Layers,
    stat: "Fragmented systems create blind spots",
    detail: "EHR, PMS, clearinghouse, payer portals — none of them talk to each other.",
    tone: "teal",
  },
] as const;

const toneClass: Record<string, string> = {
  amber: "border-amber-400/30 bg-amber-500/5 text-amber-400",
  blue: "border-blue-400/30 bg-blue-500/5 text-blue-400",
  teal: "border-blue-500/30 bg-blue-500/5 text-blue-500",
};

export function ProblemStatement() {
  return (
    <SectionWrapper variant="dark">
      <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionEyebrow>The Problem</SectionEyebrow>
          <SectionHeading size="h1" tone="dark">
            Your revenue cycle is hemorrhaging cash.
          </SectionHeading>
          <SectionSubtext tone="dark">
            Healthcare providers lose millions annually to preventable denials, manual workflows, and
            fragmented systems that can&apos;t learn from their own mistakes.
          </SectionSubtext>
        </div>
        <motion.ul
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ initial: {}, whileInView: { transition: { staggerChildren: 0.12 } } }}
          className="flex flex-col gap-5"
        >
          {problems.map((p) => {
            const Icon = p.icon;
            return (
              <motion.li
                key={p.stat}
                variants={{
                  initial: { opacity: 0, y: 24 },
                  whileInView: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-5 rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div
                  className={`grid h-12 w-12 flex-none place-items-center rounded-lg border ${toneClass[p.tone]}`}
                >
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <div>
                  <div className="text-h4 font-semibold text-gray-900">{p.stat}</div>
                  <p className="mt-1 text-body-sm text-gray-600">{p.detail}</p>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </Container>
    </SectionWrapper>
  );
}
