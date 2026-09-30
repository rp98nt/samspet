import type { Metadata } from "next";
import { AboutPageContent } from "@/components/about/AboutPageContent";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `The Journey of a Dog Trainer | ${site.name}`,
  description:
    "From a childhood bond with dogs to professional training in Chhatrapati Sambhajinagar — read the full story of Sam Pets & RP's Kennel.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
