'use client';

import { motion } from 'framer-motion';
import { Sparkles, Lock, Zap, Target } from 'lucide-react';

interface AboutTranslations {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  mission: {
    title: string;
    description: string;
  };
  values: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  stats: Array<{
    number: string;
    label: string;
  }>;
  journey: {
    title: string;
    description: string;
  };
  cta: string;
  ctaSubtitle: string;
}

interface AboutSectionProps {
  translations: AboutTranslations;
}

const iconMap: { [key: string]: any } = {
  '🚀': Sparkles,
  '🔒': Lock,
  '⚡': Zap,
  '🎯': Target,
};

export default function AboutSection({ translations }: AboutSectionProps) {
  return (
    <div className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-deep via-black to-black -z-10" />
      
      {/* Floating gradient blobs - same as hero */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-primary bg-primary/10 rounded-full border border-primary/20">
            {translations.badge}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gradient">
            {translations.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {translations.subtitle}
          </p>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <p className="text-lg text-gray-300 leading-relaxed text-center">
            {translations.description}
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {translations.stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-white/5 to-transparent rounded-2xl border border-white/10 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
            >
              <div className="text-4xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-text-muted">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto mb-20 p-8 bg-gradient-to-br from-primary/10 via-primary-glow/10 to-transparent rounded-3xl border border-white/10 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            {translations.mission.title}
          </h3>
          <p className="text-gray-300 leading-relaxed">
            {translations.mission.description}
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {translations.values.map((value, index) => {
            const IconComponent = iconMap[value.icon] || Sparkles;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group p-8 bg-gradient-to-br from-white/5 to-transparent rounded-2xl border border-white/10 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 relative">
                    <div className="w-12 h-12 bg-primary-gradient rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    {/* Glow effect */}
                    <div className="absolute inset-0 w-12 h-12 rounded-xl bg-primary/50 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-all">
                      {value.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Journey */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <h3 className="text-3xl font-bold text-gradient mb-6 text-center">
            {translations.journey.title}
          </h3>
          <p className="text-lg text-gray-300 leading-relaxed text-center">
            {translations.journey.description}
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-text-muted mb-6">{translations.ctaSubtitle}</p>
          <a
            href="#waitlist"
            className="inline-block px-8 py-4 bg-primary-gradient text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-primary/50"
          >
            {translations.cta}
          </a>
        </motion.div>
      </div>
    </div>
  );
}
