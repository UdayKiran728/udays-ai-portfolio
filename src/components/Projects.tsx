import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI-Powered Chatbot",
    description: "Intelligent conversational AI using natural language processing and machine learning algorithms.",
    tech: ["Python", "TensorFlow", "NLP"],
    demo: "#",
    github: "#",
  },
  {
    title: "Web Portfolio Platform",
    description: "Modern, responsive portfolio builder with drag-and-drop interface and real-time preview.",
    tech: ["React", "Tailwind CSS", "Node.js"],
    demo: "#",
    github: "#",
  },
  {
    title: "Image Classification System",
    description: "Deep learning model for accurate image classification across multiple categories.",
    tech: ["Python", "PyTorch", "CNN"],
    demo: "#",
    github: "#",
  },
  {
    title: "E-Commerce Dashboard",
    description: "Full-featured admin dashboard with analytics, inventory management, and user tracking.",
    tech: ["React", "TypeScript", "Firebase"],
    demo: "#",
    github: "#",
  },
  {
    title: "Sentiment Analysis Tool",
    description: "Real-time sentiment analysis of social media posts using machine learning.",
    tech: ["Python", "NLTK", "Flask"],
    demo: "#",
    github: "#",
  },
  {
    title: "Task Management App",
    description: "Collaborative task manager with real-time updates and team collaboration features.",
    tech: ["React", "Express", "MongoDB"],
    demo: "#",
    github: "#",
  },
  {
    title: "Weather Prediction Model",
    description: "Machine learning model for accurate weather forecasting using historical data.",
    tech: ["Python", "Scikit-learn", "Pandas"],
    demo: "#",
    github: "#",
  },
  {
    title: "Code Snippet Manager",
    description: "Developer tool for organizing and sharing code snippets with syntax highlighting.",
    tech: ["JavaScript", "React", "Prism.js"],
    demo: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in">
          Featured Projects
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-12 rounded-full"></div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-accent transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button 
                    size="sm"
                    className="flex-1 bg-accent hover:bg-accent/90"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                  <Button 
                    size="sm"
                    variant="outline"
                    className="flex-1"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
