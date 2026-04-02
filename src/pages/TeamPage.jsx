import React from 'react';

const teamData = [
  { id: 1, name: 'Hasnain KK', role: 'WTM Lead' },
  { id: 2, name: 'Sara Khan', role: 'Technical Mentor' },
  { id: 3, name: 'Ayesha Ali', role: 'Community Manager' },
  { id: 4, name: 'Zara Ahmed', role: 'Design Lead' },
  { id: 5, name: 'Robina Mirbahar', role: 'Community Ambassador' },
];

const TeamPage = () => {
  return (
    <div className="team-page">
      <section className="layout-section" style={{ textAlign: 'center', background: 'linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.85)), url("./src/WTM Events Pictures/DSC01169.jpg") center/cover border-box' }}>
        <div className="grid-container">
          <h1 className="cloud-next-gradient-text" style={{ fontSize: '4.5rem', marginBottom: '24px', display: 'inline-block' }}>Team Layout</h1>
          <p style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
            The dedicated individuals fostering leadership and innovation for women of every profession and age in Hyderabad, driven by a core passion for technology.
          </p>
        </div>
      </section>

      <section className="layout-section" style={{paddingTop: '64px'}}>
        <div className="grid-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '32px' }}>
          {teamData.map((member) => (
            <div key={member.id} className="surface-card" style={{ padding: '48px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ width: '120px', height: '120px', borderRadius: '50%', overflow: 'hidden', marginBottom: '24px', border: '2px solid var(--surface-border)' }}>
                <img 
                  src={`https://ui-avatars.com/api/?name=${member.name.replace(' ', '+')}&background=0A0A0A&color=4285F4&size=200&bold=true`} 
                  alt={member.name} 
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '8px' }}>{member.name}</h3>
              <p className="text-mono" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '32px' }}>{member.role}</p>
              
              <a href={`/team/${member.id}`} className="btn-pill" style={{ marginTop: 'auto' }}>
                Review Commit
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
