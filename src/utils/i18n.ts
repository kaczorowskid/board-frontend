import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import en from '../locales/en/en.json';
import pl from '../locales/pl/pl.json';

const resources = {
  en: {
    translation: en
  },
  pl: {
    translation: pl
  }
};

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources,
  fallbackLng: 'en',
  keySeparator: '.',
  debug: false
});

export default i18n;
