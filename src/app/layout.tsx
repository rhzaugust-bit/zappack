import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'ZapPack | Mensagens Prontas para WhatsApp de Negócios',
    template: '%s | ZapPack',
  },
  description:
    'Packs digitais prontos para uso que ajudam negócios locais a vender mais e organizar atendimento no WhatsApp. Profissional, rápido e funcional.',
  keywords: [
    'WhatsApp Business',
    'mensagens prontas',
    'negócios locais',
    'atendimento WhatsApp',
    'templates WhatsApp',
    'vendas WhatsApp',
  ],
  authors: [{ name: 'ZapPack' }],
  creator: 'ZapPack',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'ZapPack',
    title: 'ZapPack | Mensagens Prontas para WhatsApp de Negócios',
    description:
      'Packs digitais prontos para uso que ajudam negócios locais a vender mais e organizar atendimento no WhatsApp.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZapPack | Mensagens Prontas para WhatsApp de Negócios',
    description:
      'Packs digitais prontos para uso que ajudam negócios locais a vender mais.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} antialiased pt-24`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
