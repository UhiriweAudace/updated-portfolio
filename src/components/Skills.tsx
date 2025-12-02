import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS, ABOUT_TEXT } from '../constants';
import { Card, CardContent } from '@/components/ui/card';

export const Skills: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow for skills */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-heading font-bold mb-6 bg-linear-to-r from-white via-emerald-400 to-lime-400 bg-clip-text text-transparent"
          >
            Tech Stack & Expertise
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            {ABOUT_TEXT}
          </motion.p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, type: "spring", stiffness: 300 }}
            >
              <Card className="h-full hover:bg-white/10 hover:border-emerald-500/50 transition-all duration-300 group shadow-lg shadow-black/20 backdrop-blur-md">
                <CardContent className="flex flex-col items-center justify-center p-6 gap-4">
                  <div className="relative w-12 h-12 flex items-center justify-center group-hover:drop-shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all">
                    {skill.iconUrl ? (
                        <img src={skill.iconUrl} alt={skill.name} className="w-10 h-10 object-contain" />
                    ) : (
                        skill.icon && <skill.icon className="w-8 h-8 text-primary" />
                    )}
                  </div>
                  <span className="font-medium text-sm text-center text-muted-foreground group-hover:text-white transition-colors">{skill.name}</span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};