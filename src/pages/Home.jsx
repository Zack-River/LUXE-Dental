import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { PageWrapper } from '../components/layout/PageWrapper';
import { Button } from '../components/ui/Button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { buildPageMeta } from '../utils/seo';
import { useLanguage } from '../hooks/useLanguage';
import { 
  CheckCircle, Star, Award, ShieldCheck, 
  Headphones, Armchair, ArrowRight, Sparkles, 
  ArrowUp, Globe, HeartPulse, GraduationCap, Users, Check 
} from 'lucide-react';

export default function Home() {
  const { t } = useTranslation('home');
  const { lang } = useLanguage();
  const meta = buildPageMeta({
    title: t('nav.home', { defaultValue: 'Home' }),
    description: t('hero.subheadline'),
    slug: '',
    lang
  });

  return (
    <PageWrapper>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/clinic_interior_new.webp" 
            alt="Luxe Dental Interior" 
            fetchpriority="high"
            width="1920"
            height="1080"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-navy-900/60 dark:bg-navy-900/80 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-10 md:mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary-500/20 text-primary-200 border border-primary-500/30 text-sm font-medium mb-6 uppercase tracking-widest">
              {t('hero.badge')}
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('hero.headline')}
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-warm-50 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t('hero.subheadline')}
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button size="lg" as={Link} to="/contact">{t('buttons.bookNow', { defaultValue: 'Book Now' })}</Button>
            <Button size="lg" variant="outline" as={Link} to="/services" className="bg-transparent border-white text-white hover:bg-white hover:text-navy-900">{t('buttons.viewServices', { defaultValue: 'Explore Treatments' })}</Button>
          </motion.div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="bg-bg-elevated py-12 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-start md:divide-x md:divide-border rtl:md:divide-x-reverse">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row items-center md:items-start gap-4 justify-center md:justify-start px-4">
              <CheckCircle className="text-primary-500 shrink-0" size={32} />
              <div>
                <h2 className="font-bold text-text-primary text-base">{t('recognition.boardCertified.title')}</h2>
                <p className="text-sm text-text-muted">{t('recognition.boardCertified.desc')}</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex flex-col md:flex-row items-center md:items-start gap-4 justify-center md:justify-start px-4">
              <Star className="text-primary-500 shrink-0" size={32} />
              <div>
                <h2 className="font-bold text-text-primary text-base">{t('recognition.topRated.title')}</h2>
                <p className="text-sm text-text-muted">{t('recognition.topRated.desc')}</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col md:flex-row items-center md:items-start gap-4 justify-center md:justify-start px-4">
              <Award className="text-primary-500 shrink-0" size={32} />
              <div>
                <h2 className="font-bold text-text-primary text-base">{t('recognition.awardWinning.title')}</h2>
                <p className="text-sm text-text-muted">{t('recognition.awardWinning.desc')}</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="flex flex-col md:flex-row items-center md:items-start gap-4 justify-center md:justify-start px-4">
              <ShieldCheck className="text-primary-500 shrink-0" size={32} />
              <div>
                <h2 className="font-bold text-text-primary text-base">{t('recognition.advancedTech.title')}</h2>
                <p className="text-sm text-text-muted">{t('recognition.advancedTech.desc')}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Original About Section */}
      <section className="py-24 bg-bg-page">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="/images/clinic_interior_new.webp" 
                alt="Clinic Interior" 
                width="800"
                height="800"
                className="rounded-3xl shadow-xl w-full aspect-square object-cover"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('about.title')}</h2>
              <p className="text-lg text-text-muted mb-6">{t('about.text1')}</p>
              <p className="text-lg text-text-muted mb-8">{t('about.text2')}</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-bg-elevated border border-border">
                  <span className="font-medium text-primary-500">{t('about.badge1')}</span>
                </div>
                <div className="p-4 rounded-xl bg-bg-elevated border border-border">
                  <span className="font-medium text-primary-500">{t('about.badge2')}</span>
                </div>
                <div className="p-4 rounded-xl bg-bg-elevated border border-border">
                  <span className="font-medium text-primary-500">{t('about.badge3')}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Experience / Testimonials */}
      <section className="py-24 bg-bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">{t('experience.title')}</h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">{t('experience.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="md:col-span-6 order-2 md:order-1">
              <img src="/images/patient_relaxing.webp" alt="Patient relaxing" width="1024" height="500" className="w-full h-[500px] object-cover rounded-xl shadow-md" loading="lazy" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="md:col-span-5 md:col-start-8 order-1 md:order-2 flex flex-col gap-10">
              <div>
                <div className="w-12 h-12 bg-bg-elevated rounded-full flex items-center justify-center mb-4 text-primary-500 border border-border">
                  <Headphones size={24} />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2">{t('experience.acoustic.title')}</h3>
                <p className="text-text-muted">{t('experience.acoustic.desc')}</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-bg-elevated rounded-full flex items-center justify-center mb-4 text-primary-500 border border-border">
                  <Armchair size={24} />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2">{t('experience.amenities.title')}</h3>
                <p className="text-text-muted">{t('experience.amenities.desc')}</p>
              </div>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((num, idx) => (
              <motion.div key={num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="bg-bg-page p-8 rounded-xl border border-border hover:shadow-hover transition-shadow">
                <div className="flex text-amber-400 mb-4">
                  {[1,2,3,4,5].map(star => <Star key={star} size={20} className="fill-current" />)}
                </div>
                <p className="text-text-primary mb-6 italic">"{t(`experience.testimonials.t${num}.text`)}"</p>
                <p className="font-bold text-primary-600">— {t(`experience.testimonials.t${num}.author`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Care */}
      <section className="py-24 bg-bg-page">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl mb-6 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">{t('comprehensive.title')}</h2>
              <p className="text-lg text-text-muted">{t('comprehensive.subtitle')}</p>
            </div>
            <Link to="/services" className="font-bold text-primary-500 hover:text-primary-600 inline-flex items-center gap-2 border-b border-transparent hover:border-primary-500 pb-1 transition-all">
              {t('comprehensive.viewAll')} <ArrowRight size={18} className="rtl:rotate-180" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['cosmetic', 'restorative', 'surgical', 'general'].map((cat, idx) => {
              const icons = [Sparkles, ArrowUp, Globe, HeartPulse];
              const Icon = icons[idx];
              return (
                <motion.div key={cat} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="bg-bg-elevated p-8 rounded-xl border border-border hover:shadow-hover transition-all group cursor-pointer">
                  <div className="w-14 h-14 bg-bg-surface rounded flex items-center justify-center mb-6 text-text-primary group-hover:text-primary-500 transition-colors">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-3">{t(`comprehensive.categories.${cat}.title`)}</h3>
                  <p className="text-sm text-text-muted mb-6">{t(`comprehensive.categories.${cat}.desc`)}</p>
                  <ArrowRight size={20} className="text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 rtl:translate-x-2 group-hover:translate-x-0 rtl:rotate-180" />
                </motion.div>
              );
            })}
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-0 border border-border rounded-xl overflow-hidden bg-bg-elevated">
            <div className="p-10 flex flex-col justify-center">
              <span className="inline-flex items-center gap-2 text-primary-500 text-xs font-bold uppercase tracking-widest mb-4">
                <span className="w-2 h-2 rounded-full bg-primary-500"></span> {t('comprehensive.feature.badge')}
              </span>
              <h3 className="text-3xl font-bold text-text-primary mb-4">{t('comprehensive.feature.title')}</h3>
              <p className="text-text-muted mb-6">{t('comprehensive.feature.desc')}</p>
              <Link to="/services" className="self-start text-text-primary font-bold border-b border-text-primary pb-1 hover:text-primary-500 hover:border-primary-500 transition-colors inline-flex items-center gap-2">
                {t('comprehensive.feature.link')}
              </Link>
            </div>
            <div className="h-64 md:h-auto">
              <img src="/images/technology_scan.webp" alt="Technology Scan" width="1024" height="1024" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Team Snapshot */}
      <section className="py-24 bg-bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="md:col-span-5 mb-10 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">{t('team.title')}</h2>
              <p className="text-lg text-text-muted mb-8">{t('team.subtitle')}</p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 text-primary-500"><GraduationCap size={24} /></div>
                  <div>
                    <h3 className="font-bold text-text-primary text-base">{t('team.ivy.title')}</h3>
                    <p className="text-sm text-text-muted mt-1">{t('team.ivy.desc')}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 text-primary-500"><Users size={24} /></div>
                  <div>
                    <h3 className="font-bold text-text-primary text-base">{t('team.collab.title')}</h3>
                    <p className="text-sm text-text-muted mt-1">{t('team.collab.desc')}</p>
                  </div>
                </div>
              </div>
              <Button as={Link} to="/about" variant="outline" className="mt-10">{t('team.button')}</Button>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="md:col-span-7">
              <img src="/images/dental_team.webp" alt="The Team" width="1024" height="500" className="w-full h-[500px] object-cover rounded-xl shadow-md" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Redesigned Premium Pricing Section */}
      <section className="py-24 bg-bg-page">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">{t('pricing.title')}</h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">{t('pricing.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {t('pricing.items', { returnObjects: true }).map((item, idx) => (
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
                    {t('buttons.bookNow', { defaultValue: 'Book Now' })}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-sm text-text-muted px-6 py-3 inline-block bg-bg-elevated border border-border rounded-full shadow-sm">
              <ShieldCheck size={16} className="inline-block mr-2 rtl:mr-0 rtl:ml-2 text-primary-500" />
              {t('pricing.footer')}
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Strip */}
      <section className="py-20 bg-primary-900 text-center text-white">
        <motion.div 
          className="max-w-3xl mx-auto px-4"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">{t('cta.title')}</h2>
          <p className="text-xl text-primary-100 mb-10">{t('cta.subtitle')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary-900 hover:bg-warm-100" as={Link} to="/contact">
              {t('buttons.bookNow', { defaultValue: 'Book Appointment' })}
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" as={Link} to="/contact">
              {t('buttons.contactUs', { defaultValue: 'Contact Us' })}
            </Button>
          </div>
        </motion.div>
      </section>
    </PageWrapper>
  );
}
