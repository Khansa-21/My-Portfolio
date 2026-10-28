"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, BookOpenText, Code2, Network } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "University Resource Hub",
    category: "Full-stack university booking system",
    status: "Portfolio project · Live demo",
    role: "Solo developer",
    description:
      "A booking system for university labs and shared equipment with availability checks, approvals, waitlists, training rules, and QR check-in.",
    whyItMatters:
      "Designed to replace manual booking records with a clearer process for finding, reserving, approving, and checking in to shared resources.",

    systemDetails: [
      [
        "Core logic",
        "The API checks roles, training eligibility, booking duration, and time overlap before a reservation is approved or queued.",
      ],
      [
        "Outcome",
        "A deployed portfolio demo with the frontend on Vercel, backend on Azure App Service, and Azure SQL Database.",
      ],
    ],
    image: "/projects/resource-hub-home.png",
    imageAlt:
      "University Resource Hub homepage for booking labs and equipment.",
    liveUrl: "https://lab-booking-project.vercel.app/",
    sourceUrl: "https://github.com/Khansa-21/lab-booking-project",
    sourceLabel: "Source code",
    stack: [
      "Angular 22",
      "SCSS",
      "TypeScript",
      "Express 5",
      "SQL Server",
      "Sequelize",
      "Azure",
    ],
    highlights: [
      "Student, teacher, and admin role-based access",
      "Overlap validation, waitlist promotion, and no-show release",
      "Training eligibility, QR check-in, and Brevo email flows",
    ],
    architecture: [
      {
        title: "Frontend",
        detail: "Angular 22 application hosted on Vercel",
      },
      {
        title: "Application API",
        detail: "Express 5 and TypeScript backend on Azure App Service",
      },
      {
        title: "Database",
        detail: "Azure SQL Database accessed through Sequelize ORM",
      },
    ],
    notes: ["Frontend on Vercel · API on Azure App Service"],
  },

  {
    number: "02",
    title: "Flowcodify",
    category: "Final Year Project · Team project",
    status: "Final-year team project · Live demo",
    role: "Backend Developer",
    description:
      "A visual-to-code workspace that turns prompts, flowcharts, and wireframes into editable and previewable applications.",
    whyItMatters:
      "It helps turn an early visual idea into an editable starting point for a web application.",

    systemDetails: [
      [
        "Core logic",
        "Visual workspace requests are handled through backend services, authentication, data models, and AI integrations.",
      ],
      [
        "Outcome",
        "A live team project that supports prompt, flowchart, and wireframe workflows.",
      ],
    ],
    image: "/projects/flowcodify-home.jpeg",
    imageAlt: "Flowcodify homepage showing visual-to-code workspace features.",
    liveUrl: "https://www.flowcodify.app/",
    sourceUrl: "https://github.com/Khansa-21/Flowcodify-FYP",
    sourceLabel: "Source code",
    stack: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe",
      "OpenAI API",
    ],
    highlights: [
      "Prompt-to-code, flowchart-to-code, and wireframe-to-code workspaces",
      "Authentication, GitHub integration, and project workspace support",
      "Backend APIs, database models, AI integration and Payment gateway",
    ],
    architecture: [
      {
        title: "Workspace",
        detail: "React and Vite client with visual editors and live previews",
      },
      {
        title: "Application API",
        detail: "Node.js and Express services for authentication and projects",
      },
      {
        title: "Data and services",
        detail: "MongoDB, OpenAI API, GitHub OAuth, and code runner support",
      },
    ],
    notes: ["Backend development in a team project"],
  },

  {
    number: "03",
    title: "Subvio",
    category: "Subscription tracker",
    status: "Personal project · In development",
    role: "Solo developer",
    description:
      "A subscription tracker for recording recurring services, reviewing spending, managing renewal dates, and sending reminders.",
    whyItMatters:
      "It helps users understand recurring costs and act before subscriptions renew or become overdue.",

    systemDetails: [
      [
        "Core logic",
        "The API manages subscriptions, protected sessions, payment webhooks, reminder workflows, and smart import review.",
      ],
      [
        "Outcome",
        "An MIT-licensed project in active development with Swagger and OpenAPI documentation included.",
      ],
    ],
    image: "/projects/subvio-home.png",
    imageAlt:
      "Subvio subscription tracker homepage with dark and gold interface.",
    liveUrl: null,
    sourceUrl: "https://github.com/Khansa-21/SUBVIO",
    sourceLabel: "Source code",
    stack: [
      "React",
      "Tailwind CSS",
      "Express 5",
      "MongoDB",
      "Stripe",
      "Upstash",
      "Arcjet",
      "Swagger",
    ],
    highlights: [
      "Subscription management, search, export, and smart import review",
      "Stripe Checkout with server-side webhook handling",
      "Renewal reminders, Brevo email, Arcjet protection, and Swagger docs",
    ],
    architecture: [
      {
        title: "Frontend",
        detail: "React client with Redux state and protected dashboard routes",
      },
      {
        title: "Application API",
        detail: "Express 5 API with JWT in HTTP-only cookies",
      },
      {
        title: "Data and services",
        detail: "MongoDB, Stripe, Upstash, Brevo, Arcjet, and Swagger",
      },
    ],
    notes: ["MIT licensed"],
  },

  {
    number: "04",
    title: "Brandless Watches",
    category: "Frontend commerce experience",
    status: "Personal project · Live demo",
    role: "Solo frontend developer",
    description:
      "A polished watch storefront built around product discovery, a persistent cart, and a clear checkout journey.",
    whyItMatters:
      "It shows how a focused frontend can guide users from browsing products to placing an order without adding unnecessary complexity.",

    notes: ["Solo frontend project · Live on Netlify"],

    image: "/projects/brandless-watches.png",
    imageAlt: "Brandless Watches storefront",
    liveUrl: "https://watchbrand.netlify.app",
    sourceUrl: "https://github.com/Khansa-21/brandless-watch-commerce",
    sourceLabel: "Source code",

    stack: ["React", "CSS", "React Context", "LocalStorage"],

    highlights: [
      "Search, category, brand, color, and price filters",
      "Product pages with recommendations and purchase information",
      "Persistent cart, checkout totals, and COD confirmation",
      "Responsive layouts, theme switching, and WhatsApp order handoff",
    ],

    architecture: [
      {
        title: "Storefront",
        detail:
          "React pages handle product browsing, filtering, product details, and responsive layouts.",
      },
      {
        title: "Cart state",
        detail:
          "React Context manages cart items, quantities, checkout totals, and order state.",
      },
      {
        title: "Browser storage",
        detail:
          "LocalStorage keeps cart data and the selected color theme after a browser refresh.",
      },
    ],

    systemDetails: [
      [
        "Frontend",
        "React provides storefront pages, responsive layouts, and interface behavior.",
      ],
      [
        "Product catalog",
        "A local product data source supplies searchable products, categories, colors, brands, and prices.",
      ],
      [
        "Cart state",
        "React Context manages cart updates, quantity merging, calculated totals, and checkout information.",
      ],
      [
        "Persistence",
        "LocalStorage preserves the cart and theme preference without a database for this frontend demo.",
      ],
    ],
  },
];

const practiceProjects = [
  {
    name: "YouTube-inspired interface",
    description:
      "A responsive video-platform interface built while learning layout, navigation, and JavaScript interactions.",
    stack: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://khansa-21.github.io/Youtube-like-clone/",
    sourceUrl: "https://github.com/Khansa-21/Youtube-like-clone",
  },
  {
    name: "Spotify-inspired interface",
    description:
      "A music-platform interface focused on page structure, visual hierarchy, and responsive CSS layout practice.",
    stack: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://khansa-21.github.io/spotify-clone/",
    sourceUrl: "https://github.com/Khansa-21/spotify-clone",
  },
];


const archiveItems = [
  ...projects,
  {
    number: "05",
    title: "Interface studies",
    status: "Earlier UI practice",
  },
];

function PracticeDetail() {
  return (
    <article className="project-detail">
      <div className="project-detail-top">
        <div>
          <p className="project-status">Earlier UI practice</p>
          <h3>Interface studies</h3>
          <p className="project-category">
            HTML, CSS, and JavaScript foundations
          </p>
        </div>

        <p className="project-role">
          <span>Focus</span>
          Responsive interface work
        </p>
      </div>

      <div className="grid gap-4 py-6 md:grid-cols-2">
        {practiceProjects.map((item) => (
          <article
            key={item.name}
            className="border border-[var(--line)] bg-[var(--surface)] p-5"
          >
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[var(--gold)]">
              UI practice
            </p>

            <h4 className="mt-3 font-serif text-2xl text-[var(--foreground)]">
              {item.name}
            </h4>

            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
              {item.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {item.stack.map((skill) => (
                <span
                  key={skill}
                  className="border border-[var(--line)] px-2 py-1 text-[0.62rem] font-bold uppercase tracking-[0.1em] text-[var(--gold)]"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-6 flex gap-4">
              <a
                href={item.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[var(--foreground)] hover:text-[var(--gold)]"
              >
                Live demo
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>

              <a
                href={item.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[var(--muted)] hover:text-[var(--gold)]"
              >
                Source
                <Code2 size={14} aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </article>
  );
}

export default function ProjectArchive() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [view, setView] = useState<"overview" | "system">("overview");

  const isPractice = activeIndex === projects.length;
  const project = projects[activeIndex] ?? projects[0];

  function selectProject(index: number) {
    setActiveIndex(index);
    setView("overview");
  }

  return (
    <section id="projects" className="project-archive scroll-mt-32">
      <div className="project-archive-inner">
        <div className="project-archive-heading">
          <div className="project-kicker">
            <span>02 / Selected work</span>
            <i />
          </div>

          <h2>
            Projects built to solve
            <em> real problems.</em>
          </h2>

          <p>
            From campus bookings to AI-assisted workflows, each project turns a
            clear need into usable software.
          </p>
        </div>

        <div className="project-shell">
          <aside className="project-index">
            <p className="project-index-label">Project index</p>

            <div>
              {archiveItems.map((item, index) => {
                const active = activeIndex === index;

                return (
                  <button
                    key={item.number}
                    type="button"
                    onClick={() => selectProject(index)}
                    aria-pressed={active}
                    className={`project-index-button ${
                      active ? "is-active" : ""
                    }`}
                  >
                    <span className="project-index-number">{item.number}</span>

                    <span>
                      <strong>{item.title}</strong>
                      <small>{item.status}</small>
                    </span>
                  </button>
                );
              })}
            </div>
          </aside>

          {isPractice ? (
            <PracticeDetail />
          ) : (
            <article className="project-detail">
              <div className="project-detail-top">
                <div>
                  <p className="project-status">{project.status}</p>
                  <h3>{project.title}</h3>
                  <p className="project-category">{project.category}</p>
                </div>

                <p className="project-role">
                  <span>Role</span>
                  {project.role}
                </p>
              </div>

              <div
                className="project-tabs"
                role="tablist"
                aria-label="Project view"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={view === "overview"}
                  onClick={() => setView("overview")}
                  className={view === "overview" ? "is-active" : ""}
                >
                  <BookOpenText size={15} aria-hidden="true" />
                  Overview
                </button>

                <button
                  type="button"
                  role="tab"
                  aria-selected={view === "system"}
                  onClick={() => setView("system")}
                  className={view === "system" ? "is-active" : ""}
                >
                  <Network size={15} aria-hidden="true" />
                  System design
                </button>
              </div>

              {view === "overview" ? (
                <div className="project-overview">
                  <div className="relative aspect-video overflow-hidden border border-[var(--line)] bg-[#0e0a10]">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      loading="eager"
                      sizes="(min-width: 700px) 34vw, 100vw"
                      className="h-full w-full object-cover object-top transition duration-500 hover:scale-[1.03]"
                    />

                    <span className="absolute bottom-3 left-3 border border-white/20 bg-black/70 px-3 py-2 text-[0.58rem] font-bold uppercase tracking-[0.13em] text-[#FFF8EA] backdrop-blur-md">
                      {project.status}
                    </span>
                  </div>

                  <div className="project-overview-copy">
                    <p className="project-description">{project.description}</p>

                    <ul className="project-highlights">
                      {project.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>

                    <div className="project-stack">
                      {project.stack.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </div>

                  <div className="project-why-glass project-why-wide">
                    <div className="project-why-glass-inner">
                      <div className="relative border-l-2 border-[var(--gold)] pl-4">
                        <p className="text-[0.6rem] font-bold uppercase tracking-[0.16em] text-[var(--gold)]">
                          Why it matters
                        </p>

                        <p className="mt-1.5 text-sm leading-6 text-[var(--muted)]">
                          {project.whyItMatters}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="project-system">
                  <p className="project-system-intro">
                    A simplified view of the main layers used in this project.
                  </p>

                  <div className="project-system-flow">
                    {project.architecture.map((layer, index) => (
                      <div className="project-system-node" key={layer.title}>
                        <span>0{index + 1}</span>
                        <h4>{layer.title}</h4>
                        <p>{layer.detail}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 grid gap-px border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">
                    {project.systemDetails.map(([label, detail]) => (
                      <div key={label} className="bg-[var(--surface)] p-5">
                        <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[var(--gold)]">
                          {label}
                        </p>

                        <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                          {detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="project-detail-footer">
                <div className="project-notes">
                  {project.notes.map((note) => (
                    <span key={note}>{note}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-live-link"
                    >
                      Live application
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                  )}

                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-source-link"
                  >
                    <span>{project.sourceLabel ?? "Source code"}</span>
                    <Code2 size={14} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          )}
        </div>
      </div>
    </section>
  );
}
