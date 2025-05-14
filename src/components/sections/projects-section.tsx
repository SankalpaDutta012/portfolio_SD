import { ProjectCard, type Project } from "@/components/ui/project-card";

const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with product listings, cart functionality, and user accounts. Built with Next.js and Stripe integration.",
    imageUrl: "https://placehold.co/600x400.png?bg=20c997&fc=ffffff",
    imageHint: "e-commerce website",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Firebase"],
    liveDemoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application allowing users to create, assign, and track tasks within teams.",
    imageUrl: "https://placehold.co/600x400.png?bg=007bff&fc=ffffff",
    imageHint: "task app interface",
    techStack: ["React", "Redux", "Node.js", "Express", "MongoDB"],
    liveDemoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portfolio Website V1",
    description: "My previous personal portfolio website, showcasing earlier projects and skills. Designed with a focus on simplicity and performance.",
    imageUrl: "https://placehold.co/600x400.png?bg=6f42c1&fc=ffffff",
    imageHint: "portfolio design",
    techStack: ["HTML", "CSS", "JavaScript", "GSAP"],
    githubUrl: "#",
  },
   {
    title: "IoT Smart Home Dashboard",
    description: "A dashboard to monitor and control smart home devices. Features real-time data visualization and device management.",
    imageUrl: "https://placehold.co/600x400.png?bg=fd7e14&fc=ffffff",
    imageHint: "iot dashboard",
    techStack: ["Python (Flask)", "MQTT", "React", "Charts.js"],
    liveDemoUrl: "#",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
