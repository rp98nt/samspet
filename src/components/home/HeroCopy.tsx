import Link from "next/link";
import { WhatsAppIcon } from "@/components/icons";
import { site } from "@/data/site";

export function HeroCopy() {
  const { hero, whatsappUrl } = site;

  return (
    <div className="relative isolate max-w-xl text-center text-white sm:text-left">
      <div
        className="pointer-events-none absolute -inset-x-10 -inset-y-14 -z-10 sm:-inset-x-24 sm:-inset-y-16"
        aria-hidden
      >
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_115%_95%_at_50%_50%,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.42)_38%,rgba(0,0,0,0.14)_58%,transparent_78%)] sm:bg-[radial-gradient(ellipse_130%_105%_at_8%_48%,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.45)_36%,rgba(0,0,0,0.12)_56%,transparent_76%)]"
        />
        <div
          className="absolute inset-0 scale-110 bg-[radial-gradient(ellipse_90%_80%_at_50%_50%,rgba(0,0,0,0.55)_0%,transparent_68%)] blur-2xl sm:bg-[radial-gradient(ellipse_100%_85%_at_5%_50%,rgba(0,0,0,0.6)_0%,transparent_70%)]"
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
