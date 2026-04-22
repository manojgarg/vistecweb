import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service — VistecPartners",
  description:
    "The terms that apply when you use the VistecPartners website and related marketing services.",
  alternates: { canonical: "/terms" },
};

const LAST_UPDATED = "April 1, 2026";

export default function TermsPage() {
  return (
    <>
      <SectionWrapper variant="gradient" padding="lg" className="pt-24 md:pt-32">
        <Container className="max-w-3xl">
          <SectionEyebrow>Legal</SectionEyebrow>
          <SectionHeading size="h1" as="h1" tone="dark">
            Terms of Service
          </SectionHeading>
          <p className="mt-5 text-body-sm text-gray-400">Last updated: {LAST_UPDATED}</p>
        </Container>
      </SectionWrapper>

      <SectionWrapper variant="light" padding="lg">
        <Container className="max-w-3xl">
          <div className="prose prose-lg max-w-none text-gray-700 [&_h2]:mt-10 [&_h2]:text-h3 [&_h2]:font-semibold [&_h2]:text-gray-900 [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mt-2 [&_a]:text-blue-600 [&_a:hover]:underline">
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the
              VistecPartners marketing website at{" "}
              <a href={SITE.url}>{SITE.domain}</a>. Use of the PARCS platform itself is governed by
              a separate Master Services Agreement executed between VistecPartners and the
              customer organization.
            </p>

            <h2>Use of the site</h2>
            <p>
              You may use the site for lawful purposes and to learn about our products and
              services. You agree not to attempt to disrupt the site, bypass security controls,
              or use it to send unsolicited messages.
            </p>

            <h2>Intellectual property</h2>
            <p>
              The site, its content, and our trademarks are the property of VistecPartners or our
              licensors. Nothing in these Terms grants you any license to use them except as
              necessary to browse the site.
            </p>

            <h2>No warranty</h2>
            <p>
              The site is provided &ldquo;as is&rdquo; without warranties of any kind. To the
              maximum extent allowed by law, we disclaim implied warranties of merchantability,
              fitness for a particular purpose, and non-infringement.
            </p>

            <h2>Limitation of liability</h2>
            <p>
              To the maximum extent permitted by law, VistecPartners is not liable for any
              indirect, incidental, consequential, or punitive damages arising out of or relating
              to your use of the site.
            </p>

            <h2>Changes</h2>
            <p>
              We may update these Terms from time to time. Material changes will be posted on
              this page with a new &ldquo;Last updated&rdquo; date.
            </p>

            <h2>Contact</h2>
            <p>
              Questions? Email <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
            </p>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
