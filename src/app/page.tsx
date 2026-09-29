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
      <Hero />
      <AboutUsSection />
      <PuppyTrainingSection />
      <GroupPrivateTrainingSection />
      <BlogSection />
      <ContactSection />
      <ConsultationBanner />
    </>
  );
}
