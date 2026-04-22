"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, Key } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "HIPAA Compliant",
    description: "Business Associate Agreements in place with every client. Ongoing audit and monitoring.",
  },
  {
    icon: Lock,
    title: "SOC 2",
    description: "Independently audited controls across security, availability, and confidentiality.",
  },
  {
    icon: Key,
    title: "Encryption",
    description: "AES-256 at rest, TLS 1.3 in transit, role-based access, and full audit logging.",
  },
];

export function SecurityBadges() {
  return (
    <motion.ul
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, margin: "-80px" }}
      variants={{ initial: {}, whileInView: { transition: { staggerChildren: 0.1 } } }}
      className="grid gap-5 md:grid-cols-3"
    >
      {items.map((s) => {
        const Icon = s.icon;
        return (
          <motion.li
            key={s.title}
            variants={{
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-xl border border-white/10 bg-navy-900/60 p-7 text-center"
          >
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-teal-400/30 bg-teal-500/10 text-teal-300">
              <Icon className="h-6 w-6" aria-hidden />
            </div>
            <h3 className="mt-5 text-h4 font-semibold text-white">{s.title}</h3>
            <p className="mt-2 text-body-sm text-gray-400">{s.description}</p>
          </motion.li>
        );
      })}
    </motion.ul>
  );
}
