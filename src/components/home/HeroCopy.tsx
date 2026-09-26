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
      <div
        className="rounded-xl border border-white/15 bg-black/40 px-3 py-2.5 text-white shadow-lg backdrop-blur-md"
      >
        <p
          className="flex items-center gap-2 font-[family-name:var(--font-montserrat)] text-[9px] font-semibold uppercase tracking-[0.16em] text-white/90"
        >
          <span className="h-px w-5 bg-brand-green" aria-hidden />
          {hero.eyebrow}
        </p>
        <h1
          className="mt-1.5 font-[family-name:var(--font-montserrat)] text-[1.65rem] font-bold leading-[1.1]"
        >
          {hero.titleLead}{" "}
          <span className="text-brand-green">{hero.titleAccent}</span>
        </h1>
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
