"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { DashboardVisual } from "@/components/shared/DashboardVisual";
import { SITE } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-white pt-16 md:pt-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 dot-grid opacity-20" />

      <Container className="relative z-10 grid min-h-[82vh] items-center gap-12 py-16 lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:py-20">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionEyebrow>AI Revenue Operating System</SectionEyebrow>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-balance text-5xl font-bold leading-[1.05] tracking-tight text-gray-900 md:text-6xl lg:text-hero"
          >
            AI That Actually{" "}
            <span className="bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
              Collects Revenue
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-body text-gray-600"
          >
            {SITE.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <ButtonLink href="/demo" variant="primary" size="md" icon={<ArrowRight className="h-4 w-4" />}>
              Request Demo
            </ButtonLink>
            <ButtonLink href="/platform" variant="secondary" size="md">
              See How PARCS Works
            </ButtonLink>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-caption text-gray-500"
          >
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-blue-500" /> HIPAA Compliant
            </span>
            <span className="h-1 w-1 rounded-full bg-gray-700" aria-hidden />
            <span>40+ EHR Integrations</span>
            <span className="h-1 w-1 rounded-full bg-gray-700" aria-hidden />
            <span>$500M+ Collected</span>
          </motion.div>
        </div>

        <div className="hidden lg:block">
          <DashboardVisual />
        </div>

        <div className="lg:hidden">
          <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-gray-50 p-5">
            <DashboardVisual />
          </div>
        </div>
      </Container>

      <div
        aria-hidden
        className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-500"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1 text-caption"
        >
          <span className="uppercase tracking-widest">Scroll</span>
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </div>
    </section>
  );
}
