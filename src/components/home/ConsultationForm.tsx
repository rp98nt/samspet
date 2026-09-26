"use client";

import { FormEvent, ReactNode, useState } from "react";
import {
  MailIcon,
  PhoneIcon,
  ShieldIcon,
} from "@/components/icons";
import { dogAgeOptions, dogBreeds, interestOptions } from "@/data/site";

const fieldClass =
  "w-full rounded-md border border-zinc-600/80 bg-zinc-900/90 py-2.5 pl-10 pr-3 text-sm text-white placeholder:text-zinc-500 invalid:text-zinc-500 focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green sm:py-3 sm:pr-4";

function FieldIcon({ children }: { children: ReactNode }) {
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

function PawIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <circle cx="8" cy="8" r="1.8" />
      <circle cx="16" cy="8" r="1.8" />
      <circle cx="6" cy="13" r="1.8" />
      <circle cx="18" cy="13" r="1.8" />
      <path d="M12 11c-2.2 0-4 1.4-4.5 3.5 1.8.4 3.5.4 4.5 0 .5 2.1 2.3 3.5 4.5 3.5-.5-2.1-2.3-3.5-4.5-3.5Z" />
    </svg>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="4" y="5" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 3v4M16 3v4M4 10h16" stroke="currentColor" strokeWidth="1.5" />
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

type ConsultationFormProps = {
  compact?: boolean;
};

export function ConsultationForm({ compact = false }: ConsultationFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div
      id="consultation"
      className={`mx-auto w-full max-w-md rounded-xl border border-zinc-700/80 bg-black/70 shadow-2xl backdrop-blur-md lg:ml-auto lg:bg-black/75 ${
        compact
          ? "max-h-[min(52vh,420px)] overflow-y-auto p-3"
          : "p-4 sm:p-6 lg:p-7"
      }`}
    >
      <div className={`flex items-start gap-2 ${compact ? "" : "gap-3"}`}>
        <PawIcon
          className={`shrink-0 text-brand-green ${compact ? "mt-0.5 h-5 w-5" : "mt-0.5 h-6 w-6"}`}
        />
        <div>
          <h2
            className={`font-[family-name:var(--font-montserrat)] font-bold uppercase tracking-wide text-white ${
              compact ? "text-xs" : "text-base"
            }`}
          >
            Start Your Dog&apos;s Journey
          </h2>
          {!compact && (
            <p className="mt-1 text-xs leading-relaxed text-zinc-400">
              Tell us a little about your dog and we&apos;ll recommend the right
              training program.
            </p>
          )}
        </div>
      </div>

      {submitted ? (
        <p className={`text-center text-sm leading-relaxed text-zinc-300 ${compact ? "mt-4" : "mt-6"}`}>
          Thank you! We received your request and will contact you shortly.
        </p>
      ) : (
        <form
          className={`${compact ? "mt-3 space-y-2" : "mt-5 space-y-3"}`}
          onSubmit={handleSubmit}
        >
          <div className="relative">
            <FieldIcon><UserIcon className="h-4 w-4" /></FieldIcon>
            <input required name="name" placeholder="Your name" className={fieldClass} />
          </div>
          <div className="relative">
            <FieldIcon><MailIcon className="h-4 w-4" /></FieldIcon>
            <input
              required
              type="email"
              name="email"
              placeholder="Email address"
              className={fieldClass}
            />
          </div>
          <div className="relative">
            <FieldIcon><PhoneIcon className="h-4 w-4" /></FieldIcon>
            <input
              required
              type="tel"
              name="phone"
              placeholder="Contact number"
              className={fieldClass}
            />
          </div>
          <div className="relative">
            <FieldIcon><PawIcon className="h-4 w-4" /></FieldIcon>
            <input
              required
              name="dogName"
              placeholder="Dog's name"
              className={fieldClass}
            />
          </div>
          <div className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2">
            <div className="relative">
              <FieldIcon><CalendarIcon className="h-4 w-4" /></FieldIcon>
              <select
                required
                name="dogAge"
                defaultValue=""
                className={fieldClass}
                aria-label="Dog's age in years"
              >
                <option value="" disabled hidden>Age (years)</option>
                {dogAgeOptions.map((age) => (
                  <option key={age} value={age} className="bg-zinc-900 text-white">
                    {age} {age === 1 ? "year" : "years"}
                  </option>
                ))}
              </select>
            </div>
            <div className="relative">
              <FieldIcon><PawIcon className="h-4 w-4" /></FieldIcon>
              <select
                required
                name="dogBreed"
                defaultValue=""
                className={fieldClass}
                aria-label="Dog breed"
              >
                <option value="" disabled hidden>Breed</option>
                {dogBreeds.map((breed) => (
                  <option key={breed} value={breed} className="bg-zinc-900 text-white">
                    {breed}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="relative">
            <FieldIcon><ChatIcon className="h-4 w-4" /></FieldIcon>
            <select
              required
              name="interest"
              defaultValue=""
              className={fieldClass}
            >
              <option value="" disabled hidden>I&apos;m interested in...</option>
              {interestOptions.map((option) => (
                <option key={option} value={option} className="bg-zinc-900 text-white">
                  {option}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className={`flex w-full items-center justify-center gap-2 rounded-md bg-brand-green font-[family-name:var(--font-montserrat)] text-sm font-bold uppercase tracking-wide text-black transition hover:bg-brand-green-dark ${
              compact ? "py-2.5" : "py-3.5"
            }`}
          >
            Request Now
            <span aria-hidden>→</span>
          </button>
        </form>
      )}

      <p
        className={`flex items-center justify-center gap-2 uppercase tracking-wide text-zinc-500 ${
          compact ? "mt-2 text-[9px]" : "mt-4 text-[10px]"
        }`}
      >
        <ShieldIcon className="h-3.5 w-3.5 shrink-0" />
        We do not share your information
      </p>
    </div>
  );
}
