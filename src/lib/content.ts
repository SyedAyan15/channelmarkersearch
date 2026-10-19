export const roles = [
  { title: "SDRs & BDRs", body: "Hungry pipeline builders who book quality meetings and grow into closers." },
  { title: "Account Executives", body: "SMB, mid-market and enterprise AEs with documented quota attainment." },
  { title: "Account Managers", body: "Relationship owners who drive renewals, upsell and expansion." },
  { title: "Sales & Pre-Sales Engineers", body: "Technical sellers who run demos, scope solutions and win complex deals." },
  { title: "Solutions Architects", body: "Senior technical leaders who design winning enterprise solutions." },
  { title: "Channel & Partner Managers", body: "Builders of reseller, referral and alliance programs that scale revenue." },
  { title: "Customer Success", body: "Retention-focused leaders who protect and grow recurring revenue." },
  { title: "Sales Leadership", body: "First-line managers, directors and VPs who build and coach winning teams." },
];

export const steps = [
  {
    title: "Discovery",
    time: "Day 1–2",
    body: "We learn your product, buyer, sales motion, comp plan and culture, and define the role by measurable outcomes.",
  },
  {
    title: "Targeted search",
    time: "Week 1–2",
    body: "We tap our network and run direct outreach to passive, proven performers who aren't on job boards.",
  },
  {
    title: "Vetting",
    time: "Ongoing",
    body: "Every candidate is interviewed, reference-checked with former managers and screened against your targets.",
  },
  {
    title: "Shortlist & close",
    time: "Week 2–4",
    body: "You meet a short list of qualified finalists. We coordinate interviews, manage the offer and support onboarding.",
  },
];

export const faqs = [
  {
    q: "What kinds of companies do you work with?",
    a: "Everyone from high-growth startups hiring their first salespeople to established enterprises scaling a national team. Our recruiters have placed sales talent with companies like Cisco, Honeywell and HPE.",
  },
  {
    q: "Do you only recruit in New York?",
    a: "No. We're based in New York, but we run searches for remote, hybrid and on-site sales roles across the United States.",
  },
  {
    q: "How is Channel Marker different from a staffing agency?",
    a: "We're not a high-volume shop. Every candidate we present has been interviewed, reference-checked and screened against your role's specific targets, so you see a short list rather than a stack of resumes.",
  },
  {
    q: "How long does a typical search take?",
    a: "Most searches produce a qualified shortlist within two to three weeks. Timelines depend on seniority, location and compensation. We'll give you a realistic estimate during discovery.",
  },
  {
    q: "How are your fees structured?",
    a: "We offer contingency searches for most individual-contributor roles and retained or engaged searches for leadership and hard-to-fill positions. Contact us for terms tailored to your hiring plan.",
  },
  {
    q: "Do you offer a replacement guarantee?",
    a: "Yes. If a placement doesn't work out within the guarantee period, we'll run the search again. Terms are confirmed in your agreement.",
  },
];

export type RoleProfile = {
  id: string;
  title: string;
  summary: string;
  screenFor: string[];
  base: string;
  ote: string;
  careersFilter: "Sales" | "Technical" | "Partnerships";
};

export const roleProfiles: RoleProfile[] = [
  {
    id: "ae",
    title: "Account Executives",
    summary: "SMB, mid-market and enterprise closers who own the full sales cycle and consistently carry a number.",
    screenFor: ["Verified quota attainment by year", "Average deal size and sales cycle length", "Experience selling to your buyer"],
    base: "$90K – $180K",
    ote: "$180K – $400K+",
    careersFilter: "Sales",
  },
  {
    id: "am",
    title: "Account Managers",
    summary: "Relationship owners who protect existing revenue and grow it through renewals, upsell and expansion.",
    screenFor: ["Net revenue retention on past books", "Size and complexity of accounts managed", "Negotiation and renewal track record"],
    base: "$100K – $130K",
    ote: "$180K – $250K",
    careersFilter: "Sales",
  },
  {
    id: "se",
    title: "Sales Engineers",
    summary: "Technical sellers who run demos, scope solutions and give buyers the confidence to sign.",
    screenFor: ["Hands-on product and technical depth", "Demo and presentation skills", "Win rate on deals they supported"],
    base: "$125K – $165K",
    ote: "$170K – $230K",
    careersFilter: "Technical",
  },
  {
    id: "sa",
    title: "Solutions Architects",
    summary: "Senior technical leaders who design scalable solutions for complex enterprise deals.",
    screenFor: ["Enterprise architecture experience", "Ability to translate needs into solutions", "Credibility with technical executives"],
    base: "$150K – $190K",
    ote: "$190K – $250K",
    careersFilter: "Technical",
  },
  {
    id: "channel",
    title: "Channel & Partner Managers",
    summary: "Builders of reseller, referral and alliance programs that extend your reach and accelerate deals.",
    screenFor: ["An active partner network", "Partner-sourced revenue they can show", "Program building and enablement"],
    base: "$115K – $150K",
    ote: "$200K – $260K",
    careersFilter: "Partnerships",
  },
  {
    id: "leadership",
    title: "Sales Leadership",
    summary: "Managers, directors and VPs who hire, coach and lead teams to hit the number.",
    screenFor: ["Team attainment under their leadership", "Hiring and development record", "Forecast accuracy and pipeline discipline"],
    base: "$190K – $250K",
    ote: "$350K – $500K",
    careersFilter: "Sales",
  },
];
