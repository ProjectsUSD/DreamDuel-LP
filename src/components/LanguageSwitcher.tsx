'use client';

import { motion } from 'framer-motion';
import { Languages } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  
  const currentLocale = pathname.split('/')[1] || 'es';
  
  const languages = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
  ];

  const handleLanguageChange = (locale: string) => {
    const newPath = pathname.replace(/^\/(es|en)/, `/${locale}`);
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="fixed top-6 right-6 z-40">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 backdrop-blur-md 
                   border border-white/10 hover:border-neon-pink/50 transition-all duration-300"
        >
          <Languages className="w-4 h-4 text-neon-pink" />
          <span className="text-white font-medium">
            {languages.find(l => l.code === currentLocale)?.flag}
          </span>
        </motion.button>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full right-0 mt-2 min-w-[150px] rounded-xl bg-primary-darker 
                     border border-white/10 shadow-2xl overflow-hidden"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full px-4 py-3 flex items-center gap-3 hover:bg-neon-pink/10 
                          transition-colors duration-200 ${
                            currentLocale === lang.code ? 'bg-neon-pink/20 text-neon-pink' : 'text-gray-300'
                          }`}
              >
                <span className="text-xl">{lang.flag}</span>
                <span className="font-medium">{lang.name}</span>
              </button>
            ))}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
