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
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <h2 className="text-center font-[family-name:var(--font-montserrat)] text-3xl font-bold">
          After Our Training
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-brand-muted">
          We can help you reach whatever goal you may want to achieve with your
          dog.
        </p>

        <div className="mt-12 grid items-center gap-8 lg:grid-cols-[1fr_auto_1fr]">
          <ul className="space-y-6">
            {left.map((goal) => (
              <li key={goal.label} className="flex items-center justify-end gap-3 text-right">
                <span className="text-sm sm:text-base">{goal.label}</span>
                <CheckIcon className="h-7 w-7 shrink-0 text-brand-green" />
              </li>
            ))}
          </ul>

          <div className="relative mx-auto flex h-56 w-56 items-end justify-center sm:h-64 sm:w-64">
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

          <ul className="space-y-6">
            {right.map((goal) => (
              <li key={goal.label} className="flex items-center gap-3">
                <CheckIcon className="h-7 w-7 shrink-0 text-brand-green" />
                <span className="text-sm sm:text-base">{goal.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-12 text-center text-brand-muted">
          <Link href="#consultation" className="underline hover:text-brand-green-dark">
            Sign Up
          </Link>{" "}
          for a Customized Consultation or give us a call{" "}
          <PhoneLink linkClassName="font-semibold text-brand-green-dark hover:underline" />
        </p>
      </div>
    </section>
  );
}
