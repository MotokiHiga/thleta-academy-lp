import { Mail, Facebook, Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { withLineBreaks } from '../lib/withLineBreaks';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-br from-[#002776] to-[#001a50] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🇧🇷</span>
              <div>
                <h3 className="text-2xl font-bold text-[#FEDD00]">
                  ATHLETA ACADEMY OKINAWA JAPAN
                </h3>
                <p className="text-sm text-gray-300">{t('footer.subtitle')}</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              {withLineBreaks(t('footer.aboutText'))}
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/BrazilianSoccerClub/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FEDD00] hover:text-[#002776] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/brazilian.soccer.club.okinawa/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FEDD00] hover:text-[#002776] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg text-[#FEDD00]">{t('footer.quickLinksTitle')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-[#FEDD00] transition-colors">
                  {t('footer.links.about')}
                </a>
              </li>
              <li>
                <a href="#programs" className="text-gray-300 hover:text-[#FEDD00] transition-colors">
                  {t('footer.links.programs')}
                </a>
              </li>
              <li>
                <a href="#application-form" className="text-gray-300 hover:text-[#FEDD00] transition-colors">
                  {t('footer.links.applicationForm')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FEDD00] transition-colors">
                  {t('footer.links.coach')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FEDD00] transition-colors">
                  {t('footer.links.access')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-lg text-[#FEDD00]">{t('footer.contactTitle')}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#FEDD00] flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@brazilian-soccer.jp</span>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-sm text-gray-300 mb-3">{t('footer.snsText')}</p>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/BrazilianSoccerClub/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-[#1877F2] transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                  <span className="text-sm">Facebook</span>
                </a>
                <a
                  href="https://www.instagram.com/brazilian.soccer.club.okinawa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-gradient-to-r hover:from-[#833AB4] hover:via-[#E1306C] hover:to-[#F56040] transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="text-sm">Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Banner */}
        <div className="bg-gradient-to-r from-[#009739]/20 via-[#FEDD00]/20 to-[#009739]/20 rounded-xl p-6 mb-8 border border-[#FEDD00]/30">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-[#FEDD00]">{t('footer.stats.experienceNumber')}</div>
              <div className="text-xs text-gray-300">{t('footer.stats.experienceLabel')}</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#FEDD00]">{t('footer.stats.graduatesNumber')}</div>
              <div className="text-xs text-gray-300">{t('footer.stats.graduatesLabel')}</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#FEDD00]">{t('footer.stats.nationalNumber')}</div>
              <div className="text-xs text-gray-300">{t('footer.stats.nationalLabel')}</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#FEDD00]">{t('footer.stats.satisfactionNumber')}</div>
              <div className="text-xs text-gray-300">{t('footer.stats.satisfactionLabel')}</div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 ATHLETA ACADEMY OKINAWA JAPAN. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#FEDD00] transition-colors">
                {t('footer.privacyPolicy')}
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FEDD00] transition-colors">
                {t('footer.termsOfService')}
              </a>
            </div>
          </div>
          <p className="text-center text-xs text-gray-500 mt-4">
            {t('footer.founderLine')}
          </p>
        </div>
      </div>
    </footer>
  );
}
