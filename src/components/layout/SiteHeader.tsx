"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks, site } from "@/data/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-6">
        <Link href="#home" className="flex items-center gap-3">
          <span
            className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-zinc-300 bg-zinc-50 text-center text-[9px] font-bold uppercase leading-tight tracking-wide"
            aria-hidden
          >
            Sam&apos;s
            <br />
            Pets
          </span>
          <span className="hidden font-[family-name:var(--font-montserrat)] text-sm font-bold uppercase tracking-wide sm:block">
            {site.name}
          </span>
        </Link>

        <button
          type="button"
          className="rounded-md border border-zinc-300 px-3 py-2 text-sm font-semibold lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="primary-nav"
        >
          Menu
        </button>

        <nav
          id="primary-nav"
          className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col gap-1 border-b border-zinc-200 bg-white px-4 py-4 shadow-md lg:static lg:flex lg:flex-row lg:items-center lg:gap-1 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded px-2 py-2 text-center font-[family-name:var(--font-montserrat)] text-[11px] font-bold uppercase tracking-wide text-zinc-900 hover:text-brand-green-dark lg:px-3 lg:py-1 lg:text-[10px] xl:text-[11px]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
