import { Award, Trophy, Star, GraduationCap } from 'lucide-react';
import { Trans, useTranslation } from 'react-i18next';
import { withLineBreaks } from '../lib/withLineBreaks';
import coachImage from 'figma:asset/970f07eae7cf8b1a34f0f83d6ad5ee3d6533e276.png';

const licenseOrder = ['cbfB', 'cbfAcademy', 'fifaBeach', 'saoPauloCert', 'cbfA'] as const;

export function CoachProfile() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#009739] to-[#FEDD00] text-[#002776] rounded-full text-lg font-semibold mb-4">
              {t('common.brazilBadge')}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              {t('coachProfile.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Coach Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FEDD00]">
                <img
                  src={coachImage}
                  alt="Roberto Iwashita"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-[#009739] to-[#002776] text-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">17+</div>
                <div className="text-sm">{t('coachProfile.yearsExperience')}</div>
              </div>
            </div>

            {/* Coach Info */}
            <div>
              <div className="mb-6">
                <h3 className="text-3xl font-bold mb-2">{t('coachProfile.nameMain')}</h3>
                <p className="text-xl text-[#009739] font-semibold">{t('coachProfile.nameSub')}</p>
                <p className="text-lg text-gray-600 mt-1">{t('coachProfile.role')}</p>
              </div>

              <div className="bg-gradient-to-r from-[#009739]/10 to-[#002776]/10 p-6 rounded-xl mb-6 border-l-4 border-[#FEDD00]">
                <p className="text-lg font-semibold text-gray-800 italic">
                  {t('coachProfile.quoteMain')}<br />
                  <span className="text-base font-normal">{t('coachProfile.quoteSub')}</span>
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <p className="text-gray-700 leading-relaxed">
                  <Trans i18nKey="coachProfile.bio1" components={{ 1: <strong />, 2: <strong /> }} />
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <Trans i18nKey="coachProfile.bio2" components={{ 1: <strong /> }} />
                </p>
              </div>
            </div>
          </div>

          {/* Achievements Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">
              <Trans i18nKey="coachProfile.achievementsTitle" components={{ 1: <span className="text-[#009739]" /> }} />
            </h3>
            <p className="text-center text-gray-700 mb-8">
              <Trans
                i18nKey="coachProfile.achievementsText"
                components={{ 1: <strong className="text-[#009739] text-xl" />, 2: <br /> }}
              />
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-[#009739]/5 to-transparent rounded-xl">
                <div className="w-10 h-10 bg-[#009739] rounded-full flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">{t('coachProfile.achievements.beachSoccer.title')}</h4>
                  <p className="text-xs text-gray-600">{t('coachProfile.achievements.beachSoccer.description')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-[#002776]/5 to-transparent rounded-xl">
                <div className="w-10 h-10 bg-[#002776] rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">{t('coachProfile.achievements.overseasClub.title')}</h4>
                  <p className="text-xs text-gray-600">{t('coachProfile.achievements.overseasClub.description')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-[#FEDD00]/20 to-transparent rounded-xl">
                <div className="w-10 h-10 bg-[#FEDD00] rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-5 h-5 text-[#002776]" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">{t('coachProfile.achievements.overseasUniversity.title')}</h4>
                  <p className="text-xs text-gray-600">{t('coachProfile.achievements.overseasUniversity.description')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-[#009739]/5 to-transparent rounded-xl">
                <div className="w-10 h-10 bg-gradient-to-r from-[#009739] to-[#002776] rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">{t('coachProfile.achievements.topTeam.title')}</h4>
                  <p className="text-xs text-gray-600">{t('coachProfile.achievements.topTeam.description')}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-[#009739]/10 via-[#FEDD00]/10 to-[#002776]/10 rounded-xl text-center">
              <p className="text-gray-800 leading-relaxed italic">
                <Trans
                  i18nKey="coachProfile.philosophyQuote"
                  components={{ 1: <strong />, 2: <strong />, 3: <br /> }}
                />
              </p>
            </div>
          </div>

          {/* Licenses Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">
              <Trans i18nKey="coachProfile.licensesTitle" components={{ 1: <span className="text-[#009739]" /> }} />
            </h3>

            <div className="space-y-4">
              {licenseOrder.map((key, idx) => (
                <div
                  key={key}
                  className={
                    idx === licenseOrder.length - 1
                      ? 'flex items-center gap-4 p-4 bg-gradient-to-r from-[#FEDD00]/20 to-[#009739]/10 rounded-xl border-2 border-[#FEDD00]'
                      : 'flex items-center gap-4 p-4 bg-gray-50 rounded-xl'
                  }
                >
                  <div
                    className={
                      idx === licenseOrder.length - 1
                        ? 'w-20 text-[#002776] font-bold text-center'
                        : 'w-20 text-[#009739] font-bold text-center'
                    }
                  >
                    {t(`coachProfile.licenses.${key}.year`)}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">{t(`coachProfile.licenses.${key}.title`)}</h4>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-600 mt-6">
              {withLineBreaks(t('coachProfile.licensesFooter'))}
            </p>
          </div>

          {/* Philosophy */}
          <div className="bg-gradient-to-br from-[#009739] to-[#002776] text-white rounded-2xl shadow-2xl p-8 md:p-10">
            <h3 className="text-2xl font-bold mb-6 text-center text-[#FEDD00]">{t('coachProfile.philosophyTitle')}</h3>
            <div className="text-center mb-6">
              <p className="text-3xl font-bold mb-2">{t('coachProfile.philosophyMotto')}</p>
              <p className="text-xl">{t('coachProfile.philosophyMottoTranslation')}</p>
            </div>
            <p className="text-lg text-center mb-8">
              <Trans
                i18nKey="coachProfile.philosophyText"
                components={{ 1: <strong />, 2: <br />, 3: <br /> }}
              />
            </p>

            {/* Coach Message */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="font-semibold mb-3 text-[#FEDD00]">{t('coachProfile.messageTitle')}</h4>
              <p className="leading-relaxed">
                {t('coachProfile.messageText')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
