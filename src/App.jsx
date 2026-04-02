import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';
import ProfilePage from './pages/ProfilePage';
import EventsPage from './pages/EventsPage';
import PressPage from './pages/PressPage';
import RegistrationForm from './components/RegistrationForm';
import './styles/theme.css';

const App = () => {

  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const renderRoute = () => {
    if (currentPath === '/') return <HomePage />;
    if (currentPath === '/about') return <AboutPage />;
    if (currentPath === '/team') return <TeamPage />;
    if (currentPath === '/events') return <EventsPage />;
    if (currentPath === '/press') return <PressPage />;
    if (currentPath === '/register') return <RegistrationForm />;
    if (currentPath.startsWith('/team/')) return <ProfilePage />;
    return <HomePage />;
  };

  return (
    <div className="app-container">
      <Header />
      <main>
        {renderRoute()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
