import { useTranslation } from 'react-i18next';
import { ChevronRight } from 'lucide-react';
import { SUMMER_CLINIC_FORM_URL } from '../lib/links';
import { withLineBreaks } from '../lib/withLineBreaks';

export function SummerClinicCallout() {
  const { t } = useTranslation();

  return (
    <section className="py-12 bg-gradient-to-r from-[#009739]/10 via-[#FEDD00]/10 to-[#009739]/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto rounded-2xl border border-[#FEDD00]/40 bg-white shadow-md p-6 md:p-8 text-center">
          <span className="inline-block text-xs md:text-sm font-bold text-[#002776] bg-[#FEDD00] rounded-full px-3 py-1 mb-3">
            {t('summerClinic.calloutBadge')}
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-[#002776] mb-2">
            {t('summerClinic.calloutTitle')}
          </h3>
          <p className="text-gray-600 mb-6">
            {withLineBreaks(t('summerClinic.calloutText'))}
          </p>
          <a
            href={SUMMER_CLINIC_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-base font-bold px-6 py-3 rounded-full bg-[#002776] text-white hover:bg-[#002776]/90 transition-colors"
          >
            {t('summerClinic.calloutButton')}
            <ChevronRight className="ml-1 h-5 w-5" />
          </a>
          <p className="text-xs text-gray-400 mt-3">
            {t('summerClinic.externalFormNote')}
          </p>
        </div>
      </div>
    </section>
  );
}
