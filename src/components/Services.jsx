import React from 'react';
import MeshBackground from './MeshBackground';
import Reveal from './Reveal';

const PricingCard = ({ plan, highlight = false }) => {
    return (
        <div className={`relative glass-strong rounded-3xl overflow-hidden transition-all duration-500 group border-2 ${highlight ? 'border-pink/50 scale-105 z-10' : 'border-transparent hover:border-purple/30'}`}
            style={{
                background: 'linear-gradient(black, black) padding-box, linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2), rgba(249, 115, 22, 0.2)) border-box'
            }}>

            {highlight && (
                <div className="absolute top-0 right-0">
                    <div className="bg-gradient-to-r from-purple to-pink text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-bl-xl">
                        Most Popular
                    </div>
                </div>
            )}

            <div className="p-6 md:p-10 flex flex-col h-full">
                <div className="mb-8">
                    <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:gradient-text transition-all duration-300">
                        {plan.name}
                    </h3>
                    <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-white">${plan.price}</span>
                        <span className="text-gray-500 text-sm">/ project</span>
                    </div>
                    <p className="text-gray-400 text-sm mt-4 leading-relaxed font-light">
                        {plan.description}
                    </p>
                </div>

                <div className="flex-grow">
                    <h4 className="text-xs text-white/40 uppercase tracking-widest mb-6 font-bold border-l-2 border-pink/50 pl-2">What's Included</h4>
                    <ul className="space-y-4 mb-8">
                        {plan.features.map((feature, i) => (
                            <li key={i} className="text-gray-300 text-sm flex items-start gap-3">
                                <svg className="w-5 h-5 text-pink shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="pt-8 border-t border-white/5 mt-auto">
                    <div className="flex justify-between items-center mb-6 text-sm text-gray-400">
                        <span>Timeline:</span>
                        <span className="text-white font-medium">{plan.timeline}</span>
                    </div>
                    <button
                        className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest text-xs transition-all duration-300 ${highlight ? 'bg-gradient-to-r from-purple to-pink text-white shadow-xl shadow-purple/20 hover:shadow-purple/40 hover:scale-[1.02]' : 'glass border border-white/10 text-white hover:border-pink/50'}`}
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Choose {plan.name}
                    </button>
                </div>
            </div>

            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple/5 via-pink/5 to-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
        </div>
    );
};

const Services = () => {
    const plans = [
        {
            name: "Starter",
            price: "800",
            description: "Perfect for personal brands or landing pages that need to make a strong first impression.",
            timeline: "3 business days",
            features: [
                "1 Custom High-Conversion Page",
                "Mobile-Responsive Design",
                "Contact Form Integration",
                "Basic SEO Setup",
                "Fast Loading Speed",
                "1 Round of Revision"
            ]
        },
        {
            name: "Business",
            price: "1,200",
            description: "The ideal choice for small businesses needing a professional and scalable online presence.",
            timeline: "5 business days",
            features: [
                "3-5 Custom Tailored Pages",
                "Contact Form w/ Email Alerts",
                "Google Maps & Social Integration",
                "Advanced Responsive Layouts",
                "Premium Stock Imagery",
                "2 Rounds of Revisions",
                "Free Hosting (1st Year)"
            ],
            highlight: true
        },
        {
            name: "Premium",
            price: "1,800",
            description: "A full-scale digital solution for businesses ready to automate and sell online.",
            timeline: "7 business days",
            features: [
                "6-10 Custom Pages",
                "Basic E-commerce Functionality",
                "Advanced Micro-animations",
                "CMS for Easy Content Updates",
                "Priority Support (30 Days)",
                "3 Rounds of Revisions",
                "Performance Optimization"
            ]
        }
    ];

    return (
        <section id="services" className="relative py-16 md:py-24 px-6 bg-black overflow-hidden">
            <MeshBackground className="py-12 md:py-20">
                <div className="max-w-7xl mx-auto">
                    <Reveal>
                        <div className="mb-12 md:mb-20 text-center">
                            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                                Service <span className="gradient-text">Packages</span>
                            </h2>
                            <p className="text-gray-dark text-xl max-w-2xl mx-auto font-light leading-relaxed">
                                Transparent pricing for premium digital solutions. Pick the plan that fits your business stage.
                            </p>
                        </div>
                    </Reveal>

                    {/* Mobile: Horizontal Scroll | Desktop: Grid */}
                    <Reveal delay={0.2}>
                        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 md:pb-0 md:grid md:grid-cols-3 md:gap-8 items-center no-scrollbar">
                            {plans.map((plan, index) => (
                                <div key={index} className="min-w-[85vw] md:min-w-0 snap-center">
                                    <PricingCard plan={plan} highlight={plan.highlight} />
                                </div>
                            ))}
                        </div>
                    </Reveal>

                    <Reveal delay={0.4}>
                        <div className="mt-12 md:mt-20 glass p-6 md:p-8 rounded-2xl border border-white/5 text-center max-w-4xl mx-auto">
                            <p className="text-gray-400 italic text-sm md:text-base">
                                "I use AI-assisted development tools to build sites in days instead of weeks - without compromising quality."
                            </p>
                        </div>
                    </Reveal>
                </div>
            </MeshBackground>
        </section >
    );
};

export default Services;
