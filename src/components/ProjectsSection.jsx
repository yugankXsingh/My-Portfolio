import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, FileText } from 'lucide-react';

const SectionTitle = ({ title, subtitle }) => (
    <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 text-glow">{title}</h2>
        <p className="text-lg text-gray-400 mt-2">{subtitle}</p>
    </div>
);

const projectsData = [
    {
        title: "Data Job Market Dashboard",
        imgSrc: "https://github.com/yugankXsingh/Power-BI_Dashboards/blob/main/Images/Project2_Dashboard_Page1.png?raw=true",
        description: "Comprehensive Power BI dashboard analyzing job market trends, salary distributions, and skill demands across different regions and experience levels.",
        problem: "Limited visibility into job market trends for data professionals.",
        solution: "Interactive dashboard with real-time insights and filtering capabilities.",
        outcome: "Clear visualization of market opportunities and skill gaps.",
        technologies: ["Power BI", "Excel", "Data Modeling", "DAX"],
        github: "https://github.com/yugankXsingh/Power-BI_Dashboards",
        liveDemo: "https://app.powerbi.com/view?r=eyJrIjoiNTU3ZDU0MGYtYjM2NC00NmY2LWI4NjAtMmM5NDM5YjIzYjRkIiwidCI6IjYwNGNjMzFmLTYxZGItNDJiZS1hYTRiLWM3NDBkM2VkNGRlNCJ9"
    },
    {
        title: "Student Mental Health Analytics",
        imgSrc: "https://github.com/yugankXsingh/Student-Depression-Complete-Data-Driven-Analysis/raw/main/studentDepression/Images/Page%203.png",
        description: "In-depth statistical analysis on student depression, identifying key factors and correlations using Python libraries.",
        problem: "Understanding the nuanced factors contributing to student depression.",
        solution: "Statistical models and visualizations to highlight correlations.",
        outcome: "Identified key predictors, offering data-driven insights for support systems.",
        technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Statistics"],
        github: "https://github.com/yugankXsingh/Student-Depression-Complete-Data-Driven-Analysis",
        viewReport: "https://drive.google.com/file/d/1pTuAIjTiIY8XevKr44d5w43LTd5W81nm/view"
    },
    {
        title: "Banking Loan Dashboard",
        imgSrc: "https://github.com/yugankXsingh/Data-Analysis-END-To-END-Projects/raw/main/Readme_Images/1_HomePage.png",
        description: "A financial data visualization project to analyze loan distribution, default rates, and customer demographics for a banking institution.",
        problem: "Difficulty in assessing loan portfolio risk and performance.",
        solution: "A Power BI dashboard providing a 360-degree view of the loan data.",
        outcome: "Enhanced ability to identify high-risk segments and optimize lending strategies.",
        technologies: ["Power BI", "SQL", "ETL", "Financial Analysis"],
        github: "https://github.com/yugankXsingh/Data-Analysis-END-To-END-Projects",
    }
];

const ProjectCard = ({ project, index }) => {
    const isReversed = index % 2 !== 0;
    return (
        <motion.div 
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${isReversed ? 'lg:grid-flow-col-dense' : ''} mb-20`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
        >
            <div className={`relative ${isReversed ? 'lg:col-start-2' : ''}`}>
                 <div className="bg-[#1e1e1e] p-4 rounded-lg border border-gray-800 shadow-lg card-glow">
                    <img src={project.imgSrc} alt={project.title} className="rounded-md object-cover w-full h-auto"/>
                </div>
            </div>
            <div className={`${isReversed ? 'lg:col-start-1' : ''}`}>
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-6">{project.description}</p>
                
                <div className="space-y-4 mb-6">
                    <div className="border-l-2 border-yellow-400 pl-4">
                        <h4 className="font-semibold text-white">Problem</h4>
                        <p className="text-gray-400 text-sm">{project.problem}</p>
                    </div>
                    <div className="border-l-2 border-cyan-400 pl-4">
                        <h4 className="font-semibold text-white">Solution</h4>
                        <p className="text-gray-400 text-sm">{project.solution}</p>
                    </div>
                     <div className="border-l-2 border-green-400 pl-4">
                        <h4 className="font-semibold text-white">Outcome</h4>
                        <p className="text-gray-400 text-sm">{project.outcome}</p>
                    </div>
                </div>

                <div className="mb-6">
                    <h4 className="font-semibold text-white mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map(tech => (
                            <span key={tech} className="bg-gray-700/50 text-cyan-300 text-xs font-medium px-2.5 py-1 rounded-full">{tech}</span>
                        ))}
                    </div>
                </div>

                <div className="flex flex-wrap gap-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-gray-700/50 text-white font-bold py-2 px-6 rounded-lg border border-gray-600 hover:bg-gray-700 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2">
                        <Github size={18} /> View on GitHub
                    </a>
                    {project.viewReport && (
                         <a href={project.viewReport} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2">
                            <FileText size={18} /> View Report
                        </a>
                    )}
                    {project.liveDemo && (
                         <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="bg-yellow-400 text-black font-bold py-2 px-6 rounded-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2">
                            Live Demo <ArrowRight size={18} />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-20 md:py-28 bg-[#1a1a1a]">
            <div className="container mx-auto px-6">
                <SectionTitle title="Featured Projects" subtitle="Real-world data analytics solutions transforming business decisions" />
                
                <div className="space-y-12">
                    {projectsData.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index}/>
                    ))}
                </div>
            </div>
        </section>
    );
}