import { useTranslation } from 'react-i18next';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

interface FAQText {
  question: string;
  answer: string;
}

const faqIds = ['faq1', 'faq2', 'faq3', 'faq4', 'faq5', 'faq6', 'faq7', 'faq8', 'faq9', 'faq10'];

export function FAQ() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t('faq.sectionTitle')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('faq.sectionSubtitle')}
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqIds.map((id) => {
              const faq = t(`faq.items.${id}`, { returnObjects: true }) as FAQText;
              return (
                <AccordionItem
                  key={id}
                  value={id}
                  className="bg-gradient-to-r from-gray-50 to-white rounded-lg px-6 border border-gray-200 hover:border-[#FEDD00] transition-colors"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="font-semibold text-lg pr-4 text-[#002776]">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
