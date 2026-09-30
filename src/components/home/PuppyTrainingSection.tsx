import Image from "next/image";
import Link from "next/link";
import { puppyTrainingPage } from "@/data/site";

function CoverIcon({
  type,
}: {
  type: (typeof puppyTrainingPage.cover.items)[number]["icon"];
}) {
  const className =
    "h-[var(--m-icon)] w-[var(--m-icon)] shrink-0 text-[#2d4a2d] sm:h-8 sm:w-8";
  switch (type) {
    case "commands":
      return (
        <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
          <circle cx="11" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M6 24c0-3.5 2.5-6 5-6s5 2.5 5 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="22" cy="16" r="2.5" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M19 22c1-2 2.5-3 4-3 2 0 3.5 2 4 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "house":
      return (
        <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
          <path
            d="M6 14 16 6l10 8v12H6V14Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path d="M13 26v-7h6v7" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "social":
      return (
        <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
          <circle cx="10" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="22" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="16" cy="22" r="3" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M12 14l4 6m4-6-4 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "leash":
      return (
        <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
          <path
            d="M8 8c0 4 3 6 6 6h4c3 0 6-2 6-6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M16 14v10M12 24h8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="16" cy="8" r="2" fill="currentColor" />
        </svg>
      );
    case "shield":
      return (
        <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
          <path
            d="M16 4 8 7.5v7c0 5 4 8.5 8 10 4-1.5 8-5 8-10v-7L16 4Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M12 14l2 2 6-6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

function PawAccent({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <ellipse cx="7" cy="8" rx="2.2" ry="2.8" />
      <ellipse cx="12" cy="6" rx="2.2" ry="2.8" />
      <ellipse cx="17" cy="8" rx="2.2" ry="2.8" />
      <path d="M6 12c1.5 4 4.5 6 6 6s4.5-2 6-6c-2.5 1.5-9.5 1.5-12 0Z" />
    </svg>
  );
}

export function PuppyTrainingSection() {
  const { hero, cover, early, tagline } = puppyTrainingPage;

  return (
    <section
      id="puppy-training"
      className="snap-section flex w-full min-h-0 flex-col overflow-hidden bg-white"
      aria-labelledby="puppy-training-title"
    >
      <div className="relative w-full shrink-0 overflow-hidden">
        <div className="relative min-h-[7.5rem] w-full max-lg:h-[clamp(4.5rem,13svh,7rem)] max-lg:min-h-0 lg:min-h-[9rem]">
          <Image
            src={hero.image}
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="site-container py-4 max-lg:py-0 sm:py-5 lg:py-6">
            <h2
              id="puppy-training-title"
              className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-white max-lg:text-[length:var(--m-fs-h2)] max-lg:leading-tight sm:text-3xl lg:text-4xl"
            >
              {hero.title}
            </h2>
            <p className="mt-1 max-w-md text-sm text-white/95 max-lg:mt-[calc(var(--m-gap)*0.4)] max-lg:text-[length:var(--m-fs)] max-lg:leading-snug sm:mt-2 sm:text-base lg:text-lg">
              {hero.subtitle}
            </p>
            </div>
          </div>
        </div>
      </div>

      {/* Body: on phones the two blocks are spaced evenly (top, between, bottom) */}
      <div className="section-body-scroll site-container flex min-h-0 w-full flex-1 flex-col justify-center py-3 max-lg:justify-evenly max-lg:py-[var(--m-gap)] sm:py-4 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8 lg:py-5">
        <div>
          <h3
            className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-zinc-900 max-lg:text-[length:var(--m-fs-title)] sm:text-2xl"
          >
            {cover.title}
          </h3>
          <ul className="mt-3 space-y-2.5 max-lg:mt-[var(--m-gap)] max-lg:flex max-lg:flex-col max-lg:gap-[calc(var(--m-gap)*0.9)] max-lg:space-y-0 sm:mt-4 sm:space-y-3">
            {cover.items.map((item) => (
              <li key={item.label} className="flex items-center gap-3">
                <CoverIcon type={item.icon} />
                <span className="text-sm text-zinc-800 max-lg:text-[length:var(--m-fs)] sm:text-base">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="mt-5 rounded-2xl bg-[#141f14] px-5 py-5 shadow-lg max-lg:mt-0 max-lg:p-[var(--m-pad)] sm:mt-6 sm:px-6 sm:py-6 lg:mt-0"
        >
          <h3
            className="font-[family-name:var(--font-montserrat)] text-lg font-bold text-brand-green max-lg:text-[length:var(--m-fs-title)] sm:text-xl"
          >
            {early.title}
          </h3>
          <ul className="mt-3 space-y-2 max-lg:mt-[var(--m-gap)] max-lg:flex max-lg:flex-col max-lg:gap-[calc(var(--m-gap)*0.9)] max-lg:space-y-0 sm:mt-4 sm:space-y-2.5">
            {early.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2.5 text-sm text-white max-lg:items-center max-lg:text-[length:var(--m-fs)] sm:text-base">
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-green text-[10px] font-bold text-black max-lg:mt-0 max-lg:h-[clamp(1rem,2.4svh,1.25rem)] max-lg:w-[clamp(1rem,2.4svh,1.25rem)]"
                  aria-hidden
                >
                  ✓
                </span>
                {benefit}
              </li>
            ))}
          </ul>
          <Link
            href={early.ctaHref}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-green px-6 py-3 font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-wide text-black transition hover:bg-brand-green-dark max-lg:mt-[var(--m-pad)] max-lg:py-[var(--m-cta-py)] sm:mt-6 sm:text-sm"
          >
            {early.cta}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>

      <div className="relative w-full shrink-0 overflow-hidden">
        <div className="relative h-14 w-full max-lg:h-[clamp(2.5rem,7svh,3.5rem)] sm:h-16 lg:h-[4.5rem]">
          <Image
          src={tagline.image}
          alt=""
          fill
          className="object-cover object-[center_30%]"
          sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-0 flex items-center">
            <div className="site-container flex w-full justify-center sm:justify-end">
              <p
                className="flex items-center justify-center gap-2 text-center font-[family-name:var(--font-montserrat)] text-sm italic text-white max-lg:text-[length:var(--m-fs)] sm:text-base sm:justify-end sm:text-right lg:text-xl"
              >
                {tagline.text}
                <PawAccent className="h-5 w-5 text-brand-green sm:h-6 sm:w-6" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
