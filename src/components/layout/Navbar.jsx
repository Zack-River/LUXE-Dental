import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '../global/ThemeToggle';
import { LangToggle } from '../global/LangToggle';
import { Button } from '../ui/Button';
import { cn } from '../../utils/cn';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/services', label: t('nav.services') },
    { to: '/about', label: t('nav.about') },
    { to: '/testimonials', label: t('nav.testimonials') },
    { to: '/gallery', label: t('nav.gallery') },
    { to: '/contact', label: t('nav.contact') },
  ];

  return (
    <>
      <header
        className={cn(
          'fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent',
          isScrolled ? 'backdrop-blur-md bg-white/80 dark:bg-navy-900/80 shadow-sm border-border' : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <span className="font-display font-bold text-2xl text-primary-500">Luxe</span>
              <span className="font-sans font-medium text-xl">Dental</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8 rtl:space-x-reverse" role="navigation" aria-label="Main navigation">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) => cn(
                    'relative py-2 text-sm font-medium transition-colors hover:text-primary-400',
                    isActive ? 'text-primary-500' : 'text-text-muted'
                  )}
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <motion.div
                          layoutId="nav-indicator"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-400"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Controls & CTA */}
            <div className="hidden md:flex items-center gap-4">
              <ThemeToggle />
              <LangToggle />
              <Button size="sm" as={Link} to="/contact">{t('buttons.bookNow')}</Button>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <LangToggle />
              <button
                type="button"
                className="p-2 rounded-md text-text-muted hover:text-primary-500 focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded={mobileMenuOpen}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white/80 dark:bg-navy-900/80 backdrop-blur-xl pt-20" id="mobile-menu">
          <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => cn(
                  'block px-3 py-4 rounded-md text-base font-medium',
                  isActive ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-500' : 'text-text-primary hover:bg-warm-100 dark:hover:bg-navy-800'
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="pt-4 px-3">
              <Button className="w-full" size="md" onClick={() => setMobileMenuOpen(false)}>
                {t('buttons.bookNow')}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
