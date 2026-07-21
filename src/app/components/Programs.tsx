import { Target, Check } from 'lucide-react';
import { Trans, useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import { withLineBreaks } from '../lib/withLineBreaks';

interface ProgramItemText {
  name: string;
  subtitle: string;
  description: string;
  age: string;
  frequency: string;
  price: string;
  features: string[];
}

export function Programs() {
  const { t } = useTranslation();

  const programs = [
    {
      id: 'middle-high',
      icon: Target,
      color: 'yellow',
    },
  ];

  const colorClasses = {
    blue: {
      bg: 'bg-[#002776]',
      border: 'border-[#002776]',
      text: 'text-[#002776]',
      hover: 'hover:bg-[#002776]/90',
      light: 'bg-[#002776]/10'
    },
    green: {
      bg: 'bg-[#009739]',
      border: 'border-[#009739]',
      text: 'text-[#009739]',
      hover: 'hover:bg-[#009739]/90',
      light: 'bg-[#009739]/10'
    },
    yellow: {
      bg: 'bg-[#FEDD00]',
      border: 'border-[#FEDD00]',
      text: 'text-[#002776]',
      hover: 'hover:bg-[#FEDD00]/90',
      light: 'bg-[#FEDD00]/20'
    }
  };

  const scrollToForm = () => {
    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('programs.sectionTitle')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('programs.sectionSubtitle')}
          </p>
        </div>

        <div className="flex justify-center max-w-md mx-auto mb-16">
          {programs.map((program) => {
            const Icon = program.icon;
            const colors = colorClasses[program.color as keyof typeof colorClasses];
            const item = t(`programs.items.${program.id}`, { returnObjects: true }) as ProgramItemText;

            return (
              <div
                key={program.id}
                className={`relative bg-white rounded-2xl shadow-lg overflow-hidden border-2 ${colors.border} transition-transform hover:scale-105`}
              >
                {program.recommended && (
                  <div className={`absolute top-4 right-4 ${colors.bg} text-white px-3 py-1 rounded-full text-sm font-semibold z-10`}>
                    {t('programs.recommendedBadge')}
                  </div>
                )}

                <div className={`${colors.bg} ${program.color === 'yellow' ? 'text-[#002776]' : 'text-white'} p-6`}>
                  <Icon className="w-12 h-12 mb-4" />
                  <h3 className="text-3xl font-bold mb-2">{item.name}</h3>
                  <p className="text-lg opacity-90">{item.subtitle}</p>
                </div>

                <div className="p-6">
                  <p className="text-gray-700 mb-6 leading-relaxed min-h-[60px]">
                    {item.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-semibold text-gray-700">{t('programs.ageLabel')}</span>
                      <span className="text-gray-600">{item.age}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <span className="font-semibold text-gray-700 flex-shrink-0">{t('programs.frequencyLabel')}</span>
                      <span className="text-gray-600">{item.frequency}</span>
                    </div>
                    <div className={`text-2xl font-bold ${colors.text} mt-4`}>
                      {item.price}
                    </div>
                  </div>

                  <div className="border-t pt-6 mb-6">
                    <h4 className="font-semibold mb-3 text-gray-800">{t('programs.featuresLabel')}</h4>
                    <ul className="space-y-2">
                      {item.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`} />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    className={`w-full ${colors.bg} ${colors.hover} ${program.color === 'yellow' ? 'text-[#002776]' : 'text-white'}`}
                    onClick={scrollToForm}
                  >
                    {t('common.ctaFreeTrial')}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Details */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-200">
          <h3 className="text-2xl font-bold mb-8 text-center">{t('programs.pricingTitle')}</h3>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Initial Fees */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#009739]">{t('programs.initialFeesTitle')}</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-white rounded-lg border">
                  <span className="text-gray-700">{t('programs.fees.enrollment')}</span>
                  <span className="font-bold text-[#002776]">¥6,000</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg border">
                  <span className="text-gray-700">{t('programs.fees.annual')}</span>
                  <span className="font-bold text-[#002776]">¥5,500</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg border">
                  <span className="text-gray-700">{t('programs.fees.uniform')}</span>
                  <span className="font-bold text-[#002776]">¥16,000</span>
                </div>
              </div>
            </div>

            {/* Options & Discounts */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#009739]">{t('programs.optionsTitle')}</h4>
              <div className="space-y-3">
                <div className="p-4 bg-gradient-to-r from-[#FEDD00]/20 to-transparent rounded-lg border border-[#FEDD00]">
                  <h5 className="font-semibold text-[#002776] mb-2">{t('programs.siblingDiscountTitle')}</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <Trans i18nKey="programs.siblingDiscountItem1" components={{ 1: <strong /> }} /></li>
                    <li>• <Trans i18nKey="programs.siblingDiscountItem2" components={{ 1: <strong /> }} /></li>
                  </ul>
                </div>
                <div className="p-4 bg-gradient-to-r from-[#009739]/10 to-transparent rounded-lg border border-[#009739]">
                  <h5 className="font-semibold text-[#002776] mb-2">{t('programs.freeTrialTitle')}</h5>
                  <p className="text-sm text-gray-700">
                    <Trans i18nKey="programs.freeTrialText" components={{ 1: <strong /> }} />
                  </p>
                </div>
                <div className="p-4 bg-gradient-to-r from-[#002776]/10 to-transparent rounded-lg border border-[#002776]">
                  <h5 className="font-semibold text-[#002776] mb-2">{t('programs.transferTitle')}</h5>
                  <p className="text-sm text-gray-700">{t('programs.transferText')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center pt-6 border-t">
            <p className="text-sm text-gray-600">
              {withLineBreaks(t('programs.footnote'))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
