'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldAlert } from 'lucide-react';
import { useState, useEffect } from 'react';

interface AgeVerificationModalProps {
  locale?: string;
  translations: {
    title: string;
    message: string;
    confirm: string;
    decline: string;
    disclaimer: string;
  };
}

export default function AgeVerificationModal({ translations }: AgeVerificationModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    // Verificar si el usuario ya fue verificado en esta sesión
    const verified = sessionStorage.getItem('ageVerified');
    if (!verified) {
      setIsOpen(true);
    } else {
      setIsVerified(true);
    }
  }, []);

  const handleConfirm = () => {
    sessionStorage.setItem('ageVerified', 'true');
    setIsVerified(true);
    setIsOpen(false);
  };

  const handleDecline = () => {
    // Redirigir a una página segura
    window.location.href = 'https://www.google.com';
  };

  return (
    <AnimatePresence>
      {isOpen && !isVerified && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop con blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            onClick={handleDecline}
          />

          {/* Modal Card */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-md"
          >
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-darker via-primary-dark to-primary-darker border border-neon-violet/30 shadow-2xl glow-violet">
              {/* Decorative gradient overlay */}
              <div className="absolute top-0 left-0 w-full h-1 bg-neon-gradient" />
              
              <div className="p-8">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  className="flex justify-center mb-6"
                >
                  <div className="p-4 rounded-full bg-neon-pink/10 border border-neon-pink/30">
                    <ShieldAlert className="w-12 h-12 text-neon-pink" />
                  </div>
                </motion.div>

                {/* Title */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl font-bold text-center mb-4 text-gradient"
                >
                  {translations.title}
                </motion.h2>

                {/* Message */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-300 text-center mb-6 leading-relaxed"
                >
                  {translations.message}
                </motion.p>

                {/* Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-3"
                >
                  <button
                    onClick={handleConfirm}
                    className="w-full py-4 px-6 rounded-xl bg-neon-gradient text-white font-semibold text-lg 
                             hover:shadow-lg hover:shadow-neon-pink/50 transition-all duration-300 
                             transform hover:scale-105 active:scale-95"
                  >
                    {translations.confirm}
                  </button>

                  <button
                    onClick={handleDecline}
                    className="w-full py-4 px-6 rounded-xl bg-gray-800/50 text-gray-300 font-medium
                             hover:bg-gray-700/50 transition-all duration-300 border border-gray-700"
                  >
                    {translations.decline}
                  </button>
                </motion.div>

                {/* Disclaimer */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-xs text-gray-500 text-center mt-6 italic"
                >
                  {translations.disclaimer}
                </motion.p>
              </div>

              {/* Decorative particles */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-neon-pink/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-neon-violet/20 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
