import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

/**
 * FloatingParticles - Memoized for performance to prevent re-renders
 */
const FloatingParticles = React.memo(({ phase }) => {
    const particleCount = 20; // Reduced for performance balance
    const colors = ['#818cf8', '#c084fc', '#fb7185', '#38bdf8', '#f472b6'];

    const particles = useMemo(() => Array.from({ length: particleCount }).map((_, i) => ({
        id: i,
        size: Math.random() * 12 + 6,
        x: Math.random() * 100 + "%",
        duration: Math.random() * 6 + 4,
        delay: Math.random() * 5,
        color: colors[i % colors.length]
    })), []);

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full"
                    initial={{ x: p.x, y: "110%", opacity: 0 }}
                    animate={{
                        y: ["110%", "-10%"],
                        opacity: phase === 'expanding' ? 0 : [0, 0.4, 0.4, 0],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: p.delay,
                    }}
                    style={{
                        background: `radial-gradient(circle, ${p.color}, transparent)`,
                        width: p.size + 'px',
                        height: p.size + 'px',
                        filter: 'blur(2px)',
                        willChange: 'transform, opacity'
                    }}
                />
            ))}
        </div>
    );
});

const MizanIrisPreloader = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [phase, setPhase] = useState('entering');

    useEffect(() => {
        const sequence = async () => {
            await new Promise(r => setTimeout(r, 1800)); // Entrance
            setPhase('waiting');
            await new Promise(r => setTimeout(r, 1000)); // Read
            setPhase('fadeout');
            await new Promise(r => setTimeout(r, 500));  // Disappear text
            setPhase('falling');
            await new Promise(r => setTimeout(r, 800));  // Gravity fall
            setPhase('expanding');
            await new Promise(r => setTimeout(r, 1200)); // Iris open
            setIsVisible(false);
        };
        sequence();
    }, []);

    if (!isVisible) return null;

    const line1 = "Created by";
    const line2M = "M";
    const line2zan = "zan";

    return (
        <motion.div
            className="fixed inset-0 z-[100000] bg-[#020202] flex items-center justify-center overflow-hidden select-none"
            style={{
                perspective: '1200px',
                willChange: 'mask-image, -webkit-mask-image'
            }}
            animate={phase === 'expanding' ? {
                WebkitMaskImage: 'radial-gradient(circle at 50% 50%, transparent 100%, black 100%)',
                maskImage: 'radial-gradient(circle at 50% 50%, transparent 100%, black 100%)',
            } : {
                WebkitMaskImage: 'radial-gradient(circle at 50% 50%, transparent 0%, black 0%)',
                maskImage: 'radial-gradient(circle at 50% 50%, transparent 0%, black 0%)',
            }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
        >
            {/* Background Layer */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[#020202]" />
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,_#1e1b4b_0%,_transparent_100%)]" />
                <FloatingParticles phase={phase} />
            </div>

            {/* Content Layer */}
            <div className="relative z-10 flex flex-col items-center justify-center text-white font-bold text-4xl md:text-7xl tracking-tighter space-y-4">
                <div className="flex items-center" style={{ transformStyle: 'preserve-3d' }}>
                    {line1.split("").map((char, i) => (
                        <motion.span
                            key={`l1-${i}`}
                            initial={{ opacity: 0, rotateX: -60, scale: 0.8, y: -20 }}
                            animate={phase === 'fadeout' || phase === 'falling' || phase === 'expanding'
                                ? { opacity: 0, scale: 0.9, transition: { duration: 0.4 } }
                                : { opacity: 1, rotateX: 0, scale: 1, y: 0 }
                            }
                            transition={{ duration: 0.8, delay: i * 0.04 }}
                            className="inline-block whitespace-pre drop-shadow-lg"
                        >
                            {char}
                        </motion.span>
                    ))}
                </div>

                <div className="flex items-center relative" style={{ transformStyle: 'preserve-3d' }}>
                    <motion.span
                        initial={{ opacity: 0, rotateX: -60, scale: 0.8, y: -20 }}
                        animate={phase === 'fadeout' || phase === 'falling' || phase === 'expanding'
                            ? { opacity: 0 }
                            : { opacity: 1, rotateX: 0, scale: 1, y: 0 }
                        }
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="inline-block"
                    >
                        {line2M}
                    </motion.span>

                    <div className="relative flex items-center justify-center mx-[0.1em] min-w-[0.35em] h-[1em]">
                        <motion.span
                            initial={{ opacity: 0, scale: 0 }}
                            animate={
                                phase === 'falling' ? { y: '50vh', opacity: 1, scale: 1.2 } :
                                    phase === 'expanding' ? { scale: 0, opacity: 0 } :
                                        { opacity: 1, scale: 1, y: 0 }
                            }
                            transition={{
                                duration: phase === 'falling' ? 0.8 : 0.6,
                                delay: phase === 'falling' ? 0 : 0.7,
                                ease: phase === 'falling' ? [0.6, 0.01, 0.5, 1] : "easeOut"
                            }}
                            className="absolute top-[0.12em] w-[0.15em] h-[0.15em] bg-white rounded-full z-20 shadow-[0_0_20px_#a855f7]"
                            style={{ willChange: 'transform' }}
                        />
                        <motion.span
                            initial={{ opacity: 0, y: -10 }}
                            animate={phase === 'fadeout' || phase === 'falling' || phase === 'expanding'
                                ? { opacity: 0 }
                                : { opacity: 1, y: 0 }
                            }
                            transition={{ duration: 0.8, delay: 0.7 }}
                            className="absolute bottom-0 h-[0.62em] w-[0.13em] bg-white rounded-sm"
                        />
                    </div>

                    {line2zan.split("").map((char, i) => (
                        <motion.span
                            key={`l2-${i}`}
                            initial={{ opacity: 0, rotateX: -60, scale: 0.8, y: -20 }}
                            animate={phase === 'fadeout' || phase === 'falling' || phase === 'expanding'
                                ? { opacity: 0 }
                                : { opacity: 1, rotateX: 0, scale: 1, y: 0 }
                            }
                            transition={{ duration: 0.8, delay: 0.8 + (i * 0.04) }}
                            className="inline-block"
                        >
                            {char}
                        </motion.span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default MizanIrisPreloader;
