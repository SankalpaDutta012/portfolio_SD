
"use client";
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code, Cpu, ShieldCheck, Cloud, Briefcase, Lightbulb } from 'lucide-react';

// Data
const experiences = [
  { title: "IoT", description: "Building connected devices and intelligent systems for the future.", icon: <Cpu className="h-10 w-10 sm:h-12 sm:w-12 mx-auto text-primary" /> },
  { title: "Cyber Security", description: "Protecting digital assets and ensuring data integrity against threats.", icon: <ShieldCheck className="h-10 w-10 sm:h-12 sm:w-12 mx-auto text-primary" /> },
  { title: "Cloud Computing", description: "Leveraging cloud platforms for scalable, resilient, and efficient solutions.", icon: <Cloud className="h-10 w-10 sm:h-12 sm:w-12 mx-auto text-primary" /> },
  { title: "Full Stack Development", description: "Crafting end-to-end web applications with a focus on user experience.", icon: <Briefcase className="h-10 w-10 sm:h-12 sm:w-12 mx-auto text-primary" /> },
];

const interests = [
  { title: "Prompt Engineering", description: "Designing effective prompts to harness the power of AI models.", icon: <Brain className="h-10 w-10 sm:h-12 sm:w-12 mx-auto text-primary" /> },
  { title: "Object Oriented Programming", description: "Applying OOP principles for robust and maintainable software design.", icon: <Code className="h-10 w-10 sm:h-12 sm:w-12 mx-auto text-primary" /> },
  { title: "Problem Solving", description: "Tackling complex challenges with creative and analytical approaches.", icon: <Lightbulb className="h-10 w-10 sm:h-12 sm:w-12 mx-auto text-primary" /> },
];

interface FlippableCardProps {
  item: { title: string; description: string; icon: React.ReactNode };
}

const FlippableCard: React.FC<FlippableCardProps> = ({ item }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="perspective w-full h-48 sm:h-56 cursor-pointer group"
      onClick={handleFlip}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleFlip()}
      aria-pressed={isFlipped}
      aria-label={`Flip card for ${item.title}`}
    >
      <motion.div
        className="relative w-full h-full preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Front Face */}
        <Card className="absolute w-full h-full backface-hidden flex flex-col items-center justify-center p-3 sm:p-4 text-center shadow-lg">
          <CardContent className="flex flex-col items-center justify-center">
            {item.icon}
            <p className="mt-2 text-md sm:text-lg font-semibold">{item.title}</p>
          </CardContent>
        </Card>
        {/* Back Face */}
        <Card className="absolute w-full h-full backface-hidden flex flex-col items-center justify-center p-3 sm:p-4 text-center shadow-lg rotate-y-180">
          <CardContent>
            <p className="text-sm sm:text-base text-muted-foreground">{item.description}</p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};


export function ExperienceInterestsSection() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.1 } },
  };

  const cardMotionVariants = { 
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <motion.section
      id="experience-interests"
      className="section-padding bg-secondary"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container">
        <h2 className="section-title">Experience & Interests</h2>

        <motion.div className="mb-12 md:mb-16" variants={sectionVariants}>
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-primary">My Experience</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {experiences.map((exp, index) => (
              <motion.div key={exp.title + index} variants={cardMotionVariants}>
                <FlippableCard item={exp} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={sectionVariants}>
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-accent">My Interests</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {interests.map((interest, index) => (
              <motion.div key={interest.title + index} variants={cardMotionVariants}>
                <FlippableCard item={interest} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
