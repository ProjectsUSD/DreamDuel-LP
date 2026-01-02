'use client';

import { motion } from 'framer-motion';
import { Brain, Unlock, Shield, Film } from 'lucide-react';
import Image from 'next/image';

interface FeaturesSectionProps {
  translations: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
    }>;
    cta: string;
    ctaQuestion: string;
  };
}

const icons = [Brain, Unlock, Shield, Film];

export default function FeaturesSection({ translations }: FeaturesSectionProps) {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-violet/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl" />

      {/* Floating 3D Girls - Features Section */}
      <motion.div
        className="hidden md:block absolute top-[10%] left-[0%] w-56 md:w-72 h-80 md:h-96 opacity-35 pointer-events-none"
        animate={{
          y: [0, -15, 0],
          rotate: [-1, 2, -1],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/images/floating-3d/floating-3.png"
          alt="Floating character"
          fill
          className="object-contain"
        />
      </motion.div>

      <motion.div
        className="hidden md:block absolute bottom-[10%] right-[1%] w-64 md:w-80 h-[350px] md:h-[420px] opacity-40 pointer-events-none"
        animate={{
          y: [0, 20, 0],
          rotate: [2, -2, 2],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/images/floating-3d/floating-4.png"
          alt="Floating character"
          fill
          className="object-contain"
        />
      </motion.div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            {translations.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {translations.subtitle}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {translations.items.map((feature, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative"
              >
                <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent 
                              border border-white/10 backdrop-blur-sm
                              hover:border-neon-pink/50 transition-all duration-300
                              overflow-hidden">
                  {/* Icon */}
                  <div className="mb-6 relative">
                    <div className="w-14 h-14 rounded-xl bg-neon-gradient flex items-center justify-center
                                  group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 w-14 h-14 rounded-xl bg-neon-pink/50 blur-xl 
                                  opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gradient transition-all">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-neon-pink/10 to-transparent 
                                rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Bottom glow line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-neon-gradient transform scale-x-0 
                                group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">{translations.ctaQuestion}</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-xl bg-neon-gradient text-white font-semibold
                     shadow-lg shadow-neon-pink/30 hover:shadow-neon-pink/50 transition-all duration-300"
          >
            {translations.cta}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
