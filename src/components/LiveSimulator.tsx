'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Upload, ImageIcon, X } from 'lucide-react';
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [generatedStory, setGeneratedStory] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
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

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedImage || isGenerating) return;

    setIsGenerating(true);
    setGeneratedStory(null);
    setError(null);

    try {
      if (USE_REAL_API) {
        // ===== MODO PRODUCCIÓN: Llamada real al backend =====
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
            image: selectedImage,
            // Puedes agregar más parámetros según tu API
          }),
        });

        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        setGeneratedStory(data.imageUrl || data.image || data.url);
        
      } else {
        // ===== MODO DEMO: Simulación con imágenes placeholder =====
        await new Promise(resolve => setTimeout(resolve, 2000));
        const randomImage = placeholderImages[Math.floor(Math.random() * placeholderImages.length)];
        setGeneratedStory(randomImage);
      }
    } catch (err) {
      console.error('Error generating fantasy:', err);
      setError(err instanceof Error ? err.message : 'Error al generar la fantasía. Intenta nuevamente.');
      
      // En caso de error, mostrar imagen placeholder en demo
      if (!USE_REAL_API) {
        const randomImage = placeholderImages[Math.floor(Math.random() * placeholderImages.length)];
        setGeneratedStory(randomImage);
      }
    } finally {
      setIsGenerating(false);
    }
  };

  const handleNewGeneration = () => {
    setGeneratedStory(null);
    setSelectedImage(null);
    setError(null);
  };

  return (
    <section id="generador" className="py-20 px-4 relative overflow-hidden bg-bg-card">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-primary-glow/10 rounded-full blur-3xl" 
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 
                       border border-primary/30 mb-4">
            <ImageIcon className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Generador de Fantasías</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-text-main">
            {translations.title}
          </h2>
          <p className="text-xl text-text-muted">
            {translations.subtitle}
          </p>
        </motion.div>

        {/* Image Upload & Generator Interface */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-3xl bg-bg-deep border border-white/5 shadow-2xl overflow-hidden">
            <div className="relative z-10 p-6 md:p-8">
              {/* Upload Form */}
              <form onSubmit={handleSubmit} className="mb-6">
                <div className="space-y-4">
                  {/* Image Upload Area */}
                  <div className="relative">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageSelect}
                      disabled={isGenerating}
                      className="hidden"
                      id="image-upload"
                    />
                    <label
                      htmlFor="image-upload"
                      className={`block w-full p-8 border-2 border-dashed rounded-2xl cursor-pointer
                               transition-all duration-300 ${
                                 selectedImage
                                   ? 'border-primary/50 bg-primary/5'
                                   : 'border-white/10 hover:border-primary/30 bg-white/5'
                               } ${isGenerating ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      {selectedImage ? (
                        <div className="relative">
                          <div className="relative w-full h-64 rounded-xl overflow-hidden mb-4">
                            <Image
                              src={selectedImage}
                              alt="Imagen seleccionada"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex items-center justify-center gap-2 text-primary">
                            <ImageIcon className="w-5 h-5" />
                            <span className="text-sm font-medium">Imagen seleccionada - Click para cambiar</span>
                          </div>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              setSelectedImage(null);
                            }}
                            className="absolute top-2 right-2 p-2 bg-bg-deep/80 rounded-full hover:bg-accent-hot/20 transition-colors"
                          >
                            <X className="w-4 h-4 text-text-main" />
                          </button>
                        </div>
                      ) : (
                        <div className="text-center">
                          <Upload className="w-12 h-12 text-primary mx-auto mb-4" />
                          <p className="text-text-main font-medium mb-2">
                            Sube una imagen para generar tu fantasía
                          </p>
                          <p className="text-text-muted text-sm">
                            PNG, JPG, WEBP hasta 10MB
                          </p>
                        </div>
                      )}
                    </label>
                  </div>
                  
                  {/* Generate Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: isGenerating || !selectedImage ? 1 : 1.02 }}
                    whileTap={{ scale: isGenerating || !selectedImage ? 1 : 0.98 }}
                    disabled={!selectedImage || isGenerating}
                    className={`w-full px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300
                              flex items-center justify-center gap-3
                              ${selectedImage && !isGenerating
                                ? 'bg-primary text-white shadow-lg shadow-primary-glow/50 hover:shadow-primary-glow/70' 
                                : 'bg-bg-card text-text-muted cursor-not-allowed'}`}
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
                        <Sparkles className="w-5 h-5" />
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
                  className="mb-4 p-4 bg-accent-hot/10 border border-accent-hot/30 rounded-xl"
                >
                  <p className="text-accent-hot text-sm">{error}</p>
                </motion.div>
              )}

              {/* Generated Story Display */}
              <AnimatePresence mode="wait">
                {generatedStory ? (
                  <motion.div
                    key="story"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    {/* Result Label */}
                    <div className="bg-bg-card border border-white/10 px-4 py-3 rounded-xl">
                      <p className="text-sm text-text-muted mb-1">Resultado:</p>
                      <p className="text-text-main font-medium">Historia generada con IA</p>
                    </div>

                    {/* Story Image Container */}
                    <div className="relative w-full aspect-square rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary-glow/20">
                      <Image
                        src={generatedStory}
                        alt="Historia generada"
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* New Generation Button */}
                    <motion.button
                      onClick={handleNewGeneration}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-6 py-3 rounded-xl bg-bg-card border border-white/10
                               text-text-main font-medium hover:bg-bg-card/80 hover:border-primary/50 
                               transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Upload className="w-5 h-5" />
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
                      <ImageIcon className="w-16 h-16 text-primary/50 mx-auto mb-4" />
                      <p className="text-text-main text-lg mb-2">Tu historia aparecerá aquí</p>
                      <p className="text-text-muted text-sm max-w-md mx-auto">
                        Sube una imagen y genera tu fantasía visual
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="generating"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-[400px] flex items-center justify-center border-2 border-dashed border-primary/30 rounded-2xl bg-primary/5"
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
                        <Sparkles className="w-12 h-12 text-primary mx-auto" />
                      </motion.div>
                      <p className="text-text-main text-lg font-medium mb-2">{translations.generating}</p>
                      <p className="text-text-muted text-sm">Creando tu historia...</p>
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
