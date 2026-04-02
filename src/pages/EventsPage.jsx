import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { sharedEventData } from '../data';

import eventsBg from '../WTM Events Pictures/DSC01149.jpeg';

const EventsPage = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const navigate = useNavigate();
  
  const events = sharedEventData.filter(e => !e.hidden && (activeTab === 'upcoming' ? e.status === 'Upcoming' : e.status === 'Past'));
  
  return (
    <div className="layout-section" style={{ background: `linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.95)), url("${eventsBg}") center/cover border-box` }}>
      <div className="grid-container">
        <h1 style={{ fontSize: '4rem', marginBottom: '48px', textAlign: 'center', paddingBottom: '12px', color: 'var(--deep-blue)' }}>Session Catalog</h1>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '64px', backgroundColor: 'var(--surface-bg)', padding: '6px', borderRadius: '100px', maxWidth: '500px', margin: '0 auto 64px auto', border: '1px solid var(--surface-border)' }}>
          <button className={`btn-pill ${activeTab === 'upcoming' ? 'primary' : ''}`} style={{ flex: 1, border: 'none', background: activeTab === 'upcoming' ? 'var(--google-blue)' : 'transparent', color: activeTab === 'upcoming' ? '#FFF' : 'var(--text-secondary)' }} onClick={() => setActiveTab('upcoming')}>Scheduled</button>
          <button className={`btn-pill ${activeTab === 'archive' ? 'primary' : ''}`} style={{ flex: 1, border: 'none', background: activeTab === 'archive' ? 'var(--google-blue)' : 'transparent', color: activeTab === 'archive' ? '#FFF' : 'var(--text-secondary)' }} onClick={() => setActiveTab('archive')}>Archived</button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '40px', justifyContent: 'center' }}>
          {events.map((e, i) => (
            <div key={i} className="surface-card" style={{ padding: '40px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                <span className="text-accent" style={{ padding: '6px 12px', border: '1px solid var(--surface-border)', borderRadius: '6px', color: activeTab === 'upcoming' ? 'var(--vibrant-teal)' : 'var(--text-secondary)' }}>{e.status}</span>
                <span className="text-accent" style={{ color: 'var(--text-secondary)' }}>{e.date}</span>
              </div>
              <h3 style={{ fontSize: '2.25rem', marginBottom: '24px' }}>{e.title}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.125rem', marginBottom: '40px', flexGrow: 1 }}>{e.description}</p>
              <button onClick={() => {
                if (e.slug === 'IWD26Event') {
                  navigate('/iwd26');
                } else {
                  navigate(`/events/${e.slug}`);
                }
              }} className={`btn-pill ${activeTab === 'upcoming' ? 'primary' : ''}`} style={{ width: '100%' }}>{activeTab === 'upcoming' ? 'Initialize Registration' : 'View Details'}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
