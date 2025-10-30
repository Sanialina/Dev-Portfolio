import { motion } from 'framer-motion';
import { Code, Brain, Zap, Palette, Database, Globe } from 'lucide-react';
import { Vortex } from '../components/ui/vortex';

const About = () => {
  const techStacks = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Frontend",
      techs: ["React", "TypeScript", "Tailwind CSS", "Three.js"],
      color: "neon-purple"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend",
      techs: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
      color: "neon-magenta"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & ML",
      techs: ["Agentic AI", "PyTorch", "OpenAI API", "Langchain"],
      color: "neon-cyan"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "DevOps",
      techs: ["Docker", "AWS", "CI/CD", "Kubernetes"],
      color: "neon-purple"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Tools",
      techs: ["Git", "VS Code", "Figma", "Postman"],
      color: "neon-magenta"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design",
      techs: ["UI/UX", "Responsive", "Animations", "WebGL"],
      color: "neon-cyan"
    }
  ];

  return (
  <Vortex backgroundColor="black" containerClassName="min-h-screen w-full py-20 px-4 sm:px-6 lg:px-8">
  <section id="about" className="relative z-10 max-w-7xl mx-auto">

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-orbitron font-bold gradient-text mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
           I&apos;m a passionate full-stack developer fusing Python, Java, React, and the power of agentic AI
            to craft cutting-edge, intelligent digital solutions. From dynamic web apps to autonomous 
            AI-driven systems, I love building what&apos;s next
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStacks.map((stack, index) => (
            <motion.div
  key={stack.title}
  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
  transition={{ duration: 0.8, delay: index * 0.1, type: "spring", stiffness: 100 }}
  whileHover={{ 
    scale: 1.05,
    rotateY: 5,
    rotateX: 5,
    boxShadow: "0 0 30px rgba(168, 85, 247, 0.8)"
  }}
  className="floating-panel group perspective-1000"
>

              <div className={`text-${stack.color} mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                {stack.icon}
              </div>
              
              <h3 className="text-xl font-orbitron font-bold mb-4 text-white">
                {stack.title}
              </h3>
              
              <div className="space-y-2">
                {stack.techs.map((tech, techIndex) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index * 0.1) + (techIndex * 0.05) }}
                    className="flex items-center space-x-2"
                  >
                    <div className={`w-2 h-2 rounded-full bg-${stack.color}`}></div>
                    <span className="text-gray-300">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="floating-panel max-w-4xl mx-auto">
            <h3 className="text-2xl font-orbitron font-bold gradient-text mb-6">
              My Journey
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Starting as a curious developer drawn to the creative magic of technology, 
              I&apos;ve grown into a full-stack engineer blending modern web engineering with emerging AI capabilities.
               I specialize in crafting immersive, interactive applications using cutting-edge tools like React, TypeScript,
                and Three.js, while exploring the frontiers of agentic AI. For me, every project is a chance to spark inspiration,
               push boundaries, and deliver digital experiences that truly engage.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
    </Vortex>

  );
};

export default About;