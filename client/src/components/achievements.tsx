import { motion } from "framer-motion";
import { AnimatedSection } from "./ui/animated-section";
import { CodeComments } from "./ui/code-comments";
import { TypingAnimation } from "./ui/typing-animation";

export function Achievements() {
  const achievements = [
    {
      id: 1,
      title: "CGPA: 9.83",
      description: "Grateful to maintain consistent academic performance throughout my engineering program with focus on core CS subjects",
      year: "2021-2025",
      category: "Academic Excellence",
      color: "text-yellow-400"
    },
    {
      id: 2,
      title: "Data Structures & Algorithms",
      description: "Continuously learning DSA with practical implementation experience and problem-solving practice",
      year: "2023",
      category: "Technical Proficiency",
      color: "text-green-400"
    },
    {
      id: 3,
      title: "Full Stack Development",
      description: "Learning both frontend and backend technologies with personal project implementations",
      year: "2024",
      category: "Development Skills",
      color: "text-purple-400"
    },
    {
      id: 4,
      title: "AI/ML Project Implementation",
      description: "Exploring machine learning concepts and building projects using TensorFlow and Python",
      year: "2024",
      category: "Artificial Intelligence",
      color: "text-orange-400"
    },
    {
      id: 5,
      title: "Open Source Contributions",
      description: "Contributing to open source projects and sharing code through GitHub repositories",
      year: "2023-2024",
      category: "Community Involvement",
      color: "text-cyan-400"
    },
    {
      id: 6,
      title: "Leadership & Team Collaboration",
      description: "Learning leadership skills through student projects and collaborative development experiences",
      year: "2022-2024",
      category: "Soft Skills",
      color: "text-purple-400"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <div className="text-green-400 font-mono text-sm mb-4">
            <TypingAnimation text="// achievements.loadMilestones()" speed={50} />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            <span className="text-cyan-400">My Journey</span> So Far
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-mono">
            <TypingAnimation 
              text="Key accomplishments that showcase my growth and dedication" 
              speed={40}
              startDelay={1000}
            />
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedSection delay={0.3}>
            <CodeComments achievements={achievements} />
          </AnimatedSection>
          
          <AnimatedSection delay={0.6}>
            <div className="bg-gray-900 text-white p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">🏆</span>
                <h3 className="text-2xl font-bold">Achievement Summary</h3>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-gray-800 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Academic Performance</span>
                    <span className="text-yellow-400 font-bold">8.2 CGPA</span>
                  </div>
                </div>
                
                <div className="p-4 bg-gray-800 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Technical Skills</span>
                    <span className="text-green-400 font-bold">Advanced</span>
                  </div>
                </div>
                
                <div className="p-4 bg-gray-800 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Project Portfolio</span>
                    <span className="text-purple-400 font-bold">15+ Projects</span>
                  </div>
                </div>
                
                <div className="p-4 bg-gray-800 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Leadership Experience</span>
                    <span className="text-cyan-400 font-bold">Team Lead</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gray-800 rounded-lg">
                <div className="text-sm text-gray-400 font-mono">
                  <span className="text-green-400">if (</span>
                  <span className="text-yellow-400">hardWork</span>
                  <span className="text-green-400"> && </span>
                  <span className="text-yellow-400">passion</span>
                  <span className="text-green-400">) {"{"}</span>
                  <br />
                  <span className="ml-4 text-cyan-400">return</span>
                  <span className="text-yellow-400"> 'Success'</span>
                  <span className="text-white">;</span>
                  <br />
                  <span className="text-green-400">{"}"}</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}