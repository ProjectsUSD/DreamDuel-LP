'use client';

import { motion } from 'framer-motion';
import { Heart, Shield, Mail, Twitter, Apple, Smartphone, Instagram, Facebook } from 'lucide-react';
import Image from 'next/image';

// Discord Icon Component
const DiscordIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

interface FooterProps {
  translations: {
    tagline: string;
    downloadApp: string;
    ios: string;
    android: string;
    privacy: string;
    terms: string;
    contact: string;
    copyright: string;
  };
}

export default function Footer({ translations }: FooterProps) {
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter', isCustom: false },
    { icon: Instagram, href: '#', label: 'Instagram', isCustom: false },
    { icon: Facebook, href: '#', label: 'Facebook', isCustom: false },
    { icon: DiscordIcon, href: 'https://discord.gg/c3abxqdR', label: 'Discord', isCustom: true },
  ];

  const legalLinks = [
    { label: translations.privacy, href: '#' },
    { label: translations.terms, href: '#' },
    { label: translations.contact, href: '#' },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-bg-deep">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary-glow/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand & Download */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/Logo/Logo.png"
                alt="DreamDuel Logo"
                width={350}
                height={350}
                className="w-16 h-16 object-contain scale-150"
              />
              <span className="text-2xl font-bold text-gradient">DreamDuel</span>
            </div>
            <p className="text-text-muted mb-6 leading-relaxed">
              {translations.tagline}
            </p>
            
            {/* Download Buttons */}
            <div className="space-y-3 mb-4">
              <h4 className="text-text-main font-semibold text-sm mb-3">{translations.downloadApp}</h4>
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-3 bg-bg-card border border-white/10 rounded-xl
                         hover:bg-bg-card/80 hover:border-primary/50 transition-all duration-300 group"
              >
                <Apple className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <p className="text-xs text-text-muted">Descargar en</p>
                  <p className="text-sm font-semibold text-text-main">App Store</p>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-3 bg-bg-card border border-white/10 rounded-xl
                         hover:bg-bg-card/80 hover:border-primary/50 transition-all duration-300 group"
              >
                <Smartphone className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <p className="text-xs text-text-muted">Descargar en</p>
                  <p className="text-sm font-semibold text-text-main">Google Play</p>
                </div>
              </a>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-text-muted">
              <Shield className="w-4 h-4" />
              <span>Contenido +18 • Privacidad garantizada</span>
            </div>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-text-main font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-text-muted hover:text-primary transition-colors duration-300 
                             inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-primary group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-text-main font-semibold mb-4">Comunidad</h3>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-lg bg-bg-card border border-white/10 
                             flex items-center justify-center hover:border-primary/50 
                             hover:bg-primary/10 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-text-muted group-hover:text-primary transition-colors" />
                  </motion.a>
                );
              })}
            </div>

            <div className="flex items-center gap-2 text-sm text-text-muted p-3 rounded-lg bg-bg-card border border-white/10">
              <Mail className="w-4 h-4 text-primary" />
              <span>support@dreamduel.com</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="pt-8 border-t border-white/5"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-text-muted">
              {translations.copyright}
            </p>
            
            <div className="flex items-center gap-6 text-sm text-text-muted">
              <span className="flex items-center gap-2">
                Made with <Heart className="w-4 h-4 text-accent-hot fill-accent-hot" /> by DreamDuel Team
              </span>
            </div>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 p-4 rounded-lg bg-accent-hot/10 border border-accent-hot/30"
        >
          <p className="text-xs text-accent-hot/90 text-center leading-relaxed">
            ⚠️ <strong>Advertencia:</strong> Este sitio contiene contenido generado por IA destinado exclusivamente a adultos mayores de 18 años. 
            Todo el contenido es ficticio. Respetamos la privacidad y promovemos el uso responsable de la tecnología.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
