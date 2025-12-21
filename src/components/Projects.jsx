import React from 'react';
import MeshBackground from './MeshBackground';

const ProjectCard = ({ project }) => {
    return (
        <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-sm overflow-hidden hover:border-brand/30 transition-all duration-500 group flex flex-col h-full">
            <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-brand transition-colors">
                        {project.name}
                    </h3>
                    <span className="text-xs font-mono text-brand/80 border border-brand/20 px-2 py-1 rounded">
                        {project.type}
                    </span>
                </div>

                <p className="text-gray-dark mb-8 leading-relaxed font-light flex-grow">
                    {project.description}
                </p>

                <div className="mb-8">
                    <h4 className="text-sm text-white/50 uppercase tracking-widest mb-3 font-bold">Key Features</h4>
                    <ul className="grid grid-cols-1 gap-2">
                        {project.features.map((feature, i) => (
                            <li key={i} className="text-gray-400 text-sm flex items-center gap-2">
                                <span className="w-1 h-1 bg-brand rounded-full"></span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="border-t border-white/5 pt-6 mt-auto">
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tag, i) => (
                            <span key={i} className="px-3 py-1 bg-white/5 text-gray-300 text-xs rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-white hover:text-brand font-bold uppercase tracking-widest text-sm transition-colors group/link"
                    >
                        View Code
                        <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    // 🔹 Project 1 — Service Booking & Management Web App
    // 🔹 Project 2 — Internal Business Analytics Dashboard
    // 🔹 Project 3 — Client / Lead Management System (Mini CRM)
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
            tech: ["HTML/CSS/JS", "Supabase Auth", "PostgreSQL"],
            repo: "https://github.com/MizanShaikh19/Service-Booking-Management-Web-App.git"
        },
        {
            name: "Business Analytics Dashboard",
            type: "Internal Tool",
            description: "A single-user dashboard converting raw business records into clear KPIs and actionable insights. Designed for owners to filter data and view key metrics at a glance.",
            features: [
                "Data Modeling & KPIs",
                "Date & Category Filtering",
                "Clean Data Visualization"
            ],
            tech: ["HTML/CSS/JS", "Supabase", "Chart Logic"],
            repo: "https://github.com/MizanShaikh19/InternalAnalyticsBusinessInsightsDashboard.git"
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
            tech: ["HTML/CSS/JS", "Supabase", "CRUD"],
            repo: "https://github.com/MizanShaikh19/MiniCRM.git"
        }
    ];

    return (
        <section id="projects" className="relative py-32 px-6">
            <MeshBackground className="py-20">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                            Practical <span className="text-brand">Applications</span>
                        </h2>
                        <p className="text-gray-dark text-xl max-w-2xl font-light">
                            I build internal business tools — bookings, dashboards, and client systems — the kind businesses actually use.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </div>
                </div>
            </MeshBackground>
        </section>
    );
};

export default Projects;
