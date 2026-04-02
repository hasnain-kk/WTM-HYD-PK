import React from 'react';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="layout-section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', background: 'linear-gradient(rgba(255,255,255,0.65), rgba(255,255,255,0.8)), url("/WTM Events Pictures/RAH00585.jpg") center/cover no-repeat' }}>
        <div className="grid-container" style={{ textAlign: 'center', width: '100%', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', color: 'var(--text-primary)' }}>

            <h1 className="hero-entrance" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: 1.1, marginBottom: '24px' }}>
              <span style={{ color: 'var(--deep-blue)', display: 'block' }}>Women Techmakers</span>
              <span style={{ color: 'var(--vibrant-teal)', display: 'block' }}>Hyderabad Chapter</span>
            </h1>

            <p className="hero-entrance" style={{ fontSize: '1.5rem', marginBottom: '48px', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 48px auto' }}>
              An inclusive ecosystem building community, visibility, and resources to accelerate equity and empower women across all professions.
            </p>
            <div className="hero-entrance" style={{ display: 'flex', gap: '24px', justifyContent: 'center' }}>
              <a href="/events" className="btn-pill primary" style={{ fontSize: '1.125rem' }}>Explore Events</a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="layout-section">
        <div className="grid-container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '2rem', margin: 0, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '2px' }}>THE MISSION</h2>
          </div>
          <div className="surface-card" style={{ padding: '48px', borderLeft: '4px solid var(--vibrant-teal)', background: 'linear-gradient(135deg, rgba(25, 103, 210, 0.85), rgba(0, 196, 163, 0.85)), url("/WTM Events Pictures/DSC00684.jpg") center/cover' }}>
            <div className="flex-responsive" style={{ alignItems: 'center' }}>
              <div>
                <h3 style={{ fontSize: '3rem', margin: 0, marginBottom: '24px', color: '#FFFFFF' }}>Empowering Professionals, Focusing on Tech</h3>
                <p style={{ fontSize: '1.25rem', color: '#FFFFFF', lineHeight: 1.8, textAlign: 'left' }}>
                  Women Techmakers Hyderabad Pakistan is dedicated to empowering women of every profession and at any age. While we gather and support women from all general fields, our core focus and passion remain rooted in technology.
                </p>
              </div>
              <div>
                <img src="/WTM Events Pictures/DSC09677.jpg" alt="WTM Audience" className="side-frame-img" style={{ borderColor: '#FFFFFF' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section (GDG Layout) */}
      <section className="layout-section" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--surface-border)' }}>
        <div className="grid-container" style={{ display: 'flex', gap: '64px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 300px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '24px', color: 'var(--text-primary)' }}>What we do?</h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '24px' }}>
              Women Techmakers Hyderabad organizes high-impact events for professionals and enthusiasts who are interested in continuous knowledge transfer and professional networking.
            </p>
            <a href="/events" className="btn-pill" style={{ borderColor: 'var(--vibrant-teal)', display: 'inline-block', color: 'var(--vibrant-teal)' }}>Learn More</a>
          </div>

          <div style={{ flex: '2 1 500px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', textAlign: 'center' }}>
            <div>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--text-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px' }}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Tech Conferences</h3>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>Get updated with the latest industry news and ecosystem announcements.</p>
            </div>
            <div>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--text-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px' }}><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Workshops</h3>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>Get hands-on experience and guidance from leading technical community members.</p>
            </div>
            <div>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--text-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px' }}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Meetups</h3>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>Share knowledge, expand your network, and connect with engineers across Sindh.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ambassador Section */}
      <section className="layout-section">
        <div className="grid-container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '2rem', margin: 0, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '2px' }}>MEET THE AMBASSADOR</h2>
          </div>
          <div className="flex-responsive" style={{ alignItems: 'center' }}>
            <div>
              <img src="/WTM Events Pictures/Robina Picture/Robina Mirbahar.jpg" alt="Robina Mirbahar - WTM Ambassador" className="side-frame-img" style={{ borderColor: 'var(--google-blue)' }} />
            </div>
            <div>
              <h3 style={{ fontSize: '3rem', margin: 0, marginBottom: '24px', color: 'var(--deep-blue)' }}>Robina Mirbahar</h3>
              <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.8, textAlign: 'left' }}>
                As the official ambassador of Women Techmakers Hyderabad, Robina continuously pioneers initiatives that elevate women of all professions and ages, with a passionate core focus on engineers and technologists across the region. Under her leadership, the community has seen unparalleled technical scaling and inclusive empowerment initiatives.
              </p>
              <div style={{ marginTop: '32px' }}>
                <a href="/team" className="btn-pill" style={{ borderColor: 'var(--vibrant-teal)', display: 'inline-block' }}>View Leadership Directory</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Together We Rise Banner Section */}
      <section style={{ padding: '64px 0', textAlign: 'center', backgroundColor: '#FFFFFF' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--deep-blue)', fontStyle: 'italic', margin: 0 }}>
          Together we Rise. <span style={{ color: 'var(--vibrant-teal)' }}>Together We Lead.</span>
        </h2>
      </section>

      {/* Flagship Event Section */}
      <section className="layout-section" style={{ position: 'relative' }}>
        <div className="grid-container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '40px', textAlign: 'center' }}>Flagship Event</h2>
          <div className="surface-card" style={{ padding: '64px', position: 'relative', overflow: 'hidden', maxWidth: '800px', margin: '0 auto', textAlign: 'center', background: 'linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.85)), url("/WTM Events Pictures/477327603_592980400364678_3971829522026014964_n.jpg") center/cover' }}>
            <span style={{ display: 'inline-block', backgroundColor: 'rgba(0, 196, 163, 0.1)', color: 'var(--vibrant-teal)', border: '1px solid var(--vibrant-teal)', padding: '6px 16px', borderRadius: '100px', fontFamily: 'var(--font-header)', fontSize: '0.875rem', fontWeight: 'bold', marginBottom: '24px', textTransform: 'uppercase' }}>• Live Now</span>
            <h3 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>IWD 2026 Baithak</h3>
            <p className="text-accent" style={{ color: 'var(--google-blue)', fontSize: '1rem', marginBottom: '24px' }}>International Women's Day | Invite Only</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', marginBottom: '40px' }}>
              International Women's Day is our flagship annual milestone. Each year features a unique, dynamic theme focusing on breaking patterns and highlighting technical leadership. Apply now to step into the ecosystem.
            </p>
            <a href="/register" className="btn-pill" style={{ borderColor: 'var(--deep-blue)', display: 'inline-block', backdropFilter: 'blur(8px)' }}>Request Invitation</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
