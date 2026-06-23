import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { PageWrapper } from '../components/layout/PageWrapper';
import { buildPageMeta } from '../utils/seo';
import { useLanguage } from '../hooks/useLanguage';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  const { t } = useTranslation('privacy');
  const { lang } = useLanguage();
  const meta = buildPageMeta({
    title: t('title', { defaultValue: 'Privacy Policy' }),
    description: t('subtitle', { defaultValue: 'How we protect your data at Luxe Dental' }),
    slug: 'privacy',
    lang
  });

  return (
    <PageWrapper>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>
      
      {/* Header */}
      <section className="bg-bg-surface py-20 border-b border-border text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-primary-500">{t('title')}</h1>
          <p className="text-xl text-text-muted">{t('subtitle')}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-bg-page">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-bg-elevated p-8 md:p-12 rounded-3xl border border-border"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm text-text-muted mb-8">{t('lastUpdated')}</p>
            
            <div className="prose dark:prose-invert max-w-none text-text-muted">
              <p className="text-lg mb-10 leading-relaxed text-text-primary">
                {t('intro')}
              </p>
              
              <div className="space-y-12">
                {t('sections', { returnObjects: true }).map((section, idx) => (
                  <div key={idx}>
                    <h2 className="text-2xl font-bold text-text-primary mb-4">{section.title}</h2>
                    <p className="leading-relaxed">{section.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
