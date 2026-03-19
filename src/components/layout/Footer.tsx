import Link from 'next/link';
import { Container } from '@/components/ui';

const footerLinks = {
  produto: [
    { href: '/produto', label: 'ZapPack' },
    { href: '/como-funciona', label: 'Como Funciona' },
    { href: '/para-quem', label: 'Para Quem É' },
    { href: '/faq', label: 'FAQ' },
  ],
  legal: [
    { href: '/termos', label: 'Termos de Uso' },
    { href: '/privacidade', label: 'Política de Privacidade' },
  ],
  contato: [{ href: '/contato', label: 'Fale Conosco' }],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="text-xl font-bold tracking-tight">
              Zap<span className="text-[var(--color-primary-light)]">Pack</span>
            </Link>
            <p className="mt-4 text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Packs digitais prontos para ajudar seu negócio a vender mais no
              WhatsApp.
            </p>
          </div>

          {/* Produto */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text)] mb-4">
              Produto
            </h3>
            <ul className="space-y-3">
              {footerLinks.produto.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text)] mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text)] mb-4">
              Contato
            </h3>
            <ul className="space-y-3">
              {footerLinks.contato.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
          <p className="text-sm text-[var(--color-text-muted)] text-center">
            © {currentYear} ZapPack. Todos os direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
