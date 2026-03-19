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
  title: 'Como Funciona',
  description:
    'Veja como o ZapPack funciona: 3 passos simples para transformar seu atendimento no WhatsApp.',
};

const steps = [
  {
    number: '01',
    title: 'Faça o Download',
    description:
      'Após a compra, você recebe acesso imediato aos arquivos. Baixe o PDF e as versões editáveis no seu celular ou computador.',
  },
  {
    number: '02',
    title: 'Escolha a Mensagem',
    description:
      'Navegue pelas categorias organizadas: saudação, horários, preços, promoções, agradecimento. Encontre o que precisa em segundos.',
  },
  {
    number: '03',
    title: 'Copie e Envie',
    description:
      'Selecione o texto, copie e cole direto no WhatsApp. Personalize se quiser. Seus clientes vão notar a diferença.',
  },
];

export default function ComoFuncionaPage() {
  return (
    <div>
      {/* Hero */}
      <Section variant="hero">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Heading level={1}>Como Funciona</Heading>
            <Text variant="lead" className="max-w-2xl mx-auto">
              Três passos simples para transformar seu atendimento no WhatsApp.
            </Text>
          </div>
        </Container>
      </Section>

      {/* Steps */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            {steps.map((step, index) => (
              <Card
                key={step.number}
                variant="bordered"
                padding="default"
                className="flex flex-col md:flex-row gap-8 md:gap-12 items-start hover:bg-[var(--color-surface)]/50 transition-colors card-padding-lg"
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 flex items-center justify-center shadow-lg shadow-[var(--color-primary)]/5">
                    <span className="text-2xl font-bold text-[var(--color-primary-light)]">
                      {step.number}
                    </span>
                  </div>
                </div>
                <div className="pt-2 flex-1">
                  <Heading level={3} className="mb-4">
                    {step.title}
                  </Heading>
                  <Text variant="secondary" size="lg">
                    {step.description}
                  </Text>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Benefício */}
      <Section variant="surface">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Heading level={2}>Sem complicação. Sem aprendizado.</Heading>
            <Text variant="lead" className="mb-12 max-w-3xl mx-auto">
              O ZapPack foi feito para quem quer resultado, não para quem quer
              estudar tecnologia. Você compra, baixa e usa. Simples assim.
            </Text>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="px-6 py-4 rounded-xl bg-[var(--color-base)] border border-[var(--color-border)] text-base font-medium card-padding-sm">
                ✓ Sem aplicativo
              </div>
              <div className="px-6 py-4 rounded-xl bg-[var(--color-base)] border border-[var(--color-border)] text-base font-medium card-padding-sm">
                ✓ Sem cadastro
              </div>
              <div className="px-6 py-4 rounded-xl bg-[var(--color-base)] border border-[var(--color-border)] text-base font-medium card-padding-sm">
                ✓ Sem mensalidade
              </div>
              <div className="px-6 py-4 rounded-xl bg-[var(--color-base)] border border-[var(--color-border)] text-base font-medium card-padding-sm">
                ✓ Sem treinamento
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container className="text-center">
          <Heading level={2}>Pronto para começar?</Heading>
          <Text variant="lead" className="mb-10 max-w-2xl mx-auto">
            Em menos de 5 minutos você pode estar atendendo de forma
            profissional.
          </Text>
          <Button href="/checkout" size="lg" className="px-10 py-5 text-lg">
            Adquirir o ZapPack
          </Button>
        </Container>
      </Section>
    </div>
  );
}
