import React from 'react';
import { Download, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

const RESUME_URL = "https://drive.google.com/file/d/1UxIFb2KPFEJbqUeJzyJUwlsFHv-30L37/view?usp=sharing";
const PROFILE_IMAGE_URL = "https://i.postimg.cc/52GRjnrW/Whats-App-Image-2025-08-31-at-22-57-50-edcfba82.jpg";

export default function HeroSection() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden bg-[#121212]">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <img src="https://www.transparenttextures.com/patterns/cubes.png" alt="background pattern" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-1/4 left-10 w-32 h-32 bg-cyan-500/10 rounded-full filter blur-2xl animate-blob"></div>
            <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-yellow-500/10 rounded-full filter blur-2xl animate-blob animation-delay-2000"></div>

            <div className="container mx-auto px-6 text-center z-10">
                <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="flex flex-col items-center"
                >
                    <div className="relative mb-6">
                        <div className="absolute -inset-1.5 bg-gradient-to-r from-yellow-400 to-cyan-400 rounded-full animate-pulse"></div>
                        <img 
                            src={PROFILE_IMAGE_URL} 
                            alt="Yugank" 
                            className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-[#121212]"
                        />
                    </div>
                    <motion.h1 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-4xl md:text-6xl font-extrabold text-white"
                    >
                        Hello, I'm <span className="text-yellow-400">Yugank</span>
                    </motion.h1>
                    
                    <motion.p 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-4 text-lg md:text-xl text-cyan-300 font-medium tracking-wide text-glow"
                    >
                        Aspiring Data Analyst | Power BI, SQL, Excel, Python | Data Storyteller & Problem Solver
                    </motion.p>
                    
                    <motion.p 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="mt-4 max-w-2xl mx-auto text-gray-300"
                    >
                        B.Tech ECE student with expertise in data analytics and visualization, transforming complex data into actionable insights and compelling stories.
                    </motion.p>

                    <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="mt-8 flex flex-col sm:flex-row gap-4"
                    >
                        <a href={RESUME_URL} download="Yugank-Resume.pdf" className="bg-yellow-400 text-black font-bold py-3 px-8 rounded-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2">
                            <Download size={20} />
                            Download CV
                        </a>
                        <a href="#projects" className="bg-gray-700/50 text-white font-bold py-3 px-8 rounded-lg border border-gray-600 hover:bg-gray-700 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2">
                            <Eye size={20} />
                            View Projects
                        </a>
                    </motion.div>
                </motion.div>
            </div>
             <a href="#about" className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer">
                <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center items-start p-1">
                    <motion.div
                        animate={{ y: [0, 16, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
                        className="w-1 h-2 bg-yellow-400 rounded-full"
                    ></motion.div>
                </div>
            </a>
        </section>
    );
}