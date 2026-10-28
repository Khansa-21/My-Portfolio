import { BriefcaseBusiness, Code2, GraduationCap, MapPin } from "lucide-react";

export default function AboutPanel() {
  return (
    <section id="about" className="about-section">
      <div className="about-grid">
        <aside className="about-details">
          <div className="about-section-label">
            <span>01 / About</span>
            <i />
          </div>

          <h2 className="about-side-heading">
            Behind the <span>build.</span>
          </h2>

          <div className="about-ledger">
            <div className="about-ledger-item">
              <MapPin aria-hidden="true" />
              <p>Based in</p>
              <span>Lahore, Pakistan</span>
            </div>

            <div className="about-ledger-item">
              <GraduationCap aria-hidden="true" />
              <p>Education</p>
              <span>B.S. Computer Science</span>
            </div>

            <div className="about-ledger-item">
              <Code2 aria-hidden="true" />
              <p>Core stack</p>
              <span>React, Angular, Node.js, MongoDB, SQL</span>
            </div>

            <div className="about-ledger-item">
              <BriefcaseBusiness aria-hidden="true" />
              <p>Availability</p>
              <span>Junior full-stack roles · Internships · Remote</span>
            </div>
          </div>

          <a href="#contact" className="about-link">
            Get in touch <span>→</span>
          </a>
        </aside>

        <div className="about-summary">
          <span className="about-quote-mark" aria-hidden="true">
            “
          </span>

          <h3 className="about-statement">
            I care about the <em>whole build:</em> the interface, the API, and
            the details that help every part work together.
          </h3>

          <div className="about-copy-grid">
            <p>
              I am an early-career full-stack developer with hands-on project
              experience in React, Angular, Node.js, APIs, and databases. My
              work includes a university resource booking system, an AI
              visual-to-code project, and backend API projects.
            </p>

            <p>
              I focus on responsive interfaces, clear backend logic,
              authentication, validation, and useful database workflows. I want
              to build software that is understandable, maintainable, and
              helpful for the people using it.
            </p>
          </div>
        </div>
      </div>

      <section
        aria-labelledby="experience-heading"
        className="mx-auto mt-14 max-w-7xl border-t border-[#D9AE5A]/20 pt-8"
      >
        <h3
          id="experience-heading"
          className="font-display text-3xl text-[#F6EEDF]"
        >
          Experience
        </h3>

        <div className="mt-6 grid gap-8 sm:grid-cols-2">
          <article className="border-t border-[#D9AE5A]/35 pt-4">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#D9AE5A]">
              2025–2026
            </p>
            <h4 className="mt-2 font-display text-2xl text-[#F6EEDF]">
              Viewdu
            </h4>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#F0CE86]">
              Collaborative marketplace project
            </p>
            <p className="mt-3 text-sm leading-6 text-[#C1B4B0]">
              Contributed to Angular interface and design work, an i18n
              translation service, and selected database and backend tasks
              alongside an experienced engineer.
            </p>
          </article>

          <article className="border-t border-[#D9AE5A]/35 pt-4">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#D9AE5A]">
              2024
            </p>
            <h4 className="mt-2 font-display text-2xl text-[#F6EEDF]">
              WordPress Website Support
            </h4>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#F0CE86]">
              Paid client work · Men’s Store and Dulha House
            </p>
            <p className="mt-3 text-sm leading-6 text-[#C1B4B0]">
              Maintained a WooCommerce store, updated Elementor Pro content and
              on-page SEO, and completed off-page backlink work for Dulha House.
            </p>
          </article>
        </div>
      </section>
    </section>
  );
}
