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
      <div className="relative w-full shrink-0 bg-[#141f14] pb-4 sm:pb-5">
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
          className="site-container relative grid items-center gap-3 py-3 text-center sm:grid-cols-[1fr_auto] sm:gap-4 sm:py-4 sm:text-left lg:py-4"
        >
          <div className="text-white">
            <h2
              id="blog-hero-title"
              className="font-[family-name:var(--font-montserrat)] text-xl font-bold sm:text-2xl lg:text-3xl"
            >
              {hero.title}
            </h2>
            <p className="mx-auto mt-1 max-w-xl text-xs text-white/90 sm:mx-0 sm:mt-1.5 sm:text-sm lg:text-base">
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

      <div className="site-container flex min-h-0 w-full flex-1 flex-col py-3 sm:py-4">
        <div className="flex shrink-0 flex-wrap justify-center gap-1.5 sm:justify-start sm:gap-2">
          {blogCategories.map((category) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-3 py-1 font-[family-name:var(--font-montserrat)] text-[10px] font-bold uppercase tracking-wide transition sm:px-3.5 sm:py-1.5 sm:text-[11px] ${
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

        <div className="section-body-scroll mt-3 flex min-h-0 flex-1 flex-col sm:mt-4">
          <div
            className="grid min-h-0 flex-1 gap-2.5 sm:gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 lg:gap-4"
          >
            {filteredPosts.map((post) => (
              <article
                key={post.title}
                className="flex flex-col overflow-hidden rounded-xl bg-white shadow-md ring-1 ring-zinc-100"
              >
                <div className="relative aspect-[2/1] w-full shrink-0 sm:aspect-[5/2]">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-col px-3 py-2.5 sm:px-4 sm:py-3">
                  <span
                    className="inline-flex w-fit rounded bg-brand-green/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-brand-green-dark sm:text-[10px]"
                  >
                    {post.category}
                  </span>
                  <h3
                    className="mt-1.5 line-clamp-2 font-[family-name:var(--font-montserrat)] text-xs font-bold leading-snug text-zinc-900 sm:text-sm"
                  >
                    {post.title}
                  </h3>
                  <p className="mt-1 text-[11px] text-brand-muted sm:text-xs">{post.date}</p>
                  <Link
                    href="#blog"
                    className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold text-brand-green-dark hover:text-brand-green sm:mt-2.5 sm:text-xs"
                  >
                    Read More
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
