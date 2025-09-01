import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Database, FileInput, Cpu, ExternalLink, BarChart2 } from 'lucide-react';

const SectionTitle = ({ title, subtitle }) => (
    <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 text-glow">{title}</h2>
        <p className="text-lg text-gray-400 mt-2">{subtitle}</p>
    </div>
);

const certifications = [
    {
        icon: <BarChart2 className="w-6 h-6 text-cyan-400"/>,
        title: "Complete Data Analyst Bootcamp (Basics to Advanced)",
        issuer: "Udemy • 2025",
        description: "Comprehensive data analysis training covering end-to-end analytics workflow.",
        skills: ["Data Cleaning", "Data Analysis", "Data Interpretation", "Data Analysis Tools(Power BI, Tableau, EXCEL)"],
        certificateUrl: "https://www.udemy.com/certificate/UC-8a18f29f-565c-4613-9fca-4ad87799b23a/"
    },
    {
        icon: <Database className="w-6 h-6 text-cyan-400"/>,
        title: "MySQL Database Certification",
        issuer: "Udemy • 2025",
        description: "Advanced database management, query optimization, and data modeling.",
        skills: ["SQL Queries", "Database Design"],
        certificateUrl: "https://www.udemy.com/certificate/UC-06775d7e-1048-4d78-8119-2f69bfd313f9/"
    },
    {
        icon: <FileInput className="w-6 h-6 text-cyan-400"/>,
        title: "Advanced Excel Certification",
        issuer: "Udemy • 2025",
        description: "Expert-level Excel functions, VBA programming, and data analysis.",
        skills: ["Advanced Formulas", "Pivot Tables", "VBA Macros"],
        certificateUrl: "https://www.udemy.com/certificate/UC-b0643981-edc2-47f1-82ac-ce4a125dbbb6/"
    },
    {
        icon: <Cpu className="w-6 h-6 text-cyan-400"/>,
        title: "Data Structures & Algorithms",
        issuer: "Coding Ninjas • 2022",
        description: "Comprehensive understanding of algorithmic thinking and optimization.",
        skills: ["Algorithm Design", "Problem Solving", "Code Optimization"],
        certificateUrl: "https://certificate.codingninjas.com/verify/7b1c623fffa36c98"
    }
];

const CertificationCard = ({ cert }) => (
    <motion.div 
        className="bg-[#1e1e1e] p-6 rounded-lg border border-gray-800 flex flex-col h-full card-glow"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
    >
        <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-4">
                <div className="bg-gray-700/50 p-3 rounded-full">{cert.icon}</div>
                <div>
                    <h3 className="font-bold text-white text-lg">{cert.title}</h3>
                    <p className="text-sm text-gray-400">{cert.issuer}</p>
                </div>
            </div>
            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
        </div>
        <p className="text-gray-300 text-sm mb-4 flex-grow">{cert.description}</p>
        <div className="mb-6">
            <h4 className="text-xs font-semibold text-gray-400 mb-2">Key Skills</h4>
            <div className="flex flex-wrap gap-2">
                {cert.skills.map(skill => (
                    <span key={skill} className="bg-gray-700/50 text-cyan-300 text-xs font-medium px-2 py-1 rounded-full">{skill}</span>
                ))}
            </div>
        </div>
        <div className="mt-auto">
            <a 
                href={cert.certificateUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2"
            >
                <ExternalLink size={16} />
                View Certificate
            </a>
        </div>
    </motion.div>
);

export default function CertificationsSection() {
    return (
        <section id="certifications" className="py-20 md:py-28 bg-[#121212]">
            <div className="container mx-auto px-6">
                <SectionTitle title="Certifications & Achievements" subtitle="Professional credentials and continuous learning journey" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {certifications.map(cert => (
                        <CertificationCard key={cert.title} cert={cert} />
                    ))}
                </div>
            </div>
        </section>
    );
}