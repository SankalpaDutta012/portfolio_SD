
"use client"; 
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ExternalLink, Code, Database, Cloud, Cog, Palette, Cpu } from "lucide-react";
import { motion, animate } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react"; // Ensure React is imported for cloneElement
import { Progress } from "@/components/ui/progress";

const personalInfoAndInterests = [
  "Developing scalable web applications with modern frameworks.",
  "Expertise in JavaScript, TypeScript, React, Node.js, Python, and C++ ecosystems.",
  "Passionate about exploring IoT, smart technologies, and AI.",
  "Enjoys diving into Bengali literature and watching anime.",
  "Continuously learning and adapting to new technologies.",
];

// Skills data moved here
interface Skill {
  name: string;
  proficiency: number;
  icon: React.ReactElement;
}

const skillsData: Skill[] = [
  { name: "HTML5", proficiency: 95, icon: <Code /> },
  { name: "CSS3 & Tailwind CSS", proficiency: 90, icon: <Palette /> },
  { name: "JavaScript (ES6+)", proficiency: 92, icon: <Code /> },
  { name: "TypeScript", proficiency: 88, icon: <Code /> },
  { name: "React & Next.js", proficiency: 90, icon: <Code /> },
  { name: "Node.js & Express", proficiency: 85, icon: <Cog /> },
  { name: "Python (Flask/Django)", proficiency: 75, icon: <Code /> },
  { name: "C++", proficiency: 80, icon: <Code /> },
  { name: "MongoDB & SQL Databases", proficiency: 80, icon: <Database /> },
  { name: "IoT & Embedded Systems", proficiency: 70, icon: <Cpu /> },
  { name: "Cloud Platforms (Firebase/AWS)", proficiency: 78, icon: <Cloud /> },
];

const skillCardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
    },
  }),
};

interface AnimatedProgressProps {
  value: number;
  className?: string;
  'aria-label': string;
}

const AnimatedProgress: React.FC<AnimatedProgressProps> = ({ value, className, 'aria-label': ariaLabel }) => {
  const [animatedValue, setAnimatedValue] = useState(0);

  return (
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: '100%'}}
      viewport={{ once: true, amount: 0.8 }}
      onViewportEnter={() => {
        const controls = animate(0, value, { 
          duration: 1,
          delay: 0.2,
          ease: "easeOut",
          onUpdate: (latest) => setAnimatedValue(latest),
        });
        return () => controls.stop();
      }}
    >
      <Progress value={animatedValue} aria-label={ariaLabel} className={className} />
    </motion.div>
  );
};

export function AboutSection() {
  return (
    <motion.section 
      id="about-skills" // Updated ID
      className="section-padding bg-secondary"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }} // Adjusted amount for larger section
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <h2 className="section-title">About & Skills</h2> {/* Updated Title */}
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Column 1: About Me Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="shadow-lg h-full flex flex-col"> {/* Removed mb-16, added h-full and flex flex-col */}
              <CardHeader>
                <CardTitle className="text-2xl text-center md:text-left">A Glimpse Into My World</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-lg text-muted-foreground flex-grow"> {/* Added flex-grow */}
                <p>
                  Hello! I'm Sankalpa, a dedicated Full-Stack Developer with a knack for building robust and user-friendly applications. My journey in tech is driven by a constant curiosity and a desire to solve real-world problems through innovative solutions.
                </p>
                <p>
                  Currently, I focus on leveraging cutting-edge technologies to create seamless digital experiences. Here's a bit more about what I do and what I love:
                </p>
                <ul className="space-y-3">
                  {personalInfoAndInterests.map((item, index) => (
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
              <CardFooter className="flex justify-center md:justify-start pt-4">
                <Button asChild size="lg">
                  <Link href="https://drive.google.com/file/d/1WBMGNiKuOhofJQsTQTLRseM1tixCBR4m/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                    View My CV <ExternalLink className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Column 2: Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-center md:text-left mb-8 text-foreground">Technical Skills</h3>
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-2"> {/* Adjusted grid for skills */}
              {skillsData.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={skillCardVariants}
                >
                  <Card className="shadow-md h-full">
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center justify-between text-xl">
                        <span className="flex items-center">
                          {React.cloneElement(skill.icon, { className: "mr-3 h-6 w-6 text-primary"})}
                          {skill.name}
                        </span>
                        <span className="text-sm font-medium text-muted-foreground">{skill.proficiency}%</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <AnimatedProgress 
                        value={skill.proficiency} 
                        aria-label={`${skill.name} proficiency ${skill.proficiency}%`} 
                        className="h-3"
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
