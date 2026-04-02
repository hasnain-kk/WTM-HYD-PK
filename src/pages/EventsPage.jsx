import React, { useState } from 'react';

const EventsPage = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const archiveEvents = [
    { title: 'Impact the Future 2024', date: 'April 2024', status: 'Past' },
    { title: 'Accelerate Action 2025', date: 'March 2025', status: 'Past' }
  ];

  const upcomingEvents = [
    { title: 'IWD 2026 Baithak', date: 'March 8, 2026', status: 'Upcoming' }
  ];

  const events = activeTab === 'upcoming' ? upcomingEvents : archiveEvents;

  return (
    <div className="events-page">
      <div className="layout-section" style={{ background: 'linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.95)), url("./src/WTM Events Pictures/DSC01149.jpeg") center/cover border-box' }}>
        <div className="grid-container">
          <h1 className="cloud-next-gradient-text" style={{ fontSize: '4rem', marginBottom: '48px', textAlign: 'center', paddingBottom: '12px' }}>Session Catalog</h1>
          
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '64px', backgroundColor: 'var(--surface-bg)', padding: '6px', borderRadius: '100px', maxWidth: '500px', margin: '0 auto 64px auto', border: '1px solid var(--surface-border)' }}>
            <button 
              className={`btn-pill ${activeTab === 'upcoming' ? 'primary' : ''}`}
              style={{ flex: 1, border: 'none', background: activeTab === 'upcoming' ? 'var(--google-blue)' : 'transparent', color: activeTab === 'upcoming' ? '#FFF' : 'var(--text-secondary)' }} 
              onClick={() => setActiveTab('upcoming')}
            >
              Scheduled
            </button>
            <button 
              className={`btn-pill ${activeTab === 'archive' ? 'primary' : ''}`}
              style={{ flex: 1, border: 'none', background: activeTab === 'archive' ? 'var(--google-blue)' : 'transparent', color: activeTab === 'archive' ? '#FFF' : 'var(--text-secondary)' }} 
              onClick={() => setActiveTab('archive')}
            >
              Archived
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '40px' }}>
            {events.map((e, index) => (
              <div key={index} className="surface-card" style={{ padding: '40px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                  <span className="text-mono" style={{ padding: '6px 12px', border: '1px solid var(--surface-border)', borderRadius: '6px', color: activeTab === 'upcoming' ? 'var(--google-green)' : 'var(--text-secondary)' }}>
                    {e.status}
                  </span>
                  <span className="text-mono" style={{ color: 'var(--text-secondary)' }}>{e.date}</span>
                </div>
                <h3 style={{ fontSize: '2.25rem', marginBottom: '24px' }}>{e.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.125rem', marginBottom: '40px', flexGrow: 1 }}>
                  Join our inclusive gatherings designed for women of all professions and ages to connect, learn, and grow, while cultivating our core focus on tech skills.
                </p>
                <button className={`btn-pill ${activeTab === 'upcoming' ? 'primary' : ''}`} style={{ width: '100%' }}>
                  {activeTab === 'upcoming' ? 'Initialize Registration' : 'Fetch Logs'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
