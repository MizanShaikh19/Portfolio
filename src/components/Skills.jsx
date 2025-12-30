import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Server, Boxes, LineChart } from 'lucide-react';
import SpotlightCard from './ui/SpotlightCard';

const Skills = () => {
    const techStack = [
        {
            icon: Layout,
            title: "Frontend Core",
            skills: ["React", "Vue.js", "TypeScript", "Tailwind CSS"],
            description: "Building pixel-perfect, responsive interfaces with modern frameworks."
        },
        {
            icon: LineChart,
            title: "Data Analytics",
            skills: ["Excel", "PowerBI", "SQL", "Python"],
            description: "Transforming raw data into actionable business insights and dashboards."
        },
        {
            icon: Server,
            title: "Backend Engine",
            skills: ["Node.js", "Express", "Supabase", "API Design"],
            description: "Robust server-side logic and scalable APIs."
        },
        {
            icon: Database,
            title: "Data Architecture",
            skills: ["PostgreSQL", "MongoDB", "Redis", "Firebase"],
            description: "Optimized database schemas for speed and reliability."
        },
        {
            icon: Boxes,
            title: "Tools & DevOps",
            skills: ["Git", "Docker", "AWS", "Vercel"],
            description: "Streamlined CI/CD pipelines and containerization."
        },
        {
            icon: Code2,
            title: "AI Integration",
            skills: ["OpenAI API", "HuggingFace", "LangChain"],
            description: "Leveraging LLMs to build smart, adaptive applications."
        }
    ];

    return (
        <section id="skills" className="py-24 bg-black text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(139,92,246,0.1),transparent_70%)]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Toolbox</span>
                    </motion.h2>
                    <motion.p
                        className="text-gray-400 text-xl max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        A comprehensive suite of modern technologies I use to bring ideas to life.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {techStack.map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <SpotlightCard className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full">
                                <div className="relative z-10">
                                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <tech.icon className="w-6 h-6 text-purple-400 group-hover:text-pink-400 transition-colors" />
                                    </div>

                                    <h3 className="text-xl font-bold mb-3">{tech.title}</h3>
                                    <p className="text-gray-400 text-sm mb-6 min-h-[40px]">{tech.description}</p>

                                    <div className="flex flex-wrap gap-2">
                                        {tech.skills.map((skill, i) => (
                                            <span key={i} className="px-3 py-1 bg-black/40 border border-white/10 rounded-full text-xs font-medium text-gray-300 group-hover:border-purple-500/30 transition-colors">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
