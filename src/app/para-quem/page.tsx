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
  title: 'Para Quem É',
  description:
    'O ZapPack é ideal para donos de pequenos negócios locais que atendem clientes pelo WhatsApp.',
};

const profiles = [
  {
    emoji: '💇',
    title: 'Salões e Barbearias',
    description:
      'Confirme horários, avise clientes e responda dúvidas sem perder tempo.',
  },
  {
    emoji: '🍕',
    title: 'Restaurantes e Lanchonetes',
    description:
      'Cardápio, horários de funcionamento, pedidos. Tudo organizado.',
  },
  {
    emoji: '👗',
    title: 'Lojas de Roupas e Acessórios',
    description:
      'Apresente produtos, negocie e feche vendas de forma profissional.',
  },
  {
    emoji: '🔧',
    title: 'Prestadores de Serviço',
    description:
      'Encanadores, eletricistas, técnicos. Passe orçamentos e agende serviços.',
  },
  {
    emoji: '💪',
    title: 'Personal Trainers e Profissionais de Saúde',
    description:
      'Agende consultas, tire dúvidas e mantenha o relacionamento com clientes.',
  },
  {
    emoji: '🏪',
    title: 'Comércios em Geral',
    description: 'Qualquer negócio local que atende clientes pelo WhatsApp.',
  },
];

const painPoints = [
  'Perde tempo repetindo as mesmas coisas para cada cliente',
  'Fica sem saber o que responder em algumas situações',
  'Sente que seu atendimento poderia ser mais profissional',
  'Demora para responder e acaba perdendo vendas',
  'Não tem tempo para criar mensagens elaboradas',
];

export default function ParaQuemPage() {
  return (
    <div>
      {/* Hero */}
      <Section variant="hero">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Heading level={1}>Para Quem É</Heading>
            <Text variant="lead" className="max-w-2xl mx-auto">
              O ZapPack foi criado especificamente para donos de pequenos
              negócios locais que atendem clientes pelo WhatsApp.
            </Text>
          </div>
        </Container>
      </Section>

      {/* Perfis */}
      <Section variant="surface">
        <Container>
          <div className="text-center mb-16 md:mb-20">
            <Heading level={2}>Ideal para:</Heading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {profiles.map((profile) => (
              <Card
                key={profile.title}
                variant="bordered" // Changed to bordered for better visibility on surface background
                padding="default"
                className="card-padding-lg hover:border-[var(--color-border-hover)] transition-all duration-300 group"
              >
                <div className="text-5xl mb-6 flex justify-center items-center group-hover:scale-110 transition-transform origin-center">
                  {profile.emoji}
                </div>
                <Heading level={4}>{profile.title}</Heading>
                <Text variant="secondary" size="lg" className="mt-4">
                  {profile.description}
                </Text>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Pain Points */}
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto p-12 rounded-3xl border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/5 card-padding-lg">
            <Heading level={2} className="text-center mb-10">
              O ZapPack é para você se:
            </Heading>
            <ul className="space-y-6">
              {painPoints.map((point) => (
                <li key={point} className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center text-sm shadow-md shadow-[var(--color-primary)]/20 flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-xl text-[var(--color-text-secondary)] flex-1">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section variant="surface">
        <Container className="text-center">
          <Heading level={2}>Se identificou?</Heading>
          <Text variant="lead" className="mb-10 max-w-2xl mx-auto">
            O ZapPack foi feito pensando exatamente em você. Mensagens prontas,
            profissionais e fáceis de usar.
          </Text>
          <Button href="/checkout" size="lg" className="px-10 py-5 text-lg">
            Quero o ZapPack
          </Button>
        </Container>
      </Section>
    </div>
  );
}
