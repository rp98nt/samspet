import Image from "next/image";
import Link from "next/link";
import { ConsultationForm } from "@/components/home/ConsultationForm";
import { HeroFeatureBar } from "@/components/home/HeroFeatureBar";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { site } from "@/data/site";

const heroImage = "/images/hero/man-with-dog.png";

export function Hero() {
  const { hero } = site;

  return (
    <section id="home" className="relative flex min-h-[640px] flex-col lg:min-h-[720px]">
      <SiteHeader />
      <div className="absolute inset-0 overflow-hidden bg-[#1a1a1a]">
        <div
          className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 scale-[0.84]"
        >
          <Image
            src={heroImage}
            alt="Dog trainer standing with a Doberman"
            fill
            priority
            className="object-contain object-center"
            sizes="100vw"
          />
        </div>
      </div>

      {/* Darken left and right only — keep center bright for trainer + dog */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        aria-hidden
      >
        <div
          className="absolute inset-y-0 left-0 w-[min(100%,42%)] bg-gradient-to-r from-black/80 via-black/55 to-transparent"
        />
        <div
          className="absolute inset-y-0 right-0 w-[min(100%,42%)] bg-gradient-to-l from-black/80 via-black/55 to-transparent"
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 pb-0 pt-4 lg:px-6 lg:pt-6">
        <div className="grid flex-1 items-center gap-8 py-6 lg:grid-cols-12 lg:gap-6 lg:py-10">
          <div className="max-w-xl text-white lg:col-span-4 lg:pr-2">
            <div className="rounded-lg bg-black/25 p-1 sm:bg-transparent sm:p-0">
              <p className="flex items-center gap-3 font-[family-name:var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
                <span className="h-px w-8 bg-brand-green" aria-hidden />
                {hero.eyebrow}
              </p>
              <h1
                className="mt-5 font-[family-name:var(--font-montserrat)] text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-[3.25rem]"
              >
                {hero.titleLead}
                <br />
                <span className="text-brand-green">{hero.titleAccent}</span>
              </h1>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-white/90 sm:text-base">
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
          </div>

          <div className="hidden lg:block lg:col-span-4" aria-hidden />

          <div className="lg:col-span-4 lg:flex lg:justify-end">
            <ConsultationForm />
          </div>
        </div>
      </div>

      <HeroFeatureBar />
    </section>
  );
}
