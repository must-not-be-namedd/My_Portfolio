import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { AnimatedSection } from "./ui/animated-section";
import { Terminal } from "./ui/terminal";
import { TypingAnimation } from "./ui/typing-animation";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Code-like background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Introduction */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="text-green-400 font-mono text-sm mb-2">
                <TypingAnimation text="// Welcome to my digital space" speed={30} />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                <span className="text-cyan-400">Hello</span>, I'm{" "}
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Khushi Nataraj
                </span>
              </h1>
              <div className="text-lg text-gray-300 mb-8 font-mono">
                <TypingAnimation 
                  text="Computer Science Engineering Student" 
                  speed={50} 
                  startDelay={2000}
                />
              </div>
              <div className="text-gray-400 font-mono text-sm mb-8">
                <TypingAnimation 
                  text="/* Building innovative solutions through code */" 
                  speed={40} 
                  startDelay={4000}
                />
              </div>
            </motion.div>

            <AnimatedSection delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  onClick={() => scrollToSection('projects')}
                  size="lg"
                  className="px-8 py-3 text-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 hover-lift"
                >
                  View Projects
                </Button>
                <Button
                  onClick={() => scrollToSection('contact')}
                  variant="outline"
                  size="lg"
                  className="px-8 py-3 text-lg border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black hover-lift"
                >
                  Contact Me
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.9}>
              <div className="flex gap-6 mb-8">
                <motion.a
                  href="https://github.com/must-not-be-namedd"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-gray-800/50 rounded-full border border-gray-700 hover:border-purple-400 transition-all"
                >
                  <Github className="w-6 h-6 text-white" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/khushi-nataraj"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-gray-800/50 rounded-full border border-gray-700 hover:border-blue-400 transition-all"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </motion.a>
                <motion.a
                  href="mailto:khushinataraj@gmail.com"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-gray-800/50 rounded-full border border-gray-700 hover:border-green-400 transition-all"
                >
                  <Mail className="w-6 h-6 text-white" />
                </motion.a>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Side - Terminal */}
          <AnimatedSection delay={1.0}>
            <div className="lg:ml-8">
              <Terminal className="w-full max-w-lg mx-auto lg:mx-0" />
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={1.5}>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="cursor-pointer text-center mt-12"
            onClick={() => scrollToSection('skills')}
          >
            <div className="text-cyan-400 font-mono text-sm mb-2">scroll down</div>
            <ArrowDown className="w-8 h-8 text-cyan-400 mx-auto" />
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
