import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PageWrapper } from '../components/layout/PageWrapper';
import { Button } from '../components/ui/Button';

import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <Helmet>
        <title>404 - Page Not Found | Luxe Dental</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
        <h1 className="font-display font-bold text-9xl text-primary-400 mb-6">404</h1>
        <h2 className="text-3xl font-bold mb-4">Oops! Page not found.</h2>
        <p className="text-text-muted mb-8 max-w-md">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="flex gap-4">
          <Button as={Link} to="/">{t('nav.home')}</Button>
          <Button as={Link} to="/contact" variant="outline">{t('nav.contact')}</Button>
        </div>
      </div>
    </PageWrapper>
  );
}
