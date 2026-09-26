import Image from "next/image";
import Link from "next/link";
import { ConsultationForm } from "@/components/home/ConsultationForm";
import { HeroFeatureBar } from "@/components/home/HeroFeatureBar";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { site } from "@/data/site";

const heroImage = "/images/hero/man-with-dog.png";

/** Fixed px size — background does not shrink with viewport; crops overflow horizontally */
const HERO_BG_WIDTH_PX = 1659;
const HERO_BG_HEIGHT_PX = 598;
const HERO_BG_OFFSET_LEFT_PX = 20;
const HERO_BG_OFFSET_DOWN_PX = 5;

export function Hero() {
  const { hero } = site;

  return (
    <section
      id="home"
      className="relative flex flex-col overflow-hidden lg:h-[720px]"
    >
      <SiteHeader />
      <div className="absolute inset-0 overflow-hidden bg-[#1a1a1a]">
        <div
          className="absolute left-1/2 top-1/2"
          style={{
            width: HERO_BG_WIDTH_PX,
            height: HERO_BG_HEIGHT_PX,
            transform: `translate(calc(-50% - ${HERO_BG_OFFSET_LEFT_PX}px), calc(-50% + ${HERO_BG_OFFSET_DOWN_PX}px))`,
          }}
        >
          <Image
            src={heroImage}
            alt="Dog trainer standing with a Doberman"
            fill
            priority
            className="object-contain object-center"
            sizes={`${HERO_BG_WIDTH_PX}px`}
          />
        </div>
      </div>

      {/* Mobile: vertical scrim for readable stacked content */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/90 via-black/55 to-black/85 lg:hidden"
        aria-hidden
      />
      {/* Desktop: darken left and right only — keep center bright for trainer + dog */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] hidden lg:block"
        aria-hidden
      >
        <div
          className="absolute inset-y-0 left-0 w-[min(100%,42%)] bg-gradient-to-r from-black/80 via-black/55 to-transparent"
        />
        <div
          className="absolute inset-y-0 right-0 w-[min(100%,42%)] bg-gradient-to-l from-black/80 via-black/55 to-transparent"
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-4 py-6 sm:px-5 lg:min-h-0 lg:flex-1 lg:px-6 lg:py-4">
        <div className="flex flex-col gap-6 lg:grid lg:min-h-0 lg:flex-1 lg:grid-cols-12 lg:items-center lg:gap-6 lg:py-4">
          <div className="text-center text-white lg:col-span-4 lg:max-w-xl lg:pr-2 lg:text-left">
            <div className="rounded-lg bg-black/35 p-4 sm:p-5 lg:bg-transparent lg:p-0">
              <p className="flex items-center justify-center gap-3 font-[family-name:var(--font-montserrat)] text-[10px] font-semibold uppercase tracking-[0.18em] text-white/90 sm:text-xs lg:justify-start">
                <span className="h-px w-6 bg-brand-green sm:w-8" aria-hidden />
                {hero.eyebrow}
              </p>
              <h1
                className="mt-3 font-[family-name:var(--font-montserrat)] text-3xl font-bold leading-[1.12] sm:mt-4 sm:text-4xl lg:mt-5 lg:text-[3.25rem]"
              >
                {hero.titleLead}
                <br />
                <span className="text-brand-green">{hero.titleAccent}</span>
              </h1>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/90 sm:mt-4 sm:text-base lg:mx-0">
                {hero.description}
              </p>
              <Link
                href="#consultation"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-green px-6 py-3 font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-wide text-black transition hover:bg-brand-green-dark sm:mt-6 sm:px-8 sm:py-3.5 sm:text-sm lg:mt-8"
              >
                {hero.cta}
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-4" aria-hidden />

          <div className="w-full lg:col-span-4 lg:flex lg:justify-end">
            <ConsultationForm />
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-2 shrink-0 lg:mt-0">
        <HeroFeatureBar />
      </div>
    </section>
  );
}
