"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { blogCategories, blogPage, blogPosts } from "@/data/site";

type BlogCategory = (typeof blogCategories)[number];

const VISIBLE_POST_COUNT = 6;

function WaveDivider() {
  return (
    <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 leading-none">
      <svg
        viewBox="0 0 1440 56"
        preserveAspectRatio="none"
        className="block h-5 w-full fill-[#f0f1ee] sm:h-6"
        aria-hidden
      >
        <path
          d="M0,40 C180,8 360,48 540,28 C720,8 900,44 1080,24 C1260,4 1350,32 1440,36 L1440,56 L0,56 Z"
        />
      </svg>
    </div>
  );
}

export function BlogSection() {
  const { hero } = blogPage;
  const [activeCategory, setActiveCategory] = useState<BlogCategory>("All");

  const filteredPosts = useMemo(() => {
    const posts =
      activeCategory === "All"
        ? blogPosts
        : blogPosts.filter((post) => post.category === activeCategory);
    return posts.slice(0, VISIBLE_POST_COUNT);
  }, [activeCategory]);

  return (
    <section
      id="blog"
      className="snap-section flex w-full min-h-0 flex-col overflow-hidden bg-[#f0f1ee]"
      aria-labelledby="blog-hero-title"
    >
      <div className="relative w-full shrink-0 bg-[#141f14] pb-4 max-lg:pb-[calc(var(--m-gap)*1.4)] sm:pb-5">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={hero.backgroundImage}
            alt=""
            fill
            className="object-cover object-center opacity-35"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#141f14]/95 via-[#141f14]/80 to-[#141f14]/45" />
        </div>

        <div
          className="site-container relative grid items-center gap-3 py-3 text-center max-lg:py-[var(--m-gap)] sm:grid-cols-[1fr_auto] sm:gap-4 sm:py-4 sm:text-left lg:py-4"
        >
          <div className="text-white">
            <h2
              id="blog-hero-title"
              className="font-[family-name:var(--font-montserrat)] text-xl font-bold max-lg:text-[length:var(--m-fs-h2)] max-lg:leading-tight sm:text-2xl lg:text-3xl"
            >
              {hero.title}
            </h2>
            <p className="mx-auto mt-1 max-w-xl text-xs text-white/90 max-lg:mt-[calc(var(--m-gap)*0.4)] max-lg:line-clamp-2 max-lg:text-[length:var(--m-fs-sm)] max-lg:leading-snug sm:mx-0 sm:mt-1.5 sm:text-sm lg:text-base">
              {hero.subtitle}
            </p>
          </div>
          <div
            className="relative hidden h-[4.5rem] w-[6.5rem] shrink-0 overflow-hidden rounded-sm sm:block lg:h-20 lg:w-[7.5rem]"
          >
            <Image
              src={hero.portraitImage}
              alt=""
              fill
              className="object-cover object-center"
              sizes="120px"
            />
          </div>
        </div>

        <WaveDivider />
      </div>

      <div className="site-container flex min-h-0 w-full flex-1 flex-col py-3 max-lg:pb-[var(--m-gap)] max-lg:pt-[var(--m-gap)] sm:py-4">
        {/* Filters: equal-width 3 x 2 grid on phones so spacing is identical on every screen */}
        <div className="flex shrink-0 flex-wrap justify-center gap-1.5 max-lg:grid max-lg:grid-cols-3 max-lg:gap-[calc(var(--m-gap)*0.6)] sm:justify-start sm:gap-2">
          {blogCategories.map((category) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-3 py-1 font-[family-name:var(--font-montserrat)] text-[10px] font-bold uppercase tracking-wide transition max-lg:whitespace-nowrap max-lg:px-1 max-lg:py-[calc(var(--m-gap)*0.55)] max-lg:text-[9.5px] max-lg:tracking-normal sm:px-3.5 sm:py-1.5 sm:text-[11px] ${
                  isActive
                    ? "bg-brand-green text-black"
                    : "bg-white text-zinc-600 shadow-sm ring-1 ring-zinc-200 hover:text-zinc-900"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="section-body-scroll mt-3 flex min-h-0 flex-1 flex-col max-lg:mt-[var(--m-gap)] sm:mt-4">
          {/* Phones: 2 x 3 grid of equal cards, images flex to absorb spare height */}
          <div
            className="grid min-h-0 flex-1 gap-2.5 max-lg:grid-cols-2 max-lg:grid-rows-3 max-lg:gap-[var(--m-gap)] sm:gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 lg:gap-4"
          >
            {filteredPosts.map((post) => (
              <article
                key={post.title}
                className="flex flex-col overflow-hidden rounded-xl bg-white shadow-md ring-1 ring-zinc-100 max-lg:min-h-0"
              >
                <div className="relative aspect-[2/1] w-full shrink-0 max-lg:aspect-auto max-lg:min-h-0 max-lg:flex-1 max-lg:shrink sm:aspect-[5/2] sm:max-lg:aspect-auto">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-col px-3 py-2.5 max-lg:shrink-0 max-lg:px-2.5 max-lg:py-[calc(var(--m-gap)*0.7)] sm:px-4 sm:py-3">
                  <span
                    className="inline-flex w-fit rounded bg-brand-green/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-brand-green-dark sm:text-[10px]"
                  >
                    {post.category}
                  </span>
                  <h3
                    className="mt-1.5 line-clamp-2 font-[family-name:var(--font-montserrat)] text-xs font-bold leading-snug text-zinc-900 max-lg:mt-[calc(var(--m-gap)*0.4)] max-lg:text-[length:var(--m-fs-sm)] max-lg:min-h-[2.5em] max-lg:leading-tight sm:text-sm"
                  >
                    {post.title}
                  </h3>
                  <div className="mt-1 flex items-center justify-between gap-1 lg:contents">
                    <p className="mt-1 text-[11px] text-brand-muted max-lg:mt-0! max-lg:whitespace-nowrap max-lg:text-[10px] sm:text-xs">{post.date}</p>
                    <Link
                      href="#blog"
                      className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold text-brand-green-dark hover:text-brand-green max-lg:mt-0! max-lg:whitespace-nowrap max-lg:text-[10px] sm:mt-2.5 sm:text-xs"
                    >
                      Read More
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
