import React from 'react';
import MeshBackground from './MeshBackground';

const ProcessStep = ({ step, index, isLast }) => {
    return (
        <div className="relative group">
            {/* Horizontal Connector (hidden on mobile) */}
            {!isLast && (
                <div className="hidden lg:block absolute top-12 left-[calc(50%+4rem)] w-[calc(100%-8rem)] h-[2px] bg-gradient-to-r from-pink/50 to-purple/50 opacity-20 group-hover:opacity-100 transition-opacity duration-500" />
            )}

            <div className="flex flex-col items-center text-center">
                <div className="relative mb-8">
                    <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl glass-strong border-2 border-white/5 flex items-center justify-center text-2xl md:text-4xl group-hover:scale-110 group-hover:border-pink/50 transition-all duration-500 relative z-10"
                        style={{
                            background: 'linear-gradient(black, black) padding-box, linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(236, 72, 153, 0.3), rgba(249, 115, 22, 0.3)) border-box'
                        }}>
                        <span className="gradient-text font-bold">{index + 1}</span>
                    </div>
                    {/* Glow behind icon */}
                    <div className="absolute inset-0 bg-pink/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <h3 className="text-xl font-bold text-white mb-4 tracking-tight group-hover:gradient-text transition-all duration-300">
                    {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-[280px] font-light">
                    {step.description}
                </p>
                <div className="mt-4 text-[10px] uppercase tracking-[0.2em] font-bold text-pink/50">
                    {step.duration}
                </div>
            </div>
        </div>
    );
};

const Process = () => {
    const steps = [
        {
            title: "Kick-off Call",
            description: "We discuss your business, goals, design preferences, and must-have features in a 30-min discovery session.",
            duration: "Day 0"
        },
        {
            title: "Design & Build",
            description: "I build your site using modern AI tools. You'll get a preview link to see progress in real-time.",
            duration: "Days 1-3"
        },
        {
            title: "Review & Revisions",
            description: "You provide feedback, and I make rapid adjustments until you're 100% satisfied with the result.",
            duration: "Days 4-5"
        },
        {
            title: "Launch",
            description: "Your site goes live on a custom domain. I handle all technical setup, SEO, and hosting configuration.",
            duration: "Day 5"
        },
        {
            title: "Handoff",
            description: "You get credentials, quick training, and 30 days of free support to ensure a smooth transition.",
            duration: "Day 6+"
        }
    ];

    return (
        <section id="process" className="relative py-16 md:py-32 px-6 bg-black overflow-hidden">
            <MeshBackground className="py-12 md:py-20">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12 md:mb-24 text-center">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                            The <span className="gradient-text">Workflow</span>
                        </h2>
                        <p className="text-gray-dark text-xl max-w-2xl mx-auto font-light leading-relaxed">
                            How I take your idea from concept to a live, high-performance website in less than a week.
                        </p>
                    </div>

                    {/* Mobile: Horizontal Scroll | Desktop: Grid */}
                    <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 md:pb-0 md:grid md:grid-cols-3 lg:grid-cols-5 md:gap-8 no-scrollbar">
                        {steps.map((step, index) => (
                            <div key={index} className="min-w-[70vw] md:min-w-0 snap-center">
                                <ProcessStep
                                    step={step}
                                    index={index}
                                    isLast={index === steps.length - 1}
                                />
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 md:mt-24 p-1 rounded-3xl bg-gradient-to-r from-purple/20 via-pink/20 to-orange/20 max-w-4xl mx-auto">
                        <div className="bg-black/80 backdrop-blur-xl p-8 md:p-12 rounded-[calc(1.5rem-2px)] text-center">
                            <h3 className="text-2xl font-bold text-white mb-4">Ready to start?</h3>
                            <p className="text-gray-400 mb-8 font-light">Payment: 50% upfront to start, 50% upon completion.</p>
                            <button
                                className="px-12 py-4 bg-gradient-to-r from-purple to-pink text-white font-bold uppercase tracking-widest text-xs rounded-xl shadow-2xl shadow-purple/30 hover:shadow-purple/50 hover:scale-105 transition-all duration-300"
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Get Your Project Started
                            </button>
                        </div>
                    </div>
                </div>
            </MeshBackground>
        </section>
    );
};

export default Process;
