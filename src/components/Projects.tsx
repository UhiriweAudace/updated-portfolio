import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Globe } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 relative bg-black/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-heading font-bold mb-4">Featured Projects</h2>
             <div className="w-24 h-1.5 bg-linear-to-r from-emerald-500 to-lime-500 rounded-full" />
          </div>
          <Button variant="ghost" className="text-muted-foreground hover:text-white border border-transparent hover:border-white/10" onClick={() => window.open('https://github.com', '_blank')}>
            View Github <Github className="ml-2 w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col group overflow-hidden border-white/5 bg-linear-to-br from-white/5 to-transparent hover:border-emerald-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1 backdrop-blur-md">
                {/* Decorative Header */}
                <div className="h-2 bg-linear-to-r from-emerald-500 via-teal-500 to-lime-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <CardHeader className="relative z-10 pt-8">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex flex-wrap gap-2">
                        {project.type && (
                            <span className={`text-[10px] uppercase tracking-wider px-2 py-1 rounded-full border ${project.type === 'Professional' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-lime-500/10 border-lime-500/20 text-lime-400'}`}>
                                {project.type}
                            </span>
                        )}
                    </div>
                    {project.link && project.link !== '#' && (
                        <Globe className="text-muted-foreground group-hover:text-emerald-400 transition-colors w-5 h-5" />
                    )}
                  </div>
                  <CardTitle className="text-2xl group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-emerald-200 transition-all">
                      {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="grow">
                  <CardDescription className="text-base text-muted-foreground/90 leading-relaxed mb-6">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs px-2.5 py-1 bg-black/40 border border-white/5 rounded-md text-muted-foreground group-hover:border-emerald-500/20 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="gap-3 pt-4 border-t border-white/5 bg-black/20">
                  {project.link && project.link !== '#' && (
                    <Button variant="default" size="sm" className="flex-1 bg-white text-black hover:bg-gray-200" onClick={() => window.open(project.link, '_blank')}>
                        <ExternalLink className="mr-2 w-4 h-4" /> Visit Site
                    </Button>
                  )}
                  {project.github && project.github !== '#' && (
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent border-white/20 hover:bg-white/10" onClick={() => window.open(project.github, '_blank')}>
                      <Github className="mr-2 w-4 h-4" /> Code
                    </Button>
                  )}
                  {(!project.link || project.link === '#') && (!project.github || project.github === '#') && (
                      <span className="text-xs text-muted-foreground italic px-2">Internal / Private Project</span>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};