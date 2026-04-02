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
        <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', marginBottom: 'clamp(32px, 8vw, 48px)', textAlign: 'center', color: 'var(--deep-blue)', maxWidth: '100%' }}>Session Catalog</h1>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '64px', backgroundColor: 'var(--surface-bg)', padding: '6px', borderRadius: '100px', maxWidth: '100%', margin: '0 auto 64px auto', border: '1px solid var(--surface-border)', overflow: 'hidden' }}>
          <button className={`btn-pill ${activeTab === 'upcoming' ? 'primary' : ''}`} style={{ flex: 1, border: 'none', background: activeTab === 'upcoming' ? 'var(--google-blue)' : 'transparent', color: activeTab === 'upcoming' ? '#FFF' : 'var(--text-secondary)', fontSize: 'clamp(0.8rem, 2vw, 1rem)', padding: '10px 16px' }} onClick={() => setActiveTab('upcoming')}>Scheduled</button>
          <button className={`btn-pill ${activeTab === 'archive' ? 'primary' : ''}`} style={{ flex: 1, border: 'none', background: activeTab === 'archive' ? 'var(--google-blue)' : 'transparent', color: activeTab === 'archive' ? '#FFF' : 'var(--text-secondary)', fontSize: 'clamp(0.8rem, 2vw, 1rem)', padding: '10px 16px' }} onClick={() => setActiveTab('archive')}>Archived</button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(250px, 100%, 400px), 1fr))', gap: 'clamp(24px, 4vw, 40px)', justifyContent: 'center' }}>
          {events.map((e, i) => (
            <div key={i} className="surface-card" style={{ padding: 'clamp(24px, 5vw, 40px)', display: 'flex', flexDirection: 'column', maxWidth: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                <span className="text-accent" style={{ padding: '6px 12px', border: '1px solid var(--surface-border)', borderRadius: '6px', color: activeTab === 'upcoming' ? 'var(--vibrant-teal)' : 'var(--text-secondary)' }}>{e.status}</span>
                <span className="text-accent" style={{ color: 'var(--text-secondary)' }}>{e.date}</span>
              </div>
              <h3 style={{ fontSize: 'clamp(1.3rem, 5vw, 2.25rem)', marginBottom: '16px', lineHeight: 1.2, color: 'var(--text-primary)' }}>{e.title}</h3>
              <p style={{ color: 'var(--text-primary)', lineHeight: 1.7, fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', marginBottom: '32px', flexGrow: 1, opacity: 0.9 }}>{e.description}</p>
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
