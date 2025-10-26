import { Card, CardContent } from "@/components/ui/card";
import { Code2, Brain, Globe, Database, GitBranch, Smartphone } from "lucide-react";

const skillCategories = [
  {
    category: "Programming Languages",
    icon: Code2,
    skills: ["Java", "Python", "JavaScript", "TypeScript", "C++"],
  },
  {
    category: "AI & Machine Learning",
    icon: Brain,
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "NLP", "Computer Vision"],
  },
  {
    category: "Web Development",
    icon: Globe,
    skills: ["React", "HTML5", "CSS3", "Tailwind CSS", "Node.js"],
  },
  {
    category: "Databases",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "Firebase", "MySQL"],
  },
  {
    category: "Tools & Platforms",
    icon: GitBranch,
    skills: ["Git", "GitHub", "Docker", "VS Code", "Jupyter"],
  },
  {
    category: "Other Skills",
    icon: Smartphone,
    skills: ["RESTful APIs", "Responsive Design", "Agile", "Problem Solving"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in">
          Skills & Technologies
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-12 rounded-full"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-semibold text-lg">{category.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span 
                        key={i}
                        className="text-sm px-3 py-1.5 bg-background text-foreground rounded-md border border-border hover:border-accent transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
