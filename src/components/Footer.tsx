import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative py-8 mt-20" style={{ backgroundImage: `linear-gradient(to right, #FF00FF, #00FFFF, #FFFF00, #FF007F), linear-gradient(to bottom, #FF00FF, #8A2BE2, #00FFFF, #FF007F)`, backgroundSize: '200% 200%', animation: 'iridescent-shift 15s ease infinite alternate', filter: 'hue-rotate(0deg)' }}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-300 font-mono">
              &copy; {new Date().getFullYear()} Sania Alina.
            </p>
            <p className="text-xs text-gray-400 font-mono">
              All rights reserved.
            </p>
          </div>

          <div className="flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-orbitron text-2xl font-bold text-white"
            >
              SR.Dev
            </motion.div>
          </div>

          <div className="flex justify-center md:justify-end space-x-6">
            <motion.a
              href="https://github.com/Sanialina"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -10, color: "#fff" }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Github size={28} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/sania-alina-801245226/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 10, color: "#fff" }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Linkedin size={28} />
            </motion.a>
            <motion.a
              href="https://x.com/sanialina112"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -10, color: "#fff" }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-300 hover:text-white transition-colors"
            >
              <FaXTwitter size={28} />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;