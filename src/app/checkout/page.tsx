import { Metadata } from 'next';
import {
  Button,
  Section,
  Container,
  Heading,
  Text,
  Card,
} from '@/components/ui';
import Link from 'next/link';
import { ShieldCheck, CheckCircle2, Zap, Lock, Download, User, Mail, CreditCard, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Checkout',
  description: 'Finalize sua compra do ZapPack.',
};

export default function CheckoutPage() {
  return (
    <div className="min-h-screen">
      <Section>
        <Container>
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <Heading
                level={1}
                className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
              >
                Finalizar Compra
              </Heading>
              <Text variant="secondary" size="xl">
                Você está adquirindo o ZapPack
              </Text>
            </div>

            {/* Product Summary */}
            <Card variant="bordered" padding="default" className="mb-8 card-padding-lg">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <Heading level={3} className="font-bold text-xl mb-1">
                    ZapPack Completo
                  </Heading>
                  <Text variant="secondary">
                    Pack de mensagens para WhatsApp
                  </Text>
                </div>
                <div className="text-right">
                  <Text size="xl" className="font-bold">
                    R$ 47,00
                  </Text>
                </div>
              </div>
              <ul className="space-y-3 text-base text-[var(--color-text-secondary)] border-t border-[var(--color-border)] pt-6">
                <li className="flex items-center gap-3">
                  <span className="text-[var(--color-primary-light)]">
                    <CheckCircle2 className="w-5 h-5" />
                  </span>
                  50+ mensagens prontas
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[var(--color-primary-light)]">
                   <Download className="w-5 h-5" />
                  </span>
                  PDF organizado por categorias
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[var(--color-primary-light)]">
                    <CheckCircle2 className="w-5 h-5" />
                  </span>
                  Versão editável inclusa
                </li>
                <li className="flex items-center gap-3">
                   <span className="text-[var(--color-primary-light)]">
                    <Zap className="w-5 h-5" />
                  </span>
                  Acesso vitalício
                </li>
              </ul>
            </Card>

            {/* Mock Checkout Form */}
            <Card variant="bordered" padding="default" className="card-padding-lg">
              <Heading
                level={3}
                className="font-bold text-xl mb-8 flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center text-sm font-bold">
                  1
                </div>
                Seus dados
              </Heading>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="checkout-name"
                    className="block text-sm font-medium mb-3 text-[var(--color-text-secondary)]"
                  >
                    Nome completo
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[var(--color-text-muted)]">
                      <User className="w-5 h-5" />
                    </div>
                    <input
                      type="text"
                      id="checkout-name"
                      required
                      className="w-full pl-12 pr-5 py-4 rounded-xl bg-[var(--color-base)] border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:outline-none transition-colors text-[var(--color-text)] text-base"
                      placeholder="Seu nome"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="checkout-email"
                    className="block text-sm font-medium mb-3 text-[var(--color-text-secondary)]"
                  >
                    E-mail
                  </label>
                  <div className="relative">
                     <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[var(--color-text-muted)]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <input
                      type="email"
                      id="checkout-email"
                      required
                      className="w-full pl-12 pr-5 py-4 rounded-xl bg-[var(--color-base)] border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:outline-none transition-colors text-[var(--color-text)] text-base"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <p className="mt-2 text-sm text-[var(--color-text-muted)] flex items-center gap-2">
                    <Lock className="w-3 h-3" /> O link de download será enviado para este e-mail.
                  </p>
                </div>

                <div className="pt-8 border-t border-[var(--color-border)] mt-8">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[var(--color-text-secondary)] text-lg">
                      Total
                    </span>
                    <span className="text-3xl font-bold">R$ 47,00</span>
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    fullWidth
                    className="py-5 text-lg font-bold flex items-center gap-2 justify-center"
                  >
                   <Lock className="w-5 h-5" /> Pagar com Segurança
                  </Button>
                </div>
              </form>

              {/* Trust signals */}
              <div className="mt-8 pt-6 border-t border-[var(--color-border)]">
                <div className="flex flex-wrap justify-center gap-6 text-sm text-[var(--color-text-muted)]">
                  <span className="flex items-center gap-2">
                    <Lock className="w-4 h-4" /> Pagamento seguro
                  </span>
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" /> Garantia de 7 dias
                  </span>
                  <span className="flex items-center gap-2">
                    <Zap className="w-4 h-4" /> Acesso imediato
                  </span>
                </div>
              </div>
            </Card>

            {/* Back link */}
            <p className="mt-8 text-center text-sm text-[var(--color-text-muted)]">
              <Link
                href="/produto"
                className="inline-flex items-center gap-1 hover:text-[var(--color-text)] transition-colors underline decoration-transparent hover:decoration-[var(--color-text-muted)] underline-offset-4"
              >
                <ArrowLeft className="w-4 h-4" /> Voltar para detalhes do produto
              </Link>
            </p>
          </div>
        </Container>
      </Section>
    </div>
  );
}
