
"use client"; // Add this directive

import type { Project } from "@/components/ui/project-card"; // Keep existing type import
import { ProjectCard } from "@/components/ui/project-card";
import { motion } from "framer-motion"; // Add this import

const projects: Project[] = [
  {
    title: "RoamFree Travel App",
    description: "A comprehensive travel application to plan and book your adventures. Discover destinations, find accommodations, and manage your itineraries.",
    imageUrl: "/r1.jpg", 
    imageHint: "travel collage", 
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
    liveDemoUrl: "https://roamfree-travel-app.onrender.com/",
    githubUrl: "https://github.com/SankalpaDutta012/RoamFree-Travel-App.git",
  },
  {
    title: "Algo_tracker",
    description: "Algo Tracker is your personal companion for tracking algorithm practice, helping you monitor progress, stay consistent, and reach your coding goals with ease.",
    imageUrl: "/bestAlgo.jpg",
    imageHint: "task app interface",
    techStack: ["React", "Node.js","TypeScript", "Next.js", "Tailwind CSS", "MongoDB"],
    liveDemoUrl: "https://algo-tracker-website.onrender.com/",
    githubUrl: "https://github.com/SankalpaDutta012/Algo-Tracker-Website.git",
  },
  {
    title: "Skill_Up",
    description: "Skill UP is a web application designed to provide personalized recommendations for courses, videos, and job openings based on user inputs. This repository contains the backend code for the application, built using Flask and MongoDB.",
    imageUrl: "/Skill_up.jpg",
    imageHint: "portfolio design",
    techStack: ["HTML", "CSS", "JavaScript", "GSAP"],
    liveDemoUrl: "https://www.linkedin.com/posts/sankalpa-dutta-09187525b_webdevelopment-flask-mongodb-activity-7298303624714100737-afBu?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEAFqS0Bb64Jf5qZ92H53O0m4K7OdaLkdZs", // Updated Link
    githubUrl: "https://github.com/SankalpaDutta012/Skill-Up-Website.git",
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
