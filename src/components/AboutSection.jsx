import React from 'react';
import { Award, Users, Target, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle }) => (
    <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 text-glow">{title}</h2>
        <p className="text-lg text-gray-400 mt-2">{subtitle}</p>
    </div>
);

const InfoCard = ({ icon, title, text }) => (
    <motion.div 
        className="bg-[#1e1e1e] p-6 rounded-lg border border-gray-800"
        whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0, 255, 255, 0.1)" }}
        transition={{ duration: 0.3 }}
    >
        <div className="text-cyan-400 mb-3">{icon}</div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{text}</p>
    </motion.div>
);

const EducationPill = ({ degree, score, gpa }) => (
    <div className="flex justify-between items-baseline bg-[#2a2a2a] p-3 rounded-md">
        <span className="font-semibold text-gray-200">{degree}</span>
        <span className="text-lg font-bold text-yellow-400">{score} {gpa && <span className="text-sm font-normal text-gray-400">/ {gpa}</span>}</span>
    </div>
);

export default function AboutSection() {
    return (
        <section id="about" className="py-20 md:py-28 bg-[#1a1a1a]">
            <div className="container mx-auto px-6">
                <SectionTitle title="About Me" subtitle="Designing Solutions, Not Just Visuals" />

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                    <motion.div 
                        className="lg:col-span-3 text-gray-300 space-y-4 leading-relaxed"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p>As a passionate B.Tech ECE student with a strong foundation in data analytics, I specialize in transforming complex datasets into meaningful insights that drive strategic business decisions. My expertise spans across multiple data visualization tools and programming languages, enabling me to create comprehensive analytical solutions.</p>
                        <p>With a proven track record in statistical analysis and data interpretation, I excel at identifying trends, patterns, and opportunities hidden within data. My approach combines technical proficiency with creative problem-solving to deliver impactful results that exceed expectations.</p>
                        <p>Currently seeking opportunities to apply my analytical skills in challenging real-world scenarios, I am committed to continuous learning and staying updated with the latest industry trends and technologies in data science and analytics.</p>
                        
                        <div className="pt-6">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><BookOpen size={24} className="text-cyan-400"/> Educational Background</h3>
                            <div className="space-y-3">
                                <EducationPill degree="B.Tech Electronics & Communication" score="7.82" gpa="10 CGPA" />
                                <EducationPill degree="Class XII - Science Stream" score="95%" />
                                <EducationPill degree="Class X - Academic Excellence" score="96.2%" />
                            </div>
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        <InfoCard icon={<Award size={28} />} title="Education Excellence" text="B.Tech ECE with strong academic performance in Class XII and Class X." />
                        <InfoCard icon={<Target size={28} />} title="Professional Focus" text="Specialized in data analytics, visualization, and statistical problem-solving." />
                        <InfoCard icon={<Users size={28} />} title="Collaborative Approach" text="Strong teamwork skills with experience in cross functional project collaboration." />
                        <InfoCard icon={<Target size={28} />} title="Results-Driven" text="Focused on transforming complex data into actionable business insights." />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}