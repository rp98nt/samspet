"use client";

import { FormEvent, useState } from "react";
import { ShieldIcon } from "@/components/icons";
import { dogAgeOptions, dogBreeds, interestOptions } from "@/data/site";

export function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div
      id="consultation"
      className="w-full max-w-md rounded-lg bg-brand-charcoal/85 p-6 text-white shadow-2xl backdrop-blur-sm sm:p-8"
    >
      <h2 className="text-center font-[family-name:var(--font-montserrat)] text-lg font-bold uppercase tracking-widest text-brand-teal">
        Customized Consultation
      </h2>

      {submitted ? (
        <p className="mt-6 text-center text-sm leading-relaxed text-zinc-200">
          Thank you! We received your request and will contact you shortly.
        </p>
      ) : (
        <form className="mt-5 space-y-3" onSubmit={handleSubmit}>
          <input
            required
            name="name"
            placeholder="Your name"
            className="w-full rounded border-0 bg-white px-4 py-3 text-sm text-zinc-800 placeholder:text-zinc-400"
          />
          <input
            required
            type="email"
            name="email"
            placeholder="Email address"
            className="w-full rounded border-0 bg-white px-4 py-3 text-sm text-zinc-800 placeholder:text-zinc-400"
          />
          <input
            required
            type="tel"
            name="phone"
            placeholder="Contact number"
            className="w-full rounded border-0 bg-white px-4 py-3 text-sm text-zinc-800 placeholder:text-zinc-400"
          />
          <input
            required
            name="dogName"
            placeholder="Dog's name"
            className="w-full rounded border-0 bg-white px-4 py-3 text-sm text-zinc-800 placeholder:text-zinc-400"
          />
          <div className="grid grid-cols-2 gap-3">
            <select
              required
              name="dogAge"
              defaultValue=""
              className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-zinc-800"
              aria-label="Dog's age in years"
            >
              <option value="" disabled>Age (years)</option>
              {dogAgeOptions.map((age) => (
                <option key={age} value={age}>
                  {age} {age === 1 ? "year" : "years"}
                </option>
              ))}
            </select>
            <select
              required
              name="dogBreed"
              defaultValue=""
              className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-zinc-800"
              aria-label="Dog breed"
            >
              <option value="" disabled>Breed</option>
              {dogBreeds.map((breed) => (
                <option key={breed} value={breed}>{breed}</option>
              ))}
            </select>
          </div>
          <select
            required
            name="interest"
            defaultValue=""
            className="w-full rounded border-0 bg-white px-4 py-3 text-sm text-zinc-800"
          >
            <option value="" disabled>I&apos;m interested in...</option>
            {interestOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          <button
            type="submit"
            className="w-full rounded bg-brand-green py-3.5 font-[family-name:var(--font-montserrat)] text-sm font-bold uppercase tracking-wide text-white transition hover:bg-brand-green-dark"
          >
            Request Now
          </button>
        </form>
      )}

      <p className="mt-4 flex items-center justify-center gap-2 text-[10px] uppercase tracking-wide text-zinc-300">
        <ShieldIcon className="h-4 w-4 shrink-0" />
        We do not share your information
      </p>
    </div>
  );
}
