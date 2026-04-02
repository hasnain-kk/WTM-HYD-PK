import React from 'react';
import '../../styles/theme.css';
import logoLight from '../../Logo/2.png'; 

const Header = () => {
  return (
    <header className="header-container" style={styles.header}>
      <div className="grid-container" style={styles.navGrid}>
        
        <div className="logo" style={styles.logo}>
          <a href="/" style={styles.logoLink}>
            <img 
              src={logoLight} 
              alt="WTM Hyderabad" 
              style={{ height: '40px', display: 'block' }} 
            />
          </a>
        </div>
        
        <nav className="nav-links" style={styles.navLinks}>
          <a href="/about" style={styles.link}>About</a>
          <a href="/team" style={styles.link}>Team</a>
          <a href="/events" style={styles.link}>Events</a>
          <a href="/press" style={styles.link}>Press</a>
        </nav>

      </div>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: 'var(--header-bg)',
    backdropFilter: 'blur(16px)',
    borderBottom: '1px solid var(--header-border)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    padding: '16px 0',
    transition: 'background-color var(--transition-standard), border-color var(--transition-standard)',
  },
  navGrid: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontFamily: 'var(--font-header)',
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: 'var(--text-primary)',
  },
  logoLink: {
    color: 'var(--text-primary)',
    textDecoration: 'none',
  },
  navLinks: {
    display: 'flex',
    gap: '32px',
  },
  link: {
    fontFamily: 'var(--font-header)',
    fontWeight: 'bold',
    fontSize: '0.875rem',
    textTransform: 'uppercase',
    color: 'var(--text-primary)',
    transition: 'filter var(--transition-standard)',
    textDecoration: 'none'
  }
};

export default Header;
