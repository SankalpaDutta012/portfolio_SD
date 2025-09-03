
"use client"; 

import type { Project } from "@/components/ui/project-card"; 
import { ProjectCard } from "@/components/ui/project-card";
import { motion } from "framer-motion"; 
import { ArrowDownCircle } from "lucide-react";

const projects: Project[] = [
  {
    title: "PDF Analyzer",
    description: "PDF Analyzer is an intelligent document management system that revolutionizes how you interact with your personal PDF library. Instead of treating documents as isolated files, our application creates connections between related content across your entire collection.",
    imageUrl: "/pdfAnalyzer.png",
    imageHint: "pdf analysis", 
    techStack: ["JavaScript", "Python", "Tailwind CSS", "Node.js"],
    liveDemoUrl: "https://pdf-analyze-rose.vercel.app",
    githubUrl: "https://github.com/SankalpaDutta012/PDF_Insights.git",
  },
  {
    title: "RoamFree Travel App",
    description: "A comprehensive travel application to plan and book your adventures. Discover destinations, find accommodations, and manage your itineraries.",
    imageUrl: "/RoamFree.jpg",
    imageHint: "travel collage", 
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
    liveDemoUrl: "https://roam-free.vercel.app/",
    githubUrl: "https://github.com/SankalpaDutta012/RoamFree-Travel-App.git",
  },
  {
    title: "Algo_tracker",
    description: "Algo Tracker is your personal companion for tracking algorithm practice, helping you monitor progress, stay consistent, and reach your coding goals with ease.",
    imageUrl: "/ALGT.jpg",
    imageHint: "task app interface",
    techStack: ["React", "Node.js","TypeScript", "Next.js", "Tailwind CSS", "MongoDB"],
    liveDemoUrl: "https://algo-tracker-ten.vercel.app/",
    githubUrl: "https://github.com/SankalpaDutta012/Algo-Tracker-Website.git",
  },
  {
    title: "Skill_Up",
    description: "Skill UP is a web application designed to provide personalized recommendations for courses, videos, and job openings based on user inputs. This repository contains the backend code for the application, built using Flask and MongoDB.",
    imageUrl: "/SkillUp.jpg",
    imageHint: "webapp design",
    techStack: ["HTML", "CSS", "JavaScript", "Python (Flask)", "MongoDB"],
    liveDemoUrl: "https://www.linkedin.com/posts/sankalpa-dutta-09187525b_webdevelopment-flask-mongodb-activity-7298303624714100737-afBu?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEAFqS0Bb64Jf5qZ92H53O0m4K7OdaLkdZs", 
    githubUrl: "https://github.com/SankalpaDutta012/Skill-Up-Website.git",
  },
   {
    title: "Snippet Sphere",
    description: "Snippet Sphere is a collaborative platform for storing, sharing, and managing code snippets across teams or personal projects. It features syntax highlighting, tagging, and quick search for efficient code reuse and productivity.",
    imageUrl: "/SnippetSphere.png",
    imageHint: "web app",
    techStack: ["JavaScript", "TypeScript", "MongoDb", "Node js", "Next js"],
    liveDemoUrl: "https://snippet-sphere-liart.vercel.app/",
    githubUrl: "https://github.com/SankalpaDutta012/Snippet-Sphere.git",
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
