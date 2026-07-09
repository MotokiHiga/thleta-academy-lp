import { Target, TrendingUp, Users, Heart } from 'lucide-react';
import { Trans, useTranslation } from 'react-i18next';
import { withLineBreaks } from '../lib/withLineBreaks';

export function About() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Problem Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <Trans i18nKey="about.problemTitle" components={{ 1: <span className="text-[#009739]" /> }} />
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mt-10">
              <div className="p-6 bg-gray-50 rounded-xl border-l-4 border-[#009739]">
                <div className="text-4xl mb-4">😟</div>
                <p className="text-lg">{t('about.worry1')}</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl border-l-4 border-[#FEDD00]">
                <div className="text-4xl mb-4">😔</div>
                <p className="text-lg">{t('about.worry2')}</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl border-l-4 border-[#002776]">
                <div className="text-4xl mb-4">😰</div>
                <p className="text-lg">{t('about.worry3')}</p>
              </div>
            </div>
          </div>

          {/* Solution Section */}
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#009739] to-[#002776] text-white rounded-full text-lg font-semibold mb-6">
              {t('about.solutionBadge')}
            </div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
              {withLineBreaks(t('about.solutionText'))}
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#009739]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-[#009739]" />
              </div>
              <h3 className="font-bold text-lg mb-2">{t('about.features.individual.title')}</h3>
              <p className="text-gray-600">{t('about.features.individual.description')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FEDD00]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-[#002776]" />
              </div>
              <h3 className="font-bold text-lg mb-2">{t('about.features.growth.title')}</h3>
              <p className="text-gray-600">{t('about.features.growth.description')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#002776]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#002776]" />
              </div>
              <h3 className="font-bold text-lg mb-2">{t('about.features.proCoaching.title')}</h3>
              <p className="text-gray-600">{t('about.features.proCoaching.description')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#009739]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-[#009739]" />
              </div>
              <h3 className="font-bold text-lg mb-2">{t('about.features.enjoy.title')}</h3>
              <p className="text-gray-600">{t('about.features.enjoy.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
