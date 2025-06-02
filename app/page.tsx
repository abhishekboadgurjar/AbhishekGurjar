import dynamic from "next/dynamic";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <section 
        id="home" 
        className="min-h-screen flex items-center scroll-mt-20"
      >
        <div className="w-full">
          <HeroSection />
        </div>
      </section>
      
      <section 
        id="about" 
        className="min-h-screen py-20 flex items-center scroll-mt-20"
      >
        <div className="w-full">
          <AboutSection />
        </div>
      </section>
      
      <section 
        id="skills" 
        className="min-h-screen py-20 flex items-center scroll-mt-20"
      >
        <div className="w-full">
          <SkillsSection />
        </div>
      </section>
      
      <section 
        id="projects" 
        className="min-h-screen py-20 flex items-center scroll-mt-20"
      >
        <div className="w-full">
          <ProjectsSection />
        </div>
      </section>
      
      <section 
        id="contact" 
        className="min-h-screen py-20 flex items-center scroll-mt-20"
      >
        <div className="w-full">
          <ContactSection />
        </div>
      </section>
      
      <Footer />
    </>
  );
}