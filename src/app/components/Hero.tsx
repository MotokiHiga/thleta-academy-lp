import { ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import { withLineBreaks } from '../lib/withLineBreaks';
import heroImage from '../../assets/hero-top.png';
import logo from '../../assets/athleta-logo.png';

export function Hero() {
  const { t } = useTranslation();

  const scrollToForm = () => {
    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="Soccer training"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#009739]/80 via-[#002776]/70 to-black/80"></div>
      </div>


      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 inline-block">
            <span className="text-[#FEDD00] text-xl md:text-2xl font-semibold">{t('common.brazilBadge')}</span>
          </div>
          <img
            src={logo}
            alt="Athleta Academy Okinawa Japan"
            className="mx-auto w-64 md:w-96 mb-6 animate-fade-in"
          />
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            {withLineBreaks(t('hero.subtitle'), 'hidden md:block')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-[#FEDD00] hover:bg-[#FEDD00]/90 text-[#002776]"
              onClick={scrollToForm}
            >
              {t('common.ctaFreeTrial')}
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20"
              onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('hero.viewProgramsButton')}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
