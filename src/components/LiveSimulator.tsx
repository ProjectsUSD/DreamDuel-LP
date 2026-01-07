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
    uploadPhoto: string;
    selectStyle: string;
  };
}

export default function LiveSimulator({ translations }: LiveSimulatorProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [generatedResult, setGeneratedResult] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(false);

  // Resultados de ejemplo para la demo
  const resultExamples = [
    "✨ Tu imagen ha sido transformada en un impresionante estilo anime con detalles sensuales y colores vibrantes. La expresión cautivadora y las proporciones realzadas crean una obra de arte única.",
    "🎨 Creación completada: Una caricatura pin-up clásica con curvas elegantes y pose sugerente. El estilo retro combinado con un toque moderno hacen de esta pieza algo verdaderamente especial.",
    "💫 Resultado: Una interpretación 3D hiperrealista con iluminación dramática. Los detalles sensuales han sido perfeccionados mientras se mantiene la esencia de la imagen original.",
    "🌟 Arte generado: Una versión artística sensual con trazos suaves y atmósfera íntima. Los tonos cálidos y la composición crean una pieza visualmente cautivadora.",
    "🔥 Transformación completa: Un estilo de fantasía épico con elementos místicos y una pose poderosa. La combinación de realismo y elementos fantásticos resulta en una imagen impactante."
  ];

  const handleTagClick = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else if (selectedTags.length < 2) {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const generateResult = () => {
    if (!uploadedImage || selectedTags.length === 0) return;
    
    setIsGenerating(true);
    setGeneratedResult('');

    setTimeout(() => {
      const result = resultExamples[Math.floor(Math.random() * resultExamples.length)];
      const styleInfo = selectedTags.length > 0 
        ? `\n\n🎯 Estilos aplicados: ${selectedTags.join(' + ')}`
        : '';
      
      setGeneratedResult(result + styleInfo);
      setIsGenerating(false);
    }, 2500);
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-neon-pink/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-neon-violet/20 rounded-full blur-3xl animate-pulse" 
             style={{ animationDelay: '1s' }} />
      </div>

      {/* Floating 3D Girls removed - starting from scratch */}

      {/* Floating 3D characters - Simulator Section */}
      {/* Top right - floating-3 */}
      <motion.div
        className="absolute top-[8%] right-[5%] w-32 sm:w-44 md:w-64 h-44 sm:h-56 md:h-80 opacity-75 pointer-events-none z-10"
        animate={{
          y: [0, -15, 0],
          rotate: [-1, 2, -1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/images/floating-3d/floating-3.png"
          alt="Floating character"
          fill
          className="object-contain"
        />
      </motion.div>

      {/* Bottom left - floating-10 */}
      <motion.div
        className="absolute bottom-[3%] left-[-5%] w-52 sm:w-64 md:w-96 h-64 sm:h-80 md:h-[500px] opacity-80 pointer-events-none z-10"
        animate={{
          y: [0, -18, 0],
          rotate: [2, -1, 2],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/images/floating-3d/floating-10.png"
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
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gradient">
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
          <div className="p-4 md:p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-primary-darker to-primary-dark 
                        border border-neon-violet/30 shadow-2xl overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-neon-pink/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-neon-violet/20 rounded-full blur-3xl" />

            <div className="relative z-10">
              {/* Upload photo section */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Wand2 className="w-5 h-5 text-neon-violet" />
                  {translations.uploadPhoto}
                </h3>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setUploadedImage(true)}
                  className={`relative border-2 border-dashed rounded-xl p-8 cursor-pointer transition-all duration-300
                            ${uploadedImage 
                              ? 'border-neon-pink bg-neon-pink/10' 
                              : 'border-white/20 hover:border-neon-pink/50 bg-white/5'}`}
                >
                  {!uploadedImage ? (
                    <div className="text-center">
                      <Sparkles className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                      <p className="text-gray-300 font-medium mb-1">Haz clic para subir una foto</p>
                      <p className="text-sm text-gray-500">JPG, PNG hasta 10MB</p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-neon-gradient mx-auto mb-3 flex items-center justify-center">
                        <Sparkles className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-neon-pink font-semibold">✓ Foto cargada correctamente</p>
                      <p className="text-sm text-gray-400 mt-1">Lista para transformar</p>
                    </div>
                  )}
                </motion.div>
              </div>

              {/* Style selection */}
              <div className="mb-6 md:mb-8">
                <h3 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-neon-pink" />
                  {translations.selectStyle}
                </h3>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
                  {translations.tags.map((tag, index) => {
                    const isSelected = selectedTags.includes(tag);
                    return (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleTagClick(tag)}
                        disabled={!uploadedImage}
                        className={`px-3 md:px-4 py-2 md:py-3 rounded-lg md:rounded-xl text-xs md:text-base font-medium transition-all duration-300
                                  ${isSelected 
                                    ? 'bg-neon-gradient text-white shadow-lg shadow-neon-pink/30' 
                                    : uploadedImage
                                      ? 'bg-white/5 text-gray-300 border border-white/10 hover:border-neon-pink/50'
                                      : 'bg-gray-800/50 text-gray-600 cursor-not-allowed'}`}
                      >
                        {tag}
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Selected styles indicator */}
              <div className="mb-6 min-h-[40px]">
                {selectedTags.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-sm text-gray-400"
                  >
                    <span>Estilos seleccionados:</span>
                    <div className="flex gap-2">
                      {selectedTags.map((tag, index) => (
                        <span key={index} className="text-neon-pink font-medium">
                          {tag}{index < selectedTags.length - 1 ? ' + ' : ''}
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
                onClick={generateResult}
                disabled={!uploadedImage || selectedTags.length === 0 || isGenerating}
                className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300
                          flex items-center justify-center gap-2
                          ${uploadedImage && selectedTags.length > 0 && !isGenerating
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
                {generatedResult && (
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
                            {generatedResult}
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
                              onClick={generateResult}
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
