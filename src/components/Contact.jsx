import React from 'react';
import { Linkedin, Twitter, Mail, Handshake } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-black text-white px-6 border-t border-white/10">
            <div className="max-w-4xl mx-auto text-center">
                <div className="mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-500/10 text-purple-400 mb-6">
                        <Handshake className="w-8 h-8" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Connect</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-xl mx-auto">
                        Ready to build your internal tools? I'm currently available for freelance projects and full-time opportunities.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                    <a
                        href="mailto:shaikhmizan120@gmail.com"
                        className="flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-gray-100 transition-colors"
                    >
                        <Mail className="w-5 h-5" />
                        Email Me
                    </a>

                    <a
                        href="https://www.linkedin.com/in/mizan-shaikh-b36607394"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                    >
                        <Linkedin className="w-5 h-5 text-blue-400" />
                        LinkedIn
                    </a>

                    <a
                        href="https://x.com/mizan__shaikh96"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                    >
                        <Twitter className="w-5 h-5 text-sky-400" />
                        Twitter
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
