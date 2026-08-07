import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { testimonials } from "@/app/data/content";

const avatarColors = [
  "bg-gradient-to-br from-brand-500 to-brand-700",
  "bg-gradient-to-br from-accent-500 to-accent-700",
  "bg-gradient-to-br from-emerald-500 to-emerald-700",
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials from our partners"
            title="What our clients are saying"
            description="Leaders across industries on how Accredian elevated their workforce development."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-600/10">
                <Icon name="quote" className="h-8 w-8 text-brand-200" />
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-slate-700">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-4 border-t border-slate-100 pt-5">
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold text-white ${avatarColors[i % avatarColors.length]}`}
                  >
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-500">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
