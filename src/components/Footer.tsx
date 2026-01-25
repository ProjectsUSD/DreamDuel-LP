'use client';

import { motion } from 'framer-motion';
import { Heart, Shield, Mail, Twitter, MessageCircle, Apple, Smartphone, Instagram, Facebook } from 'lucide-react';
import Image from 'next/image';

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
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: MessageCircle, href: 'https://discord.gg/c3abxqdR', label: 'Discord' },
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
