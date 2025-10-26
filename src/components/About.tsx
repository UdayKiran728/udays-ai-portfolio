import { GraduationCap, Target, Code2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in">
            About Me
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-12 rounded-full"></div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow animate-scale-in">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Education</h3>
                <p className="text-muted-foreground text-sm">
                  B.Tech in CSE (AI & ML) at ACE Engineering College
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow animate-scale-in delay-100">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code2 className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Specialization</h3>
                <p className="text-muted-foreground text-sm">
                  Artificial Intelligence & Machine Learning
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow animate-scale-in delay-200">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Goal</h3>
                <p className="text-muted-foreground text-sm">
                  Building intelligent, impactful solutions
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-none shadow-lg animate-fade-in">
            <CardContent className="pt-8">
              <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                I'm a passionate Computer Science Engineering student at ACE Engineering College, 
                specializing in Artificial Intelligence and Machine Learning. My journey in tech 
                began with a curiosity about how intelligent systems work and has evolved into a 
                deep commitment to creating innovative solutions.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm constantly exploring new technologies, working on exciting projects, and honing 
                my skills in both AI/ML and web development. My goal is to leverage the power of 
                artificial intelligence to solve real-world problems and create meaningful impact 
                through technology. I'm actively seeking opportunities to collaborate on challenging 
                projects and contribute to cutting-edge developments in the field.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
