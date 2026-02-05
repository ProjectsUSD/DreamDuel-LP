'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FeaturesSection from '@/components/FeaturesSection';
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
          about: t('navbar.about'),
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
          noLimits: t('hero.noLimits'),
          storiesCreated: t('hero.storiesCreated'),
          privacyGuaranteed: t('hero.privacyGuaranteed'),
        }}
      />
      </section>

      {/* About Section */}
      <section id="nosotros">
        <AboutSection 
          translations={{
            badge: t('about.badge'),
            title: t('about.title'),
            subtitle: t('about.subtitle'),
            description: t('about.description'),
            mission: t.raw('about.mission'),
            values: t.raw('about.values'),
            stats: t.raw('about.stats'),
            journey: t.raw('about.journey'),
            cta: t('about.cta'),
            ctaSubtitle: t('about.ctaSubtitle'),
          }}
        />
      </section>

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
          disclaimer: t('waitlist.disclaimer'),
          errorEmail: t('waitlist.errorEmail'),
          errorInvalidEmail: t('waitlist.errorInvalidEmail'),
          freeAccess: t('waitlist.freeAccess'),
          priorityAccess: t('waitlist.priorityAccess'),
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
          downloadOn: t('footer.downloadOn'),
          appStore: t('footer.appStore'),
          googlePlay: t('footer.googlePlay'),
          contentWarning: t('footer.contentWarning'),
          community: t('footer.community'),
          legal: t('footer.legal'),
          privacy: t('footer.privacy'),
          terms: t('footer.terms'),
          contact: t('footer.contact'),
          madeWith: t('footer.madeWith'),
          by: t('footer.by'),
          warning: t('footer.warning'),
          disclaimer: t('footer.disclaimer'),
          copyright: t('footer.copyright'),
        }}
      />

      {/* Floating Components */}
      <ScrollToTop />
    </main>
  );
}
