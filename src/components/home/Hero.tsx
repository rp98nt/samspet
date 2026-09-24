import Image from "next/image";
import { ConsultationForm } from "@/components/home/ConsultationForm";
const heroImage =
  "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=1920&q=80";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[520px] lg:min-h-[620px]">
      <Image
        src={heroImage}
        alt="Dog trainer working with a dog outdoors in Austin"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-4 py-16 lg:flex-row lg:items-center lg:justify-between lg:px-6 lg:py-20">
        <div className="text-white">
          <h1 className="whitespace-nowrap font-[family-name:var(--font-montserrat)] text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Expert Dog Training
          </h1>
        </div>
        <ConsultationForm />
      </div>
    </section>
  );
}
