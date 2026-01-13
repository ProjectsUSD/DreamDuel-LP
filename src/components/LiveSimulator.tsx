'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Wand2, ImageIcon } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

interface LiveSimulatorProps {
  translations: {
    title: string;
    subtitle: string;
    placeholder: string;
    generate: string;
    result: string;
    continueStory: string;
    generateAnother: string;
    inputLabel: string;
    generating: string;
    chatMode: string;
  };
}

export default function LiveSimulator({ translations }: LiveSimulatorProps) {
  const [inputText, setInputText] = useState('');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentPrompt, setCurrentPrompt] = useState('');
  const [error, setError] = useState<string | null>(null);

  // Ejemplos de imágenes generadas (placeholder hasta conectar backend)
  const placeholderImages = [
    '/images/floating-3d/floating-1.png',
    '/images/floating-3d/floating-3.png',
    '/images/floating-3d/floating-4.png',
    '/images/floating-3d/floating-5.png',
  ];

  // Configuración: cambiar a true cuando el backend esté listo
  const USE_REAL_API = process.env.NEXT_PUBLIC_USE_REAL_API === 'true';
  const API_URL = process.env.NEXT_PUBLIC_API_URL || '/api/generate-fantasy';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || isGenerating) return;

    setCurrentPrompt(inputText);
    setIsGenerating(true);
    setGeneratedImage(null);
    setError(null);

    try {
      if (USE_REAL_API) {
        // ===== MODO PRODUCCIÓN: Llamada real al backend =====
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            // Agregar headers adicionales si es necesario (ej: Authorization)
            // 'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify({ 
            prompt: inputText,
            // Puedes agregar más parámetros según tu API:
            // userId: user?.id,
            // style: 'anime',
            // nsfw: true,
          }),
        });

        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        
        // Ajusta según la estructura de respuesta de tu API:
        // Opción 1: Si devuelve { imageUrl: "https://..." }
        setGeneratedImage(data.imageUrl || data.image || data.url);
        
        // Opción 2: Si devuelve array de escenas { scenes: [{imageUrl: "..."}, ...] }
        // setGeneratedImage(data.scenes?.[0]?.imageUrl);
        
        // Opción 3: Si devuelve base64
        // setGeneratedImage(`data:image/png;base64,${data.imageBase64}`);
        
      } else {
        // ===== MODO DEMO: Simulación con imágenes placeholder =====
        await new Promise(resolve => setTimeout(resolve, 2000));
        const randomImage = placeholderImages[Math.floor(Math.random() * placeholderImages.length)];
        setGeneratedImage(randomImage);
      }
    } catch (err) {
      console.error('Error generating fantasy:', err);
      setError(err instanceof Error ? err.message : 'Error al generar la fantasía. Intenta nuevamente.');
      
      // En caso de error, mostrar imagen placeholder en demo
      if (!USE_REAL_API) {
        const randomImage = placeholderImages[Math.floor(Math.random() * placeholderImages.length)];
        setGeneratedImage(randomImage);
      }
    } finally {
      setIsGenerating(false);
    }
  };

  const handleNewGeneration = () => {
    setGeneratedImage(null);
    setInputText('');
    setCurrentPrompt('');
    setError(null);
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-neon-pink/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-neon-violet/20 rounded-full blur-3xl animate-pulse" 
             style={{ animationDelay: '1s' }} />
      </div>

      {/* Floating 3D characters - Simulator Section */}
      {/* Top right - floating-4 (Actor teatral) */}
      <motion.div
        className="absolute top-[8%] right-[5%] w-36 sm:w-48 md:w-72 h-48 sm:h-60 md:h-96 opacity-80 pointer-events-none z-10"
        animate={{
          y: [0, -15, 0],
          rotate: [-1, 2, -1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/images/floating-3d/floating-4.png"
          alt="Floating character"
          fill
          className="object-contain"
        />
      </motion.div>

      {/* Bottom left - floating-5 (Heroína de acción) */}
      <motion.div
        className="absolute bottom-[3%] left-[-5%] w-52 sm:w-64 md:w-96 h-64 sm:h-80 md:h-[500px] opacity-80 pointer-events-none z-10"
        animate={{
          y: [0, -18, 0],
          rotate: [2, -1, 2],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/images/floating-3d/floating-5.png"
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
            <ImageIcon className="w-4 h-4 text-neon-violet" />
            <span className="text-sm text-neon-violet font-medium">Generador de Imágenes</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gradient">
            {translations.title}
          </h2>
          <p className="text-xl text-gray-300">
            {translations.subtitle}
          </p>
        </motion.div>

        {/* Image Generator Interface */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-3xl bg-gradient-to-br from-primary-darker to-primary-dark 
                        border border-neon-violet/30 shadow-2xl overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-neon-pink/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-neon-violet/20 rounded-full blur-3xl" />

            <div className="relative z-10 p-6 md:p-8">
              {/* Input Form */}
              <form onSubmit={handleSubmit} className="mb-6">
                <div className="space-y-4">
                  <div className="relative">
                    <input
                      type="text"
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      placeholder={translations.placeholder}
                      disabled={isGenerating}
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl
                               text-white placeholder-gray-500 text-lg
                               focus:outline-none focus:border-neon-violet/50 focus:ring-2 focus:ring-neon-violet/20
                               transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                    <ImageIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  </div>
                  
                  <motion.button
                    type="submit"
                    whileHover={{ scale: isGenerating ? 1 : 1.02 }}
                    whileTap={{ scale: isGenerating ? 1 : 0.98 }}
                    disabled={!inputText.trim() || isGenerating}
                    className={`w-full px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300
                              flex items-center justify-center gap-3
                              ${inputText.trim() && !isGenerating
                                ? 'bg-neon-gradient text-white shadow-lg shadow-neon-pink/30 hover:shadow-neon-pink/50' 
                                : 'bg-gray-800/50 text-gray-500 cursor-not-allowed'}`}
                  >
                    {isGenerating ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        >
                          <Sparkles className="w-5 h-5" />
                        </motion.div>
                        <span>{translations.generating}</span>
                      </>
                    ) : (
                      <>
                        <Wand2 className="w-5 h-5" />
                        <span>{translations.generate}</span>
                      </>
                    )}
                  </motion.button>
                </div>
              </form>

              {/* Error Display */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 p-4 bg-red-500/10 border border-red-500/30 rounded-xl"
                >
                  <p className="text-red-400 text-sm">{error}</p>
                </motion.div>
              )}

              {/* Generated Image Display */}
              <AnimatePresence mode="wait">
                {generatedImage ? (
                  <motion.div
                    key="image"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    {/* Prompt Display */}
                    <div className="bg-white/5 border border-white/10 px-4 py-3 rounded-xl">
                      <p className="text-sm text-gray-400 mb-1">Prompt:</p>
                      <p className="text-white">{currentPrompt}</p>
                    </div>

                    {/* Image Container */}
                    <div className="relative w-full aspect-square rounded-2xl overflow-hidden border-2 border-neon-violet/30 shadow-2xl">
                      <Image
                        src={generatedImage}
                        alt="Generated image"
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* New Generation Button */}
                    <motion.button
                      onClick={handleNewGeneration}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-6 py-3 rounded-xl bg-white/5 border border-white/10
                               text-white font-medium hover:bg-white/10 transition-all duration-300
                               flex items-center justify-center gap-2"
                    >
                      <Wand2 className="w-5 h-5" />
                      <span>{translations.generateAnother}</span>
                    </motion.button>
                  </motion.div>
                ) : !isGenerating ? (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-[400px] flex items-center justify-center text-center border-2 border-dashed border-white/10 rounded-2xl"
                  >
                    <div>
                      <ImageIcon className="w-16 h-16 text-neon-violet/50 mx-auto mb-4" />
                      <p className="text-gray-400 text-lg mb-2">Tu imagen aparecerá aquí</p>
                      <p className="text-gray-500 text-sm max-w-md mx-auto">
                        Escribe una descripción y genera tu imagen
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="generating"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-[400px] flex items-center justify-center border-2 border-dashed border-neon-violet/30 rounded-2xl bg-neon-violet/5"
                  >
                    <div className="text-center">
                      <motion.div
                        animate={{ 
                          scale: [1, 1.2, 1],
                          rotate: [0, 180, 360]
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        className="mb-4"
                      >
                        <Sparkles className="w-12 h-12 text-neon-violet mx-auto" />
                      </motion.div>
                      <p className="text-white text-lg font-medium mb-2">{translations.generating}</p>
                      <p className="text-gray-400 text-sm">Creando tu imagen...</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
