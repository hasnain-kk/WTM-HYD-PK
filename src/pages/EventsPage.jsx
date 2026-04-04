import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { sharedEventData } from '../data';

import eventsBg from '../WTM Events Pictures/DSC01149.jpeg';

const EventsPage = () => {
  const navigate = useNavigate();
  
  // Only show active, non-hidden upcoming events
  const upcomingEvents = sharedEventData.filter(e => !e.hidden && e.status === 'Upcoming');
  
  return (
    <div className="layout-section" style={{ background: `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.98)), url("${eventsBg}") center/cover border-box` }}>
      <div className="grid-container">
        <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', marginBottom: 'clamp(32px, 8vw, 64px)', textAlign: 'center', color: 'var(--deep-blue)', maxWidth: '100%' }}>Upcoming Events</h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 90vw, 450px), 1fr))', gap: 'clamp(24px, 4vw, 40px)', justifyContent: 'center', maxWidth: '800px', margin: '0 auto' }}>
          {upcomingEvents.map((e, i) => (
            <div key={i} className="surface-card" style={{ padding: 'clamp(24px, 5vw, 48px)', display: 'flex', flexDirection: 'column', maxWidth: '100%', border: '2px solid rgba(0, 196, 163, 0.1)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                <span className="text-accent" style={{ padding: '6px 16px', background: 'rgba(0, 196, 163, 0.05)', borderRadius: '100px', color: 'var(--vibrant-teal)', fontWeight: 'bold', fontSize: '0.85rem' }}>{e.status}</span>
                <span className="text-accent" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{e.date}</span>
              </div>
              <h3 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.75rem)', marginBottom: '20px', lineHeight: 1.1, color: 'var(--text-primary)', fontWeight: 'bold' }}>{e.title}</h3>
              <p style={{ color: 'var(--text-primary)', lineHeight: 1.8, fontSize: 'clamp(1rem, 2.5vw, 1.15rem)', marginBottom: '40px', flexGrow: 1, opacity: 0.95 }}>{e.description}</p>
              <button onClick={() => {
                if (e.slug === 'IWD26Event') {
                  navigate('/iwd26');
                } else {
                  navigate(`/events/${e.slug}`);
                }
              }} className="btn-pill primary" style={{ width: '100%', padding: '20px', fontSize: '1.1rem' }}>Initialize Registration</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
