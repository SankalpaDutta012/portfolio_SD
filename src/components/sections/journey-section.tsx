
"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, School, ArrowDownCircle } from "lucide-react";
import type { ReactElement } from "react";

interface JourneyItem {
  id: string;
  date: string;
  title: string;
  institution: string;
  description?: string;
  icon?: ReactElement;
}

const journeyData: JourneyItem[] = [
  {
    id: "master",
    date: "2023 - Present",
    title: "Master of Technology - Specialization in AI",
    institution: "University of Engineering and Management, Kolkata",
    description: "Focusing on advanced concepts in Artificial Intelligence and Machine Learning.",
    icon: <GraduationCap className="h-6 w-6 text-primary" />,
  },
  {
    id: "bachelor",
    date: "2019 - 2023",
    title: "Bachelor of Technology - Computer Science & Engineering",
    institution: "University of Engineering and Management, Kolkata",
    description: "CGPA: 9.25. Gained a strong foundation in software development, algorithms, and data structures.",
    icon: <GraduationCap className="h-6 w-6 text-primary" />,
  },
  {
    id: "higher-secondary",
    date: "2017 - 2019",
    title: "Higher Secondary Education (ISC Board)",
    institution: "Assembly of God Church School, Sodepur",
    description: "Completed with a focus on Science, achieving 85%.",
    icon: <School className="h-6 w-6 text-primary" />,
  },
  {
    id: "secondary",
    date: "Until 2017",
    title: "Secondary Education (ICSE Board)",
    institution: "Assembly of God Church School, Sodepur",
    description: "Completed with 92%.",
    icon: <School className="h-6 w-6 text-primary" />,
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const timelineItemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
    },
  }),
};

export function JourneySection() {
  return (
    <motion.section
      id="journey"
      className="relative section-padding bg-background" // Changed to bg-background for contrast with other sections
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container">
        <h2 className="section-title">My Journey</h2>
        <div className="relative max-w-3xl mx-auto pl-6">
          {/* Timeline Line */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-border rounded-full md:left-1/2 md:-translate-x-1/2"></div>

          {journeyData.map((item, index) => (
            <motion.div
              key={item.id}
              custom={index}
              variants={timelineItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="mb-12 pl-8 md:pl-0"
            >
              <div className="relative md:flex md:items-start group">
                {/* Dot on Timeline */}
                <div className="absolute -left-[38px] top-1 h-4 w-4 rounded-full border-2 border-primary bg-background group-hover:bg-primary transition-colors duration-300 md:left-1/2 md:-translate-x-1/2 md:-translate-y-0"></div>
                
                <div className="md:w-1/2 md:pr-8 md:group-odd:order-2 md:group-odd:pl-8 md:group-odd:text-left md:group-even:text-right">
                  <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="pb-3">
                      <div className="flex items-center mb-1 md:group-even:justify-end">
                        {item.icon}
                        <span className="ml-2 text-sm font-semibold text-muted-foreground">{item.date}</span>
                      </div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="font-medium text-foreground">{item.institution}</p>
                      {item.description && (
                        <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                      )}
                    </CardContent>
                  </Card>
                </div>
                 {/* Empty div for spacing on the other side of timeline for md+ screens */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.a
        href="#achievements"
        aria-label="Scroll to achievements section"
        className="absolute bottom-10 right-10 z-20 text-primary hover:text-accent transition-colors"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5, ease: "easeInOut" }} // Increased delay
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
