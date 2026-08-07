import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { catPillars, frameworkSteps } from "@/app/data/content";

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-slate-950 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-brand-600/25 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-accent-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            dark
            eyebrow="Strategic Skill Enhancement"
            title="The CAT Framework — a proven approach"
            description="How we deliver results that matter through a structured, three-step path to skill development."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {catPillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 100}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur transition-all duration-300 hover:border-brand-400/40 hover:bg-white/10">
                <span className="font-display text-5xl font-extrabold text-brand-400/40">
                  {["C", "A", "T"][i]}
                </span>
                <h3 className="mt-4 font-display text-xl font-bold text-white">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {pillar.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20">
          <Reveal>
            <div className="mb-12 flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-lg shadow-brand-600/40">
                <Icon name="target" className="h-6 w-6" />
              </span>
              <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                How we deliver results that matter
              </h3>
            </div>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-3">
            {frameworkSteps.map((step, i) => (
              <Reveal key={step.number} delay={i * 100}>
                <div className="relative h-full rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                  <span className="absolute -top-5 left-8 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent-400 to-accent-600 font-display text-sm font-extrabold text-slate-950 shadow-lg shadow-accent-500/30">
                    {step.number}
                  </span>
                  <h4 className="mt-4 font-display text-lg font-bold text-white">{step.title}</h4>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                    {step.description}
                  </p>
                  {i < frameworkSteps.length - 1 ? (
                    <Icon
                      name="arrowRight"
                      className="absolute top-1/2 -right-4 hidden h-6 w-6 -translate-y-1/2 text-brand-400 lg:block"
                    />
                  ) : null}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
