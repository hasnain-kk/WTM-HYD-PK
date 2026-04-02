import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div className="grid-container" style={{ padding: '64px 24px', display: 'flex', flexDirection: 'column', gap: '48px' }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px' }}>
          <div>
            <h4 className="text-mono" style={{ color: 'var(--google-blue)', marginBottom: '24px' }}>WTM Hyderabad</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <a href="/about" style={styles.link}>About the Chapter</a>
              <a href="/team" style={styles.link}>Core Team</a>
              <a href="/events" style={styles.link}>Previous Baithaks</a>
            </div>
          </div>
          <div>
            <h4 className="text-mono" style={{ color: 'var(--google-red)', marginBottom: '24px' }}>Resources</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <a href="#" style={styles.link}>Code of Conduct</a>
              <a href="#" style={styles.link}>Speaker Guidelines</a>
              <a href="#" style={styles.link}>Partnership Deck</a>
            </div>
          </div>
          <div>
            <h4 className="text-mono" style={{ color: 'var(--google-yellow)', marginBottom: '24px' }}>Connect</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <a href="#" style={styles.link}>Twitter / X</a>
              <a href="#" style={styles.link}>LinkedIn</a>
              <a href="#" style={styles.link}>Instagram</a>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--surface-border)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <span className="text-mono" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
            © 2026 Women Techmakers Hyderabad
          </span>
          <span className="text-mono" style={{ color: 'var(--text-primary)', fontSize: '0.875rem' }}>
            Built with <span style={{ color: 'var(--google-red)' }}>❤️</span> by Hasnain KK
          </span>
        </div>
        
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: 'var(--footer-bg)',
    borderTop: '1px solid var(--surface-border)',
    transition: 'background-color var(--transition-standard)'
  },
  link: {
    color: 'var(--text-secondary)',
    textDecoration: 'none',
    transition: 'color 0.3s',
    fontWeight: 500,
    cursor: 'pointer'
  }
};

export default Footer;
