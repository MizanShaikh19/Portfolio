import React from 'react';
import MeshBackground from './MeshBackground';
import ScrollHint from './ScrollHint';
import Reveal from './Reveal';

const ProjectCard = ({ project }) => {
    return (
        <div className="glass-strong rounded-2xl overflow-hidden hover:border-pink/30 hover:scale-[1.02] transition-all duration-500 group flex flex-col h-full relative" style={{
            background: 'linear-gradient(black, black) padding-box, linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2), rgba(249, 115, 22, 0.2)) border-box',
            border: '2px solid transparent'
        }}>
            {/* Card Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple/10 via-pink/10 to-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

            <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold text-white tracking-tight group-hover:gradient-text transition-all duration-300">
                        {project.name}
                    </h3>
                    <span className="text-xs font-mono text-pink-light border border-pink/30 px-3 py-1 rounded-full bg-pink/5">
                        {project.type}
                    </span>
                </div>

                <p className="text-gray-400 mb-8 leading-relaxed font-light flex-grow">
                    {project.description}
                </p>

                <div className="mb-8">
                    <h4 className="text-sm text-white/50 uppercase tracking-widest mb-4 font-bold border-l-2 border-pink/50 pl-2">Key Features</h4>
                    <ul className="space-y-2">
                        {project.features.map((feature, i) => (
                            <li key={i} className="text-gray-300 text-sm flex items-center gap-2">
                                <span className="w-1.5 h-1.5 gradient-purple-pink rounded-full"></span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="border-t border-white/5 pt-6 mt-auto">
                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map((tag, i) => (
                            <span key={i} className="px-3 py-1 glass text-gray-300 text-xs rounded-full border border-white/5">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center gap-6">
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs transition-all relative overflow-hidden"
                        >
                            <span className="relative z-10 gradient-text group-hover/link:underline">Live Demo</span>
                            <svg className="w-4 h-4 text-pink transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>

                        <a
                            href={project.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link flex items-center gap-2 text-gray-500 hover:text-white font-bold uppercase tracking-widest text-xs transition-all"
                        >
                            Source Code
                            <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const projects = [
        {
            name: "Service Booking App",
            type: "Management System",
            description: "A centralized two-role web application for managing service requests. Replaces manual tracking with a structured booking system allowing users to request services and admins to approve/reject them.",
            features: [
                "Auth & Authorization (User vs Admin)",
                "Secure Database (RLS)",
                "Booking Status Tracking"
            ],
            tech: ["React/Vite", "Tailwind", "Supabase"],
            repo: "https://github.com/MizanShaikh19/Service-Booking-Management-Web-App.git",
            demo: "https://service-booking-management-web-app.vercel.app/"
        },
        {
            name: "Internal Analytics Dashboard",
            type: "Internal Tool",
            description: "A single-user dashboard converting raw business records into clear KPIs and actionable insights. Designed for owners to filter data and view key metrics at a glance.",
            features: [
                "Data Modeling & KPIs",
                "Date & Category Filtering",
                "Clean Data Visualization"
            ],
            tech: ["React/Vite", "Supabase", "ChartJS"],
            repo: "https://github.com/MizanShaikh19/InternalAnalyticsBusinessInsightsDashboard.git",
            demo: "https://internal-analytics-business-insight.vercel.app/"
        },
        {
            name: "Mini CRM",
            type: "Client Ops",
            description: "A lead management system for freelancers to track client status and details. Solves the problem of lost leads by centralizing contact info and interaction notes.",
            features: [
                "Full CRUD Operations",
                "Status-based Workflows",
                "Client Note Storage"
            ],
            tech: ["React/Vite", "Supabase", "CRUD Logic"],
            repo: "https://github.com/MizanShaikh19/MiniCRM.git",
            demo: "https://mini-crm-miz.vercel.app/"
        }
    ];

    return (
        <section id="projects" className="relative py-16 md:py-24 px-6 bg-black">
            <MeshBackground className="py-20">
                <div className="max-w-7xl mx-auto">
                    <Reveal>
                        <div className="mb-20 text-center md:text-left">
                            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                                Practical <span className="gradient-text">Applications</span>
                            </h2>
                            <p className="text-gray-dark text-xl max-w-2xl font-light leading-relaxed">
                                I build internal business tools — bookings, dashboards, and client systems — the kind of premium solutions businesses actually use to scale.
                            </p>
                        </div>
                    </Reveal>

                    {/* Mobile: Horizontal Scroll | Desktop: Grid */}
                    <div className="relative">
                        <ScrollHint />
                        <Reveal delay={0.2}>
                            <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 md:pb-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-10 no-scrollbar">
                                {projects.map((project, index) => (
                                    <div key={index} className="min-w-[85vw] md:min-w-0 snap-center h-full">
                                        <ProjectCard project={project} />
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                    </div>
                </div>
            </MeshBackground>
        </section>
    );
};

export default Projects;
