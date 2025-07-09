import { motion } from "framer-motion";
import { AnimatedSection } from "./ui/animated-section";
import { Code, Trophy, Laptop, Rocket, Users, Lightbulb } from "lucide-react";

export function Hackathons() {
  const hackathons = [
    {
      icon: Code,
      title: "IEEE Xtreme",
      year: "2024",
      badge: "Global Competition",
      badgeColor: "blue"
    },
    {
      icon: Trophy,
      title: "Smart India Hackathon",
      year: "2024",
      badge: "National Level",
      badgeColor: "green"
    },
    {
      icon: Laptop,
      title: "Byte Battles",
      year: "2024",
      badge: "24 Hour Coding",
      badgeColor: "purple"
    },
    {
      icon: Rocket,
      title: "TechXcelerate",
      year: "2024",
      badge: "Innovation Challenge",
      badgeColor: "orange"
    },
    {
      icon: Users,
      title: "BITS Pilani Hackathon",
      year: "2025",
      badge: "University Level",
      badgeColor: "red"
    },
    {
      icon: Lightbulb,
      title: "Adobe India Hackathon",
      year: "2025",
      badge: "Creative Tech",
      badgeColor: "teal"
    }
  ];

  const getBadgeColor = (color: string) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-800",
      green: "bg-green-100 text-green-800",
      purple: "bg-purple-100 text-purple-800",
      orange: "bg-orange-100 text-orange-800",
      red: "bg-red-100 text-red-800",
      teal: "bg-teal-100 text-teal-800"
    };
    return colorMap[color as keyof typeof colorMap] || "bg-gray-100 text-gray-800";
  };

  const getIconColor = (color: string) => {
    const colorMap = {
      blue: "text-blue-600",
      green: "text-green-600",
      purple: "text-purple-600",
      orange: "text-orange-600",
      red: "text-red-600",
      teal: "text-teal-600"
    };
    return colorMap[color as keyof typeof colorMap] || "text-gray-600";
  };

  return (
    <section id="hackathons" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">Hackathons</h2>
          <p className="text-xl text-gray-600">Competitive programming and innovation challenges</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hackathons.map((hackathon, index) => (
            <AnimatedSection key={hackathon.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-8 hover-lift shadow-sm"
              >
                <div className="text-center">
                  <div className={`w-16 h-16 bg-${hackathon.badgeColor}-100 rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <hackathon.icon className={`w-8 h-8 ${getIconColor(hackathon.badgeColor)}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-2">{hackathon.title}</h3>
                  <p className="text-gray-600 mb-4 text-lg">{hackathon.year}</p>
                  <div className={`inline-flex items-center px-4 py-2 ${getBadgeColor(hackathon.badgeColor)} rounded-full text-sm font-medium`}>
                    {hackathon.badge}
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
