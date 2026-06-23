import { Outlet } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/global/ScrollToTop';

function App() {
  return (
    <HelmetProvider>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-500 text-white p-2 rounded z-50">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-grow pt-20">
          <Outlet />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
