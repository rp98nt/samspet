import Link from "next/link";
import { site } from "@/data/site";

type HeroCopyProps = {
  layout: "mobile" | "desktop";
};

export function HeroCopy({ layout }: HeroCopyProps) {
  const { hero } = site;
  const isMobile = layout === "mobile";

  if (isMobile) {
    return (
      <div className="text-center text-white">
        <p
          className="flex items-center justify-center gap-2 font-[family-name:var(--font-montserrat)] text-[10px] font-semibold uppercase tracking-[0.18em] text-white/90 sm:text-xs"
        >
          <span className="h-px w-6 bg-brand-green sm:w-8" aria-hidden />
          {hero.eyebrow}
        </p>
        <h1
          className="mt-2 font-[family-name:var(--font-montserrat)] text-[clamp(1.35rem,5vw,2rem)] font-bold leading-[1.12]"
        >
          {hero.titleLead}
          <br />
          <span className="text-brand-green">{hero.titleAccent}</span>
        </h1>
        <p className="mx-auto mt-2 max-w-md text-[clamp(0.7rem,2.5vw,0.875rem)] leading-snug text-white/90">
          {hero.description}
        </p>
        <Link
          href="#consultation"
          className="mt-3 inline-flex items-center gap-2 rounded-full bg-brand-green px-5 py-2 font-[family-name:var(--font-montserrat)] text-[10px] font-bold uppercase tracking-wide text-black transition hover:bg-brand-green-dark sm:text-xs"
        >
          {hero.cta}
          <span aria-hidden>→</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-xl text-white lg:pr-2">
      <p
        className="flex items-center gap-3 font-[family-name:var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.2em] text-white/90"
      >
        <span className="h-px w-8 bg-brand-green" aria-hidden />
        {hero.eyebrow}
      </p>
      <h1
        className="mt-4 font-[family-name:var(--font-montserrat)] text-[clamp(1.85rem,2.8vw,3.25rem)] font-bold leading-[1.1]"
      >
        {hero.titleLead}
        <br />
        <span className="text-brand-green">{hero.titleAccent}</span>
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-white/90 lg:text-base">
        {hero.description}
      </p>
    </div>
  );
}
