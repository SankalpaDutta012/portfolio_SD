import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Cloud, Cog, BarChartBig, Cpu, Palette } from "lucide-react";

const skills = [
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

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding bg-secondary">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {skills.map((skill) => (
            <Card key={skill.name} className="shadow-md">
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
                <Progress value={skill.proficiency} aria-label={`${skill.name} proficiency ${skill.proficiency}%`} className="h-3"/>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
