import { AboutUsSection } from "@/components/home/AboutUsSection";
import { GroupPrivateTrainingSection } from "@/components/home/GroupPrivateTrainingSection";
import { PuppyTrainingSection } from "@/components/home/PuppyTrainingSection";
import { BlogSection } from "@/components/home/BlogSection";
import { ContactSection } from "@/components/home/ContactSection";
import { ConsultationBanner } from "@/components/home/ConsultationBanner";
import { ConsultationForm } from "@/components/home/ConsultationForm";
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
      <section
        aria-label="Request a consultation"
        className="bg-brand-charcoal py-10 lg:py-14"
      >
        <div className="site-container flex justify-center lg:justify-end">
          <ConsultationForm />
        </div>
      </section>
      <ConsultationBanner />
    </>
  );
}
