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
          className="mt-3 font-[family-name:var(--font-montserrat)] text-3xl font-bold leading-[1.12] sm:text-4xl"
        >
          {hero.titleLead}
          <br />
          <span className="text-brand-green">{hero.titleAccent}</span>
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/90 sm:text-base">
          {hero.description}
        </p>
        <Link
          href="#consultation"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-green px-7 py-3 font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-wide text-black transition hover:bg-brand-green-dark sm:px-8 sm:py-3.5 sm:text-sm"
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
        className="mt-5 font-[family-name:var(--font-montserrat)] text-[3.25rem] font-bold leading-[1.1]"
      >
        {hero.titleLead}
        <br />
        <span className="text-brand-green">{hero.titleAccent}</span>
      </h1>
      <p className="mt-5 max-w-md text-base leading-relaxed text-white/90">
        {hero.description}
      </p>
      <Link
        href="#consultation"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-green px-8 py-3.5 font-[family-name:var(--font-montserrat)] text-sm font-bold uppercase tracking-wide text-black transition hover:bg-brand-green-dark"
      >
        {hero.cta}
        <span aria-hidden>→</span>
      </Link>
    </div>
  );
}
