import { motion } from "framer-motion";
import { AnimatedSection } from "./ui/animated-section";
import { 
  Code, 
  Database, 
  Smartphone, 
  Brain, 
  Bot, 
  Globe,
  Zap,
  Layers,
  Server
} from "lucide-react";

export function Skills() {
  const skills = [
    {
      icon: Code,
      title: "Python",
      description: "Advanced programming with libraries like TensorFlow for AI projects and data structures.",
      color: "blue"
    },
    {
      icon: Zap,
      title: "Java",
      description: "Object-oriented programming and application development with strong foundations.",
      color: "orange"
    },
    {
      icon: Globe,
      title: "JavaScript",
      description: "Dynamic web applications and interactive user experiences.",
      color: "yellow"
    },
    {
      icon: Layers,
      title: "MERN Stack",
      description: "Full-stack development with MongoDB, Express, React, and Node.js.",
      color: "green"
    },
    {
      icon: Database,
      title: "Database Management",
      description: "SQL and MongoDB for efficient data management and storage solutions.",
      color: "purple"
    },
    {
      icon: Server,
      title: "Web Development",
      description: "HTML, CSS, Tailwind CSS for responsive and modern web interfaces.",
      color: "red"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform mobile applications with modern frameworks.",
      color: "indigo"
    },
    {
      icon: Brain,
      title: "Problem Solving",
      description: "LeetCode proficiency and algorithmic thinking for complex challenges.",
      color: "teal"
    },
    {
      icon: Bot,
      title: "AI & Machine Learning",
      description: "Machine learning projects with TensorFlow and intelligent systems.",
      color: "pink"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-600",
      orange: "bg-orange-100 text-orange-600",
      yellow: "bg-yellow-100 text-yellow-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
      red: "bg-red-100 text-red-600",
      indigo: "bg-indigo-100 text-indigo-600",
      teal: "bg-teal-100 text-teal-600",
      pink: "bg-pink-100 text-pink-600"
    };
    return colorMap[color as keyof typeof colorMap] || "bg-gray-100 text-gray-600";
  };

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            From algorithms to full-stack applications, I engineer solutions for complex challenges.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">My technical expertise</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <AnimatedSection key={skill.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-card rounded-xl p-8 hover-lift shadow-sm border border-border glow-effect card-shine neon-border"
              >
                <div className={`w-16 h-16 ${getColorClasses(skill.color)} rounded-xl flex items-center justify-center mb-6`}>
                  <skill.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{skill.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
