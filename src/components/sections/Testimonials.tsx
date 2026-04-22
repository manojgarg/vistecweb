"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), []);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length),
    [],
  );

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [paused, next]);

  const t = TESTIMONIALS[index];

  return (
    <SectionWrapper variant="dark">
      <Container className="max-w-4xl text-center">
        <SectionEyebrow>Testimonials</SectionEyebrow>
        <SectionHeading size="h2" tone="dark" className="mx-auto">
          Trusted by providers across the country.
        </SectionHeading>

        <div
          className="relative mt-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          role="region"
          aria-roledescription="carousel"
          aria-label="Customer testimonials"
        >
          <Quote
            aria-hidden
            className="absolute -top-6 left-1/2 h-20 w-20 -translate-x-1/2 text-teal-400/20"
          />
          <div className="relative min-h-[220px] overflow-hidden rounded-xl border border-white/10 bg-navy-900/60 p-8 md:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-h3 italic text-white md:text-2xl lg:text-3xl">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-8 flex items-center justify-center gap-4">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-teal-500/30 to-blue-500/30 text-body-sm font-semibold text-white">
                    {t.initial}
                  </div>
                  <div className="text-left">
                    <div className="text-body-sm font-semibold text-white">{t.author}</div>
                    <div className="text-caption text-gray-400">
                      {t.title} · {t.location}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-gray-300 transition-colors hover:border-teal-400/40 hover:text-teal-300"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    i === index ? "w-6 bg-teal-400" : "w-2 bg-white/20",
                  )}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-gray-300 transition-colors hover:border-teal-400/40 hover:text-teal-300"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
