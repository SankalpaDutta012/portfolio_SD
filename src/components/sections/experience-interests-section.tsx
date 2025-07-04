
"use client";
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code, Cpu, ShieldCheck, Cloud, Briefcase, Lightbulb, Layers, BrainCircuit, Network, Users, ArrowDownCircle } from 'lucide-react';

// Data
const allItemsData = [
  { title: "IoT", description: "Building connected devices and intelligent systems for the future.", icon: <Cpu className="h-10 w-10 sm:h-12 sm:w-12 mx-auto text-primary" /> },
  { title: "Cyber Security", description: "Protecting digital assets and ensuring data integrity against threats.", icon: <ShieldCheck className="h-10 w-10 sm:h-12 sm:w-12 mx-auto text-primary" /> },
  { title: "Cloud Computing", description: "Leveraging cloud platforms for scalable, resilient, and efficient solutions.", icon: <Cloud className="h-10 w-10 sm:h-12 sm:w-12 mx-auto text-primary" /> },
  { title: "Full Stack Development", description: "Crafting end-to-end web applications with a focus on user experience.", icon: <Briefcase className="h-10 w-10 sm:h-12 sm:w-12 mx-auto text-primary" /> },
  { title: "Prompt Engineering", description: "Designing effective prompts to harness the power of AI models.", icon: <Brain className="h-10 w-10 sm:h-12 sm:w-12 mx-auto text-primary" /> },
  { title: "Object Oriented Programming", description: "Applying OOP principles for robust and maintainable software design.", icon: <Code className="h-10 w-10 sm:h-12 sm:w-12 mx-auto text-primary" /> },
  { title: "Problem Solving", description: "Tackling complex challenges with creative and analytical approaches.", icon: <Lightbulb className="h-10 w-10 sm:h-12 sm:w-12 mx-auto text-primary" /> },
  { title: "Web Development", description: "Building modern, responsive, and performant websites and web applications.", icon: <Layers className="h-10 w-10 sm:h-12 sm:w-12 mx-auto text-primary" /> },
  { title: "Machine Learning", description: "Developing algorithms that allow systems to learn from and make decisions based on data.", icon: <BrainCircuit className="h-10 w-10 sm:h-12 sm:w-12 mx-auto text-primary" /> },
  { title: "Deep Learning", description: "Utilizing neural networks with many layers to model complex patterns in large datasets.", icon: <Network className="h-10 w-10 sm:h-12 sm:w-12 mx-auto text-primary" /> },
  { title: "User-Focused Development", description: "Prioritizing user needs and feedback to create intuitive and effective applications.", icon: <Users className="h-10 w-10 sm:h-12 sm:w-12 mx-auto text-primary" /> },
];

interface FlippableCardProps {
  item: { title: string; description: string; icon: React.ReactNode };
}

const FlippableCard: React.FC<FlippableCardProps> = ({ item }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="perspective w-full h-48 sm:h-56 group"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      aria-label={`Card for ${item.title}, hover to see details`}
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
      id="field-of-interest" 
      className="relative section-padding bg-secondary" 
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container">
        <h2 className="section-title">Field of Interest</h2>

        <motion.div variants={sectionVariants}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {allItemsData.map((item, index) => (
              <motion.div key={item.title + index} variants={cardMotionVariants}>
                <FlippableCard item={item} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <motion.a
        href="#journey" /* Updated href */
        aria-label="Scroll to journey section"
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
