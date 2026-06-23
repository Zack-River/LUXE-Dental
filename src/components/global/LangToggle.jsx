import { useLanguage } from '../../hooks/useLanguage';
import { motion } from 'framer-motion';

export const LangToggle = () => {
  const { lang, switchLanguage } = useLanguage();

  return (
    <button
      onClick={() => switchLanguage(lang === 'en' ? 'ar' : 'en')}
      aria-label="Switch language"
      className="px-3 py-1 text-sm font-medium rounded-full border border-warm-200 dark:border-border hover:bg-warm-100 dark:hover:bg-navy-800 transition-colors"
    >
      <motion.div layout>
        {lang === 'en' ? 'عربي' : 'EN'}
      </motion.div>
    </button>
  );
};
