import Icon from "./Icon";
import { stats } from "@/app/data/content";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-slate-950 pt-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-brand-600/30 blur-3xl" />
        <div className="absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-accent-500/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(148,163,184,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.15) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-16 sm:px-6 sm:pt-24 lg:px-8 lg:pt-28">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-brand-200 uppercase">
              <Icon name="sparkles" className="h-3.5 w-3.5" />
              For forward-looking enterprises
            </span>

            <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-white text-balance sm:text-5xl lg:text-6xl">
              Next-Gen Expertise for Your{" "}
              <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-accent-400 bg-clip-text text-transparent">
                Enterprise
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300 text-balance">
              Cultivate high-performance teams through expert-led learning — tailored
              programs, industry insights, and measurable impact that moves business
              outcomes.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-brand-600/40 transition-all hover:bg-brand-500"
              >
                Book a Free Consultation
                <Icon name="arrowRight" className="h-4 w-4" />
              </a>
              <a
                href="#programs"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:border-white/40 hover:bg-white/10"
              >
                Explore Programs
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4 text-sm text-slate-400">
              <div className="flex -space-x-2">
                {["AR", "RM", "SI", "PK"].map((initials, i) => (
                  <span
                    key={initials}
                    className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-slate-950 text-xs font-semibold text-white ${
                      ["bg-brand-500", "bg-accent-500", "bg-slate-600", "bg-brand-700"][i]
                    }`}
                  >
                    {initials}
                  </span>
                ))}
              </div>
              <p>
                Trusted by <span className="font-semibold text-white">50+ enterprises</span>{" "}
                to upskill their teams
              </p>
            </div>
          </div>

          <div className="animate-fade-up-slow hidden lg:block">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-500/30 to-accent-500/20 blur-2xl" />
              <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-rose-400/80" />
                    <span className="h-3 w-3 rounded-full bg-accent-400/80" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                  </div>
                  <span className="text-xs font-medium text-slate-400">
                    Upskilling Dashboard
                  </span>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    { label: "Completion", value: "92%" },
                    { label: "Engagement", value: "4.8/5" },
                    { label: "ROI", value: "2.4x" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-white/10 bg-white/5 p-3 text-center"
                    >
                      <p className="font-display text-lg font-bold text-white">{stat.value}</p>
                      <p className="text-[11px] text-slate-400">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 space-y-3">
                  {[
                    { name: "Gen-AI Mastery", pct: 88, color: "from-brand-500 to-brand-300" },
                    { name: "Data Science & ML", pct: 76, color: "from-accent-500 to-accent-300" },
                    { name: "Leadership Elevation", pct: 64, color: "from-emerald-500 to-emerald-300" },
                  ].map((row) => (
                    <div
                      key={row.name}
                      className="rounded-xl border border-white/10 bg-white/5 p-3.5"
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-slate-200">{row.name}</span>
                        <span className="font-semibold text-white">{row.pct}%</span>
                      </div>
                      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${row.color}`}
                          style={{ width: `${row.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-3 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-3.5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-400/20 text-emerald-300">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  <p className="text-xs leading-snug text-slate-300">
                    <span className="font-semibold text-white">Skills gap closing:</span>{" "}
                    31 skills acquired this quarter
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-white/5 backdrop-blur">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
