'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, MessageCircle, Heart } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

interface HeroSectionProps {
  translations: {
    badge: string;
    title: string;
    subtitle: string;
    cta: string;
    ctaSecondary: string;
  };
}

export default function HeroSection({ translations }: HeroSectionProps) {
  const [hoveredBtn, setHoveredBtn] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {typeof window !== 'undefined' && [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neon-pink rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: [null, Math.random() * -100 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Gradient blobs background */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-neon-pink/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-violet/20 rounded-full blur-3xl animate-pulse" 
           style={{ animationDelay: '1s' }} />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex justify-center items-center">
          {/* Text content */}
          <div className="space-y-8 max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-violet/10 
                         border border-neon-violet/30 mb-6"
              >
                <Sparkles className="w-4 h-4 text-neon-violet" />
                <span className="text-sm text-neon-violet font-medium">{translations.badge}</span>
              </motion.div>

              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight mb-4 md:mb-6">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="block text-gradient"
                >
                  {translations.title.split(',')[0]},
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="block text-white"
                >
                  {translations.title.split(',').slice(1).join(',')}
                </motion.span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-xl mx-auto"
            >
              {translations.subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setHoveredBtn(true)}
                onHoverEnd={() => setHoveredBtn(false)}
                className="group relative px-6 md:px-8 py-3 md:py-4 rounded-xl bg-neon-gradient text-white font-semibold text-base md:text-lg
                         shadow-lg shadow-neon-pink/30 hover:shadow-neon-pink/50 transition-all duration-300
                         overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {translations.cta}
                  <ArrowRight className={`w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 ${hoveredBtn ? 'translate-x-1' : ''}`} />
                </span>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 md:px-8 py-3 md:py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10
                         text-white font-medium text-base md:text-lg hover:bg-white/10 hover:border-white/20
                         transition-all duration-300"
              >
                {translations.ctaSecondary}
              </motion.button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 pt-4"
            >
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 md:w-5 md:h-5 text-neon-pink fill-neon-pink" />
                <span className="text-xs md:text-sm text-gray-400">10K+ historias creadas</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5 text-neon-violet" />
                <span className="text-xs md:text-sm text-gray-400">Privacidad garantizada</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
