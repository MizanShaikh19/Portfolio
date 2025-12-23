import React from 'react';
import MeshBackground from './MeshBackground';

const SkillCard = ({ title, items }) => (
    <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 p-8 rounded-sm hover:border-brand/30 transition-all duration-300 group">
        <h3 className="text-white font-bold text-xl mb-6 border-l-4 border-brand pl-4">{title}</h3>
        <ul className="space-y-3">
            {items.map((item, index) => (
                <li key={index} className="text-gray-dark flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-brand/50 rounded-full group-hover:bg-brand transition-colors"></span>
                    {item}
                </li>
            ))}
        </ul>
    </div>
);

const Skills = () => {
    return (
        <section id="skills" className="relative py-24 px-6 bg-black">
            <MeshBackground className="py-20">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 tracking-tight">
                        Technical <span className="text-brand">Toolbox</span>
                    </h2>

                    {/* Mobile: Horizontal Scroll | Desktop: Grid */}
                    <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 md:pb-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 no-scrollbar">
                        <div className="min-w-[85vw] md:min-w-0 snap-center">
                            <SkillCard
                                title="Frontend Core"
                                items={["HTML5 & CSS3 Semantics", "JavaScript (ES6+)", "React.js Component Architecture", "Tailwind CSS Utility First"]}
                            />
                        </div>
                        <div className="min-w-[85vw] md:min-w-0 snap-center">
                            <SkillCard
                                title="Backend & Data"
                                items={["Supabase (PostgreSQL)", "Authentication & RLS Security", "REST API Integration", "CRUD Operations"]}
                            />
                        </div>
                        <div className="min-w-[85vw] md:min-w-0 snap-center">
                            <SkillCard
                                title="Specialized"
                                items={["Internal Tools & Dashboards", "Role-Based Access Control", "State Management", "Responsive Business Layouts"]}
                            />
                        </div>
                    </div>
                </div>
            </MeshBackground>
        </section>
    );
};

export default Skills;
