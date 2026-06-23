import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import locales (we will define them next)
import enCommon from './locales/en/common.json';
import arCommon from './locales/ar/common.json';
import enHome from './locales/en/home.json';
import arHome from './locales/ar/home.json';
import enServices from './locales/en/services.json';
import arServices from './locales/ar/services.json';
import enAbout from './locales/en/about.json';
import arAbout from './locales/ar/about.json';
import enGallery from './locales/en/gallery.json';
import arGallery from './locales/ar/gallery.json';
import enTestimonials from './locales/en/testimonials.json';
import arTestimonials from './locales/ar/testimonials.json';
import enContact from './locales/en/contact.json';
import arContact from './locales/ar/contact.json';
import enPrivacy from './locales/en/privacy.json';
import arPrivacy from './locales/ar/privacy.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { 
        common: enCommon, home: enHome, services: enServices, 
        about: enAbout, gallery: enGallery, testimonials: enTestimonials, contact: enContact, privacy: enPrivacy
      },
      ar: { 
        common: arCommon, home: arHome, services: arServices, 
        about: arAbout, gallery: arGallery, testimonials: arTestimonials, contact: arContact, privacy: arPrivacy
      }
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'ar'],
    ns: ['common', 'home', 'services', 'about', 'gallery', 'testimonials', 'contact', 'privacy'],
    defaultNS: 'common',
    fallbackNS: 'common',
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
