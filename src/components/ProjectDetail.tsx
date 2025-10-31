import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import projectsData from '../data/projects.json';
import Navbar from './Navbar';
import Footer from './Footer';

interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  fullDescription: string;
  techStack: Array<{ name: string; icon: string }>;
  features: string[];
  audience: string;
  uniqueValue: string;
  imageUrls: string[];
  liveUrl: string;
  githubUrl: string;
}

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<ProjectData | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const found = projectsData.find((p) => p.id === projectId) as ProjectData | undefined;
    setProject(found || null);
    setLoading(false);
  }, [projectId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="w-12 h-12 border-2 border-cyan-400 border-t-purple-400 rounded-full"
        />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-orbitron font-bold mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />

      <main className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-black to-slate-950" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.button
            onClick={() => navigate('/#projects')}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ x: -5 }}
            className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-mono text-sm">Back to Projects</span>
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div
              className="rounded-2xl p-8 sm:p-12 mb-8"
              style={{
                background: 'rgba(30, 41, 59, 0.15)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(148, 163, 184, 0.1)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
              }}
            >
              <motion.h1
                className="text-4xl sm:text-5xl font-orbitron font-bold mb-4"
                style={{
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {project.title}
              </motion.h1>
              <p className="text-xl text-gray-300 mb-2">{project.subtitle}</p>
              <p className="text-gray-400">{project.fullDescription}</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div
                className="rounded-2xl p-8 mb-8"
                style={{
                  background: 'rgba(30, 41, 59, 0.15)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(148, 163, 184, 0.1)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                }}
              >
                <h2 className="text-2xl font-orbitron font-bold mb-6 text-cyan-400">Key Features</h2>
                <ul className="space-y-4">
                  {project.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + idx * 0.05 }}
                      className="flex items-start space-x-3 text-gray-300"
                    >
                      <span className="text-cyan-400 mt-1">✓</span>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div
                className="rounded-2xl p-8 mb-8"
                style={{
                  background: 'rgba(30, 41, 59, 0.15)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(148, 163, 184, 0.1)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                }}
              >
                <h2 className="text-2xl font-orbitron font-bold mb-6 text-purple-400">What Makes It Unique</h2>
                <p className="text-gray-300 leading-relaxed">{project.uniqueValue}</p>
              </div>

              {project.imageUrls.length > 0 && (
                <div
                  className="rounded-2xl p-8"
                  style={{
                    background: 'rgba(30, 41, 59, 0.15)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(148, 163, 184, 0.1)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                  }}
                >
                  <h2 className="text-2xl font-orbitron font-bold mb-6 text-cyan-400">Gallery</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.imageUrls.map((image, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        className="cursor-pointer rounded-lg overflow-hidden group"
                        onClick={() => setSelectedImage(image)}
                      >
                        <img
                          src={image}
                          alt={`${project.title} gallery ${idx + 1}`}
                          loading="lazy"
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div
                className="rounded-2xl p-8"
                style={{
                  background: 'rgba(30, 41, 59, 0.15)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(148, 163, 184, 0.1)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                }}
              >
                <h2 className="text-2xl font-orbitron font-bold mb-6 text-cyan-400">Tech Stack</h2>
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="px-4 py-2 rounded-full border border-cyan-400/30 hover:border-cyan-400 bg-cyan-400/10 text-cyan-300 text-sm font-mono transition-colors cursor-default flex items-center space-x-1"
                    >
                      <span>{tech.icon}</span>
                      <span>{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div
                className="rounded-2xl p-8"
                style={{
                  background: 'rgba(30, 41, 59, 0.15)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(148, 163, 184, 0.1)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                }}
              >
                <h2 className="text-2xl font-orbitron font-bold mb-6 text-purple-400">Target Audience</h2>
                <p className="text-gray-300">{project.audience}</p>
              </div>

              <div className="space-y-3">
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold transition-all hover:shadow-lg hover:shadow-cyan-400/50"
                >
                  <ExternalLink size={20} />
                  <span>View Live Demo</span>
                </motion.a>
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-lg border border-gray-600 text-gray-300 font-semibold hover:border-cyan-400 hover:text-cyan-400 transition-colors"
                >
                  <Github size={20} />
                  <span>View GitHub</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Project gallery full view"
                className="w-full h-full object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white transition-colors"
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
