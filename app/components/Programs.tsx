"use client";

import { useMemo, useState } from "react";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { programCategories, programs } from "@/app/data/content";

const levelStyles: Record<string, string> = {
  Foundational: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Intermediate: "bg-accent-50 text-accent-700 border-accent-200",
  Advanced: "bg-rose-50 text-rose-700 border-rose-200",
};

export default function Programs() {
  const [active, setActive] = useState<(typeof programCategories)[number]>("All");

  const filtered = useMemo(
    () => (active === "All" ? programs : programs.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section id="programs" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Tailored Course Segmentation"
            title="Custom-fit courses for every professional focus"
            description="Browse our signature programs — each one customizable to your team's level, timeline, and industry."
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {programCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                aria-pressed={active === category}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                  active === category
                    ? "bg-brand-600 text-white shadow-lg shadow-brand-600/25"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-brand-300 hover:text-brand-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((program, i) => (
            <Reveal key={`${active}-${program.title}`} delay={(i % 3) * 80}>
              <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-600/10">
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-semibold ${levelStyles[program.level]}`}
                  >
                    {program.level}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                    <Icon name="clock" className="h-3.5 w-3.5" />
                    {program.duration}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-slate-900">
                  {program.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {program.description}
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="flex items-center gap-2 text-xs font-medium text-slate-500">
                    <Icon name="graduation" className="h-4 w-4 text-brand-600" />
                    {program.institute}
                  </span>
                  <a
                    href="#contact"
                    className="flex items-center gap-1 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-800"
                  >
                    Enquire <Icon name="arrowRight" className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-10 text-center text-sm text-slate-500">
            Don&apos;t see what you need?{" "}
            <a href="#contact" className="font-semibold text-brand-600 underline underline-offset-4">
              Request a custom program →
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
