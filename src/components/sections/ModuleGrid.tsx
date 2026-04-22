"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { SectionHeading, SectionSubtext } from "@/components/ui/SectionHeading";
import { ModuleIcon } from "@/components/shared/ModuleIcon";
import { MODULES } from "@/lib/constants";

export function ModuleGrid() {
  return (
    <SectionWrapper variant="light">
      <Container>
        <div className="max-w-3xl">
          <SectionEyebrow tone="light">PARCS Modules</SectionEyebrow>
          <SectionHeading size="h1" tone="light">
            Six AI engines. One unified system.
          </SectionHeading>
          <SectionSubtext tone="light">
            Every revenue-critical workflow, automated by a purpose-built model. Deploy any module
            standalone or run the full PARCS stack end-to-end.
          </SectionSubtext>
        </div>

        <motion.ul
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ initial: {}, whileInView: { transition: { staggerChildren: 0.08 } } }}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {MODULES.map((m) => (
            <motion.li
              key={m.slug}
              variants={{
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={`/platform/modules/${m.slug}`}
                className="group relative flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <ModuleIcon icon={m.icon} color={m.color} />
                  <ArrowUpRight className="h-4 w-4 text-gray-400 transition-colors group-hover:text-blue-500" aria-hidden />
                </div>
                <h3 className="mt-6 text-h4 font-semibold text-gray-900">{m.name}</h3>
                <p className="mt-2 text-body-sm text-gray-600">{m.tagline}</p>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </SectionWrapper>
  );
}
