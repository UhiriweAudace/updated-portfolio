import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { PROFILE_IMAGE_URL, HERO_TITLE, HERO_SUBTITLE, RESUME_LINK } from '../constants';
import { Button } from '@/components/ui/button';

export const Hello: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-24 md:pt-0 overflow-hidden relative">

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-[10%] w-4 h-4 bg-lime-400 rounded-full animate-ping opacity-75" />
      <div className="absolute bottom-1/4 left-[5%] w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 order-2 md:order-1 text-center md:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-sm font-medium text-emerald-300 mx-auto md:mx-0"
          >
            <Sparkles size={14} className="text-lime-400" />
            <span>Available for new projects</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight leading-[1.1]">
            Building the <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 via-teal-400 to-lime-400 animate-gradient-x">
              Future Web
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto md:mx-0 leading-relaxed">
            {HERO_SUBTITLE}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <Button size="lg" className="rounded-full h-12 px-8 bg-primary hover:bg-primary/90 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Contact Me <ArrowRight size={18} className="ml-2" />
            </Button>
            <a href={RESUME_LINK} download="Resume.pdf">
              <Button size="lg" variant="outline" className="rounded-full h-12 px-8 border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm" onClick={() => window.open(RESUME_LINK, '_blank')}>
                Resume <Download size={18} className="ml-2" />
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center md:justify-end relative"
        >
          {/* Abstract blobs behind image */}
          <div className="absolute inset-0 bg-linear-to-tr from-emerald-500/30 to-lime-500/30 blur-3xl rounded-full transform scale-110" />

          <div className="relative w-72 h-72 md:w-[450px] md:h-[500px]">
            {/* The Image with custom mask/border radius */}
            <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent rounded-4xl transform rotate-6 border border-white/10 backdrop-blur-sm" />
            <div className="absolute inset-0 bg-background rounded-4xl transform -rotate-3 overflow-hidden border border-white/5 shadow-2xl">
              <img
                src={PROFILE_IMAGE_URL}
                alt="Profile"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-8 -left-4 md:-left-12 bg-background/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-xl flex items-center gap-4 max-w-[200px]"
            >
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <Sparkles size={20} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Experience</p>
                <p className="font-bold text-foreground">5+ Years</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};