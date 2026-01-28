'use client';

import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';

interface NavbarProps {
  translations: {
    home: string;
    generator?: string;
    features: string;
    pricing: string;
    testimonials: string;
    waitlist: string;
  };
}

export default function Navbar({ translations }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: translations.home, href: '#inicio' },
    { name: translations.features, href: '#caracteristicas' },
    { name: translations.pricing, href: '#planes' },
    { name: translations.testimonials, href: '#testimonios' },
    { name: translations.waitlist, href: '#waitlist' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-bg-deep/80 backdrop-blur-lg border-b border-white/5"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#inicio');
            }}
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src="/images/Logo/Logo.png"
              alt="DreamDuel Logo"
              width={350}
              height={350}
              className="w-14 h-14 md:w-16 md:h-16 object-contain scale-150"
            />
            <span className="text-2xl md:text-3xl font-bold text-text-main">
              DreamDuel
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-text-muted hover:text-primary transition-colors duration-300 text-sm font-medium"
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.a>
            ))}
            
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-text-main p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 space-y-4"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="block text-text-muted hover:text-primary transition-colors py-2"
              >
                {item.name}
              </a>
            ))}
            <div className="py-2">
              <LanguageSwitcher />
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
