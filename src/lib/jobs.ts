export type Job = {
  slug: string;
  title: string;
  category: "Sales" | "Technical" | "Partnerships";
  type: string;
  location: string;
  workplace: "Remote" | "Hybrid";
  compensation: string;
  ote: string;
  posted: string; // ISO date
  summary: string;
  responsibilities: string[];
  requirements: string[];
  perks: string[];
};

export const jobs: Job[] = [
  {
    slug: "enterprise-account-executive",
    title: "Enterprise Account Executive",
    category: "Sales",
    type: "Full-time",
    location: "Remote · East Coast",
    workplace: "Remote",
    compensation: "$150K base + uncapped commission",
    ote: "$350K+ OTE",
    posted: "2026-07-16",
    summary:
      "Sell enterprise SaaS into Fortune 1000 accounts and own the full cycle from first meeting to signed contract, supported by a strong SDR team and a proven playbook.",
    responsibilities: [
      "Run complex, multi-stakeholder deals from prospecting through close",
      "Build and execute account plans for a named list of Fortune 1000 targets",
      "Partner with SDRs, solutions engineers and leadership on strategic pursuits",
      "Forecast accurately and keep pipeline hygiene tight in the CRM",
    ],
    requirements: [
      "3+ years of closing experience in B2B or enterprise software",
      "A documented track record of exceeding quota",
      "Comfort selling to C-level and VP-level buyers",
      "Experience with a structured methodology (MEDDICC, Challenger or similar)",
    ],
    perks: ["Uncapped commission", "SDR support", "Remote-first", "Proven playbook"],
  },
  {
    slug: "account-manager",
    title: "Account Manager",
    category: "Sales",
    type: "Full-time",
    location: "Hybrid · NYC Metro (EST)",
    workplace: "Hybrid",
    compensation: "$120K base + bonus",
    ote: "$240K OTE",
    posted: "2026-07-02",
    summary:
      "Own and grow a book of established client accounts, driving renewals, upsells and long-term partnerships. Warm relationships from day one, no cold prospecting.",
    responsibilities: [
      "Manage a portfolio of established, revenue-generating accounts",
      "Lead renewal conversations and identify expansion opportunities",
      "Serve as the trusted advisor and escalation point for key customers",
      "Collaborate with product and support to deliver measurable outcomes",
    ],
    requirements: [
      "2+ years in account management, customer success or B2B sales",
      "Strong relationship-building and negotiation skills",
      "Organized, proactive, and comfortable owning a number",
      "Able to work a hybrid schedule in the NYC metro area",
    ],
    perks: ["Inherited book of business", "Hybrid schedule", "Strong bonus plan"],
  },
  {
    slug: "solutions-architect",
    title: "Solutions Architect",
    category: "Technical",
    type: "Full-time",
    location: "Remote · EST time zone",
    workplace: "Remote",
    compensation: "$160K base + bonus",
    ote: "$200K OTE",
    posted: "2026-06-18",
    summary:
      "Design and own the technical vision for enterprise deals, translating complex client needs into winning, scalable solutions alongside AEs and engineering.",
    responsibilities: [
      "Lead technical discovery and solution design for enterprise opportunities",
      "Architect scalable systems that map to customer requirements",
      "Present architectures and trade-offs to technical and executive audiences",
      "Feed field insight back to product and engineering teams",
    ],
    requirements: [
      "5+ years in solutions architecture or enterprise technical consulting",
      "Deep understanding of cloud, integration and security patterns",
      "Excellent written and verbal communication",
      "Experience supporting complex, high-value sales cycles",
    ],
    perks: ["Remote", "Senior technical ownership", "High-impact deals"],
  },
  {
    slug: "pre-sales-engineer",
    title: "Pre-Sales Engineer",
    category: "Technical",
    type: "Full-time",
    location: "Hybrid · Boston or NYC",
    workplace: "Hybrid",
    compensation: "$130K base + commission",
    ote: "$180K OTE",
    posted: "2026-06-04",
    summary:
      "Be the technical heart of the sales cycle. Run demos, scope solutions, and answer the tough questions that turn prospects into customers.",
    responsibilities: [
      "Deliver tailored product demonstrations and proofs of concept",
      "Scope technical requirements and design fit-for-purpose solutions",
      "Handle technical objections and security questionnaires",
      "Work hand-in-hand with AEs to win complex deals",
    ],
    requirements: [
      "3+ years in sales engineering or a technical pre-sales role",
      "Strong presentation and storytelling skills",
      "Hands-on technical depth and curiosity",
      "Able to work hybrid from Boston or New York",
    ],
    perks: ["Commission plan", "Hybrid", "Two hub cities"],
  },
  {
    slug: "channel-partner-manager",
    title: "Channel Partner Manager",
    category: "Partnerships",
    type: "Full-time",
    location: "Remote · US East Coast",
    workplace: "Remote",
    compensation: "$120K base + commission",
    ote: "$220K OTE",
    posted: "2026-05-21",
    summary:
      "Build and grow a reseller and referral partner ecosystem, driving revenue through strategic alliances that extend reach and accelerate deals.",
    responsibilities: [
      "Recruit, onboard and enable new reseller and referral partners",
      "Build joint business plans and co-selling motions",
      "Track partner-sourced and partner-influenced pipeline",
      "Run partner enablement, incentives and quarterly business reviews",
    ],
    requirements: [
      "4+ years in channel sales, partnerships or alliances",
      "An existing partner network you can activate",
      "Strong program-building and cross-functional skills",
      "Comfortable with a quota tied to partner revenue",
    ],
    perks: ["Remote", "Greenfield program", "Commission plan"],
  },
];

export function getJob(slug: string) {
  return jobs.find((j) => j.slug === slug);
}

export function formatDate(iso: string) {
  return new Date(iso + "T12:00:00Z").toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}
