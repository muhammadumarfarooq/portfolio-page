import { Briefcase, Code, Monitor, Smartphone } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32">
      <div className="container m-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            About Me
          </h2>
          <p className="max-w-[750px] text-muted-foreground md:text-xl">
            I'm a Frontend and Mobile Developer with 5+ years of experience
            building fast, scalable web and mobile applications using React.js,
            Next.js, Flutter, and modern tech stacks.
          </p>
        </div>

        {/* Bullet Points Highlights */}
        <div className="mx-auto mt-12 grid max-w-3xl gap-8 text-left">
          <ul className="list-disc list-inside text-muted-foreground space-y-4 text-lg leading-relaxed">
            <li>
              🚀 Specialized in SaaS dashboards, real estate platforms,
              marketplaces, and food ordering systems.
            </li>
            <li>
              📱 Experienced in crafting responsive UIs for both web and mobile
              (React Native, Flutter).
            </li>
            <li>
              🌎 Skilled at working remotely with global cross-functional teams
              using modern collaboration tools.
            </li>
            <li>
              🎯 Focused on creating seamless, user-centric experiences and
              high-performance applications.
            </li>
            <li>
              🛠️ Continuously learning and adapting to the latest technologies
              to deliver outstanding results.
            </li>
          </ul>
        </div>

        {/* Highlights Icons */}
        <div className="flex flex-wrap justify-center gap-6 pt-12">
          <div className="flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-primary" />
            <span>5+ Years Experience</span>
          </div>
          <div className="flex items-center gap-2">
            <Code className="h-5 w-5 text-primary" />
            <span>Full-Stack Capable</span>
          </div>
          <div className="flex items-center gap-2">
            <Smartphone className="h-5 w-5 text-primary" />
            <span>Web & Mobile Apps</span>
          </div>
          <div className="flex items-center gap-2">
            <Monitor className="h-5 w-5 text-primary" />
            <span>Remote Friendly</span>
          </div>
        </div>
      </div>
    </section>
  );
}
