import React, { useState } from 'react';
import MeshBackground from './MeshBackground';

const FAQItem = ({ faq, isOpen, onClick }) => {
    return (
        <div className={`glass-strong rounded-2xl border-2 transition-all duration-500 overflow-hidden ${isOpen ? 'border-pink/40 shadow-xl shadow-pink/5' : 'border-transparent hover:border-purple/20'}`}
            style={{
                background: 'linear-gradient(black, black) padding-box, linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1), rgba(249, 115, 22, 0.1)) border-box'
            }}>
            <button
                className="w-full p-6 text-left flex justify-between items-center gap-4"
                onClick={onClick}
            >
                <span className={`text-lg font-bold transition-all duration-300 ${isOpen ? 'gradient-text' : 'text-white'}`}>
                    {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-pink text-white rotate-180' : 'bg-white/5 text-gray-400'}`}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </button>

            <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-6 pt-0 text-gray-400 font-light leading-relaxed border-t border-white/5 mt-4">
                    {faq.answer}
                </div>
            </div>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "How long does it take?",
            answer: "Depending on the package, delivery takes between 3 to 7 days. Starter sites take 3 days, Business sites take 5 days, and Premium packages take up to 7 days."
        },
        {
            question: "What if I need changes after launch?",
            answer: "I offer free minor updates for the first 30 days. After that, I'm available for maintenance and updates at a flat rate of $50/hour."
        },
        {
            question: "Do you provide hosting?",
            answer: "Yes, free high-speed hosting is included for the first year with the Business and Premium packages. After that, it's just $10/month, or I can help you migrate to your own provider."
        },
        {
            question: "Can I update the site myself?",
            answer: "I build with modern developer tools for maximum performance. For easy content updates (blogs, galleries), I can integrate a simple CMS for an additional $200."
        },
        {
            question: "What if I don't like the design?",
            answer: "Your satisfaction is my priority. Every package includes 1-3 rounds of revisions. If you're still not happy with the direction, I offer a full refund within the first 7 days of the project."
        },
        {
            question: "Do you write the content?",
            answer: "Typically, you provide the text about your business. However, I can help polish your copy or recommend a professional copywriter if you're starting from scratch."
        },
        {
            question: "What about SEO?",
            answer: "Basic SEO (meta tags, fast loading speeds, mobile-friendly structure) is built into every site. Advanced SEO strategies and keyword ranking are available as a separate service."
        },
        {
            question: "Can you add e-commerce?",
            answer: "Absolutely! The Premium package includes basic shopping cart functionality. For full-scale e-commerce stores with hundreds of products, custom pricing starts at $2,500."
        }
    ];

    return (
        <section id="faq" className="relative py-16 md:py-24 px-6 bg-black">
            <MeshBackground className="py-12 md:py-20">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-20 text-center">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                            Got <span className="gradient-text">Questions?</span>
                        </h2>
                        <p className="text-gray-dark text-xl font-light leading-relaxed">
                            Clear answers to common questions about working with me.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <FAQItem
                                key={index}
                                faq={faq}
                                isOpen={openIndex === index}
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                            />
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <p className="text-gray-500 mb-8">Don't see your question here?</p>
                        <button
                            className="text-white font-bold uppercase tracking-widest text-xs border-b-2 border-pink/50 pb-2 hover:text-pink transition-all duration-300"
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Ask Me Anything
                        </button>
                    </div>
                </div>
            </MeshBackground>
        </section>
    );
};

export default FAQ;
