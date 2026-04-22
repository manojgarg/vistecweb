"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { NavItem } from "@/types";

interface MegaMenuProps {
  item: NavItem & { children: ReadonlyArray<{ label: string; href: string; description: string }> };
  open: boolean;
  onClose: () => void;
}

export function MegaMenu({ item, open, onClose }: MegaMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-1/2 top-full z-50 mt-3 w-[min(640px,calc(100vw-2rem))] -translate-x-1/2"
          role="menu"
          aria-label={item.label}
        >
          <div className="rounded-xl border border-white/10 bg-navy-900/95 p-4 shadow-2xl backdrop-blur-xl">
            <div className="grid grid-cols-1 gap-1 md:grid-cols-2">
              {item.children.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  onClick={onClose}
                  className="group rounded-md p-3 transition-colors hover:bg-white/5"
                  role="menuitem"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-body-sm font-semibold text-white">{c.label}</div>
                      <div className="mt-1 text-caption text-gray-400">{c.description}</div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-gray-500 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
