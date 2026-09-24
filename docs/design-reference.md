# Design reference

## Source

- **Behance gallery:** [Dog Trainer Website Design & Website Branding](https://www.behance.net/gallery/199142029/Dog-Trainer-Website-Design-Website-Branding)
- **Brand in mock:** Kim The Dog Trainer (Austin, TX)
- **Implementation:** Single-page marketing site in Next.js with section components matching the mock scroll order.

## Screenshot map (top → bottom)

| File | Mock section |
|------|----------------|
| `01-section.jpg` | Top bar, navigation, hero + consultation form |
| `02-section.jpg` | Services We Offer (wood texture, four cards) |
| `03-section.jpg` | Why Choose Kim (video + checklist) |
| `04-section.jpg` | Dark benefits strip + schedule intro |
| `05-section.jpg` | Schedule & Upcoming Classes (chalkboard) |
| `06-section.png` | After Our Training (goals around dog) |
| `07-section.png` | Licenses & certifications + testimonials |
| `08-section.jpg` | Blog, green CTA banner, footer |

Files are stored under `public/images/design-reference/`.

## Color palette (CSS variables)

Defined in `src/app/globals.css`:

| Token | Hex | Usage |
|-------|-----|--------|
| `--brand-green` | `#8cc63f` | Primary CTAs, stars, accents |
| `--brand-green-dark` | `#76c043` | Hover states, phone highlights |
| `--brand-teal` | `#3eb8b0` | Form title, service card overlays |
| `--brand-sky` | `#a5d8dd` | Schedule section background |
| `--brand-charcoal` | `#1a1a1a` | Footer, dark strips, form panel |
| `--brand-link` | `#4a90e2` | Email and chalkboard links |
| `--brand-chalk` | `#2d3436` | Chalkboard surface |
| `--brand-chalk-accent` | `#a3c644` | Chalkboard column headings |

## Typography

- **Headings / nav / buttons:** Montserrat (`--font-montserrat`)
- **Body:** Open Sans (`--font-open-sans`)

Loaded in `src/app/layout.tsx` via `next/font/google`.

## Assets note

Photography in the live site uses [Unsplash](https://unsplash.com) URLs configured in `next.config.ts`. Replace with licensed brand photography when available. Logo in the header is a text placeholder inside a circle; swap for a real logo asset in `public/`.
