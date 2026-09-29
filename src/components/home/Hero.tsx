import Image from "next/image";
import { HeroCopy } from "@/components/home/HeroCopy";
import { HeroFeatureBar } from "@/components/home/HeroFeatureBar";

const heroImage = "/images/hero/man-with-dog.png";
/** Uniform scale of the full image (1 = native fit; lower = smaller with black margins). */
const HERO_BG_SCALE = 0.7;
const HERO_BG_LIFT_PX = 10;

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100svh-var(--site-header-height))] flex-col overflow-hidden bg-black"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 origin-center"
          style={{
            transform: `translateY(-${HERO_BG_LIFT_PX}px) scale(${HERO_BG_SCALE})`,
          }}
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

      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/20 to-black/70" />
        <div className="absolute inset-y-0 left-0 w-full max-w-3xl bg-gradient-to-r from-black/80 via-black/45 to-transparent" />
      </div>

      <div className="site-container relative z-10 flex min-h-[calc(100svh-var(--site-header-height))] flex-1 flex-col justify-center py-8 pb-28 sm:py-10 sm:pb-32 lg:pb-36">
        <HeroCopy />
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10">
        <HeroFeatureBar />
      </div>
    </section>
  );
}
