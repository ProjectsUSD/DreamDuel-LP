'use client';

import { motion } from 'framer-motion';
import { Mail, CheckCircle2, Sparkles, Users, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

interface WaitlistSectionProps {
  translations: {
    badge: string;
    title: string;
    subtitle: string;
    emailPlaceholder: string;
    ctaButton: string;
    successTitle: string;
    successMessage: string;
    loading: string;
    disclaimer: string;
    errorEmail: string;
    errorInvalidEmail: string;
    freeAccess: string;
    priorityAccess: string;
    stats: {
      users: string;
      waitTime: string;
    };
  };
}

export default function WaitlistSection({ translations }: WaitlistSectionProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [waitlistCount, setWaitlistCount] = useState(902);

  // Configuración: cambiar a true cuando el backend esté listo
  const USE_REAL_API = process.env.NEXT_PUBLIC_USE_REAL_API === 'true';
  const WAITLIST_API_URL = process.env.NEXT_PUBLIC_WAITLIST_API_URL || '/api/waitlist';

  // Incrementar contador de forma aleatoria cada 45 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      // Incremento aleatorio entre 1 y 5
      const increment = Math.floor(Math.random() * 5) + 1;
      setWaitlistCount(prev => prev + increment);
    }, 45000); // 45 segundos

    return () => clearInterval(interval);
  }, []);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setError(translations.errorEmail);
      return;
    }

    if (!validateEmail(email)) {
      setError(translations.errorInvalidEmail);
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      if (USE_REAL_API) {
        // ===== MODO PRODUCCIÓN: Llamada real al backend =====
        const response = await fetch(WAITLIST_API_URL, {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
            email: email.trim(),
            source: 'landing_page',
            timestamp: new Date().toISOString(),
            // Puedes agregar más datos:
            // referrer: document.referrer,
            // utm_source: searchParams.get('utm_source'),
          }),
        });

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.message || `Error ${response.status}`);
        }

        // const data = await response.json();
        // console.log('Waitlist response:', data);
      } else {
        // ===== MODO DEMO: Simulación =====
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Demo: Email guardado ->', email);
      }

      setIsSuccess(true);
      setEmail('');
      
      // Resetear después de 5 segundos
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);

    } catch (err) {
      console.error('Error joining waitlist:', err);
      setError(err instanceof Error ? err.message : 'Error al unirse a la lista. Intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 
                     border border-primary/30 mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">{translations.badge}</span>
          </motion.div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gradient">
            {translations.title}
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {translations.subtitle}
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center gap-6 md:gap-12 mb-10">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <motion.span 
                key={waitlistCount}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-white font-semibold"
              >
                {waitlistCount} {translations.stats.users.includes('lista') || translations.stats.users.includes('list') 
                  ? translations.stats.users.split(' ')[1] + ' ' + translations.stats.users.split(' ')[2]
                  : 'on list'}
              </motion.span>
            </div>
            <div className="w-px h-6 bg-white/20" />
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary-glow" />
              <span className="text-white font-semibold">{translations.stats.waitTime}</span>
            </div>
          </div>

          {/* Waitlist Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-xl mx-auto"
          >
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-1">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setError(null);
                        }}
                        placeholder={translations.emailPlaceholder}
                        disabled={isSubmitting}
                        className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl
                                 text-white placeholder-gray-500 text-base
                                 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20
                                 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                    </div>
                    
                    <motion.button
                      type="submit"
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      disabled={isSubmitting}
                      className={`px-8 py-4 rounded-2xl font-semibold text-base transition-all duration-300
                                whitespace-nowrap flex items-center justify-center gap-2
                                ${!isSubmitting
                                  ? 'bg-primary-gradient text-white shadow-lg shadow-primary/30 hover:shadow-primary/50' 
                                  : 'bg-gray-800/50 text-gray-500 cursor-not-allowed'}`}
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          >
                            <Sparkles className="w-5 h-5" />
                          </motion.div>
                          <span>{translations.loading}</span>
                        </>
                      ) : (
                        <>
                          <Mail className="w-5 h-5" />
                          <span>{translations.ctaButton}</span>
                        </>
                      )}
                    </motion.button>
                  </div>

                  {/* Error Message */}
                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm mt-2 text-left"
                    >
                      {error}
                    </motion.p>
                  )}
                </div>

                <p className="text-gray-500 text-xs">
                  {translations.disclaimer}
                </p>
              </form>
            ) : (
              // Success State
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-3xl bg-gradient-to-br from-primary/20 to-primary-glow/20 
                         border border-primary/30"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                >
                  <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-white mb-2">
                  {translations.successTitle}
                </h3>
                <p className="text-gray-300">
                  {translations.successMessage}
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex items-center justify-center gap-6 text-gray-400 text-sm"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>{translations.freeAccess}</span>
            </div>
            <div className="w-px h-4 bg-white/20 hidden sm:block" />
            <div className="flex items-center gap-2 hidden sm:flex">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>{translations.priorityAccess}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
