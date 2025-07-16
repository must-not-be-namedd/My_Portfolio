import { motion } from "framer-motion";
import { AnimatedSection } from "./ui/animated-section";
import { LeetcodeLeaderboard } from "./ui/leetcode-leaderboard";
import { TypingAnimation } from "./ui/typing-animation";

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <div className="text-green-400 font-mono text-sm mb-4">
            <TypingAnimation text="// skills.loadTechStack()" speed={50} />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            <span className="text-cyan-400">My Tech Stack</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-mono">
            <TypingAnimation 
              text="Ranked by proficiency and experience • Updated daily" 
              speed={40}
              startDelay={1000}
            />
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <AnimatedSection delay={0.5}>
            <LeetcodeLeaderboard />
          </AnimatedSection>
          
          <AnimatedSection delay={0.8}>
            <div className="bg-gray-900 text-white p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">⚡</span>
                <h3 className="text-2xl font-bold">Quick Stats</h3>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-gray-800 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Languages Mastered</span>
                    <span className="text-cyan-400 font-bold">4+</span>
                  </div>
                </div>
                
                <div className="p-4 bg-gray-800 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Projects Completed</span>
                    <span className="text-green-400 font-bold">15+</span>
                  </div>
                </div>
                
                <div className="p-4 bg-gray-800 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Tech Stack Diversity</span>
                    <span className="text-purple-400 font-bold">Full Stack</span>
                  </div>
                </div>
                
                <div className="p-4 bg-gray-800 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Learning Mode</span>
                    <span className="text-yellow-400 font-bold animate-pulse">Active</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gray-800 rounded-lg">
                <div className="text-sm text-gray-400 font-mono">
                  <span className="text-green-400">console.log(</span>
                  <span className="text-yellow-400">"Always learning, always growing!"</span>
                  <span className="text-green-400">);</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
