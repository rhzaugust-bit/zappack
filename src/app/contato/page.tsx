import { Metadata } from 'next';
import {
  Button,
  Section,
  Container,
  Heading,
  Text,
  Card,
} from '@/components/ui';

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Entre em contato com a equipe do ZapPack. Estamos aqui para ajudar.',
};

export default function ContatoPage() {
  return (
    <div>
      {/* Hero */}
      <Section variant="hero">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Heading level={1}>Contato</Heading>
            <Text variant="lead" className="max-w-2xl mx-auto">
              Tem alguma dúvida ou precisa de ajuda? Estamos aqui.
            </Text>
          </div>
        </Container>
      </Section>

      {/* Contact Options */}
      <Section>
        <Container>
          <div className="max-w-2xl mx-auto space-y-8">
            {/* WhatsApp */}
            <Card variant="bordered" padding="default" className="card-padding-lg">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-16 h-16 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                  <span className="text-3xl">💬</span>
                </div>
                <div>
                  <Heading level={3} className="text-xl font-bold mb-1">
                    WhatsApp
                  </Heading>
                  <Text variant="secondary">Resposta mais rápida</Text>
                </div>
              </div>
              <Text variant="secondary" size="lg" className="mb-8">
                Prefere conversar diretamente? Envie uma mensagem no WhatsApp.
                Respondemos em até 24 horas úteis.
              </Text>
              <Button
                href="https://wa.me/5500000000000?text=Olá! Tenho uma dúvida sobre o ZapPack."
                variant="primary"
                size="lg"
                fullWidth
                className="py-4 text-lg"
              >
                Abrir WhatsApp
              </Button>
            </Card>

            {/* Form */}
            <Card variant="bordered" padding="default" className="card-padding-lg">
              <Heading level={3} className="text-xl font-bold mb-8">
                Envie uma mensagem
              </Heading>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-3 text-[var(--color-text-secondary)]"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-5 py-4 rounded-xl bg-[var(--color-base)] border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:outline-none transition-colors text-[var(--color-text)] text-base"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-3 text-[var(--color-text-secondary)]"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-5 py-4 rounded-xl bg-[var(--color-base)] border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:outline-none transition-colors text-[var(--color-text)] text-base"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-3 text-[var(--color-text-secondary)]"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-5 py-4 rounded-xl bg-[var(--color-base)] border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:outline-none transition-colors resize-none text-[var(--color-text)] text-base"
                    placeholder="Como podemos ajudar?"
                  />
                </div>
                <Button
                  type="submit"
                  fullWidth
                  size="lg"
                  className="py-4 text-lg"
                >
                  Enviar Mensagem
                </Button>
              </form>
              <Text variant="muted" size="sm" className="mt-6 text-center">
                Respondemos em até 48 horas úteis.
              </Text>
            </Card>
          </div>
        </Container>
      </Section>
    </div>
  );
}
