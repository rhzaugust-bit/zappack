'use client';

import { Metadata } from 'next';
import { useState } from 'react';
import { Button, Section, Container, Heading, Text } from '@/components/ui';

const faqs = [
  {
    question: 'O que exatamente eu vou receber?',
    answer:
      'Você recebe um PDF organizado com mais de 50 mensagens prontas para WhatsApp, divididas por categorias (saudação, horários, preços, promoções, agradecimento, etc). Também inclui uma versão editável para você personalizar.',
  },
  {
    question: 'Preciso instalar algum aplicativo?',
    answer:
      'Não. O ZapPack são arquivos digitais (PDF + editável). Você baixa, abre no celular ou computador, copia as mensagens e cola diretamente no WhatsApp.',
  },
  {
    question: 'Serve para qualquer tipo de negócio?',
    answer:
      'O ZapPack foi criado pensando em negócios locais brasileiros: salões, restaurantes, lanchonetes, lojas, prestadores de serviço. As mensagens são genéricas o suficiente para adaptar a qualquer segmento.',
  },
  {
    question: 'Como recebo os arquivos depois da compra?',
    answer:
      'Imediatamente após a confirmação do pagamento, você recebe um e-mail com o link para download. O acesso é vitalício.',
  },
  {
    question: 'Tem garantia?',
    answer:
      'Sim. Oferecemos garantia de 7 dias. Se por qualquer motivo você não ficar satisfeito, devolvemos 100% do valor pago.',
  },
  {
    question: 'Posso editar as mensagens?',
    answer:
      'Com certeza! Além do PDF, você recebe uma versão editável. Personalize as mensagens do jeito que fizer sentido para o seu negócio.',
  },
  {
    question: 'É pagamento único ou assinatura?',
    answer:
      'Pagamento único. Você paga uma vez e tem acesso vitalício aos arquivos, sem taxas mensais.',
  },
  {
    question: 'Tenho suporte se precisar de ajuda?',
    answer:
      'Sim. Se tiver qualquer dúvida, pode entrar em contato pelo WhatsApp que aparece na página de contato.',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div>
      {/* Hero */}
      <Section variant="hero">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Heading level={1}>Perguntas Frequentes</Heading>
            <Text variant="lead" className="max-w-2xl mx-auto">
              Tire suas dúvidas sobre o ZapPack.
            </Text>
          </div>
        </Container>
      </Section>

      {/* FAQ Accordion */}
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl border border-[var(--color-border)] overflow-hidden bg-[var(--color-surface)]"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[var(--color-base)] transition-colors card-padding-lg"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-semibold text-lg pr-6">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 text-[var(--color-text-muted)] text-xl">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-8 pb-8 text-[var(--color-text-secondary)] text-lg leading-relaxed border-t border-[var(--color-border)/30] pt-6 ml-0 card-padding-lg">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section variant="surface">
        <Container className="text-center">
          <Heading level={2}>Ainda tem dúvidas?</Heading>
          <Text variant="lead" className="mb-10 max-w-2xl mx-auto">
            Entre em contato que respondemos rapidinho.
          </Text>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              href="/contato"
              variant="outline"
              size="lg"
              className="px-8 py-4"
            >
              Falar Conosco
            </Button>
            <Button href="/checkout" size="lg" className="px-8 py-4">
              Comprar Agora
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}
