import { Navbar } from "@/components/component/Navbar";
import { HeroSection } from "@/components/component/HeroSection";
import { AboutSection } from "@/components/component/AboutSection";
import { SkillsSection } from "@/components/component/SkillsSection";
import { ExperienceSection } from "@/components/component/ExperienceSection";
import { ProjectsSection } from "@/components/component/ProjectsSection";
import { ContactSection } from "@/components/component/ContactSection";
import { Footer } from "@/components/component/Footer";
import { Metadata } from "next";
import { TestimonialsSection } from "@/components/component/Reviews";
import { FloatingScrollButton } from "@/components/component/FloatingScrollButton";

export const metadata: Metadata = {
  title:
    "Umar Farooq - Frontend & Mobile Developer | React.js, Next.js, Flutter",
  description:
    "I'm a frontend and mobile developer with 5+ years experience building SaaS dashboards, marketplaces, and mobile apps using React.js, Next.js, Flutter, and modern technologies.",
  keywords: [
    "Umar Farooq",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "Flutter Developer",
    "Web Developer Portfolio",
    "Mobile App Developer",
    "Full Stack Developer",
  ],
  authors: [{ name: "Umar Farooq" }],
  openGraph: {
    title: "Umar Farooq - Frontend & Mobile Developer",
    description:
      "Building scalable web and mobile applications using React.js, Next.js, Flutter, and modern technologies.",
    url: "https://yourdomain.com", // Replace with your real URL
    siteName: "Umar Farooq Portfolio",
    images: [
      {
        url: "https://yourdomain.com/og-image.png", // Optional, but recommended
        width: 1200,
        height: 630,
        alt: "Umar Farooq Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Umar Farooq - Frontend & Mobile Developer",
    description:
      "Building scalable web and mobile applications using React.js, Next.js, Flutter, and modern technologies.",
    images: ["https://yourdomain.com/og-image.png"],
  },
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <TestimonialsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingScrollButton />
    </div>
  );
}
