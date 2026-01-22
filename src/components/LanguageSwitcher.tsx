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
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleLanguage}
        className="flex items-center justify-center px-2 py-1.5 rounded-lg bg-primary/10 backdrop-blur-md 
                 border border-primary/30 hover:border-primary hover:bg-primary/20 transition-all duration-300"
      >
        <span className="text-xl leading-none">
          {currentLang?.flag}
        </span>
      </motion.button>
    </div>
  );
}
