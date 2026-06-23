import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { PageWrapper } from '../components/layout/PageWrapper';
import { buildPageMeta } from '../utils/seo';
import { useLanguage } from '../hooks/useLanguage';
import { testimonials } from '../data/testimonials';
import { motion } from 'framer-motion';
import { Star, DoorOpen, Bed, Coffee, ScanFace, Sparkles, Award } from 'lucide-react';

export default function Testimonials() {
  const { t } = useTranslation('testimonials');
  const { lang } = useLanguage();
  const meta = buildPageMeta({
    title: t('title'),
    description: t('subtitle'),
    slug: 'testimonials',
    lang
  });

  return (
    <PageWrapper>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>
      
      <section className="bg-bg-surface py-20 border-b border-border text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-primary-500">{t('title')}</h1>
          <p className="text-xl text-text-muted">{t('subtitle')}</p>
        </div>
      </section>

      {/* Curated Comforts */}
      <section className="py-24 bg-bg-page border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">{t('comforts.title')}</h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">{t('comforts.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="md:col-span-8 bg-bg-elevated rounded-3xl border border-border p-8 flex flex-col justify-end min-h-[400px] relative overflow-hidden group">
              <img src="/images/clinic_interior_new.png" alt="Private Suites" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/40 to-transparent"></div>
              <div className="relative z-10 text-white mt-auto">
                <DoorOpen size={36} className="text-primary-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3">{t('comforts.suites.title')}</h3>
                <p className="text-primary-100 max-w-md">{t('comforts.suites.desc')}</p>
              </div>
            </motion.div>
            
            <div className="md:col-span-4 flex flex-col gap-6">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex-1 bg-bg-elevated rounded-3xl border border-border p-8 flex flex-col justify-center">
                <Bed size={36} className="text-primary-500 mb-4" />
                <h3 className="text-xl font-bold text-text-primary mb-2">{t('comforts.blankets.title')}</h3>
                <p className="text-sm text-text-muted">{t('comforts.blankets.desc')}</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex-1 bg-bg-elevated rounded-3xl border border-border p-8 flex flex-col justify-center">
                <Coffee size={36} className="text-primary-500 mb-4" />
                <h3 className="text-xl font-bold text-text-primary mb-2">{t('comforts.lounge.title')}</h3>
                <p className="text-sm text-text-muted">{t('comforts.lounge.desc')}</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Precision Meets Comfort */}
      <section className="py-24 bg-bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">{t('tech.title')}</h2>
              <p className="text-lg text-text-muted mb-10">{t('tech.subtitle')}</p>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 bg-bg-elevated border border-border rounded-xl flex items-center justify-center text-primary-500">
                    <ScanFace size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">{t('tech.scan.title')}</h3>
                    <p className="text-text-muted">{t('tech.scan.desc')}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 bg-bg-elevated border border-border rounded-xl flex items-center justify-center text-primary-500">
                    <Sparkles size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">{t('tech.laser.title')}</h3>
                    <p className="text-text-muted">{t('tech.laser.desc')}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 bg-bg-elevated border border-border rounded-xl flex items-center justify-center text-primary-500">
                    <Award size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">{t('tech.crowns.title')}</h3>
                    <p className="text-text-muted">{t('tech.crowns.desc')}</p>
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

      {/* Testimonials Grid */}
      <section className="py-24 bg-bg-page min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">{t('reviews')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((review, idx) => (
              <motion.div 
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-bg-elevated p-8 rounded-3xl border border-border shadow-sm hover:shadow-hover transition-shadow flex flex-col"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className={i < review.rating ? "text-accent fill-accent" : "text-border"} />
                  ))}
                </div>
                <p className="text-lg text-text-primary mb-8 flex-1 italic">"{review[lang].text}"</p>
                
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-border">
                  <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 bg-warm-200">
                    <img src={review.avatar} alt={review[lang].name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div>
                    <p className="font-bold">{review[lang].name}</p>
                    <p className="text-sm text-text-muted">{new Date(review.date).toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
