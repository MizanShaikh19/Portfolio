import React from 'react';

const GradientBackground = ({ children, variant = 'full', className = '' }) => {
    return (
        <div className={`relative overflow-hidden ${className}`}>
            {/* Main Gradient Background with Layered Stripes */}
            <div className="absolute inset-0 bg-black">
                {/* Base gradient layer */}
                <div
                    className="absolute inset-0 opacity-80"
                    style={{
                        background: 'linear-gradient(90deg, #8B5CF6 0%, #EC4899 40%, #F97316 80%, #FDE68A 100%)'
                    }}
                />

                {/* Layered vertical stripe effect - matching the screenshot */}
                <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute top-0 bottom-0 opacity-30"
                            style={{
                                left: `${i * 5}%`,
                                width: '10%',
                                background: i % 3 === 0
                                    ? 'linear-gradient(180deg, rgba(139, 92, 246, 0.4) 0%, transparent 50%, rgba(139, 92, 246, 0.2) 100%)'
                                    : i % 3 === 1
                                        ? 'linear-gradient(180deg, rgba(236, 72, 153, 0.4) 0%, transparent 50%, rgba(236, 72, 153, 0.2) 100%)'
                                        : 'linear-gradient(180deg, rgba(249, 115, 22, 0.4) 0%, transparent 50%, rgba(249, 115, 22, 0.2) 100%)',
                                filter: 'blur(40px)',
                            }}
                        />
                    ))}
                </div>

                {/* Soft overlay for depth */}
                <div
                    className="absolute inset-0 opacity-60"
                    style={{
                        background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.3) 100%)'
                    }}
                />

                {/* Bottom fade to black for seamless transitions */}
                {variant === 'hero' && (
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />
                )}
            </div>

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default GradientBackground;
