
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Edit3, BarChartHorizontal } from 'lucide-react';

const SectionTitle = ({ title, subtitle }) => (
    <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 text-glow">{title}</h2>
        <p className="text-lg text-gray-400 mt-2">{subtitle}</p>
    </div>
);

const PlaceholderCard = ({ icon, title, text }) => (
    <motion.div 
        className="bg-[#1e1e1e] p-8 rounded-lg border border-dashed border-gray-700 text-center flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
    >
        <div className="text-cyan-400 mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{text}</p>
    </motion.div>
);

export default function BlogSection() {
    return (
        <section id="blog" className="py-20 md:py-28 bg-[#121212]">
            <div className="container mx-auto px-6">
                <SectionTitle title="From My Desk" subtitle="Insights, learnings, and project deep-dives in the world of data" />
                <div className="bg-[#1a1a1a] rounded-xl border border-gray-800 p-10 text-center">
                    <BookOpen size={48} className="mx-auto text-yellow-400 mb-6"/>
                    <h3 className="text-3xl font-bold text-white mb-3">Content Coming Soon!</h3>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        This space is currently under development. I'm excited to soon share articles about data analytics, project breakdowns, and my thoughts on the latest industry trends. Stay tuned for insightful content!
                    </p>
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <PlaceholderCard icon={<Edit3 size={32}/>} title="Project Write-ups" text="Detailed case studies of my analytics projects."/>
                        <PlaceholderCard icon={<BarChartHorizontal size={32}/>} title="Tech Tutorials" text="Guides on Power BI, SQL, and Python techniques."/>
                        <PlaceholderCard icon={<BookOpen size={32}/>} title="Industry Insights" text="My take on the evolving landscape of data science."/>
                    </div>
                </div>
            </div>
        </section>
    );
}
