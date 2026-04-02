import React from 'react';
import { Link } from 'react-router-dom';
import { sharedTeamData } from '../data';

const TeamPage = () => {
  const visibleTeam = sharedTeamData.filter(m => !m.hidden);
  
  return (
    <div className="layout-section">
      <section className="grid-container">
        <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', marginBottom: 'clamp(32px, 8vw, 64px)', textAlign: 'center', color: 'var(--deep-blue)', maxWidth: '100%' }}>Meet Our Team</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(250px, 100%, 350px), 1fr))', gap: 'clamp(20px, 4vw, 32px)', justifyContent: 'center' }}>
          {visibleTeam.map((member) => (
            <div key={member.id} className="surface-card" style={{ padding: 'clamp(20px, 5vw, 40px)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '100%' }}>
              <div style={{ width: 'clamp(140px, 40vw, 180px)', height: 'clamp(140px, 40vw, 180px)', borderRadius: '50%', overflow: 'hidden', marginBottom: '32px', border: `4px solid ${member.gender === 'male' ? '#4285F4' : '#34A853'}`, boxSizing: 'border-box' }}>
                <img src={member.photoUrl} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 style={{ fontSize: 'clamp(1.5rem, 4vw, 1.75rem)', marginBottom: '8px' }}>{member.name}</h3>
              <p className="text-accent" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '32px' }}>{member.role}</p>
              <Link to={`/team/${member.slug}`} className="btn-pill" style={{ marginTop: 'auto', display: 'inline-block' }}>Review Identity</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
