import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const Pricing = () => {
    return (
        <section id="pricing" className="py-20 bg-black text-white relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Affordable Plans for <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Every Need</span>
                    </motion.h2>
                    <motion.p
                        className="text-gray-400 max-w-2xl mx-auto text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Choose the perfect plan for your design projects. Our pricing is designed to offer flexibility and value.
                    </motion.p>
                </div>

                <motion.div
                    className="max-w-4xl mx-auto bg-gradient-to-br from-purple-900/40 to-black border border-purple-500/30 rounded-3xl p-8 md:p-12 relative overflow-hidden group"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex-1 text-left">
                            <h3 className="text-3xl font-bold mb-2">Custom Project</h3>
                            <p className="text-gray-400 mb-6">Tailored solutions for your specific business needs.</p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-gray-300">
                                    <Check className="w-5 h-5 text-green-400" />
                                    <span>AI-Generated & Custom Designs</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-300">
                                    <Check className="w-5 h-5 text-green-400" />
                                    <span>Premium Templates Library</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-300">
                                    <Check className="w-5 h-5 text-green-400" />
                                    <span>Priority Email Support</span>
                                </li>
                            </ul>
                        </div>

                        <div className="flex-shrink-0 w-full md:w-auto">
                            <button
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="w-full md:w-auto px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                            >
                                Contact for Pricing
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Pricing;
