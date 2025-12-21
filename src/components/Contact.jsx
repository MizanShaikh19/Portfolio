import React from 'react';
import MeshBackground from './MeshBackground';

const Contact = () => {
    return (
        <section id="contact" className="relative py-32 px-6 bg-black">
            <MeshBackground className="py-24">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Let's <span className="text-brand">Connect</span>
                    </h2>
                    <p className="text-xl text-gray-dark mb-12 font-light max-w-xl mx-auto">
                        Ready to build your internal tools? Email me directly.
                    </p>

                    <a
                        href="mailto:shaikhmizan@gmail.com"
                        className="inline-block text-3xl md:text-5xl lg:text-6xl font-black text-white hover:text-brand transition-all duration-300 border-b-2 border-white/20 hover:border-brand pb-2 tracking-tighter"
                    >
                        shaikhmizan@gmail.com
                    </a>

                    <div className="mt-16 flex justify-center gap-8">
                        {/* Optional Social placeholders if needed, currently kept minimal */}
                    </div>
                </div>
            </MeshBackground>
        </section>
    );
};

export default Contact;
