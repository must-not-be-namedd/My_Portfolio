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
      description: "Advanced programming with libraries like <strong>TensorFlow</strong> for AI projects and data structures.",
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
      title: "JavaScript & TypeScript",
      description: "Dynamic web applications with <strong>JavaScript</strong> and <strong>TypeScript</strong> for interactive user experiences.",
      color: "yellow"
    },
    {
      icon: Layers,
      title: "MERN Stack",
      description: "Full-stack development with <strong>MongoDB</strong>, <strong>Express.js</strong>, <strong>React</strong>, and <strong>Node.js</strong>.",
      color: "green"
    },
    {
      icon: Database,
      title: "Database Management",
      description: "<strong>PostgreSQL</strong>, <strong>MySQL</strong>, and <strong>MongoDB</strong> for efficient data management and storage solutions.",
      color: "purple"
    },
    {
      icon: Server,
      title: "Web Development",
      description: "<strong>HTML</strong>, <strong>CSS</strong>, <strong>Next.js</strong>, <strong>Express.js</strong>, <strong>Flutter</strong>, and <strong>TailwindCSS</strong> for responsive web interfaces.",
      color: "red"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform mobile applications with <strong>Android</strong> and modern frameworks.",
      color: "indigo"
    },
    {
      icon: Brain,
      title: "Problem Solving",
      description: "<strong>LeetCode</strong> proficiency and algorithmic thinking for complex challenges.",
      color: "teal"
    },
    {
      icon: Bot,
      title: "AI & Machine Learning",
      description: "Machine learning projects with <strong>TensorFlow</strong> and intelligent systems using <strong>Python</strong>.",
      color: "pink"
    },
    {
      icon: Code,
      title: "Version Control",
      description: "Code versioning and collaboration using <strong>Git</strong> and <strong>GitHub</strong> for team projects.",
      color: "gray"
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
      pink: "bg-pink-100 text-pink-600",
      gray: "bg-gray-100 text-gray-600"
    };
    return colorMap[color as keyof typeof colorMap] || "bg-gray-100 text-gray-600";
  };

  return (
    <section id="skills" className="py-20 bg-muted/50">
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
                className="bg-card rounded-xl p-8 hover-lift shadow-sm border border-border card-shine subtle-border"
              >
                <div className={`w-16 h-16 ${getColorClasses(skill.color)} rounded-xl flex items-center justify-center mb-6`}>
                  <skill.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{skill.title}</h3>
                <p className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: skill.description }}></p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
