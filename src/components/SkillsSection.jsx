import React from 'react';
import { BarChart2, Database, Code, Settings, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle }) => (
    <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 text-glow">{title}</h2>
        <p className="text-lg text-gray-400 mt-2">{subtitle}</p>
    </div>
);

const SkillBar = ({ skill, percentage, description }) => (
    <motion.div 
        className="mb-6"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
    >
        <div className="flex justify-between items-center mb-1">
            <span className="font-bold text-white">{skill}</span>
            <span className="text-sm font-medium text-yellow-400">{percentage}%</span>
        </div>
        <div className="w-full bg-[#2a2a2a] rounded-full h-2.5">
            <motion.div 
                className="bg-gradient-to-r from-cyan-400 to-yellow-400 h-2.5 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${percentage}%` }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: true }}
            ></motion.div>
        </div>
        <p className="text-xs text-gray-400 mt-2">{description}</p>
    </motion.div>
);

const SkillCategory = ({ icon, title, skills }) => (
    <motion.div 
        className="bg-[#1e1e1e] p-8 rounded-xl border border-gray-800 card-glow"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
    >
        <div className="flex items-center gap-4 mb-6">
            <div className="text-cyan-400">{icon}</div>
            <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
        <div>
            {skills.map(skill => <SkillBar key={skill.name} skill={skill.name} percentage={skill.level} description={skill.desc} />)}
        </div>
    </motion.div>
);

const CoreCompetencyChip = ({ name }) => (
    <motion.div
        className="bg-gray-700/50 text-gray-300 py-2 px-4 rounded-full text-sm border border-gray-600 cursor-default"
        whileHover={{ scale: 1.05, backgroundColor: 'rgba(55, 65, 81, 0.8)', color: '#fde047' }}
        transition={{ duration: 0.2 }}
    >
        {name}
    </motion.div>
);

const skillsData = {
    analytics: [
        { name: "Power BI", level: 95, desc: "Advanced dashboard creation and data modeling" },
        { name: "Tableau", level: 85, desc: "Interactive visualizations and storytelling" },
        { name: "Excel", level: 95, desc: "Advanced formulas, pivot tables, and VBA" },
    ],
    programming: [
        { name: "Pandas (Pandas, NumPy, Matplotlib, Seaborn)", level: 88, desc: "Data analysis with comprehensive libraries" },
        { name: "SQL", level: 92, desc: "Complex queries, joins, and database optimization" },
        { name: "C++", level: 90, desc: "Object-oriented programming and algorithms" },
        { name: "Object Oriented Programming", level: 80, desc: "Design patterns and software architecture" },
    ],
    tools: [
        { name: "MySQL", level: 90, desc: "Database design and management" },
        { name: "Git/GitHub", level: 85, desc: "Version control and collaboration" },
        { name: "Jupyter", level: 88, desc: "Interactive data science notebooks" },
        { name: "Gen AI Tools", level: 90, desc: "AI-powered analytics and automation" },
        { name: "VS Code", level: 95, desc: "Advanced code editing and debugging" },
    ],
    statistical: [
        { name: "Data Interpretation", level: 90, desc: "Pattern recognition and trend analysis" },
        { name: "Hypothesis Testing", level: 85, desc: "Statistical significance and A/B testing" },
        { name: "Correlation Analysis", level: 80, desc: "Statistical relationships and dependencies" },
    ]
};

const competencies = ["Data Visualization", "Statistical Analysis", "Business Intelligence", "Dashboard Development", "Data Modeling", "ETL Processes", "Report Automation", "Data Storytelling", "Exploratory Data Analysis"];

export default function SkillsSection() {
    return (
        <section id="skills" className="py-20 md:py-28 bg-[#121212]">
            <div className="container mx-auto px-6">
                <SectionTitle title="Technical Skills" subtitle="Modern tools and technologies for comprehensive data analysis" />

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <SkillCategory icon={<BarChart2 size={32} />} title="Data Analytics Tools" skills={skillsData.analytics} />
                    <SkillCategory icon={<Code size={32} />} title="Programming Fundamentals" skills={skillsData.programming} />
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <SkillCategory icon={<Settings size={32} />} title="Tools & Platforms" skills={skillsData.tools} />
                    <SkillCategory icon={<TrendingUp size={32} />} title="Statistical Analysis" skills={skillsData.statistical} />
                </div>
                
                <div className="mt-20">
                    <motion.div 
                        className="bg-[#1e1e1e] p-8 rounded-xl border border-gray-800"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7 }}
                    >
                         <h3 className="text-2xl font-bold text-white text-center mb-6 text-cyan-400 text-glow">Core Competencies</h3>
                         <div className="flex flex-wrap justify-center gap-3">
                            {competencies.map(c => <CoreCompetencyChip key={c} name={c} />)}
                         </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}