
import type { Metadata } from 'next';
import { HomeSection } from "@/components/sections/home-section";
import { AboutSection } from "@/components/sections/about-section";
import { ProjectsSection } from "@/components/sections/projects-section";
// SkillsSection is removed as it's merged into AboutSection
import { ExperienceInterestsSection } from "@/components/sections/experience-interests-section";
import { JourneySection } from "@/components/sections/journey-section"; // Added
import { AchievementsSection } from "@/components/sections/achievements-section";
import { ContactSection } from "@/components/sections/contact-section";

// export const metadata: Metadata = {
//   title: "Sankalpa's Space - Developer Portfolio",
//   description: 'Portfolio of Sankalpa Dutta, a full-stack developer and tech enthusiast.',
// };

export const metadata: Metadata = {
  title: "Sankalpa Dutta | Full-Stack Developer & Tech Enthusiast",
  description: "Explore the portfolio of Sankalpa Dutta – a passionate Full-Stack Developer and CSE undergrad specializing in IoT, AI, and Blockchain. Showcasing innovative projects, achievements, and technical skills.",
  icons: {
    icon: "/favicon.ico", // Make sure this file exists in /public
  },
  openGraph: {
    title: "Sankalpa Dutta | Full-Stack Developer Portfolio",
    description: "Dive into the world of Sankalpa Dutta – exploring cutting-edge projects, IoT solutions, and full-stack web development with a passion for technology and innovation.",
    url: "https://portfolio-sd.onrender.com", // Replace with your actual domain
    siteName: "Sankalpa Dutta Portfolio",
    images: [
      {
        url: "/SD.png", // Make sure this file exists in /public
        width: 1200,
        height: 630,
        alt: "Sankalpa Dutta Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


export default function PortfolioPage() {
  return (
    <>
      <HomeSection />
      <AboutSection /> {/* This now includes skills */}
      <ProjectsSection />
      {/* <SkillsSection />  Removed */}
      <ExperienceInterestsSection />
      <JourneySection /> {/* Added before Achievements */}
      <AchievementsSection />
      <ContactSection />
    </>
  );
}
