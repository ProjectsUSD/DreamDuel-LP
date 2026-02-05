'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Scenario {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  colorTheme: string;
  accentColor: string;
}

interface ImmersiveShowcaseProps {
  locale: string;
}

export default function ImmersiveShowcase({ locale }: ImmersiveShowcaseProps) {
  const t = useTranslations('showcase');
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  // Escenarios con datos de traducción
  const scenarios: Scenario[] = [
    {
      id: 1,
      title: t('scenarios.0.title'),
      description: t('scenarios.0.description'),
      imageSrc: '/images/showcase/Escena1.png',
      colorTheme: '#831843',
      accentColor: '#ec4899',
    },
    {
      id: 2,
      title: t('scenarios.1.title'),
      description: t('scenarios.1.description'),
      imageSrc: '/images/showcase/Escena2.png',
      colorTheme: '#ec4899',
      accentColor: '#f472b6',
    },
    {
      id: 3,
      title: t('scenarios.2.title'),
      description: t('scenarios.2.description'),
      imageSrc: '/images/showcase/Escena3.png',
      colorTheme: '#1e293b',
      accentColor: '#06b6d4',
    },
    {
      id: 4,
      title: t('scenarios.3.title'),
      description: t('scenarios.3.description'),
      imageSrc: '/images/showcase/Escena4.png',
      colorTheme: '#4c1d95',
      accentColor: '#8b5cf6',
    },
    {
      id: 5,
      title: t('scenarios.4.title'),
      description: t('scenarios.4.description'),
      imageSrc: '/images/showcase/Escena5.png',
      colorTheme: '#7c2d12',
      accentColor: '#f97316',
    },
    {
      id: 6,
      title: t('scenarios.5.title'),
      description: t('scenarios.5.description'),
      imageSrc: '/images/showcase/Escena6.png',
      colorTheme: '#1e3a8a',
      accentColor: '#3b82f6',
    },
  ];

  // Auto-advance carousel with reset on manual interaction
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % scenarios.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [scenarios.length, activeIndex]); // Reset interval when activeIndex changes

  const nextSlide = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % scenarios.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + scenarios.length) % scenarios.length);
  };

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-primary-dark to-primary-darker">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main carousel */}
          <div className="relative min-h-[600px] sm:min-h-[650px] md:h-[600px] rounded-3xl overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                {/* Background with theme color */}
                <div
                  className="absolute inset-0 transition-colors duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${scenarios[activeIndex].colorTheme}90, ${scenarios[activeIndex].accentColor}60)`,
                  }}
                />

                <div className="relative h-full flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-8 p-6 md:p-12">
                  {/* Left side - Image */}
                  <div className="relative flex items-center justify-center order-1 md:order-1">
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="relative w-full h-[280px] md:h-full"
                    >
                      {/* Glow effect */}
                      <div
                        className="absolute inset-0 blur-3xl opacity-40"
                        style={{
                          background: `radial-gradient(circle, ${scenarios[activeIndex].accentColor}80 0%, transparent 70%)`,
                        }}
                      />
                      
                      {/* Image */}
                      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-2"
                           style={{ borderColor: scenarios[activeIndex].accentColor + '60' }}>
                        <Image
                          src={scenarios[activeIndex].imageSrc}
                          alt={scenarios[activeIndex].title}
                          fill
                          className="object-cover"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Right side - Content */}
                  <div className="flex flex-col justify-center text-white space-y-3 md:space-y-6 order-2 md:order-2">
                    <motion.h3
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-xl md:text-5xl font-bold leading-tight"
                      style={{ color: scenarios[activeIndex].accentColor }}
                    >
                      {scenarios[activeIndex].title}
                    </motion.h3>
                    
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-sm md:text-xl text-gray-200 leading-relaxed max-h-[200px] md:max-h-none overflow-y-auto"
                    >
                      {scenarios[activeIndex].description}
                    </motion.p>

                    {/* Scenario number */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="flex items-center gap-3"
                    >
                      <span className="text-3xl md:text-6xl font-bold opacity-20">
                        {String(activeIndex + 1).padStart(2, '0')}
                      </span>
                      <div className="h-px flex-1 bg-white/20" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-white/10 backdrop-blur-sm
                       hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-white/10 backdrop-blur-sm
                       hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {scenarios.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  activeIndex === index
                    ? 'w-12 h-3 bg-primary'
                    : 'w-3 h-3 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
