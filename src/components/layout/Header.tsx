'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Container } from '@/components/ui';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Início' },
  { href: '/produto', label: 'Produto' },
  { href: '/como-funciona', label: 'Como Funciona' },
  { href: '/para-quem', label: 'Para Quem É' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contato', label: 'Contato' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-base)]/95 backdrop-blur-md">
      <Container>
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl md:text-2xl font-bold tracking-tight transition-opacity hover:opacity-80 py-2"
          >
            Zap<span className="text-[var(--color-primary-light)]">Pack</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="px-4 py-3 text-base font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors rounded-lg hover:bg-[var(--color-surface)] card-padding-sm"
                  >
                    {link.label}
                  </Link>
                </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/checkout"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] rounded-lg transition-all hover:scale-[1.03] active:scale-[0.97] card-padding-sm"
            >
              Comprar Agora
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100 border-t border-[var(--color-border)]' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface)] rounded-lg transition-colors card-padding-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-4 px-4">
                <Link
                  href="/checkout"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center py-3 text-sm font-medium text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] rounded-lg transition-colors card-padding-sm"
                >
                  Comprar Agora
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </header>
  );
}
