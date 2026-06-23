import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { FaFacebook as Facebook, FaInstagram as Instagram, FaYoutube as Youtube } from 'react-icons/fa';
import { clinic } from '../../data/clinic';
import { useLanguage } from '../../hooks/useLanguage';

export const Footer = () => {
  const { t } = useTranslation();
  const { lang } = useLanguage();

  return (
    <footer className="bg-warm-100 dark:bg-navy-900 border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <span className="font-display font-bold text-2xl text-primary-500">Luxe</span>
              <span className="font-sans font-medium text-xl">Dental</span>
            </Link>
            <p className="text-text-muted">{t('brand.tagline')}</p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href={clinic.social.facebook} target="_blank" rel="noreferrer" className="text-text-muted hover:text-primary-500 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href={clinic.social.instagram} target="_blank" rel="noreferrer" className="text-text-muted hover:text-primary-500 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href={clinic.social.youtube} target="_blank" rel="noreferrer" className="text-text-muted hover:text-primary-500 transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              {['home', 'services', 'about', 'testimonials', 'gallery', 'contact'].map(key => (
                <li key={key}>
                  <Link to={key === 'home' ? '/' : `/${key}`} className="text-text-muted hover:text-primary-400 transition-colors">
                    {t(`nav.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6">{t('footer.contact')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-text-muted">
                <MapPin size={20} className="mt-1 text-primary-400 shrink-0" />
                <span>{clinic.address[lang]}</span>
              </li>
              <li className="flex items-center gap-3 text-text-muted">
                <Phone size={20} className="text-primary-400 shrink-0" />
                <a href={`tel:${clinic.phone}`} className="hover:text-primary-400 transition-colors" dir="ltr">{clinic.phone}</a>
              </li>
              <li className="flex items-center gap-3 text-text-muted">
                <Mail size={20} className="text-primary-400 shrink-0" />
                <a href={`mailto:${clinic.email}`} className="hover:text-primary-400 transition-colors">{clinic.email}</a>
              </li>
              <li className="flex items-start gap-3 text-text-muted pt-2 border-t border-border">
                <Clock size={20} className="mt-1 text-primary-400 shrink-0" />
                <div className="space-y-1">
                  {clinic.hours.map((h, i) => (
                    <div key={i} className="flex justify-between gap-4 text-sm">
                      <span>{h.day[lang]}</span>
                      <span className="font-medium">{typeof h.time === 'string' ? h.time : h.time[lang]}</span>
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-muted">
          <div className="flex flex-col text-center ltr:md:text-left rtl:md:text-right">
            <p>© {new Date().getFullYear()} Luxe Dental. All rights reserved.</p>
            <p className="mt-1 font-medium text-text-primary">Design, code, and idea by <span className="text-primary-500 font-bold">Abdallah Wageeh</span>.</p>
          </div>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-primary-400">{t('footer.privacy')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
