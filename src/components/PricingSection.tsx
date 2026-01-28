'use client';

import { motion } from 'framer-motion';
import { Check, Sparkles, Crown } from 'lucide-react';
import Image from 'next/image';

interface PricingSectionProps {
  translations: {
    title: string;
    subtitle: string;
    guarantee: string;
    free: {
      name: string;
      price: string;
      currency: string;
      period: string;
      features: string[];
      cta: string;
    };
    premium: {
      name: string;
      price: string;
      currency: string;
      period: string;
      popular: string;
      features: string[];
      cta: string;
      cancelPolicy: string;
    };
  };
}

export default function PricingSection({ translations }: PricingSectionProps) {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] 
                      bg-neon-violet/10 rounded-full blur-3xl" />
      </div>

      {/* Floating 3D Girls removed - starting from scratch */}

      {/* Floating 3D characters - Pricing Section */}
      {/* Top left - floating-6 (Músico rockero) */}
      <motion.div
        className="absolute top-[-2%] left-[-3%] w-48 sm:w-60 md:w-84 h-60 sm:h-72 md:h-[440px] opacity-80 pointer-events-none z-10"
        animate={{
          y: [0, -15, 0],
          rotate: [-1, 2, -1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/images/floating-3d/floating-6.png"
          alt="Floating character"
          fill
          className="object-contain"
        />
      </motion.div>

      {/* Top right - floating-7 (Científica) */}
      <motion.div
        className="absolute top-[-2%] right-[-3%] w-48 sm:w-60 md:w-84 h-60 sm:h-72 md:h-[440px] opacity-80 pointer-events-none z-10"
        animate={{
          y: [0, -18, 0],
          rotate: [2, -1, 2],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/images/floating-3d/floating-7.png"
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gradient">
            {translations.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300">
            {translations.subtitle}
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative h-full"
          >
            <div className="h-full p-6 md:p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent 
                          border border-white/10 backdrop-blur-sm
                          hover:border-white/20 transition-all duration-300 flex flex-col">
              {/* Header */}
              <div className="mb-6 md:mb-8">
                <div className="flex items-center gap-2 mb-3 md:mb-4">
                  <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                  <h3 className="text-xl md:text-2xl font-bold text-white">{translations.free.name}</h3>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-bold text-white">{translations.free.price}</span>
                  <span className="text-lg md:text-xl text-gray-400">{translations.free.currency}</span>
                  <span className="text-sm md:text-base text-gray-400">{translations.free.period}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8 flex-grow">
                {translations.free.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 md:gap-3">
                    <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 md:w-3 md:h-3 text-gray-300" />
                    </div>
                    <span className="text-sm md:text-base text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold
                         hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                {translations.free.cta}
              </motion.button>
            </div>
          </motion.div>

          {/* Premium Plan */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative h-full"
          >
            <div className="h-full p-6 md:p-8 rounded-3xl bg-gradient-to-br from-neon-pink/10 via-neon-violet/10 to-transparent 
                          border-2 border-neon-pink/50 backdrop-blur-sm relative overflow-hidden
                          hover:border-neon-pink/70 transition-all duration-300 shadow-2xl shadow-neon-pink/20 flex flex-col">
              {/* Decorative glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-neon-pink/30 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-neon-violet/30 rounded-full blur-3xl" />

              <div className="relative z-10">
                {/* Header */}
                <div className="mb-6 md:mb-8">
                  <div className="flex items-center gap-2 mb-3 md:mb-4">
                    <Crown className="w-4 h-4 md:w-5 md:h-5 text-neon-pink" />
                    <h3 className="text-xl md:text-2xl font-bold text-gradient">{translations.premium.name}</h3>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl md:text-5xl font-bold text-white">{translations.premium.price}</span>
                    <span className="text-lg md:text-xl text-gray-400">{translations.premium.currency}</span>
                    <span className="text-sm md:text-base text-gray-400">{translations.premium.period}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8 flex-grow">
                  {translations.premium.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                      className="flex items-start gap-2 md:gap-3"
                    >
                      <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-neon-gradient flex items-center justify-center flex-shrink-0 mt-0.5
                                    shadow-lg shadow-neon-pink/50">
                        <Check className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" />
                      </div>
                      <span className="text-sm md:text-base text-white">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl bg-neon-gradient text-white font-semibold
                           border-2 border-neon-pink/50 hover:border-neon-pink/70
                           shadow-lg shadow-neon-pink/50 hover:shadow-neon-pink/70 
                           transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10">{translations.premium.cta}</span>
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>

                {/* Guarantee */}
                <p className="text-center text-sm text-gray-400 mt-4">
                  {translations.premium.cancelPolicy}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400">
            {translations.guarantee}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
