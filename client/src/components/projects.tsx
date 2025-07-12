import { motion } from "framer-motion";
import { AnimatedSection } from "./ui/animated-section";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

export function Projects() {
  const projects = [
    {
      id: 1,
      title: "Portable Electronics Management System",
      category: "Full Stack Development",
      description: "A comprehensive rental service for electronics and gadgets with seamless browsing via Mobile WiFi HotSpots for hassle-free tech experience.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      tech: ["HTML", "CSS", "JavaScript", "SQL", "MongoDB"],
      liveLink: "https://electronics-rental-demo.vercel.app",
      githubLink: "https://github.com/must-not-be-namedd/portable-electronics-management-system"
    },
    {
      id: 2,
      title: "Intelligent Traffic Management System",
      category: "AI & Machine Learning",
      description: "AI-powered tool using Python libraries like TensorFlow, leveraging LiDAR technology and real-time environmental sensors.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      tech: ["Python", "TensorFlow", "LiDAR", "IoT"],
      liveLink: "https://traffic-management-ai.vercel.app",
      githubLink: "https://github.com/must-not-be-namedd/intelligent-traffic-management-system"
    },
    {
      id: 3,
      title: "Smart & Enhanced WhatsApp",
      category: "Mobile Development",
      description: "Enhanced WhatsApp with features like meme and image generation, real-time media deletion, meeting scheduler, and anti-ghost features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      tech: ["Mobile Development", "AI Integration", "Real-time Features"],
      liveLink: "https://enhanced-whatsapp-demo.vercel.app",
      githubLink: "https://github.com/must-not-be-namedd/smart-enhanced-whatsapp"
    },
    {
      id: 4,
      title: "Placement Statistics App",
      category: "Data Analytics",
      description: "Built a customized placement statistics app for college campus to keep track of the most frequently visited companies.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      tech: ["Data Analytics", "Statistics", "Dashboard"],
      liveLink: "https://my-bms-placement-tracker-khushinataraj-replit.app/",
      githubLink: "https://github.com/must-not-be-namedd/placement-statistics-app"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Projects</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group cursor-pointer hover-lift"
                onClick={() => window.open(project.liveLink, '_blank')}
              >
                <div className="relative overflow-hidden rounded-2xl bg-card shadow-lg border border-border card-shine subtle-border">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-1">{project.title}</h3>
                          <p className="text-gray-300 text-sm">{project.category}</p>
                        </div>
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <ExternalLink className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.liveLink, '_blank');
                        }}
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.githubLink, '_blank');
                        }}
                        className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors text-sm"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center">
          <button
            onClick={() => scrollToSection("contact")}
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all duration-300 group pulse-shadow"
          >
            View all Projects
            <ArrowRight className="ml-2 w-5 h-5 btn-arrow" />
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
}
