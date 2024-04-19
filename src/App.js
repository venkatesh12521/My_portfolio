// App.js
import React from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import SkillsSection from './SkillsSection';
import ServicesSection from './ServicesSection';
import ProjectsSection from './ProjectsSection';
import TimelineSection from './TimelineSection';
import ContactForm from './ContactForm';
import Navbar from './Navbar';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ServicesSection />
      <ProjectsSection />
      <TimelineSection />
      <ContactForm />
      <Footer/>
    </div>
  );
};

export default App;
