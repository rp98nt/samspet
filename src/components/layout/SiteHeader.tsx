"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks, site } from "@/data/site";

function LogoMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="24" cy="24" r="23" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M16 28c0-5 3.5-9 8-9s8 4 8 9c-2.5 1-5.5 1-8 0-2.5 1-5.5 1-8 0Z"
        fill="currentColor"
      />
      <circle cx="18" cy="20" r="2" fill="currentColor" />
      <circle cx="30" cy="20" r="2" fill="currentColor" />
      <path d="M22 32h4v4h-4v-4Z" fill="currentColor" />
    </svg>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20 border-b border-white/10 bg-black/25 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-6">
        <Link href="#home" className="flex min-w-0 items-center gap-2 text-white sm:gap-3">
          <LogoMark className="h-10 w-10 shrink-0 text-white sm:h-12 sm:w-12" />
          <span className="min-w-0 sm:hidden">
            <span className="block truncate font-[family-name:var(--font-montserrat)] text-[11px] font-bold uppercase leading-tight tracking-wide">
              Sam Pets &amp; RP&apos;s
            </span>
            <span className="mt-0.5 block text-[9px] font-medium uppercase tracking-[0.12em] text-white/70">
              {site.logoTagline}
            </span>
          </span>
          <span className="hidden min-w-0 sm:block">
            <span className="block font-[family-name:var(--font-montserrat)] text-sm font-bold uppercase leading-tight tracking-wide">
              {site.name}
            </span>
            <span className="mt-0.5 block text-[10px] font-medium uppercase tracking-[0.15em] text-white/70">
              {site.logoTagline}
            </span>
          </span>
        </Link>

        <button
          type="button"
          className="rounded-md border border-white/30 px-3 py-2 text-sm font-semibold text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="primary-nav"
        >
          Menu
        </button>

        <nav
          id="primary-nav"
          className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col gap-1 border-b border-white/10 bg-black/90 px-4 py-4 shadow-md lg:static lg:flex lg:flex-row lg:items-center lg:gap-1 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}
        >
          {navLinks.map((link) => {
            const isHome = link.label === "Home";
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded px-2 py-2 text-center font-[family-name:var(--font-montserrat)] text-[10px] font-bold uppercase tracking-wide text-white hover:text-brand-green lg:px-3 lg:py-1 xl:text-[11px] ${
                  isHome ? "border-b-2 border-brand-green pb-1" : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
