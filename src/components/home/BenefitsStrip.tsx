import Link from "next/link";
import { PhoneLink } from "@/components/PhoneLink";

const items = [
  "We'll Help You Discover",
  "Relaxed & Attentive Dogs",
  "Strong Relationships",
  "Clear Communication",
];

export function BenefitsStrip() {
  return (
    <section className="section-viewport bg-brand-charcoal text-white">
      <div className="section-viewport-inner">
        <div
          className="mx-auto flex h-full max-w-7xl w-full flex-col items-center justify-center gap-4 lg:flex-row lg:justify-between"
        >
          <div className="flex items-center gap-3">
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-green/20 text-xl"
              aria-hidden
            >
              🎓
            </div>
            <ul className="grid gap-1.5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
              {items.map((item) => (
                <li
                  key={item}
                  className="text-[10px] font-semibold uppercase tracking-wide text-brand-green sm:text-[11px]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:items-center lg:shrink-0">
            <p className="text-xs sm:text-sm">
              Give us a call{" "}
              <PhoneLink linkClassName="font-bold text-brand-green hover:underline" />
            </p>
            <Link
              href="#consultation"
              className="rounded-full bg-brand-green px-5 py-2 text-xs font-bold uppercase tracking-wide text-white hover:bg-brand-green-dark"
            >
              Request a Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
