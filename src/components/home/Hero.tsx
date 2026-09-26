import Image from "next/image";
import { ConsultationForm } from "@/components/home/ConsultationForm";
import { HeroCopy } from "@/components/home/HeroCopy";
import { HeroFeatureBar } from "@/components/home/HeroFeatureBar";
import { SiteHeader } from "@/components/layout/SiteHeader";

const heroImage = "/images/hero/man-with-dog.png";

/** Fixed px size — desktop background does not shrink with viewport */
const HERO_BG_WIDTH_PX = 1659;
const HERO_BG_HEIGHT_PX = 598;
const HERO_BG_OFFSET_LEFT_PX = 20;
const HERO_BG_OFFSET_DOWN_PX = 5;

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex h-[100svh] max-h-[920px] flex-col overflow-hidden lg:h-[720px] lg:max-h-none"
    >
      <SiteHeader />

      <div className="absolute inset-0 overflow-hidden bg-[#1a1a1a]">
        {/* Mobile: full-bleed cover — no top/bottom letterboxing */}
        <Image
          src={heroImage}
          alt="Dog trainer standing with a Doberman"
          fill
          priority
          className="object-cover object-[center_38%] lg:hidden"
          sizes="100vw"
        />
        {/* Desktop: fixed-frame image */}
        <div
          className="absolute left-1/2 top-1/2 hidden lg:block"
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

      {/* Mobile: light edge scrims — keep center clear for trainer + dog */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/70 from-0% via-black/15 via-35% to-black/75 to-100% lg:hidden"
        aria-hidden
      />
      {/* Desktop side scrims */}
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

      {/* Mobile: overlay copy + form on the photo */}
      <div
        className="relative z-10 flex min-h-0 flex-1 flex-col justify-between gap-2 px-3 pb-2 pt-1 lg:hidden"
      >
        <HeroCopy layout="mobile" />
        <ConsultationForm compact />
      </div>

      {/* Desktop layout */}
      <div
        className="relative z-10 mx-auto hidden w-full max-w-7xl min-h-0 flex-1 flex-col px-6 py-4 lg:flex"
      >
        <div className="grid min-h-0 flex-1 grid-cols-12 items-center gap-6 py-4">
          <div className="lg:col-span-4">
            <HeroCopy layout="desktop" />
          </div>
          <div className="hidden lg:block lg:col-span-4" aria-hidden />
          <div className="flex justify-end lg:col-span-4">
            <ConsultationForm />
          </div>
        </div>
      </div>

      <div className="relative z-10 shrink-0">
        <HeroFeatureBar />
      </div>
    </section>
  );
}
