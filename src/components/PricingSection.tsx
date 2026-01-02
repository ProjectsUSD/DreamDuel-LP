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

      {/* Floating 3D Girls - Pricing Section */}
      <motion.div
        className="hidden md:block absolute bottom-[5%] left-[0%] w-64 md:w-80 h-[350px] md:h-[420px] opacity-40 pointer-events-none"
        animate={{
          y: [0, -20, 0],
          rotate: [-1, 2, -1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/images/floating-3d/floating-7.png"
          alt="Floating character"
          fill
          className="object-contain"
        />
      </motion.div>

      <motion.div
        className="hidden md:block absolute top-[10%] right-[1%] w-56 md:w-72 h-80 md:h-96 opacity-38 pointer-events-none"
        animate={{
          y: [0, 18, 0],
          rotate: [2, -3, 2],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/images/floating-3d/floating-8.png"
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
          <p className="text-xl text-gray-300">
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
            className="relative"
          >
            <div className="h-full p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent 
                          border border-white/10 backdrop-blur-sm
                          hover:border-white/20 transition-all duration-300">
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-gray-400" />
                  <h3 className="text-2xl font-bold text-white">{translations.free.name}</h3>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-white">{translations.free.price}</span>
                  <span className="text-xl text-gray-400">{translations.free.currency}</span>
                  <span className="text-gray-400">{translations.free.period}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {translations.free.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-gray-300" />
                    </div>
                    <span className="text-gray-300">{feature}</span>
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
            className="relative"
          >
            {/* Popular badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
              <div className="px-6 py-2 rounded-full bg-neon-gradient text-white text-sm font-semibold
                            shadow-lg shadow-neon-pink/50">
                {translations.premium.popular}
              </div>
            </div>

            <div className="h-full p-8 rounded-3xl bg-gradient-to-br from-neon-pink/10 via-neon-violet/10 to-transparent 
                          border-2 border-neon-pink/50 backdrop-blur-sm relative overflow-hidden
                          hover:border-neon-pink/70 transition-all duration-300 shadow-2xl shadow-neon-pink/20">
              {/* Decorative glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-neon-pink/30 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-neon-violet/30 rounded-full blur-3xl" />

              <div className="relative z-10">
                {/* Header */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Crown className="w-5 h-5 text-neon-pink" />
                    <h3 className="text-2xl font-bold text-gradient">{translations.premium.name}</h3>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-white">{translations.premium.price}</span>
                    <span className="text-xl text-gray-400">{translations.premium.currency}</span>
                    <span className="text-gray-400">{translations.premium.period}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {translations.premium.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-5 h-5 rounded-full bg-neon-gradient flex items-center justify-center flex-shrink-0 mt-0.5
                                    shadow-lg shadow-neon-pink/50">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-white">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl bg-neon-gradient text-white font-semibold text-lg
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
                  🔒 Cancela cuando quieras. Sin compromisos.
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
