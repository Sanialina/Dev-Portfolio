import  { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';


const SkillIcon = ({ position, skill, color }: { position: [number, number, number], skill: string, color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.lookAt(state.camera.position);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group position={position}>
        <mesh ref={meshRef}>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.3}
            transparent
            opacity={0.8}
          />
        </mesh>
        <Text
          position={[0, -0.6, 0]}
          fontSize={0.2}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {skill}
        </Text>
      </group>
    </Float>
  );
};

const SkillsGlobe = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.015;
    }
  });

  const skills = [
    { name: "React", position: [2, 1, 0] as [number, number, number], color: "#61dafb" },
    { name: "TypeScript", position: [-2, 1, 0] as [number, number, number], color: "#3178c6" },
    { name: "Node.js", position: [0, 2, 1] as [number, number, number], color: "#339933" },
    { name: "Python", position: [1.5, -1, 1.5] as [number, number, number], color: "#39FF14" },
    { name: "Three.js", position: [-1.5, -1, 1.5] as [number, number, number], color: "#ffffff" },    
    { name: "AI/ML", position: [0, -2, 0] as [number, number, number], color: "#ff6b6b" },
    { name: "Docker", position: [1, 0, -2] as [number, number, number], color: "#8a3ab9" },
    { name: "AWS", position: [-1, 0, -2] as [number, number, number], color: "#ff9900" },
  ];

  return (
    <group ref={groupRef}>
      {/* Central wireframe sphere */}
      <mesh>
        <sphereGeometry args={[1.5, 20, 20]} />
        <meshBasicMaterial wireframe color="#a855f7" opacity={0.3} transparent />
      </mesh>
      
      {/* Skill nodes */}
      {skills.map((skill) => (
        <SkillIcon
          key={skill.name}
          position={skill.position}
          skill={skill.name}
          color={skill.color}
        />
      ))}
    </group>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Three.js/WebGL", level: 85 },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 90 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 85 },
      ]
    },
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "Agentic AI", level: 90 },
        { name: "OpenAI API", level: 90 },
        { name: "Langchain", level: 85 },
        { name: "Prompt Engineering", level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-orbitron font-bold gradient-text mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Interactive 3D visualization of my technical expertise across various domains
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 3D Skills Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="h-96 lg:h-[500px]"
          >
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} color="#a855f7" intensity={0.5} />
              <pointLight position={[-10, -10, -10]} color="#ec4899" intensity={0.3} />
              <SkillsGlobe />
            </Canvas>
          </motion.div>

          {/* Skills List */}
          <div className="space-y-8">
            {skillCategories.map((category, categoryIndex) => (
             <motion.div
  key={category.title}
  initial={{ opacity: 0, x: 100, rotate: -5, scale: 0.9 }}
  whileInView={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
  transition={{ duration: 1, delay: categoryIndex * 0.2, type: "spring", stiffness: 100 }}
  whileHover={{
    scale: 1.05,
    boxShadow: "0 0 30px rgba(168, 85, 247, 0.8)",
  }}
  whileTap={{
    scale: 1.05,
    boxShadow: "0 0 30px rgba(168, 85, 247, 0.8)",
  }}
  className="floating-panel"
>

                <h3 className="text-xl font-orbitron font-bold text-neon-purple mb-4">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-neon-cyan font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                          className="h-full bg-gradient-to-r from-neon-purple to-neon-magenta rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;