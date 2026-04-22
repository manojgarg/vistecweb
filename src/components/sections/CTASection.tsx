"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-cta py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 10%, rgba(94,234,212,0.4), transparent 40%), radial-gradient(circle at 80% 90%, rgba(251,191,36,0.2), transparent 40%)",
        }}
      />
      <Container className="relative text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl text-balance text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-h1"
        >
          Stop managing revenue. Start optimizing it.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-5 max-w-2xl text-body text-white/80"
        >
          See how PARCS can transform your revenue cycle in a 30-minute demo.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col items-center gap-3"
        >
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-10 py-5 text-body font-semibold text-blue-600 shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-glow-blue"
          >
            Request Your Demo
            <ArrowRight className="h-4 w-4" />
          </Link>
          <span className="text-caption text-white/70">
            No commitment. No sales pitch. Just a platform walkthrough.
          </span>
        </motion.div>
      </Container>
    </section>
  );
}
