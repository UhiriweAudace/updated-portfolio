"use client";
import { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hello } from '@/components/Hello';
import { Skills } from '@/components/Skills';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';
import { motion } from 'framer-motion';

const BackgroundShapes: React.FC = () => {
  return (
    <>
        <div className="bg-noise" />
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-background" />
        
        {/* Primary Emerald Orb */}
        <motion.div 
            animate={{ 
            x: [0, 50, -50, 0],
            y: [0, -30, 30, 0],
            scale: [1, 1.1, 0.9, 1],
            opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-emerald-500/20 rounded-full blur-[120px] mix-blend-screen"
        />
        
        {/* Secondary Lime Orb */}
        <motion.div 
            animate={{ 
            x: [0, -30, 30, 0],
            y: [0, 50, -50, 0],
            scale: [1, 1.2, 0.9, 1],
            opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-lime-500/15 rounded-full blur-[100px] mix-blend-screen"
        />
        
        {/* Accent Teal Orb - Bottom Left */}
        <motion.div 
            animate={{ 
            x: [0, 40, -40, 0],
            opacity: [0.2, 0.3, 0.2]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[100px] mix-blend-screen"
        />
        </div>
    </>
  );
};

const Page = () => {
  useEffect(() => {
    // Force dark mode handled by HTML class
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-emerald-500/30 selection:text-white relative">
      <BackgroundShapes />
      <Navbar />
      <main className="relative z-10 flex flex-col gap-0">
        <Hello />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default Page;