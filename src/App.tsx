import React from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import CertificatesSection from './components/CertificatesSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">
      <AnimatedBackground />
      <Navigation />
      
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificatesSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;