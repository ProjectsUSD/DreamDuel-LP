import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import '../globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DreamDuel - Tus Fantasías, Realidad Tangible',
  description: 'Convierte fantasías simples en historias visuales con IA. Solo describe personas, temática y contexto - la IA crea el resto en 30 segundos. Escenarios intensos personales sin censura.',
  keywords: 'fantasías, AI, historias visuales, IA generativa, NSFW, escenarios intensos, venganza, lujuria, romance oscuro',
  authors: [{ name: 'DreamDuel' }],
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
