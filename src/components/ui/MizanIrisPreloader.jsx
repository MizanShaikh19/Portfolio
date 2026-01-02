import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * TechGrid - Renders a glowing background grid and rotating blueprints
 * Updated with Nano Banana colors (Purple/Pink/Orange)
 */
const TechGrid = () => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #ec4899 1px, transparent 1px), linear-gradient(to bottom, #ec4899 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(circle at 50% 50%, black 30%, transparent 80%)'
        }} />
        <motion.div
            className="absolute inset-0 border-[1px] border-pink-500/30 rounded-full"
            style={{ width: '150vh', height: '150vh', left: '50%', top: '50%', x: '-50%', y: '-50%' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
            className="absolute inset-0 border-[1px] border-orange-500/10 rounded-full scale-75"
            style={{ width: '150vh', height: '150vh', left: '50%', top: '50%', x: '-50%', y: '-50%' }}
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
    </div>
);

/**
 * ShardAssembly - Animates random shards flying into a central point
 */
const ShardAssembly = ({ phase }) => {
    const shardCount = 40;
    const colors = ['#ec4899', '#f97316', '#a855f7']; // Pink, Orange, Purple
    const shards = useMemo(() => Array.from({ length: shardCount }).map((_, i) => ({
        id: i,
        size: Math.random() * 8 + 2,
        initX: (Math.random() - 0.5) * 200 + "%",
        initY: (Math.random() - 0.5) * 200 + "%",
        color: colors[i % colors.length]
    })), []);

    return (
        <div className="absolute inset-0 pointer-events-none z-10">
            {shards.map((s) => (
                <motion.div
                    key={s.id}
                    className="absolute rounded-sm"
                    initial={{ x: s.initX, y: s.initY, opacity: 0, scale: 0 }}
                    animate={phase === 'expanding' ? { opacity: 0 } : {
                        x: "0%", y: "0%", opacity: [0, 1, 0], scale: [0, 1, 0.5],
                    }}
                    transition={{
                        duration: 1.5,
                        delay: Math.random() * 1,
                        ease: "circIn"
                    }}
                    style={{
                        left: '50%', top: '50%',
                        width: s.size + 'px', height: s.size + 'px',
                        background: s.color,
                        boxShadow: `0 0 10px ${s.color}`
                    }}
                />
            ))}
        </div>
    );
};

const MizanIrisPreloader = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [phase, setPhase] = useState('assembly'); // assembly -> scanning -> charge -> expanding

    useEffect(() => {
        const sequence = async () => {
            await new Promise(r => setTimeout(r, 2500)); // Shards assemble
            setPhase('scanning');
            await new Promise(r => setTimeout(r, 1500)); // Laser sweep
            setPhase('charge');
            await new Promise(r => setTimeout(r, 1000)); // Vibrate/Glow
            setPhase('expanding');
            await new Promise(r => setTimeout(r, 1500)); // Iris reveal
            setIsVisible(false);
        };
        sequence();
    }, []);

    if (!isVisible) return null;

    return (
        <motion.div
            className="fixed inset-0 z-[100000] bg-[#020202] flex items-center justify-center overflow-hidden select-none"
            animate={phase === 'expanding' ? {
                WebkitMaskImage: 'radial-gradient(circle at 50% 50%, transparent 150%, black 150%)',
                maskImage: 'radial-gradient(circle at 50% 50%, transparent 150%, black 150%)',
            } : {
                WebkitMaskImage: 'radial-gradient(circle at 50% 50%, transparent 0%, black 0%)',
                maskImage: 'radial-gradient(circle at 50% 50%, transparent 0%, black 0%)',
            }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
            style={{ willChange: 'mask-image, -webkit-mask-image' }}
        >
            <TechGrid />
            <ShardAssembly phase={phase} />

            <div className="relative z-20 flex flex-col items-center space-y-12">

                {/* 1. CYBER-CORE ICON */}
                <div className="relative">
                    <motion.div
                        animate={phase === 'charge' ? {
                            scale: [1, 1.05, 1],
                            x: [0, -1, 1, -1, 0],
                            filter: 'drop-shadow(0 0 30px #ec4899)'
                        } : {
                            filter: 'drop-shadow(0 0 15px #ec4899)'
                        }}
                        transition={phase === 'charge' ? { duration: 0.1, repeat: Infinity } : { duration: 1 }}
                        className="relative"
                    >
                        <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-pink-400">
                            {/* Outer Hexagon */}
                            <motion.path
                                d="M12 2l9 5v10l-9 5-9-5V7l9-5z"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                            />
                            {/* Inner Triangles */}
                            <motion.path
                                d="M12 22V12m0 0l9-5m-9 5l-9-5"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
                            />
                            {/* Core Circle */}
                            <motion.circle
                                cx="12" cy="12" r="3"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 2, type: "spring" }}
                                fill="currentColor"
                                className="text-pink-500 shadow-lg"
                            />
                        </svg>
                    </motion.div>

                    {/* Scanning Laser Sweep */}
                    <AnimatePresence>
                        {phase === 'scanning' && (
                            <motion.div
                                initial={{ x: '-150%', opacity: 0 }}
                                animate={{ x: '150%', opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                                className="absolute top-[-20%] bottom-[-20%] w-4 bg-gradient-to-r from-transparent via-pink-400 to-transparent blur-sm z-30"
                            />
                        )}
                    </AnimatePresence>
                </div>

                {/* 2. TEXT REVEAL */}
                <div className="flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, tracking: '1em' }}
                        animate={{ opacity: 1, tracking: '0.4em' }}
                        transition={{ duration: 2 }}
                        className="text-pink-300/60 text-xs uppercase font-mono mb-2"
                    >
                        Initializing System
                    </motion.div>

                    <div className="relative overflow-hidden px-4">
                        <motion.div
                            initial={{ y: '100%' }}
                            animate={{ y: '0%' }}
                            transition={{ duration: 0.8, delay: 1.5, ease: "circOut" }}
                            className="text-white text-5xl md:text-7xl font-black tracking-tighter italic uppercase"
                        >
                            <span className="bg-gradient-to-r from-pink-500 via-orange-500 to-purple-500 bg-clip-text text-transparent">MIZAN</span>
                        </motion.div>

                        {/* Sweeping Highlight on Text */}
                        <AnimatePresence>
                            {phase === 'scanning' && (
                                <motion.div
                                    initial={{ x: '-100%' }}
                                    animate={{ x: '100%' }}
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 z-10"
                                />
                            )}
                        </AnimatePresence>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                        transition={{ duration: 1, delay: 2.5 }}
                        className="text-gray-500 text-[10px] mt-4 font-mono uppercase tracking-widest"
                    >
                        Created by Mizan
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default MizanIrisPreloader;
