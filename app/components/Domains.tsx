import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { domains } from "@/app/data/content";

export default function Domains() {
  return (
    <section id="domains" className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Our Domain Expertise"
            title="Specialized programs designed to fuel innovation"
            description="Deep, practitioner-led expertise across the domains that are reshaping modern enterprises."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {domains.map((domain, i) => (
            <Reveal key={domain.title} delay={(i % 3) * 90}>
              <div className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-600/10">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 text-white shadow-lg shadow-brand-600/25">
                    <Icon name={domain.icon} className="h-6 w-6" />
                  </span>
                  <span className="rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-600 opacity-0 transition-opacity group-hover:opacity-100">
                    Explore
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-slate-900">
                  {domain.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {domain.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {domain.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal delay={180}>
            <div className="flex h-full flex-col justify-between rounded-2xl bg-gradient-to-br from-brand-700 to-brand-900 p-7 text-white shadow-xl shadow-brand-700/30">
              <div>
                <h3 className="font-display text-lg font-bold">Need a different focus?</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-100">
                  Every engagement is co-designed. Tell us about your team&apos;s goals and
                  we&apos;ll build a program around them.
                </p>
              </div>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white underline decoration-accent-400 decoration-2 underline-offset-4 transition-colors hover:text-accent-200"
              >
                Start a conversation <Icon name="arrowRight" className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
