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
  title: 'Obrigado pela Compra',
  description:
    'Sua compra foi confirmada. Confira seu e-mail para acessar o ZapPack.',
};

export default function ObrigadoPage() {
  return (
    <div className="min-h-screen flex items-center">
      <Section className="w-full">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            {/* Success Icon */}
            <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 flex items-center justify-center shadow-lg shadow-[var(--color-primary)]/10 animate-fade-in-up">
              <span className="text-5xl text-[var(--color-primary-light)]">
                ✓
              </span>
            </div>

            {/* Message */}
            <Heading
              level={1}
              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight animate-fade-in-up"
              style={{ animationDelay: '100ms' }}
            >
              Obrigado pela compra!
            </Heading>
            <Text
              size="xl"
              variant="secondary"
              className="mb-12 animate-fade-in-up"
              style={{ animationDelay: '200ms' }}
            >
              Seu ZapPack está a caminho.
            </Text>

            {/* Instructions */}
            <Card
              variant="bordered"
              padding="default"
              className="text-left mb-12 animate-fade-in card-padding-lg"
              style={{ animationDelay: '300ms' }}
            >
              <Heading level={3} className="text-xl font-bold mb-6">
                Próximos passos:
              </Heading>
              <ol className="space-y-6 text-[var(--color-text-secondary)]">
                <li className="flex gap-4 items-center">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-sm font-bold text-[var(--color-primary-light)] border border-[var(--color-primary)]/20">
                    1
                  </span>
                  <span className="text-lg">
                    Verifique seu e-mail (inclusive a pasta de spam)
                  </span>
                </li>
                <li className="flex gap-4 items-center">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-sm font-bold text-[var(--color-primary-light)] border border-[var(--color-primary)]/20">
                    2
                  </span>
                  <span className="text-lg">
                    Clique no link para baixar os arquivos
                  </span>
                </li>
                <li className="flex gap-4 items-center">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-sm font-bold text-[var(--color-primary-light)] border border-[var(--color-primary)]/20">
                    3
                  </span>
                  <span className="text-lg">
                    Abra o PDF e comece a usar as mensagens
                  </span>
                </li>
              </ol>
            </Card>

            {/* Support */}
            <Text variant="muted" className="mb-8">
              Não recebeu o e-mail? Verifique a pasta de spam ou entre em
              contato.
            </Text>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                href="/contato"
                variant="outline"
                size="lg"
                className="px-8 py-4"
              >
                Preciso de Ajuda
              </Button>
              <Button href="/" size="lg" className="px-8 py-4">
                Voltar ao Início
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
