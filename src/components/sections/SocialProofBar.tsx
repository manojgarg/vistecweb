"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SOCIAL_PROOF } from "@/lib/constants";

export function SocialProofBar() {
  return (
    <section className="border-y border-gray-200 bg-gray-50 py-12 md:py-16">
      <Container>
        <motion.ul
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            initial: {},
            whileInView: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid grid-cols-2 gap-8 md:grid-cols-5"
        >
          {SOCIAL_PROOF.map((m) => (
            <motion.li
              key={m.key}
              variants={{
                initial: { opacity: 0, y: 16 },
                whileInView: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center text-center"
            >
              <div className="text-4xl font-bold text-gray-900 md:text-5xl">
                <AnimatedCounter
                  value={m.value}
                  prefix={"prefix" in m ? m.prefix : ""}
                  suffix={"suffix" in m ? m.suffix : ""}
                />
              </div>
              <div className="mt-2 text-caption uppercase tracking-widest text-gray-500">
                {m.label}
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
