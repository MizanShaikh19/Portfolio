import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers, Database, Globe } from 'lucide-react';
import SpotlightCard from './ui/SpotlightCard';

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';

// Custom CSS for Swiper Pagination to match theme
import '../index.css';
import { projectsData } from '../constants/data';

const ProjectCard = ({ project }) => {
    return (
        <SpotlightCard className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-500 h-full flex flex-col min-h-[400px] gpu-accelerated backface-hidden preserve-3d">
            <div className="p-6 md:p-8 flex flex-col flex-grow relative z-10 preserve-3d">
                <div className="flex justify-between items-start mb-4">
                    <div className="p-2.5 bg-white/5 rounded-xl group-hover:bg-purple-500/20 transition-colors gpu-accelerated">
                        <Layers className="w-5 h-5 text-purple-400" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-white/5 border border-white/10 text-gray-400 group-hover:border-purple-500/30 group-hover:text-purple-300 transition-all backface-hidden">
                        {project.type}
                    </span>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all backface-hidden">
                    {project.name}
                </h3>

                <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow backface-hidden">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tag, i) => (
                        <span key={i} className="px-2 py-0.5 text-[10px] font-medium text-gray-400 bg-black/40 rounded-md border border-white/5 backface-hidden">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5 preserve-3d">
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs font-bold text-white hover:text-purple-400 transition-colors z-20 backface-hidden"
                    >
                        <Globe className="w-3.5 h-3.5" />
                        Live Demo
                    </a>
                    <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-white transition-colors ml-auto z-20 backface-hidden"
                    >
                        <Github className="w-3.5 h-3.5" />
                        Code
                    </a>
                </div>
            </div>
        </SpotlightCard>
    );
};

const Projects = () => {
    const projects = projectsData;

    return (
        <section id="projects" className="py-24 bg-black text-white relative overflow-hidden preserve-3d">
            {/* Background glow */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-pink-900/20 rounded-full blur-[100px] pointer-events-none gpu-accelerated" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                            Practical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Applications</span>
                        </h2>
                        <p className="text-gray-400 text-xl max-w-2xl mx-auto font-light leading-relaxed">
                            I build internal business tools — bookings, dashboards, and client systems — the kind of premium solutions businesses actually use to scale.
                        </p>
                    </motion.div>
                </div>

                <div className="relative w-full overflow-visible preserve-3d">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        grabCursor={true}
                        centeredSlides={false}
                        loop={true}
                        spaceBetween={30}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        pagination={{ clickable: true }}
                        className="mySwiper !pb-14 !px-4"
                    >
                        {projects.map((project, index) => (
                            <SwiperSlide key={index} className="h-auto gpu-accelerated">
                                <ProjectCard project={project} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Projects;
