import { HomeSection } from "@/components/sections/home-section";
import { AboutSection } from "@/components/sections/about-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ExperienceInterestsSection } from "@/components/sections/experience-interests-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function PortfolioPage() {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceInterestsSection />
      <ContactSection />
    </>
  );
}
