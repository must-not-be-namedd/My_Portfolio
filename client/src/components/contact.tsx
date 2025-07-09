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
    <section id="contact" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and innovation.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <div>
              <h3 className="text-3xl font-bold mb-8">Get in Touch</h3>
              <div className="space-y-6">
                <motion.div 
                  whileHover={{ x: 4 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-300">Email</p>
                    <a 
                      href="mailto:khushinataraj28@gmail.com" 
                      className="text-xl hover:text-blue-400 transition-colors"
                    >
                      khushinataraj28@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 4 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-300">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/khushi-nataraj-28npk12" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xl hover:text-blue-400 transition-colors"
                    >
                      linkedin.com/in/khushi-nataraj-28npk12
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 4 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-300">Location</p>
                    <p className="text-xl">Mayanna Layout, Srikanpur, Bangalore</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-white">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-white">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Your message..."
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-black hover:bg-gray-100 transition-colors"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
