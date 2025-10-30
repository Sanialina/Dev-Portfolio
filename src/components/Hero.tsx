import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import ParticleField from "./ParticleField";
import { GooeyText } from "../components/ui/gooey-text-morphing"; // adjust the path if needed



const Hero = () => {



  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ✅ Background ParticleField */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} color="#a855f7" intensity={0.5} />
          <pointLight position={[-10, -10, -10]} color="#ec4899" intensity={0.3} />
          <ParticleField />
        </Canvas>
      </div>

      {/* ✅ Foreground layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* ✅ Left side: Text */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-orbitron font-black mb-6"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="flex items-center justify-center md:justify-start">
              <img src="/sania.jpg" alt="Sania" className="h-24 sm:h-30 lg:h-36 mr-2" />
              <img src="/Rasheed.png" alt="Rasheed" className="h-24 sm:h-30 lg:h-36" />
            </div>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl lg:text-3xl font-mono mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <span className="neon-text font-orbitron">
<GooeyText
  texts={["Full Stack Developer", "AI Engineer", "Creative Technologist"]}
  morphTime={1}
  cooldownTime={1}
  className="font-bold"
  textClassName="text-lg sm:text-xl md:text-2xl lg:text-3xl"
/>

            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="space-y-6"
          >
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg font-semibold text-white font-mono leading-relaxed"
            >
              <span className="neon-text text-xl sm:text-2xl lg:text-xl">Agentic AI + Full-Stack Mastery + Premium UI/UX</span> <br />
              I Build Smart Digital Products that make Decisions, Solve Problems, and get things done while Users Enjoy the Magic.
            </motion.p>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="neon-border px-8 py-4 rounded-full font-orbitron font-bold text-lg hover:bg-neon-purple/10 transition-all duration-300"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore My Work
            </motion.button>
          </motion.div>
        </motion.div>

   
        {/* ✅ Right side: Live 3D object + Spotlight effect */}
<div className="w-full md:w-1/3 h-[500px] md:h-[500px] relative flex items-center justify-center">
  {/* Glow effect behind the robot */}


  <div className="relative z-10 w-full h-full">
    <video
      src="/Hero-Robot.mp4"
      autoPlay
      loop
      muted
      className="rounded-xl w-full h-full object-contain"
    />
  </div>
</div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-neon-purple cursor-pointer"
          onClick={() =>
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <ArrowDown size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
