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
        { name: 'Home', id: 'hero' }, // Assuming Hero is top
        { name: 'Work', id: 'projects' },
        { name: 'Process', id: 'process' },
        { name: 'About', id: 'about' },
        { name: 'Contact', id: 'contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <button onClick={() => scrollToSection('hero')} className="text-2xl font-bold tracking-tighter">
                    MIZAN<span className="gradient-text">.IO</span>
                </button>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => scrollToSection(link.id)}
                            className="text-sm font-medium text-gray-300 hover:text-white hover:text-pink transition-colors uppercase tracking-widest"
                        >
                            {link.name}
                        </button>
                    ))}
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
            <div className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
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
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
