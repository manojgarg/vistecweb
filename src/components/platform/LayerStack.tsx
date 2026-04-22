"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ARCHITECTURE_LAYERS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const accent: Record<string, { border: string; bg: string; text: string; dot: string }> = {
  blue: {
    border: "border-blue-400/30",
    bg: "bg-blue-500/10",
    text: "text-blue-300",
    dot: "bg-blue-400",
  },
  teal: {
    border: "border-teal-400/30",
    bg: "bg-teal-500/10",
    text: "text-teal-300",
    dot: "bg-teal-400",
  },
  amber: {
    border: "border-amber-400/30",
    bg: "bg-amber-500/10",
    text: "text-amber-300",
    dot: "bg-amber-400",
  },
};

export function LayerStack({ defaultExpanded = false }: { defaultExpanded?: boolean }) {
  const layers = [...ARCHITECTURE_LAYERS].reverse();
  const [openSet, setOpenSet] = useState<Set<number>>(
    () => (defaultExpanded ? new Set(layers.map((l) => l.number)) : new Set()),
  );
  const toggle = (n: number) =>
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(n)) next.delete(n);
      else next.add(n);
      return next;
    });

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-3">
      {layers.map((layer, i) => {
        const open = openSet.has(layer.number);
        const a = accent[layer.color];
        return (
          <motion.div
            key={layer.number}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-xl border border-white/10 bg-navy-900/80 transition-colors hover:border-teal-400/30"
          >
            <button
              type="button"
              onClick={() => toggle(layer.number)}
              aria-expanded={open}
              aria-controls={`layer-${layer.number}`}
              className="flex w-full items-center gap-5 rounded-xl p-5 text-left transition-colors hover:bg-white/[0.02]"
            >
              <div
                className={cn(
                  "grid h-12 w-12 flex-none place-items-center rounded-lg border font-mono text-body-sm font-semibold",
                  a.border,
                  a.bg,
                  a.text,
                )}
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
              <ChevronDown
                className={cn("h-5 w-5 flex-none text-gray-500 transition-transform", open && "rotate-180")}
                aria-hidden
              />
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  id={`layer-${layer.number}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <ul className="grid gap-2 border-t border-white/5 p-5 pt-4 md:grid-cols-2">
                    {layer.details.map((d) => (
                      <li key={d} className="flex items-center gap-3 text-body-sm text-gray-300">
                        <span className={cn("h-1.5 w-1.5 rounded-full", a.dot)} />
                        {d}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
