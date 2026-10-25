"use client";

import { useState } from "react";

type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Data"
  | "Security"
  | "Delivery & Tools";
type OrbitRing = "inner" | "middle" | "outer";

type Skill = {
  name: string;
  category: SkillCategory;
  ring: OrbitRing;
};

const skills: Skill[] = [
  { name: "TypeScript", category: "Frontend", ring: "inner" },
  { name: "Angular", category: "Frontend", ring: "inner" },
  { name: "React", category: "Frontend", ring: "inner" },
  { name: "Node.js", category: "Backend", ring: "inner" },
  { name: "JWT", category: "Backend", ring: "inner" },
  { name: "Express", category: "Backend", ring: "inner" },
  { name: "API integrations", category: "Backend", ring: "inner" },

  { name: "Tailwind CSS", category: "Frontend", ring: "middle" },
  { name: "HTML5", category: "Frontend", ring: "middle" },
  { name: "CSS3 / SCSS", category: "Frontend", ring: "middle" },
  { name: "MongoDB", category: "Data", ring: "middle" },
  { name: "SQL Server", category: "Data", ring: "middle" },
  { name: "Mongoose", category: "Data", ring: "middle" },
  { name: "Zod", category: "Security", ring: "middle" },
  { name: "CORS", category: "Security", ring: "middle" },
  { name: "node-cron", category: "Backend", ring: "middle" },
  { name: "Upstash", category: "Data", ring: "middle" },

  { name: "Redux Toolkit", category: "Frontend", ring: "outer" },
  { name: "RxJS", category: "Frontend", ring: "outer" },
  { name: "REST APIs", category: "Backend", ring: "outer" },
  { name: "Microsoft Azure", category: "Data", ring: "outer" },
  { name: "Sequelize", category: "Data", ring: "outer" },
  { name: "Arcjet", category: "Security", ring: "outer" },
  { name: "bcrypt", category: "Security", ring: "outer" },
  { name: "Git / GitHub", category: "Delivery & Tools", ring: "outer" },
  { name: "npm", category: "Delivery & Tools", ring: "outer" },
  { name: "Vercel", category: "Delivery & Tools", ring: "outer" },
  { name: "Render", category: "Delivery & Tools", ring: "outer" },
  { name: "Netlify", category: "Delivery & Tools", ring: "outer" },
  { name: "Postman", category: "Delivery & Tools", ring: "outer" },
  { name: "WordPress", category: "Delivery & Tools", ring: "outer" },
  { name: "SEO", category: "Delivery & Tools", ring: "outer" },
];

const skillLedger = [
  {
    category: "Frontend",
    tools: ["React", "Angular", "TypeScript", "Tailwind", "SCSS"],
  },
  {
    category: "Backend",
    tools: ["Node.js", "Express", "REST APIs", "API integrations", "JWT", "Zod"],
  },
  {
    category: "Data",
    tools: ["MongoDB", "Mongoose", "SQL Server", "Sequelize", "Azure"],
  },
  {
    category: "Security",
    tools: ["Arcjet", "bcrypt", "CORS", "Validation", "Testing"],
  },
  {
    category: "Delivery & Tools",
    tools: [
      "VS Code",
      "Git/GitHub",
      "npm",
      "Postman",
      "Vercel",
      "Render",
      "Netlify",
      "WordPress",
      "Microsoft 365",
      "AI assistants",
      "SEO",
    ],
  },
] as const;

const categoryColors: Record<SkillCategory, string> = {
  Frontend: "bg-[#E5B961]",
  Backend: "bg-[#F08FC0]",
  Data: "bg-[#63DCE8]",
  Security: "bg-[#9FE18F]",
  "Delivery & Tools": "bg-[#B9A4FF]",
};

const ringRadius: Record<OrbitRing, number> = {
  inner: 23,
  middle: 35,
  outer: 48,
};

const ringStartAngle: Record<OrbitRing, number> = {
  inner: -90,
  middle: -72,
  outer: -84,
};

export default function SkillsConstellation() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | null>(
    null,
  );

  function getSkillPosition(skill: Skill) {
    const skillsOnSameRing = skills.filter((item) => item.ring === skill.ring);

    const index = skillsOnSameRing.findIndex(
      (item) => item.name === skill.name,
    );

    const angle =
      ringStartAngle[skill.ring] + (index / skillsOnSameRing.length) * 360;

    const angleInRadians = (angle * Math.PI) / 180;
    const radius = ringRadius[skill.ring];

    const left = 50 + radius * Math.cos(angleInRadians);
    const top = 50 + radius * Math.sin(angleInRadians);

    return {
      left: `${left.toFixed(3)}%`,
      top: `${top.toFixed(3)}%`,
    };
  }

  return (
    <div className="grid items-start gap-10 xl:grid-cols-[minmax(28rem,31rem)_minmax(34rem,1fr)] xl:gap-12">
      <div className="xl:max-w-[31rem]">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D9AE5A]">
          02 · Technical skills
        </p>

        <h2 className="mt-4 font-display text-4xl leading-[0.9] sm:text-5xl">
          A constellation
          <span className="block italic text-[#F0CE86]">of tools.</span>
        </h2>

        <p className="mt-6 max-w-2xl text-sm leading-7 text-[#C1B4B0]">
          Core technologies and day-to-day tools used to build, secure, test,
          and ship web applications.
        </p>

        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {skillLedger.map(({ category, tools }, index) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                aria-pressed={isActive}
                onClick={() =>
                  setActiveCategory((current) =>
                    current === category ? null : category,
                  )
                }
                className={`group min-h-[8.5rem] w-full border border-[#D9AE5A]/20 p-4 text-left transition ${
                  isActive
                    ? "bg-[#28122D] border-[#F0CE86]"
                    : "bg-[#1A0C1E]/75 hover:border-[#D9AE5A]/55 hover:bg-[#28122D]/70"
                } ${category === "Delivery & Tools" ? "md:col-span-2" : ""}`}
              >
                <span className="flex h-4 items-center gap-3 text-[0.7rem] font-semibold uppercase leading-none tracking-[0.14em] text-[#D9AE5A]">
                  <span className="text-[#D9AE5A]">0{index + 1}</span>
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${categoryColors[category]}`}
                  />
                  {category}
                </span>

                <span className="mt-3 flex flex-wrap content-start gap-2">
                  {tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-[#D9AE5A]/35 bg-[#28122D]/35 px-2.5 py-1.5 text-[0.75rem] font-medium leading-none text-[#F6EEDF] shadow-[0_1px_8px_rgba(217,174,90,0.07)] transition group-hover:border-[#D9AE5A]/60 group-hover:bg-[#28122D]/60"
                    >
                      {tool}
                    </span>
                  ))}
                </span>
              </button>
            );
          })}

        </div>

        <p className="mt-4 text-[0.65rem] uppercase tracking-[0.16em] text-[#C1B4B0]">
          {activeCategory
            ? `Showing ${activeCategory} in the constellation. Select again to reset.`
            : "Select a card to filter the constellation below."}
        </p>

        <div className="mt-6 border-t border-[#D9AE5A]/20 pt-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D9AE5A]">
            Currently learning
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {["Next.js", "Advanced TypeScript", "Python", "Testing & quality"].map(
              (item) => (
                <span
                  key={item}
                  className="learning-pill rounded-full border border-dashed border-[#D9AE5A]/45 px-3 py-1.5 text-[0.75rem] leading-none text-[#C1B4B0]"
                >
                  {item}
                </span>
              ),
            )}
          </div>
        </div>

      </div>

      <div className="relative mx-auto hidden aspect-square w-[min(100%,38rem)] overflow-visible md:block xl:mt-[10.5rem]">
        <div
          className={`orbit-inner absolute inset-0 ${
            activeCategory ? "orbit-paused" : ""
          }`}
        >
          <div className="orbit-track absolute inset-[27%] rounded-full border border-[#D9AE5A]/35" />
        </div>

        <div
          className={`orbit-middle absolute inset-0 ${
            activeCategory ? "orbit-paused" : ""
          }`}
        >
          <div className="orbit-track absolute inset-[16%] rounded-full border border-dashed border-[#D9AE5A]/30" />
        </div>

        <div
          className={`orbit-outer absolute inset-0 ${
            activeCategory ? "orbit-paused" : ""
          }`}
        >
          <div className="orbit-track absolute inset-[5%] rounded-full border border-[#D9AE5A]/30" />
        </div>

        {skills.map((skill) => {
          const isHighlighted =
            activeCategory === null || activeCategory === skill.category;

          const labelSize =
            skill.ring === "outer"
              ? "text-[0.65rem]"
              : skill.ring === "middle"
                ? "text-[0.7rem]"
                : "text-xs";

          return (
            <span
              key={skill.name}
              style={getSkillPosition(skill)}
              className={`skill-node absolute z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-semibold text-[#F6EEDF] transition duration-300 ${labelSize} ${
                isHighlighted ? "opacity-100" : "opacity-20"
              }`}
            >
              <span
                className={`mr-2 inline-block h-2 w-2 rounded-full ${categoryColors[skill.category]}`}
              />
              {skill.name}
            </span>
          );
        })}

        <div className="absolute left-1/2 top-1/2 z-20 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#D9AE5A] bg-[#1D0D22] shadow-[0_0_55px_rgba(217,174,90,0.16)]">
          <span className="font-display text-4xl text-[#F0CE86]">KE</span>
          <span className="mt-1 text-[0.55rem] uppercase tracking-[0.2em] text-[#C1B4B0]">
            Full-stack core
          </span>
        </div>
      </div>

    </div>
  );
}
