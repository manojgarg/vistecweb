"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { SectionHeading, SectionSubtext } from "@/components/ui/SectionHeading";
import { ARCHITECTURE_LAYERS } from "@/lib/constants";

const accent: Record<string, string> = {
  blue: "border-blue-400/30 bg-blue-500/10 text-blue-300",
  teal: "border-teal-400/30 bg-teal-500/10 text-teal-300",
  amber: "border-amber-400/30 bg-amber-500/10 text-amber-300",
};

export function ArchitecturePreview() {
  const layers = [...ARCHITECTURE_LAYERS].reverse();
  return (
    <SectionWrapper variant="dark">
      <Container className="max-w-3xl text-center">
        <SectionEyebrow>Platform Architecture</SectionEyebrow>
        <SectionHeading size="h1" tone="dark" className="mx-auto">
          Five layers. Zero blind spots.
        </SectionHeading>
        <SectionSubtext tone="dark" className="mx-auto">
          PARCS is a full stack — from ingestion to analytics. Every layer is purpose-built for
          healthcare revenue, and every layer learns from the others.
        </SectionSubtext>
      </Container>

      <Container className="mt-14">
        <motion.ol
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ initial: {}, whileInView: { transition: { staggerChildren: 0.1 } } }}
          className="mx-auto flex max-w-3xl flex-col gap-3"
        >
          {layers.map((layer, i) => {
            const from = i % 2 === 0 ? -40 : 40;
            return (
              <motion.li
                key={layer.number}
                variants={{
                  initial: { opacity: 0, x: from },
                  whileInView: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex items-center gap-5 rounded-xl border border-white/10 bg-navy-900/80 p-5 transition-colors hover:border-teal-400/30"
              >
                <div
                  className={`grid h-12 w-12 flex-none place-items-center rounded-lg border font-mono text-body-sm font-semibold ${accent[layer.color]}`}
                >
                  0{layer.number}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <h3 className="text-h4 font-semibold text-white">{layer.name}</h3>
                    <span className="text-caption text-gray-500 font-mono">{layer.tech}</span>
                  </div>
                  <p className="mt-1 text-body-sm text-gray-400">{layer.description}</p>
                </div>
                <ArrowRight
                  className="hidden h-4 w-4 flex-none text-gray-500 transition-all group-hover:translate-x-0.5 group-hover:text-teal-400 md:block"
                  aria-hidden
                />
              </motion.li>
            );
          })}
        </motion.ol>

        <div className="mt-10 text-center">
          <Link
            href="/platform/architecture"
            className="inline-flex items-center gap-2 text-body-sm font-semibold text-teal-300 transition-colors hover:text-teal-200"
          >
            Explore platform architecture <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </SectionWrapper>
  );
}
