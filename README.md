# Accredian Enterprise — Landing Page Clone

A responsive, production-ready partial clone of the [Accredian Enterprise](https://enterprise.accredian.com/) landing page, built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS v4**.

## Live Demo & Repo

- **Live link:** (deployed on Vercel — see "Deploy on Vercel" below)
- **GitHub repo:** https://github.com/wohnnetz-arijeet/accredian-enterprise

## Tech Stack

| Layer        | Choice                                       |
| ------------ | -------------------------------------------- |
| Framework    | Next.js 16 (App Router, React 19)            |
| Language     | TypeScript (strict)                          |
| Styling      | Tailwind CSS v4 (design tokens via `@theme`) |
| Fonts        | Geist + Sora via `next/font/google`          |
| API          | Next.js Route Handler (`/api/leads`)         |
| Animations   | CSS keyframes + IntersectionObserver reveals |

## Features

- Sticky navbar with scroll-aware blur + mobile hamburger menu
- Hero with stats bar and an in-browser "Upskilling Dashboard" mock
- Infinite client-logo marquee
- The Accredian Edge (value props)
- Domain Expertise grid (7 domains + custom-program CTA card)
- Filterable program catalog (All / Program Specific / Role Based / Industry Based)
- CAT Framework + 3-step delivery process
- Testimonials, FAQ accordion
- **Lead capture form** with client-side validation → POST `/api/leads`
  (server-side validation, in-memory storage, GET list endpoint)
- Fully responsive mobile ↔ desktop, smooth anchor navigation

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Command          | Purpose                          |
| ---------------- | -------------------------------- |
| `npm run dev`    | Start dev server                 |
| `npm run build`  | Production build                 |
| `npm run start`  | Serve production build           |
| `npm run lint`   | Run ESLint                       |

## Project Structure

```
accredian-enterprise/
├── app/
│   ├── api/leads/route.ts        # Lead capture API (POST + GET)
│   ├── components/               # Reusable UI components
│   │   ├── Navbar.tsx            # Sticky nav + mobile menu (client)
│   │   ├── Hero.tsx              # Hero + stats + dashboard mock
│   │   ├── Clients.tsx           # Logo marquee
│   │   ├── Edge.tsx              # Value propositions
│   │   ├── Domains.tsx           # Domain expertise grid
│   │   ├── Programs.tsx          # Filterable program catalog (client)
│   │   ├── Process.tsx           # CAT framework + delivery steps
│   │   ├── Testimonials.tsx      # Partner quotes
│   │   ├── FAQ.tsx               # Accordion (client)
│   │   ├── Contact.tsx           # Contact CTA layout
│   │   ├── ContactForm.tsx       # Lead form (client, validated)
│   │   ├── Reveal.tsx            # Scroll-reveal wrapper (client)
│   │   ├── SectionHeading.tsx    # Reusable section header
│   │   └── Icon.tsx              # Inline SVG icon system
│   ├── data/content.ts           # All content as typed data
│   ├── globals.css               # Tailwind theme tokens
│   ├── layout.tsx                # Root layout + metadata
│   └── page.tsx                  # Composes the landing page
└── ...
```

## Approach

1. **Reference analysis** — Studied the live Accredian Enterprise page and mapped its sections (Hero → Edge → Domain Expertise → Course Segmentation → CAT Framework → Testimonials → FAQ → Contact → Footer), then reconstructed each with original copy and layout.
2. **Design system first** — Defined brand colors, fonts, and animations as Tailwind tokens in `globals.css` before writing components, so every section stays consistent.
3. **Reusable components** — Each section is an isolated component; `SectionHeading`, `Reveal`, `Icon`, and the `content.ts` data layer mean sections are data-driven and easy to extend.
4. **Client vs. server split** — Server components render static content; only interactive pieces (`Navbar`, `Programs` filter, `FAQ`, `Reveal`, `ContactForm`) are `"use client"`.
5. **Bonus: API integration** — The lead form posts to `/api/leads`, which validates, stores in memory, and returns a 201; a `GET` endpoint lists captured leads. (See notes below.)
6. **Quality gates** — `next build` and `npm run lint` pass cleanly.

## AI Usage

This project was built in a single assisted session. AI (Claude) helped with:

- Scaffolding the full component architecture and initial code for all 14 components, the data layer, and the API route
- Designing the design system (color palette, typography pairing of Geist + Sora, spacing scale)
- Drafting realistic placeholder content based on the real site's structure and Accredian's actual offerings
- Debugging lint/build issues (unescaped entities, unused imports, `setState`-in-effect rule)

**What I modified/improved manually:**

- Restructured the layout into a clean server/client component split for performance
- Rewrote the `Reveal` scroll-animation logic to use a single IntersectionObserver per element and respect the "no synchronous setState in effects" React rule
- Designed the mock dashboard graphic and the custom-program CTA card by hand
- Hardened the lead API with explicit field-length checks and a strict email regex, plus a manual end-to-end test (POST → 201, invalid → 400, GET → count)
- Fixed all ESLint findings and verified a clean production build

## API Notes

- `POST /api/leads` — validates and stores a lead in memory. Returns `201` with an id.
- `GET /api/leads` — returns the current in-memory lead list (useful for local testing).
- Storage is intentionally in-memory (stateless serverless); for production, swap in a database (e.g., Postgres via Vercel storage, or a CRM like HubSpot/Salesforce) in `route.ts`.

## Improvements With More Time

- **Persistence** — wire the lead API to a real database instead of in-memory storage
- **Auth** — protected `/admin` dashboard to view captured leads
- **CMS** — move programs/testimonials/FAQs to Sanity or Contentful for non-developer editing
- **Animations** — add Framer Motion for scroll-triggered reveals and page transitions
- **Search** — full-text search across the program catalog
- **i18n / theming** — language toggle and dark-mode support
- **Accessibility pass** — keyboard nav audit, focus management for the accordion/menu, reduced-motion handling
- **Analytics & A/B testing** — PostHog/Vercel Analytics with CTA experiments
- **Tests** — unit tests for form validation and the API route, plus Playwright e2e flows

## Deploy on Vercel

Push the repo to GitHub, import it at [vercel.com/new](https://vercel.com/new), and it deploys with zero config (Next.js preset). Framework preset: **Next.js**; build command `next build`; output directory `.next`.

## Disclaimer

This is an educational clone built for an internship assignment. All content, imagery, and branding belong to their respective owners (Accredian).
