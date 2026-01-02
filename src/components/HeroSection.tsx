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

  // Simulación de mensajes de chat para el visual interactivo
  const chatMessages = [
    { role: 'user', text: '¿Estás sola esta noche?' },
    { role: 'ai', text: 'Siempre para ti... ¿Qué historia crearemos juntos? 💕✨' },
    { role: 'user', text: 'Una noche bajo las estrellas, solo tú y yo...' },
    { role: 'ai', text: '*Me acerco más* Me gusta cómo piensas... Cuéntame más sobre lo que deseas. La luna está perfecta esta noche... 🌙' },
  ];

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

      {/* Floating 3D Girl - Hero Section (Solo izquierda) */}
      <motion.div
        className="hidden md:block absolute top-[10%] left-[2%] w-60 md:w-80 h-[350px] md:h-[450px] opacity-40 pointer-events-none z-0"
        animate={{
          y: [0, -20, 0],
          rotate: [-2, 2, -2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/images/floating-3d/floating-1.png"
          alt="Floating character"
          fill
          className="object-contain"
        />
      </motion.div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
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

              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
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
              className="text-xl text-gray-300 leading-relaxed max-w-xl"
            >
              {translations.subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setHoveredBtn(true)}
                onHoverEnd={() => setHoveredBtn(false)}
                className="group relative px-8 py-4 rounded-xl bg-neon-gradient text-white font-semibold text-lg
                         shadow-lg shadow-neon-pink/30 hover:shadow-neon-pink/50 transition-all duration-300
                         overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {translations.cta}
                  <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${hoveredBtn ? 'translate-x-1' : ''}`} />
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
                className="px-8 py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10
                         text-white font-medium hover:bg-white/10 hover:border-white/20
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
              className="flex items-center gap-6 pt-4"
            >
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-neon-pink fill-neon-pink" />
                <span className="text-sm text-gray-400">10K+ historias creadas</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-neon-violet" />
                <span className="text-sm text-gray-400">Privacidad garantizada</span>
              </div>
            </motion.div>
          </div>

          {/* Right side - Interactive chat preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="relative"
          >
            <div className="relative">
              {/* Floating chat card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative bg-gradient-to-br from-primary-darker to-primary-dark rounded-2xl 
                         border border-neon-violet/30 shadow-2xl overflow-hidden backdrop-blur-sm"
              >
                {/* Chat header */}
                <div className="bg-gradient-to-r from-neon-pink/20 to-neon-violet/20 px-6 py-4 
                              border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-neon-gradient flex items-center justify-center
                                  shadow-lg shadow-neon-pink/50">
                      <span className="text-white font-bold">S</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Sakura • 19</h3>
                      <p className="text-xs text-green-400 flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        Conectada • Esperándote
                      </p>
                    </div>
                  </div>
                </div>

                {/* Chat messages */}
                <div className="p-6 space-y-4 max-h-96 overflow-y-auto">
                  {chatMessages.map((msg, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 + idx * 0.3 }}
                      className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                          msg.role === 'user'
                            ? 'bg-neon-gradient text-white'
                            : 'bg-white/5 text-gray-200 border border-white/10'
                        }`}
                      >
                        <p className="text-sm leading-relaxed">{msg.text}</p>
                      </div>
                    </motion.div>
                  ))}

                  {/* Typing indicator */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white/5 border border-white/10 px-4 py-3 rounded-2xl">
                      <div className="flex gap-1">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity }}
                          className="w-2 h-2 rounded-full bg-neon-violet"
                        />
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                          className="w-2 h-2 rounded-full bg-neon-violet"
                        />
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                          className="w-2 h-2 rounded-full bg-neon-violet"
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Glow effect */}
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-neon-pink/30 rounded-full blur-3xl" />
              </motion.div>

              {/* Decorative elements */}
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
