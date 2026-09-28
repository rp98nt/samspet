import Image from "next/image";
import Link from "next/link";
import { CheckIcon } from "@/components/icons";
import { PhoneLink } from "@/components/PhoneLink";
import { afterTrainingGoals } from "@/data/site";

const dogImage =
  "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=600&q=80";

export function AfterTrainingSection() {
  const left = afterTrainingGoals.filter((g) => g.side === "left");
  const right = afterTrainingGoals.filter((g) => g.side === "right");

  return (
    <section className="section-viewport bg-white">
      <div className="section-viewport-inner">
        <div className="mx-auto flex h-full max-w-7xl min-h-0 w-full flex-col">
          <h2
            className="shrink-0 text-center font-[family-name:var(--font-montserrat)] text-[clamp(1.25rem,3vh,1.875rem)] font-bold"
          >
            After Our Training
          </h2>
          <p
            className="mx-auto mt-2 max-w-2xl shrink-0 text-center text-[clamp(0.75rem,1.6vh,0.95rem)] text-brand-muted"
          >
            We can help you reach whatever goal you may want to achieve with your
            dog.
          </p>

          <div
            className="mt-3 grid min-h-0 flex-1 items-center gap-3 lg:grid-cols-[1fr_auto_1fr] lg:gap-6"
          >
            <ul className="space-y-2 lg:space-y-3">
              {left.map((goal) => (
                <li key={goal.label} className="flex items-center justify-end gap-2 text-right">
                  <span className="text-[clamp(0.7rem,1.4vh,0.9rem)]">{goal.label}</span>
                  <CheckIcon className="h-5 w-5 shrink-0 text-brand-green lg:h-6 lg:w-6" />
                </li>
              ))}
            </ul>

            <div
              className="relative mx-auto flex h-[min(28vh,200px)] w-[min(28vh,200px)] items-end justify-center sm:h-[min(32vh,240px)] sm:w-[min(32vh,240px)]"
            >
              <div className="absolute inset-0 rounded-full bg-brand-sky/80" />
              <div className="relative h-[88%] w-[88%] overflow-hidden rounded-full">
                <Image
                  src={dogImage}
                  alt="Happy trained dog"
                  fill
                  className="object-cover"
                  sizes="256px"
                />
              </div>
            </div>

            <ul className="space-y-2 lg:space-y-3">
              {right.map((goal) => (
                <li key={goal.label} className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 shrink-0 text-brand-green lg:h-6 lg:w-6" />
                  <span className="text-[clamp(0.7rem,1.4vh,0.9rem)]">{goal.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-2 shrink-0 text-center text-[11px] text-brand-muted sm:text-xs">
            <Link href="#consultation" className="underline hover:text-brand-green-dark">
              Sign Up
            </Link>{" "}
            for a Customized Consultation or give us a call{" "}
            <PhoneLink linkClassName="font-semibold text-brand-green-dark hover:underline" />
          </p>
        </div>
      </div>
    </section>
  );
}
