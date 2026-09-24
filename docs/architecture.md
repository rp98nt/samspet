# Architecture

## Stack

- **Next.js 16** (App Router, `src/app/`)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4** (`@import "tailwindcss"` + `@theme inline`)

## Directory layout

```
src/
  app/
    layout.tsx          # Fonts, TopBar, SiteHeader, SiteFooter
    page.tsx            # Composes all home sections
    globals.css         # Design tokens + utility classes
  components/
    home/               # One component per mock section
    layout/             # TopBar, SiteHeader, SiteFooter
    icons.tsx           # Inline SVG icons
  data/
    site.ts             # Copy, nav, lists (single source of truth)
public/
  images/design-reference/   # Behance screenshot references
docs/                   # Project documentation (this folder)
```

## Rendering model

- **Server components** by default for sections and layout.
- **Client components:**
  - `SiteHeader` — mobile nav toggle
  - `ConsultationForm` — form submit feedback (no backend yet)

## Data flow

All marketing copy and lists live in `src/data/site.ts`. Components import named exports (`site`, `navLinks`, `services`, etc.). To change phone, email, or section text, edit that file first.

## Styling conventions

- Tailwind utility classes for layout and responsive behavior.
- Shared visual patterns in `globals.css`:
  - `.wood-texture` — services/blog backgrounds
  - `.picket-top` — decorative fence edge above services
  - `.chalkboard` — schedule panel

## Future extensions

| Feature | Suggested approach |
|---------|-------------------|
| Form backend | API route + email/CRM (e.g. Resend, Formspree) |
| Blog posts | MDX under `content/blog` or headless CMS |
| Multi-page nav | App routes per service; keep `site.ts` for shared config |
| Video modal | Client dialog on Why Choose play button |
