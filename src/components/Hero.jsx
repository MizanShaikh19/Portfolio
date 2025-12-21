import React, { useEffect, useState } from 'react';

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center bg-black overflow-hidden px-6 py-20">
            {/* Background Image: Abstract Blue Particle Wave */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?q=80&w=2070&auto=format&fit=crop"
                    alt="Dark Tech Background"
                    className="w-full h-full object-cover opacity-40"
                />

                {/* Gradient Mesh Overlay for focus and depth */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent" />
            </div>

            {/* Content Container */}
            <div className={`relative z-10 max-w-7xl mx-auto w-full transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <div className="max-w-4xl pt-20">

                    {/* Logo/Brand (simulated as part of hero for visual balance like reference) */}
                    <div className="absolute top-0 left-0 hidden md:block opacity-0 animate-fade-in" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
                        <h3 className="text-2xl font-bold text-white tracking-widest">MIZAN<span className="text-brand">.IO</span></h3>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 leading-[0.95] tracking-tight text-left">
                        The New Standard <br />
                        in <span className="text-brand">Web Design.</span>
                    </h1>

                    {/* Subheadline matching reference style */}
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-300 mb-12 tracking-wide text-left max-w-3xl leading-snug">
                        Use modern tech to get a 360-degree <br className="hidden md:block" />
                        view of your business potential.
                    </h2>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6">
                        <button
                            className="w-full sm:w-auto px-12 py-4 bg-brand hover:bg-brand-hover text-white font-medium text-lg rounded-sm transition-all duration-300 shadow-xl shadow-brand/10 hover:shadow-brand/30"
                            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Learn More
                        </button>
                        <button
                            className="w-full sm:w-auto px-12 py-4 bg-transparent border border-white/30 hover:bg-white text-white hover:text-black font-medium text-lg rounded-sm transition-all duration-300"
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Get Started
                        </button>
                    </div>

                </div>
            </div>

            {/* Navbar Placeholder for visual completeness if not globally present */}
            <nav className="absolute top-0 right-0 p-8 hidden md:flex gap-8 text-sm font-medium text-gray-300 tracking-widest uppercase z-20">
                <a href="#services" className="hover:text-white transition-colors">Solutions</a>
                <a href="#about" className="hover:text-white transition-colors">Vision</a>
                <a href="#projects" className="hover:text-white transition-colors">Programs</a>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </nav>

        </section>
    );
};

export default Hero;
