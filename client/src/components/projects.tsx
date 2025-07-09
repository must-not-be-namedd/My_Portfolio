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
      tech: ["HTML", "CSS", "JavaScript", "SQL", "MongoDB"]
    },
    {
      id: 2,
      title: "Intelligent Traffic Management System",
      category: "AI & Machine Learning",
      description: "AI-powered tool using Python libraries like TensorFlow, leveraging LiDAR technology and real-time environmental sensors.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      tech: ["Python", "TensorFlow", "LiDAR", "IoT"]
    },
    {
      id: 3,
      title: "Smart & Enhanced WhatsApp",
      category: "Mobile Development",
      description: "Enhanced WhatsApp with features like meme and image generation, real-time media deletion, meeting scheduler, and anti-ghost features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      tech: ["Mobile Development", "AI Integration", "Real-time Features"]
    },
    {
      id: 4,
      title: "Placement Statistics App",
      category: "Data Analytics",
      description: "Built a customized placement statistics app for college campus to keep track of the most frequently visited companies.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      tech: ["Data Analytics", "Statistics", "Dashboard"]
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
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">Projects</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group cursor-pointer hover-lift"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg">
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
                          <ArrowRight className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
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
            className="inline-flex items-center justify-center px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors group"
          >
            View all Projects
            <ArrowRight className="ml-2 w-5 h-5 btn-arrow" />
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
}
