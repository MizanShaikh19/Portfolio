import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import { generateHSL, getCycleColors } from './utils'; // Replaced with fixed palette
import { createParticles } from './particlePhysics';

// --- THEME UTILS ---
const THEME_COLORS = [
    '#c084fc', // Purple-400
    '#f472b6', // Pink-400
    '#fb923c'  // Orange-400
];

const getThemeColor = (hue) => {
    // hue serves as a time-based index now
    const index = Math.floor(hue / 60) % THEME_COLORS.length;
    return THEME_COLORS[index];
};

const GridBackground = ({ mousePos }) => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* Base Gradient - Matches Hero #0a0a0a */}
            <div className="absolute inset-0 bg-[#0a0a0a]" />

            <div
                className="absolute inset-[-50%] w-[200%] h-[200%]"
                style={{
                    transform: `perspective(1000px) rotateX(60deg) translateY(-100px) translateZ(-200px)`,
                    transformOrigin: '50% 0%',
                }}
            >
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `linear-gradient(to right, #c084fc 1px, transparent 1px), linear-gradient(to bottom, #c084fc 1px, transparent 1px)`,
                        backgroundSize: '60px 60px',
                        maskImage: 'radial-gradient(circle at 50% 50%, black 30%, transparent 70%)',
                        opacity: 0.15,
                    }}
                />
            </div>
            <motion.div
                className="absolute inset-0"
                style={{ opacity: 0.1 }}
                initial={{ opacity: 0.1 }}
                animate={{
                    background: `radial-gradient(circle at ${50 + mousePos.x * 10}% ${50 + mousePos.y * 10}%, #f472b6, transparent 50%)`,
                    opacity: 0.1
                }}
                transition={{ duration: 0 }}
            />
        </div>
    );
};

const HexagonLogo = ({ phase, mousePos }) => {
    const tiltStyle = { rotateX: mousePos.y * 20, rotateY: mousePos.x * 20 };
    // Cycle through theme colors based on phase or time? Let's use Purple as base
    const color = '#c084fc';

    return (
        <motion.div
            className="relative z-50 w-[240px] h-[240px] flex items-center justify-center translate-z-0"
            style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
            animate={phase >= 4 ? {
                x: [0, -2, 2, -2, 0], y: [0, 2, -2, 2, 0],
                transition: { repeat: Infinity, duration: 0.1 }
            } : {}}
        >
            <motion.div
                className="w-full h-full flex items-center justify-center p-8"
                style={{ ...tiltStyle, transformStyle: 'preserve-3d' }}
                animate={{ rotateX: tiltStyle.rotateX, rotateY: tiltStyle.rotateY }}
                transition={{ type: 'spring', stiffness: 50, damping: 20 }}
            >
                <svg width="200" height="200" viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="overflow-visible" style={{ filter: `drop-shadow(0 0 10px ${color})` }}>
                    <motion.path
                        d="M25 6.7 L75 6.7 L100 50 L75 93.3 L25 93.3 L0 50 Z"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={phase >= 2 ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                    <motion.path d="M75 6.7 Q 60 40 50 50" initial={{ pathLength: 0 }} animate={phase >= 2 ? { pathLength: 1 } : { pathLength: 0 }} transition={{ duration: 1.2, delay: 0.5 }} stroke="#f472b6" />
                    <motion.path d="M25 93.3 Q 40 60 50 50" initial={{ pathLength: 0 }} animate={phase >= 2 ? { pathLength: 1 } : { pathLength: 0 }} transition={{ duration: 1.2, delay: 0.5 }} stroke="#fb923c" />
                    <motion.path d="M0 50 Q 25 50 50 50" initial={{ pathLength: 0 }} animate={phase >= 2 ? { pathLength: 1 } : { pathLength: 0 }} transition={{ duration: 1.2, delay: 0.5 }} stroke="#c084fc" />

                    <motion.circle cx="50" cy="50" r="6" fill={color} stroke="none" initial={{ scale: 0 }} animate={phase >= 2 ? { scale: [0, 1.2, 1], opacity: 1 } : { scale: 0 }} transition={{ delay: 1.5, duration: 0.5 }} />
                    {phase >= 4 && (
                        <motion.circle cx="50" cy="50" r="6" fill="none" stroke={color} strokeWidth="1" initial={{ scale: 1, opacity: 1 }} animate={{ scale: 4, opacity: 0 }} transition={{ duration: 1, repeat: Infinity }} />
                    )}
                </svg>
            </motion.div>
        </motion.div>
    );
};

const ParticleSystem = ({ width, height, phase }) => {
    const canvasRef = useRef(null);
    const particlesRef = useRef([]);

    useEffect(() => {
        if (!width || !height) return;
        // Use theme colors
        const colors = THEME_COLORS;
        particlesRef.current = createParticles(60, width, height, colors);
    }, [width, height]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationFrame;

        const render = () => {
            ctx.clearRect(0, 0, width, height);
            const force = phase === 1 ? 0.3 : (phase > 1 ? 0.8 : 0);

            particlesRef.current.forEach(p => {
                p.update(width, height, force);
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.shadowBlur = 10;
                ctx.shadowColor = p.color;
                ctx.fill();
            });

            if (phase < 5) animationFrame = requestAnimationFrame(render);
        };
        render();
        return () => cancelAnimationFrame(animationFrame);
    }, [width, height, phase]);

    return <canvas ref={canvasRef} width={width} height={height} className="absolute inset-0 pointer-events-none z-20" />;
};


const LaserScan = ({ phase }) => {
    return (
        <AnimatePresence>
            {phase === 3 && (
                <motion.div
                    className="absolute top-0 bottom-0 w-[4px] z-40 bg-white blur-md"
                    // Gradient matching Hero text
                    style={{ background: `linear-gradient(to bottom, transparent, #c084fc, #fb923c, transparent)` }}
                    initial={{ left: '-10%' }}
                    animate={{ left: '110%' }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.0, ease: "linear" }}
                />
            )}
        </AnimatePresence>
    );
};

const TypewriterText = ({ text }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, 50); // Speed: 50ms per char
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, text]);

    return (
        <span className="font-mono tracking-[0.2em] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            {displayedText}
            <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-[2px] h-[1em] bg-purple-400 ml-1 align-middle"
            />
        </span>
    );
};

// --- MAIN COMPONENT ---

const MizanIrisPreloader = ({ onComplete }) => {
    const [phase, setPhase] = useState(0);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        setDimensions({ width: window.innerWidth, height: window.innerHeight });
        const handleResize = () => setDimensions({ width: window.innerWidth, height: window.innerHeight });
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 2;
            const y = (e.clientY / window.innerHeight - 0.5) * 2;
            requestAnimationFrame(() => setMousePos({ x, y }));
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        const runSequence = async () => {
            // SYNCED TIMING: Total 7000ms

            // Phase 1: Intro (0s -> 1.5s)
            setPhase(1);
            await delay(1500);

            // Phase 2: Build (1.5s -> 3.0s)
            setPhase(2);
            await delay(1500);

            // Phase 3: Scan (3.0s -> 4.0s)
            setPhase(3);
            await delay(1000);

            // Phase 4: Charge (4.0s -> 5.0s)
            setPhase(4);
            await delay(1000);

            // Phase 5: Reveal (5.0s -> 7.0s)
            setPhase(5);
            await delay(2000); // 2000ms reveal

            if (onComplete) onComplete();
        };

        runSequence();
    }, [onComplete]);

    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    return (
        <motion.div
            ref={containerRef}
            className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#0a0a0a]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <GridBackground mousePos={mousePos} />
            <ParticleSystem width={dimensions.width} height={dimensions.height} phase={phase} />
            <LaserScan phase={phase} />

            {/* LOGO: Absolutely centered */}
            <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
                <HexagonLogo phase={phase} mousePos={mousePos} />
            </div>

            {/* TEXT: Positioned absolutely below */}
            <div className="absolute z-30 w-full flex flex-col items-center pointer-events-none top-[60%]">
                <AnimatePresence>
                    {phase >= 2 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="mt-8 text-sm md:text-base"
                        >
                            <TypewriterText text="INITIALIZING SYSTEM" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {phase === 5 && (
                <motion.div
                    className="absolute inset-0 bg-transparent z-[100]"
                    style={{
                        maskImage: 'radial-gradient(circle at center, transparent 0%, black 0%)',
                        WebkitMaskImage: 'radial-gradient(circle at center, transparent 0%, black 0%)'
                    }}
                    animate={{
                        maskImage: 'radial-gradient(circle at center, transparent 200%, black 200%)',
                        WebkitMaskImage: 'radial-gradient(circle at center, transparent 200%, black 200%)'
                    }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                />
            )}
        </motion.div>
    );
};

export default MizanIrisPreloader;
