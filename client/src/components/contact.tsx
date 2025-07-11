import { motion } from "framer-motion";
import { AnimatedSection } from "./ui/animated-section";
import { Mail, Linkedin, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Open to discussing new opportunities, collaborations, and innovative projects in technology and software development.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <div>
              <h3 className="text-3xl font-bold mb-8 text-foreground">Get in Touch</h3>
              <div className="space-y-6">
                <motion.div 
                  whileHover={{ x: 4 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <p className="text-muted-foreground">Email</p>
                    <a 
                      href="mailto:khushinataraj28@gmail.com" 
                      className="text-xl hover:text-foreground/80 transition-colors text-foreground"
                    >
                      khushinataraj28@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 4 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <p className="text-muted-foreground">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/khushi-nataraj-28npk12" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xl hover:text-foreground/80 transition-colors text-foreground"
                    >
                      linkedin.com/in/khushi-nataraj-28npk12
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-muted/50 rounded-2xl p-8 backdrop-blur-sm border border-border card-shine subtle-border">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Professional Opportunities</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm actively seeking internship opportunities and collaborative projects in software development, 
                artificial intelligence, and full-stack engineering. Let's connect to explore how we can work together 
                to build innovative solutions.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
