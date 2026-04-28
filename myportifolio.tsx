import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  Phone,
  MapPin,
  Database,
  Layers,
  Smartphone,
  BarChart3,
  Cpu,
  Rocket,
  WifiOff,
  ChartNoAxesCombined,
  ExternalLink,
  CheckCircle2,
  Briefcase,
  GraduationCap,
  Wrench,
  Trophy,
} from "lucide-react";

type DivProps = React.HTMLAttributes<HTMLDivElement>;
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "default" | "outline" | "ghost" | "secondary";
  size?: "default" | "lg" | "icon";
};
type AnchorButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "default" | "outline" | "ghost" | "secondary";
  size?: "default" | "lg" | "icon";
  className?: string;
  children: React.ReactNode;
};

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>;
type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement>;
type SpanProps = React.HTMLAttributes<HTMLSpanElement>;

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Card({ className, ...props }: DivProps) {
  return <div className={cn("rounded-2xl border border-slate-800 bg-slate-900/70", className)} {...props} />;
}

function CardHeader({ className, ...props }: DivProps) {
  return <div className={cn("p-6", className)} {...props} />;
}

function CardContent({ className, ...props }: DivProps) {
  return <div className={cn("p-6", className)} {...props} />;
}

function CardTitle({ className, ...props }: HeadingProps) {
  return <h3 className={cn("text-xl font-semibold", className)} {...props} />;
}

function CardDescription({ className, ...props }: ParagraphProps) {
  return <p className={cn("text-sm text-slate-300", className)} {...props} />;
}

function Badge({ className, children, ...props }: SpanProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-slate-700 px-3 py-1 text-xs font-medium",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

function buttonClasses(
  variant: ButtonProps["variant"] = "default",
  size: ButtonProps["size"] = "default",
) {
  return cn(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 disabled:pointer-events-none disabled:opacity-50",
    variant === "default" && "bg-cyan-400 text-slate-950 hover:bg-cyan-300",
    variant === "outline" && "border border-slate-700 bg-transparent text-white hover:bg-slate-800",
    variant === "ghost" && "text-slate-400 hover:bg-slate-800 hover:text-white",
    variant === "secondary" && "bg-slate-800 text-slate-100 hover:bg-slate-700",
    size === "default" && "h-10 px-4 py-2",
    size === "lg" && "h-11 px-6 py-3",
    size === "icon" && "h-10 w-10",
  );
}

function AnchorButton({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}: AnchorButtonProps) {
  return (
    <a className={cn(buttonClasses(variant, size), className)} {...props}>
      {children}
    </a>
  );
}

function Button({
  asChild,
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}: ButtonProps) {
  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<{ className?: string }>;
    return React.cloneElement(child, {
      className: cn(buttonClasses(variant, size), child.props.className, className),
    });
  }

  return (
    <button className={cn(buttonClasses(variant, size), className)} {...props}>
      {children}
    </button>
  );
}

const PROFILE = {
  name: "K.V. Skanda Kumar",
  headline:
    "Software Development Lead @ Chimple Learning Foundations | Building the Future of Free Educational Technology | EdTech Innovator | Scaling Open-Source Education Solutions at Chimple",
  shortTitle: "Tech Lead · Software Development · Data Engineering · EdTech",
  location: "Bangalore, India",
  email: "kvskandakumar@gmail.com",
  phone: "+91 7981611434",
  linkedin: "https://www.linkedin.com/in/skanda-kumar-45876a1a0/",
  github: "https://github.com/kvskandakumar",
  resumeUrl: "#",
};

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8h4V23h-4V8Zm7 0h3.83v2.05h.05c.53-1.01 1.84-2.08 3.79-2.08 4.05 0 4.8 2.67 4.8 6.13V23h-4v-7.82c0-1.87-.03-4.28-2.61-4.28-2.61 0-3.01 2.04-3.01 4.14V23h-4V8Z" />
    </svg>
  );
}

function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .5C5.65.5.5 5.66.5 12.03c0 5.1 3.3 9.42 7.88 10.95.58.1.79-.25.79-.56 0-.27-.01-1.18-.02-2.14-3.21.7-3.89-1.37-3.89-1.37-.53-1.35-1.29-1.71-1.29-1.71-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.78 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.29-5.25-5.72 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.83 1.18 3.09 0 4.44-2.7 5.42-5.28 5.71.42.36.79 1.07.79 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.67.8.56A11.54 11.54 0 0 0 23.5 12.03C23.5 5.66 18.35.5 12 .5Z" />
    </svg>
  );
}

const metrics = [
  { value: "6+", label: "Years in EdTech engineering" },
  { value: "100%", label: "Offline functionality achieved" },
  { value: "20+", label: "Looker Studio dashboards built" },
  { value: "80–90%", label: "BigQuery cost reduction" },
] as const;

const aboutParagraphs = [
  "Tech Lead and Full Stack Developer with 6+ years of experience in software development, data engineering, and analytics in the EdTech domain. Progressed from Junior to Lead Developer, owning end-to-end system architecture across multi-platform applications.",
  "Expert in React, Capacitor, Flutter, Phaser, Cocos, and BigQuery-based data systems. Specialized in offline-first architecture, cross-platform integration, and performance optimization for low-end devices.",
  "Delivered global solutions, worked directly with CEOs, CTOs, and international stakeholders, and contributed to scaling the organization from around 10 to 100+ employees. Represented products at mEducation Alliance 2025 in Kenya and client showcases in Dubai.",
] as const;

const highlights = [
  {
    icon: Layers,
    title: "Multi-platform Architecture",
    description:
      "Building interoperable learning platforms across React, Capacitor, Android, PWAs, Angular, and game engines.",
  },
  {
    icon: Database,
    title: "Data Engineering & Analytics",
    description:
      "Designing ETL pipelines, analytics data models, and reporting systems that power product and business decisions.",
  },
  {
    icon: Cpu,
    title: "Offline-first Performance",
    description:
      "Designing resilient solutions for low-connectivity regions and optimizing apps for low-end Android devices.",
  },
] as const;

const experienceGroups = [
  {
    role: "Lead Developer",
    duration: "Last 2 Years",
    icon: Briefcase,
    bullets: [
      "Led architecture and development of a multi-platform EdTech ecosystem integrating React, Capacitor, Android, PWAs, and Angular across products such as Chimple Kids Learning and Tangerine client applications.",
      "Spearheaded RESPECT platform integration across 3+ applications including Curious Reader, Tangerine, and Chimple Kids app, enabling standardized content launch, tracking, and interoperability.",
      "Developed wrapper solutions for web-based learning applications to improve Android compatibility and runtime performance.",
      "Collaborated directly with CEOs, CTOs, and international stakeholders to define product architecture and delivery roadmap.",
      "Represented and demonstrated products at mEducation Alliance 2025 in Kenya and client presentations in Dubai, supporting global rollout.",
      "Mentored and guided developers, improving team productivity and delivery timelines.",
    ],
  },
  {
    role: "Senior Software Developer",
    duration: "2 Years",
    icon: Rocket,
    bullets: [
      "Built a container-based application using React and Capacitor to integrate existing Cocos games, reducing redevelopment effort by 40%+.",
      "Played a major role in designing and implementing a fully offline-first architecture with Supabase-backed flows, achieving 100% offline functionality and improving usability in low-connectivity regions.",
      "Built and optimized features for React-based web applications using AWS and MongoDB backend services.",
      "Contributed to cross-platform architecture decisions, enabling reuse of game content across mobile and web platforms.",
      "Improved application performance and reduced load times through focused optimization work.",
    ],
  },
  {
    role: "Junior Software Developer",
    duration: "2 Years",
    icon: Smartphone,
    bullets: [
      "Developed a Course Creator application using Flutter and Dart for the Chimple platform.",
      "Implemented core features, UI components, and API integrations for content creation workflows.",
      "Developed and enhanced 2D educational games using Cocos Creator and TypeScript, improving engagement and learning experience.",
    ],
  },
  {
    role: "Data Engineering & Analytics",
    duration: "Parallel Role · 2+ Years",
    icon: BarChart3,
    bullets: [
      "Designed and implemented ETL pipelines in BigQuery for large-scale GA4 event data processing.",
      "Built 20+ dashboards in Looker Studio, transforming learning, usage, and engagement data into product, operations, and business reports for decision-making.",
      "Designed analytics data models and reporting pipelines for event tracking, KPI measurement, and stakeholder visibility.",
      "Improved data processing efficiency and significantly reduced query execution time through optimization.",
    ],
  },
] as const;

const projects = [
  {
    title: "Multi-Platform EdTech Ecosystem",
    impact:
      "Enabled seamless interoperability across Chimple Kids Learning and Tangerine client applications.",
    tech: ["React", "Capacitor", "Android", "PWAs", "Angular"],
    url: "#",
    problem:
      "Multiple learning products needed a shared architecture that could work across mobile apps, web experiences, and embedded learning modules without fragmenting the user experience.",
    solution:
      "Led the architecture and development of a unified multi-platform ecosystem that connected applications and reusable modules through shared integration patterns.",
    architecture: [
      "Cross-platform app architecture",
      "Shared wrapper and integration layers",
      "Reusable content flows across products",
      "Improved compatibility across Android environments",
    ],
    outcome: [
      "Better interoperability across applications",
      "Improved maintainability for shared experiences",
      "Stronger foundation for global rollout",
    ],
    icon: Layers,
  },
  {
    title: "RESPECT Platform Integration",
    impact: "Standardized content launch, tracking, and interoperability across 3+ applications.",
    tech: ["REST APIs", "xAPI", "React", "Capacitor", "Android"],
    url: "#",
    problem:
      "Different learning applications needed a consistent integration model for content launching and tracking across partner ecosystems.",
    solution:
      "Spearheaded RESPECT platform integration across Curious Reader, Tangerine, and Chimple Kids app using shared launch and tracking flows.",
    architecture: [
      "Shared integration contract across apps",
      "Standardized launch and tracking behavior",
      "Cross-application interoperability",
      "Partner-ready integration model",
    ],
    outcome: [
      "3+ applications integrated",
      "Standardized learning workflows",
      "Improved platform interoperability",
    ],
    icon: Rocket,
  },
  {
    title: "Offline-First Container Platform",
    impact: "Achieved 100% offline functionality while reducing redevelopment effort by 40%+.",
    tech: ["React", "Capacitor", "Cocos", "Supabase", "Offline-first"],
    url: "#",
    problem:
      "Learners and partners needed reliable learning experiences in low-connectivity environments, while existing game and web content lived across different technologies.",
    solution:
      "Built a container-based application and offline-first architecture to run existing learning content efficiently on Android devices and constrained networks.",
    architecture: [
      "Container shell for existing game engines",
      "Offline-first content delivery model",
      "Reuse of web and game-based learning modules",
      "Improved performance on low-end devices",
    ],
    outcome: [
      "100% offline capability achieved",
      "40%+ redevelopment effort reduced",
      "Higher usability in low-connectivity regions",
    ],
    icon: WifiOff,
  },
  {
    title: "BigQuery Analytics & Reporting Platform",
    impact:
      "Improved reporting speed, lowered query cost, and enabled stakeholder visibility through 20+ dashboards.",
    tech: ["BigQuery", "GA4", "SQL", "Looker Studio", "ETL"],
    url: "#",
    problem:
      "Product and business teams needed consistent reporting from large volumes of event data without high query cost or slow turnaround.",
    solution:
      "Designed ETL pipelines, analytics data models, and dashboard-ready reporting tables that transformed raw product data into decision-support reports.",
    architecture: [
      "GA4 event ingestion into BigQuery",
      "ETL transformations and curated models",
      "Looker Studio dashboard delivery",
      "Optimized queries for cost and speed",
    ],
    outcome: [
      "20+ dashboards delivered",
      "80–90% BigQuery cost reduction",
      "2–3x faster analytics processing",
    ],
    icon: BarChart3,
  },
] as const;

const skills = {
  "Languages & Frameworks": [
    "React",
    "Angular",
    "Capacitor",
    "Flutter",
    "Dart",
    "Phaser",
    "Cocos Creator",
    "TypeScript",
  ],
  "Data & Backend": [
    "Firebase",
    "Supabase",
    "BigQuery",
    "SQL",
    "GA4",
    "Looker Studio",
    "AWS",
    "MongoDB",
    "REST APIs",
    "xAPI",
  ],
  "Architecture & Concepts": [
    "Offline-First Systems",
    "PWAs",
    "Container-based Applications",
    "ETL Pipelines",
    "Cost Optimization",
    "CI/CD",
  ],
} as const;

const achievements = [
  "Promoted 3 times in 6 years from Junior to Senior to Lead Developer, reflecting consistent performance and leadership impact.",
  "Led development of offline-first applications with 100% offline capability for low-connectivity regions and low-end devices.",
  "Reduced redevelopment effort by 40%+ by creating a container-based architecture integrating existing Cocos and Phaser game engines.",
  "Successfully integrated RESPECT platform APIs across multiple applications, enabling standardized learning workflows and interoperability.",
  "Played a key role in scaling the engineering organization and product ecosystem from around 10 to 100+ employees through system design and engineering practices.",
  "Represented the organization at international platforms including mEducation Alliance 2025 in Kenya and client product presentations in Dubai.",
  "Conducted live demos and EdTech workshops for global stakeholders and partners.",
  "Reduced BigQuery costs by 80–90% through ETL optimization using partitioning, clustering, and query tuning.",
  "Improved data processing performance by 2–3x through efficient pipeline design and query optimization.",
  "Started as the primary individual handling both data engineering and analytics responsibilities and built the reporting foundation from the ground up.",
] as const;

const education = {
  degree: "B.Tech, Electronic and Communication Engineering",
  college: "Intell Engineering College",
} as const;

const sanityChecks = [
  [PROFILE.email.includes("@"), "Profile email should contain @"],
  [metrics.length === 4, "Expected four hero metrics"],
  [projects.every((project) => project.tech.length > 0), "Every project should include at least one tech tag"],
  [projects.every((project) => project.architecture.length > 0), "Every project should include architecture bullets"],
  [projects.every((project) => project.outcome.length > 0), "Every project should include outcome bullets"],
  [experienceGroups.length === 4, "Expected four experience groups"],
  [achievements.length >= 5, "Expected at least five achievements"],
  [Object.keys(skills).length === 3, "Expected three skill groups"],
] as const;

if (typeof console !== "undefined") {
  sanityChecks.forEach(([passed, message]) => {
    if (!passed) {
      console.warn(`Portfolio sanity check failed: ${message}`);
    }
  });
}

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-4xl space-y-3">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">{title}</h2>
      {description ? <p className="text-base leading-7 text-slate-300 md:text-lg">{description}</p> : null}
    </div>
  );
}

function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <Card className="rounded-2xl border-slate-800 bg-slate-900/70 shadow-xl shadow-black/20">
      <CardContent className="p-6">
        <div className="text-3xl font-bold text-white md:text-4xl">{value}</div>
        <div className="mt-2 text-sm text-slate-300">{label}</div>
      </CardContent>
    </Card>
  );
}

function SocialButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Button
      asChild
      variant="outline"
      size="icon"
      className="rounded-2xl border-slate-700 bg-transparent text-white hover:bg-slate-800"
    >
      <a href={href} target="_blank" rel="noreferrer" aria-label={label}>
        {children}
      </a>
    </Button>
  );
}

type Project = (typeof projects)[number];

function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon;

  return (
    <Card className="group rounded-3xl border-slate-800 bg-slate-900/70 shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
      <CardHeader className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
            <Icon className="h-6 w-6" />
          </div>
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="rounded-full text-slate-400 hover:bg-slate-800 hover:text-white"
          >
            <a href={project.url} aria-label={`Open ${project.title}`}>
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="space-y-2">
          <CardTitle className="text-xl text-white">{project.title}</CardTitle>
          <CardDescription>{project.impact}</CardDescription>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <Badge key={tech} className="rounded-full bg-slate-800 px-3 py-1 text-slate-200 hover:bg-slate-800">
              {tech}
            </Badge>
          ))}
        </div>
      </CardHeader>

      <CardContent className="space-y-5">
        <div>
          <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-200">Problem</h4>
          <p className="text-sm leading-6 text-slate-300">{project.problem}</p>
        </div>
        <div>
          <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-200">Solution</h4>
          <p className="text-sm leading-6 text-slate-300">{project.solution}</p>
        </div>
        <div>
          <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-200">Architecture</h4>
          <ul className="space-y-2">
            {project.architecture.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm leading-6 text-slate-300">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-200">Impact</h4>
          <ul className="space-y-2">
            {project.outcome.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm leading-6 text-slate-300">
                <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}

type ExperienceGroup = (typeof experienceGroups)[number];

function ExperienceCard({ item }: { item: ExperienceGroup }) {
  const Icon = item.icon;

  return (
    <Card className="rounded-[2rem] border-slate-800 bg-slate-900/70 shadow-xl shadow-black/20">
      <CardContent className="p-6">
        <div className="mb-4 flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">{item.role}</h3>
            <p className="text-sm text-cyan-300">{item.duration}</p>
          </div>
        </div>
        <ul className="space-y-3">
          {item.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3 text-sm leading-6 text-slate-300">
              <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-cyan-300" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export default function SkandaPortfolioSite() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-0 h-[34rem] w-[34rem] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-0 top-40 h-[28rem] w-[28rem] rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <div className="text-lg font-semibold tracking-tight text-white">{PROFILE.name}</div>
            <div className="text-xs text-slate-400">{PROFILE.shortTitle}</div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#experience" className="transition hover:text-white">Experience</a>
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#skills" className="transition hover:text-white">Skills</a>
            <a href="#education" className="transition hover:text-white">Education</a>
            <a href="#achievements" className="transition hover:text-white">Achievements</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <Badge className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-cyan-200 hover:bg-cyan-400/10">
                Building the future of free educational technology
              </Badge>

              <div className="space-y-5">
                <h1 className="max-w-5xl text-4xl font-bold tracking-tight text-white md:text-6xl">
                  {PROFILE.name}
                </h1>
                <p className="max-w-4xl text-lg leading-8 text-slate-300 md:text-xl">
                  {PROFILE.headline}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-2xl bg-cyan-400 px-6 text-slate-950 hover:bg-cyan-300">
                  <a href="#projects">
                    View Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-2xl border-slate-700 bg-transparent px-6 text-white hover:bg-slate-900"
                >
                  <a href={PROFILE.resumeUrl} download={PROFILE.resumeUrl !== "#"}>
                    <Download className="mr-2 h-4 w-4" /> Download Resume
                  </a>
                </Button>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {metrics.map((metric) => (
                  <MetricCard key={metric.label} value={metric.value} label={metric.label} />
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <Card className="overflow-hidden rounded-[2rem] border-slate-800 bg-slate-900/80 shadow-2xl shadow-black/30">
                <CardContent className="p-0">
                  <div className="border-b border-slate-800 bg-slate-950/80 p-4">
                    <div className="flex gap-2">
                      <span className="h-3 w-3 rounded-full bg-rose-400/80" />
                      <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                      <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                    </div>
                  </div>

                  <div className="space-y-6 p-6">
                    <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5">
                      <div className="text-sm text-cyan-200">Current Role</div>
                      <div className="mt-2 text-2xl font-semibold text-white">Tech Lead / Lead Software Developer</div>
                      <div className="mt-2 text-sm text-slate-300">Sutara Learning Foundation · Mar 2020 – Present</div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                        <div className="flex items-center gap-2 text-slate-200">
                          <Wrench className="h-4 w-4 text-cyan-300" /> Core Stack
                        </div>
                        <p className="mt-2 text-sm leading-6 text-slate-400">
                          React, Capacitor, Flutter, Phaser, Cocos, BigQuery
                        </p>
                      </div>
                      <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                        <div className="flex items-center gap-2 text-slate-200">
                          <ChartNoAxesCombined className="h-4 w-4 text-cyan-300" /> Focus Areas
                        </div>
                        <p className="mt-2 text-sm leading-6 text-slate-400">
                          Offline-first systems, analytics engineering, cross-platform integration
                        </p>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                      <div className="text-sm font-medium text-slate-200">Global exposure</div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {["Kenya showcase", "Dubai client demos", "CEO/CTO collaboration", "Open-source EdTech"].map(
                          (item) => (
                            <Badge
                              key={item}
                              className="rounded-full bg-slate-800 px-3 py-1 text-slate-200 hover:bg-slate-800"
                            >
                              {item}
                            </Badge>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <Card className="rounded-[2rem] border-slate-800 bg-slate-900/70 shadow-xl shadow-black/20">
              <CardContent className="p-8">
                <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-cyan-400/10 text-3xl font-bold text-cyan-200">
                  SK
                </div>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-3 text-slate-300">
                    <MapPin className="h-4 w-4 text-cyan-300" /> {PROFILE.location}
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <Mail className="h-4 w-4 text-cyan-300" /> {PROFILE.email}
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <Phone className="h-4 w-4 text-cyan-300" /> {PROFILE.phone}
                  </div>
                </div>
                <div className="mt-8 flex gap-3">
                  <SocialButton href={PROFILE.linkedin} label="LinkedIn profile">
                    <LinkedInIcon className="h-4 w-4" />
                  </SocialButton>
                  <SocialButton href={PROFILE.github} label="GitHub profile">
                    <GitHubIcon className="h-4 w-4" />
                  </SocialButton>
                  <SocialButton href={`mailto:${PROFILE.email}`} label="Send email">
                    <Mail className="h-4 w-4" />
                  </SocialButton>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <SectionTitle
                eyebrow="About"
                title="Tech Lead with software, data, and analytics ownership across the EdTech stack."
                description="A portfolio structured around the roles, systems, and measurable outcomes you shared."
              />
              <div className="space-y-5">
                {aboutParagraphs.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-8 text-slate-300 md:text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {highlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Card
                      key={item.title}
                      className="rounded-3xl border-slate-800 bg-slate-900/70 shadow-xl shadow-black/20"
                    >
                      <CardContent className="space-y-4 p-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                          <p className="mt-2 text-sm leading-6 text-slate-300">{item.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="space-y-12">
            <SectionTitle
              eyebrow="Experience"
              title="Sutara Learning Foundation · Mar 2020 – Present"
              description="A breakdown of the six-year journey from Junior Developer to Lead Developer, plus parallel data engineering and analytics ownership."
            />
            <div className="grid gap-6 lg:grid-cols-2">
              {experienceGroups.map((item) => (
                <ExperienceCard key={item.role} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="space-y-12">
            <SectionTitle
              eyebrow="Projects"
              title="Projects extracted from experience and presented as case studies."
              description="These projects were derived directly from the work areas and products described in your experience details."
            />
            <div className="grid gap-6 xl:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="space-y-12">
            <SectionTitle
              eyebrow="Skills"
              title="Tools, platforms, and concepts used across application and analytics engineering."
              description="Grouped exactly around the categories you provided: languages and frameworks, data and backend, and architecture and concepts."
            />
            <div className="grid gap-6 lg:grid-cols-3">
              {Object.entries(skills).map(([group, items]) => (
                <Card
                  key={group}
                  className="rounded-[2rem] border-slate-800 bg-slate-900/70 shadow-xl shadow-black/20"
                >
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-white">{group}</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {items.map((item) => (
                        <Badge
                          key={item}
                          className="rounded-full bg-slate-800 px-3 py-1 text-slate-200 hover:bg-slate-800"
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="space-y-12">
            <SectionTitle
              eyebrow="Education"
              title="Academic foundation"
              description="Formal education supporting the software and systems journey."
            />
            <Card className="rounded-[2rem] border-slate-800 bg-slate-900/70 shadow-xl shadow-black/20">
              <CardContent className="flex flex-col gap-4 p-8 md:flex-row md:items-center md:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{education.degree}</h3>
                    <p className="mt-1 text-slate-300">{education.college}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="achievements" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="space-y-12">
            <SectionTitle
              eyebrow="Achievements"
              title="Career milestones, technical outcomes, and leadership impact."
              description="A consolidated view of the achievements and recognition points you listed."
            />
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="grid gap-4 sm:grid-cols-2">
                {metrics.map((metric) => (
                  <MetricCard key={`achievement-${metric.label}`} value={metric.value} label={metric.label} />
                ))}
              </div>
              <Card className="rounded-[2rem] border-slate-800 bg-slate-900/70 shadow-xl shadow-black/20">
                <CardContent className="p-6">
                  <div className="mb-5 flex items-center gap-3 text-white">
                    <Trophy className="h-5 w-5 text-cyan-300" />
                    <h3 className="text-lg font-semibold">Key achievements</h3>
                  </div>
                  <ul className="space-y-4">
                    {achievements.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-300 md:text-base">
                        <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 pt-16 lg:px-8">
          <Card className="overflow-hidden rounded-[2rem] border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 shadow-2xl shadow-black/30">
            <CardContent className="grid gap-8 p-8 md:grid-cols-[1.2fr_0.8fr] md:p-10">
              <div className="space-y-4">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">Contact</p>
                <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">Let’s connect.</h2>
                <p className="max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
                  Open to tech leadership, software development, platform engineering, and analytics-driven opportunities in EdTech and mission-driven technology.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Button asChild className="rounded-2xl bg-cyan-400 px-6 text-slate-950 hover:bg-cyan-300">
                    <a href={`mailto:${PROFILE.email}`}>
                      <Mail className="mr-2 h-4 w-4" /> Email Me
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-2xl border-slate-700 bg-transparent px-6 text-white hover:bg-slate-800"
                  >
                    <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
                      <LinkedInIcon className="mr-2 h-4 w-4" /> LinkedIn
                    </a>
                  </Button>
                  <AnchorButton
                    href={PROFILE.github}
                    target="_blank"
                    rel="noreferrer"
                    variant="outline"
                    className="rounded-2xl border-slate-700 bg-transparent px-6 text-white hover:bg-slate-800"
                  >
                    <GitHubIcon className="mr-2 h-4 w-4" /> GitHub
                  </AnchorButton>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 text-slate-300">
                  <div className="text-sm text-slate-400">Name</div>
                  <div className="mt-1 font-medium text-white">{PROFILE.name}</div>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 text-slate-300">
                  <div className="text-sm text-slate-400">Email</div>
                  <div className="mt-1 font-medium text-white">{PROFILE.email}</div>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 text-slate-300">
                  <div className="text-sm text-slate-400">Phone</div>
                  <div className="mt-1 font-medium text-white">{PROFILE.phone}</div>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 text-slate-300">
                  <div className="text-sm text-slate-400">Location</div>
                  <div className="mt-1 font-medium text-white">{PROFILE.location}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
