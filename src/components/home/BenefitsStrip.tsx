import Link from "next/link";
import { PhoneLink } from "@/components/PhoneLink";
import { site } from "@/data/site";

const items = [
  "We'll Help You Discover",
  "Relaxed & Attentive Dogs",
  "Strong Relationships",
  "Clear Communication",
];

export function BenefitsStrip() {
  return (
    <section className="bg-brand-charcoal text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 lg:flex-row lg:items-center lg:justify-between lg:px-6">
        <div className="flex items-center gap-4">
          <div
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-brand-green/20 text-2xl"
            aria-hidden
          >
            🎓
          </div>
          <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {items.map((item) => (
              <li
                key={item}
                className="text-xs font-semibold uppercase tracking-wide text-brand-green sm:text-[11px]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center lg:shrink-0">
          <p className="text-sm">
            Give us a call{" "}
            <PhoneLink linkClassName="font-bold text-brand-green hover:underline" />
          </p>
          <Link
            href="#consultation"
            className="rounded-full bg-brand-green px-6 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-brand-green-dark"
          >
            Request a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
