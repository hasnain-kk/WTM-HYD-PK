import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { sharedTeamData } from '../data';

const TeamProfilePage = () => {
  const { slug } = useParams();
  const member = sharedTeamData.find(m => m.slug === slug);

  if (!member) {
    return (
      <div className="layout-section" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Profile Not Found</h2>
        <Link to="/team" className="btn-pill" style={{ display: 'inline-block', borderColor: 'var(--google-blue)' }}>Return to Directory</Link>
      </div>
    );
  }

  const isFemale = member.gender === 'female';
  const borderStyle = isFemale ? '4px solid #34A853' : '4px solid #4285F4';

  return (
    <div className="team-profile-page">
      <section className="layout-section" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="grid-container" style={{ marginBottom: '24px' }}>
          <Link to="/team" className="btn-pill" style={{ display: 'inline-block', color: 'var(--text-secondary)', borderColor: 'var(--surface-border)', padding: '10px 24px', backgroundColor: 'var(--bg-primary)' }}>&larr; Back to Directory</Link>
        </div>

        <div className="grid-container flex-responsive" style={{ alignItems: 'flex-start', gap: '64px' }}>
          <div style={{ flex: '1 1 350px', position: 'sticky', top: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '100%', maxWidth: '350px', aspectRatio: '1/1', borderRadius: '32px', overflow: 'hidden', margin: '0 auto 32px auto', border: borderStyle, boxShadow: 'var(--surface-shadow-hover)', boxSizing: 'border-box' }}>
              <img src={member.photoUrl} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <h1 style={{ fontSize: '3rem', margin: '0 0 8px 0', color: isFemale ? '#34A853' : '#4285F4', textAlign: 'center' }}>{member.name}</h1>
            <p className="text-accent" style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '32px', padding: '8px 24px', backgroundColor: 'var(--surface-bg)', borderRadius: '100px' }}>{member.role}</p>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', width: '100%', flexWrap: 'wrap' }}>
              {member.socials && member.socials.map((social, idx) => (
                <a key={idx} href={social.url} target="_blank" rel="noreferrer" className="btn-pill" style={{ borderColor: 'var(--google-blue)', color: 'var(--google-blue)', padding: '12px 32px', fontSize: '1rem', flexGrow: 1, textAlign: 'center' }}>
                  Connect on {social.platform}
                </a>
              ))}
            </div>
          </div>

          <div style={{ flex: '2 1 500px' }}>
            <div style={{ padding: '48px', backgroundColor: 'var(--bg-primary)', borderRadius: '32px', border: '1px solid var(--surface-border)', marginBottom: '40px', boxShadow: '0 12px 48px rgba(0,0,0,0.03)' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '32px', borderBottom: '2px solid var(--surface-border)', paddingBottom: '16px' }}>Professional Biography</h2>
              <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.9, marginBottom: '0' }}>
                {member.bio}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamProfilePage;
