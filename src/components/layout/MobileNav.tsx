"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "@/components/shared/Logo";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 z-50 flex w-full max-w-[420px] flex-col bg-white shadow-2xl overflow-hidden" style={{ height: '100dvh' }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
              <Logo />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="rounded-md p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-6 py-6">
              <ul className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="block rounded-md px-3 py-3 text-h4 font-semibold text-gray-900 transition-colors hover:bg-gray-100"
                    >
                      {item.label}
                    </Link>
                    {"children" in item && item.children && (
                      <ul className="mt-1 flex flex-col gap-0.5 pl-3">
                        {item.children.map((c) => (
                          <li key={c.href}>
                            <Link
                              href={c.href}
                              onClick={onClose}
                              className="block rounded-md px-3 py-2 text-body-sm text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900"
                            >
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <div className="border-t border-gray-200 p-6">
              <ButtonLink href="/demo" variant="primary" size="md" className="w-full">
                Request Demo →
              </ButtonLink>
              <p className="mt-3 text-center text-caption text-gray-400">
                30-minute walkthrough · No commitment
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
