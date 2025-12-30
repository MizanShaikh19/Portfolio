import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        setIsOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const navLinks = [
        { name: 'Home', id: 'hero' },
        { name: 'Skills', id: 'skills' },
        { name: 'Work', id: 'projects' },
        { name: 'Contact', id: 'contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <button onClick={() => scrollToSection('hero')} className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="font-mono text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{'<'}</span>
                        <span className="font-mono text-xl font-bold text-white">M</span>
                        <span className="font-mono text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">{'>'}</span>
                    </div>
                    <span className="text-xl font-bold tracking-tight hidden sm:block">
                        MIZAN<span className="text-gray-500">.DEV</span>
                    </span>
                </button>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => scrollToSection(link.id)}
                            className="text-sm font-medium text-gray-400 hover:text-white hover:text-pink-400 transition-colors uppercase tracking-widest relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full" />
                        </button>
                    ))}
                    <button className="px-5 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full text-sm font-bold text-white transition-all hover:scale-105">
                        Download CV
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-col items-center py-8 gap-6">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => scrollToSection(link.id)}
                            className="text-lg font-bold text-gray-300 hover:text-white hover:text-pink transition-colors uppercase tracking-widest"
                        >
                            {link.name}
                        </button>
                    ))}
                    <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold shadow-lg">
                        Download CV
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
