import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, Menu, X } from 'lucide-react';

const NavLink = ({ to, children, onLinkClick }) => (
    <a
        href={`#${to}`}
        onClick={onLinkClick}
        className="cursor-pointer text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm font-medium"
    >
        {children}
    </a>
);

export default function Layout({ children }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Add global styles
        const style = document.createElement('style');
        style.textContent = `
            html {
                scroll-behavior: smooth;
            }
            section[id] {
                scroll-margin-top: 80px;
            }
            ::selection {
                background-color: #fde047;
                color: #121212;
            }
            .text-glow {
                text-shadow: 0 0 8px rgba(0, 255, 255, 0.5), 0 0 12px rgba(0, 255, 255, 0.3);
            }
            .card-glow {
                position: relative;
                overflow: hidden;
            }
            .card-glow:before {
                content: '';
                position: absolute;
                top: 0;
                left: -150%;
                width: 100%;
                height: 100%;
                background: linear-gradient(110deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0) 60%);
                transform: skewX(-25deg);
                transition: left 0.7s ease-in-out;
            }
            .card-glow:hover:before {
                left: 150%;
            }
            .floating-icon {
                position: fixed;
                opacity: 0.1;
                z-index: 0;
                pointer-events: none;
                transition: all 0.3s ease;
            }
            .floating-icon.scroll-active {
                opacity: 0.2;
                transform: translateY(-20px) rotate(10deg);
            }
        `;
        document.head.appendChild(style);

        // EmailJS initialization
        if (typeof window !== 'undefined' && window.emailjs) {
            window.emailjs.init('UkkVH9_p_54GoS9k7');
        }

        // Scroll-responsive floating icons
        let scrollTimeout;
        const handleScroll = () => {
            const icons = document.querySelectorAll('.floating-icon');
            icons.forEach(icon => {
                icon.classList.add('scroll-active');
            });
            
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                icons.forEach(icon => {
                    icon.classList.remove('scroll-active');
                });
            }, 150);
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.head.removeChild(style);
        };
    }, []);

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className="bg-[#121212] text-white font-sans">
            {/* Floating Background Icons */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="floating-icon top-20 left-10 text-cyan-400/20">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22 7.535V17c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V7.535l9 5.465 9-5.465zM20 4H4c-1.1 0-2 .9-2 2v1.465l10 6.035 10-6.035V6c0-1.1-.9-2-2-2z"/>
                    </svg>
                </div>
                <div className="floating-icon top-40 right-20 text-yellow-400/20">
                    <svg width="35" height="35" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3 13h2v8H3zm4-6h2v14H7zm4-6h2v20h-2zm4 2h2v18h-2zm4 5h2v13h-2z"/>
                    </svg>
                </div>
                <div className="floating-icon top-1/3 left-1/4 text-cyan-400/20">
                    <svg width="45" height="45" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="12" r="3"/>
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                    </svg>
                </div>
                <div className="floating-icon bottom-1/3 right-10 text-yellow-400/20">
                    <svg width="38" height="38" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                </div>
                <div className="floating-icon bottom-20 left-1/3 text-cyan-400/20">
                    <svg width="42" height="42" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
                    </svg>
                </div>
                <div className="floating-icon top-2/3 left-10 text-yellow-400/20">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                    </svg>
                </div>
                <div className="floating-icon top-1/2 right-1/4 text-cyan-400/20">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                </div>
            </div>

            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#121212]/80 backdrop-blur-lg border-b border-gray-800' : 'bg-transparent'}`}>
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <a href="#hero" className="text-2xl font-bold cursor-pointer text-white">Yugank<span className="text-yellow-400">.</span></a>
                    
                    <div className="hidden md:flex items-center space-x-8">
                        <NavLink to="about" onLinkClick={handleLinkClick}>About</NavLink>
                        <NavLink to="skills" onLinkClick={handleLinkClick}>Skills</NavLink>
                        <NavLink to="projects" onLinkClick={handleLinkClick}>Projects</NavLink>
                        <NavLink to="certifications" onLinkClick={handleLinkClick}>Certifications</NavLink>
                        <NavLink to="contact" onLinkClick={handleLinkClick}>Contact</NavLink>
                    </div>

                    <div className="hidden md:block">
                        <a href="#contact">
                            <button className="bg-yellow-400 text-black font-semibold py-2 px-4 rounded-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105">
                                Get in Touch
                            </button>
                        </a>
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-[#121212]/95 backdrop-blur-lg pb-4">
                        <div className="flex flex-col items-center space-y-4 pt-2">
                            <NavLink to="about" onLinkClick={handleLinkClick}>About</NavLink>
                            <NavLink to="skills" onLinkClick={handleLinkClick}>Skills</NavLink>
                            <NavLink to="projects" onLinkClick={handleLinkClick}>Projects</NavLink>
                            <NavLink to="certifications" onLinkClick={handleLinkClick}>Certifications</NavLink>
                            <NavLink to="contact" onLinkClick={handleLinkClick}>Contact</NavLink>
                            <a href="#contact" onClick={handleLinkClick}>
                                <button className="bg-yellow-400 text-black font-semibold py-2 px-5 rounded-lg hover:bg-yellow-300 transition-all duration-300">
                                    Get in Touch
                                </button>
                            </a>
                        </div>
                    </div>
                )}
            </nav>
            
            <main>{children}</main>

            <footer className="bg-[#1a1a1a] border-t border-gray-800 text-gray-400 py-12">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-3">Yugank<span className="text-yellow-400">.</span></h3>
                            <p className="text-sm pr-4">Aspiring Data Analyst passionate about transforming complex data into actionable insights.</p>
                            <div className="flex space-x-4 mt-4">
                                <a href="https://github.com/yugankXsingh" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors"><Github /></a>
                                <a href="https://linkedin.com/in/yugank-singh-a7b868224" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors"><Linkedin /></a>
                                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=yugank942@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors"><Mail /></a>
                                <a href="tel:+918052128256" className="hover:text-yellow-400 transition-colors"><Phone /></a>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#about" className="cursor-pointer hover:text-yellow-400 transition-colors">About</a></li>
                                <li><a href="#skills" className="cursor-pointer hover:text-yellow-400 transition-colors">Skills</a></li>
                                <li><a href="#projects" className="cursor-pointer hover:text-yellow-400 transition-colors">Projects</a></li>
                                <li><a href="#certifications" className="cursor-pointer hover:text-yellow-400 transition-colors">Certifications</a></li>
                                <li><a href="#contact" className="cursor-pointer hover:text-yellow-400 transition-colors">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Core Skills</h4>
                            <ul className="space-y-2 text-sm list-inside">
                                {['Power BI', 'SQL & MySQL', 'Python Analytics', 'Excel Advanced', 'Statistical Analysis', 'Data Visualization'].map(skill => (
                                    <li key={skill} className="flex items-center"><span className="text-yellow-400 mr-2">•</span>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="mt-10 border-t border-gray-800 pt-6 text-sm flex flex-col md:flex-row justify-between items-center text-center">
                        <p>&copy; {new Date().getFullYear()} Yugank. Made with ❤️ for data storytelling.</p>
                        <p className="mt-2 md:mt-0">Data Analyst Portfolio <span className="mx-2 text-gray-600">•</span> Available for Opportunities</p>
                    </div>
                </div>
            </footer>

            <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
        </div>
    );
}