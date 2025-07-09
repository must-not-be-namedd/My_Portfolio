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

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Skills />
      <Projects />
      <Achievements />
      <Experience />
      <Hackathons />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
