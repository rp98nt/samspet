import { Hero } from "@/components/home/Hero";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { TopBar } from "@/components/layout/TopBar";

/** Top bar + main nav + hero: one snap screen (100svh) */
export function HomeFirstScreen() {
  return (
    <div id="home" className="site-first-screen">
      <TopBar />
      <SiteHeader />
      <Hero />
    </div>
  );
}
