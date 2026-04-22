"use client";

import { motion } from "framer-motion";
import { INTEGRATIONS } from "@/lib/constants";

const groups = [
  { label: "EHR & PMS", items: INTEGRATIONS.ehr },
  { label: "Clearinghouses", items: INTEGRATIONS.clearinghouses },
  { label: "Standards", items: INTEGRATIONS.standards },
];

export function IntegrationGrid({ showAll = false }: { showAll?: boolean }) {
  return (
    <div className="flex flex-col gap-10">
      {groups.map((g) => (
        <div key={g.label}>
          <div className="mb-4 flex items-baseline justify-between">
            <h3 className="text-caption font-semibold uppercase tracking-widest text-blue-400">
              {g.label}
            </h3>
            <span className="text-caption text-gray-500">{g.items.length} integrations</span>
          </div>
          <motion.ul
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ initial: {}, whileInView: { transition: { staggerChildren: 0.04 } } }}
            className="flex flex-wrap gap-2"
          >
            {g.items.map((name) => (
              <motion.li
                key={name}
                variants={{
                  initial: { opacity: 0, y: 10 },
                  whileInView: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-full border border-white/10 bg-navy-800/80 px-4 py-2 text-body-sm text-gray-200 transition-colors hover:border-blue-500/30 hover:text-white"
              >
                {name}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      ))}
      <p className="text-body-sm text-gray-400">
        + 30 more systems.{" "}
        <span className="text-white">Don&apos;t see yours? We&apos;ll build the connector.</span>
        {showAll && " HL7 v2, FHIR R4, X12 EDI, and NCPDP supported natively."}
      </p>
    </div>
  );
}
