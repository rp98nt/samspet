"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { blogCategories, blogPage, blogPosts } from "@/data/site";

type BlogCategory = (typeof blogCategories)[number];

function WaveDivider() {
  return (
    <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 leading-none">
      <svg
        viewBox="0 0 1440 56"
        preserveAspectRatio="none"
        className="block h-6 w-full fill-[#f0f1ee] sm:h-8 lg:h-10"
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
    if (activeCategory === "All") return blogPosts;
    return blogPosts.filter((post) => post.category === activeCategory);
  }, [activeCategory]);

  return (
    <section
      id="blog"
      className="flex h-[calc(100svh-var(--site-header-height))] min-h-0 flex-col overflow-hidden bg-[#f0f1ee]"
      aria-labelledby="blog-hero-title"
    >
      <div className="relative shrink-0 bg-[#141f14] pb-6 sm:pb-8 lg:pb-10">
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

        <div className="site-container relative grid items-center gap-4 py-5 sm:grid-cols-2 sm:gap-6 sm:py-6 lg:gap-8 lg:py-8">
          <div className="text-white">
            <h2
              id="blog-hero-title"
              className="font-[family-name:var(--font-montserrat)] text-2xl font-bold sm:text-3xl lg:text-4xl"
            >
              {hero.title}
            </h2>
            <p className="mt-2 max-w-lg text-sm text-white/90 sm:text-base lg:text-lg">
              {hero.subtitle}
            </p>
          </div>
          <div className="relative mx-auto aspect-[5/4] w-full max-w-md sm:mx-0 sm:ml-auto sm:max-w-lg lg:aspect-[4/3]">
            <Image
              src={hero.portraitImage}
              alt=""
              fill
              className="object-cover object-center rounded-sm"
              sizes="(max-width: 640px) 90vw, 420px"
            />
          </div>
        </div>

        <WaveDivider />
      </div>

      <div className="site-container flex min-h-0 flex-1 flex-col py-4 sm:py-5 lg:py-6">
        <div className="flex shrink-0 flex-wrap gap-2 sm:gap-2.5">
          {blogCategories.map((category) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-3.5 py-1.5 font-[family-name:var(--font-montserrat)] text-[11px] font-bold uppercase tracking-wide transition sm:px-4 sm:py-2 sm:text-xs ${
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

        <div className="mt-4 min-h-0 flex-1 overflow-y-auto sm:mt-5">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {filteredPosts.map((post) => (
              <article
                key={post.title}
                className="flex flex-col overflow-hidden rounded-xl bg-white shadow-md ring-1 ring-zinc-100"
              >
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col px-4 py-3 sm:px-5 sm:py-4">
                  <span
                    className="inline-flex w-fit rounded bg-brand-green/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-brand-green-dark sm:text-[11px]"
                  >
                    {post.category}
                  </span>
                  <h3
                    className="mt-2 font-[family-name:var(--font-montserrat)] text-sm font-bold leading-snug text-zinc-900 sm:text-base"
                  >
                    {post.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-brand-muted sm:text-sm">{post.date}</p>
                  <Link
                    href="#blog"
                    className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-brand-green-dark hover:text-brand-green sm:mt-4 sm:text-sm"
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
