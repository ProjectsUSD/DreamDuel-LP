'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            {translations.title}
          </h2>
          <p className="text-xl text-gray-300">
            {translations.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {translations.items.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
        </div>
      </div>
    </section>
  );
}
