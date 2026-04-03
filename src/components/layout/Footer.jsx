import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo8 from '../../Logo/8.png';
import mascot from '../../WTM Events Pictures/WTM Sindhi Mascote.png';

const Footer = () => {
  const location = useLocation();
  const currentRoute = location.pathname;

  const showSindhSection = currentRoute === '/' || currentRoute === '/about' || currentRoute === '/events' || currentRoute === '/iwd26' || currentRoute.startsWith('/team/');

  return (
    <footer style={{ backgroundColor: 'var(--footer-bg)', transition: 'background-color var(--transition-standard)' }}>
      {showSindhSection && (
        <div style={{ padding: 'clamp(40px, 8vw, 80px) 24px', borderTop: '1px solid var(--surface-border)', borderBottom: '1px solid var(--surface-border)', backgroundColor: 'var(--bg-primary)' }}>
          <div className="grid-container flex-responsive" style={{ alignItems: 'center', gap: 'clamp(32px, 8vw, 64px)' }}>
            <div style={{ flex: '1.2' }}>
              <img src={logo8} alt="WTM Sindhi Identity Logo" style={{ height: 'clamp(40px, 6vw, 80px)', marginBottom: '24px', display: 'block' }} />
              <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 3.5rem)', color: 'var(--google-blue)', margin: '0 0 24px 0', fontWeight: 'bold', lineHeight: 1.1 }}>Empowering the Women of Sindh</h2>
              <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '600px' }}>
                Dedicated to scaling the potential of every developer and leader across interior Sindh. We provide the architecture for excellence.
              </p>
            </div>
            <div style={{ flex: '1', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src={mascot} alt="WTM Sindhi Mascot" style={{ maxHeight: 'clamp(200px, 40vh, 350px)', width: 'auto', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.1))' }} />
            </div>
          </div>
        </div>
      )}

      <div className="grid-container" style={{ padding: '64px 24px', display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: 'clamp(24px, 5vw, 48px)', borderBottom: '1px solid var(--surface-border)', paddingBottom: '32px' }}>
          <span style={{ fontSize: '0.875rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--text-secondary)' }}>Follow Us</span>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <a href="https://www.linkedin.com/company/women-techmaker-hyderabad-pakistan" target="_blank" rel="noreferrer" className="footer-link" style={{ fontSize: '1rem', color: 'var(--vibrant-teal)' }}>LinkedIn</a>
            <a href="https://web.facebook.com/womentechmakershyderabadpakistan" target="_blank" rel="noreferrer" className="footer-link" style={{ fontSize: '1rem', color: 'var(--vibrant-teal)' }}>Facebook</a>
            <a href="https://www.instagram.com/wtm.hydpk/" target="_blank" rel="noreferrer" className="footer-link" style={{ fontSize: '1rem', color: 'var(--vibrant-teal)' }}>Instagram</a>
            <div style={{ width: '1px', height: '20px', backgroundColor: 'var(--surface-border)' }}></div>
            <a href="mailto:women.techmakers.hyd.pk@gmail.com" className="footer-link" style={{ fontSize: '1rem', color: 'var(--vibrant-teal)', fontWeight: 'bold' }}>Email Us</a>
          </div>
        </div>

        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '40px' }}>
          <div className="footer-column" style={{ textAlign: 'inherit' }}>
            <h4 className="text-accent" style={{ color: 'var(--google-blue)', marginBottom: '24px' }}>WTM Hyderabad</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <Link to="/about" className="footer-link">About the Chapter</Link>
              <Link to="/team" className="footer-link">Core Team</Link>
              <Link to="/events" className="footer-link">Our Event</Link>
            </div>
          </div>

          <div className="footer-column" style={{ textAlign: 'inherit' }}>
            <h4 className="text-accent" style={{ color: 'var(--deep-blue)', marginBottom: '24px' }}>Support Us</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <Link to="/about#sponsor" className="footer-link">Sponsor Us</Link>
              <Link to="/about#mentor" className="footer-link">Community Mentor or Speaker</Link>
              <Link to="/about#join" className="footer-link">Join the Team</Link>
            </div>
          </div>

          <div className="footer-column" style={{ textAlign: 'inherit' }}>
            <h4 className="text-accent" style={{ color: 'var(--deep-blue)', marginBottom: '24px' }}>Resources</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <Link to="/code-of-conduct" className="footer-link">Code of Conduct</Link>
              <Link to="/code-of-conduct#community-guidelines" className="footer-link">Community Guidelines</Link>
            </div>
          </div>

          <div className="footer-column" style={{ textAlign: 'inherit' }}>
            <h4 className="text-accent" style={{ color: 'var(--vibrant-teal)', marginBottom: '24px' }}>Developer Options</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <a href="https://console.cloud.google.com" target="_blank" rel="noreferrer" className="footer-link">Google Cloud Console</a>
              <a href="https://console.firebase.google.com" target="_blank" rel="noreferrer" className="footer-link">Firebase Console</a>
              <a href="https://developers.google.com" target="_blank" rel="noreferrer" className="footer-link">Google Developers</a>
            </div>
          </div>

        </div>

        <div className="footer-bottom" style={{ borderTop: '1px solid var(--surface-border)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <span className="text-overline" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>© 2026 Women Techmakers Hyderabad</span>
          <span className="text-overline" style={{ color: 'var(--text-primary)', fontSize: '0.875rem' }}>Built with <span style={{ color: 'var(--deep-blue)' }}>❤️</span> by <a href="https://www.linkedin.com/in/hasnainkk" target="_blank" rel="noreferrer" style={{ color: '#0077b5', fontWeight: 'bold' }}>Hasnain KK</a></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
