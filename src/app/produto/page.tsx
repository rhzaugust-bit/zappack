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
  title: 'ZapPack - Pack de Mensagens para WhatsApp',
  description:
    'Mensagens profissionais prontas para WhatsApp de negócios locais. Copie, cole e impressione seus clientes.',
};

const includes = [
  {
    icon: '💬',
    title: '50+ Mensagens Prontas',
    description:
      'Respostas para saudação, horários, preços, agradecimento e mais.',
  },
  {
    icon: '📋',
    title: 'Templates de Atendimento',
    description: 'Estruturas testadas para conduzir conversas que vendem.',
  },
  {
    icon: '⚡',
    title: 'Respostas Rápidas',
    description: 'Mensagens curtas para situações do dia a dia.',
  },
  {
    icon: '📱',
    title: 'Formato WhatsApp-Ready',
    description: 'Texto pronto para copiar direto no celular.',
  },
  {
    icon: '📄',
    title: 'PDF Organizado',
    description: 'Documento bem estruturado por categorias.',
  },
  {
    icon: '✏️',
    title: 'Versão Editável',
    description: 'Arquivo para você personalizar como quiser.',
  },
];

export default function ProdutoPage() {
  return (
    <div>
      {/* Hero */}
      <Section variant="hero">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium text-[var(--color-primary-light)] bg-[var(--color-primary)]/10 rounded-full border border-[var(--color-primary)]/20">
              Produto Digital
            </div>
            <Heading level={1}>ZapPack</Heading>
            <Text variant="lead" className="mb-6 max-w-2xl mx-auto">
              Pack de Mensagens Profissionais para WhatsApp de Negócios Locais
            </Text>
            <Text variant="muted" size="lg" className="max-w-xl mx-auto">
              Tudo que você precisa para atender seus clientes de forma
              profissional, rápida e organizada.
            </Text>
          </div>
        </Container>
      </Section>

      {/* O que está incluso */}
      <Section variant="surface">
        <Container>
          <div className="text-center mb-16 md:mb-20">
            <Heading level={2}>O que está incluso</Heading>
            <Text variant="lead">Tudo pronto para você usar hoje mesmo.</Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {includes.map((item) => (
              <Card
                key={item.title}
                variant="bordered" // Changed to bordered for better visibility on surface background
                padding="default"
                className="card-padding-lg hover:border-[var(--color-border-hover)] transition-all duration-300"
              >
                <div className="text-4xl mb-6 flex justify-center items-center">
                  {item.icon}
                </div>
                <Heading level={3} className="text-xl">
                  {item.title}
                </Heading>
                <Text variant="secondary" className="mt-4">
                  {item.description}
                </Text>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Preço */}
      <Section>
        <Container>
          <div className="max-w-lg mx-auto">
            <Card
              variant="bordered"
              padding="default" // Enforced large padding
              className="px-12 py-12 text-center shadow-2xl shadow-black/50" // Extra vertical padding for price card
            >
              <h3 className="text-xl font-semibold text-[var(--color-text-secondary)] mb-4">
                ZapPack Completo
              </h3>
              <div className="mb-6">
                <span className="text-6xl font-bold tracking-tight">R$ 47</span>
                <span className="text-2xl text-[var(--color-text-muted)] font-medium">
                  ,00
                </span>
              </div>
              <p className="text-sm text-[var(--color-text-muted)] mb-10 bg-[var(--color-base)] py-2 rounded-full inline-block px-4">
                Pagamento único · Acesso vitalício
              </p>

              <Button
                href="/checkout"
                size="lg"
                fullWidth
                className="py-5 text-lg font-bold"
              >
                Comprar Agora
              </Button>

              <ul className="mt-10 space-y-4 text-base text-[var(--color-text-secondary)] text-left pl-8">
                <li className="flex items-center gap-3">
                  <span className="text-[var(--color-primary-light)] text-xl">
                    ✓
                  </span>
                  Download imediato
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[var(--color-primary-light)] text-xl">
                    ✓
                  </span>
                  Garantia de 7 dias
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[var(--color-primary-light)] text-xl">
                    ✓
                  </span>
                  Suporte via WhatsApp
                </li>
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section variant="surface">
        <Container className="text-center">
          <Heading level={2}>Invista em atendimento profissional</Heading>
          <Text variant="lead" className="mb-10 max-w-2xl mx-auto">
            O ZapPack custa menos que um almoço e pode transformar como você
            atende seus clientes para sempre.
          </Text>
          <Button href="/checkout" size="lg" className="px-10 py-5">
            Adquirir o ZapPack
          </Button>
        </Container>
      </Section>
    </div>
  );
}
