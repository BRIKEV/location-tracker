import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import es from './locales/es.json';
import en from './locales/en.json';

const resources = {
  en: {
    translation: en,
  },
  es: {
    translation: es,
  },
};

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'es',
    supportedLngs: ['en', 'es'],
    debug: false,
    resources,
  });
