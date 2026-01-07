'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

interface TestimonialsProps {
  translations: {
    title: string;
    subtitle: string;
    items: {
      text: string;
      author: string;
      role: string;
    }[];
  };
}

export default function Testimonials({ translations }: TestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(translations.items.length / itemsPerPage);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % totalPages);
    }, 6000);

    return () => clearInterval(interval);
  }, [totalPages, activeIndex]);

  const nextSlide = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentItems = () => {
    const start = activeIndex * itemsPerPage;
    return translations.items.slice(start, start + itemsPerPage);
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-neon-pink/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gradient">
            {translations.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300">
            {translations.subtitle}
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="grid md:grid-cols-3 gap-6"
            >
              {getCurrentItems().map((testimonial, index) => (
                <motion.div
                  key={`${activeIndex}-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent 
                                border border-white/10 backdrop-blur-sm hover:border-neon-pink/30
                                transition-all duration-300">
                    <Quote className="w-8 h-8 text-neon-pink/30 mb-4" />
                    
                    <p className="text-gray-300 mb-6 leading-relaxed italic">
                      "{testimonial.text}"
                    </p>

                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-neon-pink fill-neon-pink" />
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-neon-gradient flex items-center justify-center">
                        <span className="text-white font-bold">{testimonial.author[0]}</span>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{testimonial.author}</h4>
                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          {totalPages > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-20 p-3 rounded-full 
                         bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 
                         border border-white/20 hidden md:block"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-20 p-3 rounded-full 
                         bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 
                         border border-white/20 hidden md:block"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </>
          )}
        </div>

        {/* Indicators */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-3 mt-8">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > activeIndex ? 1 : -1);
                  setActiveIndex(index);
                }}
                className={`transition-all duration-300 rounded-full ${
                  activeIndex === index
                    ? 'w-12 h-3 bg-neon-pink'
                    : 'w-3 h-3 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
