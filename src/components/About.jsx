import React from 'react';
import MeshBackground from './MeshBackground';

const About = () => {
    return (
        <section id="about" className="relative py-24 px-6 bg-black">
            <MeshBackground className="py-20">
                <div className="max-w-4xl mx-auto text-center">

                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 tracking-tight">
                        How I <span className="gradient-text">Work</span>
                    </h2>

                    <div className="relative glass-strong p-12 rounded-2xl border-2 border-transparent hover:border-pink/30 transition-all duration-500" style={{
                        background: 'linear-gradient(black, black) padding-box, linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(236, 72, 153, 0.3), rgba(249, 115, 22, 0.3)) border-box'
                    }}>
                        {/* Decorative Quote Mark with Gradient */}
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-black px-4">
                            <span className="text-6xl gradient-text font-serif">"</span>
                        </div>

                        <p className="text-2xl md:text-3xl text-gray-200 leading-relaxed font-light italic">
                            I focus on building secure, practical MVPs with clean workflows and minimal overengineering.
                        </p>

                        <div className="mt-8 pt-8 border-t border-white/10">
                            <p className="gradient-text uppercase tracking-widest text-sm font-bold">Mizan Shaikh</p>
                        </div>

                        {/* Gradient Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple/5 via-pink/5 to-orange/5 rounded-2xl blur-xl opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10" />
                    </div>

                </div>
            </MeshBackground>
        </section>
    );
};

export default About;
