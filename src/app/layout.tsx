import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/shared/ScrollProgress";
import { MobileStickyCTA } from "@/components/shared/MobileStickyCTA";
import { SITE } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A0F1E",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | AI Revenue Operating System for Healthcare (PARCS)`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "PARCS combines predictive AI, workflow automation, and expert execution to reduce denials 30%, improve clean claims to 98.5%, and maximize healthcare revenue.",
  keywords: [
    "AI revenue cycle management",
    "AI RCM",
    "healthcare AI billing",
    "revenue operating system",
    "PARCS",
    "denial prediction",
    "claims optimization",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | AI Revenue Operating System (PARCS)`,
    description:
      "PARCS combines predictive AI and expert execution to reduce denials 30% and maximize healthcare revenue.",
    images: [{ url: "/images/og-image.svg", width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | AI Revenue Operating System (PARCS)`,
    description: "AI that actually collects revenue — built for healthcare.",
    images: ["/images/og-image.svg"],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const ldOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/images/logo.svg`,
    sameAs: [SITE.linkedin],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phone,
      email: SITE.email,
      contactType: "sales",
      areaServed: "US",
    },
  };

  const ldSoftware = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PARCS",
    applicationCategory: "HealthApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description:
      "AI Revenue Operating System — predictive AI, workflow automation, and expert execution for healthcare RCM.",
    provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
  };

  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="min-h-screen font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-teal-400 focus:px-4 focus:py-2 focus:text-navy-950"
        >
          Skip to main content
        </a>
        <ScrollProgress />
        <Navbar />
        <main id="main" className="pt-[72px]">
          {children}
        </main>
        <Footer />
        <MobileStickyCTA />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldSoftware) }}
        />
      </body>
    </html>
  );
}
