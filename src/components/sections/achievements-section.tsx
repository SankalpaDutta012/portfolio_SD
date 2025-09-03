
"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Medal, Zap, ExternalLink, Trophy, ArrowDownCircle } from "lucide-react";

interface AchievementItem {
  id: string;
  text: string;
  icon: React.ReactNode;
  link?: string;
  linkLabel?: string;
}

const achievementsData: AchievementItem[] = [
{
    id: "national-finalist",
    text: "Finalist for ADOBE INDIA HACKATHON(National Finalist)",
    icon: <Medal className="mr-3 h-6 w-6 flex-shrink-0 text-primary" />,
  },
  {
    id: "rank-card",
    text: "Secured a rank card in 9th place in the 2nd Year of College (University of Engineering and Management, Kolkata)",
    icon: <Medal className="mr-3 h-6 w-6 flex-shrink-0 text-primary" />,
  },
  {
    id: "hackathon-5th",
    text: "Achieved 5th place in the ICDMAI National Hackathon",
    icon: <Trophy className="mr-3 h-6 w-6 flex-shrink-0 text-primary" />,
    link: "https://www.linkedin.com/posts/sankalpa-dutta-09187525b_icdmai-hackathon-machinelearning-activity-7301613554346995712-2bMS?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEAFqS0Bb64Jf5qZ92H53O0m4K7OdaLkdZs", // Placeholder link
    linkLabel: "View Details",
  },
  {
    id: "innofusion",
    text: "Successfully organized the hackathon 'Innofusion 1.0'",
    icon: <Zap className="mr-3 h-6 w-6 flex-shrink-0 text-primary" />,
  },
  {
    id: "hackerrank-5star",
    text: "Earned a 5-star rating on HackerRank",
    icon: <Award className="mr-3 h-6 w-6 flex-shrink-0 text-primary" />,
    link: "https://www.hackerrank.com/profile/sankyyy0128", // Placeholder link
    linkLabel: "View Profile",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

export function AchievementsSection() {
  return (
    <motion.section
      id="achievements"
      className="relative section-padding bg-secondary"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container">
        <h2 className="section-title">My Achievements</h2>
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-center md:text-left">Milestones & Recognitions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {achievementsData.map((achievement, index) => (
                  <motion.li
                    key={achievement.id}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border rounded-lg shadow-sm bg-background hover:shadow-md transition-shadow duration-300"
                    custom={index}
                    variants={listItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    <div className="flex items-center mb-2 sm:mb-0">
                      {achievement.icon}
                      <span className="text-md md:text-lg text-foreground">{achievement.text}</span>
                    </div>
                    {achievement.link && (
                      <Button variant="outline" size="sm" asChild className="mt-2 sm:mt-0 sm:ml-4 flex-shrink-0">
                        <a href={achievement.link} target="_blank" rel="noopener noreferrer">
                          {achievement.linkLabel || "Learn More"}
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <motion.a
        href="#contact"
        aria-label="Scroll to contact section"
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
