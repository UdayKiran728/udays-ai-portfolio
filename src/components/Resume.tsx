import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, FileText } from "lucide-react";
const Resume = () => {
  const handleDownload = () => {
    // This would be replaced with actual resume file
    alert("Resume download would start here. Please add your resume PDF to the public folder.");
  };
  return <section id="resume" className="bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in">
          Resume
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-12 rounded-full"></div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-none shadow-lg animate-scale-in">
            <CardContent className="pt-8 text-center">
              <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-12 h-12 text-accent" />
              </div>
              
              <h3 className="text-2xl font-semibold mb-4">
                Download My Resume
              </h3>
              
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Get a comprehensive overview of my education, experience, skills, and projects. 
                Available in PDF format for easy viewing and printing.
              </p>

              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-medium" onClick={handleDownload}>
                <Download className="w-5 h-5 mr-2" />
                Download Resume (PDF)
              </Button>

              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="font-semibold mb-4 text-lg">Quick Overview</h4>
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  <div>
                    <p className="text-sm font-medium text-accent mb-2">Education</p>
                    <p className="text-sm text-muted-foreground">B.Tech in CSE (DS)</p>
                    <p className="text-sm text-muted-foreground">ACE Engineering College</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-accent mb-2">Focus Areas</p>
                    <p className="text-sm text-muted-foreground">Artificial Intelligence
Data Science</p>
                    <p className="text-sm text-muted-foreground">Web Development</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-accent mb-2">Key Skills</p>
                    <p className="text-sm text-muted-foreground">Python, Java, JavaScript</p>
                    <p className="text-sm text-muted-foreground">React, TensorFlow, PyTorch</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-accent mb-2">Projects</p>
                    <p className="text-sm text-muted-foreground">8+ Completed Projects</p>
                    <p className="text-sm text-muted-foreground">AI/ML & Web Development</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default Resume;