import { AboutUsSection } from "@/components/home/AboutUsSection";
import { GroupPrivateTrainingSection } from "@/components/home/GroupPrivateTrainingSection";
import { PuppyTrainingSection } from "@/components/home/PuppyTrainingSection";
import { BlogSection } from "@/components/home/BlogSection";
import { ContactSection } from "@/components/home/ContactSection";
import { ConsultationBanner } from "@/components/home/ConsultationBanner";
import { Hero } from "@/components/home/Hero";

export default function Home() {
  return (
    <>
      <div
        className="snap-section flex h-[calc(100svh-var(--site-header-height,4.5rem))] max-h-[calc(100svh-var(--site-header-height,4.5rem))] min-h-0 shrink-0 flex-col"
      >
        <Hero />
      </div>
      <AboutUsSection />
      <PuppyTrainingSection />
      <GroupPrivateTrainingSection />
      <BlogSection />
      <ContactSection />
      <ConsultationBanner />
    </>
  );
}
