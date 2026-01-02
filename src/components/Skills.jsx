import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Server, Boxes, LineChart } from 'lucide-react';
import SpotlightCard from './ui/SpotlightCard';

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/effect-coverflow';

import { skillsData } from '../constants/data';

const Skills = () => {
    const techStack = skillsData;

    const SkillCard = ({ tech }) => (
        <SpotlightCard className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full">
            <div className="relative z-10">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <tech.icon className="w-6 h-6 text-purple-400 group-hover:text-pink-400 transition-colors" />
                </div>

                <h3 className="text-xl font-bold mb-3">{tech.title}</h3>
                <p className="text-gray-400 text-sm mb-6 min-h-[40px]">{tech.description}</p>

                <div className="flex flex-wrap gap-2">
                    {tech.skills.map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-black/40 border border-white/10 rounded-full text-xs font-medium text-gray-300 group-hover:border-purple-500/30 transition-colors">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </SpotlightCard>
    );

    return (
        <section id="skills" className="py-24 bg-black text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(139,92,246,0.1),transparent_70%)]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Toolbox</span>
                    </motion.h2>
                    <motion.p
                        className="text-gray-400 text-xl max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        A comprehensive suite of modern technologies I use to bring ideas to life.
                    </motion.p>
                </div>

                {/* Desktop Grid */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {techStack.map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="hover:z-50 relative"
                        >
                            <SkillCard tech={tech} />
                        </motion.div>
                    ))}
                </div>

                {/* Mobile Swiper */}
                <div className="md:hidden">
                    <Swiper
                        modules={[FreeMode, Autoplay, EffectCoverflow]}
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={1.5}
                        loop={true}
                        coverflowEffect={{
                            rotate: 35,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        className="pb-12"
                    >
                        {techStack.map((tech, index) => (
                            <SwiperSlide key={index} className="h-auto">
                                <SkillCard tech={tech} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Skills;
