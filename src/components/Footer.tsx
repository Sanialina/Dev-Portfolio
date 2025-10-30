import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative py-12 mt-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 50% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)
          `
        }}
      />

      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            boxShadow: '0 0 20px rgba(34, 211, 238, 0.6), 0 0 40px rgba(34, 211, 238, 0.4)'
          }}
        />
      </div>

      <div
        className="absolute inset-0 backdrop-blur-sm"
        style={{
          background: 'rgba(15, 23, 42, 0.4)',
        }}
      />

      <motion.div
        className="absolute top-0 left-0 w-full h-[1px]"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.8), rgba(139, 92, 246, 0.8), rgba(6, 182, 212, 0.8), transparent)',
          boxShadow: '0 0 10px rgba(59, 130, 246, 0.5), 0 0 20px rgba(139, 92, 246, 0.3)'
        }}
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
          style={{
            background: 'rgba(30, 41, 59, 0.15)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(148, 163, 184, 0.1)',
            borderRadius: '24px',
            padding: '32px',
            boxShadow: `
              0 8px 32px rgba(0, 0, 0, 0.4),
              inset 0 1px 0 rgba(255, 255, 255, 0.05),
              0 0 60px rgba(59, 130, 246, 0.1),
              0 0 100px rgba(139, 92, 246, 0.05)
            `,
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.p
              className="text-sm font-mono relative inline-block"
              whileHover={{ scale: 1.05 }}
              style={{
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.9), rgba(139, 92, 246, 0.9))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
              }}
            >
              &copy; {new Date().getFullYear()} Sania Alina.
            </motion.p>
            <motion.p
              className="text-xs font-mono mt-1"
              style={{
                color: 'rgba(148, 163, 184, 0.8)',
                textShadow: '0 0 10px rgba(6, 182, 212, 0.2)',
              }}
              whileHover={{
                color: 'rgba(6, 182, 212, 0.9)',
                textShadow: '0 0 15px rgba(6, 182, 212, 0.5)',
              }}
            >
              All rights reserved.
            </motion.p>
          </motion.div>

          <div className="flex justify-center items-center relative">
            <motion.div
              className="absolute inset-0 rounded-full blur-2xl"
              style={{
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2), transparent)',
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{
                scale: 1.1,
                y: -5,
              }}
              className="font-orbitron text-3xl font-bold relative"
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.5)) drop-shadow(0 0 40px rgba(139, 92, 246, 0.3))',
              }}
            >
              SR.Dev
            </motion.div>
          </div>

          <motion.div
            className="flex justify-center md:justify-end space-x-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a
              href="https://github.com/Sanialina"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.2,
                rotate: -10,
                y: -8,
              }}
              whileTap={{ scale: 0.9 }}
              className="relative group"
              style={{
                filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.3))',
              }}
            >
              <motion.div
                className="absolute inset-0 rounded-full blur-xl"
                style={{
                  background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4), transparent)',
                }}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="relative"
                style={{ color: 'rgba(148, 163, 184, 0.9)' }}
                whileHover={{
                  color: '#3b82f6',
                  filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.8))',
                }}
              >
                <Github size={32} strokeWidth={1.5} />
              </motion.div>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/sania-alina-801245226/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.2,
                rotate: 10,
                y: -8,
              }}
              whileTap={{ scale: 0.9 }}
              className="relative group"
              style={{
                filter: 'drop-shadow(0 0 10px rgba(139, 92, 246, 0.3))',
              }}
            >
              <motion.div
                className="absolute inset-0 rounded-full blur-xl"
                style={{
                  background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4), transparent)',
                }}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="relative"
                style={{ color: 'rgba(148, 163, 184, 0.9)' }}
                whileHover={{
                  color: '#8b5cf6',
                  filter: 'drop-shadow(0 0 20px rgba(139, 92, 246, 0.8))',
                }}
              >
                <Linkedin size={32} strokeWidth={1.5} />
              </motion.div>
            </motion.a>

            <motion.a
              href="https://x.com/sanialina112"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.2,
                rotate: -10,
                y: -8,
              }}
              whileTap={{ scale: 0.9 }}
              className="relative group"
              style={{
                filter: 'drop-shadow(0 0 10px rgba(6, 182, 212, 0.3))',
              }}
            >
              <motion.div
                className="absolute inset-0 rounded-full blur-xl"
                style={{
                  background: 'radial-gradient(circle, rgba(6, 182, 212, 0.4), transparent)',
                }}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="relative"
                style={{ color: 'rgba(148, 163, 184, 0.9)' }}
                whileHover={{
                  color: '#06b6d4',
                  filter: 'drop-shadow(0 0 20px rgba(6, 182, 212, 0.8))',
                }}
              >
                <FaXTwitter size={32} />
              </motion.div>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            className="inline-block px-6 py-2 rounded-full font-mono text-xs"
            style={{
              background: 'rgba(30, 41, 59, 0.3)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(148, 163, 184, 0.1)',
              color: 'rgba(148, 163, 184, 0.7)',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 8px 24px rgba(59, 130, 246, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
            }}
          >
            Crafted with precision & innovation
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[100px] pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 w-[2px] h-[40px]"
            style={{
              left: `${i * 5}%`,
              background: `linear-gradient(to top,
                ${i % 3 === 0 ? 'rgba(59, 130, 246, 0.3)' : i % 3 === 1 ? 'rgba(139, 92, 246, 0.3)' : 'rgba(6, 182, 212, 0.3)'},
                transparent)`,
              boxShadow: `0 0 10px ${i % 3 === 0 ? 'rgba(59, 130, 246, 0.5)' : i % 3 === 1 ? 'rgba(139, 92, 246, 0.5)' : 'rgba(6, 182, 212, 0.5)'}`,
            }}
            animate={{
              height: ['20px', '60px', '20px'],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 2 + (i % 3),
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
