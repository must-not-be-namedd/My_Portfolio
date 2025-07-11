import { motion } from "framer-motion";
import { AnimatedSection } from "./ui/animated-section";
import { GraduationCap, School } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Education</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatedSection>
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-gradient-to-br from-muted/50 to-muted/20 rounded-2xl p-8 hover-lift border border-border card-shine subtle-border"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-2">Bachelor of Technology</h3>
                  <p className="text-foreground font-medium mb-2">Computer Science Engineering</p>
                  <p className="text-muted-foreground mb-4">BMS College of Engineering, Bangalore</p>
                  <div className="flex items-center space-x-4">
                    <div className="inline-flex items-center px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                      2nd Year
                    </div>
                    <div className="inline-flex items-center px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                      In Progress
                    </div>
                  </div>
                </div>
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center shadow-sm">
                  <GraduationCap className="w-8 h-8 text-foreground" />
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Specializing in Computer Science Engineering with focus on Data Structures, Algorithms, 
                Object-Oriented Programming, Database Management Systems, and Full Stack Web Development.
              </p>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-gradient-to-br from-muted/50 to-muted/20 rounded-2xl p-8 hover-lift border border-border card-shine subtle-border"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-2">Higher Secondary</h3>
                  <p className="text-foreground font-medium mb-2">Science Stream</p>
                  <p className="text-muted-foreground mb-4">National Public School, Bangalore</p>
                  <div className="flex items-center space-x-4">
                    <div className="inline-flex items-center px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                      Score: 95%
                    </div>
                    <div className="inline-flex items-center px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                      2018-2022
                    </div>
                  </div>
                </div>
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center shadow-sm">
                  <School className="w-8 h-8 text-foreground" />
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Completed 12th grade with 95% marks, demonstrating consistent academic effort and 
                strong foundation in Physics, Chemistry, Mathematics, and Computer Science.
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
