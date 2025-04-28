"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  period: string;
  achievements: string[];
}

const experiences: Experience[] = [
  {
    title: "Senior Frontend Developer",
    company: "Remote",
    period: "2021 - Present",
    achievements: [
      "Led frontend development for SaaS merchant dashboards and customer-facing storefronts using React.js and Next.js.",
      "Built and launched mobile apps using React Native and Flutter, improving user engagement by 30%.",
      "Collaborated with cross-functional teams (designers, backend engineers, product managers) in a fully remote setup.",
      "Optimized performance and SEO across multiple web platforms, boosting page speed scores by 25%.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Food Ordering App",
    period: "2019 - 2021",
    achievements: [
      "Developed merchant dashboard and real-time orders management systems using React and Redux.",
      "Implemented mobile storefront app for customers with React Native, resulting in a 40% increase in mobile orders.",
      "Worked closely with backend engineers to integrate REST APIs and improve ordering workflows.",
    ],
  },
  {
    title: "Junior Frontend Developer",
    company: "Web Agency",
    period: "2018 - 2019",
    achievements: [
      "Created responsive landing pages and business websites for startup and SME clients using HTML5, CSS3, and JavaScript.",
      "Collaborated directly with clients to gather requirements, improving delivery satisfaction rate to 95%.",
      "Ensured cross-browser compatibility and mobile responsiveness across all projects.",
    ],
  },
];

function ExperienceItem({ experience }: { experience: Experience }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative pl-8 border-l border-muted-foreground/20"
    >
      <div className="absolute left-0 top-1 flex items-center justify-center w-4 h-4 -translate-x-1/2 rounded-full bg-primary">
        <Briefcase className="w-2 h-2 text-primary-foreground" />
      </div>
      <div className="space-y-3">
        <div>
          <h3 className="text-xl font-bold">{experience.title}</h3>
          <p className="text-muted-foreground">
            {experience.company} • {experience.period}
          </p>
        </div>
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          {experience.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24 lg:py-32 bg-muted/50">
      <div className="container max-w-6xl m-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Work Experience
            </h2>
            <p className="mt-4 max-w-[750px] text-muted-foreground md:text-xl">
              Over 5 years of professional experience delivering scalable web
              and mobile applications.
            </p>
          </motion.div>
        </div>

        <div className="mx-auto grid max-w-3xl gap-12">
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
}
