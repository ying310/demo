import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from 'locales/en.json'
import zh_tw from 'locales/zh_TW.json';

const resources = {
  en: {
    translation: en,
  },
  zh: {
    translation: zh_tw,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'en',
  lng: localStorage.getItem("locales") ? localStorage.getItem("locales") : 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;