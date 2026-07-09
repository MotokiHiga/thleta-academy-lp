import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ja from './locales/ja.json';
import en from './locales/en.json';

const STORAGE_KEY = 'athleta-academy-lang';

const storedLang = typeof window !== 'undefined' ? window.localStorage.getItem(STORAGE_KEY) : null;

i18n.use(initReactI18next).init({
  resources: {
    ja: { translation: ja },
    en: { translation: en },
  },
  lng: storedLang === 'en' ? 'en' : 'ja',
  fallbackLng: 'ja',
  interpolation: {
    escapeValue: false,
  },
});

i18n.on('languageChanged', (lng) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(STORAGE_KEY, lng);
    document.documentElement.lang = lng;
  }
});

export default i18n;
