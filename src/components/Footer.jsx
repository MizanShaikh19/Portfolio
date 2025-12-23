import React from 'react';
import { Linkedin, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black py-20 px-6 border-t border-white/5 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-3xl font-bold text-white mb-6 tracking-tighter">
                            MIZAN.<span className="gradient-text">IO</span>
                        </h2>
                        <p className="text-gray-dark text-lg max-w-md font-light leading-relaxed">
                            Premium web development for small businesses. Building high-performance, results-driven websites in record time.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Navigation</h4>
                        <ul className="space-y-4 text-gray-dark">
                            <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-purple transition-colors">Home</button></li>
                            <li><button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })} className="hover:text-orange transition-colors">Work</button></li>
                            <li><button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })} className="hover:text-pink transition-colors">About</button></li>
                            <li><button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="hover:text-orange transition-colors">Contact</button></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Contact</h4>
                        <ul className="space-y-4 text-gray-dark">
                            <li><a href="mailto:shaikhmizan120@gmail.com" className="hover:text-pink transition-colors">shaikhmizan120@gmail.com</a></li>
                            <li><span className="block">Mumbai, Maharashtra, India</span></li>
                            <li className="flex gap-4 pt-4">
                                <a
                                    href="https://www.linkedin.com/in/mizan-shaikh-b36607394"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-purple transition-all duration-300"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://www.instagram.com/19.mizan"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-pink transition-all duration-300"
                                >
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://x.com/mizan__shaikh96"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-orange transition-all duration-300"
                                >
                                    <Twitter className="w-5 h-5" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-dark text-sm tracking-widest uppercase">
                    <p>&copy; 2025 MIZAN.IO. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
