/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { DataProvider, useData } from './context/DataContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { DiscoverSection } from './components/DiscoverSection';
import { TreasuresSection } from './components/TreasuresSection';
import { ExperiencesHubSection } from './components/ExperiencesHubSection';
import { TasteAndStaySection } from './components/TasteAndStaySection';
import { PlanningHubSection } from './components/PlanningHubSection';
import { MediaHubSection } from './components/MediaHubSection';
import { Footer } from './components/Footer';
import { TreasureDetailModal } from './components/TreasureDetailModal';
import { ArticleModal } from './components/ArticleModal';
import { AdminDashboard } from './components/AdminDashboard';
import { Compass, ArrowUp } from 'lucide-react';

const AppContent: React.FC = () => {
  const { language, t, treasures, articles, activeModal, setActiveModal, customRoute, navigateToTab } = useData();
  const [isAdminView, setIsAdminView] = useState<boolean>(() => {
    return window.location.hash === '#admin' || window.location.pathname.startsWith('/admin');
  });
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Synchronize hash with admin view state
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#admin') {
        setIsAdminView(true);
      } else if (isAdminView && window.location.hash !== '#admin') {
        // If user navigated away from #admin using back button
        setIsAdminView(false);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [isAdminView]);

  // Track scroll position for "Back to top" button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openAdmin = () => {
    setIsAdminView(true);
    window.location.hash = 'admin';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeAdmin = () => {
    setIsAdminView(false);
    if (window.location.hash === '#admin') {
      window.history.pushState(null, '', window.location.pathname);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Find active modal items
  const selectedTreasure = activeModal?.type === 'treasure'
    ? treasures.find((item) => item.id === activeModal.id)
    : null;

  const selectedArticle = activeModal?.type === 'article'
    ? articles.find((item) => item.id === activeModal.id)
    : null;

  if (isAdminView) {
    return <AdminDashboard onBackToSite={closeAdmin} />;
  }

  return (
    <div className="min-h-screen bg-[#F7F2E8] text-[#183B56] flex flex-col font-cairo">
      {/* Skip to Content for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:start-4 z-50 px-4 py-2 bg-[#183B56] text-white rounded-lg shadow-lg"
      >
        {language === 'ar' ? 'الانتقال إلى المحتوى الرئيسي' : 'Skip to main content'}
      </a>

      {/* Navigation Bar */}
      <Navbar onNavigateAdmin={openAdmin} isAdminView={false} />

      {/* Main Content Sections - Compact Unified Hubs Architecture */}
      <main id="main-content" tabIndex={-1} className="focus:outline-hidden flex-1">
        <HeroSection />
        <DiscoverSection />
        <TreasuresSection />
        <ExperiencesHubSection />
        <TasteAndStaySection />
        <PlanningHubSection />
        <MediaHubSection />
      </main>

      {/* Footer */}
      <Footer onNavigateAdmin={openAdmin} />

      {/* Modals */}
      {selectedTreasure && (
        <TreasureDetailModal
          treasure={selectedTreasure}
          onClose={() => setActiveModal(null)}
        />
      )}

      {selectedArticle && (
        <ArticleModal
          article={selectedArticle}
          onClose={() => setActiveModal(null)}
        />
      )}

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 end-6 z-40 flex flex-col items-center gap-3">
        {/* Custom Route Quick Action (if monuments added) */}
        {customRoute.length > 0 && (
          <button
            onClick={() => navigateToTab('map')}
            className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#C99A42] hover:bg-[#b08432] text-white shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
            title={language === 'ar' ? 'عرض مسارك المخصص على الخريطة' : 'View your custom itinerary route on map'}
          >
            <Compass className="w-5 h-5 animate-spin-slow" />
            <span className="text-xs font-bold font-mono">
              {customRoute.length} {language === 'ar' ? 'معالم بالمسار' : 'monuments'}
            </span>
          </button>
        )}

        {/* Back to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-[#183B56] hover:bg-[#122e44] text-white shadow-xl border border-white/20 transition-all duration-300 hover:scale-110 cursor-pointer"
            aria-label={language === 'ar' ? 'الرجوع إلى أعلى الصفحة' : 'Back to top'}
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default function App() {
  return (
    <DataProvider>
      <AppContent />
    </DataProvider>
  );
}
