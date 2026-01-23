'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import LiveSimulator from '@/components/LiveSimulator';
import PricingSection from '@/components/PricingSection';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import AnimatedBackground from '@/components/AnimatedBackground';
import FloatingCharacters from '@/components/FloatingCharacters';
import WaitlistSection from '@/components/WaitlistSection';
import Navbar from '@/components/Navbar';

export default function Home() {
  const t = useTranslations();
  const params = useParams();
  const locale = params.locale as string;

  return (
    <main className="min-h-screen relative">
      {/* Navbar */}
      <Navbar 
        translations={{
          home: t('navbar.home'),
          generator: t('navbar.generator'),
          features: t('navbar.features'),
          pricing: t('navbar.pricing'),
          testimonials: t('navbar.testimonials'),
          waitlist: t('navbar.waitlist'),
        }}
      />

      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Floating Characters */}
      <FloatingCharacters />

      {/* Hero Section */}
      <section id="inicio" className="pt-20">
        <HeroSection 
        translations={{
          badge: t('hero.badge'),
          title: t('hero.title'),
          subtitle: t('hero.subtitle'),
          cta: t('hero.cta'),
          ctaSecondary: t('hero.ctaSecondary'),
        }}
      />
      </section>

      {/* Live Simulator */}
      <LiveSimulator 
        translations={{
          badge: t('simulator.badge'),
          title: t('simulator.title'),
          subtitle: t('simulator.subtitle'),
          placeholder: t('simulator.placeholder'),
          generate: t('simulator.generate'),
          result: t('simulator.result'),
          continueStory: t('simulator.continueStory'),
          generateAnother: t('simulator.generateAnother'),
          ctaButton: t('simulator.ctaButton'),
          inputLabel: t('simulator.inputLabel'),
          generating: t('simulator.generating'),
          chatMode: t('simulator.chatMode'),
        }}
      />

      {/* Features Section */}
      <section id="caracteristicas">
        <FeaturesSection 
        translations={{
          title: t('features.title'),
          subtitle: t('features.subtitle'),
          items: t.raw('features.items'),
          cta: t('features.cta'),
          ctaQuestion: t('features.ctaQuestion'),
        }}  />
      </section>

      {/* Pricing Section */}
      <section id="planes">
        <PricingSection 
        translations={{
          title: t('pricing.title'),
          subtitle: t('pricing.subtitle'),
          guarantee: t('pricing.guarantee'),
          free: t.raw('pricing.free'),
          premium: t.raw('pricing.premium'),
        }}
      />
      </section>

      {/* Testimonials */}
      <section id="testimonios">
        <Testimonials 
        translations={{
          title: t('testimonials.title'),
          subtitle: t('testimonials.subtitle'),
          items: t.raw('testimonials.items'),
        }}
      />
      </section>

      {/* Waitlist Section */}
      <section id="waitlist">
        <WaitlistSection 
        translations={{
          badge: t('waitlist.badge'),
          title: t('waitlist.title'),
          subtitle: t('waitlist.subtitle'),
          emailPlaceholder: t('waitlist.emailPlaceholder'),
          ctaButton: t('waitlist.ctaButton'),
          successTitle: t('waitlist.successTitle'),
          successMessage: t('waitlist.successMessage'),
          loading: t('waitlist.loading'),
          stats: {
            users: t('waitlist.stats.users'),
            waitTime: t('waitlist.stats.waitTime'),
          },
        }}
      />
      </section>

      {/* Footer */}
      <Footer 
        translations={{
          tagline: t('footer.tagline'),
          downloadApp: t('footer.downloadApp'),
          ios: t('footer.ios'),
          android: t('footer.android'),
          privacy: t('footer.privacy'),
          terms: t('footer.terms'),
          contact: t('footer.contact'),
          copyright: t('footer.copyright'),
        }}
      />

      {/* Floating Components */}
      <ScrollToTop />
    </main>
  );
}
