import { motion } from "framer-motion";
import { AnimatedSection } from "./ui/animated-section";
import { GraduationCap, Trophy, Medal, Star } from "lucide-react";

export function Achievements() {
  const achievements = [
    {
      icon: GraduationCap,
      value: "9.9",
      unit: "GPA",
      label: "ACADEMIC EXCELLENCE",
      description: "Maintaining exceptional academic performance with a 9.9 GPA, demonstrating consistent dedication to learning and excellence in Computer Science Engineering.",
      author: "Academic Achievement",
      position: "BMS College of Engineering"
    },
    {
      icon: Trophy,
      value: "95%",
      unit: "",
      label: "12TH GRADE EXCELLENCE",
      description: "Scored 95% in 12th grade, reflecting consistent academic effort and strong foundation in science and mathematics.",
      author: "Academic Performance",
      position: "National Public School"
    },
    {
      icon: Medal,
      value: "1234th",
      unit: "",
      label: "KCET RANK ACHIEVEMENT",
      description: "Achieved a rank of 1234th in the Karnataka Common Entrance Test (KCET) among thousands of candidates, securing admission to a top engineering college.",
      author: "Competitive Excellence",
      position: "KCET Entrance Exam"
    },
    {
      icon: Star,
      value: "904th",
      unit: "",
      label: "COMEDK RANK",
      description: "Achieved a rank of 904th in the Consortium of Medical, Engineering, and Dental Colleges of Karnataka (COMEDK) exam.",
      author: "Entrance Exam Excellence",
      position: "COMEDK Examination"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Achievements</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <AnimatedSection key={achievement.label} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-card rounded-2xl p-8 hover-lift shadow-sm border border-border glow-effect card-shine neon-border"
              >
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl lg:text-5xl font-bold text-foreground gradient-text text-glow">
                      {achievement.value}
                    </div>
                    {achievement.unit && (
                      <span className="text-2xl font-semibold text-muted-foreground ml-2">
                        {achievement.unit}
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground mb-6 font-medium tracking-wide">
                    {achievement.label}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {achievement.description}
                  </p>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mr-4">
                    <achievement.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{achievement.author}</div>
                    <div className="text-sm text-muted-foreground">{achievement.position}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
