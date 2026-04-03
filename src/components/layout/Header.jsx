import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import wtmLogo from '../../Logo/2.png';

const Header = () => {
  const location = useLocation();
  const currentRoute = location.pathname;

  return (
    <header className="header-container">
      <div className="grid-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', flexWrap: 'nowrap', gap: '12px' }}>
        <div style={{ flexShrink: 0 }}>
          <Link to="/">
            <img
              src={wtmLogo}
              alt="WTM Hyderabad"
              style={{ height: 'clamp(32px, 4.5vw, 40px)', display: 'block' }}
            />
          </Link>
        </div>
        <nav style={{ display: 'flex', gap: 'clamp(12px, 3vw, 32px)', flexWrap: 'nowrap', justifyContent: 'flex-end', alignItems: 'center' }}>
          {currentRoute === '/iwd26' ? (
            <a 
              href="https://luma.com/event/evt-WbCg1FNBS1W7OdG" 
              className="btn-pill" 
              style={{ fontWeight: 'bold', color: '#FFFFFF', background: '#0033BD', padding: '10px clamp(12px, 2.5vw, 24px)', borderRadius: '100px', fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)', textDecoration: 'none', border: '2px solid #00E5FF', whiteSpace: 'nowrap' }}
              data-luma-action="checkout"
              data-luma-event-id="evt-WbCg1FNBS1W7OdG"
            >
              Register Now
            </a>
          ) : (
            <>
              {currentRoute !== '/' && <Link to="/" className="nav-link" style={{ fontWeight: 'bold', color: 'var(--google-blue)' }}>Home</Link>}
              <Link to="/about" className="nav-link">About</Link>
              <Link to="/team" className="nav-link">Team</Link>
              <Link to="/events" className="nav-link">Events</Link>
              <Link to="/iwd26" className="nav-link" style={{ fontWeight: 'bold', color: '#FFFFFF', background: '#0033BD', padding: '6px clamp(12px, 2vw, 16px)', borderRadius: '100px', fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}>IWD 26</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
