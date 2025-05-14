
"use client";
import React, { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Cloud, Cog, Palette, Cpu } from "lucide-react";
import { motion, animate } from "framer-motion"; // Updated import

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
  { name: "MongoDB & SQL Databases", proficiency: 80, icon: <Database /> },
  { name: "Python (Flask/Django)", proficiency: 75, icon: <Code /> },
  { name: "IoT & Embedded Systems", proficiency: 70, icon: <Cpu /> },
  { name: "Cloud Platforms (Firebase/AWS)", proficiency: 78, icon: <Cloud /> },
];

const cardVariants = {
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
        // Animate the progress bar fill
        const controls = animate(0, value, { // Changed motion.animate to animate
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


export function SkillsSection() {
  return (
    <section id="skills" className="section-padding bg-secondary">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Technical Skills
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
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
      </div>
    </section>
  );
}
