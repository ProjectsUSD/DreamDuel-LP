'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface CharacterCarouselProps {
  translations: {
    title: string;
    types: string[];
    subtitle: string;
  };
}

export default function CharacterCarousel({ translations }: CharacterCarouselProps) {
  // Personajes con imágenes de anime girls (usando placeholders que sí funcionan)
  const characters = [
    { 
      name: 'Sakura', 
      type: translations.types[0], 
      image: 'https://picsum.photos/seed/sakura/300/400',
      color: 'from-pink-600 to-rose-600',
      description: '¿Qué miras? No es que me importe...'
    },
    { 
      name: 'Akira', 
      type: translations.types[1], 
      image: 'https://picsum.photos/seed/akira/300/400',
      color: 'from-purple-600 to-violet-600',
      description: 'Haz lo que te diga y seremos felices.'
    },
    { 
      name: 'Yuki', 
      type: translations.types[2], 
      image: 'https://picsum.photos/seed/yuki/300/400',
      color: 'from-blue-500 to-cyan-500',
      description: 'S-si quieres... podemos pasar tiempo juntos...'
    },
    { 
      name: 'Raven', 
      type: translations.types[3], 
      image: 'https://picsum.photos/seed/raven/300/400',
      color: 'from-indigo-600 to-purple-700',
      description: 'Tengo secretos que solo tú conocerás.'
    },
    { 
      name: 'Luna', 
      type: translations.types[4], 
      image: 'https://picsum.photos/seed/luna/300/400',
      color: 'from-orange-600 to-red-600',
      description: '¡Vamos a crear nuestra propia aventura!'
    },
    { 
      name: 'Iris', 
      type: translations.types[5], 
      image: 'https://picsum.photos/seed/iris/300/400',
      color: 'from-teal-600 to-emerald-600',
      description: 'Analicemos esto juntos... en privado.'
    },
    { 
      name: 'Nova', 
      type: translations.types[6], 
      image: 'https://picsum.photos/seed/nova/300/400',
      color: 'from-red-600 to-pink-700',
      description: 'No sigo reglas. ¿Y tú?'
    },
    { 
      name: 'Celeste', 
      type: translations.types[7], 
      image: 'https://picsum.photos/seed/celeste/300/400',
      color: 'from-violet-600 to-fuchsia-600',
      description: 'La perfección tiene un precio... que pagarás.'
    },
  ];

  const doubledCharacters = [...characters, ...characters];

  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-gradient mb-4"
        >
          {translations.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-xl text-neon-pink/80 font-medium"
        >
          {translations.subtitle}
        </motion.p>
      </div>

      {/* Infinite scroll marquee */}
      <div className="relative">
        {/* Gradient overlays para fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-primary-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-primary-dark to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-6"
          animate={{
            x: [0, -1600],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {doubledCharacters.map((character, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl border-2 border-neon-magenta/30 
                            bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm
                            hover:border-neon-magenta/90 transition-all duration-300
                            transform hover:scale-105 hover:-translate-y-2
                            shadow-lg hover:shadow-neon-magenta/60">
                {/* Imagen del personaje */}
                <div className="aspect-[3/4] relative overflow-hidden bg-gradient-to-br from-primary-darker via-black to-primary-dark">
                  {/* Imagen de fondo con gradiente */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${character.color} opacity-60 mix-blend-multiply`} />
                  
                  {/* Imagen del personaje */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                    {/* Avatar circular con imagen real */}
                    <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-neon-pink/60 
                                  shadow-2xl shadow-neon-pink/70 relative group-hover:scale-110 transition-transform
                                  bg-gradient-to-br from-white/10 to-white/5">
                      <Image
                        src={character.image}
                        alt={character.name}
                        width={160}
                        height={160}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback si la imagen no carga
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      {/* Fallback con inicial */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${character.color} flex items-center justify-center`}>
                        <span className="text-7xl font-bold text-white/80">
                          {character.name[0]}
                        </span>
                      </div>
                    </div>
                    
                    {/* Frase seductora */}
                    <div className="text-center px-4 py-3 rounded-xl bg-black/50 backdrop-blur-md border border-neon-pink/30
                                  shadow-lg shadow-neon-pink/20">
                      <p className="text-white text-sm italic leading-relaxed font-medium">
                        "{character.description}"
                      </p>
                    </div>
                  </div>
                  
                  {/* Hover overlay más intenso */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neon-magenta/90 via-neon-purple/40 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                                flex items-end justify-center pb-8">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-3 rounded-full bg-white text-neon-magenta font-bold text-base
                               shadow-2xl shadow-neon-pink/80 transform translate-y-4 group-hover:translate-y-0 
                               transition-transform border-2 border-neon-pink/50"
                    >
                      Conocer a {character.name} 💕
                    </motion.button>
                  </div>
                  
                  {/* Efecto de brillo animado */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 5,
                    }}
                  />
                </div>

                {/* Character info con gradiente erótico */}
                <div className="p-4 bg-gradient-to-br from-neon-magenta/20 via-primary-darker to-primary-dark border-t border-neon-pink/30">
                  <h3 className="font-bold text-xl text-white mb-2">{character.name}</h3>
                  <div className="inline-block px-4 py-1.5 rounded-full bg-erotic-gradient border border-neon-pink/50 shadow-lg shadow-neon-pink/30">
                    <span className="text-sm text-white font-bold">{character.type}</span>
                  </div>
                </div>

                {/* Glow effect intenso */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                     style={{ boxShadow: '0 0 50px rgba(255, 0, 110, 0.8), 0 0 80px rgba(255, 10, 120, 0.5), 0 0 100px rgba(199, 125, 255, 0.3)' }} />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Info text mejorado */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-12 max-w-3xl mx-auto px-4"
      >
        <p className="text-gray-300 text-lg mb-3">
          <span className="text-neon-pink font-semibold">Cientos de personajes únicos</span> esperan por ti.
        </p>
        <p className="text-gray-400">
          Cada una con personalidad profunda, memorias propias y deseos que solo tú descubrirás. 
          Crea escenas íntimas, aventuras apasionadas o historias románticas sin límites.
        </p>
      </motion.div>
    </section>
  );
}
