import React, { useEffect, useState } from 'react';
import GradientBackground from './GradientBackground';

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Gradient Background with Layered Stripes */}
            <GradientBackground variant="hero" className="absolute inset-0 z-0" />

            {/* Content Container */}
            <div className={`relative z-10 max-w-7xl mx-auto w-full px-6 py-12 md:py-20 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="max-w-4xl pt-12 md:pt-20">

                    {/* Main Headline with Gradient Text */}
                    <h1 className="text-4xl md:text-8xl lg:text-9xl font-bold mb-6 leading-[0.95] tracking-tight text-left animate-fade-in" style={{ animationDelay: '0.4s' }}>
                        <span className="text-white">The New Standard</span>
                        <br />
                        <span className="text-white">in </span>
                        <span className="gradient-text animate-gradient">Web Design.</span>
                    </h1>

                    {/* Subheadline */}
                    <h2 className="text-lg md:text-2xl text-gray-300 mb-10 md:mb-12 tracking-wide text-left max-w-4xl leading-relaxed animate-fade-in" style={{ animationDelay: '0.6s' }}>
                        I'm Mizan Shaikh, a web developer specializing in fast, modern websites for small businesses.
                        I use <span className="text-white font-medium">AI-assisted development tools</span> to build sites in days instead of weeks —
                        without compromising quality. My approach is simple: understand your needs, build it fast, deliver it clean.
                    </h2>

                    {/* Buttons with Gradient Effects */}
                    <div className="flex flex-col sm:flex-row gap-6 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                        <button
                            className="group relative w-full sm:w-auto px-12 py-4 bg-gradient-to-r from-purple to-pink text-white font-medium text-lg rounded-lg transition-all duration-300 shadow-2xl hover:shadow-purple/50 hover:scale-105 overflow-hidden"
                            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            <span className="relative z-10">Learn More</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-pink to-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </button>
                        <button
                            className="w-full sm:w-auto px-12 py-4 glass-strong text-white font-medium text-lg rounded-lg transition-all duration-300 hover:glass border border-white/20 hover:border-pink hover:shadow-lg hover:shadow-pink/20"
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Get Started
                        </button>
                    </div>

                </div>
            </div>

            {/* Decorative Gradient Orb */}
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-br from-purple/20 to-pink/20 rounded-full blur-3xl animate-pulse hidden lg:block" />

        </section>
    );
};

export default Hero;
