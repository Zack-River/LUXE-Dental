import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { PageWrapper } from '../components/layout/PageWrapper';
import { buildPageMeta } from '../utils/seo';
import { useLanguage } from '../hooks/useLanguage';
import { services, serviceCategories } from '../data/services';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ScanFace, Sparkles } from 'lucide-react';

export default function Services() {
  const { t } = useTranslation('services');
  const { lang } = useLanguage();
  const meta = buildPageMeta({
    title: t('title'),
    description: t('subtitle'),
    slug: 'services',
    lang
  });

  const [activeFilter, setActiveFilter] = useState('all');

  const filteredServices = activeFilter === 'all' 
    ? services 
    : services.filter(service => service.category === activeFilter);

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

      {/* Services Grid */}
      <section className="py-20 bg-bg-page">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {serviceCategories.map(cat => (
              <button 
                key={cat.id} 
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-2 rounded-full border text-sm font-medium cursor-pointer transition-colors ${
                  activeFilter === cat.id 
                    ? 'bg-primary-500 text-white border-primary-500 shadow-md' 
                    : 'border-border bg-bg-elevated hover:bg-primary-50 dark:hover:bg-primary-900/20'
                }`}
              >
                {t(`categories.${cat.id}`)}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredServices.map((service, idx) => (
              <motion.div 
                key={service.id} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col md:flex-row gap-8 bg-bg-elevated p-6 rounded-3xl border border-border shadow-card hover:shadow-hover transition-shadow"
              >
                <div className="w-full md:w-2/5 h-64 md:h-auto shrink-0 overflow-hidden rounded-2xl">
                  <img src={service.image} alt={service[lang].name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="flex flex-col flex-1 justify-center">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-warm-100 dark:bg-navy-800 rounded-full text-xs font-medium mb-3">
                      {t(`categories.${service.category}`)}
                    </span>
                    <h2 className="text-2xl font-bold mb-3">{service[lang].name}</h2>
                    <p className="text-text-muted mb-6">{service[lang].fullDesc}</p>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service[lang].benefits.map((b, i) => (
                        <span key={i} className="text-sm px-2 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-500 rounded-md">
                          ✓ {b}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between border-t border-border pt-4">
                      <div>
                        <span className="block text-sm text-text-muted">Starting at</span>
                        <span className="font-bold text-lg">{service.price.amount} {service.price.currency}</span>
                      </div>
                      <Button size="sm" as={Link} to="/contact">{t('common:buttons.bookNow')}</Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Innovation Section */}
      <section className="py-24 bg-bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-block py-1 px-3 rounded-full bg-primary-500/10 text-primary-500 border border-primary-500/20 text-sm font-bold uppercase tracking-widest mb-4">
                {t('technology.badge')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">{t('technology.title')}</h2>
              <p className="text-lg text-text-muted mb-10">{t('technology.desc')}</p>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 bg-bg-elevated border border-border rounded-xl flex items-center justify-center text-primary-500">
                    <ScanFace size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">{t('technology.scan.title')}</h3>
                    <p className="text-text-muted">{t('technology.scan.desc')}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 bg-bg-elevated border border-border rounded-xl flex items-center justify-center text-primary-500">
                    <Sparkles size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">{t('technology.laser.title')}</h3>
                    <p className="text-text-muted">{t('technology.laser.desc')}</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src="/images/technology_scan.png" alt="Technology" className="rounded-2xl shadow-lg w-full" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary-900 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-white mb-4">{t('cta.title')}</h2>
          <p className="text-lg text-primary-100 mb-8">{t('cta.text')}</p>
          <Button size="lg" className="bg-white text-primary-900 hover:bg-warm-100" as={Link} to="/contact">{t('cta.button')}</Button>
        </div>
      </section>
    </PageWrapper>
  );
}
