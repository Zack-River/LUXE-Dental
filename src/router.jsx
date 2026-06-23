import React, { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const Services = React.lazy(() => import('./pages/Services'));
const About = React.lazy(() => import('./pages/About'));
const Testimonials = React.lazy(() => import('./pages/Testimonials'));
const Gallery = React.lazy(() => import('./pages/Gallery'));
const Contact = React.lazy(() => import('./pages/Contact'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

// Loader component
const PageLoader = () => (
  <div className="h-[60vh] flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-warm-200 border-t-primary-500 rounded-full animate-spin"></div>
  </div>
);

const lazy = (Component) => (
  <Suspense fallback={<PageLoader />}>
    <Component />
  </Suspense>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: lazy(Home) },
      { path: 'services', element: lazy(Services) },
      { path: 'about', element: lazy(About) },
      { path: 'testimonials', element: lazy(Testimonials) },
      { path: 'gallery', element: lazy(Gallery) },
      { path: 'contact', element: lazy(Contact) },
      { path: 'privacy', element: lazy(PrivacyPolicy) },
      { path: '*', element: lazy(NotFound) },
    ],
  },
]);
