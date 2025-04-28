import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export function ContactSection() {
  return (
      <section id="contact" className="py-16 md:py-24 lg:py-32 bg-muted/50">
        <div className="container max-w-4xl m-auto px-4 md:px-6 flex flex-col items-center text-center space-y-12">

          {/* Heading */}
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Get In Touch
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              I&#39;m currently open to freelance projects and collaboration opportunities. Feel free to connect!
            </p>
          </div>

          {/* Quick Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="mailto:usamaali.malik095@gmail.com" className="inline-flex">
              <Button
                  size="lg"
                  className="gap-2 transition-transform transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg"
              >
                <Mail className="h-5 w-5" />
                Email Me
              </Button>
            </a>
            <Link href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="inline-flex">
              <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 transition-transform transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </Button>
            </Link>
            <Link href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="inline-flex">
              <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 transition-transform transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg"
              >
                <Github className="h-5 w-5" />
                GitHub
              </Button>
            </Link>
          </div>

          {/* Contact Form */}
          <form
              action="mailto:usamaali.malik095@gmail.com"
              method="POST"
              encType="text/plain"
              className="w-full max-w-md space-y-4"
          >
            <input
                type="text"
                name="Name"
                placeholder="Your Name"
                required
                className="w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
                type="email"
                name="Email"
                placeholder="Your Email"
                required
                className="w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
                name="Message"
                placeholder="Your Message"
                rows={4}
                required
                className="w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button type="submit" size="lg" className="w-full">
              Send Message
            </Button>
          </form>

          {/* Download Resume Button */}
          <div>
            <Link href="/Umar_Farooq_Resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                📄 Download My Resume
              </Button>
            </Link>
          </div>

        </div>
      </section>
  );
}
