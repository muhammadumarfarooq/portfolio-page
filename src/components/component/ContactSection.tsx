import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-muted/50">
      <div className="container max-w-4xl m-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12 space-y-6">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Get In Touch
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            I'm currently open to new opportunities and collaborations. Feel
            free to reach out via email or connect with me on LinkedIn.
          </p>
        </div>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <a href="mailto:develop.umar@gmail.com" className="inline-flex">
            <Button size="lg" className="gap-2">
              <Mail className="h-5 w-5" />
              Email Me
            </Button>
          </a>

          <Link
            href="https://www.linkedin.com/in/your-linkedin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" variant="outline" className="gap-2">
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </Button>
          </Link>

          <Link
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" variant="outline" className="gap-2">
              <Github className="h-5 w-5" />
              GitHub
            </Button>
          </Link>
        </div>

        {/* Contact Form */}
        <form
          action="mailto:develop.umar@gmail.com"
          method="POST"
          encType="text/plain"
          className="max-w-md mx-auto w-full space-y-4 mb-12"
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

        {/* Download Resume */}
        <div className="flex justify-center">
          <Link
            href="/Umar_Farooq_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              📄 Download My Resume
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
