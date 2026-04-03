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
            />
          </Link>
        </div>
        <nav style={{ display: 'flex', gap: 'clamp(8px, 2vw, 24px)', flexWrap: 'nowrap', justifyContent: 'flex-end', alignItems: 'center' }}>
          {currentRoute === '/iwd26' ? (
            <a 
              href="https://luma.com/event/evt-WbCg1FNBS1W7OdG" 
              className="btn-pill" 
              style={{ fontWeight: 'bold', color: '#FFFFFF', background: '#0033BD', padding: '6px clamp(12px, 2vw, 20px)', borderRadius: '100px', fontSize: '0.8rem', textDecoration: 'none', border: '2px solid #00E5FF', whiteSpace: 'nowrap' }}
              data-luma-action="checkout"
              data-luma-event-id="evt-WbCg1FNBS1W7OdG"
            >
              Register Now
            </a>
          ) : (
            <>
              {currentRoute !== '/' && <Link to="/" className="nav-link" style={{ fontWeight: 'bold', color: 'var(--google-blue)', fontSize: '0.8rem' }}>Home</Link>}
              <Link to="/about" className="nav-link" style={{ fontSize: '0.8rem' }}>About</Link>
              <Link to="/team" className="nav-link" style={{ fontSize: '0.8rem' }}>Team</Link>
              <Link to="/events" className="nav-link" style={{ fontSize: '0.8rem' }}>Events</Link>
              <Link to="/iwd26" className="nav-link" style={{ fontWeight: 'bold', color: '#FFFFFF', background: '#0033BD', padding: '4px clamp(10px, 1.5vw, 14px)', borderRadius: '100px', fontSize: '0.8rem' }}>IWD 26</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
