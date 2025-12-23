import React from 'react';
import MeshBackground from './MeshBackground';
import { Linkedin, Instagram, Twitter } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="relative py-32 px-6 bg-black">
            <MeshBackground className="py-24">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Let's <span className="gradient-text">Connect</span>
                    </h2>
                    <p className="text-xl text-gray-dark mb-12 font-light max-w-xl mx-auto">
                        Ready to build your internal tools? Email me directly or reach out on social media.
                    </p>

                    <a
                        href="mailto:shaikhmizan120@gmail.com"
                        className="inline-block text-3xl md:text-5xl lg:text-6xl font-black text-white hover:text-pink transition-all duration-300 border-b-2 border-white/20 hover:border-pink pb-2 tracking-tighter mb-8"
                    >
                        shaikhmizan120@gmail.com
                    </a>

                    <div className="mt-16 flex justify-center gap-10">
                        <a
                            href="https://www.linkedin.com/in/mizan-shaikh-b36607394?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-all duration-300"
                        >
                            <div className="p-4 rounded-full glass border border-white/10 group-hover:border-purple/50 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all">
                                <Linkedin className="w-8 h-8 group-hover:text-purple" />
                            </div>
                            <span className="text-sm font-medium tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">LinkedIn</span>
                        </a>

                        <a
                            href="https://www.instagram.com/19.mizan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-all duration-300"
                        >
                            <div className="p-4 rounded-full glass border border-white/10 group-hover:border-pink/50 group-hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all">
                                <Instagram className="w-8 h-8 group-hover:text-pink" />
                            </div>
                            <span className="text-sm font-medium tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">Instagram</span>
                        </a>

                        <a
                            href="https://x.com/mizan__shaikh96"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-all duration-300"
                        >
                            <div className="p-4 rounded-full glass border border-white/10 group-hover:border-orange/50 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-all">
                                <Twitter className="w-8 h-8 group-hover:text-orange" />
                            </div>
                            <span className="text-sm font-medium tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">Twitter</span>
                        </a>
                    </div>
                </div>
            </MeshBackground>
        </section>
    );
};

export default Contact;
