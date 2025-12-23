import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 z-40 p-3 rounded-full glass border border-white/20 text-white shadow-lg shadow-purple/20 transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-purple hover:to-pink ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
            aria-label="Back to Top"
        >
            <ArrowUp className="w-6 h-6" />
        </button>
    );
};

export default BackToTop;
