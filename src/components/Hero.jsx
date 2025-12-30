import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';

const Hero = () => {
    useEffect(() => {
        // Unicorn Studio Script Embed
        const scriptId = 'unicorn-studio-script';
        if (!document.getElementById(scriptId)) {
            const script = document.createElement('script');
            script.id = scriptId;
            script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.0/dist/unicornStudio.umd.js";
            script.onload = () => {
                if (window.UnicornStudio) {
                    window.UnicornStudio.init();
                }
            };
            document.body.appendChild(script);
        } else if (window.UnicornStudio) {
            window.UnicornStudio.init();
        }
    }, []);

    const techStack = [
        { name: 'React', id: 1 },
        { name: 'PowerBI', id: 2 },
        { name: 'SQL', id: 3 },
        { name: 'Node.js', id: 4 },
        { name: 'Excel', id: 5 },
        { name: 'Supabase', id: 6 },
    ];

    return (
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black text-white">
            {/* Unicorn Studio Background Embed */}
            <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
                <div data-us-project="zYoJg86ROzBQjELZMC59" style={{ width: '100%', height: '100%' }}></div>
            </div>

            {/* Gradient Overlay for better text readability */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/50 via-transparent to-black pointer-events-none" />

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-20">
                <div className="max-w-3xl">
                    <motion.h1
                        className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Crafting Code.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-light via-pink-light to-orange-light">
                            Unlocking Insights.
                        </span>
                    </motion.h1>

                    <motion.p
                        className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Bridging the gap between powerful web applications and actionable data intelligence to drive business growth.
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap gap-4 mb-32"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:shadow-[0_0_30px_rgba(139,92,246,0.7)] flex items-center gap-2">
                            View My Work
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Tech Stack Bar */}
            <motion.div
                className="absolute bottom-0 w-full border-t border-white/10 bg-black/50 backdrop-blur-lg py-6 z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center opacity-70 hover:opacity-100 transition-all duration-500 overflow-x-auto no-scrollbar gap-12">
                    {techStack.map((tech) => (
                        <div key={tech.id} className="flex items-center gap-2 font-mono text-sm font-bold tracking-widest uppercase text-gray-400 whitespace-nowrap">
                            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                            {tech.name}
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
