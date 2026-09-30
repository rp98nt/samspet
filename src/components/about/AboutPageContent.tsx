import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { aboutStoryPage } from "@/data/aboutStory";
import { aboutPage, site } from "@/data/site";

export function AboutPageContent() {
  const { hero, story, stats } = aboutPage;
  const { title, subtitle, intro, sections, closing } = aboutStoryPage;

  return (
    <div className="flex min-h-0 flex-1 flex-col bg-[#f0f1ee]">
      <div className="relative w-full overflow-hidden bg-[#141f14]">
        <div className="absolute inset-0">
          <Image
            src={hero.backgroundImage}
            alt=""
            fill
            className="object-cover object-center opacity-50 blur-sm"
            sizes="100vw"
            priority
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#141f14]/95 via-[#141f14]/75 to-[#141f14]/40"
            aria-hidden
          />
        </div>

        <div
          className="site-container relative grid items-center gap-4 py-8 text-center sm:gap-6 sm:py-10 lg:grid-cols-2 lg:py-12 lg:text-left"
        >
          <div className="text-white">
            <Link
              href="/#about"
              className="mb-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-white/80 transition hover:text-brand-green"
            >
              <span aria-hidden>←</span> Back to home
            </Link>
            <h1
              className="font-[family-name:var(--font-montserrat)] text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.5rem]"
            >
              {title}
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/90 sm:text-base lg:mx-0">
              {subtitle}
            </p>
          </div>
          <div
            className="relative mx-auto aspect-[4/3] w-full max-w-sm lg:ml-auto lg:aspect-auto lg:h-[10rem] lg:max-w-none"
          >
            <Image
              src={hero.portraitImage}
              alt="Doberman portrait"
              fill
              className="object-contain object-center lg:object-right"
              sizes="(max-width: 1024px) 80vw, 480px"
            />
          </div>
        </div>
      </div>

      <article className="site-container max-w-3xl py-10 sm:py-12 lg:max-w-4xl lg:py-14">
        <div className="space-y-4 text-base leading-relaxed text-brand-muted sm:text-[1.0625rem] sm:leading-[1.75]">
          {intro.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>

        <div className="relative my-10 min-h-[14rem] overflow-hidden rounded-2xl shadow-lg sm:my-12 sm:min-h-[18rem]">
          <Image
            src={story.trainerImage}
            alt="Trainer with a dog"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 896px"
          />
        </div>

        <div className="space-y-10 sm:space-y-12">
          {sections.map((block, index) => (
            <section key={block.title ?? `section-${index}`}>
              {block.title ? (
                <h2
                  className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-zinc-900 sm:text-2xl"
                >
                  {block.title}
                </h2>
              ) : null}
              <div
                className={`space-y-4 text-base leading-relaxed text-brand-muted sm:text-[1.0625rem] sm:leading-[1.75] ${
                  block.title ? "mt-4" : ""
                }`}
              >
                {block.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section
          className="mt-12 rounded-2xl border border-zinc-200/80 bg-white px-5 py-8 shadow-sm sm:mt-14 sm:px-8 sm:py-10"
        >
          <h2
            className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-zinc-900 sm:text-2xl"
          >
            {closing.title}
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-brand-muted sm:text-[1.0625rem] sm:leading-[1.75]">
            {closing.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
          <Link
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-brand-green px-8 py-3 font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-wide text-black transition hover:bg-brand-green-dark sm:text-sm"
          >
            {closing.ctaLabel}
            <span aria-hidden>→</span>
          </Link>
        </section>
      </article>

      <div className="w-full border-t border-zinc-200 bg-[#f3f4f2] py-8 sm:py-10">
        <div className="site-container">
          <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-2">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center text-center ${
                  index % 2 === 1 ? "border-l border-zinc-300 sm:border-l" : ""
                } ${index > 0 ? "sm:border-l sm:border-zinc-300" : ""}`}
              >
                <p
                  className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-zinc-900 sm:text-3xl"
                >
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-brand-muted sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SiteFooter compact />
    </div>
  );
}
