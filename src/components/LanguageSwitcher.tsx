'use client';

import { motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  
  const currentLocale = pathname.split('/')[1] || 'es';
  
  const languages = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
  ];

  const toggleLanguage = () => {
    const newLocale = currentLocale === 'es' ? 'en' : 'es';
    const newPath = pathname.replace(/^\/(es|en)/, `/${newLocale}`);
    router.push(newPath);
  };

  const currentLang = languages.find(l => l.code === currentLocale);

  return (
    <div className="relative group">
      <motion.button
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleLanguage}
        className="relative flex items-center justify-center px-3 py-2 rounded-xl
                 bg-gradient-to-r from-primary/10 to-primary-glow/10 backdrop-blur-md 
                 border border-primary/30 hover:border-primary
                 shadow-lg shadow-primary/20 hover:shadow-primary/40
                 transition-all duration-300 overflow-hidden"
      >
        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-glow/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        />
        
        {/* Content - Solo bandera */}
        <span className="text-2xl leading-none relative z-10 drop-shadow-lg">
          {currentLang?.flag}
        </span>
      </motion.button>
      
      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileHover={{ opacity: 1, y: 0 }}
        className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-3 py-1.5 
                   bg-bg-card border border-primary/30 rounded-lg text-xs text-text-muted
                   whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-200"
      >
        {currentLocale === 'es' ? 'Switch to English' : 'Cambiar a Español'}
      </motion.div>
    </div>
  );
}
