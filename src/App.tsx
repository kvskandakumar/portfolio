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
import "./styles.css";

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
  impact: string;
  icon: typeof FolderKanban;
  summary: string;
  problem: string;
  approach: string[];
  tech: string[];
  outcomes: string[];
  image: string;
};

// type SimpleProject = {
//   title: string;
//   tech: string[];
//   link?: string;
// };

const base = import.meta.env.BASE_URL;

const profile = {
  name: "K.V. Skanda Kumar",
  role: "Tech Lead · Full Stack · Platform & Data Systems",
  tagline:
    "I build offline-first platforms that work in real-world low-connectivity environments — across mobile, web, and data systems.",
  location: "Bangalore, India",
  email: "kvskandakumar@gmail.com",
  phone: "+91 7981611434",
  linkedin: "https://www.linkedin.com/in/skanda-kumar-45876a1a0/",
  github: "https://github.com/kvskandakumar",
  image: `${base}skanda-profile-pic.png`,
  resume:
    "https://docs.google.com/document/d/0B0lLWH37f_lueHdYRTVsMXhjZmlJMG1OVFpFZ3RUSXFWM2dB/edit?usp=sharing&ouid=108064239447909668115&resourcekey=0-DGrWePcbiMk-gKKRVvj7HA&rtpof=true&sd=true",
};

const metrics: Metric[] = [
  { value: "6+", label: "Years Experience" },
  { value: "100%", label: "Offline Capability" },
  { value: "15+", label: "Apps Delivered" },
  { value: "20+", label: "Dashboards Built" },
];

const about = [
  "I started as a Junior developer building features and gradually moved into leading architecture, delivery, and system design across multiple products.",
  "Over the last 6+ years, I’ve worked on learning platforms that run across Android, web, and low-end devices — often in environments with little or no internet.",
  "My work spans offline-first architecture, cross-platform systems using React and Capacitor, and analytics pipelines using BigQuery and GA4.",
  "I enjoy solving real-world engineering problems where constraints matter — low bandwidth, low-end devices, and large-scale distribution.",
];

const highlights: Highlight[] = [
  {
    icon: WifiOff,
    title: "Offline-first Systems",
    description:
      "Built resilient learning experiences that continue working even when internet access is unreliable or unavailable.",
  },
  {
    icon: Layers,
    title: "Platform Architecture",
    description:
      "Designed shared systems across React, Capacitor, Android, PWAs, Flutter, Cocos, and Phaser-based learning products.",
  },
  {
    icon: BarChart3,
    title: "Data Engineering",
    description:
      "Converted raw GA4 events into optimized BigQuery models, dashboards, and decision-ready reporting layers.",
  },
];

const strengths = [
  "Designing offline-first systems that work without reliable internet",
  "Building cross-platform applications across mobile and web",
  "Optimizing performance for low-end Android devices",
  "Reducing cloud and analytics costs through BigQuery optimization",
  "Turning raw event data into product and business decisions",
];

const roles: Role[] = [
  {
    title: "Tech Lead / Lead Software Developer",
    period: "Sutara Learning Foundation | Mar 2020 – Present | Last 2 years as Tech Lead",
    bullets: [
      "Led architecture and development of multiple learning platforms across mobile and web.",
      "Designed cross-platform systems using React, Capacitor, Android, PWAs, Flutter, Cocos, and Phaser.",
      "Integrated RESPECT platform workflows across 3+ applications for standardized content launch, tracking, and interoperability.",
      "Collaborated with CEOs, CTOs, and international stakeholders to define product architecture, delivery strategy, and rollout plans.",
      "Mentored engineers and improved development velocity through clearer technical direction and reusable architecture patterns.",
      "Represented products in international demos and stakeholder presentations in Kenya and Dubai.",
    ],
  },
  {
    title: "Senior Software Developer",
    period: "2 Years",
    bullets: [
      "Built a container-based application using React and Capacitor to integrate existing Cocos games, reducing redevelopment effort by 40%+.",
      "Contributed to a fully offline-first architecture, enabling 100% offline functionality for learning workflows.",
      "Built and optimized React-based applications using AWS, MongoDB, and REST APIs.",
      "Improved application performance and compatibility on low-end Android devices.",
      "Contributed to architecture decisions that enabled content reuse across mobile and web platforms.",
    ],
  },
  {
    title: "Junior Software Developer",
    period: "2 Years",
    bullets: [
      "Developed a Course Creator application using Flutter and Dart for the Chimple platform.",
      "Implemented UI components, content workflows, and API integrations for internal tools.",
      "Developed and enhanced 2D educational games using Cocos Creator and TypeScript.",
    ],
  },
  {
    title: "Data Engineering & Analytics",
    period: "Parallel Ownership | 2+ Years",
    bullets: [
      "Designed ETL pipelines in BigQuery for large-scale GA4 event processing.",
      "Built 20+ Looker Studio dashboards for usage, engagement, progression, and operational reporting.",
      "Reduced BigQuery costs by 70–90% through query optimization, partitioning, clustering, and improved data modeling.",
      "Improved reporting performance by 2–3x through better pipeline and query design.",
      "Owned both data engineering and analytics functions, establishing the reporting foundation for the organization.",
    ],
  },
];

const projects: Project[] = [
  {
    title: "Chimple Kids Learning Platform — Offline-First System for Interactive Learning",
    impact: "100% offline capability · 40%+ effort reduction",
    icon: WifiOff,
    summary:
      "Re-architected a Cocos-based game platform into a scalable, offline-first system using React, Capacitor, and local-first data design.",
    problem:
      "The existing Cocos-based application had major limitations — no offline support, limited plugin ecosystem, slower development cycles, and lack of CI/CD automation. It also made feature enhancements difficult despite continuous user feedback from real-world usage.",
    approach: [
      "Redesigned the system using a container-based approach with Ionic Capacitor, wrapping existing Cocos games inside a React-driven application.",
      "Implemented local asset serving via an internal server and introduced Supabase (open-source Firebase alternative) for local-first data storage.",
      "Built new application layers using React and Capacitor plugins to enable faster development, better extensibility, and improved integration capabilities."
    ],
    tech: ["React", "Capacitor", "Android", "Cocos","Supabase", "Offline-first"],
    outcomes: [
      "Reduced redevelopment effort by 40% by reusing existing game assets within a new architecture.",
      "Enabled 100% offline functionality, improving accessibility in low-connectivity environments.",
      "Improved development speed and flexibility by moving away from Cocos limitations and enabling modern tooling and workflows.",
    ],
    image: `${base}projects/offline-container.jpg`,
  },
  {
    title: "RESPECT Platform Integration — Cross-Platform Learning Interoperability System",
    impact: "3+ apps standardized · Better interoperability",
    icon: Rocket,
    summary:
      "Built a standards-based integration layer for launching content and tracking learning activity across multiple applications.",
    problem:
      "Multiple learning applications lacked a consistent way to launch content, track user activity, and integrate with external partner systems, leading to fragmented workflows and inconsistent reporting.",
    approach: [
      "Led integration of RESPECT workflows across Curious Reader, Tangerine, and Chimple Kids.",
      "Designed standardized launch parameters and deep linking mechanisms for cross-application content delivery.",
      "Implemented tracking pipelines using xAPI patterns to ensure consistent learning activity reporting.",
      "Built reusable integration patterns to enable interoperability across partner ecosystems and simplify future integrations.",
    ],
    tech: ["RESPECT", "xAPI", "React", "Capacitor", "REST APIs"],
    outcomes: [
      "Enabled consistent content launch and tracking across 3+ applications and partner systems.",
      "Improved interoperability and reduced integration effort for new platforms using reusable integration patterns.",
      "Standardized reporting workflows, enabling reliable analytics across learning applications.",
    ],
    image: `${base}projects/respect-integration.png`,
  },
  {
    title: "BigQuery Analytics Platform — Scalable Data Pipeline for Product Intelligence",
    impact: "80–90% lower cost · 2–3x faster reporting",
    icon: BarChart3,
    summary:
      "Transformed raw GA4 event data into reliable, cost-efficient analytics for product and leadership teams.",
    problem:
      "Raw GA4 analytics queries were expensive, slow, and difficult to use, limiting teams’ ability to make data-driven product decisions.",
    approach: [
      "Designed and built ETL pipelines to process GA4 event data into structured, query-optimized reporting tables.",
      "Applied partitioning, clustering, and query optimization techniques to improve performance and reduce cost.",
      "Developed dashboards for product usage, learner engagement, retention, and operational KPIs.",
    ],
    tech: ["BigQuery", "GA4", "SQL", "Looker Studio", "ETL"],
    outcomes: [
      "Reduced BigQuery costs by 80–90% through optimized data modeling and query strategies.",
      "Improved data processing and reporting speed by 2–3x, enabling faster insights.",
      "Delivered 20+ dashboards used by product and leadership teams for decision-making.",
    ],
    image: `${base}projects/bigquery-analytics.png`,
  },
];

// const moreProjects: SimpleProject[] = [
//   { title: "ReflectlyApp Smart Diary", tech: ["Flutter", "Dart"] },
//   { title: "Course Creator", tech: ["Flutter", "Dart"] },
//   { title: "Bahama App", tech: ["Cocos", "TypeScript"] },
//   { title: "Web Class", tech: ["React", "TypeScript", "AWS", "MongoDB"] },
//   { title: "join_litercy_activity", tech: ["Phaser", "TypeScript"] },
//   { title: "Crazy-dots", tech: ["Phaser", "TypeScript"] },
//   { title: "wordJoin", tech: ["Phaser", "TypeScript"] },
//   { title: "Account-manager", tech: ["Flutter Plugin"] },
//   {
//     title: "Ixo-claim crypto mining",
//     tech: ["GitHub Project"],
//     link: "https://github.com/chimple/ixo-claim",
//   },
//   {
//     title: "Chimple website",
//     tech: ["GitHub Project"],
//     link: "https://github.com/chimple/website",
//   },
//   { title: "Chimple Teacher app", tech: ["Flutter", "Dart"] },
//   { title: "Tangerine & tangy form", tech: ["Angular", "Docker"] },
//   { title: "tangerine-client-app", tech: ["Capacitor", "Angular"] },
//   { title: "Curious Reader CRcontainer", tech: ["Android", "nanoHTTP"] },
//   { title: "FeedTheMonsterJS", tech: ["Plain HTML", "CSS"] },
//   { title: "assessment-survey-js", tech: ["Plain HTML", "CSS"] },
//   { title: "CRWebPlayer (Storybook)", tech: ["Plain HTML", "CSS"] },
// ];

const skillGroups = {
  "Application Engineering": [
    "React",
    "Angular",
    "Capacitor",
    "Flutter",
    "Dart",
    "Android",
    "PWAs",
    "TypeScript",
  ],
  "Data & Backend": [
    "BigQuery",
    "SQL",
    "GA4",
    "Looker Studio",
    "Firebase",
    "Supabase",
    "AWS",
    "MongoDB",
    "REST APIs",
    "xAPI",
  ],
  "Systems & Delivery": [
    "Offline-first Architecture",
    "Container Apps",
    "Performance Optimization",
    "ETL Pipelines",
    "Cost Optimization",
    "CI/CD",
    "GitHub Actions",
  ],
};

const achievements = [
  "Promoted from Junior Developer to Senior Developer to Lead Developer within six years.",
  "Led offline-first product architecture for learning platforms used in low-connectivity environments.",
  "Reduced redevelopment effort by 40%+ through container-based app architecture.",
  "Integrated RESPECT platform workflows across multiple applications.",
  "Reduced BigQuery costs by 80–90% through ETL optimization and query tuning.",
  "Built 20+ dashboards used by product, business, and stakeholder teams.",
  "Represented the organization in international demos and EdTech presentations in Kenya and Dubai.",
  "Contributed to scaling the product and engineering ecosystem during organizational growth.",
];

const education = {
  degree: "B.Tech, Electronics and Communication Engineering",
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
        <a href="#about" className="brand">
          Skanda
        </a>

        <nav>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#work">Projects</a>
          <a href="#achievements">Achievements</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="about" className="hero">
          <motion.div
            className="hero-copy"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="eyebrow">Tech Lead Portfolio</p>

            <h1>Tech Lead specializing in offline-first architecture, cross-platform systems, and data engineering</h1>

            <p className="hero-text">
              Tech Lead with 6+ years of experience in full-stack development, data engineering, 
              and analytics in the EdTech domain. Progressed from Junior to Lead,
              owning end-to-end architecture for scalable, multi-platform systems.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                View Selected Work <ArrowRight size={18} />
              </a>
              <a className="button button-secondary" href={profile.resume} target="_blank">
                Download Resume
              </a>
              <a className="button button-ghost" href={`mailto:${profile.email}`}>
                <Mail size={18} /> Contact
              </a>
            </div>

            <div className="metric-grid">
              {metrics.map((metric) => (
                <article className="metric-card" key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </article>
              ))}
            </div>
          </motion.div>

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

            <div className="profile-meta">
              <span>
                <Briefcase size={16} /> 6+ years building scalable multi-platform systems
              </span>
              <span>
                <MapPin size={16} /> {profile.location}
              </span>
              <span>
                <Wrench size={16} /> React, Capacitor, Android, BigQuery
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
        </section>

        <section className="content-section">
          <SectionTitle
            label="About"
            title="I work at the intersection of product, engineering, and data — building systems, not just features."
            description="My best work focuses on real-world constraints: low bandwidth, low-end devices, offline-first systems, and measurable product outcomes."
          />

          <div className="about-grid">
            <article className="card story-card">
              {about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>

            <article className="card strength-card">
              <h3>What I’m good at</h3>
              <ul className="detail-list">
                {strengths.map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

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
        </section>

        <section id="experience" className="content-section">
          <SectionTitle
            label="Experience"
            title="How I grew from Junior Developer to Tech Lead."
            description="I’ve worked across frontend, backend, mobile, and data — eventually leading architecture and delivery for multiple products."
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

        <section id="work" className="content-section">
          <SectionTitle
            label="Projects"
            title="Projects that demonstrate system design, execution, and measurable impact."
            description="Each case study breaks down the problem, the solution, and the outcome."
          />

          <div className="project-grid">
            {projects.map((project) => {
              const Icon = project.icon;

              return (
                <article className="card project-card" key={project.title}>
                  <div className="project-image-wrap">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />
                  </div>

                  <div className="project-head">
                    <div className="icon-chip project-chip">
                      <Icon size={20} />
                    </div>

                    <div>
                      <h3>{project.title}</h3>
                      <p>{project.summary}</p>
                    </div>
                  </div>

                  <p className="project-impact">{project.impact}</p>

                  <div className="case-block">
                    <p className="case-label">Problem</p>
                    <p>{project.problem}</p>
                  </div>

                  <div className="case-block">
                    <p className="case-label">What I did</p>
                    <ul className="detail-list compact-list">
                      {project.approach.map((detail) => (
                        <li key={detail}>
                          <FolderKanban size={18} />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="tag-row">
                    {project.tech.map((tech) => (
                      <span className="tag" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="impact-box">
                    <p>Outcome</p>
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

          {/* <div className="more-projects">
            <div className="more-projects-head">
              <h3>More Projects</h3>
              <p>Additional product, game, web, and tooling work across EdTech platforms.</p>
            </div>

            <div className="more-projects-grid">
              {moreProjects.map((project) => {
                const content = (
                  <article className="card mini-project-card" key={project.title}>
                    <div className="mini-project-top">
                      <h4>{project.title}</h4>
                      {project.link ? <ExternalLink size={16} /> : null}
                    </div>
                    <div className="tag-row">
                      {project.tech.map((tech) => (
                        <span className="tag" key={`${project.title}-${tech}`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </article>
                );

                if (project.link) {
                  return (
                    <a href={project.link} target="_blank" rel="noreferrer" key={project.title} className="mini-project-link">
                      {content}
                    </a>
                  );
                }

                return content;
              })}
            </div>
          </div> */}
        </section>

        <section className="content-section">
          <SectionTitle
            label="Data Impact"
            title="I don’t just build dashboards — I build the pipeline behind trusted decisions."
            description="Owning both data engineering and analytics helped me connect technical implementation with what product, business, and leadership teams needed to understand."
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
                  <span>Business teams gained clearer visibility into rollout progress, adoption, and learning outcomes.</span>
                </li>
                <li>
                  <BarChart3 size={18} />
                  <span>Operational teams could identify content gaps, delivery issues, and support needs.</span>
                </li>
                <li>
                  <BarChart3 size={18} />
                  <span>Leadership received faster reporting without the cost overhead of raw-query-heavy workflows.</span>
                </li>
              </ul>
            </article>

            <article className="card analytics-card analytics-accent">
              <h3>Why this mattered</h3>
              <p>
                By owning both data engineering and analytics, I connected raw GA4 event data to business-ready insights, bridging the gap between data pipelines and real decision-making needs.
              </p>

              <div className="mini-metrics">
                <div>
                  <strong>20+</strong>
                  <span>Dashboards</span>
                </div>
                <div>
                  <strong>2–3x</strong>
                  <span>Faster reporting</span>
                </div>
                <div>
                  <strong>80–90%</strong>
                  <span>Lower cost</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="achievements" className="content-section split-section">
          <div>
            <SectionTitle
              label="Education"
              title="Academic foundation"
              description="Formal engineering background supporting my product and systems work."
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

          <div>
            <SectionTitle
              label="Achievements"
              title="Career growth and measurable outcomes"
              description="A concise snapshot of leadership, delivery, and analytics impact."
            />

            <article className="card achievements-card">
              <div className="achievement-head">
                <Trophy size={20} />
                <h3>Key wins</h3>
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

        <section id="skills" className="content-section">
          <SectionTitle
            label="Skills"
            title="A practical stack for building, shipping, and measuring products."
            description="My experience spans application engineering, data systems, architecture, and delivery."
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


        <section id="contact" className="content-section">
          <div className="card contact-panel">
            <div className="contact-copy">
              <p className="eyebrow">Contact</p>
              <h2>Let’s build something impactful.</h2>
              <p>
                I’m currently working as a Tech Lead in EdTech and open to roles
                where I can work on scalable systems, platform engineering, or
                data-driven products.
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
