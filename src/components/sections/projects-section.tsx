
"use client"; // Add this directive

import type { Project } from "@/components/ui/project-card"; // Keep existing type import
import { ProjectCard } from "@/components/ui/project-card";
import { motion } from "framer-motion"; // Add this import

const projects: Project[] = [
  {
    title: "RoamFree Travel App",
    description: "A comprehensive travel application to plan and book your adventures. Discover destinations, find accommodations, and manage your itineraries.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "travel app",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
    liveDemoUrl: "https://roamfree-travel-app.onrender.com/",
    githubUrl: "#", // You can update this later
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application allowing users to create, assign, and track tasks within teams.",
    imageUrl: "https://placehold.co/600x400.png?bg=007bff&fc=ffffff",
    imageHint: "task app interface",
    techStack: ["React", "Redux", "Node.js", "Express", "MongoDB"],
    liveDemoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portfolio Website V1",
    description: "My previous personal portfolio website, showcasing earlier projects and skills. Designed with a focus on simplicity and performance.",
    imageUrl: "https://placehold.co/600x400.png?bg=6f42c1&fc=ffffff",
    imageHint: "portfolio design",
    techStack: ["HTML", "CSS", "JavaScript", "GSAP"],
    githubUrl: "#",
  },
   {
    title: "IoT Smart Home Dashboard",
    description: "A dashboard to monitor and control smart home devices. Features real-time data visualization and device management.",
    imageUrl: "https://placehold.co/600x400.png?bg=fd7e14&fc=ffffff",
    imageHint: "iot dashboard",
    techStack: ["Python (Flask)", "MQTT", "React", "Charts.js"],
    liveDemoUrl: "#",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
    },
  }),
};

export function ProjectsSection() {
  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
