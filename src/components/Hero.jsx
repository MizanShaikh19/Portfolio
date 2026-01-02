import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';

const ParticlesBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        let particles = [];
        const particleCount = 100;
        const mouse = { x: null, y: null, radius: 150 };

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        };

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;
                this.baseX = this.x;
                this.baseY = this.y;
                this.density = (Math.random() * 30) + 1;
            }

            draw() {
                ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }

            update() {
                // Drift
                this.x += this.speedX;
                this.y += this.speedY;

                // Screen Wrap
                if (this.x > canvas.width) this.x = 0;
                else if (this.x < 0) this.x = canvas.width;
                if (this.y > canvas.height) this.y = 0;
                else if (this.y < 0) this.y = canvas.height;

                // Mouse Interaction
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                let forceDirectionX = dx / distance;
                let forceDirectionY = dy / distance;
                let maxDistance = mouse.radius;
                let force = (maxDistance - distance) / maxDistance;
                let directionX = forceDirectionX * force * this.density;
                let directionY = forceDirectionY * force * this.density;

                if (distance < mouse.radius) {
                    this.x -= directionX;
                    this.y -= directionY;
                }
            }
        }

        const init = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particles.length; i++) {
                particles[i].draw();
                particles[i].update();
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        });

        resize();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 pointer-events-none opacity-40"
        />
    );
};

const Hero = () => {
    const [text1, setText1] = React.useState('');
    const [text2, setText2] = React.useState('');
    const [isFinished1, setIsFinished1] = React.useState(false);
    const [showCursor, setShowCursor] = React.useState(true);

    const fullText1 = "Crafting Code.";
    const fullText2 = "Unlocking Insights.";

    React.useEffect(() => {
        // Delay starting the typewriter to account for the Preloader
        const startTimeout = setTimeout(() => {
            let i = 0;
            const timer1 = setInterval(() => {
                setText1(fullText1.slice(0, i + 1));
                i++;
                if (i === fullText1.length) {
                    clearInterval(timer1);
                    setTimeout(() => setIsFinished1(true), 500);
                }
            }, 100);
            return () => clearInterval(timer1);
        }, 2800); // Wait for preloader (2.5s) + a small buffer

        return () => clearTimeout(startTimeout);
    }, []);

    React.useEffect(() => {
        if (isFinished1) {
            let i = 0;
            const timer2 = setInterval(() => {
                setText2(fullText2.slice(0, i + 1));
                i++;
                if (i === fullText2.length) {
                    clearInterval(timer2);
                }
            }, 100);
            return () => clearInterval(timer2);
        }
    }, [isFinished1]);

    return (
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0a0a0a] text-white font-sans">
            {/* Aurora Background Effect */}
            <div className="absolute inset-0 z-0 aurora-bg opacity-30" />
            <div className="absolute inset-0 z-0 aurora-mesh" />

            <ParticlesBackground />

            {/* Subtle Noise Texture Overlay */}
            <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            {/* Gradient Overlay for depth */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-transparent to-black pointer-events-none" />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-20">
                <div className="max-w-4xl">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 tracking-tight min-h-[160px] md:min-h-[200px]">
                        <div className="mb-4">
                            <span className="font-mono text-white opacity-90">
                                {text1}
                            </span>
                            {!isFinished1 && (
                                <span className="inline-block w-[4px] h-[0.8em] bg-purple-500 ml-2 animate-blink transform translate-y-2" />
                            )}
                        </div>
                        <div className="min-h-[1.2em]">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 animate-gradient-x bg-300">
                                {text2}
                            </span>
                            {isFinished1 && text2.length < fullText2.length + 1 && (
                                <span className="inline-block w-[4px] h-[0.8em] bg-orange-500 ml-2 animate-blink transform translate-y-2" />
                            )}
                        </div>
                    </h1>

                    <motion.p
                        className="text-lg md:text-xl text-gray-400 mb-12 max-w-xl leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 3.3 }}
                    >
                        Bridging the gap between powerful web applications and actionable data intelligence to drive business growth.
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap gap-6 mb-32"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 3.5 }}
                    >
                        <button
                            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                            className="group px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-bold transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] flex items-center gap-2 active:scale-95"
                        >
                            View Projects
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <button
                            onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-bold transition-all flex items-center gap-2 backdrop-blur-sm active:scale-95"
                        >
                            <Sparkles className="w-4 h-4 text-purple-400" />
                            Technical Stack
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
