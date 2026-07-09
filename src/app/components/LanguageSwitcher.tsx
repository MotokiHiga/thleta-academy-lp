import { useTranslation } from 'react-i18next';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const buttonClass = (lang: string) =>
    `px-4 py-1.5 rounded-full border border-white/40 text-sm font-bold backdrop-blur-sm transition-all ${
      i18n.language === lang
        ? 'bg-[#FEDD00]/90 text-[#1a1a1a]'
        : 'bg-black/45 text-white/60 hover:text-white/90'
    }`;

  return (
    <div className="fixed top-4 right-4 z-[9999] flex gap-1.5">
      <button
        type="button"
        onClick={() => i18n.changeLanguage('ja')}
        className={buttonClass('ja')}
        aria-pressed={i18n.language === 'ja'}
      >
        JP
      </button>
      <button
        type="button"
        onClick={() => i18n.changeLanguage('en')}
        className={buttonClass('en')}
        aria-pressed={i18n.language === 'en'}
      >
        EN
      </button>
    </div>
  );
}
