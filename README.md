# prajjwalsharma.nz

Astro portfolio site — Phase 0 (foundation) and Phase 1 (Homepage, Resume, About) complete and build-verified.

## Setup

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # serve the production build locally
```

## What's in Phase 0

- **Design tokens** (`src/styles/global.css`) — near-black palette, single warm-brass accent
  (`#D98E3C`), Instrument Sans (display/body) + Space Mono (data/utility), one shared easing
  curve, and the signature hairline "node-grid" motif used in the hero and (later) the resume
  timeline connectors.
- **Layouts** — `BaseLayout` (html/head/SEO/fonts/view transitions) → `PageLayout` (adds
  Navbar/MobileNav/Footer). Article/CaseStudy/Project layouts are stubbed in the architecture
  doc and will be added in Phase 2.
- **`ui/` atom library** — Button, Card, GlassPanel, Badge, Tag, SectionHeading, Divider,
  Reveal (scroll-triggered, respects `prefers-reduced-motion`), Icon (small hand-built SVG set).
- **SEO** — `SEOHead.astro` + `StructuredData.astro` (Person schema site-wide), wired through
  `lib/seo.ts`'s `buildMeta()` so every page only needs to pass a title/description.
- **Content Collections** — all 7 collections schema'd in `src/content/config.ts`, each with
  placeholder entries (marked `draft: true` where applicable) so pages render real layout before
  final content is supplied.
- **`/robots.txt`** and `sitemap-index.xml` (via `@astrojs/sitemap`) generate automatically.
- `src/pages/index.astro` is a **temporary stub** proving the foundation renders end to end —
  it gets replaced by the full 10-section homepage in Phase 1.

## Before shipping content

- Add real `.woff2` files to `public/fonts/` (Instrument Sans, Space Mono) — `BaseLayout.astro`
  already references them.
- Add `public/og-default.jpg` (1200×630) — the fallback Open Graph image.
- Confirm the `site` URL in `astro.config.mjs` matches your final domain.
- Swap the LinkedIn/GitHub/email placeholders in `src/data/site.ts`.

## Notes on dependency pinning

`@astrojs/sitemap` is pinned to `3.2.1` — newer 3.7.x releases depend on an Astro routes hook
that isn't present in Astro `4.16.x`. If you upgrade Astro to 5.x later, `@astrojs/sitemap` can
be unpinned and `ViewTransitions` in `BaseLayout.astro` should be renamed to `ClientRouter`
(Astro 5's renamed export).

## What's in Phase 1

- **Homepage** (`src/pages/index.astro`) — all 10 sections per the brief, in order: Hero,
  ValueProposition, FeaturedProjects, FeaturedCaseStudy, CoreExpertise, BusinessPhilosophy,
  CompaniesMarquee, ResumePreview, CTASection. Hero and CTA use the node-grid signature motif;
  FeaturedProjects/FeaturedCaseStudy/ResumePreview pull live data from Content Collections —
  nothing is hardcoded, so real content drops in later with zero component changes.
- **Resume page** (`src/pages/resume.astro`) — the centerpiece. Timeline uses the connected-node
  visual language (small circles on a vertical spine) as the literal signature element tying
  "structured thinking" to the page's form. Includes Achievements strip, Core Competencies,
  Skills Matrix (grouped bars), Education, Tech Stack, and download/LinkedIn/GitHub actions.
- **About page** (`src/pages/about.astro`) — Story, Career Journey, Business & AI Philosophy,
  Vision & Goals, in the two-column eyebrow-label + prose pattern used across long-form pages.
- New data files: `src/data/companies.ts` (target companies marquee), `src/data/skills.ts`
  (skills matrix + core expertise).
- New reusable pieces: `sections/*` (9 homepage organisms), `cards/ProjectCard.astro`,
  `cards/CaseStudyCard.astro`, `resume/*` (6 resume-specific organisms).

## Known placeholders to swap before shipping

- Resume PDF link points to `/resume/prajjwal-sharma-resume.pdf` — add the real file to
  `public/resume/`.
- Achievement stats, competencies, tech stack, and About page copy are reasonable placeholders
  written from your memory context — read them over and tell me what to change.
- Projects/Case Studies still render from the Phase 0 placeholder content entries (marked
  `draft: true` / generic copy) — real entries come in Phase 2.

## What's in Phase 2

- **Projects** ✅ — `src/pages/projects/index.astro` (listing, tag-filterable) and
  `src/pages/projects/[slug].astro` (detail, static-generated from the `projects` collection).
  New `src/layouts/ProjectLayout.astro` is the shared detail-page chrome (back link, eyebrow,
  title, summary, live/repo buttons, tags, optional cover image, stack, rendered Markdown
  body, closing CTA) — written to be adapted for Case Studies and Articles next, not
  redesigned per content type.
  - New `src/components/ui/FilterTabs.astro` — the "Filter tabs" island named in the
    architecture doc as one of the 4 components allowed client-side JS. Framework-free
    (same plain-DOM pattern as `Reveal.astro`): tag buttons toggle a `data-tags` match
    against sibling grid items. Reusable on Case Studies/Gallery by passing a different
    `targetSelector`.
  - Uses `render()` from `astro:content` (not the legacy `entry.render()`) — this is the
    forward-compatible API ahead of the eventual Astro 5 upgrade noted above.

- **Case Studies** ✅ — `src/pages/case-studies/index.astro` (listing, filterable by
  industry) and `src/pages/case-studies/[slug].astro` (detail). New
  `src/layouts/CaseStudyLayout.astro` follows the same chrome pattern as
  `ProjectLayout.astro` but surfaces this collection's own fields instead of forcing a
  shared shape: industry/client eyebrow, problem statement, metrics stat row, approach,
  results list, then the rendered Markdown narrative. Reuses the existing `CaseStudyCard`
  and the same `FilterTabs` island from the Projects work (filtering by industry this time).

- **Research Articles** ✅ — `src/pages/research/index.astro` (listing, filterable by
  category) and `src/pages/research/[slug].astro` (detail). New
  `src/components/cards/ArticleCard.astro` (category badge, reading time via the existing
  `readingTime()` util, publish date) and `src/layouts/ArticleLayout.astro`. This layout
  intentionally uses `max-w-prose` (68ch) for the title/body instead of the wider
  `max-w-content` used by Projects/Case Studies — long-form reading benefits from a
  narrower measure, while the optional cover image still spans the full content width for
  contrast. Same back-link → eyebrow → title → rendered body → closing CTA shape as the
  other two layouts.

- **Certifications** ✅ — `src/pages/certifications/index.astro`. Per request, this is
  deliberately simple: a plain grid, no detail pages, no extra descriptive copy — just
  institution, title, issue date, and (if present) a credential badge image and link. Added
  the first real entry, `src/content/certifications/hubspot-seo.md` (HubSpot Academy SEO
  certification). **`issueDate` is a placeholder (2024-01-01) — update it to the real date
  you earned it.**
- **Gallery** ✅ — `src/pages/gallery/index.astro`. Per request, this is a single CTA panel
  (reusing `GlassPanel` + the node-grid motif as background, same as the homepage CTA)
  pointing to a shared Google Drive folder rather than an in-page grid — so no lightbox
  island was needed after all. The link lives in one place, `SITE.galleryDriveUrl` in
  `src/data/site.ts`, currently a placeholder
  (`https://drive.google.com/drive/folders/REPLACE-WITH-REAL-FOLDER-ID`).
  **Swap that for your real folder link** (and make sure the folder's sharing is set to
  "Anyone with the link"). Also added optional `target`/`rel` support to `Button.astro` so
  this external link opens in a new tab — the only change made to a shared atom.

## Phase 2 complete

All five areas (Projects, Case Studies, Research, Certifications, Gallery) are built.
Remaining placeholder/draft content across collections still needs to be replaced with real
entries before launch — see the draft flags and TODOs called out above.

## What's in Phase 3

- **Prompt Library** ✅ — `src/pages/prompt-library/index.astro`. Same shape as the Gallery
  page: a single CTA panel pointing to a shared Google Drive folder rather than an in-page
  searchable grid, since you're keeping the collection there. Link lives at
  `SITE.promptLibraryDriveUrl` in `src/data/site.ts` — currently a placeholder
  (`https://drive.google.com/drive/folders/REPLACE-WITH-REAL-FOLDER-ID`), **swap for your
  real folder link**. The `prompts` content collection schema is still in
  `src/content/config.ts` in case you want it later, but its placeholder entry was removed
  since the page no longer reads from it.
- **Contact** ✅ — `src/pages/contact.astro`. Left column: WhatsApp, LinkedIn, GitHub, and
  Email as link cards (reusing `Card.astro`). Right column: an inquiry form inside a
  `GlassPanel`. New pieces:
  - `src/components/ui/Input.astro` / `Textarea.astro` — small reusable form atoms (label +
    control), same tier as the rest of `ui/`.
  - `src/components/forms/ContactForm.astro` — the "Contact form" island named in the
    architecture doc as the 4th and last component allowed client-side JS. Framework-free,
    same pattern as `Reveal`/`FilterTabs`. **Important:** GitHub Pages can't run server code,
    so the form POSTs to a third-party endpoint — `SITE.contactFormEndpoint` in
    `src/data/site.ts`, currently a placeholder. **Sign up at
    [formspree.io](https://formspree.io) (free tier is enough), create a form, and paste its
    endpoint URL in** (e.g. `https://formspree.io/f/abcdwxyz`). Until you do, submitting shows
    a message pointing people to your email instead of silently failing. It also has a
    honeypot field (`_gotcha`) for basic spam filtering — Formspree's documented pattern.
  - Added optional `target`/`rel` support to `Card.astro` (same change already made to
    `Button.astro` for Gallery) so the WhatsApp/LinkedIn/GitHub links open in a new tab.
  - `Icon.astro` gained a generic `chat-bubble` icon for the WhatsApp link — deliberately not
    the WhatsApp logo itself, to stay clear of reproducing trademarked brand marks.
  - **`SITE.socials.whatsapp` is a placeholder number** (`https://wa.me/64000000000`) —
    replace with your real number in international format (no `+`, no leading `0`, no
    spaces), e.g. `https://wa.me/64211234567`.

## Case studies — interactive display + downloadable reports

- **Real case study added**: `src/content/case-studies/zephyr-coffee-transformation.md` — your
  Zephyr Coffee Co. demonstration engagement, replacing the old placeholder entry.
- **Schema extended** (`src/content/config.ts`) with two new optional fields on case studies:
  - `disclaimer` — a short italic note shown near the top of the case study page. Use this for
    confidentiality context (e.g. "names fictionalized for a demonstration engagement").
  - `downloadUrl` — path to a file in `/public` (PDF, .md, whatever you like). When set, a
    "Download full report" button appears next to the metrics strip on the case study page.
- **"Explore the engagement" accordion** — a new `.cs-accordion` component (styled in
  `global.css`, using plain HTML `<details>`/`<summary>` — zero JavaScript, so it doesn't
  count against the "4 hydrated components" rule) lets a long case study break into expandable
  sections instead of one long scroll. This is what keeps the page scannable while still
  holding the full narrative. Markup pattern for future case studies:
  ```html
  <div class="cs-accordion not-prose">
    <details open>
      <summary>Section title</summary>
      <div class="cs-panel">

  - a normal markdown list works fine in here, just leave blank lines around it

      </div>
    </details>
  </div>
  ```
- **Adding future case studies**: just drop a new `.md` file into `src/content/case-studies/`
  with the same frontmatter shape (see the Zephyr file as a template) — `problem`/`approach`/
  `results`/`metrics` drive the card and page header automatically, and the accordion is
  optional (a plain narrative body works too).
- **Full report PDF**: generated a branded PDF of the complete Zephyr write-up at
  `public/case-studies/zephyr-coffee-full-report.pdf`, wired up via `downloadUrl`. Swap in
  your own PDF/doc per case study by dropping a file in `public/case-studies/` and pointing
  `downloadUrl` at it.
- **Heads up**: the "Download resume (PDF)" button on the Resume page still points to
  `/resume/prajjwal-sharma-resume.pdf`, which doesn't exist yet in `public/` — that link is a
  placeholder from an earlier phase, not something broken by this round of changes.

## Projects restructured — company-first, not deliverable-first

Projects used to be one card per deliverable. That doesn't scale once one company has 5+
reports against it, so it's now three levels:

1. **`/projects`** — one card per company (`src/content/projects/<company-slug>.md`). Shows
   industry, summary, deliverable count, and top tags. Filterable by industry.
2. **`/projects/<company>`** — the company overview page (`src/layouts/CompanyLayout.astro`):
   challenge, approach, and a grid of every deliverable for that company.
3. **`/projects/<company>/<deliverable>`** — one full deliverable
   (`src/layouts/DeliverableLayout.astro`), same shape as a case study page, with an optional
   download button.

**Adding a new company**: one file in `src/content/projects/`, one folder in
`src/content/deliverables/<company-slug>/` with one `.md` per report. The `business` field in
each deliverable's frontmatter must match the company's slug (its filename minus `.md`).

**Migrated**: Shaviv Nail Studio's two existing write-ups (Executive Business Diagnostic,
Digital Growth Strategy) into this structure — nothing lost, content is identical, only the
frontmatter shape and file location changed. Also removed `placeholder-project-one.md` /
`placeholder-project-two.md`, which were written against the old flat schema and would have
failed content-collection validation under the new one.

**Removed**: the old flat `src/pages/projects/[slug].astro`, `ProjectLayout.astro`, and
`ProjectCard.astro` — replaced by the two-level structure above.

## Phase 3 complete

## Fixes — resume data + visual bugs (this round)

- **Resume data corrected** — replaced the old placeholder CV data (wrong company/role) with
  your real career history from the updated resume: all 6 roles now live as real entries in
  `src/content/experience/`, plus updated Professional Summary, Achievements strip, Core
  Competencies, Skills Matrix, Tech Stack, and Education on `resume.astro` and its supporting
  components/data files. Contact details in `src/data/site.ts` (email, LinkedIn, WhatsApp)
  updated to match.
- **Fixed: professional summary hidden by a black mask** — root cause was the `.node-grid`
  utility's `mask-image` being applied directly to content-bearing sections (the Resume page's
  summary block, and the homepage/Gallery CTA panel), which clips the *whole element's*
  rendered pixels — including the text — outside its ellipse, not just the background pattern.
  Split this into two classes in `global.css`: `.node-grid` (plain dot pattern, safe anywhere)
  and `.node-grid-fade` (adds the mask, and is now only ever applied to an isolated
  `absolute inset-0 -z-10` decorative layer, the same pattern the Hero section already used
  correctly). Updated `resume.astro` and `CTASection.astro` to match.
- **Nav bar polish** — the header used to be fully transparent until ~8px of scroll, then
  jump straight to a solid glass background. It now carries a subtle permanent glass base
  from the top of the page and deepens smoothly on scroll, so page content never shows
  directly through/behind the bar. If you're still seeing a specific overlap on a particular
  page/device, send a screenshot and we'll chase that exact spot down.
 — all four phases done

## Next: Phase 4

SEO/perf/accessibility hardening, deploy.
