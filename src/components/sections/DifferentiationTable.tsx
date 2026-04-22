"use client";

import { Check, X, AlertTriangle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Mark = "check" | "warn" | "x";

const rows: { feature: string; traditional: [Mark, string]; aiOnly: [Mark, string]; parcs: [Mark, string] }[] = [
  {
    feature: "Denial Prevention",
    traditional: ["x", "Reactive"],
    aiOnly: ["warn", "Predict only"],
    parcs: ["check", "Predict + Prevent + Resolve"],
  },
  {
    feature: "Execution",
    traditional: ["check", "Manual teams"],
    aiOnly: ["x", "Software only"],
    parcs: ["check", "AI + 400-person team"],
  },
  {
    feature: "Learning System",
    traditional: ["x", "Static rules"],
    aiOnly: ["warn", "Model-level"],
    parcs: ["check", "Continuous per-client"],
  },
  {
    feature: "Time to Value",
    traditional: ["warn", "6–12 months"],
    aiOnly: ["warn", "3–6 months"],
    parcs: ["check", "4–8 weeks"],
  },
  {
    feature: "Integration",
    traditional: ["warn", "Limited"],
    aiOnly: ["warn", "API-only"],
    parcs: ["check", "40+ EHR native"],
  },
  {
    feature: "Pricing",
    traditional: ["warn", "% of collections"],
    aiOnly: ["warn", "Per-claim + license"],
    parcs: ["check", "Performance-aligned"],
  },
];

function MarkIcon({ mark }: { mark: Mark }) {
  if (mark === "check")
    return (
      <span className="inline-grid h-6 w-6 place-items-center rounded-full bg-teal-500/10 text-teal-500">
        <Check className="h-3.5 w-3.5" strokeWidth={3} />
      </span>
    );
  if (mark === "warn")
    return (
      <span className="inline-grid h-6 w-6 place-items-center rounded-full bg-amber-500/10 text-amber-500">
        <AlertTriangle className="h-3.5 w-3.5" strokeWidth={2.5} />
      </span>
    );
  return (
    <span className="inline-grid h-6 w-6 place-items-center rounded-full bg-error/10 text-error">
      <X className="h-3.5 w-3.5" strokeWidth={3} />
    </span>
  );
}

export function DifferentiationTable() {
  return (
    <SectionWrapper variant="white">
      <Container>
        <div className="max-w-3xl">
          <SectionEyebrow tone="light">Why VistecPartners</SectionEyebrow>
          <SectionHeading size="h1" tone="light">
            Platform + people. That&apos;s the difference.
          </SectionHeading>
        </div>

        <div className="mt-12 hidden overflow-hidden rounded-xl border border-gray-200 md:block">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-gray-50">
                <th className="w-[28%] px-6 py-5 text-caption font-semibold uppercase tracking-widest text-gray-500">
                  Capability
                </th>
                <th className="px-6 py-5 text-caption font-semibold uppercase tracking-widest text-gray-500">
                  Traditional RCM
                </th>
                <th className="px-6 py-5 text-caption font-semibold uppercase tracking-widest text-gray-500">
                  AI-Only Vendors
                </th>
                <th className="bg-blue-100/60 px-6 py-5 text-caption font-semibold uppercase tracking-widest text-blue-600">
                  VistecPartners (PARCS)
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                  <td className="px-6 py-5 text-body-sm font-semibold text-gray-900">{r.feature}</td>
                  <td className="px-6 py-5 text-body-sm text-gray-700">
                    <div className="flex items-center gap-3">
                      <MarkIcon mark={r.traditional[0]} />
                      {r.traditional[1]}
                    </div>
                  </td>
                  <td className="px-6 py-5 text-body-sm text-gray-700">
                    <div className="flex items-center gap-3">
                      <MarkIcon mark={r.aiOnly[0]} />
                      {r.aiOnly[1]}
                    </div>
                  </td>
                  <td className="bg-blue-50/80 px-6 py-5 text-body-sm font-medium text-gray-900">
                    <div className="flex items-center gap-3">
                      <MarkIcon mark={r.parcs[0]} />
                      {r.parcs[1]}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile card layout */}
        <div className="mt-10 flex flex-col gap-4 md:hidden">
          {rows.map((r) => (
            <div key={r.feature} className="overflow-hidden rounded-xl border border-gray-200 bg-white">
              <div className="border-b border-gray-200 bg-gray-50 px-5 py-3 text-body-sm font-semibold text-gray-900">
                {r.feature}
              </div>
              <dl className="divide-y divide-gray-100">
                <div className="flex items-center gap-3 px-5 py-3">
                  <dt className="w-40 text-caption uppercase tracking-widest text-gray-500">
                    Traditional
                  </dt>
                  <dd className="flex items-center gap-2 text-body-sm text-gray-700">
                    <MarkIcon mark={r.traditional[0]} />
                    {r.traditional[1]}
                  </dd>
                </div>
                <div className="flex items-center gap-3 px-5 py-3">
                  <dt className="w-40 text-caption uppercase tracking-widest text-gray-500">
                    AI-Only
                  </dt>
                  <dd className="flex items-center gap-2 text-body-sm text-gray-700">
                    <MarkIcon mark={r.aiOnly[0]} />
                    {r.aiOnly[1]}
                  </dd>
                </div>
                <div className="flex items-center gap-3 bg-blue-50/70 px-5 py-3">
                  <dt className="w-40 text-caption uppercase tracking-widest text-blue-600">
                    PARCS
                  </dt>
                  <dd className="flex items-center gap-2 text-body-sm font-medium text-gray-900">
                    <MarkIcon mark={r.parcs[0]} />
                    {r.parcs[1]}
                  </dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
