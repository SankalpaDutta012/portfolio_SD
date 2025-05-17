
"use client"; 

import type { Project } from "@/components/ui/project-card"; 
import { ProjectCard } from "@/components/ui/project-card";
import { motion } from "framer-motion"; 
import { ArrowDownCircle } from "lucide-react";

const projects: Project[] = [
  {
    title: "RoamFree Travel App",
    description: "A comprehensive travel application to plan and book your adventures. Discover destinations, find accommodations, and manage your itineraries.",
    imageUrl: "data:image/svg+xml,%3Csvg%20width%3D%22600%22%20height%3D%22400%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Crect%20width%3D%22600%22%20height%3D%22400%22%20fill%3D%22%23ddd%22%3E%3C/rect%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20font-family%3D%22Arial%22%20font-size%3D%2224%22%20fill%3D%22%23333%22%20text-anchor%3D%22middle%22%20dy%3D%22.3em%22%3EGenerated%20Image%3C/text%3E%3C/svg%3E",
    imageHint: "travel collage", 
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
    liveDemoUrl: "https://roamfree-travel-app.onrender.com/",
    githubUrl: "https://github.com/SankalpaDutta012/RoamFree-Travel-App.git",
  },
  {
    title: "Algo_tracker",
    description: "Algo Tracker is your personal companion for tracking algorithm practice, helping you monitor progress, stay consistent, and reach your coding goals with ease.",
    imageUrl: "/ALGT.jpg",
    imageHint: "task app interface",
    techStack: ["React", "Node.js","TypeScript", "Next.js", "Tailwind CSS", "MongoDB"],
    liveDemoUrl: "https://algo-tracker-website.onrender.com/",
    githubUrl: "https://github.com/SankalpaDutta012/Algo-Tracker-Website.git",
  },
  {
    title: "Skill_Up",
    description: "Skill UP is a web application designed to provide personalized recommendations for courses, videos, and job openings based on user inputs. This repository contains the backend code for the application, built using Flask and MongoDB.",
    imageUrl: "/SkillUp.jpg",
    imageHint: "portfolio design",
    techStack: ["HTML", "CSS", "JavaScript", "Python (Flask)", "MongoDB"],
    liveDemoUrl: "https://www.linkedin.com/posts/sankalpa-dutta-09187525b_webdevelopment-flask-mongodb-activity-7298303624714100737-afBu?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEAFqS0Bb64Jf5qZ92H53O0m4K7OdaLkdZs", 
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
    <motion.section 
      id="projects"
      className="relative section-padding" 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, amount: 0.1 }} 
      variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 }}}} 
    >
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
      <motion.a
        href="#field-of-interest"
        aria-label="Scroll to field of interest section"
        className="absolute bottom-10 right-10 z-20 text-primary hover:text-accent transition-colors"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.5, ease: "easeInOut" }} 
        whileHover={{ scale: 1.1 }}
      >
        <motion.div
          animate={{ y: [0, -8, 0] }} 
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDownCircle size={40} strokeWidth={1.5} />
        </motion.div>
      </motion.a>
    </motion.section>
  );
}
