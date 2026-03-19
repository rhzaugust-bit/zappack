import { Metadata } from 'next';
import { Section, Container, Heading, Text } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: 'Política de privacidade e proteção de dados do ZapPack.',
};

export default function PrivacidadePage() {
  return (
    <div className="pt-24">
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <Heading level={1}>Política de Privacidade</Heading>
            <Text
              variant="muted"
              className="mb-16 border-b border-[var(--color-border)] pb-8"
            >
              Última atualização: Fevereiro de 2026
            </Text>

            <div className="space-y-12">
              <section>
                <Heading level={3} className="text-2xl font-bold mb-6">
                  1. Introdução
                </Heading>
                <Text variant="secondary" size="lg">
                  O ZapPack está comprometido em proteger sua privacidade. Esta
                  política descreve como coletamos, usamos e protegemos suas
                  informações pessoais.
                </Text>
              </section>

              <section>
                <Heading level={3} className="text-2xl font-bold mb-6">
                  2. Dados Coletados
                </Heading>
                <Text variant="secondary" size="lg" className="mb-4">
                  Coletamos apenas as informações necessárias para processar sua
                  compra e entregar o produto:
                </Text>
                <ul className="list-disc list-inside space-y-2 text-lg text-[var(--color-text-secondary)] pl-4">
                  <li>Nome</li>
                  <li>Endereço de e-mail</li>
                  <li>Dados de pagamento (processados por terceiros)</li>
                </ul>
              </section>

              <section>
                <Heading level={3} className="text-2xl font-bold mb-6">
                  3. Uso dos Dados
                </Heading>
                <Text variant="secondary" size="lg" className="mb-4">
                  Utilizamos seus dados para:
                </Text>
                <ul className="list-disc list-inside space-y-2 text-lg text-[var(--color-text-secondary)] pl-4">
                  <li>Processar e entregar sua compra</li>
                  <li>Enviar comunicações sobre o produto</li>
                  <li>Responder a solicitações de suporte</li>
                  <li>Cumprir obrigações legais</li>
                </ul>
              </section>

              <section>
                <Heading level={3} className="text-2xl font-bold mb-6">
                  4. Compartilhamento de Dados
                </Heading>
                <Text variant="secondary" size="lg">
                  Não vendemos nem compartilhamos seus dados pessoais com
                  terceiros para fins de marketing. Seus dados podem ser
                  compartilhados apenas com processadores de pagamento para
                  conclusão da transação.
                </Text>
              </section>

              <section>
                <Heading level={3} className="text-2xl font-bold mb-6">
                  5. Segurança
                </Heading>
                <Text variant="secondary" size="lg">
                  Implementamos medidas de segurança para proteger suas
                  informações contra acesso não autorizado. Pagamentos são
                  processados por plataformas seguras e criptografadas.
                </Text>
              </section>

              <section>
                <Heading level={3} className="text-2xl font-bold mb-6">
                  6. Cookies
                </Heading>
                <Text variant="secondary" size="lg">
                  Utilizamos cookies essenciais para funcionamento do site.
                  Cookies de análise podem ser utilizados para melhorar a
                  experiência do usuário.
                </Text>
              </section>

              <section>
                <Heading level={3} className="text-2xl font-bold mb-6">
                  7. Seus Direitos
                </Heading>
                <Text variant="secondary" size="lg" className="mb-4">
                  Conforme a Lei Geral de Proteção de Dados (LGPD), você tem
                  direito a:
                </Text>
                <ul className="list-disc list-inside space-y-2 text-lg text-[var(--color-text-secondary)] pl-4">
                  <li>Acessar seus dados pessoais</li>
                  <li>Corrigir dados incorretos</li>
                  <li>Solicitar exclusão de dados</li>
                  <li>Revogar consentimento</li>
                </ul>
              </section>

              <section>
                <Heading level={3} className="text-2xl font-bold mb-6">
                  8. Retenção de Dados
                </Heading>
                <Text variant="secondary" size="lg">
                  Mantemos seus dados pelo tempo necessário para fornecer nossos
                  serviços e cumprir obrigações legais. Após esse período, os
                  dados são excluídos de forma segura.
                </Text>
              </section>

              <section>
                <Heading level={3} className="text-2xl font-bold mb-6">
                  9. Alterações nesta Política
                </Heading>
                <Text variant="secondary" size="lg">
                  Esta política pode ser atualizada periodicamente. Alterações
                  significativas serão comunicadas por e-mail ou no site.
                </Text>
              </section>

              <section>
                <Heading level={3} className="text-2xl font-bold mb-6">
                  10. Contato
                </Heading>
                <Text variant="secondary" size="lg">
                  Para exercer seus direitos ou esclarecer dúvidas sobre
                  privacidade, entre em contato através da nossa página de
                  contato.
                </Text>
              </section>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
