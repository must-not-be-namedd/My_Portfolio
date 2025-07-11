import { motion } from "framer-motion";
import { AnimatedSection } from "./ui/animated-section";
import { Users, Code, Heart, Palette } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      icon: Users,
      title: "Student Volunteer",
      organization: "Rotaract Club",
      description: "Community service and leadership development through organized events and social initiatives."
    },
    {
      icon: Code,
      title: "Technical Head",
      organization: "Protocol Club",
      description: "Technical initiatives, hackathons and coding workshops with hands-on experience."
    },
    {
      icon: Heart,
      title: "Community Volunteer",
      organization: "NSS Club",
      description: "Community development and social service initiatives through National Service Scheme."
    },
    {
      icon: Palette,
      title: "Content & Design Team",
      organization: "CODEIO Club",
      description: "Content creation and design for coding events and workshops."
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Experience</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <AnimatedSection key={experience.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-card rounded-2xl p-8 hover-lift border border-border card-shine subtle-border"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{experience.title}</h3>
                    <p className="text-muted-foreground font-medium">{experience.organization}</p>
                  </div>
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center shadow-sm">
                    <experience.icon className="w-6 h-6 text-foreground" />
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{experience.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
