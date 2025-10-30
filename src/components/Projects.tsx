'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import { RiRobot3Fill } from "react-icons/ri";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import './Projects.css';
import { Vortex } from './ui/vortex';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'CyferGuard → Autonomous Cyber Defense',
      description: 'Autonomous AI system that detects suspicious activity, prevents breaches, and protects user data in real time.',
      image: '/CyferGuard.jpg',
      tech: ['Next.js', 'Node.js', 'TypeScript', 'Tailwind', 'Agentic AI APIs'],
      github: 'https://github.com',
      live: 'https://example.com',
      color: 'neon-purple',
    },
    {
      id: 2,
      title: 'CareerNest → AI Career Navigator',
      description: 'AI-driven career coach that maps skill growth, recommends roles, and unlocks better opportunities.',
      image: '/CareerNest.jpg',
      tech: ['React', 'Next.js', 'Framer Motion', 'Agentic AI models'],
      github: 'https://github.com',
      live: 'https://example.com',
      color: 'neon-magenta',
    },
    {
      id: 3,
      title: 'InsightBoard → Agentic Analytics System',
      description: 'Smart analytics platform that delivers real-time insights and automated business decisions.',
      image: '/InsightBoard.jpg',
      tech: ['Next.js', 'WebSockets', 'APIs', 'Agentic AI workflow'],
      github: 'https://github.com',
      live: 'https://example.com',
      color: 'neon-cyan',
    },
    {
      id: 4,
      title: 'CrunchTime → Autonomous Meal Assistant',
      description: 'Smart food assistant that plans meals and tracks nutrition.',
      image: '/CrunchTime.jpeg',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'Intelligent AI Agents'],
      github: 'https://github.com',
      live: 'https://example.com',
      color: 'neon-purple',
    },
    {
      id: 5,
      title: 'StyleMe → Adaptive Styling Assistant',
      description: 'AI wardrobe expert that recommends outfits tailored to personal style and changing trends.',
      image: '/StyleMe.jpeg',
      tech: ['React', 'Tailwind', 'Vision AI models', 'Autonomous task agents'],
      github: 'https://github.com',
      live: 'https://example.com',
      color: 'neon-magenta',
    },
    {
      id: 6,
      title: 'Triporica → Autonomous Trip Planner',
      description: 'Autonomous travel planner that builds smart itineraries and adjusts plans based on user needs.',
      image: '/Triporica.jpg',
      tech: ['Next.js', 'Server Actions', 'Maps API', 'Agentic AI decision systems'],
      github: 'https://github.com',
      live: 'https://example.com',
      color: 'neon-cyan',
    },
  ];

  return (
    <Vortex backgroundColor="black" containerClassName="min-h-screen w-full py-20 px-4 sm:px-6 lg:px-8">
      <section id="projects" className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="projects-heading text-4xl sm:text-5xl font-orbitron font-bold gradient-text mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collection of innovative projects showcasing cutting-edge technologies and creative solutions
          </p>
        </motion.div>

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="w-full h-full"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={project.id} className="w-[300px] h-[480px] sm:w-[400px] sm:h-[550px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1, type: 'spring', stiffness: 100 }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                  boxShadow: '0 0 30px rgba(168, 85, 247, 0.8)',
                }}
                className="floating-panel group perspective-1000 cursor-pointer h-full"
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"                  />
                  <div className={`absolute top-2 right-2 w-3 h-3 rounded-full bg-${project.color} animate-pulse`} />
                </div>
                <h3 className="text-xl font-orbitron font-bold mb-2 text-white">
                  {project.title.split('→')[0]}
                  {project.title.split('→')[1] && (
                    <span className="block text-lg text-gray-400">→{project.title.split('→')[1]}</span>
                  )}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev slider-arrow"></div>
          <div className="swiper-button-next slider-arrow"></div>
          <div className="swiper-pagination"></div>
        </Swiper>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="floating-panel max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const project = projects.find((p) => p.id === selectedProject);
                  if (!project) return null;
                  return (
                    <>
                      <div className="flex justify-between items-start mb-6">
                        <h3 className="text-2xl font-orbitron font-bold gradient-text">{project.title}</h3>
                        <button
                          onClick={() => setSelectedProject(null)}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          <X size={24} />
                        </button>
                      </div>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover rounded-lg mb-6"
                      />
                      <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full border border-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center space-x-4">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center space-x-2 neon-border px-4 py-2 rounded-lg hover:bg-neon-purple/10 transition-all"
                        >
                          <RiRobot3Fill size={20} />
                          <span>Unveil</span>
                        </motion.a>
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center space-x-2 bg-gradient-to-r from-neon-purple to-neon-magenta px-4 py-2 rounded-lg text-white hover:shadow-lg transition-all"
                        >
                          <ExternalLink size={20} />
                          <span>Live Demo</span>
                        </motion.a>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </Vortex>
  );
};

export default Projects;