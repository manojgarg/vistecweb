"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { METRICS } from "@/lib/constants";

const cards = [
  { ...METRICS.denialReduction },
  { ...METRICS.cleanClaimRate },
  { ...METRICS.arDaysReduction },
  { ...METRICS.revenueCollected },
];

export function OutcomeMetrics() {
  return (
    <SectionWrapper variant="gradient" className="relative bg-gradient-to-br from-navy-950 via-navy-900 to-blue-600/20">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-mesh opacity-70" />
      <Container className="relative">
        <div className="max-w-3xl">
          <SectionEyebrow>Proven Outcomes</SectionEyebrow>
          <SectionHeading size="h1" tone="dark">
            Real financial impact. Measurable results.
          </SectionHeading>
        </div>

        <motion.ul
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ initial: {}, whileInView: { transition: { staggerChildren: 0.1 } } }}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {cards.map((c) => (
            <motion.li
              key={c.label}
              variants={{
                initial: { opacity: 0, y: 24 },
                whileInView: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-xl border border-white/10 bg-navy-900/70 p-7 backdrop-blur-xl"
            >
              <div className="relative">
                <div className="text-4xl font-bold text-teal-400 md:text-5xl lg:text-metric">
                  <AnimatedCounter
                    value={c.value}
                    prefix={"prefix" in c ? c.prefix : ""}
                    suffix={c.unit}
                    decimals={Number.isInteger(c.value) ? 0 : 1}
                  />
                </div>
                <div className="mt-3 text-body-sm font-semibold text-white">{c.label}</div>
                <div className="mt-1 text-caption text-gray-400">{c.sub}</div>
              </div>
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-teal-500/10 blur-2xl"
              />
            </motion.li>
          ))}
        </motion.ul>

        <p className="mt-8 max-w-3xl text-caption text-gray-400">
          Outcomes based on aggregate client data. Individual results may vary based on specialty,
          payer mix, and implementation scope.
        </p>
      </Container>
    </SectionWrapper>
  );
}
