import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQItem = ({ faq, isOpen, onClick }) => {
    return (
        <div className="border-b border-white/10 last:border-none">
            <button
                className="w-full py-6 text-left flex justify-between items-center gap-4 group"
                onClick={onClick}
            >
                <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-purple-400' : 'text-white group-hover:text-gray-300'}`}>
                    {faq.question}
                </span>
                <div className={`p-2 rounded-full transition-colors ${isOpen ? 'bg-purple-500/20 text-purple-400' : 'bg-white/5 text-gray-400 group-hover:bg-white/10'}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="pb-6 text-gray-400 leading-relaxed font-light">
                            {faq.answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "How long does a typical project take?",
            answer: "Most internal tools (dashboards, CRMs) take 1-2 weeks. Larger systems may take 3-4 weeks. I focus on rapid delivery without compromising core functionality."
        },
        {
            question: "What if I need changes after launch?",
            answer: "I offer a 30-day support window for any bugs or minor tweaks. For ongoing features, we can discuss a maintenance retainer or hourly updates."
        },
        {
            question: "Do you provide hosting setup?",
            answer: "Yes, I deploy everything for you on platforms like Vercel or Netlify and connect your custom domain. You'll get a turnkey solution ready to use."
        },
        {
            question: "Can these tools connect to my existing software?",
            answer: "Absolutely. I can integrate with APIs like Stripe, Airtable, Slack, or your existing databases to ensure seamless data flow."
        }
    ];

    return (
        <section id="faq" className="py-24 bg-black text-white px-6">
            <div className="max-w-3xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl font-bold mb-4">
                        Got <span className="text-purple-400">Questions?</span>
                    </h2>
                    <p className="text-gray-400">
                        Everything you need to know about the process.
                    </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            faq={faq}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
