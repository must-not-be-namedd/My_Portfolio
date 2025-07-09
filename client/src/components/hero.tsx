import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Mail } from "lucide-react";
import { AnimatedSection } from "./ui/animated-section";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <AnimatedSection className="order-2 lg:order-1">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight"
          >
            Khushi Nataraj
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed text-balance"
          >
            I'm a driven Computer Science student with expertise in full-stack development, 
            seeking innovative internship opportunities to apply strong coding, problem-solving, 
            and collaboration skills.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="inline-flex items-center justify-center px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors group"
            >
              See my Projects
              <ArrowRight className="ml-2 w-5 h-5 btn-arrow" />
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center space-x-6"
          >
            <a
              href="https://www.linkedin.com/in/khushi-nataraj-28npk12"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors group"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:khushinataraj28@gmail.com"
              className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors group"
            >
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </a>
          </motion.div>
        </AnimatedSection>

        <AnimatedSection delay={0.3} className="order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1494790108755-2616c898834c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Professional portrait of Khushi Nataraj"
              className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
