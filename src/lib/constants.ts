export const SITE = {
  name: "VistecPartners",
  domain: "vistecpartners.com",
  url: "https://vistecpartners.com",
  tagline: "AI That Actually Collects Revenue.",
  description:
    "PARCS combines predictive AI, workflow automation, and a 400-person execution team to eliminate revenue leakage — not just detect it.",
  email: "info@vistecpartners.com",
  phone: "347-921-4428",
  linkedin: "https://www.linkedin.com/company/vistec-partners/",
} as const;

export const METRICS = {
  denialReduction: {
    value: 30,
    unit: "%",
    label: "Reduction in Denials",
    sub: "Within 90 days of deployment",
  },
  cleanClaimRate: {
    value: 98.5,
    unit: "%",
    label: "First-Pass Clean Claim Rate",
    sub: "Industry average: 80-85%",
  },
  arDaysReduction: {
    value: 20,
    unit: "%",
    label: "Reduction in AR Days",
    sub: "Faster cash, better predictability",
  },
  revenueCollected: {
    value: 500,
    unit: "M+",
    prefix: "$",
    label: "Revenue Collected",
    sub: "Across 500+ providers",
  },
} as const;

export const SOCIAL_PROOF = [
  { key: "providers", value: 500, suffix: "+", label: "Providers" },
  { key: "collected", value: 500, prefix: "$", suffix: "M+", label: "Collected" },
  { key: "opsTeam", value: 400, suffix: "+", label: "Operations Team" },
  { key: "itProfessionals", value: 50, suffix: "+", label: "IT Professionals" },
  { key: "yearsExperience", value: 20, suffix: "+", label: "Years Experience" },
] as const;

export const MODULES = [
  {
    slug: "eligibility",
    name: "Eligibility AI",
    tagline: "Real-time coverage verification that eliminates front-end denials before they start.",
    description:
      "PARCS Eligibility AI connects directly to payer systems to verify coverage, benefits, and co-pay information in real-time — before the patient walks in the door. No more eligibility-related denials. No more front-desk phone calls to payer hotlines.",
    capabilities: [
      "Real-time insurance verification at scheduling and check-in",
      "Automated benefit breakdown and co-pay calculation",
      "Coverage gap detection and patient notification",
      "Multi-payer batch verification overnight",
      "Historical eligibility pattern tracking",
    ],
    howItWorks: [
      "Patient is scheduled — PARCS triggers verification against the payer automatically.",
      "Benefits, deductible, co-pay, and coverage flags are returned and attached to the encounter.",
      "Exceptions route to a human specialist; everything clean flows straight to check-in.",
    ],
    icon: "shield-check",
    color: "teal",
  },
  {
    slug: "authorization",
    name: "Authorization AI",
    tagline: "Intelligent prior-auth automation mapped to payer-specific requirements.",
    description:
      "PARCS Authorization AI automates the entire prior-authorization workflow — from requirement detection to submission to status tracking. It knows which payers require auth for which procedures, and it handles the paperwork so your staff doesn't have to.",
    capabilities: [
      "Automated auth requirement detection by payer + procedure",
      "Clinical packet generation with supporting documentation",
      "Electronic submission to payer portals",
      "Automated status checking and follow-up",
      "Expiration tracking and renewal alerts",
    ],
    howItWorks: [
      "Upcoming procedures are scanned against payer rulebooks to flag auth requirements.",
      "PARCS assembles clinical documentation and submits the packet to the payer portal.",
      "Status is polled continuously; expirations and denials route to the right specialist.",
    ],
    icon: "file-check",
    color: "blue",
  },
  {
    slug: "coding",
    name: "Coding Intelligence",
    tagline: "AI-powered chart review that captures every billable service with clinical accuracy.",
    description:
      "PARCS Coding Intelligence uses NLP to read clinical documentation, identify billable services, suggest optimal codes, and flag documentation gaps — before the claim is ever submitted. Think of it as a tireless coding expert reviewing every chart.",
    capabilities: [
      "NLP-driven chart review and code suggestion",
      "Missed charge identification",
      "Documentation gap detection with CDI alerts",
      "Specialty-specific coding rule engines",
      "Continuous accuracy benchmarking against industry standards",
    ],
    howItWorks: [
      "Clinical notes and diagnostics are parsed as soon as documentation is signed.",
      "The model proposes ICD-10 / CPT codes and flags gaps against specialty guidelines.",
      "Certified coders confirm exceptions; coding feedback retrains the model per-client.",
    ],
    icon: "code",
    color: "amber",
  },
  {
    slug: "claims",
    name: "Claims Optimization",
    tagline: "Predictive claim validation that catches errors before submission — not after denial.",
    description:
      "PARCS Claims Optimization scrubs every claim against payer-specific rules, historical denial patterns, and real-time coding guidelines before submission. The result: dramatically higher first-pass acceptance rates and fewer rework cycles.",
    capabilities: [
      "Pre-submission claim scrubbing with 847-variable analysis",
      "Payer-specific rule engine with continuous updates",
      "Error correction suggestions before submission",
      "Batch submission optimization and timing",
      "First-pass rate tracking and trending",
    ],
    howItWorks: [
      "Every claim is scored against 847 variables before it leaves your environment.",
      "High-risk claims are corrected inline with exact payer-specific error guidance.",
      "Submission timing is optimized per payer to maximize first-pass acceptance.",
    ],
    icon: "check-circle",
    color: "teal",
  },
  {
    slug: "denials",
    name: "Denial Intelligence",
    tagline: "Pattern recognition engine that predicts and prevents denials, not just manages them.",
    description:
      "PARCS Denial Intelligence doesn't just manage denials after they happen — it predicts which claims are likely to be denied and why, then takes preventive action. When denials do occur, it automates root-cause analysis, appeal generation, and resubmission.",
    capabilities: [
      "Pre-submission denial probability scoring",
      "Root-cause pattern analysis across payers",
      "Automated appeal letter generation",
      "Denial trend dashboards by payer, code, and provider",
      "Continuous learning from denial outcomes",
    ],
    howItWorks: [
      "Denial probability is scored at submission and before any payer response lands.",
      "When a denial arrives, root cause is classified and an appeal packet is drafted automatically.",
      "Outcomes feed back into the model to prevent the same denial pattern tomorrow.",
    ],
    icon: "shield-alert",
    color: "blue",
  },
  {
    slug: "payments",
    name: "Payments AI",
    tagline: "Automated reconciliation, variance detection, and underpayment recovery.",
    description:
      "PARCS Payments AI automates payment posting, reconciliation, and variance detection. It identifies underpayments against contracted rates, flags anomalies, and generates actionable recovery recommendations — ensuring you collect every dollar you're owed.",
    capabilities: [
      "Automated payment posting and reconciliation",
      "Contractual rate comparison and underpayment detection",
      "Payment variance alerts and trending",
      "Patient balance management and statement generation",
      "Revenue leakage reporting and recovery tracking",
    ],
    howItWorks: [
      "ERA/835 and EOB data is ingested and matched to the originating claim.",
      "PARCS benchmarks each posted amount against the contracted rate and flags variances.",
      "Underpayments route to recovery queues with pre-drafted payer correspondence.",
    ],
    icon: "dollar-sign",
    color: "amber",
  },
] as const;

export const ARCHITECTURE_LAYERS = [
  {
    number: 1,
    name: "Data Ingestion",
    description: "Connects to your entire ecosystem",
    details: [
      "EHR systems (40+)",
      "Practice Management",
      "Clearinghouses",
      "Payer portals",
      "Real-time + batch",
    ],
    tech: "HL7 v2 · FHIR R4 · X12 EDI · REST APIs",
    color: "blue",
  },
  {
    number: 2,
    name: "AI Engine",
    description: "Predicts, learns, optimizes",
    details: [
      "NLP models",
      "Denial prediction (847 variables)",
      "Coding optimization",
      "Payment variance detection",
      "Continuous retraining",
    ],
    tech: "NLP · Transformer Models · Decision Trees",
    color: "teal",
  },
  {
    number: 3,
    name: "Workflow Engine",
    description: "Automates and routes intelligently",
    details: [
      "Task automation",
      "Exception handling",
      "Priority routing",
      "SLA management",
      "Queue optimization",
    ],
    tech: "Event-driven pipelines · Rules engine · SLA monitors",
    color: "blue",
  },
  {
    number: 4,
    name: "Execution Layer",
    description: "Human + AI hybrid delivery",
    details: [
      "400+ RCM specialists",
      "Specialist escalation",
      "Quality assurance",
      "Performance monitoring",
      "Guaranteed outcomes",
    ],
    tech: "Human-in-the-loop · QA sampling · Outcome SLAs",
    color: "teal",
  },
  {
    number: 5,
    name: "Analytics & Insights",
    description: "Real-time visibility into everything",
    details: [
      "Revenue dashboards",
      "Denial trending",
      "Payer scorecards",
      "Financial forecasting",
      "Custom KPIs",
    ],
    tech: "Columnar analytics · Streaming metrics · Forecasting models",
    color: "amber",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "We are very happy since partnering with Vistec 6 years ago. They have a great system that helps us collect our money faster while increasing compliance. Excellent reporting has provided us transparency into the practice that we never had before.",
    author: "Dr. Realba R.",
    title: "Primary Care Physician",
    location: "Bronx, NY",
    initial: "R",
  },
  {
    quote:
      "Vistec Partners has a professional team that feels like an extension of our office. Since we joined Vistec, we've seen an increase in our collection rate resulting from better claim scrubbing.",
    author: "Dr. Hayes G.",
    title: "Dermatology Practice",
    location: "San Ramon, CA",
    initial: "H",
  },
  {
    quote:
      "Vistec has been a great partner. We've been working with them for 7 years and continue to be impressed with their coding and collections.",
    author: "Dr. Sumir S.",
    title: "Urgent Care",
    location: "Bronx, NY",
    initial: "S",
  },
] as const;

export const INTEGRATIONS = {
  ehr: [
    "Epic",
    "Oracle Health (Cerner)",
    "athenahealth",
    "eClinicalWorks",
    "NextGen",
    "Greenway",
    "MEDITECH",
    "Allscripts",
    "DrChrono",
    "ModMed",
    "AdvancedMD",
    "Kareo",
    "Practice Fusion",
  ],
  clearinghouses: ["Availity", "Change Healthcare", "Trizetto", "Waystar", "Inovalon"],
  standards: ["HL7 v2", "FHIR R4", "X12 EDI", "NCPDP"],
} as const;

export const COMPETITORS = {
  traditional: {
    name: "Traditional RCM",
    denialPrevention: "reactive",
    execution: "manual",
    learning: "static",
    timeToValue: "6-12 months",
    integration: "limited",
    pricing: "% of collections",
  },
  aiOnly: {
    name: "AI-Only Vendors",
    denialPrevention: "predict-only",
    execution: "none",
    learning: "model-level",
    timeToValue: "3-6 months",
    integration: "api-only",
    pricing: "per-claim + license",
  },
  parcs: {
    name: "VistecPartners (PARCS)",
    denialPrevention: "predict-prevent-resolve",
    execution: "ai-plus-team",
    learning: "continuous-per-client",
    timeToValue: "4-8 weeks",
    integration: "40-plus-native",
    pricing: "performance-aligned",
  },
} as const;

export const NAV_ITEMS = [
  {
    label: "Platform",
    href: "/platform",
    children: [
      {
        label: "PARCS Overview",
        href: "/platform",
        description: "The AI revenue operating system",
      },
      {
        label: "Architecture & AI Engine",
        href: "/platform/architecture",
        description: "Five-layer platform deep-dive",
      },
      {
        label: "Modules",
        href: "/platform/modules",
        description: "Six AI engines for every revenue function",
      },
      {
        label: "Integrations",
        href: "/platform/integrations",
        description: "40+ EHR and system connections",
      },
    ],
  },
  { label: "Solutions", href: "/solutions" },
  { label: "Outcomes", href: "/outcomes" },
  { label: "About", href: "/about" },
  { label: "Compare", href: "/compare" },
] as const;

export const SOLUTIONS = [
  {
    slug: "health-systems",
    label: "Health Systems",
    pains: [
      "Complex multi-facility operations",
      "High denial rates across service lines",
      "RCM staffing shortages and attrition",
    ],
    solution:
      "Enterprise-scale automation with centralized analytics — PARCS unifies every facility under a single AI revenue operating system with guaranteed execution.",
    highlightedModules: ["denials", "coding", "claims"],
    outcome:
      "Health systems using PARCS see 25–30% denial reduction and 15–20% lower cost-to-collect.",
  },
  {
    slug: "physician-groups",
    label: "Physician Groups & Multi-Specialty",
    pains: [
      "Multiple payers with varying reimbursement rules",
      "Limited internal tech resources",
      "Rising cost-to-collect as volume grows",
    ],
    solution:
      "A managed AI platform — we handle the tech, you focus on patients. PARCS runs end-to-end so multi-specialty practices never need to build in-house RCM infrastructure.",
    highlightedModules: ["eligibility", "claims", "payments"],
    outcome: "Physician groups achieve 98%+ clean claim rates within 60 days.",
  },
  {
    slug: "billing-companies",
    label: "Billing Companies & RCM Partners",
    pains: [
      "Scaling operations without proportional headcount",
      "Maintaining quality across many clients",
      "Competitive pressure from AI-native entrants",
    ],
    solution:
      "White-label or powered-by PARCS. Scale your ops with AI — keep your brand, amplify your margins, and add an analytics layer your clients will notice.",
    highlightedModules: ["denials", "authorization", "payments"],
    outcome: "Billing companies using PARCS manage 3× more accounts per FTE.",
  },
] as const;

export const MILESTONES = [
  { year: "2005", label: "Founded", detail: "Vistec opens with a bet on domain expertise over body shops." },
  { year: "2011", label: "100 providers", detail: "First multi-state expansion across NY, NJ, and CA." },
  { year: "2016", label: "$100M collected", detail: "Crossed a cumulative $100M in collections on behalf of clients." },
  { year: "2022", label: "PARCS launched", detail: "Two decades of RCM know-how encoded into the PARCS AI platform." },
  { year: "2026", label: "500 providers · $500M+", detail: "Serving 500+ providers with 400-person ops backing every claim." },
] as const;

export const LEADERSHIP = [
  { name: "Leader Name", title: "Chief Executive Officer", initial: "A" },
  { name: "Leader Name", title: "Chief Technology Officer", initial: "B" },
  { name: "Leader Name", title: "Chief Operating Officer", initial: "C" },
  { name: "Leader Name", title: "Chief Financial Officer", initial: "D" },
  { name: "Leader Name", title: "VP, Product", initial: "E" },
  { name: "Leader Name", title: "VP, Client Success", initial: "F" },
] as const;

export const CASE_STUDY_PLACEHOLDERS = [
  {
    industry: "Multi-Specialty Practice",
    location: "New York, NY",
    challenge: "32% denial rate from inconsistent eligibility and coding across six specialties.",
    solution: "PARCS Eligibility + Coding Intelligence + 400-person execution layer.",
    results: "Denials down 68% in 120 days; AR days cut from 52 to 31.",
  },
  {
    industry: "Regional Health System",
    location: "Southeast US",
    challenge: "Post-acquisition AR sprawl across disparate EHRs and clearinghouses.",
    solution: "Unified ingestion layer + Denial Intelligence routed through PARCS workflow engine.",
    results: "$14M in underpayments recovered in the first year.",
  },
  {
    industry: "Billing Company",
    location: "National",
    challenge: "Margin compression from AI-native competitors undercutting on per-claim pricing.",
    solution: "Powered-by-PARCS white label for 40-client portfolio.",
    results: "3× accounts-per-FTE; 22% margin uplift without price increases.",
  },
] as const;

export const COMPARE_COLUMNS = [
  { key: "traditional", name: "Traditional RCM" },
  { key: "waystar", name: "Waystar" },
  { key: "akasa", name: "AKASA" },
  { key: "thoughtful", name: "Thoughtful AI" },
  { key: "parcs", name: "VistecPartners (PARCS)", highlight: true },
] as const;

export const COMPARE_ROWS = [
  {
    dimension: "AI Capabilities",
    values: {
      traditional: { mark: "x", text: "Static rule sets" },
      waystar: { mark: "warn", text: "AltitudeAI — prediction layer" },
      akasa: { mark: "check", text: "GenAI, model-level learning" },
      thoughtful: { mark: "check", text: "Modular AI agents" },
      parcs: { mark: "check", text: "Predict + prevent + resolve; per-client learning" },
    },
  },
  {
    dimension: "Execution Model",
    values: {
      traditional: { mark: "check", text: "Manual teams" },
      waystar: { mark: "warn", text: "Software with services" },
      akasa: { mark: "x", text: "Software only" },
      thoughtful: { mark: "x", text: "Agents only" },
      parcs: { mark: "check", text: "AI + 400-person ops team" },
    },
  },
  {
    dimension: "Integration Depth",
    values: {
      traditional: { mark: "warn", text: "Limited, file-based" },
      waystar: { mark: "check", text: "1,000+ payer connections" },
      akasa: { mark: "warn", text: "API-first, EHR partnerships" },
      thoughtful: { mark: "warn", text: "API-only" },
      parcs: { mark: "check", text: "40+ EHR native integrations" },
    },
  },
  {
    dimension: "Time to Value",
    values: {
      traditional: { mark: "warn", text: "6–12 months" },
      waystar: { mark: "warn", text: "3–6 months" },
      akasa: { mark: "warn", text: "3–6 months" },
      thoughtful: { mark: "warn", text: "2–4 months" },
      parcs: { mark: "check", text: "4–8 weeks" },
    },
  },
  {
    dimension: "Pricing Model",
    values: {
      traditional: { mark: "warn", text: "% of collections" },
      waystar: { mark: "warn", text: "Enterprise license + usage" },
      akasa: { mark: "warn", text: "License + per-claim" },
      thoughtful: { mark: "check", text: "Performance-based" },
      parcs: { mark: "check", text: "Performance-aligned" },
    },
  },
  {
    dimension: "Security & Compliance",
    values: {
      traditional: { mark: "warn", text: "Varies by vendor" },
      waystar: { mark: "check", text: "HIPAA, SOC 2" },
      akasa: { mark: "check", text: "HIPAA, SOC 2 Type II" },
      thoughtful: { mark: "check", text: "HIPAA, SOC 2" },
      parcs: { mark: "check", text: "HIPAA, SOC 2, AES-256, TLS 1.3" },
    },
  },
  {
    dimension: "Client Segments",
    values: {
      traditional: { mark: "warn", text: "Any" },
      waystar: { mark: "warn", text: "Enterprise hospitals" },
      akasa: { mark: "warn", text: "Large health systems" },
      thoughtful: { mark: "warn", text: "Mid-market practices" },
      parcs: { mark: "check", text: "Health systems, physician groups, billing cos" },
    },
  },
] as const;
