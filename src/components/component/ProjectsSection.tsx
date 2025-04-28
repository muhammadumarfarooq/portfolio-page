"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  coverImage: string;
  liveLink?: string;
  githubLink?: string;
}

const projects: Project[] = [
  {
    title: "Real Estate Dashboard",
    description:
      "A powerful dashboard for realtors to manage listings, analytics, and clients using Next.js and Tailwind CSS.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    coverImage: "/realestate.jpg",
    liveLink: "https://realestate-demo.example.com",
    githubLink: "https://github.com/umar/realestate-dashboard",
  },
  {
    title: "Food Ordering Platform",
    description:
      "End-to-end ordering platform including merchant dashboard, storefront, and mobile ordering system.",
    technologies: ["React", "React Native", "Redux"],
    coverImage: "/food-ordering.jpg",
    liveLink: "https://foodapp.example.com",
    githubLink: "https://github.com/umar/food-ordering-platform",
  },
  {
    title: "Maum Marketplace App",
    description:
      "Flutter-based mobile marketplace application with secure payments and product listings.",
    technologies: ["Flutter", "Dart", "Firebase"],
    coverImage: "/market.jpeg",
    liveLink: "https://maum-marketplace.example.com",
    githubLink: "https://github.com/umar/maum-marketplace",
  },
  {
    title: "Landing Pages Collection",
    description:
      "High-converting landing pages crafted for Double Parked, True Gaming, and SaaS startups.",
    technologies: ["HTML", "CSS", "JavaScript"],
    coverImage: "/landing-page-banner.jpg",
    liveLink: "https://landingpages.example.com",
    githubLink: "https://github.com/umar/landing-pages",
  },
  // Add more if needed...
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-xl overflow-hidden shadow-lg bg-card p-6 group transition-transform hover:-translate-y-1 hover:shadow-2xl"
    >
      <div className="relative aspect-video rounded-lg overflow-hidden mb-6">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      <h3 className="text-2xl font-bold">{project.title}</h3>
      <p className="text-muted-foreground my-4">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-muted px-3 py-1 text-sm font-medium"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        {project.liveLink && (
          <Link
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center gap-2 text-primary font-semibold">
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </button>
          </Link>
        )}
        {project.githubLink && (
          <Link
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center gap-2 text-muted-foreground font-semibold">
              <Github className="h-4 w-4" />
              Source Code
            </button>
          </Link>
        )}
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 lg:py-32">
      <div className="container m-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Featured Projects
            </h2>
            <p className="mt-4 max-w-[750px] text-muted-foreground md:text-xl">
              A selection of apps and platforms I've crafted for startups and
              businesses.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
