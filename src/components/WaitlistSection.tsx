'use client';

import { motion } from 'framer-motion';
import { Sparkles, Users, CheckCircle2 } from 'lucide-react';
import { useState, useEffect } from 'react';

interface WaitlistSectionProps {
  translations: {
    badge: string;
    title: string;
    subtitle: string;
    freeAccess: string;
    priorityAccess: string;
    stats: {
      users: string;
      waitTime: string;
    };
  };
}

export default function WaitlistSection({ translations }: WaitlistSectionProps) {
  const [waitlistCount, setWaitlistCount] = useState(900);

  // Incrementar contador de forma aleatoria cada 45 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      // Incremento aleatorio entre 1 y 5
      const increment = Math.floor(Math.random() * 5) + 1;
      setWaitlistCount(prev => prev + increment);
    }, 45000); // 45 segundos

    return () => clearInterval(interval);
  }, []);



  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 
                     border border-primary/30 mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">{translations.badge}</span>
          </motion.div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gradient">
            {translations.title}
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {translations.subtitle}
          </p>

          {/* Counter */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-xl mx-auto mb-10"
          >
            <div className="p-8 rounded-3xl bg-gradient-to-br from-primary/20 to-primary-glow/20 
                         border border-primary/30">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Users className="w-8 h-8 text-primary" />
                <motion.span 
                  key={waitlistCount}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-5xl font-bold text-white"
                >
                  {waitlistCount}
                </motion.span>
              </div>
              <p className="text-lg text-gray-300">
                {translations.stats.users}
              </p>
            </div>
          </motion.div>



          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex items-center justify-center gap-6 text-gray-400 text-sm"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>{translations.freeAccess}</span>
            </div>
            <div className="w-px h-4 bg-white/20 hidden sm:block" />
            <div className="flex items-center gap-2 hidden sm:flex">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>{translations.priorityAccess}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
