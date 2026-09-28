import { AboutUsSection } from "@/components/home/AboutUsSection";
import { GroupPrivateTrainingSection } from "@/components/home/GroupPrivateTrainingSection";
import { PuppyTrainingSection } from "@/components/home/PuppyTrainingSection";
import { AfterTrainingSection } from "@/components/home/AfterTrainingSection";
import { BenefitsStrip } from "@/components/home/BenefitsStrip";
import { BlogSection } from "@/components/home/BlogSection";
import { CertificationsSection } from "@/components/home/CertificationsSection";
import { ConsultationBanner } from "@/components/home/ConsultationBanner";
import { Hero } from "@/components/home/Hero";
import { ScheduleSection } from "@/components/home/ScheduleSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUsSection />
      <PuppyTrainingSection />
      <GroupPrivateTrainingSection />
      <ServicesSection />
      <WhyChooseSection />
      <BenefitsStrip />
      <ScheduleSection />
      <AfterTrainingSection />
      <CertificationsSection />
      <TestimonialsSection />
      <BlogSection />
      <ConsultationBanner />
    </>
  );
}
