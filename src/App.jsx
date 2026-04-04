import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';
import TeamProfilePage from './pages/TeamProfilePage';
import EventsPage from './pages/EventsPage';
import EventProfilePage from './pages/EventProfilePage';
import IWD2026Page from './pages/IWD2026Page';
import ParticipantPosterPage from './pages/ParticipantPosterPage';
import CodeOfConductPage from './pages/CodeOfConductPage';
import ScrollHandler from './components/utils/ScrollHandler';

import './styles/theme.css';

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3-second premium branding experience
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ScrollHandler />
      
      <div className={`preloader-overlay ${!isLoading ? 'fade-out' : ''}`}>
        <div className="dot-loader">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>

      <div className="app-container" style={{ paddingTop: '72px', opacity: isLoading ? 0 : 1, transition: 'opacity 1s ease-in-out' }}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/team/:slug" element={<TeamProfilePage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/events/:slug" element={<EventProfilePage />} />
            <Route path="/iwd26" element={<IWD2026Page />} />
            <Route path="/iwd26/participants" element={<ParticipantPosterPage />} />
            <Route path="/code-of-conduct" element={<CodeOfConductPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
