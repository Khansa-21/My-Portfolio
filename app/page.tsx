import HeroIntro from "./components/HeroIntro";
import AboutPanel from "./components/AboutPanel";
import SkillsConstellation from "./components/SkillsConstellation";
import ProjectArchive from "./components/ProjectArchive";
import ThemeToggle from "./components/ThemeToggle";
import { MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-transparent text-[#F6EEDF]">
      <HeroIntro />

      {/* Header */}
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-6 sm:px-10 lg:px-16">
        <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
          <div className="nav-crystal mx-auto max-w-[74rem]">
            <div className="nav-crystal-inner flex h-14 items-center justify-between gap-4 px-6 sm:px-8">
              <a
                href="#home"
                className="ml-1 flex min-w-max items-center gap-3 sm:ml-2"
              >
                <span className="relative flex h-8 w-8 items-center justify-center border border-[#D9AE5A]/80 font-display text-sm text-[#F0CE86]">
                  KE
                  <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full border border-[#1A0C1E] bg-[#D9AE5A]" />
                </span>

                <span className="hidden sm:block">
                  <span className="block font-display text-base leading-none text-[#F6EEDF]">
                    Khansa Ehsan
                  </span>
                  <span className="mt-1 block text-[0.5rem] font-semibold uppercase tracking-[0.2em] text-[#C1B4B0]">
                    Full-Stack Developer
                  </span>
                </span>
              </a>

              <nav
                aria-label="Main navigation"
                className="hidden items-center gap-4 lg:flex xl:gap-5"
              >
                <a href="#about" className="nav-link">
                  About
                </a>
                <a href="#projects" className="nav-link">
                  Work
                </a>
                <a href="#approach" className="nav-link">
                  Approach
                </a>
                <a href="#skills" className="nav-link">
                  Skills
                </a>
                <a href="#journey" className="nav-link">
                  Journey
                </a>
                <a href="#credentials" className="nav-link">
                  Credentials
                </a>
                <a href="#faq" className="nav-link">
                  FAQ
                </a>
                <a href="#contact" className="nav-link">
                  Contact
                </a>
              </nav>

              <div className="mr-1 flex items-center gap-5 sm:mr-2">
                <a
                  href="/KHANSA_E_Resume.pdf"
                  download
                  className="nav-resume hidden md:inline-flex"
                >
                  Résumé <span aria-hidden="true">↓</span>
                </a>

                <ThemeToggle />
              </div>
            </div>
          </div>
        </header>

        <div
          id="home"
          className="grid flex-1 items-center gap-14 pb-16 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:pb-20 lg:pt-36"
        >
          <div>
            <h1 className="font-display text-7xl leading-[0.78] tracking-tight sm:text-8xl lg:text-[8.5rem]">
              Khansa
              <span className="gold-shimmer ml-8 block italic text-[#F0CE86] sm:ml-16">
                Ehsan
              </span>
            </h1>

            <div className="mt-10 flex items-center gap-4">
              <div className="gold-shimmer flex h-14 w-14 items-center justify-center rounded-full border border-[#D9AE5A] bg-[#28122D] font-display text-xl text-[#F0CE86]">
                KE
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F6EEDF]">
                  Full-Stack Developer
                </p>
                <p className="mt-1 font-display text-lg italic text-[#C1B4B0]">
                  React · Angular · Node.js
                </p>
              </div>
            </div>

            <p className="mt-8 max-w-xl text-base leading-7 text-[#C1B4B0]">
              I build secure, responsive{" "}
              <strong className="font-semibold text-[#F6EEDF]">
                web applications end to end
              </strong>
              : component-driven interfaces, REST APIs, authentication, and
              database design.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-[#E5B961] px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[#140A18] transition hover:bg-[#F0CE86]"
              >
                View Projects →
              </a>

              <a
                href="/KHANSA_E_Resume.pdf"
                download
                className="rounded-full border border-[#D9AE5A]/55 px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[#F6EEDF] transition hover:border-[#F0CE86] hover:text-[#F0CE86]"
              >
                Download résumé ↓
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-5 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#C1B4B0]">
              <a
                href="https://github.com/Khansa-21"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-[#F0CE86]"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/khansa-ehsan-274282285"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-[#F0CE86]"
              >
                LinkedIn ↗
              </a>

              <a
                href="mailto:itskhansaehsan@gmail.com"
                className="transition hover:text-[#F0CE86]"
              >
                Email ↗
              </a>
            </div>
          </div>

          <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center">
            <div className="hero-ring-motion hero-ring-outer absolute inset-0 rounded-full border border-[#D9AE5A]/35" />

            <div className="hero-ring-motion hero-ring-inner absolute inset-7 rounded-full border border-dashed border-[#D9AE5A]/40" />

            <div className="absolute inset-[11%] rounded-full bg-[#28122D] shadow-[0_0_100px_rgba(217,174,90,0.12)]" />

            <span className="hero-label-motion hero-label-delay-one absolute top-[22%] left-0 z-10 rounded-full border border-[#D9AE5A]/40 bg-[#28122D] px-3 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#F0CE86]">
              ● React · Angular
            </span>

            <span className="hero-label-motion hero-label-delay-two absolute top-[49%] right-[-0.5rem] z-10 rounded-full border border-[#D9AE5A]/40 bg-[#28122D] px-3 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#F0CE86]">
              ● Node · Express
            </span>

            <span className="hero-label-motion hero-label-delay-three absolute bottom-[20%] left-[-0.5rem] z-10 rounded-full border border-[#D9AE5A]/40 bg-[#28122D] px-3 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#F0CE86]">
              ● MongoDB · SQL
            </span>

            <div className="relative flex h-48 w-48 flex-col items-center justify-center rounded-full border-2 border-[#D9AE5A] bg-[#1D0D22] shadow-[0_0_60px_rgba(217,174,90,0.12)]">
              <span className="gold-shimmer font-display text-6xl text-[#F0CE86]">
                KE
              </span>
              <span className="mt-2 text-[0.6rem] uppercase tracking-[0.2em] text-[#C1B4B0]">
                Profile photo
              </span>
            </div>

            <p className="absolute bottom-1 text-[0.6rem] uppercase tracking-[0.28em] text-[#C1B4B0]">
              Lahore · Pakistan
            </p>
          </div>
        </div>
      </section>

      {/* Profile */}
      <section className="border-y border-[#D9AE5A]/20 bg-[#1A0C1E]/70">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 sm:grid-cols-3 sm:px-10 lg:px-16">
          <div className="border-l border-[#D9AE5A] pl-4">
            <p className="font-display text-4xl text-[#F6EEDF]">2+</p>
            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[#C1B4B0]">
              Years of hands-on development
            </p>
          </div>

          <div className="border-l border-[#D9AE5A] pl-4">
            <p className="font-display text-4xl text-[#F6EEDF]">5</p>
            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[#C1B4B0]">
              Full-stack projects built
            </p>
          </div>

          <div className="border-l border-[#D9AE5A] pl-4">
            <p className="font-display text-4xl text-[#F6EEDF]">3.52 / 4.0</p>
            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[#C1B4B0]">
              B.S. Computer Science CGPA
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <AboutPanel />

      {/* Selected work */}
      <ProjectArchive />

      {/* Build Approach */}
      <section
        className="relative overflow-hidden border-b border-[#D9AE5A]/20 px-6 py-20 sm:px-10 lg:px-16"
        id="approach"
      >
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D9AE5A]/5" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4">
              <p className="gold-shimmer text-xs font-semibold uppercase tracking-[0.22em] text-[#D9AE5A]">
                03 / Build approach
              </p>
              <div className="h-px w-16 bg-[#D9AE5A]/45" />
            </div>

            <h2 className="mt-7 font-display text-5xl leading-[0.9] sm:text-6xl lg:text-7xl">
              From requirements
              <span className="gold-shimmer block italic text-[#F0CE86]">
                to release.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-7 text-[#C1B4B0]">
              A product is not only an interface or an API. It is a connected
              path from understanding the problem to delivering something people
              can confidently use.
            </p>
          </div>

          {/* Desktop build path */}
          <div className="relative mt-12 hidden h-[32rem] lg:block">
            <svg
              aria-hidden="true"
              viewBox="0 0 1200 600"
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-0 h-full w-full"
            >
              <path
                d="M 228 128 C 236 128, 244 152, 252 152"
                fill="none"
                stroke="rgba(217, 174, 90, 0.42)"
                strokeWidth="1.5"
                strokeDasharray="5 8"
              />

              <path
                d="M 468 152 C 480 152, 492 128, 504 128"
                fill="none"
                stroke="rgba(217, 174, 90, 0.42)"
                strokeWidth="1.5"
                strokeDasharray="5 8"
              />

              <path
                d="M 720 128 C 732 128, 744 152, 756 152"
                fill="none"
                stroke="rgba(217, 174, 90, 0.42)"
                strokeWidth="1.5"
                strokeDasharray="5 8"
              />

              <path
                d="M 972 152 C 980 152, 988 128, 996 128"
                fill="none"
                stroke="rgba(217, 174, 90, 0.42)"
                strokeWidth="1.5"
                strokeDasharray="5 8"
              />

              <circle
                className="process-node"
                cx="228"
                cy="128"
                r="4"
                fill="#D9AE5A"
              />
              <circle
                className="process-node"
                cx="252"
                cy="152"
                r="4"
                fill="#D9AE5A"
              />

              <circle
                className="process-node"
                cx="468"
                cy="152"
                r="4"
                fill="#D9AE5A"
              />
              <circle
                className="process-node"
                cx="504"
                cy="128"
                r="4"
                fill="#D9AE5A"
              />

              <circle
                className="process-node"
                cx="720"
                cy="128"
                r="4"
                fill="#D9AE5A"
              />
              <circle
                className="process-node"
                cx="756"
                cy="152"
                r="4"
                fill="#D9AE5A"
              />

              <circle
                className="process-node"
                cx="972"
                cy="152"
                r="4"
                fill="#D9AE5A"
              />
              <circle
                className="process-node"
                cx="996"
                cy="128"
                r="4"
                fill="#F0CE86"
              />
            </svg>

            <ol>
              <li className="process-pod absolute left-[1%] top-0 min-h-[16rem] w-[18%] rounded-[2rem] border border-[#D9AE5A]/25 bg-[linear-gradient(145deg,rgba(255,255,255,0.07),rgba(40,18,45,0.5))] p-6 backdrop-blur-md">
                <p className="font-display text-6xl italic text-[#D9AE5A]/25">
                  01
                </p>
                <p className="mt-3 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#D9AE5A]">
                  Discovery
                </p>
                <h3 className="mt-3 font-display text-3xl leading-tight text-[#F6EEDF]">
                  Find the real need
                </h3>
                <p className="mt-4 text-sm leading-6 text-[#C1B4B0]">
                  Identify users, goals, rules, and edge cases before deciding
                  what the product should do.
                </p>
                <p className="mt-5 text-[0.6rem] uppercase tracking-[0.15em] text-[#D9AE5A]">
                  Users · Scope
                </p>
              </li>

              <li className="process-pod process-pod-two absolute left-[21%] top-[12%] min-h-[16rem] w-[18%] rounded-[2rem] border border-[#D9AE5A]/25 bg-[linear-gradient(145deg,rgba(255,255,255,0.07),rgba(40,18,45,0.5))] p-6 backdrop-blur-md">
                <p className="font-display text-6xl italic text-[#D9AE5A]/25">
                  02
                </p>
                <p className="mt-3 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#D9AE5A]">
                  Plan
                </p>
                <h3 className="mt-3 font-display text-3xl leading-tight text-[#F6EEDF]">
                  Map the moving parts
                </h3>
                <p className="mt-4 text-sm leading-6 text-[#C1B4B0]">
                  Plan UI flows, API routes, data models, and validation before
                  implementation grows complex.
                </p>
                <p className="mt-5 text-[0.6rem] uppercase tracking-[0.15em] text-[#D9AE5A]">
                  UI · API · Data
                </p>
              </li>

              <li className="process-pod process-pod-three absolute left-[42%] top-0 min-h-[16rem] w-[18%] rounded-[2rem] border border-[#D9AE5A]/25 bg-[linear-gradient(145deg,rgba(255,255,255,0.07),rgba(40,18,45,0.5))] p-6 backdrop-blur-md">
                <p className="font-display text-6xl italic text-[#D9AE5A]/25">
                  03
                </p>
                <p className="mt-3 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#D9AE5A]">
                  Build
                </p>
                <h3 className="mt-3 font-display text-3xl leading-tight text-[#F6EEDF]">
                  Bring layers together
                </h3>
                <p className="mt-4 text-sm leading-6 text-[#C1B4B0]">
                  Connect responsive frontend work, API integrations, backend
                  logic, and data operations into one clear system.
                </p>
                <p className="mt-5 text-[0.6rem] uppercase tracking-[0.15em] text-[#D9AE5A]">
                  Frontend · Backend
                </p>
              </li>

              <li className="process-pod process-pod-four absolute left-[63%] top-[12%] min-h-[16rem] w-[18%] rounded-[2rem] border border-[#D9AE5A]/25 bg-[linear-gradient(145deg,rgba(255,255,255,0.07),rgba(40,18,45,0.5))] p-6 backdrop-blur-md">
                <p className="font-display text-6xl italic text-[#D9AE5A]/25">
                  04
                </p>
                <p className="mt-3 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#D9AE5A]">
                  Secure
                </p>
                <h3 className="mt-3 font-display text-3xl leading-tight text-[#F6EEDF]">
                  Strengthen key paths
                </h3>
                <p className="mt-4 text-sm leading-6 text-[#C1B4B0]">
                  Add validation, authentication, secure data handling, CORS,
                  and rate limiting where the system needs protection.
                </p>
                <p className="mt-5 text-[0.6rem] uppercase tracking-[0.15em] text-[#D9AE5A]">
                  Auth · Validation
                </p>
              </li>

              <li className="process-pod process-pod-five absolute left-[83%] top-0 min-h-[16rem] w-[17%] rounded-[2rem] border border-[#D9AE5A]/25 bg-[linear-gradient(145deg,rgba(255,255,255,0.07),rgba(40,18,45,0.5))] p-6 backdrop-blur-md">
                <p className="font-display text-6xl italic text-[#F0CE86]/40">
                  05
                </p>
                <p className="mt-3 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#F0CE86]">
                  Deliver
                </p>
                <h3 className="mt-3 font-display text-3xl leading-tight text-[#F6EEDF]">
                  Release with care
                </h3>
                <p className="mt-4 text-sm leading-6 text-[#C1B4B0]">
                  Check real flows and responsive behavior, deploy, and improve
                  the build through what it teaches.
                </p>
                <p className="mt-5 text-[0.6rem] uppercase tracking-[0.15em] text-[#D9AE5A]">
                  Review · Deploy
                </p>
              </li>
            </ol>
          </div>

          {/* Mobile build path */}
          <ol className="mt-14 border-t border-[#D9AE5A]/20 lg:hidden">
            <li className="grid grid-cols-[3.5rem_1fr] gap-4 border-b border-[#D9AE5A]/20 py-6">
              <p className="font-display text-3xl italic text-[#D9AE5A]">01</p>
              <div>
                <p className="text-[0.6rem] uppercase tracking-[0.16em] text-[#D9AE5A]">
                  Discovery
                </p>
                <h3 className="mt-2 font-display text-2xl text-[#F6EEDF]">
                  Find the real need
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#C1B4B0]">
                  Understand users, goals, rules, and edge cases.
                </p>
              </div>
            </li>

            <li className="grid grid-cols-[3.5rem_1fr] gap-4 border-b border-[#D9AE5A]/20 py-6">
              <p className="font-display text-3xl italic text-[#D9AE5A]">02</p>
              <div>
                <p className="text-[0.6rem] uppercase tracking-[0.16em] text-[#D9AE5A]">
                  Blueprint
                </p>
                <h3 className="mt-2 font-display text-2xl text-[#F6EEDF]">
                  Map the moving parts
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#C1B4B0]">
                  Plan the interface, API, data, and validation rules.
                </p>
              </div>
            </li>

            <li className="grid grid-cols-[3.5rem_1fr] gap-4 border-b border-[#D9AE5A]/20 py-6">
              <p className="font-display text-3xl italic text-[#D9AE5A]">03</p>
              <div>
                <p className="text-[0.6rem] uppercase tracking-[0.16em] text-[#D9AE5A]">
                  Build
                </p>
                <h3 className="mt-2 font-display text-2xl text-[#F6EEDF]">
                  Bring layers together
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#C1B4B0]">
                  Connect interface work, backend logic, APIs, and data.
                </p>
              </div>
            </li>

            <li className="grid grid-cols-[3.5rem_1fr] gap-4 border-b border-[#D9AE5A]/20 py-6">
              <p className="font-display text-3xl italic text-[#D9AE5A]">04</p>
              <div>
                <p className="text-[0.6rem] uppercase tracking-[0.16em] text-[#D9AE5A]">
                  Safeguard
                </p>
                <h3 className="mt-2 font-display text-2xl text-[#F6EEDF]">
                  Strengthen key paths
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#C1B4B0]">
                  Apply security, validation, and careful data handling.
                </p>
              </div>
            </li>

            <li className="grid grid-cols-[3.5rem_1fr] gap-4 py-6">
              <p className="font-display text-3xl italic text-[#F0CE86]">05</p>
              <div>
                <p className="text-[0.6rem] uppercase tracking-[0.16em] text-[#F0CE86]">
                  Delivery
                </p>
                <h3 className="mt-2 font-display text-2xl text-[#F6EEDF]">
                  Release with care
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#C1B4B0]">
                  Review, deploy, and use feedback to improve reliability.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* Skills Constellation */}
      <section
        id="skills"
        className="border-b border-[#D9AE5A]/20 px-6 py-16 sm:px-10 lg:px-16 lg:py-20"
      >
        <div className="mx-auto w-full max-w-7xl">
          <SkillsConstellation />
        </div>
      </section>

      {/* Development Journey */}
      <section
        id="journey"
        className="relative overflow-hidden border-b border-[#D9AE5A]/20 px-6 py-20 sm:px-10 lg:px-16"
      >
        <div className="pointer-events-none absolute -right-36 top-20 h-96 w-96 rounded-full border border-[#D9AE5A]/10" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4">
              <p className="gold-shimmer text-xs font-semibold uppercase tracking-[0.22em] text-[#D9AE5A]">
                04 / Development journey
              </p>
              <div className="h-px w-16 bg-[#D9AE5A]/45" />
            </div>

            <h2 className="mt-7 font-display text-5xl leading-[0.9] sm:text-6xl">
              From foundations to
              <span className="gold-shimmer block italic text-[#F0CE86]">
                full-stack systems.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#C1B4B0]">
              A practical progression from building web experiences to designing
              secure, data-driven systems that solve real product problems.
            </p>
          </div>

          <ol className="relative mt-12 space-y-0">
            <div className="absolute bottom-10 left-[7.25rem] top-10 hidden w-px bg-[#D9AE5A]/25 sm:block" />

            <li className="relative grid gap-6 border-b border-[#D9AE5A]/20 py-8 sm:grid-cols-[7rem_2.5rem_1fr] sm:gap-8">
              <p className="font-display text-3xl italic text-[#D9AE5A]">
                2022–26
              </p>

              <div className="relative hidden sm:block">
                <span className="absolute left-1/2 top-2 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-[#140A18] bg-[#D9AE5A] shadow-[0_0_12px_rgba(217,174,90,0.35)]" />
              </div>

              <article className="border border-[#D9AE5A]/20 bg-[#1A0C1E]/45 p-6 transition duration-300 hover:border-[#D9AE5A]/55 hover:bg-[#28122D]/55">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#D9AE5A]">
                  Education
                </p>

                <h3 className="mt-3 font-display text-3xl text-[#F6EEDF]">
                  B.S. Computer Science
                </h3>

                <p className="mt-1 text-sm text-[#F0CE86]">
                  University of the Punjab, Lahore
                </p>

                <p className="mt-4 max-w-2xl text-sm leading-6 text-[#C1B4B0]">
                  Building foundations in web engineering, data structures, OOP,
                  and software engineering alongside practical development work.
                </p>
              </article>
            </li>

            <li className="relative grid gap-6 border-b border-[#D9AE5A]/20 py-8 sm:grid-cols-[7rem_2.5rem_1fr] sm:gap-8">
              <p className="font-display text-3xl italic text-[#D9AE5A]">
                2023–24
              </p>

              <div className="relative hidden sm:block">
                <span className="absolute left-1/2 top-2 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-[#140A18] bg-[#D9AE5A] shadow-[0_0_12px_rgba(217,174,90,0.35)]" />
              </div>

              <article className="border border-[#D9AE5A]/20 bg-[#1A0C1E]/45 p-6 transition duration-300 hover:border-[#D9AE5A]/55 hover:bg-[#28122D]/55">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#D9AE5A]">
                  Web foundations
                </p>

                <h3 className="mt-3 font-display text-3xl text-[#F6EEDF]">
                  HTML/CSS, SEO, and modern frontend
                </h3>

                <p className="mt-1 text-sm text-[#F0CE86]">
                  WordPress · WooCommerce · React · Tailwind CSS
                </p>

                <p className="mt-4 max-w-2xl text-sm leading-6 text-[#C1B4B0]">
                  Started with responsive Html/Css, WordPress and WooCommerce
                  projects, then moved into React interfaces, Tailwind CSS, SEO
                  metadata, and deployment workflows.
                </p>
              </article>
            </li>

            <li className="relative grid gap-6 border-b border-[#D9AE5A]/20 py-8 sm:grid-cols-[7rem_2.5rem_1fr] sm:gap-8">
              <p className="font-display text-3xl italic text-[#D9AE5A]">
                2025
              </p>

              <div className="relative hidden sm:block">
                <span className="absolute left-1/2 top-2 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-[#140A18] bg-[#D9AE5A] shadow-[0_0_12px_rgba(217,174,90,0.35)]" />
              </div>

              <article className="border border-[#D9AE5A]/20 bg-[#1A0C1E]/45 p-6 transition duration-300 hover:border-[#D9AE5A]/55 hover:bg-[#28122D]/55">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#D9AE5A]">
                  Backend systems
                </p>

                <h3 className="mt-3 font-display text-3xl text-[#F6EEDF]">
                  APIs, security, and automation
                </h3>

                <p className="mt-1 text-sm text-[#F0CE86]">
                  Node.js · Express · MongoDB · JWT · Arcjet
                </p>

                <p className="mt-4 max-w-2xl text-sm leading-6 text-[#C1B4B0]">
                  Built REST APIs with authentication, refresh-token rotation,
                  validation, rate limiting, scheduled jobs, and automated email
                  reminders.
                </p>
              </article>
            </li>

            <li className="relative grid gap-6 py-8 sm:grid-cols-[7rem_2.5rem_1fr] sm:gap-8">
              <p className="font-display text-3xl italic text-[#F0CE86]">
                2026
              </p>

              <div className="relative hidden sm:block">
                <span className="absolute left-1/2 top-2 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-[#140A18] bg-[#F0CE86] shadow-[0_0_16px_rgba(240,206,134,0.5)]" />
              </div>

              <article className="border border-[#D9AE5A]/45 bg-[#28122D]/55 p-6 transition duration-300 hover:border-[#F0CE86]">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#D9AE5A]">
                  Full-stack delivery
                </p>

                <h3 className="mt-3 font-display text-3xl text-[#F6EEDF]">
                  Systems with product depth
                </h3>

                <p className="mt-1 text-sm text-[#F0CE86]">
                  Angular · Azure SQL · AI workflows · Next.js
                </p>

                <p className="mt-4 max-w-2xl text-sm leading-6 text-[#C1B4B0]">
                  Applying these foundations to the University Resource Hub and
                  an AI-powered flowchart and wireframe-to-code platform while
                  extending skills in modern TypeScript and Next.js.
                </p>
              </article>
            </li>
          </ol>
        </div>
      </section>

      {/* Credentials */}
      <section
        id="credentials"
        className="border-b border-[#D9AE5A]/20 px-6 py-20 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4">
                <p className="gold-shimmer text-xs font-semibold uppercase tracking-[0.22em] text-[#D9AE5A]">
                  05 / Credentials
                </p>
                <div className="h-px w-16 bg-[#D9AE5A]/45" />
              </div>

              <h2 className="mt-7 font-display text-5xl leading-[0.9] sm:text-6xl">
                Credentials supported by
                <span className="gold-shimmer block italic text-[#F0CE86]">
                  real project work.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-[#C1B4B0]">
              Credentials support the work shown above. Project repositories,
              demonstrations, and verification links can be shared when
              relevant.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="relative overflow-hidden border border-[#D9AE5A]/30 bg-[#28122D]/50 p-7 sm:p-9">
              <p className="credentials-mark pointer-events-none absolute -right-5 -top-9 font-display text-[10rem] italic leading-none text-[#D9AE5A]/10">
                KE
              </p>

              <div className="relative">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#D9AE5A]">
                  Professional training
                </p>

                <h3 className="mt-5 max-w-xl font-display text-4xl leading-tight text-[#F6EEDF]">
                  Full-Stack Developer Certification (A+ Grade)
                </h3>

                <p className="mt-3 text-sm text-[#F0CE86]">
                  NAVTTC / ShellShift · 2024
                </p>

                <p className="mt-6 max-w-xl text-sm leading-6 text-[#C1B4B0]">
                  Practical training in modern frontend and backend development,
                  including React, Node.js, Express, MongoDB, APIs,
                  authentication, and deployment fundamentals.
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {["Full-stack", "MERN", "APIs", "Deployment"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#D9AE5A]/25 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-[#F0CE86]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            <div className="grid gap-5">
              <article className="border border-[#D9AE5A]/20 bg-[#1A0C1E]/45 p-7">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#D9AE5A]">
                  Languages
                </p>

                <div className="mt-6 grid grid-cols-2 gap-5">
                  <div>
                    <p className="font-display text-3xl text-[#F6EEDF]">
                      English
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-[0.14em] text-[#C1B4B0]">
                      Professional
                    </p>
                  </div>

                  <div>
                    <p className="font-display text-3xl text-[#F6EEDF]">Urdu</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.14em] text-[#C1B4B0]">
                      Native
                    </p>
                  </div>
                </div>
              </article>

              <aside className="border border-[#D9AE5A]/20 bg-[#1A0C1E]/45 p-7">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#D9AE5A]">
                  Verification
                </p>

                <p className="mt-4 text-sm leading-6 text-[#C1B4B0]">
                  Full-stack certification, academic documents, and professional
                  references are available when needed.
                </p>

                <a
                  href="#contact"
                  className="mt-6 inline-flex rounded-full border border-[#D9AE5A]/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#F0CE86] transition hover:bg-[#D9AE5A] hover:text-[#140A18]"
                >
                  Request documents
                </a>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="border-b border-[#D9AE5A]/20 px-6 py-20 sm:px-10 lg:px-16"
        id="faq"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <div className="flex items-center gap-4">
              <p className="gold-shimmer text-xs font-semibold uppercase tracking-[0.22em] text-[#D9AE5A]">
                06 / FAQ
              </p>
              <div className="h-px w-16 bg-[#D9AE5A]/45" />
            </div>

            <h2 className="mt-7 font-display text-5xl leading-[0.9] sm:text-6xl">
              A few useful
              <span className="gold-shimmer block italic text-[#F0CE86]">
                details.
              </span>
            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-[#C1B4B0]">
              A quick overview for recruiters, collaborators, and teams
              considering working together.
            </p>
          </div>

          <div className="border-t border-[#D9AE5A]/20">
            <details className="group border-b border-[#D9AE5A]/20 py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-2xl text-[#F6EEDF]">
                What technologies do you work with?
                <span className="text-[#D9AE5A] transition group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-[#C1B4B0]">
                My core stack includes React, Angular, TypeScript, Node.js,
                Express, MongoDB, SQL Server, Tailwind CSS, REST APIs, API
                integrations, JWT authentication, Zod validation, and cloud
                deployment platforms.
              </p>
            </details>

            <details className="group border-b border-[#D9AE5A]/20 py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-2xl text-[#F6EEDF]">
                What opportunities are you open to?
                <span className="text-[#D9AE5A] transition group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-[#C1B4B0]">
                I am open to junior frontend or full-stack roles, internships,
                freelance work, and remote collaboration. I am based in Lahore,
                Pakistan.
              </p>
            </details>

            <details className="group border-b border-[#D9AE5A]/20 py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-2xl text-[#F6EEDF]">
                What are you currently learning?
                <span className="text-[#D9AE5A] transition group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-[#C1B4B0]">
                I am strengthening my Next.js, advanced TypeScript, Python,
                testing, and software-quality skills through practical work.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="relative overflow-hidden border-t border-[#D9AE5A]/20 px-6 py-20 sm:px-10 lg:px-16"
      >
        <div className="pointer-events-none absolute -right-36 bottom-0 h-96 w-96 rounded-full border border-[#D9AE5A]/10" />

        <div className="relative mx-auto max-w-7xl">
          <div className="flex items-center gap-4">
            <p className="gold-shimmer text-xs font-semibold uppercase tracking-[0.22em] text-[#D9AE5A]">
              07 / Contact
            </p>
            <div className="h-px w-16 bg-[#D9AE5A]/45" />
          </div>

          <h2 className="mt-7 max-w-3xl font-display text-5xl leading-[0.9] sm:text-6xl lg:text-7xl">
            Let&apos;s build something
            <span className="gold-shimmer block italic text-[#F0CE86]">
              dependable.
            </span>
          </h2>

          <div className="mt-10 grid overflow-hidden border border-[#D9AE5A]/25 bg-[#1A0C1E]/45 lg:grid-cols-[0.8fr_1.2fr]">
            {/* Contact details */}
            <div className="border-b border-[#D9AE5A]/20 p-7 sm:p-9 lg:border-r lg:border-b-0">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#D9AE5A]">
                Correspondence channel
              </p>

              <div className="mt-7 space-y-4">
                <a
                  href="mailto:itskhansaehsan@gmail.com"
                  className="block border border-[#D9AE5A]/15 bg-[#140A18]/35 p-5 transition hover:border-[#D9AE5A]/45"
                >
                  <p className="text-[0.62rem] uppercase tracking-[0.16em] text-[#C1B4B0]">
                    Email
                  </p>
                  <p className="mt-2 text-sm text-[#F6EEDF]">
                    itskhansaehsan@gmail.com
                  </p>
                </a>

                <div className="border border-[#D9AE5A]/15 bg-[#140A18]/35 p-5">
                  <p className="text-[0.62rem] uppercase tracking-[0.16em] text-[#C1B4B0]">
                    Base location
                  </p>
                  <p className="mt-2 text-sm text-[#F6EEDF]">
                    Lahore, Pakistan · Remote friendly
                  </p>
                </div>

                <div className="border border-[#D9AE5A]/15 bg-[#140A18]/35 p-5">
                  <p className="text-[0.62rem] uppercase tracking-[0.16em] text-[#C1B4B0]">
                    Opportunities
                  </p>
                  <p className="mt-2 text-sm text-[#F6EEDF]">
                    Junior roles · Internships · Freelance projects ·
                    Collaboration
                  </p>
                </div>
              </div>

              <div className="mt-8 border-t border-[#D9AE5A]/15 pt-6">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#D9AE5A]">
                  External networks
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="https://github.com/Khansa-21"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-[#D9AE5A]/30 px-4 py-2 text-xs font-semibold text-[#F0CE86] transition hover:bg-[#D9AE5A] hover:text-[#140A18]"
                  >
                    GitHub ↗
                  </a>

                  <a
                    href="https://www.linkedin.com/in/khansa-ehsan-274282285"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-[#D9AE5A]/30 px-4 py-2 text-xs font-semibold text-[#F0CE86] transition hover:bg-[#D9AE5A] hover:text-[#140A18]"
                  >
                    LinkedIn ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Visual-only form */}
            <div className="p-7 sm:p-9">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#D9AE5A]">
                Write a message
              </p>

              <p className="mt-3 max-w-xl text-sm leading-6 text-[#C1B4B0]">
                Share a role, collaboration idea, or project brief. Email is the
                fastest way to reach me.
              </p>

              <div className="mt-9 grid gap-7 sm:grid-cols-2">
                <label className="block">
                  <span className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#C1B4B0]">
                    Your name
                  </span>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="mt-3 w-full border-b border-[#D9AE5A]/25 bg-transparent px-0 py-3 text-sm text-[#F6EEDF] outline-none placeholder:text-[#C1B4B0]/60 focus:border-[#D9AE5A]"
                  />
                </label>

                <label className="block">
                  <span className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#C1B4B0]">
                    Email address
                  </span>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="mt-3 w-full border-b border-[#D9AE5A]/25 bg-transparent px-0 py-3 text-sm text-[#F6EEDF] outline-none placeholder:text-[#C1B4B0]/60 focus:border-[#D9AE5A]"
                  />
                </label>
              </div>

              <label className="mt-7 block">
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#C1B4B0]">
                  Project scope or opportunity
                </span>
                <textarea
                  rows={5}
                  placeholder="Tell me what you are building or the role you have in mind..."
                  className="mt-3 w-full resize-none border-b border-[#D9AE5A]/25 bg-transparent px-0 py-3 text-sm leading-6 text-[#F6EEDF] outline-none placeholder:text-[#C1B4B0]/60 focus:border-[#D9AE5A]"
                />
              </label>

              <div className="mt-9 flex flex-wrap items-center justify-between gap-4">
                <a
                  href="mailto:itskhansaehsan@gmail.com"
                  className="rounded-full border border-[#D9AE5A]/70 px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[#F0CE86] transition hover:bg-[#D9AE5A] hover:text-[#140A18]"
                >
                  Send email ↗
                </a>

                <p className="text-xs text-[#C1B4B0]">
                  Usually responds within 24–48 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#D9AE5A]/20 px-6 pt-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="border-b border-[#D9AE5A]/20 pb-16 text-center">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-[#D9AE5A]">
              End note
            </p>

            <h2 className="footer-thanks-reveal mt-5 font-display text-6xl leading-none text-[#F6EEDF] sm:text-7xl lg:text-8xl">
              Thank <span className="gold-shimmer italic text-[#F0CE86]">you.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-6 text-[#C1B4B0]">
              Thank you for taking the time to review my work. I am open to
              junior frontend and full-stack roles, internships, freelance work,
              and thoughtful collaboration.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:itskhansaehsan@gmail.com"
                className="rounded-full border border-[#D9AE5A]/70 px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[#F0CE86] transition hover:bg-[#D9AE5A] hover:text-[#140A18]"
              >
                Email me ↗
              </a>
              <a
                href="https://wa.me/923075588497?text=Hi%20Khansa%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect."
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#D9AE5A]/30 px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[#C1B4B0] transition hover:border-[#D9AE5A]/70 hover:text-[#F0CE86]"
              >
                WhatsApp ↗
              </a>
              <a
                href="#home"
                className="rounded-full border border-[#D9AE5A]/30 px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[#C1B4B0] transition hover:border-[#D9AE5A]/70 hover:text-[#F0CE86]"
              >
                Back to top ↑
              </a>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-[#D9AE5A]/20 pt-6 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#C1B4B0] sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Khansa Ehsan · Built with care</p>
            <div className="flex items-center justify-center gap-5 sm:justify-end">
              <a
                href="https://github.com/Khansa-21"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-[#F0CE86]"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/khansa-ehsan-274282285"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-[#F0CE86]"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/923075588497?text=Hi%20Khansa%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect."
        target="_blank"
        rel="noreferrer"
        aria-label="Message Khansa on WhatsApp"
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full border border-[#D9AE5A]/70 bg-[#28122D] px-4 py-3 text-xs font-bold uppercase tracking-[0.1em] text-[#F0CE86] shadow-[0_12px_30px_rgba(0,0,0,0.28)] transition hover:-translate-y-1 hover:bg-[#D9AE5A] hover:text-[#140A18]"
      >
        <MessageCircle size={17} strokeWidth={1.8} />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </main>
  );
}
