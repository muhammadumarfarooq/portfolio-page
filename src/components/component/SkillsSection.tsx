"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, Database, Wrench, Users } from "lucide-react";

interface Skill {
  name: string;
}

interface SkillGroupProps {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

function SkillGroup({ title, icon, skills }: SkillGroupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-xl bg-muted/30 p-6 backdrop-blur-sm border"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-primary/10">{icon}</div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill.name}
            className="rounded-full bg-muted px-3 py-1 text-sm font-medium hover:bg-primary/10 transition"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  const frontendSkills = [
    { name: "React.js" },
    { name: "Next.js" },
    { name: "TypeScript" },
    { name: "JavaScript" },
    { name: "HTML5" },
    { name: "CSS3" },
    { name: "Tailwind CSS" },
  ];

  const mobileSkills = [
    { name: "Flutter" },
    { name: "Dart" },
    { name: "React Native" },
    { name: "Expo" },
  ];

  const backendSkills = [
    { name: "Node.js" },
    { name: "Supabase" },
    { name: "Firebase" },
    { name: "REST APIs" },
    { name: "GraphQL" },
  ];

  const toolsSkills = [
    { name: "Git" },
    { name: "GitHub" },
    { name: "Vercel" },
    { name: "VS Code" },
    { name: "Figma" },
    { name: "AWS Basics" },
  ];

  const softSkills = [
    { name: "Team Collaboration" },
    { name: "Problem Solving" },
    { name: "Time Management" },
    { name: "Remote Work" },
    { name: "Communication" },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 lg:py-32">
      <div className="container m-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Technical Skills
            </h2>
            <p className="max-w-[750px] text-muted-foreground md:text-xl mt-4">
              Technologies and tools I use to build world-class web and mobile
              applications.
            </p>
          </motion.div>
        </div>

        {/* Skills grouped nicely */}
        <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:gap-12">
          <SkillGroup
            title="Frontend"
            icon={<Code2 className="h-6 w-6 text-primary" />}
            skills={frontendSkills}
          />
          <SkillGroup
            title="Mobile Development"
            icon={<Smartphone className="h-6 w-6 text-primary" />}
            skills={mobileSkills}
          />
          <SkillGroup
            title="Backend / Database"
            icon={<Database className="h-6 w-6 text-primary" />}
            skills={backendSkills}
          />
          <SkillGroup
            title="Tools & Cloud"
            icon={<Wrench className="h-6 w-6 text-primary" />}
            skills={toolsSkills}
          />
          <SkillGroup
            title="Soft Skills"
            icon={<Users className="h-6 w-6 text-primary" />}
            skills={softSkills}
          />
        </div>
      </div>
    </section>
  );
}
