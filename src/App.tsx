import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  CheckCircle2,
  ExternalLink,
  FolderKanban,
  GraduationCap,
  Layers,
  Mail,
  MapPin,
  Phone,
  Rocket,
  Trophy,
  WifiOff,
  Wrench,
} from "lucide-react";

type Metric = {
  value: string;
  label: string;
};

type Highlight = {
  icon: typeof Layers;
  title: string;
  description: string;
};

type Role = {
  title: string;
  period: string;
  bullets: string[];
};

type Project = {
  title: string;
  icon: typeof FolderKanban;
  summary: string;
  tech: string[];
  details: string[];
  outcomes: string[];
};

const profile = {
  name: "K.V. Skanda Kumar",
  role: "Tech Lead | Full Stack Engineer",
  company:
    "Chimple Learning Foundations | Building the Future of Free Educational Technology",
  tagline:
    "Building scalable, offline-first systems & data platforms",
  location: "Bangalore, India",
  email: "kvskandakumar@gmail.com",
  phone: "+91 7981611434",
  linkedin: "https://www.linkedin.com/in/skanda-kumar-45876a1a0/",
  github: "https://github.com/kvskandakumar",
  image: `${import.meta.env.BASE_URL}skanda-profile-pic.png`,
};

const shortBio =
  "Tech Lead with 6+ years building scalable applications, offline-first platforms, and data systems optimized for low-connectivity environments.";

const metrics: Metric[] = [
  { value: "6+", label: "Years Experience" },
  { value: "100%", label: "Offline Capability" },
  { value: "15+", label: "Applications Delivered" },
  { value: "20+", label: "Analytics Dashboards" },
];

const about = [
  "Progressed from Junior Developer to Tech Lead, driving end-to-end architecture for scalable systems used across web, mobile, and offline environments.",
  "Tech Lead with 6+ years of experience designing and scaling multi-platform systems across web, mobile, and data platforms.",
  "Specialized in offline-first architecture, cross-platform integrations, and BigQuery-based analytics pipelines optimized for real-world constraints.",
];

const highlights: Highlight[] = [
  {
    icon: Layers,
    title: "Cross-platform Architecture",
    description:
      "Designed interoperable systems spanning React, Capacitor, Android, PWAs, Angular, and game-based learning apps.",
  },
  {
    icon: WifiOff,
    title: "Offline-first Systems",
    description:
      "Built resilient delivery models that keep educational experiences fully usable in low-connectivity regions.",
  },
  {
    icon: BarChart3,
    title: "Analytics Leadership",
    description:
      "Created ETL pipelines, reporting layers, and dashboards that convert GA4 data into product, learning, and business decisions.",
  },
];

const roles: Role[] = [
  {
    title: "Tech Lead / Lead Software Developer",
    period: "Sutara Learning Foundation | Mar 2020 - Present | Last 2 Years in Lead Role",
    bullets: [
      "Led architecture and development of a multi-platform EdTech ecosystem integrating React, Capacitor, Android, PWAs, and Angular across products such as Chimple Kids Learning and Tangerine Client App.",
      "Spearheaded RESPECT platform integration across 3+ applications including Curious Reader, Tangerine, and Chimple Kids, standardizing content launch, tracking, and interoperability.",
      "Developed wrapper solutions for web-based learning apps to improve performance and compatibility across Android devices.",
      "Collaborated directly with CEOs, CTOs, and international stakeholders to shape product architecture and delivery roadmap.",
      "Mentored developers and improved delivery timelines through stronger engineering direction and technical guidance.",
      "Represented products at mEducation Alliance 2025 in Kenya and client presentations in Dubai to support global rollout.",
    ],
  },
  {
    title: "Senior Software Developer",
    period: "2 Years",
    bullets: [
      "Built a container-based application using React and Capacitor to integrate existing Cocos games, reducing redevelopment effort by more than 40%.",
      "Played a major role in designing and implementing a fully offline-first architecture with Supabase-backed flows, achieving 100% offline functionality.",
      "Built and optimized features for React-based web applications using AWS and MongoDB backend services.",
      "Contributed to cross-platform architecture decisions that enabled content reuse across mobile and web platforms.",
      "Improved application performance and reduced load times through focused optimization work.",
    ],
  },
  {
    title: "Junior Software Developer",
    period: "2 Years",
    bullets: [
      "Developed a Course Creator application using Flutter and Dart for the Chimple platform.",
      "Implemented core features, UI components, and API integrations for content creation workflows.",
      "Developed and enhanced 2D educational games using Cocos Creator and TypeScript, improving engagement and learning experience.",
    ],
  },
  {
    title: "Data Engineering & Analytics",
    period: "Parallel Role | 2+ Years",
    bullets: [
      "Designed and implemented ETL pipelines in BigQuery for large-scale GA4 event processing.",
      "Built 20+ Looker Studio dashboards that turned usage, progression, engagement, and operational data into reports for product, business, and stakeholder teams.",
      "Designed analytics data models and reporting pipelines for event tracking, KPI measurement, and decision support.",
      "Improved processing efficiency, reduced query execution time, and significantly cut analytics spend through optimization.",
      "Started as the single person handling both data engineering and data analytics, laying the reporting foundation for the organization.",
    ],
  },
];

const projects: Project[] = [
  {
    title: "Multi-Platform EdTech Ecosystem",
    icon: Layers,
    summary:
      "A shared architecture connecting learning products across web, Android, PWAs, and partner applications.",
    tech: ["React", "Capacitor", "Android", "PWA", "Angular"],
    details: [
      "Led architecture for interoperable applications including Chimple Kids Learning and Tangerine Client App.",
      "Created a stronger shared foundation so product teams could ship across multiple surfaces without fragmenting the experience.",
      "Worked directly with leadership and stakeholders to align technical delivery with product roadmap and rollout needs.",
    ],
    outcomes: [
      "Improved interoperability across applications",
      "Reduced duplication in platform-specific work",
      "Supported global product expansion",
    ],
  },
  {
    title: "RESPECT Platform Integration",
    icon: Rocket,
    summary:
      "A standardized integration model for content launch, tracking, and interoperability across 3+ applications.",
    tech: ["REST APIs", "xAPI", "React", "Capacitor", "Tracking"],
    details: [
      "Integrated RESPECT workflows across Curious Reader, Tangerine, and Chimple Kids.",
      "Standardized learning content launch behavior and tracking flows across applications.",
      "Created a reusable integration pattern that supported partner ecosystems and consistent reporting.",
    ],
    outcomes: [
      "Standardized learning workflows",
      "Better interoperability across products",
      "Cleaner cross-application tracking",
    ],
  },
  {
    title: "Offline-First Container Platform",
    icon: WifiOff,
    summary:
      "A container-based approach for reusing existing game content while delivering fully offline learning experiences.",
    tech: ["React", "Capacitor", "Cocos", "Supabase", "Offline-first"],
    details: [
      "Built a wrapper/container application that integrated existing Cocos-based games instead of rebuilding them from scratch.",
      "Designed an offline-first architecture so apps stayed fully functional in low-connectivity regions.",
      "Optimized compatibility and runtime performance for low-end Android devices.",
    ],
    outcomes: [
      "100% offline functionality achieved",
      "40%+ redevelopment effort reduced",
      "Higher usability in constrained environments",
    ],
  },
  {
    title: "BigQuery Analytics & Reporting Platform",
    icon: BarChart3,
    summary:
      "An analytics stack that transformed raw GA4 data into trusted dashboards and faster reporting for decision-makers.",
    tech: ["BigQuery", "GA4", "SQL", "Looker Studio", "ETL"],
    details: [
      "Built ETL pipelines and curated data models for large-scale event tracking and reporting.",
      "Created 20+ dashboards that helped teams understand learner engagement, product usage, retention patterns, content performance, and operational KPIs.",
      "Used partitioning, clustering, and query tuning to make reporting faster and far more cost efficient.",
    ],
    outcomes: [
      "20+ dashboards delivered",
      "80-90% BigQuery cost reduction",
      "2-3x faster data processing and reporting",
    ],
  },
];

const skillGroups = {
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
};

const achievements = [
  "Promoted three times in six years from Junior Developer to Senior Developer to Lead Developer.",
  "Led development of offline-first applications with full offline capability for low-connectivity regions and low-end devices.",
  "Reduced redevelopment effort by 40%+ by integrating existing Cocos and Phaser experiences through container-based architecture.",
  "Integrated RESPECT APIs across multiple applications to enable standardized learning workflows and interoperability.",
  "Contributed to scaling the organization and product ecosystem from roughly 10 to 100+ employees.",
  "Represented the organization internationally at mEducation Alliance 2025 in Kenya and product presentations in Dubai.",
  "Conducted live demos and EdTech workshops for stakeholders and global partners.",
  "Reduced BigQuery costs by 80-90% through ETL optimization, partitioning, clustering, and query tuning.",
  "Improved analytics processing performance by 2-3x through better pipeline and query design.",
];

const education = {
  degree: "B.Tech, Electronic and Communication Engineering",
  college: "Intell Engineering College",
};

const fadeIn = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function SectionTitle(props: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div className="section-title">
      <span>{props.label}</span>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}

function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .5C5.65.5.5 5.66.5 12.03c0 5.1 3.3 9.42 7.88 10.95.58.1.79-.25.79-.56 0-.27-.01-1.18-.02-2.14-3.21.7-3.89-1.37-3.89-1.37-.53-1.35-1.29-1.71-1.29-1.71-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.78 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.29-5.25-5.72 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.83 1.18 3.09 0 4.44-2.7 5.42-5.28 5.71.42.36.79 1.07.79 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.67.8.56A11.54 11.54 0 0 0 23.5 12.03C23.5 5.66 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8h4V23h-4V8Zm7 0h3.83v2.05h.05c.53-1.01 1.84-2.08 3.79-2.08 4.05 0 4.8 2.67 4.8 6.13V23h-4v-7.82c0-1.87-.03-4.28-2.61-4.28-2.61 0-3.01 2.04-3.01 4.14V23h-4V8Z" />
    </svg>
  );
}

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div>
          <h1 className="brand">Skanda</h1>
          {/* <p className="brand">{profile.name}</p> */}
          {/* <p className="brand-subtitle">{profile.role}</p> */}
        </div>
        <nav>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="about" className="hero hero-about">
          <motion.aside
            className="profile-card"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
              <div className="profile-photo-wrap">
                <img className="profile-photo" src={profile.image} alt={profile.name} />
              </div>
              <h3>{profile.name}</h3>
              <p className="profile-role">{profile.role}</p>
              <div className="profile-divider" />
              <p>{shortBio}</p>
              <div className="profile-contact">
                <span>
                  <Mail size={16} /> {profile.email}
                </span>
                <span>
                  <MapPin size={16} /> {profile.location}
                </span>
              </div>
              <div className="profile-meta">
                <span>
                  <Briefcase size={16} /> 6+ years in Full Stack Development
                </span>
                <span>
                  <MapPin size={16} /> {profile.location}
                </span>
                <span>
                  <Wrench size={16} /> React, Capacitor, Flutter, BigQuery
                </span>
              </div>
              <div className="profile-socials">
                <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                  <GitHubIcon width={19} height={19} />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <LinkedInIcon width={19} height={19} />
                </a>
              </div>
          </motion.aside>
          <motion.div
            className="hero-copy"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="eyebrow">Lead Portfolio</p>
            {/* <h1>{profile.name}</h1> */}
            <p className="hero-title">{profile.role}</p>
            <p className="hero-text">{profile.tagline}</p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View Projects <ArrowRight size={18} />
              </a>
              <a className="button button-secondary" href={`mailto:${profile.email}`}>
                <Mail size={18} /> Contact Me
              </a>
            </div>

            <div className="metric-grid">
              {metrics.map((metric) => (
                <article className="card metric-card" key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </article>
              ))}
            </div>
            <div className="hero-story">
              {about.map((paragraph) => (
                <p className="hero-story-text" key={paragraph}>
                  {paragraph}
                </p>
              ))}

              <div className="highlight-grid">
                {highlights.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article className="card highlight-card" key={item.title}>
                      <div className="icon-chip">
                        <Icon size={20} />
                      </div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </section>

        <section id="experience" className="content-section">
          <SectionTitle
            label="Experience"
            title="From hands-on development to leading architecture, delivery, and reporting systems."
            description="The portfolio below reflects both role progression and the parallel data engineering ownership that strengthened product decision-making."
          />
          <div className="timeline">
            {roles.map((role) => (
              <article className="card timeline-card" key={role.title}>
                <div className="timeline-head">
                  <h3>{role.title}</h3>
                  <span>{role.period}</span>
                </div>
                <ul className="detail-list">
                  {role.bullets.map((bullet) => (
                    <li key={bullet}>
                      <CheckCircle2 size={18} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="content-section">
          <SectionTitle
            label="Projects"
            title="Project stories extracted from the experience journey."
            description="Each project below is derived from the work described in your experience section and rewritten as a portfolio-ready case study."
          />
          <div className="project-grid">
            {projects.map((project) => {
              const Icon = project.icon;

              return (
                <article className="card project-card" key={project.title}>
                  <div className="project-head">
                    <div className="icon-chip project-chip">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3>{project.title}</h3>
                      <p>{project.summary}</p>
                    </div>
                  </div>

                  <div className="tag-row">
                    {project.tech.map((tech) => (
                      <span className="tag" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="detail-list compact-list">
                    {project.details.map((detail) => (
                      <li key={detail}>
                        <FolderKanban size={18} />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="impact-box">
                    <p>Impact</p>
                    <ul>
                      {project.outcomes.map((outcome) => (
                        <li key={outcome}>{outcome}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="content-section">
          <SectionTitle
            label="Analytics Impact"
            title="How the data work translated into reporting value."
            description="The dashboards were not just visual outputs. They helped teams understand learner behavior, feature adoption, content effectiveness, operational bottlenecks, and overall product direction."
          />
          <div className="analytics-layout">
            <article className="card analytics-card">
              <h3>What the reporting enabled</h3>
              <ul className="detail-list">
                <li>
                  <BarChart3 size={18} />
                  <span>Product teams could track usage trends, funnel drop-offs, retention, and engagement patterns.</span>
                </li>
                <li>
                  <BarChart3 size={18} />
                  <span>Business and stakeholder teams gained clearer visibility into rollout progress, adoption, and outcome signals.</span>
                </li>
                <li>
                  <BarChart3 size={18} />
                  <span>Operational teams could identify content gaps, delivery issues, and areas needing support or optimization.</span>
                </li>
                <li>
                  <BarChart3 size={18} />
                  <span>Leadership benefited from faster, more trustworthy reporting without the cost overhead of raw-query-heavy workflows.</span>
                </li>
              </ul>
            </article>

            <article className="card analytics-card analytics-accent">
              <h3>Why this mattered</h3>
              <p>
                By owning both data engineering and analytics, you were able to connect raw GA4 events to business-ready reporting. That closed the gap between technical data pipelines and the questions decision-makers actually needed answered.
              </p>
              <div className="mini-metrics">
                <div>
                  <strong>20+</strong>
                  <span>Dashboards</span>
                </div>
                <div>
                  <strong>2-3x</strong>
                  <span>Faster processing</span>
                </div>
                <div>
                  <strong>80-90%</strong>
                  <span>Lower BigQuery cost</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="skills" className="content-section">
          <SectionTitle
            label="Skills"
            title="A stack that spans apps, infrastructure, data, and delivery."
            description="The portfolio combines engineering breadth with product-minded systems design."
          />
          <div className="skills-grid">
            {Object.entries(skillGroups).map(([group, items]) => (
              <article className="card skill-card" key={group}>
                <h3>{group}</h3>
                <div className="tag-row">
                  {items.map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section split-section">
          <div>
            <SectionTitle
              label="Education"
              title="Academic Foundation"
              description="Formal background supporting the engineering journey."
            />
            <article className="card education-card">
              <div className="icon-chip">
                <GraduationCap size={20} />
              </div>
              <div>
                <h3>{education.degree}</h3>
                <p>{education.college}</p>
              </div>
            </article>
          </div>

          <div id="achievements" className="content-section">
            <SectionTitle
              label="Achievements"
              title="Career growth and measurable outcomes."
              description="A concise snapshot of leadership, delivery, and analytics impact."
            />
            <article className="card achievements-card">
              <div className="achievement-head">
                <Trophy size={20} />
                <h3>Key Achievements</h3>
              </div>
              <ul className="detail-list">
                {achievements.map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section id="contact" className="content-section">
          <div className="card contact-panel">
            <div className="contact-copy">
              <p className="eyebrow">Contact</p>
              <h2>Open to meaningful EdTech, platform, and engineering leadership conversations.</h2>
              <p>
                If you&apos;re building mission-driven technology, learning products, or analytics-informed platforms, this portfolio is ready to support outreach and hiring conversations.
              </p>
            </div>

            <div className="contact-actions">
              <a className="button button-primary" href={`mailto:${profile.email}`}>
                <Mail size={18} /> {profile.email}
              </a>
              <a className="button button-secondary" href={`tel:${profile.phone.replace(/\s+/g, "")}`}>
                <Phone size={18} /> {profile.phone}
              </a>
              <a className="button button-secondary" href={profile.linkedin} target="_blank" rel="noreferrer">
                <ExternalLink size={18} /> LinkedIn
              </a>
              <a className="button button-secondary" href={profile.github} target="_blank" rel="noreferrer">
                <ExternalLink size={18} /> GitHub
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
