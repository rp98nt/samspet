import { AboutUsSection } from "@/components/home/AboutUsSection";
import { AfterTrainingSection } from "@/components/home/AfterTrainingSection";
import { BenefitsStrip } from "@/components/home/BenefitsStrip";
import { BlogSection } from "@/components/home/BlogSection";
import { CertificationsSection } from "@/components/home/CertificationsSection";
import { ConsultationBanner } from "@/components/home/ConsultationBanner";
import { HomeFirstScreen } from "@/components/home/HomeFirstScreen";
import { ScheduleSection } from "@/components/home/ScheduleSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";

export default function Home() {
  return (
    <>
      <HomeFirstScreen />
      <AboutUsSection />
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
