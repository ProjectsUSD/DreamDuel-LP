'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, MessageCircle, Heart } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

interface HeroSectionProps {
  translations: {
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8 lg:pr-12">
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
                <span className="text-sm text-neon-violet font-medium">Impulsado por IA Avanzada</span>
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
              className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-xl"
            >
              {translations.subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4"
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
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 pt-4"
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

          {/* Right side - Large featured image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="relative h-[400px] md:h-[500px] lg:h-[700px]"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Floating 3D characters - Main composition */}
              
              {/* Main center image - floating-1 */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute right-[10%] top-[20%] w-48 sm:w-64 md:w-96 h-64 sm:h-80 md:h-[500px] z-20 opacity-90"
              >
                <Image
                  src="/images/floating-3d/floating-1.png"
                  alt="Main character"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>

              {/* Background left - floating-9 */}
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, -3, 0]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                className="absolute right-[50%] top-[15%] w-48 sm:w-64 md:w-96 h-64 sm:h-80 md:h-[500px] z-15 opacity-80"
              >
                <Image
                  src="/images/floating-3d/floating-9.png"
                  alt="Floating character"
                  fill
                  className="object-contain"
                />
              </motion.div>

              {/* Background right - floating-15 */}
              <motion.div
                animate={{ 
                  y: [0, -18, 0],
                  rotate: [0, 4, 0]
                }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                className="absolute right-[-32%] top-[6%] w-64 sm:w-80 md:w-[550px] h-80 sm:h-[420px] md:h-[700px] z-15 opacity-85"
              >
                <Image
                  src="/images/floating-3d/floating-15.png"
                  alt="Floating character"
                  fill
                  className="object-contain"
                />
              </motion.div>

              {/* Decorative floating elements */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-neon-pink/20 blur-xl"
              />
              
              <motion.div
                animate={{ 
                  y: [0, 20, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-neon-violet/20 blur-xl"
              />

              {/* Decorative border elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-10 -right-10 w-20 h-20 border-2 border-neon-violet/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute -bottom-10 -left-10 w-16 h-16 border-2 border-neon-pink/30 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
