import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop.jsx';
import HomePage from '@/pages/HomePage.jsx';
import VisualCulturePage from '@/pages/VisualCulturePage.jsx';
import PerformativeTraditionsPage from '@/pages/PerformativeTraditionsPage.jsx';
import ArchivePage from '@/pages/ArchivePage.jsx';
import ArchiveDetailPage from '@/pages/ArchiveDetailPage.jsx';
import CommunityVoicesPage from '@/pages/CommunityVoicesPage.jsx';
import CommunityVoiceDetailPage from '@/pages/CommunityVoiceDetailPage.jsx';
import ResearchPage from '@/pages/ResearchPage.jsx';
import { Button } from '@/components/ui/button';

/**
 * Main application routing configuration.
 */
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/visual-culture" element={<VisualCulturePage />} />
        <Route path="/performative-traditions" element={<PerformativeTraditionsPage />} />
        <Route path="/archive" element={<ArchivePage />} />
        <Route path="/archive/:id" element={<ArchiveDetailPage />} />
        <Route path="/community-voices" element={<CommunityVoicesPage />} />
        <Route path="/community-voices/:id" element={<CommunityVoiceDetailPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route 
          path="*" 
          element={
            <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4 text-center">
              <h1 className="text-6xl font-bold text-foreground mb-6 font-serif">404</h1>
              <p className="text-xl text-muted-foreground mb-8">The page you're looking for doesn't exist.</p>
              <Button asChild size="lg">
                <a href="/">Return Home</a>
              </Button>
            </div>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;