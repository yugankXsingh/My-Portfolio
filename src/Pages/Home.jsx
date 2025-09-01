import React from 'react';

import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import CertificationsSection from '../components/CertificationsSection';
import ContactSection from '../components/ContactSection';
import BlogSection from '../components/BlogSection';

export default function Home() {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <CertificationsSection />
            <ContactSection />
            <BlogSection />
        </div>
    );
}