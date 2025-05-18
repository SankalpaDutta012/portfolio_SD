'use client';

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, School, Briefcase, Building2, ArrowDownCircle } from "lucide-react";
import type { ReactElement } from "react";

interface JourneyItem {
  id: string;
  date: string;
  title: string;
  institution: string;
  description: string | string[];
  mainIcon: ReactElement;
}

const journeyData: JourneyItem[] = [
  {
    id: "ai-intern",
    date: "Mar 2025 – Present",
    title: "AI Intern – Health Chatbot Development",
    institution: "University of Calcutta",
    description: [
      "Building an AI-powered health chatbot to translate medical conversations between English and Bengali.",
      "Developing NLP models to ensure accurate and context-aware sentence translation.",
      "Aiming to bridge the language gap between doctors and patients for better healthcare communication."
    ],
    mainIcon: <Briefcase size={26} className="text-primary/80" />,
  },
  {
    id: "smart-traffic-intern",
    date: "Jun 2024 – Aug 2024",
    title: "Intern – Smart Traffic Optimization System",
    institution: "IEDC Lab , UEMK",
    description: "Worked on designing and developing a smart traffic optimization system using real-time data analysis and ML models to improve urban traffic flow.",
    mainIcon: <Briefcase size={26} className="text-primary/80" />,
  },
  {
    id: "bachelor",
    date: "Aug 2022 - Jul 2026 (Expected)",
    title: "Bachelor of Technology - CSE (IoT, Cybersecurity, Blockchain)",
    institution: "University of Engineering and Management, Kolkata",
    description: "Pursuing B.Tech in CSE with a focus on full-stack development and AI. Active in coding competitions and tech communities.",
    mainIcon: <GraduationCap size={26} className="text-primary/80" />,
  },
  {
    id: "higher-secondary",
    date: "2020 - 2022",
    title: "Higher Secondary Education (WBHSCE Board)",
    institution: "Barrackpore Government High School, Barrackpore",
    description: "Completed with a focus on Science, achieving 82%.",
    mainIcon: <School size={26} className="text-primary/80" />,
  },
  {
    id: "secondary",
    date: "Until 2020",
    title: "Secondary Education (WBBSE Board)",
    institution: "Ramkrishna Vivekananda Mission Bidyabhavan, Barrackpore",
    description: "Completed with 88%.",
    mainIcon: <School size={26} className="text-primary/80" />,
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const cardItemVariants = {
  hidden: (isLeft: boolean) => ({ opacity: 0, x: isLeft ? -40 : 40 }),
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

interface JourneyCardProps {
  item: JourneyItem;
  isLeftAlignedOnDesktop: boolean;
}

const JourneyCard: React.FC<JourneyCardProps> = ({ item, isLeftAlignedOnDesktop }) => {
  return (
    <Card className={`shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card/80 backdrop-blur-sm border-border/50 w-full
                    ${isLeftAlignedOnDesktop ? 'md:text-right' : 'md:text-left'}`}>
      <CardHeader className="pb-3 relative">
        <div className="absolute top-4 right-4">
          {item.mainIcon}
        </div>
        <CardTitle className={`text-xl lg:text-2xl font-bold text-accent mb-1 mr-12`}>
          {item.title}
        </CardTitle>
        <div className={`flex items-center text-sm text-muted-foreground mt-1 ${isLeftAlignedOnDesktop ? 'md:justify-end' : 'md:justify-start'}`}>
          <Building2 size={14} className="mr-2 shrink-0" />
          <span className="font-medium">{item.institution}</span>
        </div>
        <div className={`text-xs text-muted-foreground/80`}>{item.date}</div>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground pt-2">
        {Array.isArray(item.description) ? (
          <ul className={`space-y-1 ${isLeftAlignedOnDesktop ? 'md:list-none' : 'list-disc pl-4'}`}>
            {item.description.map((desc, i) => (
              <li key={i} className={`${isLeftAlignedOnDesktop ? 'md:text-right' : 'md:text-left'}`}>{desc}</li>
            ))}
          </ul>
        ) : (
          <p>{item.description}</p>
        )}
      </CardContent>
    </Card>
  );
};

export function JourneySection() {
  return (
    <motion.section
      id="journey"
      className="relative section-padding bg-background"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
    >
      <div className="container">
        <h2 className="section-title">My Journey</h2>
        <div className="relative max-w-4xl mx-auto">
          {/* Central timeline bar for Desktop */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-border/70 -translate-x-1/2"></div>
          {/* Left timeline bar for Mobile */}
          <div className="absolute top-0 bottom-0 left-3 w-0.5 bg-border/70 md:hidden"></div>

          <div className="space-y-10 md:space-y-0">
            {journeyData.map((item, index) => {
              const isLeft = index % 2 !== 0;

              return (
                <motion.div
                  key={item.id}
                  className={`relative md:grid md:grid-cols-[1fr_auto_1fr] md:gap-x-6 items-start ${index > 0 ? 'md:mt-10' : ''}`}
                >
                  {/* Mobile: Timeline Dot */}
                  <div className="md:hidden absolute left-[0.62rem] top-1.5 h-4 w-4 rounded-full bg-primary border-2 border-background z-10"></div>

                  {/* Desktop: Left Content or Spacer */}
                  {isLeft ? (
                    <motion.div
                      className="hidden md:block md:col-start-1 md:text-right"
                      custom={true}
                      variants={cardItemVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      <JourneyCard item={item} isLeftAlignedOnDesktop={true} />
                    </motion.div>
                  ) : (
                    <div className="hidden md:block md:col-start-1" />
                  )}

                  {/* Desktop: Timeline Dot */}
                  <div className="hidden md:flex md:col-start-2 justify-center relative h-full">
                    <div className="absolute top-1.5 h-5 w-5 rounded-full bg-primary border-4 border-background z-10"></div>
                  </div>

                  {/* Desktop: Right Content or Spacer */}
                  {!isLeft ? (
                    <motion.div
                      className="hidden md:block md:col-start-3 md:text-left"
                      custom={false}
                      variants={cardItemVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      <JourneyCard item={item} isLeftAlignedOnDesktop={false} />
                    </motion.div>
                  ) : (
                    <div className="hidden md:block md:col-start-3" />
                  )}

                  {/* Mobile: Render JourneyCard once per item */}
                  <div className="ml-10 md:hidden">
                    <motion.div
                      custom={false}
                      variants={cardItemVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      <JourneyCard item={item} isLeftAlignedOnDesktop={false} />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <motion.a
        href="#achievements"
        aria-label="Scroll to achievements section"
        className="absolute bottom-10 right-10 z-20 text-primary hover:text-accent transition-colors"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
        whileHover={{ scale: 1.1 }}
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDownCircle size={40} strokeWidth={1.5} />
        </motion.div>
      </motion.a>
    </motion.section>
  );
}
