import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { aboutStoryPage } from "@/data/aboutStory";
import { aboutPage, site } from "@/data/site";

export function AboutPageContent() {
  const { story, stats } = aboutPage;
  const { title, subtitle, intro, sections, closing } = aboutStoryPage;

  return (
    <div className="flex min-h-0 flex-1 flex-col bg-[#f0f1ee]">
      <div
        className="relative w-full shrink-0 overflow-hidden bg-zinc-900"
      >
        <div className="relative h-[12.5rem] w-full sm:h-[16rem] md:h-[20rem] lg:h-[22rem]">
          <Image
            src={story.trainerImage}
            alt="Trainer with a dog"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
        </div>
      </div>

      <article className="site-container max-w-3xl py-8 sm:py-10 lg:max-w-4xl lg:py-12">
        <Link
          href="/#about"
          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-brand-muted transition hover:text-brand-green-dark"
        >
          <span aria-hidden>←</span> Back to home
        </Link>
        <h1
          className="mt-4 font-[family-name:var(--font-montserrat)] text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl lg:text-[2.5rem]"
        >
          {title}
        </h1>
        <p
          className="mt-3 text-base font-medium leading-relaxed text-zinc-700 sm:text-lg"
        >
          {subtitle}
        </p>

        <div
          className="mt-8 space-y-4 text-base leading-relaxed text-brand-muted sm:mt-10 sm:text-[1.0625rem] sm:leading-[1.75]"
        >
          {intro.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-10 space-y-10 sm:mt-12 sm:space-y-12">
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
