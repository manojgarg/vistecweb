import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy — VistecPartners",
  description:
    "How VistecPartners collects, uses, and protects information. HIPAA-aligned, SOC 2 Type II audited, and built for healthcare.",
  alternates: { canonical: "/privacy" },
};

const LAST_UPDATED = "April 1, 2026";

export default function PrivacyPage() {
  return (
    <>
      <SectionWrapper variant="gradient" padding="lg" className="pt-24 md:pt-32">
        <Container className="max-w-3xl">
          <SectionEyebrow>Legal</SectionEyebrow>
          <SectionHeading size="h1" as="h1" tone="dark">
            Privacy Policy
          </SectionHeading>
          <p className="mt-5 text-body-sm text-gray-400">Last updated: {LAST_UPDATED}</p>
        </Container>
      </SectionWrapper>

      <SectionWrapper variant="light" padding="lg">
        <Container className="max-w-3xl">
          <div className="prose prose-lg max-w-none text-gray-700 [&_h2]:mt-10 [&_h2]:text-h3 [&_h2]:font-semibold [&_h2]:text-gray-900 [&_h3]:mt-6 [&_h3]:font-semibold [&_h3]:text-gray-900 [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mt-2 [&_a]:text-blue-600 [&_a:hover]:underline">
            <p>
              VistecPartners, Inc. (&ldquo;VistecPartners,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;)
              provides the PARCS revenue-cycle platform and related services. This Privacy Policy
              explains what information we collect through our website and services, how we use it,
              and the choices you have. It does not describe how we handle Protected Health
              Information (&ldquo;PHI&rdquo;) on behalf of healthcare providers — that handling is
              governed by our Business Associate Agreements and the Health Insurance Portability
              and Accountability Act (HIPAA).
            </p>

            <h2>Information we collect</h2>
            <p>
              We collect information you provide directly (for example, when you request a demo,
              contact us, or apply for a role), information collected automatically when you use
              our site (such as IP address, browser type, pages visited), and information from
              authorized third parties (such as enrichment data used to understand business
              context).
            </p>

            <h2>How we use information</h2>
            <ul>
              <li>To respond to your requests and provide the services you ask for.</li>
              <li>To operate, secure, and improve our website and platform.</li>
              <li>
                To communicate about products, events, and news — you can opt out of marketing
                messages at any time.
              </li>
              <li>To comply with legal obligations and enforce our agreements.</li>
            </ul>

            <h2>HIPAA &amp; PHI</h2>
            <p>
              When we act as a Business Associate for a covered entity, our use of PHI is
              controlled by the governing Business Associate Agreement and by HIPAA. PHI is not
              submitted through this website; the form fields on our demo page are designed to
              avoid collecting PHI, and we ask that you do not include PHI in any message to us
              unless we have an agreement in place.
            </p>

            <h2>Sharing</h2>
            <p>
              We share information with service providers who help us operate (hosting, analytics,
              email), with professional advisors, and when required by law. We do not sell
              personal information.
            </p>

            <h2>Security</h2>
            <p>
              VistecPartners maintains a SOC 2 Type II audited security program and encrypts data
              in transit and at rest. No system is perfectly secure, but we work hard to protect
              the information you entrust to us.
            </p>

            <h2>Your choices</h2>
            <p>
              You may request access, correction, or deletion of personal information we hold
              about you. To exercise these rights or ask questions about this policy, email{" "}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
            </p>

            <h2>Updates</h2>
            <p>
              We may update this policy from time to time. Material changes will be announced on
              this page with a new &ldquo;Last updated&rdquo; date.
            </p>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
