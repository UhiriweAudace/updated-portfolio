import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';
import { Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 relative">
        <div className="container mx-auto px-4">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
        >
            <h2 className="text-4xl font-heading font-bold mb-4">Professional Journey</h2>
            <div className="w-24 h-1.5 bg-linear-to-r from-emerald-500 to-lime-500 mx-auto rounded-full" />
        </motion.div>
        
        <div className="max-w-5xl mx-auto">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-0 mb-16 last:mb-0 group"
            >
                {/* Vertical Line */}
                <div className="absolute left-[9px] md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 group-hover:bg-linear-to-b group-hover:from-emerald-500/50 group-hover:to-lime-500/50 transition-colors md:-translate-x-1/2" />
                
                {/* Connector Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-5 h-5 rounded-full bg-background border-4 border-emerald-500 md:-translate-x-1/2 z-10 shadow-[0_0_15px_rgba(16,185,129,0.5)] group-hover:scale-125 transition-transform duration-300" />

                <div className={`md:flex items-start justify-between ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                    
                    {/* Date - Opposite Side */}
                    <div className={`hidden md:block w-[45%] ${index % 2 === 0 ? 'text-left' : 'text-right'} pt-1`}>
                        <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-sm tracking-wide">
                            {exp.period}
                        </div>
                    </div>
                    
                    {/* Mobile Date */}
                    <div className="md:hidden mb-4 pl-6">
                         <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs">
                            {exp.period}
                        </div>
                    </div>

                    {/* Content Card */}
                    <div className="md:w-[45%] relative">
                         <Card className="hover:border-emerald-500/50 transition-all duration-300 backdrop-blur-md group-hover:shadow-[0_0_30px_rgba(0,0,0,0.3)]">
                             <CardContent className="p-6 sm:p-8">
                                <div className="flex items-center gap-3 mb-2">
                                    <Briefcase className="w-5 h-5 text-emerald-500" />
                                    <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                                </div>
                                <p className="text-lg text-white/80 font-medium mb-4">{exp.company}</p>
                                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                                    {exp.description}
                                </p>
                                {exp.technologies && (
                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map(tech => (
                                            <span key={tech} className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-muted-foreground hover:text-white hover:border-emerald-500/30 transition-colors">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                )}
                             </CardContent>
                         </Card>
                    </div>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
