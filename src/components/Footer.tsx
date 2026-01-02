'use client';

import { motion } from 'framer-motion';
import { Heart, Shield, Mail, Twitter, Github, MessageCircle } from 'lucide-react';

interface FooterProps {
  translations: {
    tagline: string;
    privacy: string;
    terms: string;
    contact: string;
    copyright: string;
  };
}

export default function Footer({ translations }: FooterProps) {
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: MessageCircle, href: '#', label: 'Discord' },
  ];

  const legalLinks = [
    { label: translations.privacy, href: '#' },
    { label: translations.terms, href: '#' },
    { label: translations.contact, href: '#' },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-primary-dark to-primary-darker">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-neon-pink/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-neon-violet/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-neon-gradient flex items-center justify-center">
                <Heart className="w-6 h-6 text-white fill-white" />
              </div>
              <span className="text-2xl font-bold text-gradient">AnimaTales</span>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              {translations.tagline}
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
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
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-neon-pink transition-colors duration-300 
                             inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-neon-pink group-hover:w-4 transition-all duration-300" />
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
            <h3 className="text-white font-semibold mb-4">Comunidad</h3>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 
                             flex items-center justify-center hover:border-neon-pink/50 
                             hover:bg-neon-pink/10 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-neon-pink transition-colors" />
                  </motion.a>
                );
              })}
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-400 p-3 rounded-lg bg-white/5 border border-white/10">
              <Mail className="w-4 h-4 text-neon-violet" />
              <span>support@animatales.com</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              {translations.copyright}
            </p>
            
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                Made with <Heart className="w-4 h-4 text-neon-pink fill-neon-pink" /> by AnimaTales Team
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
          className="mt-8 p-4 rounded-lg bg-amber-500/10 border border-amber-500/30"
        >
          <p className="text-xs text-amber-200/80 text-center leading-relaxed">
            ⚠️ <strong>Advertencia:</strong> Este sitio contiene contenido generado por IA destinado exclusivamente a adultos mayores de 18 años. 
            Todo el contenido es ficticio. Respetamos la privacidad y promovemos el uso responsable de la tecnología.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
