import React from 'react';
import bgImage from '../WTM Events Pictures/DSC09710 - Copy.jpg';

const CodeOfConductPage = () => {
  return (
    <div className="layout-section" style={{ background: `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.95)), url("${bgImage}") center/cover border-box`, minHeight: '80vh' }}>
      <div className="grid-container" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '16px', color: 'var(--deep-blue)', textAlign: 'center' }}>Code of Conduct</h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '48px' }}>Empowering a safe, diverse, and robust technical environment.</p>

        <div className="surface-card" style={{ padding: '48px', marginBottom: '32px', backgroundColor: 'var(--bg-primary)' }}>
          <h3 style={{ fontSize: '2rem', marginBottom: '24px', color: 'var(--google-blue)' }}>Anti-Harassment Policy</h3>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            Women Techmakers Hyderabad is aggressively committed to providing a fully harassment-free and deeply inclusive experience for everyone. We unconditionally welcome participants regardless of gender identity and expression, sexual orientation, disabilities, neurodiversity, physical appearance, body size, ethnicity, nationality, race, age, religion, or any other protected category. We do not tolerate harassment of event participants in absolutely any form.
          </p>
        </div>

        <div id="community-guidelines" className="surface-card" style={{ padding: '48px', marginBottom: '32px', backgroundColor: 'var(--bg-primary)' }}>
          <h3 style={{ fontSize: '2rem', marginBottom: '24px', color: 'var(--vibrant-teal)' }}>Community Guidelines</h3>
          <ul style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: 1.8, paddingLeft: '24px' }}>
            <li style={{ marginBottom: '16px' }}><strong>Be excellent to each other.</strong> Empathy is the core of our community ecosystem.</li>
            <li style={{ marginBottom: '16px' }}><strong>Treat everyone with respect.</strong> Participate while actively acknowledging that everyone in the room deserves to be here just as much as you do.</li>
            <li style={{ marginBottom: '16px' }}><strong>Communicate clearly and constructively.</strong> Share ideas relentlessly without resorting to personal attacks, competitive hostility, or demeaning remarks.</li>
            <li><strong>Zero Tolerance for Disruption.</strong> Event participants decisively violating these rules will be formally sanctioned or completely expelled from the current event at the immediate discretion of the core organizers.</li>
          </ul>
        </div>

        <div style={{ backgroundColor: '#FCE8E6', border: '1px solid #FAD2CF', padding: '32px', borderRadius: '16px', textAlign: 'center', boxShadow: '0 8px 24px rgba(217,48,37,0.1)' }}>
          <span style={{ fontSize: '2rem', display: 'block', marginBottom: '16px' }}>📸</span>
          <h4 style={{ fontSize: '1.5rem', color: '#D93025', marginBottom: '12px' }}>Photography Disclaimer</h4>
          <p style={{ fontSize: '1.125rem', color: '#3C4043', lineHeight: 1.6, margin: 0 }}>
            <strong>By attending this event, you understand and consent that you will be photographed and recorded.</strong> These materials will be utilized by Women Techmakers Hyderabad heavily for internal documentation, widespread marketing purposes, and global social media outreach.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CodeOfConductPage;
