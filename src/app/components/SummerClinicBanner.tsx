import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronRight } from 'lucide-react';
import { SUMMER_CLINIC_FORM_URL } from '../lib/links';

const STORAGE_KEY = 'summerClinicBannerClosed';

export function SummerClinicBanner() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  const close = () => {
    sessionStorage.setItem(STORAGE_KEY, '1');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="relative z-30 bg-gradient-to-r from-[#009739] via-[#002776] to-[#009739] text-white">
      <div className="container mx-auto px-4 py-2.5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center">
        <span className="text-sm md:text-base font-semibold">
          {t('summerClinic.bannerText')}
        </span>
        <a
          href={SUMMER_CLINIC_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm md:text-base font-bold text-[#002776] bg-[#FEDD00] hover:bg-[#FEDD00]/90 rounded-full px-3 py-1 transition-colors"
        >
          {t('summerClinic.bannerButton')}
          <ChevronRight className="ml-1 h-4 w-4" />
        </a>
      </div>
      <button
        type="button"
        onClick={close}
        aria-label={t('summerClinic.closeAria')}
        className="absolute top-1/2 right-2 -translate-y-1/2 w-6 h-6 flex items-center justify-center rounded-full text-white/80 hover:text-white hover:bg-white/10 text-sm"
      >
        ×
      </button>
    </div>
  );
}
