'use client';

import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

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
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeScenario, setActiveScenario] = useState(0);
  
  // Mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), springConfig);

  // Scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Escenarios con datos de traducción
  const scenarios: Scenario[] = [
    {
      id: 1,
      title: t('scenarios.0.title'),
      description: t('scenarios.0.description'),
      imageSrc: '/images/showcase/teacher.png',
      colorTheme: '#1e40af',
      accentColor: '#3b82f6',
    },
    {
      id: 2,
      title: t('scenarios.1.title'),
      description: t('scenarios.1.description'),
      imageSrc: '/images/showcase/demon-queen.png',
      colorTheme: '#7f1d1d',
      accentColor: '#dc2626',
    },
    {
      id: 3,
      title: t('scenarios.2.title'),
      description: t('scenarios.2.description'),
      imageSrc: '/images/showcase/mermaid.png',
      colorTheme: '#164e63',
      accentColor: '#06b6d4',
    },
    {
      id: 4,
      title: t('scenarios.3.title'),
      description: t('scenarios.3.description'),
      imageSrc: '/images/showcase/ninja.png',
      colorTheme: '#4c1d95',
      accentColor: '#8b5cf6',
    },
  ];

  // Determinar escenario activo basado en scroll
  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      const index = Math.min(
        Math.floor(latest * scenarios.length),
        scenarios.length - 1
      );
      setActiveScenario(index);
    });
  }, [scrollYProgress, scenarios.length]);

  // Mouse move handler para parallax
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      ref={containerRef}
      className="relative z-10"
      style={{ height: `${scenarios.length * 100}vh` }}
    >
      {/* Sticky Container para la imagen */}
      <div className="sticky top-0 h-screen overflow-hidden z-10">
        {/* Fondo atmosférico con color theme dinámico */}
        <motion.div
          className="absolute inset-0 transition-colors duration-1000"
          style={{
            backgroundColor: scenarios[activeScenario]?.colorTheme || '#000',
          }}
        >
          {/* Gradient overlay radial */}
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/30 to-black/80" />
          
          {/* Efectos de luz ambiente */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-40"
            animate={{
              backgroundColor: scenarios[activeScenario]?.accentColor || '#fff',
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-30"
            animate={{
              backgroundColor: scenarios[activeScenario]?.accentColor || '#fff',
              scale: [1.2, 1, 1.2],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </motion.div>

        {/* Contenedor 3D de la imagen del personaje */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ perspective: '1000px' }}
        >
          <motion.div
            className="relative w-full max-w-2xl h-[80vh]"
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Imagen del personaje con cross-fade */}
            {scenarios.map((scenario, index) => (
              <motion.div
                key={scenario.id}
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.9, z: -100 }}
                animate={{
                  opacity: activeScenario === index ? 1 : 0,
                  scale: activeScenario === index ? 1 : 0.9,
                  z: activeScenario === index ? 0 : -100,
                }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              >
                <div className="relative w-full h-full">
                  {/* Glow effect detrás del personaje */}
                  <div
                    className="absolute inset-0 blur-3xl opacity-50 scale-110"
                    style={{
                      background: `radial-gradient(circle, ${scenario.accentColor}40 0%, transparent 70%)`,
                    }}
                  />
                  
                  {/* Imagen del personaje */}
                  <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src={scenario.imageSrc}
                      alt={scenario.title}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                    
                    {/* Viñeta oscura en la parte inferior */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    
                    {/* Borde con glow */}
                    <div 
                      className="absolute inset-0 rounded-3xl border-2 opacity-60"
                      style={{ borderColor: scenario.accentColor }}
                    />
                  </div>

                  {/* Efecto de partículas flotantes */}
                  {activeScenario === index && (
                    <>
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 rounded-full"
                          style={{
                            backgroundColor: scenario.accentColor,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                          }}
                          animate={{
                            y: [0, -30, 0],
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.3,
                          }}
                        />
                      ))}
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-white/60 text-sm font-medium"
          >
            {t('scrollHint')}
          </motion.div>
          <div className="flex gap-2">
            {scenarios.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full transition-all duration-300 ${
                  activeScenario === index ? 'w-8 bg-white' : 'w-4 bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Información del escenario activo en el sticky container */}
        <div className="absolute bottom-24 left-0 right-0 px-8 z-20">
          <div className="max-w-4xl mx-auto text-center">
            {scenarios.map((scenario, index) => (
              <motion.div
                key={scenario.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: activeScenario === index ? 1 : 0,
                  y: activeScenario === index ? 0 : 20,
                }}
                transition={{ duration: 0.5 }}
                className={`${activeScenario === index ? 'block' : 'hidden'}`}
              >
                <h3 
                  className="text-4xl md:text-6xl font-bold mb-4"
                  style={{ color: scenario.accentColor }}
                >
                  {scenario.title}
                </h3>
                <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                  {scenario.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Spacers invisibles solo para controlar el scroll */}
      <div className="relative pointer-events-none">
        {scenarios.map((_, index) => (
          <div
            key={index}
            className="h-screen"
          />
        ))}
      </div>
    </section>
  );
}
