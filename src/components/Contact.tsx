import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SOCIALS } from '@/constants';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Send, CheckCircle2, Loader2, Mail, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate network request
    setTimeout(() => {
      // Construct mailto link
      const mailtoLink = `mailto:hello@example.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.email}\n\n${formData.message}`)}`;
      window.location.href = mailtoLink;

      setStatus('success');
      setFormData({ email: '', subject: '', message: '' });

      // Reset success message after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <footer id="contact" className="py-24 relative overflow-hidden">
      {/* Background Gradient Spotlights */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-lime-600/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 bg-linear-to-r from-white via-emerald-200 to-lime-200 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-lg">
            Have a project in mind or just want to say hi? I'm currently open for new opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <Card className="border-white/10 overflow-hidden h-full relative group backdrop-blur-xl bg-white/5">
              <div className="absolute inset-0 bg-linear-to-br from-emerald-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="p-8 md:p-10 flex flex-col justify-between h-full relative z-10">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Email</p>
                        <a href="mailto:hello@example.com" className="text-lg font-medium hover:text-emerald-400 transition-colors">hello@example.com</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-lime-500/20 flex items-center justify-center text-lime-400 shrink-0">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Location</p>
                        <p className="text-lg font-medium">San Francisco, CA</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
                  <div className="flex gap-4">
                    {SOCIALS.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:bg-emerald-500 hover:text-white hover:border-emerald-500/50 hover:scale-110 transition-all duration-300 shadow-lg shadow-black/20"
                      >
                        <social.icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Card className="bg-black/20 border-white/10 backdrop-blur-xl">
              <CardContent className="p-8 md:p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-white/80">Your Email</label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-12 focus:ring-emerald-500/50 focus:border-emerald-500/50 backdrop-blur-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-white/80">Subject</label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="Project inquiry..."
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-12 focus:ring-emerald-500/50 focus:border-emerald-500/50 backdrop-blur-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-white/80">Message</label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="min-h-[150px] bg-white/5 border-white/10 text-white placeholder:text-white/30 resize-none focus:ring-emerald-500/50 focus:border-emerald-500/50 backdrop-blur-sm"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full h-12 text-base bg-linear-to-r from-emerald-500 to-lime-600 hover:from-emerald-500/90 hover:to-lime-600/90 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
                  >
                    {status === 'loading' ? (
                      <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...</>
                    ) : status === 'success' ? (
                      <><CheckCircle2 className="mr-2 h-5 w-5" /> Message Sent!</>
                    ) : (
                      <><Send className="mr-2 h-5 w-5" /> Send Message</>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="text-center mt-20 text-sm text-muted-foreground/40 font-mono">
          <p>© {new Date().getFullYear()} Audace Uhiriwe. Developed with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};
