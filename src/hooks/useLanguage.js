import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const useLanguage = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('font-arabic', i18n.language === 'ar');
  }, [i18n.language]);

  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('lang', lang);
  };

  return { lang: i18n.language, switchLanguage, isRTL: i18n.language === 'ar' };
};
