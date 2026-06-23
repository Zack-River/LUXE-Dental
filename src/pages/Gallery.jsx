import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { PageWrapper } from '../components/layout/PageWrapper';
import { buildPageMeta } from '../utils/seo';
import { useLanguage } from '../hooks/useLanguage';
import { motion } from 'framer-motion';
import { MoveHorizontal, Compass } from 'lucide-react';

const BeforeAfterSlider = ({ beforeImage, afterImage, beforeLabel, afterLabel }) => {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX, rect) => {
    if (!isDragging) return;
    setPosition(Math.max(0, Math.min(((clientX - rect.left) / rect.width) * 100, 100)));
  };

  return (
    <div 
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-lg touch-none"
      dir="ltr"
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={(e) => handleMove(e.clientX, e.currentTarget.getBoundingClientRect())}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX, e.currentTarget.getBoundingClientRect())}
    >
      <img src={beforeImage} alt="Before" draggable="false" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
      <img src={afterImage} alt="After" draggable="false" className="absolute inset-0 w-full h-full object-cover pointer-events-none" style={{ clipPath: `inset(0 0 0 ${position}%)` }} />
      <div className="absolute top-0 bottom-0 w-1 bg-white pointer-events-none shadow-[0_0_10px_rgba(0,0,0,0.5)]" style={{ left: `calc(${position}% - 2px)` }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl border border-border">
          <MoveHorizontal className="text-text-primary" size={20} />
        </div>
      </div>
      <span className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm backdrop-blur-md pointer-events-none">{beforeLabel}</span>
      <span className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm backdrop-blur-md pointer-events-none">{afterLabel}</span>
    </div>
  );
};

export default function Gallery() {
  const { t } = useTranslation('gallery');
  const { lang } = useLanguage();
  const meta = buildPageMeta({
    title: t('title'),
    description: t('subtitle'),
    slug: 'gallery',
    lang
  });

  const galleryItems = [
    { id: 1, title: 'Veneers & Whitening', image: '/images/teeth_yellow.png', type: 'cosmetic' },
    { id: 2, title: 'Full Arch Implants', image: '/images/implant_icons.png', type: 'restorative' },
    { id: 3, title: 'Porcelain Crowns', image: '/images/implant_model.png', type: 'restorative' }
  ];

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

      {/* Brilliant Results: Before/After */}
      <section className="py-24 bg-bg-page border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-block py-1 px-3 rounded-full bg-primary-500/10 text-primary-500 border border-primary-500/20 text-sm font-bold uppercase tracking-widest mb-4">
                {t('beforeAfter.badge')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-8">{t('beforeAfter.title')}</h2>
              
              <div className="space-y-6">
                <div className="bg-bg-elevated p-6 rounded-2xl border border-border border-l-4 border-l-primary-500 rtl:border-r-4 rtl:border-l-0 rtl:border-r-primary-500">
                  <h4 className="font-bold text-text-primary mb-2">{t('beforeAfter.goal')}</h4>
                  <p className="text-text-muted">{t('beforeAfter.goalDesc')}</p>
                </div>
                <div className="bg-bg-elevated p-6 rounded-2xl border border-border border-l-4 border-l-primary-500 rtl:border-r-4 rtl:border-l-0 rtl:border-r-primary-500">
                  <h4 className="font-bold text-text-primary mb-2">{t('beforeAfter.treatment')}</h4>
                  <p className="text-text-muted">{t('beforeAfter.treatmentDesc')}</p>
                </div>
                <div className="bg-bg-elevated p-6 rounded-2xl border border-border border-l-4 border-l-primary-500 rtl:border-r-4 rtl:border-l-0 rtl:border-r-primary-500">
                  <h4 className="font-bold text-text-primary mb-2">{t('beforeAfter.outcome')}</h4>
                  <p className="text-text-muted">{t('beforeAfter.outcomeDesc')}</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="w-full">
              <BeforeAfterSlider 
                beforeImage="/images/teeth_before.png"
                afterImage="/images/teeth_after.png"
                beforeLabel={t('before')}
                afterLabel={t('after')}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 bg-bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, idx) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group cursor-pointer rounded-2xl overflow-hidden bg-bg-elevated border border-border"
              >
                <div className="aspect-square relative overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-primary-400 text-sm font-medium mb-1 uppercase tracking-wider">{t('case')}</span>
                    <h3 className="text-white text-xl font-bold">{item.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bespoke Process */}
      <section className="py-20 bg-primary-900 text-center border-t border-border">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Compass className="text-primary-400 mb-6 mx-auto" size={36} />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">{t('process.title')}</h2>
            <p className="text-lg text-primary-100 leading-relaxed">{t('process.desc')}</p>
          </motion.div>
        </div>
      </section>

    </PageWrapper>
  );
}
