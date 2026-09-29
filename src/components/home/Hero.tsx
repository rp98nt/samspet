import Image from "next/image";
import { HeroCopy } from "@/components/home/HeroCopy";
import { HeroFeatureBar } from "@/components/home/HeroFeatureBar";

const heroImage = "/images/hero/man-with-dog.png";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex h-full min-h-0 flex-col overflow-hidden bg-black"
    >
      <div className="relative flex min-h-0 min-w-0 flex-1 flex-col">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <Image
            src={heroImage}
            alt="Dog trainer standing with a Doberman"
            fill
            priority
            quality={90}
            className="h-full w-full object-contain object-center"
            sizes="100vw"
          />
        </div>

        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-black/65" />
          <div className="absolute inset-y-0 left-0 w-full max-w-3xl bg-gradient-to-r from-black/80 via-black/45 to-transparent" />
        </div>

        <div className="site-container relative z-10 flex min-h-0 flex-1 flex-col justify-center py-8 sm:py-10">
          <HeroCopy />
        </div>
      </div>

      <HeroFeatureBar />
    </section>
  );
}
