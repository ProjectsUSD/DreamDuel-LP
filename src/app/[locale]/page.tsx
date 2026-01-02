'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import AgeVerificationModal from '@/components/AgeVerificationModal';
import HeroSection from '@/components/HeroSection';
import CharacterCarousel from '@/components/CharacterCarousel';
import ImmersiveShowcase from '@/components/ImmersiveShowcase';
import FeaturesSection from '@/components/FeaturesSection';
import LiveSimulator from '@/components/LiveSimulator';
import PricingSection from '@/components/PricingSection';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import ScrollToTop from '@/components/ScrollToTop';
import AnimatedBackground from '@/components/AnimatedBackground';
import FloatingCharacters from '@/components/FloatingCharacters';

export default function Home() {
  const t = useTranslations();
  const params = useParams();
  const locale = params.locale as string;

  return (
    <main className="min-h-screen relative">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Modal de verificación de edad */}
      <AgeVerificationModal 
        translations={{
          title: t('ageVerification.title'),
          message: t('ageVerification.message'),
          confirm: t('ageVerification.confirm'),
          decline: t('ageVerification.decline'),
          disclaimer: t('ageVerification.disclaimer'),
        }}
      />

      {/* Hero Section */}
      <HeroSection 
        translations={{
          title: t('hero.title'),
          subtitle: t('hero.subtitle'),
          cta: t('hero.cta'),
          ctaSecondary: t('hero.ctaSecondary'),
        }}
      />

      {/* Character Carousel */}
      <CharacterCarousel 
        translations={{
          title: t('characters.title'),
          types: t.raw('characters.types'),
          subtitle: t('characterCarousel.subtitle'),
        }}
      />

      {/* Immersive Showcase - Scroll Experience */}
      <ImmersiveShowcase locale={locale} />

      {/* Features Section */}
      <FeaturesSection 
        translations={{
          title: t('features.title'),
          subtitle: t('features.subtitle'),
          items: t.raw('features.items'),
          cta: t('features.cta'),
          ctaQuestion: t('features.ctaQuestion'),
        }}
      />

      {/* Live Simulator */}
      <LiveSimulator 
        translations={{
          title: t('simulator.title'),
          subtitle: t('simulator.subtitle'),
          tags: t.raw('simulator.tags'),
          generate: t('simulator.generate'),
          result: t('simulator.result'),
          continueStory: t('simulator.continueStory'),
          generateAnother: t('simulator.generateAnother'),
        }}
      />

      {/* Pricing Section */}
      <PricingSection 
        translations={{
          title: t('pricing.title'),
          subtitle: t('pricing.subtitle'),
          guarantee: t('pricing.guarantee'),
          free: t.raw('pricing.free'),
          premium: t.raw('pricing.premium'),
        }}
      />

      {/* Testimonials */}
      <Testimonials 
        translations={{
          title: t('testimonials.title'),
          subtitle: t('testimonials.subtitle'),
          items: t.raw('testimonials.items'),
        }}
      />

      {/* Footer */}
      <Footer 
        translations={{
          tagline: t('footer.tagline'),
          privacy: t('footer.privacy'),
          terms: t('footer.terms'),
          contact: t('footer.contact'),
          copyright: t('footer.copyright'),
        }}
      />

      {/* Floating Components */}
      <LanguageSwitcher />
      <ScrollToTop />
    </main>
  );
}
