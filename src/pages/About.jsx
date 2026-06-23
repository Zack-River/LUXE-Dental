import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { PageWrapper } from '../components/layout/PageWrapper';
import { buildPageMeta } from '../utils/seo';
import { useLanguage } from '../hooks/useLanguage';
import { team } from '../data/team';
import { motion } from 'framer-motion';
import { Check, ShieldCheck, MoveHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

// Reuse BeforeAfterSlider to satisfy user request for the slider on the About page
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

export default function About() {
  const { t } = useTranslation('about');
  const { t: tHome } = useTranslation('home');
  const { t: tGallery } = useTranslation('gallery');
  const { lang } = useLanguage();
  const meta = buildPageMeta({
    title: t('title'),
    description: t('subtitle'),
    slug: 'about',
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

      {/* Philosophy Section */}
      <section className="py-20 bg-bg-page border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              className="md:col-span-2 bg-bg-elevated p-8 rounded-3xl border border-border flex flex-col justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-primary-500">{t('philosophy.title')}</h3>
              <p className="text-lg text-text-muted">{t('philosophy.desc')}</p>
            </motion.div>
            
            <motion.div 
              className="bg-bg-elevated p-8 rounded-3xl border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold mb-4 text-primary-400 uppercase tracking-wider">{t('clinical.title')}</h3>
              <p className="text-text-muted">{t('clinical.desc')}</p>
            </motion.div>
            
            <motion.div 
              className="bg-bg-elevated p-8 rounded-3xl border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-4 text-primary-400 uppercase tracking-wider">{t('care.title')}</h3>
              <p className="text-text-muted">{t('care.desc')}</p>
            </motion.div>
            
            <motion.div 
              className="md:col-span-2 h-64 md:h-auto min-h-[300px] rounded-3xl overflow-hidden relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <img 
                src="/images/clinic_interior_new.png" 
                alt="Clinic interior" 
                className="w-full h-full object-cover absolute inset-0" 
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Before/After Transformation Slider */}
      <section className="py-24 bg-bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">{tGallery('beforeAfter.title', { defaultValue: 'Transformative Results' })}</h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">{tGallery('beforeAfter.goalDesc', { defaultValue: 'See the difference our premium care makes.' })}</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <BeforeAfterSlider 
              beforeImage="/images/teeth_before.png"
              afterImage="/images/teeth_after.png"
              beforeLabel={tGallery('before', { defaultValue: 'Before' })}
              afterLabel={tGallery('after', { defaultValue: 'After' })}
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-bg-page border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold">{t('team.title')}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {team.map((member, idx) => (
              <motion.div 
                key={member.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group"
              >
                <div className="aspect-[4/5] rounded-3xl overflow-hidden mb-6 relative">
                  <img src={member.image} alt={member[lang].name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <p className="text-white text-sm">"{member[lang].bio}"</p>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{member[lang].name}</h3>
                <p className="text-primary-500 font-medium mb-4">{member[lang].title}</p>
                <ul className="space-y-2">
                  {member[lang].education.map((edu, i) => (
                    <li key={i} className="text-sm text-text-muted flex items-start gap-2">
                      <span className="text-primary-400">•</span> {edu}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Redesigned Premium Pricing Section */}
      <section className="py-24 bg-bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">{tHome('pricing.title')}</h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">{tHome('pricing.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {tHome('pricing.items', { returnObjects: true }).map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: idx * 0.1 }}
                className={`relative bg-bg-elevated rounded-2xl border ${idx === 1 ? 'border-primary-500 shadow-xl scale-105 z-10' : 'border-border shadow-md'} overflow-hidden flex flex-col group hover:shadow-hover transition-all duration-300`}
              >
                {idx === 1 && (
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary-400 to-primary-600"></div>
                )}
                <div className="p-8 pb-6 border-b border-border bg-bg-surface/50">
                  <h3 className="font-display text-2xl font-bold text-text-primary mb-2">{item.name}</h3>
                  <p className="text-sm text-text-muted min-h-[40px]">{item.desc}</p>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="mb-6 flex items-end gap-1">
                    <span className="text-4xl font-bold text-primary-600">{item.price}</span>
                  </div>
                  
                  <ul className="space-y-4 mb-8 flex-1">
                    <li className="flex items-start gap-3 text-sm text-text-muted">
                      <Check size={18} className="text-primary-500 shrink-0 mt-0.5" />
                      <span>Premium Care Standard</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-text-muted">
                      <Check size={18} className="text-primary-500 shrink-0 mt-0.5" />
                      <span>Dedicated Specialist Team</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-text-muted">
                      <Check size={18} className="text-primary-500 shrink-0 mt-0.5" />
                      <span>Lifetime Warranty Available</span>
                    </li>
                  </ul>
                  
                  <Button as={Link} to="/contact" variant={idx === 1 ? 'primary' : 'outline'} className="w-full">
                    {tHome('buttons.bookNow', { defaultValue: 'Book Now' })}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-sm text-text-muted px-6 py-3 inline-block bg-bg-elevated border border-border rounded-full shadow-sm">
              <ShieldCheck size={16} className="inline-block mr-2 rtl:mr-0 rtl:ml-2 text-primary-500" />
              {tHome('pricing.footer')}
            </p>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
