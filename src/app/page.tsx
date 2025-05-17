
import type { Metadata } from 'next';
import { HomeSection } from "@/components/sections/home-section";
import { AboutSection } from "@/components/sections/about-section";
import { ProjectsSection } from "@/components/sections/projects-section";
// SkillsSection is removed as it's merged into AboutSection
import { ExperienceInterestsSection } from "@/components/sections/experience-interests-section";
import { JourneySection } from "@/components/sections/journey-section"; // Added
import { AchievementsSection } from "@/components/sections/achievements-section";
import { ContactSection } from "@/components/sections/contact-section";

export const metadata: Metadata = {
  title: "Sankalpa's Space - Developer Portfolio",
  description: 'Portfolio of Sankalpa Dutta, a full-stack developer and tech enthusiast.',
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
