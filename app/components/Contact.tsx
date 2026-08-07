import ContactForm from "./ContactForm";
import Icon from "./Icon";
import Reveal from "./Reveal";

const benefits = [
  "Free skill-gap assessment for your team",
  "Custom upskilling roadmap within 48 hours",
  "Zero-obligation consultation with our L&D experts",
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-slate-50 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-brand-600/10 blur-3xl" />
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-accent-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-brand-700 uppercase">
                <Icon name="calendar" className="h-3.5 w-3.5" />
                Get started today
              </span>
              <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-slate-900 text-balance sm:text-4xl">
                Ready to upskill your workforce at scale?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                Book a free strategy session with our enterprise L&D experts. We&apos;ll assess
                your team&apos;s skill gaps and design a custom learning program aligned to your
                business goals.
              </p>

              <ul className="mt-8 space-y-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                      <Icon name="check" className="h-3 w-3" />
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>

              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-slate-200 pt-8">
                {[
                  { value: "24h", label: "Response time" },
                  { value: "7", label: "Domains covered" },
                  { value: "300+", label: "Expert mentors" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="font-display text-2xl font-extrabold text-brand-700">
                      {item.value}
                    </p>
                    <p className="text-xs text-slate-500">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8">
              <div className="mb-6">
                <h3 className="font-display text-xl font-bold text-slate-900">
                  Request a consultation
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Fill this in and our team will reach out shortly.
                </p>
              </div>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
