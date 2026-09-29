import Link from "next/link";
import { WhatsAppIcon } from "@/components/icons";
import { site } from "@/data/site";

export function HeroCopy() {
  const { hero, whatsappUrl } = site;

  return (
    <div className="relative isolate max-w-xl text-center text-white sm:text-left">
      <div
        className="pointer-events-none absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 sm:left-0 sm:translate-x-0"
        aria-hidden
      >
        <div
          className="h-56 w-[min(100vw,32rem)] rounded-full bg-black/55 blur-[5rem] sm:h-64 sm:w-[36rem] sm:bg-black/50 sm:blur-[6.5rem]"
        />
        <div
          className="absolute left-1/2 top-1/2 h-40 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/35 blur-[4rem] sm:left-24 sm:translate-x-0"
        />
      </div>
      <p
        className="flex items-center justify-center gap-2 font-[family-name:var(--font-montserrat)] text-[10px] font-semibold uppercase tracking-[0.18em] text-white/90 sm:justify-start sm:gap-3 sm:text-xs lg:tracking-[0.2em]"
      >
        <span className="h-px w-6 bg-brand-green sm:w-8" aria-hidden />
        {hero.eyebrow}
      </p>
      <h1
        className="mt-3 font-[family-name:var(--font-montserrat)] text-[clamp(1.75rem,5.5vw,3.25rem)] font-bold leading-[1.1] sm:mt-4"
      >
        {hero.titleLead}
        <br />
        <span className="text-brand-green">{hero.titleAccent}</span>
      </h1>
      <p className="mx-auto mt-3 max-w-md text-[clamp(0.8rem,2.5vw,1rem)] leading-relaxed text-white/90 sm:mx-0 sm:mt-4 lg:text-base">
        {hero.description}
      </p>
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-green px-6 py-3 font-[family-name:var(--font-montserrat)] text-[11px] font-bold uppercase tracking-wide text-black transition hover:bg-brand-green-dark sm:mt-6 sm:px-7 sm:py-3.5 sm:text-xs"
      >
        <WhatsAppIcon className="h-5 w-5 shrink-0" />
        <span>{hero.cta}</span>
        <span aria-hidden>→</span>
      </Link>
    </div>
  );
}
