
"use client"; // Added this because framer-motion components are client components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const skillsAndInterests = [
  "Developing scalable web applications with modern frameworks.",
  "Expertise in JavaScript, TypeScript, React, and Node.js ecosystems.",
  "Passionate about exploring IoT, smart technologies, and AI.",
  "Enjoys diving into Bengali literature and watching anime.",
  "Continuously learning and adapting to new technologies.",
];

export function AboutSection() {
  return (
    <motion.section 
      id="about" 
      className="section-padding bg-secondary"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-center md:text-left">A Glimpse Into My World</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-lg text-muted-foreground">
              <p>
                Hello! I'm Sankalpa, a dedicated Full-Stack Developer with a knack for building robust and user-friendly applications. My journey in tech is driven by a constant curiosity and a desire to solve real-world problems through innovative solutions.
              </p>
              <p>
                Currently, I focus on leveraging cutting-edge technologies to create seamless digital experiences. Here's a bit more about what I do and what I love:
              </p>
              <ul className="space-y-3">
                {skillsAndInterests.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                I believe in the power of collaboration and continuous improvement, always eager to take on new challenges and expand my skillset.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.section>
  );
}
