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

import './styles/theme.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
