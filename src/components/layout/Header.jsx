import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import wtmLogo from '../../Logo/2.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const currentRoute = location.pathname;

  // Global scroll lock when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [currentRoute]);

  const isIWDPage = currentRoute === '/iwd26';

  return (
    <header className="header-container" style={{ zIndex: 2000 }}>
      <div className="grid-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', flexWrap: 'nowrap', gap: '12px', position: 'relative', zIndex: 2001 }}>
        <div style={{ flexShrink: 0 }}>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <img
              src={wtmLogo}
              alt="WTM Hyderabad"
              style={{ height: 'clamp(32px, 4.5vw, 40px)', display: 'block' }}
            />
          </Link>
        </div>

        {/* Global Desktop & IWD Persistent Nav */}
        <nav style={{ display: 'flex', alignItems: 'center' }}>
          {isIWDPage ? (
            <div 
              style={{ fontWeight: 'bold', color: '#FFFFFF', background: 'rgba(255,255,255,0.1)', padding: '8px clamp(12px, 2.5vw, 24px)', borderRadius: '100px', fontSize: '0.85rem', border: '2px solid rgba(255,255,255,0.2)', whiteSpace: 'nowrap', cursor: 'not-allowed' }}
            >
              Registration Closed
            </div>
          ) : (
            <>
              {/* Desktop Only Nav */}
              <div className="desktop-nav" style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                {currentRoute !== '/' && <Link to="/" className="nav-link" style={{ fontWeight: 'bold', color: 'var(--google-blue)', fontSize: '0.85rem' }}>Home</Link>}
                <Link to="/about" className="nav-link" style={{ fontSize: '0.85rem' }}>About</Link>
                <Link to="/team" className="nav-link" style={{ fontSize: '0.85rem' }}>Team</Link>
                <Link to="/events" className="nav-link" style={{ fontSize: '0.85rem' }}>Events</Link>
                <Link to="/iwd26" className="nav-link" style={{ fontWeight: 'bold', color: '#FFFFFF', background: '#34A853', padding: '6px 16px', borderRadius: '100px', fontSize: '0.8rem' }}>IWD 26</Link>
              </div>

              {/* Mobile Only Menu Toggle */}
              <button 
                className="mobile-menu-toggle"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                style={{ background: 'none', border: 'none', padding: '8px', cursor: 'pointer', display: 'none', flexDirection: 'column', gap: '5px' }}
              >
                <div style={{ width: '24px', height: '2px', background: 'var(--text-primary)', transition: '0.3s', transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></div>
                <div style={{ width: '24px', height: '2px', background: 'var(--text-primary)', transition: '0.3s', opacity: isMenuOpen ? 0 : 1 }}></div>
                <div style={{ width: '24px', height: '2px', background: 'var(--text-primary)', transition: '0.3s', transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></div>
              </button>
            </>
          )}
        </nav>
      </div>

      {/* Full-Screen Mobile Menu Overlay */}
      {!isIWDPage && (
        <div 
          className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`}
          style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh',
            background: 'rgba(255, 255, 255, 0.98)', backdropFilter: 'blur(20px)',
            zIndex: 1999, transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            opacity: isMenuOpen ? 1 : 0, visibility: isMenuOpen ? 'visible' : 'hidden',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '32px'
          }}
        >
          <Link to="/" className="nav-link" style={{ fontSize: '2rem' }}>Home</Link>
          <Link to="/about" className="nav-link" style={{ fontSize: '2rem' }}>About</Link>
          <Link to="/team" className="nav-link" style={{ fontSize: '2rem' }}>Team</Link>
          <Link to="/events" className="nav-link" style={{ fontSize: '2rem' }}>Our Event</Link>
          <Link to="/iwd26" className="nav-link" style={{ fontWeight: 'bold', color: '#FFFFFF', background: '#0033BD', padding: '12px 48px', borderRadius: '100px', fontSize: '1.5rem' }}>Join IWD 26</Link>
          
          <button 
            onClick={() => setIsMenuOpen(false)}
            style={{ marginTop: '40px', background: 'none', border: '1px solid var(--surface-border)', padding: '12px 24px', borderRadius: '100px', color: 'var(--text-secondary)', cursor: 'pointer' }}
          >
            Close Menu
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
