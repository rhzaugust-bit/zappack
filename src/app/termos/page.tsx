import { Metadata } from 'next';
import { Section, Container, Heading, Text } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Termos de Uso',
  description: 'Termos de uso do site e produtos ZapPack.',
};

export default function TermosPage() {
  return (
    <div className="pt-24">
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <Heading level={1}>Termos de Uso</Heading>
            <Text
              variant="muted"
              className="mb-16 border-b border-[var(--color-border)] pb-8"
            >
              Última atualização: Fevereiro de 2026
            </Text>

            <div className="space-y-12">
              <section>
                <Heading level={3} className="text-2xl font-bold mb-6">
                  1. Aceitação dos Termos
                </Heading>
                <Text variant="secondary" size="lg">
                  Ao acessar e utilizar o site ZapPack e seus produtos, você
                  concorda com estes termos de uso. Se não concordar com algum
                  termo, não utilize nossos serviços.
                </Text>
              </section>

              <section>
                <Heading level={3} className="text-2xl font-bold mb-6">
                  2. Descrição do Produto
                </Heading>
                <Text variant="secondary" size="lg">
                  O ZapPack é um produto digital que contém mensagens prontas
                  para uso no WhatsApp. Os arquivos são entregues em formato PDF
                  e editável. O produto é destinado a uso pessoal e comercial do
                  comprador para seu próprio negócio.
                </Text>
              </section>

              <section>
                <Heading level={3} className="text-2xl font-bold mb-6">
                  3. Licença de Uso
                </Heading>
                <Text variant="secondary" size="lg">
                  Ao adquirir o ZapPack, você recebe uma licença pessoal,
                  não-exclusiva e intransferível para usar o conteúdo em seu
                  próprio negócio. Você NÃO pode revender, redistribuir ou
                  compartilhar os arquivos com terceiros.
                </Text>
              </section>

              <section>
                <Heading level={3} className="text-2xl font-bold mb-6">
                  4. Pagamento e Entrega
                </Heading>
                <Text variant="secondary" size="lg">
                  O pagamento é processado por plataformas de pagamento
                  terceirizadas. Após a confirmação do pagamento, você receberá
                  acesso imediato aos arquivos por e-mail. O acesso é vitalício.
                </Text>
              </section>

              <section>
                <Heading level={3} className="text-2xl font-bold mb-6">
                  5. Política de Reembolso
                </Heading>
                <Text variant="secondary" size="lg">
                  Oferecemos garantia de 7 dias corridos. Se não estiver
                  satisfeito com o produto, entre em contato dentro deste prazo
                  para solicitar reembolso integral. Após esse período, não
                  realizamos reembolsos.
                </Text>
              </section>

              <section>
                <Heading level={3} className="text-2xl font-bold mb-6">
                  6. Propriedade Intelectual
                </Heading>
                <Text variant="secondary" size="lg">
                  Todo o conteúdo do ZapPack, incluindo textos, design e
                  organização, é protegido por direitos autorais. A compra
                  concede direito de uso, não propriedade sobre o conteúdo.
                </Text>
              </section>

              <section>
                <Heading level={3} className="text-2xl font-bold mb-6">
                  7. Limitação de Responsabilidade
                </Heading>
                <Text variant="secondary" size="lg">
                  O ZapPack é fornecido &quot;como está&quot;. Não garantimos
                  resultados específicos de vendas ou atendimento. O uso do
                  produto é de inteira responsabilidade do comprador.
                </Text>
              </section>

              <section>
                <Heading level={3} className="text-2xl font-bold mb-6">
                  8. Alterações nos Termos
                </Heading>
                <Text variant="secondary" size="lg">
                  Reservamo-nos o direito de modificar estes termos a qualquer
                  momento. Alterações significativas serão comunicadas por
                  e-mail ou no site.
                </Text>
              </section>

              <section>
                <Heading level={3} className="text-2xl font-bold mb-6">
                  9. Contato
                </Heading>
                <Text variant="secondary" size="lg">
                  Para dúvidas sobre estes termos, entre em contato através da
                  nossa página de contato.
                </Text>
              </section>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
