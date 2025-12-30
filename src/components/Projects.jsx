import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers, Database, Globe } from 'lucide-react';
import SpotlightCard from './ui/SpotlightCard';

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="h-full"
        >
            <SpotlightCard className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-500 h-full flex flex-col">
                <div className="p-8 flex flex-col flex-grow relative z-10">
                    <div className="flex justify-between items-start mb-6">
                        <div className="p-3 bg-white/5 rounded-xl group-hover:bg-purple-500/20 transition-colors">
                            <Layers className="w-6 h-6 text-purple-400" />
                        </div>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-400 group-hover:border-purple-500/30 group-hover:text-purple-300 transition-all">
                            {project.type}
                        </span>
                    </div>

                    <h3 className="text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                        {project.name}
                    </h3>

                    <p className="text-gray-400 mb-8 leading-relaxed flex-grow">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map((tag, i) => (
                            <span key={i} className="px-2.5 py-1 text-xs font-medium text-gray-400 bg-black/40 rounded-md border border-white/5">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-bold text-white hover:text-purple-400 transition-colors z-20"
                        >
                            <Globe className="w-4 h-4" />
                            Live Demo
                        </a>
                        <a
                            href={project.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-white transition-colors ml-auto z-20"
                        >
                            <Github className="w-4 h-4" />
                            Code
                        </a>
                    </div>
                </div>
            </SpotlightCard>
        </motion.div>
    );
};

const Projects = () => {
    const projects = [
        {
            name: "Service Booking App",
            type: "Management System",
            description: "A centralized two-role web application for managing service requests. Replaces manual tracking with a structured booking system allowing users to request services and admins to approve/reject them.",
            tech: ["React", "Tailwind", "Supabase", "RLS"],
            repo: "https://github.com/MizanShaikh19/Service-Booking-Management-Web-App.git",
            demo: "https://service-booking-management-web-app.vercel.app/"
        },
        {
            name: "Internal Analytics Dashboard",
            type: "Internal Tool",
            description: "A single-user dashboard converting raw business records into clear KPIs and actionable insights. Designed for owners to filter data and view key metrics at a glance.",
            tech: ["React", "ChartJS", "Supabase", "Vite"],
            repo: "https://github.com/MizanShaikh19/InternalAnalyticsBusinessInsightsDashboard.git",
            demo: "https://internal-analytics-business-insight.vercel.app/"
        },
        {
            name: "Mini CRM",
            type: "Client Ops",
            description: "A lead management system for freelancers to track client status and details. Solves the problem of lost leads by centralizing contact info and interaction notes.",
            tech: ["React", "Supabase", "CRUD", "Tailwind"],
            repo: "https://github.com/MizanShaikh19/MiniCRM.git",
            demo: "https://mini-crm-miz.vercel.app/"
        }
    ];

    return (
        <section id="projects" className="py-24 bg-black text-white relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-pink-900/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                            Practical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Applications</span>
                        </h2>
                        <p className="text-gray-400 text-xl max-w-2xl font-light leading-relaxed">
                            I build internal business tools — bookings, dashboards, and client systems — the kind of premium solutions businesses actually use to scale.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
