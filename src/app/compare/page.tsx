import type { Metadata } from "next";
import { Check, AlertTriangle, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { SectionHeading, SectionSubtext } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import { COMPARE_COLUMNS, COMPARE_ROWS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "VistecPartners vs Waystar vs AKASA vs Thoughtful AI",
  description:
    "A factual comparison: VistecPartners (PARCS) vs Traditional RCM, Waystar, AKASA, and Thoughtful AI across AI capabilities, execution, integration, and pricing.",
  alternates: { canonical: "/compare" },
};

function MarkIcon({ mark }: { mark: "check" | "warn" | "x" }) {
  if (mark === "check")
    return (
      <span className="inline-grid h-5 w-5 flex-none place-items-center rounded-full bg-teal-500/20 text-teal-300">
        <Check className="h-3 w-3" strokeWidth={3} />
      </span>
    );
  if (mark === "warn")
    return (
      <span className="inline-grid h-5 w-5 flex-none place-items-center rounded-full bg-amber-500/20 text-amber-400">
        <AlertTriangle className="h-3 w-3" strokeWidth={2.5} />
      </span>
    );
  return (
    <span className="inline-grid h-5 w-5 flex-none place-items-center rounded-full bg-error/20 text-error">
      <X className="h-3 w-3" strokeWidth={3} />
    </span>
  );
}

export default function ComparePage() {
  return (
    <>
      <SectionWrapper variant="gradient" padding="lg" className="pt-24 md:pt-32">
        <Container className="max-w-3xl">
          <SectionEyebrow>Compare</SectionEyebrow>
          <SectionHeading size="hero" as="h1" tone="dark">
            How VistecPartners is different.
          </SectionHeading>
          <SectionSubtext tone="dark">
            A factual comparison across the five models buyers consider most often. We kept this
            neutral — no disparaging language, just where each platform actually lands.
          </SectionSubtext>
        </Container>
      </SectionWrapper>

      <SectionWrapper variant="dark">
        <Container>
          {/* Desktop table */}
          <div className="hidden overflow-x-auto rounded-xl border border-white/10 lg:block">
            <table className="w-full min-w-[900px] border-collapse text-left">
              <thead>
                <tr className="bg-navy-900">
                  <th className="w-[22%] px-6 py-5 text-caption font-semibold uppercase tracking-widest text-gray-400">
                    Dimension
                  </th>
                  {COMPARE_COLUMNS.map((c) => (
                    <th
                      key={c.key}
                      className={cn(
                        "px-5 py-5 text-caption font-semibold uppercase tracking-widest",
                        "highlight" in c && c.highlight
                          ? "bg-blue-600/20 text-teal-300"
                          : "text-gray-400",
                      )}
                    >
                      {c.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((r, i) => (
                  <tr
                    key={r.dimension}
                    className={i % 2 === 0 ? "bg-navy-950/60" : "bg-navy-900/60"}
                  >
                    <td className="px-6 py-5 text-body-sm font-semibold text-white">
                      {r.dimension}
                    </td>
                    {COMPARE_COLUMNS.map((c) => {
                      const cell = r.values[c.key as keyof typeof r.values];
                      const highlight = "highlight" in c && c.highlight;
                      return (
                        <td
                          key={c.key}
                          className={cn(
                            "px-5 py-5 align-top text-body-sm text-gray-300",
                            highlight && "bg-blue-600/10 text-white",
                          )}
                        >
                          <div className="flex items-start gap-3">
                            <MarkIcon mark={cell.mark as "check" | "warn" | "x"} />
                            <span>{cell.text}</span>
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile card layout */}
          <div className="flex flex-col gap-4 lg:hidden">
            {COMPARE_ROWS.map((r) => (
              <div
                key={r.dimension}
                className="overflow-hidden rounded-xl border border-white/10 bg-navy-900/70"
              >
                <div className="border-b border-white/10 bg-navy-900 px-5 py-3 text-body-sm font-semibold text-white">
                  {r.dimension}
                </div>
                <dl className="divide-y divide-white/5">
                  {COMPARE_COLUMNS.map((c) => {
                    const cell = r.values[c.key as keyof typeof r.values];
                    const highlight = "highlight" in c && c.highlight;
                    return (
                      <div
                        key={c.key}
                        className={cn(
                          "flex items-start gap-3 px-5 py-4",
                          highlight && "bg-blue-600/10",
                        )}
                      >
                        <dt
                          className={cn(
                            "w-36 flex-none text-caption uppercase tracking-widest",
                            highlight ? "text-teal-300" : "text-gray-400",
                          )}
                        >
                          {c.name}
                        </dt>
                        <dd className="flex items-start gap-2 text-body-sm text-gray-200">
                          <MarkIcon mark={cell.mark as "check" | "warn" | "x"} />
                          {cell.text}
                        </dd>
                      </div>
                    );
                  })}
                </dl>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <CTASection />
    </>
  );
}
