import Link from "next/link";
import { WhatsAppIcon } from "@/components/icons";
import { site } from "@/data/site";

export function HeroCopy() {
  const { hero, whatsappUrl } = site;

  return (
    <div className="max-w-xl text-center text-white sm:text-left">
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
