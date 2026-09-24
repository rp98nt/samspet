import Image from "next/image";
import Link from "next/link";
import { ConsultationForm } from "@/components/home/ConsultationForm";
import { HeroFeatureBar } from "@/components/home/HeroFeatureBar";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { site } from "@/data/site";

const heroImage =
  "https://images.unsplash.com/photo-1551717743-49959800b1f6?auto=format&fit=crop&w=1920&q=80";

export function Hero() {
  const { hero } = site;

  return (
    <section id="home" className="relative flex min-h-[640px] flex-col lg:min-h-[720px]">
      <SiteHeader />
      <Image
        src={heroImage}
        alt="Professional dog trainer with a dog outdoors"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/40" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 pb-0 pt-6 lg:px-6 lg:pt-10">
        <div className="grid flex-1 items-center gap-10 py-8 lg:grid-cols-2 lg:gap-12 lg:py-12">
          <div className="max-w-xl text-white">
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
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/85 sm:text-base">
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

          <ConsultationForm />
        </div>
      </div>

      <HeroFeatureBar />
    </section>
  );
}
