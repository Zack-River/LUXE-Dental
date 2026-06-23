import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { PageWrapper } from '../components/layout/PageWrapper';
import { buildPageMeta } from '../utils/seo';
import { useLanguage } from '../hooks/useLanguage';
import { clinic } from '../data/clinic';
import { Button } from '../components/ui/Button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(8, 'Valid phone number is required'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().optional()
});

export default function Contact() {
  const { t } = useTranslation('contact');
  const { lang, isRTL } = useLanguage();
  const meta = buildPageMeta({
    title: t('title'),
    description: t('subtitle'),
    slug: 'contact',
    lang
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    // Add toast notification here
  };

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

      <section className="py-20 bg-bg-page min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <motion.div 
              className="bg-bg-elevated p-8 rounded-3xl border border-border shadow-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6">{t('form.title')}</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">{t('form.name')}</label>
                  <input {...register('name')} className={`w-full bg-bg-surface border ${errors.name ? 'border-error' : 'border-border'} rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow`} />
                  {errors.name && <p className="text-error text-sm mt-1">{errors.name.message}</p>}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">{t('form.email')}</label>
                    <input {...register('email')} type="email" className={`w-full bg-bg-surface border ${errors.email ? 'border-error' : 'border-border'} rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow`} dir="ltr" style={{ textAlign: isRTL ? 'right' : 'left' }} />
                    {errors.email && <p className="text-error text-sm mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">{t('form.phone')}</label>
                    <input {...register('phone')} type="tel" className={`w-full bg-bg-surface border ${errors.phone ? 'border-error' : 'border-border'} rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow`} dir="ltr" style={{ textAlign: isRTL ? 'right' : 'left' }} />
                    {errors.phone && <p className="text-error text-sm mt-1">{errors.phone.message}</p>}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">{t('form.service')}</label>
                  <select {...register('service')} className={`w-full bg-bg-surface border ${errors.service ? 'border-error' : 'border-border'} rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow appearance-none`}>
                    <option value="">{t('common:buttons.bookNow')}...</option>
                    <option value="whitening">Teeth Whitening</option>
                    <option value="implants">Implants</option>
                    <option value="veneers">Veneers</option>
                    <option value="general">General Consultation</option>
                  </select>
                  {errors.service && <p className="text-error text-sm mt-1">{errors.service.message}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">{t('form.message')}</label>
                  <textarea {...register('message')} rows="4" className="w-full bg-bg-surface border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow resize-none"></textarea>
                </div>
                
                <Button type="submit" size="lg" className="w-full">{t('form.submit')}</Button>
              </form>
            </motion.div>

            {/* Clinic Info */}
            <motion.div 
              className="flex flex-col gap-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-bg-elevated p-8 rounded-3xl border border-border">
                <h2 className="text-2xl font-bold mb-6">{t('info.title')}</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center shrink-0">
                      <MapPin className="text-primary-500" />
                    </div>
                    <div>
                      <p className="font-bold text-lg">{clinic.name[lang]}</p>
                      <p className="text-text-muted">{clinic.address[lang]}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center shrink-0">
                      <Phone className="text-primary-500" />
                    </div>
                    <div>
                      <p className="font-bold" dir="ltr">{clinic.phone}</p>
                      <p className="text-text-muted">{t('common:contact.available') || 'Available 24/7 for emergencies'}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center shrink-0">
                      <Mail className="text-primary-500" />
                    </div>
                    <div>
                      <p className="font-bold" dir="ltr">{clinic.email}</p>
                      <p className="text-text-muted">{t('common:contact.reply') || 'We reply within 24 hours'}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center shrink-0">
                      <Clock className="text-primary-500" />
                    </div>
                    <div>
                      {clinic.hours.map((h, i) => (
                        <p key={i} className="mb-1">
                          <span className="font-medium">{h.day[lang]}:</span> {typeof h.time === 'object' ? h.time[lang] : h.time}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="h-64 rounded-3xl overflow-hidden border border-border">
                {/* Embedded Map Placeholder */}
                <iframe 
                  src={clinic.mapEmbedUrl} 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Clinic Location"
                ></iframe>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
