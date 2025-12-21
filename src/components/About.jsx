import React from 'react';
import MeshBackground from './MeshBackground';

const About = () => {
    return (
        <section id="about" className="relative py-24 px-6 bg-black">
            <MeshBackground className="py-20">
                <div className="max-w-4xl mx-auto text-center">

                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 tracking-tight">
                        How I <span className="text-brand">Work</span>
                    </h2>

                    <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 p-12 rounded-sm relative">
                        {/* Decorative Quote Mark */}
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-black px-4">
                            <span className="text-6xl text-brand font-serif">"</span>
                        </div>

                        <p className="text-2xl md:text-3xl text-gray-200 leading-relaxed font-light italic">
                            I focus on building secure, practical MVPs with clean workflows and minimal overengineering.
                        </p>

                        <div className="mt-8 pt-8 border-t border-white/5">
                            <p className="text-gray-500 uppercase tracking-widest text-sm font-bold">Mizan Shaikh</p>
                        </div>
                    </div>

                </div>
            </MeshBackground>
        </section>
    );
};

export default About;
