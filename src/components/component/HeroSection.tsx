import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-muted/50">
      <div className="container m-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Optional Availability Badge */}
          <div className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Open to Full-time & Freelance Opportunities
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Frontend & Mobile Developer
          </h1>

          {/* Subheadline */}
          <p className="max-w-[600px] text-muted-foreground md:text-xl mt-4">
            Building scalable web and mobile applications with React.js,
            Next.js, Flutter, and cutting-edge technologies.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col gap-3 mt-8 sm:flex-row">
            <Link href="#projects">
              <Button size="lg">
                View My Work
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="#contact">
              <Button size="lg" variant="outline">
                Contact Me
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
