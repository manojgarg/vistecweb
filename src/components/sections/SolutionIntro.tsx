"use client";

import { motion } from "framer-motion";
import { X, Check, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { SectionHeading, SectionSubtext } from "@/components/ui/SectionHeading";

const oldWorld = ["Bill", "Submit", "Deny", "Chase", "Collect (maybe)"];
const parcs = ["Predict", "Prevent", "Optimize", "Collect (guaranteed)"];

export function SolutionIntro() {
  return (
    <SectionWrapper variant="gradient" className="bg-navy-950">
      <Container className="max-w-4xl text-center">
        <SectionEyebrow>The Solution</SectionEyebrow>
        <SectionHeading size="h1" tone="dark" className="mx-auto">
          Meet PARCS — your AI Revenue Operating System.
        </SectionHeading>
        <SectionSubtext tone="dark" className="mx-auto">
          PARCS doesn&apos;t just automate tasks. It continuously ingests data, learns from every
          claim, predicts outcomes, and optimizes your entire revenue cycle — with a 400-person team
          guaranteeing execution.
        </SectionSubtext>
      </Container>

      <Container className="mt-14 lg:mt-20">
        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ initial: {}, whileInView: { transition: { staggerChildren: 0.08 } } }}
          className="grid gap-8 lg:grid-cols-2"
        >
          <FlowRow
            label="OLD WORLD"
            tone="muted"
            items={oldWorld}
            icon={<X className="h-3.5 w-3.5" />}
          />
          <FlowRow
            label="PARCS"
            tone="accent"
            items={parcs}
            icon={<Check className="h-3.5 w-3.5" />}
          />
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}

function FlowRow({
  label,
  tone,
  items,
  icon,
}: {
  label: string;
  tone: "muted" | "accent";
  items: string[];
  icon: React.ReactNode;
}) {
  const accent = tone === "accent";
  return (
    <motion.div
      variants={{
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`rounded-xl border p-6 md:p-8 ${
        accent
          ? "border-teal-400/30 bg-gradient-to-br from-teal-500/10 via-blue-500/5 to-transparent"
          : "border-white/10 bg-navy-900/60"
      }`}
    >
      <div
        className={`inline-flex items-center gap-2 text-caption font-semibold uppercase tracking-widest ${
          accent ? "text-teal-300" : "text-gray-500"
        }`}
      >
        {label}
      </div>
      <ol className="mt-5 flex flex-wrap items-center gap-3">
        {items.map((it, i) => (
          <li key={it} className="flex items-center gap-3">
            <div
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-body-sm font-medium ${
                accent
                  ? "border-teal-400/40 bg-teal-500/10 text-teal-200"
                  : "border-white/10 bg-navy-800/80 text-gray-400 line-through decoration-error/50 decoration-2"
              }`}
            >
              <span
                className={`grid h-5 w-5 place-items-center rounded-full ${
                  accent ? "bg-teal-400/20 text-teal-300" : "bg-error/15 text-error"
                }`}
              >
                {icon}
              </span>
              {it}
            </div>
            {i < items.length - 1 && (
              <ArrowRight
                className={`h-4 w-4 flex-none ${accent ? "text-teal-400" : "text-gray-600"}`}
                aria-hidden
              />
            )}
          </li>
        ))}
      </ol>
    </motion.div>
  );
}
