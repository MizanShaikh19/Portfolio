import React from 'react';
import { Linkedin, Twitter, Mail, Github, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black pt-20 pb-10 px-6 border-t border-white/10 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-6 group">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center">
                                <span className="font-mono text-lg font-bold text-white">M</span>
                            </div>
                            <span className="text-2xl font-bold tracking-tight text-white">
                                MIZAN<span className="text-gray-500">.DEV</span>
                            </span>
                        </div>
                        <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                            Building premium digital experiences and internal tools that help businesses scale.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 font-mono text-sm text-purple-400">NAVIGATION</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white transition-colors">Home</button></li>
                            <li><button onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors">Skills</button></li>
                            <li><button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors">Work</button></li>
                            <li><button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors">Contact</button></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 font-mono text-sm text-pink-400">SOCIALS</h4>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/MizanShaikh19"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-purple-500/50 hover:text-purple-400 transition-all duration-300"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/mizan-shaikh-b36607394"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="https://x.com/mizan__shaikh96"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-sky-500/50 hover:text-sky-400 transition-all duration-300"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a
                                href="mailto:shaikhmizan120@gmail.com"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-pink-500/50 hover:text-pink-400 transition-all duration-300"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
                    <p className="flex items-center gap-2">
                        &copy; 2025 Mizan Shaikh. Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in India.
                    </p>
                    <div className="flex gap-8">
                        <span className="hover:text-gray-300 cursor-pointer transition-colors">Privacy</span>
                        <span className="hover:text-gray-300 cursor-pointer transition-colors">Terms</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
