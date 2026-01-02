'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Wand2 } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

interface LiveSimulatorProps {
  translations: {
    title: string;
    subtitle: string;
    tags: string[];
    generate: string;
    result: string;
    continueStory: string;
    generateAnother: string;
  };
}

export default function LiveSimulator({ translations }: LiveSimulatorProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [generatedStory, setGeneratedStory] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  // Plantillas de historias más largas y variadas
  const storyTemplates = [
    {
      intro: 'La noche cae sobre {1}. ',
      body: 'Tus ojos se encuentran con los de ella bajo la tenue luz. Sus labios se curvan en una sonrisa mientras susurra: "He esperado este momento de {0}..." ',
      conclusion: 'La tensión es palpable. Tu corazón late con fuerza mientras ella se acerca, sus dedos rozando tu mejilla. La historia apenas comienza... 🌙✨'
    },
    {
      intro: 'El aroma de {2} llena el aire en {1}. ',
      body: 'Ella te mira con ojos intensos, llenos de {0} y deseo contenido. "¿Sabes por qué te he traído aquí?", pregunta con voz seductora. ',
      conclusion: 'El tiempo parece detenerse. Cada segundo a su lado intensifica la atracción magnética entre ustedes. ¿Qué sucederá después? 💕'
    },
    {
      intro: 'En la intimidad de {1}, solo están ustedes dos. ',
      body: 'Sus manos encuentran las tuyas. "Esta noche será especial", murmura con {0} en su voz. El ambiente de {2} los envuelve completamente. ',
      conclusion: 'La química es innegable. Tus fantasías más profundas están a punto de hacerse realidad... 🔥'
    },
    {
      intro: 'Bajo el cielo estrellado de {1}, la encuentras esperándote. ',
      body: '"Sabía que vendrías", dice ella con {0} en su mirada. El {2} hace que todo sea perfecto. Se acerca más, eliminando cualquier distancia entre ustedes. ',
      conclusion: 'Tu respiración se acelera. Este es el momento que ambos han estado esperando. La pasión apenas comienza a despertar... 💋'
    },
    {
      intro: 'El escenario es {1}, perfecto para lo que está por venir. ',
      body: 'Ella te guía con confianza, sus movimientos llenos de {0}. "Déjame mostrarte lo que he planeado", susurra al oído mientras {2} los rodea. ',
      conclusion: 'Cada instante es más intenso que el anterior. La frontera entre fantasía y realidad se desvanece. Esto es solo el principio... 😈✨'
    },
    {
      intro: 'Te encuentras en {1}, justo donde ella te pidió. ',
      body: 'Sus ojos brillan con {0} mientras se quita lentamente... su chaqueta, revelando su outfit perfecto. "¿Te gusta lo que ves?", pregunta provocadora. El {2} añade magia al momento. ',
      conclusion: 'Tu corazón late desenfrenadamente. Todo lo que has imaginado está aquí, real y tangible. ¿Estás listo para más? 🌸💕'
    }
  ];

  const handleTagClick = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else if (selectedTags.length < 3) {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const generateStory = () => {
    if (selectedTags.length === 0) return;
    
    setIsGenerating(true);
    setGeneratedStory('');

    setTimeout(() => {
      const template = storyTemplates[Math.floor(Math.random() * storyTemplates.length)];
      
      // Reemplazar placeholders con los tags seleccionados
      let intro = template.intro;
      let body = template.body;
      let conclusion = template.conclusion;
      
      selectedTags.forEach((tag, index) => {
        const placeholder = `{${index}}`;
        intro = intro.replace(placeholder, tag.toLowerCase());
        body = body.replace(new RegExp(placeholder.replace(/[{}]/g, '\\$&'), 'g'), tag.toLowerCase());
        conclusion = conclusion.replace(placeholder, tag.toLowerCase());
      });
      
      const fullStory = intro + body + conclusion;
      setGeneratedStory(fullStory);
      setIsGenerating(false);
    }, 2000); // 2 segundos para dar sensación de "procesamiento IA"
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-neon-pink/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-neon-violet/20 rounded-full blur-3xl animate-pulse" 
             style={{ animationDelay: '1s' }} />
      </div>

      {/* Floating 3D Girls - Simulator Section */}
      <motion.div
        className="hidden md:block absolute top-[5%] left-[1%] w-56 md:w-72 h-80 md:h-96 opacity-38 pointer-events-none"
        animate={{
          y: [0, -18, 0],
          rotate: [-2, 1, -2],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/images/floating-3d/floating-5.png"
          alt="Floating character"
          fill
          className="object-contain"
        />
      </motion.div>

      <motion.div
        className="hidden md:block absolute top-[15%] right-[2%] w-60 md:w-76 h-[320px] md:h-[400px] opacity-42 pointer-events-none"
        animate={{
          y: [0, 22, 0],
          rotate: [3, -1, 3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/images/floating-3d/floating-6.png"
          alt="Floating character"
          fill
          className="object-contain"
        />
      </motion.div>

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-violet/10 
                       border border-neon-violet/30 mb-4">
            <Wand2 className="w-4 h-4 text-neon-violet" />
            <span className="text-sm text-neon-violet font-medium">Prueba el Generador IA</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            {translations.title}
          </h2>
          <p className="text-xl text-gray-300">
            {translations.subtitle}
          </p>
        </motion.div>

        {/* Interactive simulator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary-darker to-primary-dark 
                        border border-neon-violet/30 shadow-2xl overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-neon-pink/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-neon-violet/20 rounded-full blur-3xl" />

            <div className="relative z-10">
              {/* Tag selection */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-neon-pink" />
                  Selecciona 3 elementos (máx.)
                </h3>
                
                <div className="flex flex-wrap gap-3">
                  {translations.tags.map((tag, index) => {
                    const isSelected = selectedTags.includes(tag);
                    return (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleTagClick(tag)}
                        className={`px-6 py-3 rounded-xl font-medium transition-all duration-300
                                  ${isSelected 
                                    ? 'bg-neon-gradient text-white shadow-lg shadow-neon-pink/30' 
                                    : 'bg-white/5 text-gray-300 border border-white/10 hover:border-neon-pink/50'}`}
                      >
                        {tag}
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Selected tags indicator */}
              <div className="mb-6 min-h-[40px]">
                {selectedTags.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-sm text-gray-400"
                  >
                    <span>Seleccionados:</span>
                    <div className="flex gap-2">
                      {selectedTags.map((tag, index) => (
                        <span key={index} className="text-neon-pink font-medium">
                          {tag}{index < selectedTags.length - 1 ? ',' : ''}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Generate button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={generateStory}
                disabled={selectedTags.length === 0 || isGenerating}
                className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300
                          flex items-center justify-center gap-2
                          ${selectedTags.length > 0 && !isGenerating
                            ? 'bg-neon-gradient text-white shadow-lg shadow-neon-pink/30 hover:shadow-neon-pink/50' 
                            : 'bg-gray-800/50 text-gray-500 cursor-not-allowed'}`}
              >
                {isGenerating ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    >
                      <Wand2 className="w-5 h-5" />
                    </motion.div>
                    Generando...
                  </>
                ) : (
                  <>
                    <Wand2 className="w-5 h-5" />
                    {translations.generate}
                  </>
                )}
              </motion.button>

              {/* Generated result - Mejorado */}
              <AnimatePresence mode="wait">
                {generatedStory && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    className="mt-8 p-8 rounded-2xl bg-gradient-to-br from-neon-pink/20 via-neon-violet/20 to-neon-purple/20
                             border-2 border-neon-pink/40 relative overflow-hidden"
                  >
                    {/* Efecto de brillo de fondo */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse" />
                    
                    <div className="relative z-10">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-neon-gradient flex items-center justify-center
                                        shadow-lg shadow-neon-pink/50">
                            <Sparkles className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-neon-pink font-semibold mb-3 flex items-center gap-2">
                            {translations.result}
                            <span className="px-2 py-0.5 rounded-full bg-neon-pink/20 text-xs">IA Generado</span>
                          </p>
                          <p className="text-white text-base leading-relaxed mb-4">
                            {generatedStory}
                          </p>
                          
                          {/* Botones de acción */}
                          <div className="flex gap-3 mt-4">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-6 py-2 rounded-lg bg-neon-gradient text-white font-semibold text-sm
                                       shadow-lg shadow-neon-pink/50 hover:shadow-neon-pink/70 transition-all"
                            >
                              {translations.continueStory}
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={generateStory}
                              className="px-6 py-2 rounded-lg bg-white/10 border border-white/20 text-white font-medium text-sm
                                       hover:bg-white/20 transition-all"
                            >
                              {translations.generateAnother}
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Decoración */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-neon-pink/20 rounded-full blur-3xl" />
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-neon-violet/20 rounded-full blur-3xl" />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Info mejorado */}
              <p className="text-center text-sm text-gray-400 mt-6 italic">
                💡 La IA real genera narrativas completas de 1000+ palabras con diálogos, descripciones detalladas y múltiples finales.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
