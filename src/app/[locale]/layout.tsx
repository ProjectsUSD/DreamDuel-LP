import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import '../globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AnimaTales - Tus Fantasías, Tu Realidad',
  description: 'Crea historias inmersivas con tus personajes de anime favoritos impulsados por IA sin censura.',
  keywords: 'anime, AI, roleplay, historias interactivas, IA generativa, NSFW',
  authors: [{ name: 'AnimaTales' }],
  robots: 'noindex, nofollow', // Importante para contenido adulto
};

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const messages = await getMessages();
 
  return (
    <html lang={locale} className="scroll-smooth">
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
