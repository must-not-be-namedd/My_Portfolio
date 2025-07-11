import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Achievements } from "@/components/achievements";
import { Experience } from "@/components/experience";
import { Hackathons } from "@/components/hackathons";
import { Education } from "@/components/education";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { ParticleBackground } from "@/components/ui/particle-background";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <ParticleBackground />
      <Navigation />
      <Hero />
      <div className="section-divider"></div>
      <Skills />
      <div className="section-divider"></div>
      <Projects />
      <div className="section-divider"></div>
      <Achievements />
      <div className="section-divider"></div>
      <Experience />
      <div className="section-divider"></div>
      <Hackathons />
      <div className="section-divider"></div>
      <Education />
      <div className="section-divider"></div>
      <Contact />
      <Footer />
    </div>
  );
}
