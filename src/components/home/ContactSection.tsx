"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { ClockIcon, MailIcon, PhoneIcon } from "@/components/icons";
import { PhoneLink } from "@/components/PhoneLink";
import { contactPage, site } from "@/data/site";

const fieldClass =
  "w-full rounded-lg border border-white/20 bg-zinc-900/80 py-2 pl-9 pr-3 text-xs text-white placeholder:text-zinc-500 focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green sm:text-sm";

function FieldIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">
      {children}
    </span>
  );
}

function UserIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M5 20a7 7 0 0 1 14 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LocationIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 21s7-4.5 7-10a7 7 0 1 0-14 0c0 5.5 7 10 7 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function ChatIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 6h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9l-4 3v-3H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ContactIconBadge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-green text-zinc-900 sm:h-10 sm:w-10"
    >
      {children}
    </span>
  );
}

export function ContactSection() {
  const { hero, form, visit, mapQuery } = contactPage;
  const [submitted, setSubmitted] = useState(false);
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&z=14&output=embed`;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="flex h-[calc(100svh-var(--site-header-height))] min-h-0 flex-col overflow-hidden bg-[#f0f1ee]"
      aria-labelledby="contact-hero-title"
    >
      <div className="relative h-[22%] min-h-[7rem] shrink-0 sm:min-h-[8rem] lg:min-h-[9rem]">
        <Image
          src={hero.image}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/25" />
        <div className="absolute inset-0 flex items-center">
          <div className="site-container">
            <h2
              id="contact-hero-title"
              className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-white sm:text-3xl lg:text-4xl"
            >
              {hero.title}
            </h2>
            <p className="mt-1 max-w-lg text-sm text-white/90 sm:mt-2 sm:text-base">
              {hero.subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="site-container min-h-0 flex-1 overflow-y-auto py-4 sm:py-5 lg:overflow-hidden lg:py-6">
        <div className="grid gap-4 lg:grid-cols-12 lg:gap-5 lg:h-full">
          <div className="space-y-3 lg:col-span-3 lg:space-y-4">
            <div className="flex items-start gap-3">
              <ContactIconBadge>
                <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              </ContactIconBadge>
              <div className="min-w-0 text-sm text-zinc-800">
                <p className="font-semibold text-zinc-900">Phone</p>
                <PhoneLink
                  className="mt-0.5 block text-brand-muted"
                  linkClassName="hover:text-brand-green-dark"
                />
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ContactIconBadge>
                <MailIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              </ContactIconBadge>
              <div className="min-w-0 text-sm text-zinc-800">
                <p className="font-semibold text-zinc-900">Email</p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-0.5 block break-all text-brand-muted hover:text-brand-green-dark"
                >
                  {site.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ContactIconBadge>
                <LocationIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              </ContactIconBadge>
              <div className="min-w-0 text-sm text-zinc-800">
                <p className="font-semibold text-zinc-900">Location</p>
                <p className="mt-0.5 text-brand-muted">{site.city}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ContactIconBadge>
                <ClockIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              </ContactIconBadge>
              <div className="min-w-0 text-sm text-zinc-800">
                <p className="font-semibold text-zinc-900">Hours</p>
                <p className="mt-0.5 text-brand-muted">{site.hours}</p>
              </div>
            </div>
          </div>

          <div
            className="rounded-2xl bg-[#141f14] px-4 py-4 shadow-lg sm:px-5 sm:py-5 lg:col-span-5 lg:flex lg:flex-col"
          >
            <h3
              className="font-[family-name:var(--font-montserrat)] text-base font-bold text-white sm:text-lg"
            >
              {form.title}
            </h3>
            {submitted ? (
              <p className="mt-4 text-sm text-brand-green">
                Thank you! We&apos;ll get back to you soon.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-3 space-y-2.5 sm:mt-4 sm:space-y-3">
                <div className="relative">
                  <FieldIcon>
                    <UserIcon className="h-4 w-4" />
                  </FieldIcon>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Full Name"
                    className={fieldClass}
                  />
                </div>
                <div className="relative">
                  <FieldIcon>
                    <MailIcon className="h-4 w-4" />
                  </FieldIcon>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email Address"
                    className={fieldClass}
                  />
                </div>
                <div className="relative">
                  <FieldIcon>
                    <PhoneIcon className="h-4 w-4" />
                  </FieldIcon>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className={fieldClass}
                  />
                </div>
                <div className="relative">
                  <FieldIcon>
                    <ChatIcon className="h-4 w-4" />
                  </FieldIcon>
                  <textarea
                    name="message"
                    required
                    rows={3}
                    placeholder="Message"
                    className={`${fieldClass} resize-none pt-2.5`}
                  />
                </div>
                <button
                  type="submit"
                  className="mt-1 flex w-full items-center justify-center gap-2 rounded-full bg-brand-green py-2.5 font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-wide text-black transition hover:bg-brand-green-dark sm:py-3 sm:text-sm"
                >
                  {form.cta}
                  <span aria-hidden>→</span>
                </button>
              </form>
            )}
          </div>

          <div className="flex flex-col gap-3 lg:col-span-4 lg:gap-4 lg:min-h-0">
            <div className="relative min-h-[9rem] flex-1 overflow-hidden rounded-xl bg-white shadow-md ring-1 ring-zinc-200 sm:min-h-[10rem]">
              <iframe
                title={`Map: ${site.name}`}
                src={mapSrc}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div
              className="flex gap-3 rounded-2xl bg-[#141f14] p-3 shadow-lg sm:gap-4 sm:p-4"
            >
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg sm:h-20 sm:w-20">
                <Image
                  src={visit.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              <div className="min-w-0 text-white">
                <h3
                  className="font-[family-name:var(--font-montserrat)] text-sm font-bold sm:text-base"
                >
                  {visit.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-white/85 sm:text-sm">
                  {visit.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
