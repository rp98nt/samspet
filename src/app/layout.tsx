import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { site } from "@/data/site";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: `${site.name} | Professional Dog Training`,
  description:
    "Expert obedience training, behavior modification, grooming, and boarding in Chhatrapati Sambhajinagar.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${openSans.variable} h-full`}
    >
      <body className="flex h-svh flex-col overflow-hidden font-sans antialiased">
        <SiteHeader />
        <main className="site-scroll-main flex min-h-0 flex-1 flex-col overflow-x-hidden overflow-y-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
