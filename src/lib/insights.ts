export type Benchmark = {
  role: string;
  base: string;
  ote: string;
  split: string;
};

// Indicative ranges for US metro markets, informed by the roles Channel Marker
// currently recruits for. Review and update each quarter.
export const benchmarks: Benchmark[] = [
  { role: "Sales Development Rep (SDR/BDR)", base: "$60K – $85K", ote: "$85K – $120K", split: "70 / 30" },
  { role: "Account Executive (Mid-Market)", base: "$90K – $130K", ote: "$180K – $260K", split: "50 / 50" },
  { role: "Enterprise Account Executive", base: "$140K – $180K", ote: "$280K – $400K+", split: "50 / 50" },
  { role: "Account Manager", base: "$100K – $130K", ote: "$180K – $250K", split: "60 / 40" },
  { role: "Sales / Pre-Sales Engineer", base: "$125K – $165K", ote: "$170K – $230K", split: "75 / 25" },
  { role: "Solutions Architect", base: "$150K – $190K", ote: "$190K – $250K", split: "80 / 20" },
  { role: "Channel / Partner Manager", base: "$115K – $150K", ote: "$200K – $260K", split: "60 / 40" },
  { role: "Regional VP of Sales", base: "$190K – $250K", ote: "$350K – $500K", split: "50 / 50" },
];

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  body: { heading?: string; paragraphs?: string[]; bullets?: string[] }[];
};

export const articles: Article[] = [
  {
    slug: "how-to-spot-a-real-closer",
    title: "How to Spot a Real Closer in the Interview",
    excerpt:
      "Great salespeople interview well, and that's the problem. Here's how we separate polished talkers from people who consistently carry a number.",
    category: "Hiring",
    readTime: "5 min read",
    date: "2026-09-08",
    body: [
      {
        paragraphs: [
          "Every sales candidate knows how to sell themselves for forty-five minutes. The real question is whether they can do it for four quarters in a row against a quota. After 15+ years of placing sales talent, these are the signals we trust most.",
        ],
      },
      {
        heading: "Ask for the numbers, then ask again",
        paragraphs: [
          "Strong closers know their attainment by year, by quarter and by deal size without hesitating. Ask for quota, attainment, average deal size and cycle length. Vague answers like \"I was always near the top\" are a yellow flag.",
        ],
      },
      {
        heading: "Walk through one deal, start to finish",
        paragraphs: [
          "Have the candidate pick their best deal from the last year and narrate it: how it was sourced, who the stakeholders were, where it nearly died, and what they did about it. You'll learn more about their process from one story than from ten hypothetical questions.",
        ],
      },
      {
        heading: "Check what they did when things went wrong",
        bullets: [
          "Tell me about a quarter where you missed. What changed afterward?",
          "Describe a deal you lost that you should have won.",
          "How did you rebuild pipeline after a slow month?",
        ],
      },
      {
        heading: "Verify with references who managed them",
        paragraphs: [
          "We reference-check every candidate we present, specifically with former managers who saw the stack ranking. It's the single most reliable way to confirm what you heard in the interview.",
        ],
      },
    ],
  },
  {
    slug: "true-cost-of-a-bad-sales-hire",
    title: "The True Cost of a Bad Sales Hire",
    excerpt:
      "Salary is the smallest line item. Lost pipeline, ramp time and team morale add up fast. Here's how to think about the real number.",
    category: "Strategy",
    readTime: "4 min read",
    date: "2026-08-14",
    body: [
      {
        paragraphs: [
          "When a sales hire doesn't work out, most companies count the salary they paid. The real cost is much larger, and it compounds quietly before anyone notices.",
        ],
      },
      {
        heading: "Where the cost actually comes from",
        bullets: [
          "Ramp time: three to nine months of paid onboarding before full productivity.",
          "Missed quota: the revenue the seat should have produced but didn't.",
          "Burned territory: prospects who had a poor first experience with your brand.",
          "Manager time: coaching, performance plans and, eventually, rehiring.",
          "Team morale: strong reps notice when underperformance is tolerated.",
        ],
      },
      {
        heading: "How to lower the risk",
        paragraphs: [
          "Define the role by outcomes, not adjectives. Screen against measurable targets. Reference-check with former managers. And move quickly once you've found the right person. The best candidates are rarely on the market for long.",
          "That's exactly the process we run for every search, so the people you meet have already cleared the bar.",
        ],
      },
    ],
  },
  {
    slug: "writing-a-sales-job-description-that-attracts-top-performers",
    title: "Writing a Sales Job Description That Attracts Top Performers",
    excerpt:
      "Top reps scan for three things: territory, comp plan and whether they can win. Lead with those and your response quality changes overnight.",
    category: "Employer Branding",
    readTime: "4 min read",
    date: "2026-07-22",
    body: [
      {
        paragraphs: [
          "Most sales job descriptions read like a list of personality traits. Top performers skip past those. They want to know if the seat is winnable and if the money is real.",
        ],
      },
      {
        heading: "Lead with what top reps care about",
        bullets: [
          "Base, OTE and whether commission is capped",
          "Territory or book of business, and how it's assigned",
          "Average deal size and sales cycle length",
          "Quota attainment across the current team",
          "Support: SDRs, sales engineers, marketing-sourced pipeline",
        ],
      },
      {
        heading: "Be specific about the first 90 days",
        paragraphs: [
          "Describe what success looks like at 30, 60 and 90 days. It signals a mature sales org and helps candidates self-select in, or out, before anyone's time is wasted.",
        ],
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
