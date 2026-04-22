import Link from "next/link";
import { Linkedin, Mail, Phone, ShieldCheck, Lock, Database } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/shared/Logo";
import { SITE } from "@/lib/constants";

const columns = [
  {
    title: "Platform",
    links: [
      { label: "PARCS Overview", href: "/platform" },
      { label: "Architecture", href: "/platform/architecture" },
      { label: "Modules", href: "/platform/modules" },
      { label: "Integrations", href: "/platform/integrations" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Health Systems", href: "/solutions#health-systems" },
      { label: "Physician Groups", href: "/solutions#physician-groups" },
      { label: "Billing Companies", href: "/solutions#billing-companies" },
      { label: "Compare", href: "/compare" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Outcomes", href: "/outcomes" },
      { label: "Careers", href: "/about#careers" },
      { label: "Request Demo", href: "/demo" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-navy-950 text-gray-300">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr_1.4fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-body-sm text-gray-400">
              AI Revenue Operating System with Guaranteed Execution. Built for healthcare.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Link
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-9 w-9 place-items-center rounded-md border border-white/10 text-gray-400 transition-colors hover:border-teal-400/40 hover:text-teal-400"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
              <a
                href={`mailto:${SITE.email}`}
                aria-label="Email us"
                className="grid h-9 w-9 place-items-center rounded-md border border-white/10 text-gray-400 transition-colors hover:border-teal-400/40 hover:text-teal-400"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-caption font-semibold uppercase tracking-widest text-gray-400">
                  {col.title}
                </h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-body-sm text-gray-300 transition-colors hover:text-white"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-caption font-semibold uppercase tracking-widest text-gray-400">
              Connect
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li className="flex items-center gap-2 text-body-sm text-gray-300">
                <Mail className="h-4 w-4 text-teal-400" />
                <a href={`mailto:${SITE.email}`} className="hover:text-white">
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-body-sm text-gray-300">
                <Phone className="h-4 w-4 text-teal-400" />
                <a href={`tel:${SITE.phone.replace(/\D/g, "")}`} className="hover:text-white">
                  {SITE.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <div className="flex flex-wrap items-center gap-3 text-caption text-gray-500">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-teal-400" /> HIPAA Compliant
            </span>
            <span className="text-gray-700">·</span>
            <span className="inline-flex items-center gap-1.5">
              <Lock className="h-3.5 w-3.5 text-teal-400" /> SOC 2
            </span>
            <span className="text-gray-700">·</span>
            <span className="inline-flex items-center gap-1.5">
              <Database className="h-3.5 w-3.5 text-teal-400" /> EHR Integrated
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-caption text-gray-500">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
            <span>© {new Date().getFullYear()} VistecPartners</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
