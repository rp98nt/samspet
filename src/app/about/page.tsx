import type { Metadata } from "next";
import { AboutPageContent } from "@/components/about/AboutPageContent";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `About Us | ${site.name}`,
  description:
    "Learn about Sam Pets & RP's Kennel — our story, values, and commitment to trust-based dog training in Chhatrapati Sambhajinagar.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
