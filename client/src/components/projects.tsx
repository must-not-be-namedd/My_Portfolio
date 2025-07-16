import { motion } from "framer-motion";
import { AnimatedSection } from "./ui/animated-section";
import { ArrowRight, ExternalLink, Github, Folder, Play, Code2, Database, Smartphone, TrendingUp } from "lucide-react";
import { TypingAnimation } from "./ui/typing-animation";

export function Projects() {
  const projects = [
    {
      id: 1,
      title: "Portable Electronics Management System",
      category: "Full Stack Development",
      description: "A comprehensive rental service for electronics and gadgets with seamless browsing via Mobile WiFi HotSpots for hassle-free tech experience.",
      tech: ["HTML", "CSS", "JavaScript", "SQL", "MongoDB"],
      liveLink: "https://electronics-rental-demo.vercel.app",
      githubLink: "https://github.com/must-not-be-namedd/portable-electronics-management-system",
      icon: Database,
      gradientFrom: "from-purple-500",
      gradientTo: "to-pink-500"
    },
    {
      id: 2,
      title: "Intelligent Traffic Management System",
      category: "AI & Machine Learning",
      description: "AI-powered tool using Python libraries like TensorFlow, leveraging LiDAR technology and real-time environmental sensors.",
      tech: ["Python", "TensorFlow", "LiDAR", "IoT"],
      liveLink: "https://traffic-management-ai.vercel.app",
      githubLink: "https://github.com/must-not-be-namedd/intelligent-traffic-management-system",
      icon: Code2,
      gradientFrom: "from-green-500",
      gradientTo: "to-cyan-500"
    },
    {
      id: 3,
      title: "Smart & Enhanced WhatsApp",
      category: "Mobile Development",
      description: "Enhanced WhatsApp with features like meme and image generation, real-time media deletion, meeting scheduler, and anti-ghost features.",
      tech: ["Mobile Development", "AI Integration", "Real-time Features"],
      liveLink: "https://enhanced-whatsapp-demo.vercel.app",
      githubLink: "https://github.com/must-not-be-namedd/smart-enhanced-whatsapp",
      icon: Smartphone,
      gradientFrom: "from-blue-500",
      gradientTo: "to-purple-500"
    },
    {
      id: 4,
      title: "Placement Statistics App",
      category: "Data Analytics",
      description: "Built a customized placement statistics app for college campus to keep track of the most frequently visited companies.",
      tech: ["Data Analytics", "Statistics", "Dashboard"],
      liveLink: "https://my-bms-placement-tracker-khushinataraj-replit.app/",
      githubLink: "https://github.com/must-not-be-namedd/placement-statistics-app",
      icon: TrendingUp,
      gradientFrom: "from-orange-500",
      gradientTo: "to-red-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <div className="text-green-400 font-mono text-sm mb-4">
            <TypingAnimation text="// projects.showcase()" speed={50} />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            <span className="text-purple-400">My Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-mono">
            <TypingAnimation 
              text="Built with passion and modern tech stack" 
              speed={40}
              startDelay={1000}
            />
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
                onClick={() => window.open(project.liveLink, '_blank')}
              >
                {/* VS Code Window */}
                <div className="bg-gray-800 rounded-lg shadow-2xl overflow-hidden border border-gray-700">
                  {/* VS Code Header */}
                  <div className="bg-gray-700 px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300 text-sm">
                      <Folder className="w-4 h-4" />
                      <span>{project.title.toLowerCase().replace(/\s+/g, '-')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.liveLink, '_blank');
                        }}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <Play className="w-4 h-4" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.githubLink, '_blank');
                        }}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* File Explorer */}
                  <div className="bg-gray-750 px-4 py-2 border-b border-gray-600">
                    <div className="flex items-center gap-2 text-gray-300 text-sm">
                      <span className="text-gray-500">📁</span>
                      <span>src</span>
                      <span className="text-gray-500">/</span>
                      <span className="text-purple-400">components</span>
                      <span className="text-gray-500">/</span>
                      <span className="text-yellow-400">main.tsx</span>
                    </div>
                  </div>

                  {/* Innovative Project Thumbnail */}
                  <div className="relative h-64 bg-gray-900 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} opacity-20`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="mb-4 relative">
                          <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} flex items-center justify-center mx-auto shadow-2xl`}>
                            <project.icon className="w-12 h-12 text-white" />
                          </div>
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-purple-400 text-sm font-mono">{project.category}</p>
                      </div>
                    </div>
                    
                    {/* Code Lines Effect */}
                    <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-4 font-mono text-xs">
                      <div className="flex items-center gap-2 text-green-400">
                        <span className="text-gray-500">1</span>
                        <span className="text-blue-400">export</span>
                        <span className="text-yellow-400">default</span>
                        <span className="text-white">function</span>
                        <span className="text-green-400">{project.title.replace(/\s+/g, '')}()</span>
                        <span className="text-white">{"{"}</span>
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6">
                    <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm border border-gray-600"
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
                        className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.githubLink, '_blank');
                        }}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors text-sm"
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
