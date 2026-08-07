export type NavLink = { label: string; href: string };

export type Stat = { value: string; label: string };

export type Edge = {
  icon: string;
  title: string;
  description: string;
};

export type Domain = {
  icon: string;
  title: string;
  description: string;
  tags: string[];
};

export type Program = {
  category: string;
  title: string;
  level: string;
  duration: string;
  institute: string;
  description: string;
};

export type Step = {
  number: string;
  title: string;
  description: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export const navLinks: NavLink[] = [
  { label: "Why Accredian", href: "#edge" },
  { label: "Domains", href: "#domains" },
  { label: "Programs", href: "#programs" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export const stats: Stat[] = [
  { value: "10,000+", label: "Professionals trained" },
  { value: "50+", label: "Enterprise partners" },
  { value: "7", label: "Domain specializations" },
  { value: "92%", label: "Learner completion rate" },
];

export const clients: string[] = [
  "IITs & IIMs",
  "XLRI",
  "SP Jain",
  "NovaBank",
  "Vertex Health",
  "AeroLink",
  "Orbit Retail",
  "FinWise Group",
];

export const edgeItems: Edge[] = [
  {
    icon: "puzzle",
    title: "Tailored Solutions",
    description:
      "Programs co-designed around your organization's goals, tech stack, and team competency — not a one-size-fits-all catalog.",
  },
  {
    icon: "trending",
    title: "Industry Insights",
    description:
      "Curriculum built with input from practitioners so your teams learn what is actually used in the field, today.",
  },
  {
    icon: "users",
    title: "Expert Guidance",
    description:
      "Live mentorship from 300+ industry experts and faculty from top academic institutions across every cohort.",
  },
  {
    icon: "gauge",
    title: "Measurable Impact",
    description:
      "Real-time dashboards track completion, engagement, and skill growth so L&D can prove ROI to leadership.",
  },
];

export const domains: Domain[] = [
  {
    icon: "rocket",
    title: "Product & Innovation Hub",
    description:
      "Build product leaders who ship faster, run discovery with confidence, and turn ideas into measurable outcomes.",
    tags: ["Product Management", "Design Thinking", "Growth"],
  },
  {
    icon: "cpu",
    title: "Gen-AI Mastery",
    description:
      "Equip teams to harness generative AI responsibly — from prompt engineering to agentic workflows and AI strategy.",
    tags: ["Generative AI", "Prompt Engineering", "AI Strategy"],
  },
  {
    icon: "compass",
    title: "Leadership Elevation",
    description:
      "Develop senior leaders and high-potential managers with programs in strategy, execution, and people leadership.",
    tags: ["General Management", "Strategic Leadership", "CXO"],
  },
  {
    icon: "database",
    title: "Tech & Data Insights",
    description:
      "Build data fluency across the organization — analytics, machine learning, cloud, and engineering excellence.",
    tags: ["Data Science", "Machine Learning", "Cloud"],
  },
  {
    icon: "cog",
    title: "Operations Excellence",
    description:
      "Sharpen operational discipline and continuous improvement capabilities to unlock efficiency at scale.",
    tags: ["Process Excellence", "Lean", "Supply Chain"],
  },
  {
    icon: "building",
    title: "Digital Enterprise",
    description:
      "Drive digital transformation with programs spanning digital business models, customer experience, and agility.",
    tags: ["Digital Transformation", "CX", "Agile"],
  },
  {
    icon: "bank",
    title: "Fintech Innovation Lab",
    description:
      "Deepen financial-services expertise — payments, risk, regulation, and emerging fintech business models.",
    tags: ["Fintech", "Risk & Compliance", "Payments"],
  },
];

export const programCategories = [
  "All",
  "Program Specific",
  "Role Based",
  "Industry Based",
] as const;

export const programs: Program[] = [
  {
    category: "Program Specific",
    title: "Applied Machine Learning",
    level: "Intermediate",
    duration: "6 months",
    institute: "IIT-affiliated faculty",
    description:
      "Hands-on ML, feature engineering, and MLOps for data teams shipping production models.",
  },
  {
    category: "Program Specific",
    title: "Data Science & Analytics",
    level: "Foundational",
    duration: "4 months",
    institute: "Accredian Faculty",
    description:
      "Build end-to-end analytics skills: SQL, statistics, visualization, and storytelling with data.",
  },
  {
    category: "Program Specific",
    title: "UI/UX & Design Thinking",
    level: "Intermediate",
    duration: "3 months",
    institute: "Industry Mentors",
    description:
      "Human-centered design, prototyping, and usability research for digital product teams.",
  },
  {
    category: "Program Specific",
    title: "Cybersecurity Fundamentals",
    level: "Foundational",
    duration: "3 months",
    institute: "Security Practitioners",
    description:
      "Threat modeling, secure architecture, and incident response essentials for engineering orgs.",
  },
  {
    category: "Role Based",
    title: "Executive Leadership Program",
    level: "Advanced",
    duration: "8 months",
    institute: "XLRI / SP Jain",
    description:
      "Strategy, decision-making, and boardroom communication for senior leaders and CXO-track talent.",
  },
  {
    category: "Role Based",
    title: "Gen-AI for Product Managers",
    level: "Intermediate",
    duration: "6 weeks",
    institute: "Industry Mentors",
    description:
      "Ship AI-powered features with confidence — from prompting to evaluation and ethical design.",
  },
  {
    category: "Role Based",
    title: "Engineering Manager Bootcamp",
    level: "Advanced",
    duration: "10 weeks",
    institute: "Practitioner Faculty",
    description:
      "Team leadership, delivery, and engineering culture for new and aspiring engineering managers.",
  },
  {
    category: "Industry Based",
    title: "Fintech: Payments & Risk",
    level: "Intermediate",
    duration: "4 months",
    institute: "Fintech Practitioners",
    description:
      "Payments rails, fraud, and regulatory frameworks for teams in financial services.",
  },
  {
    category: "Industry Based",
    title: "Healthcare Data & AI",
    level: "Advanced",
    duration: "5 months",
    institute: "Domain Experts",
    description:
      "Compliance-aware analytics and AI applications for healthcare and life-sciences organizations.",
  },
  {
    category: "Industry Based",
    title: "Retail & Consumer Insights",
    level: "Foundational",
    duration: "3 months",
    institute: "Retail Experts",
    description:
      "Demand forecasting, pricing, and customer analytics for consumer and retail businesses.",
  },
];

export const frameworkSteps: Step[] = [
  {
    number: "01",
    title: "Skill Gap Analysis",
    description:
      "We assess your team's current skills and developmental needs against your business objectives to map exactly where the gaps are.",
  },
  {
    number: "02",
    title: "Customized Training Plan",
    description:
      "We create a tailored roadmap aligned to organizational goals — the right curriculum, format, and pacing for your people.",
  },
  {
    number: "03",
    title: "Flexible Program Delivery",
    description:
      "We deliver adaptable programs with live cohorts, on-demand content, and mentorship that fit industry and org needs.",
  },
];

export const catPillars = [
  {
    title: "Curriculum",
    description: "Customized learning paths built around your goals",
  },
  {
    title: "Application",
    description: "Hands-on projects tied to real business challenges",
  },
  {
    title: "Tracking",
    description: "Outcome dashboards that prove measurable impact",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Accredian turned our vision into reality with unmatched dedication and expertise. The journey from planning to rollout was seamless.",
    name: "Anita Rao",
    role: "Head of L&D",
    company: "NovaBank",
  },
  {
    quote:
      "Choosing Accredian for employee development was a beneficial decision. The value our teams derived from the programs is immense, and support is always there.",
    name: "Rahul Mehta",
    role: "CHRO",
    company: "Vertex Health",
  },
  {
    quote:
      "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded.",
    name: "Sneha Iyer",
    role: "Vice President, Talent",
    company: "AeroLink",
  },
];

export const faqs: Faq[] = [
  {
    question: "What types of corporate training programs does Accredian offer?",
    answer:
      "Accredian provides industry-specific, customizable training programs tailored to your organization's unique needs, covering domains like leadership, tech, data, product, operations, and fintech.",
  },
  {
    question: "What domain specializations are available?",
    answer:
      "We offer expertise across Leadership Development, Tech & Data, Fintech, Digital Business, Product Innovation, Operations Management, and Generative AI.",
  },
  {
    question: "Can programs be customized for our organization?",
    answer:
      "Yes. Every engagement starts with a skill-gap analysis and ends with a program co-designed around your goals, tech stack, team level, and industry context.",
  },
  {
    question: "How do you measure learning impact?",
    answer:
      "You get real-time dashboards tracking completion, engagement, assessments, and skill growth — plus periodic business-impact reviews with your L&D team.",
  },
  {
    question: "What is the typical program duration?",
    answer:
      "Programs range from 6-week focused bootcamps to 8-month executive programs, depending on the domain, level, and learning objectives.",
  },
];

export const footerLinks = {
  company: [
    { label: "About Us", href: "#edge" },
    { label: "Why Accredian", href: "#edge" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
  programs: [
    { label: "Gen-AI Mastery", href: "#domains" },
    { label: "Leadership Elevation", href: "#domains" },
    { label: "Tech & Data Insights", href: "#domains" },
    { label: "Fintech Innovation", href: "#domains" },
  ],
  resources: [
    { label: "Success Stories", href: "#testimonials" },
    { label: "FAQs", href: "#faq" },
    { label: "Book a Demo", href: "#contact" },
  ],
};

export const teamSizes = ["1–50", "51–200", "201–1000", "1000+"];

export const programInterests = [
  "Generative AI",
  "Leadership",
  "Data & Analytics",
  "Product",
  "Fintech",
  "Not sure yet",
];
