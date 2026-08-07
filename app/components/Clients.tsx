import { clients } from "@/app/data/content";

export default function Clients() {
  const doubled = [...clients, ...clients];

  return (
    <section className="border-b border-slate-100 bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold tracking-widest text-slate-400 uppercase">
          Trusted by institutions & enterprises
        </p>
        <div className="relative mt-8 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
          <div className="animate-marquee flex w-max items-center gap-4">
            {doubled.map((client, i) => (
              <span
                key={`${client}-${i}`}
                className="flex h-14 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 px-8 font-display text-base font-semibold whitespace-nowrap text-slate-500"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
