import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';
import { sharedEventData } from '../data';

const EventProfilePage = () => {
  const { slug } = useParams();
  const event = sharedEventData.find(e => e.slug === slug);

  if (!event) {
    return (
      <div className="layout-section" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Event Not Found</h2>
        <Link to="/events" className="btn-pill" style={{ display: 'inline-block', borderColor: 'var(--google-blue)' }}>Return to Catalog</Link>
      </div>
    );
  }

  useSEO({
    title: `${event.title} | WTM Hyderabad Pakistan Event`,
    description: `Join us for ${event.title} on ${event.date}. ${event.description.substring(0, 150)}... WTM Hyderabad Pakistan.`,
    image: event.coverImage,
    url: window.location.href,
    schema: {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": event.title,
      "startDate": event.date,
      "location": {
        "@type": "Place",
        "name": "Hyderabad, Sindh, Pakistan"
      },
      "image": event.coverImage,
      "description": event.description,
      "organizer": {
        "@type": "Organization",
        "name": "Women Techmakers Hyderabad Pakistan"
      }
    }
  });

  return (
    <div className="event-profile-page">
      <section className="layout-section" style={{ minHeight: '80vh', background: `linear-gradient(to bottom, rgba(255,255,255,0.85), rgba(255,255,255,0.98)), url("${event.coverImage}") center/cover border-box` }}>
        <div className="grid-container" style={{ marginBottom: '32px' }}>
          <Link to="/events" className="btn-pill" style={{ display: 'inline-block', color: 'var(--text-primary)', borderColor: 'var(--surface-border)', padding: '10px 24px' }}>&larr; Back to Catalog</Link>
        </div>

        <div className="grid-container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <span className="text-accent" style={{ padding: '8px 16px', border: '1px solid var(--surface-border)', borderRadius: '12px', fontSize: '1.125rem', color: event.status === 'Upcoming' ? 'var(--google-blue)' : 'var(--text-secondary)', backgroundColor: 'var(--bg-primary)', display: 'inline-block', marginBottom: '32px' }}>
            {event.status}
          </span>

          <h1 style={{ fontSize: '4.5rem', marginBottom: '24px', color: 'var(--deep-blue)' }}>{event.title}</h1>
          <p style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', marginBottom: '48px', fontWeight: 'bold' }}>{event.date}</p>

          <div className="surface-card" style={{ padding: '64px', textAlign: 'left', borderRadius: '32px', marginBottom: '64px' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '24px', borderBottom: '2px solid var(--surface-border)', paddingBottom: '16px' }}>About The Session</h3>
            <p style={{ fontSize: '1.35rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              {event.description}
            </p>
          </div>

          {event.status === 'Upcoming' && (
            <a href={event.registration_link} target="_blank" rel="noreferrer" className="btn-pill primary" style={{ fontSize: '1.25rem', padding: '16px 48px' }}>
              Initialize Registration
            </a>
          )}
        </div>
      </section>
    </div>
  );
};

export default EventProfilePage;
