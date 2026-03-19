import {
  Button,
  Section,
  Container,
  Heading,
  Text,
  Card,
  Placeholder,
} from '@/components/ui';
import { Zap, Smartphone, TrendingUp, Target, CheckCircle2, ShieldCheck, Download, Clock } from 'lucide-react';

const features = [
  {
    icon: <Smartphone className="w-8 h-8 text-[var(--color-primary-light)]" />,
    title: 'Pronto para Usar',
    description: 'Copie e cole. Sem configuração, sem aprendizado técnico.',
  },
  {
    icon: <Clock className="w-8 h-8 text-[var(--color-primary-light)]" />,
    title: 'Resultados Rápidos',
    description: 'Comece a atender melhor em minutos, não em semanas.',
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-[var(--color-primary-light)]" />,
    title: 'Mais Vendas',
    description: 'Mensagens testadas que convertem visitantes em clientes.',
  },
  {
    icon: <Target className="w-8 h-8 text-[var(--color-primary-light)]" />,
    title: 'Para Seu Negócio',
    description: 'Criado especificamente para negócios locais brasileiros.',
  },
];

const testimonials = [
  {
    name: 'Maria S.',
    business: 'Salão de Beleza',
    quote:
      'Parei de perder tempo digitando a mesma coisa toda vez. Agora meu atendimento é profissional.',
  },
  {
    name: 'João P.',
    business: 'Restaurante',
    quote:
      'Meus clientes elogiam como respondo rápido e organizado. Valeu cada centavo.',
  },
  {
    name: 'Ana L.',
    business: 'Loja de Roupas',
    quote:
      'Finalmente consigo atender todo mundo sem me estressar. Recomendo demais!',
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <Section
        variant="hero"
        className="relative min-h-[90vh] flex items-center"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/5 via-transparent to-transparent pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium text-[var(--color-primary-light)] bg-[var(--color-primary)]/10 rounded-full border border-[var(--color-primary)]/20 animate-fade-in">
                <span className="w-2 h-2 rounded-full bg-[var(--color-primary-light)] animate-pulse" />
                Novo: Pack de Mensagens para WhatsApp
              </div>

              {/* Headline */}
              <Heading level={1}>
                Atenda melhor no WhatsApp.{' '}
                <span className="text-gradient-primary block">
                  Venda mais.
                </span>
              </Heading>

              {/* Subheadline */}
              <Text variant="lead" className="mb-10 max-w-2xl mx-auto lg:mx-0">
                Mensagens profissionais prontas para seu negócio. Copie, cole e
                impressione seus clientes. Sem complicação.
              </Text>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
                <Button href="/checkout" size="lg" className="px-8 py-4 text-lg w-full sm:w-auto">
                  Quero o ZapPack
                </Button>
                <Button
                  href="/produto"
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 text-lg w-full sm:w-auto"
                >
                  Ver o que está incluso
                </Button>
              </div>

              {/* Trust signal */}
              <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-[var(--color-text-muted)]">
                <span className="flex items-center gap-2">
                  <Download className="w-4 h-4" /> Download imediato
                </span>
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" /> Garantia de 7 dias
                </span>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="hidden lg:block relative">
               <Placeholder variant="hero" className="w-full shadow-2xl skew-y-1" />
            </div>
          </div>
        </Container>
      </Section>

      {/* Features Section */}
      <Section>
        <Container>
          <div className="text-center mb-16 md:mb-20">
            <Heading level={2}>Por que o ZapPack funciona?</Heading>
            <Text variant="lead" className="max-w-2xl mx-auto">
              Criado para quem precisa de praticidade, não de mais uma coisa
              para aprender.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                variant="bordered"
                padding="default" // Using default large padding
                className="group hover:border-[var(--color-border-hover)] transition-all duration-300 card-padding-lg"
              >
                <div className="text-4xl mb-6 flex justify-center items-center">
                  {feature.icon}
                </div>
                <Heading level={4}>{feature.title}</Heading>
                <Text variant="secondary" className="mt-4">
                  {feature.description}
                </Text>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Social Proof Section */}
      <Section variant="surface">
        <Container>
          <div className="text-center mb-16 md:mb-20">
            <Heading level={2}>O que dizem nossos clientes</Heading>
            <Text variant="lead">Negócios reais, resultados reais.</Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.name}
                variant="bordered" // Changed to bordered for better visibility on surface background
                padding="default"
                className="relative card-padding-lg"
              >
                <div className="absolute top-8 left-8 text-4xl text-[var(--color-primary)] opacity-20 font-serif">
                  &ldquo;
                </div>
                <Text
                  variant="secondary"
                  size="lg"
                  className="mb-8 relative z-10 pt-4"
                >
                  {testimonial.quote}
                </Text>
                <div className="flex items-center gap-4 border-t border-[var(--color-border)] pt-6">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-surface-elevated)] flex items-center justify-center font-bold text-[var(--color-text-muted)]">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <Text className="font-bold">{testimonial.name}</Text>
                    <Text variant="muted" size="sm">
                      {testimonial.business}
                    </Text>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-b from-[var(--color-surface)] to-[var(--color-base)] border border-[var(--color-border)] card-padding-lg">
            <Heading level={2}>
              Pronto para atender como um profissional?
            </Heading>
            <Text variant="lead" className="mb-10 max-w-2xl mx-auto">
              Mensagens prontas, resultados imediatos. Seu negócio merece um
              atendimento à altura.
            </Text>
            <Button href="/checkout" size="lg" className="px-10 py-5 text-lg">
              Adquirir o ZapPack Agora
            </Button>
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-[var(--color-text-muted)]">
              <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Pagamento Seguro</span>
              <span className="flex items-center gap-2"><Download className="w-4 h-4" /> Download Imediato</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Garantia de 7 dias</span>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
