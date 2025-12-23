import React, { useState, useEffect } from 'react';

const ScrollHint = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 4000); // Fade out after 4 seconds

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="md:hidden absolute bottom-4 right-4 z-20 pointer-events-none animate-bounce">
            <div className="glass px-4 py-2 rounded-full flex items-center gap-2 border border-white/20 shadow-lg bg-black/50 backdrop-blur-md">
                <span className="text-xs font-bold text-white tracking-wider uppercase">Swipe</span>
                <svg
                    className="w-4 h-4 text-pink animate-pulse"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </div>
        </div>
    );
};

export default ScrollHint;
