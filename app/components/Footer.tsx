import Icon from "./Icon";
import { footerLinks } from "@/app/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <a href="#home" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700">
                <Icon name="graduation" className="h-5 w-5 text-white" />
              </span>
              <span className="font-display text-lg font-bold tracking-tight text-white">
                Accredian<span className="text-brand-400"> Enterprise</span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Next-gen expertise for your enterprise. We help organizations cultivate
              high-performance teams through expert-led, industry-aligned learning.
            </p>
            <div className="mt-6 flex gap-3">
              {["linkedin", "twitter", "youtube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-colors hover:border-brand-500 hover:bg-brand-600 hover:text-white"
                >
                  <Icon name={social} className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-semibold tracking-wider text-white uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-400 transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-semibold tracking-wider text-white uppercase">
              Programs
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {footerLinks.programs.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-400 transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-semibold tracking-wider text-white uppercase">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Icon name="mapPin" className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <span className="text-slate-400">
                  Accredian, Gurugram, Haryana, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="mail" className="h-4 w-4 shrink-0 text-brand-400" />
                <a href="mailto:enterprise@accredian.com" className="text-slate-400 hover:text-white">
                  enterprise@accredian.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="phone" className="h-4 w-4 shrink-0 text-brand-400" />
                <a href="tel:+918095158100" className="text-slate-400 hover:text-white">
                  +91 80951 58100
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Accredian Enterprise. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
