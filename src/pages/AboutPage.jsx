import React from 'react';
import useSEO from '../hooks/useSEO';

import aboutBg from '../WTM Events Pictures/DSC09380.jpeg';
import communityImg from '../WTM Events Pictures/RAH00558.jpeg';
import partnersBg from '../WTM Events Pictures/478403869_596286476700737_8847670728925164592_n.jpg';

import wtmLogo from '../WTM Events Pictures/Partners/WTM.png';
import nicLogo from '../WTM Events Pictures/Partners/Nic Hyderabad.png';
import sheCloudLogo from '../WTM Events Pictures/Partners/She Cloud.jpg';
import vibeCodersLogo from '../WTM Events Pictures/Partners/Vibe Coders Pakistan.png';
import technovationLogo from '../WTM Events Pictures/Partners/Technovation.png';

const partnersData = [
  { name: 'WTM', logo: wtmLogo },
  { name: 'Technovation', logo: technovationLogo },
  { name: 'NIC Hyderabad', logo: nicLogo },
  { name: 'SheCloud', logo: sheCloudLogo },
  { name: 'Vibe Coders Pakistan', logo: vibeCodersLogo }
];

const AboutPage = () => {
  useSEO({
    title: 'About WTM Hyderabad Pakistan | Our Mission & Partners',
    description: 'Learn about the mission of Women Techmakers Hyderabad Pakistan. Empowering women in tech across Sindh through workshops, mentorship, and flagship events such as IWD 2026.',
    image: '/og-iwd.jpg',
    url: window.location.href,
    schema: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "mainEntity": {
        "@type": "Organization",
        "name": "Women Techmakers Hyderabad Pakistan",
        "description": "An inclusive ecosystem building community, visibility, and resources for women in tech across Hyderabad and Sindh.",
        "location": {
          "@type": "Place",
          "name": "Hyderabad, Pakistan"
        }
      }
    }
  });

  return (
    <div>
      <section className="layout-section" style={{ background: `linear-gradient(rgba(0, 196, 163, 0.85), rgba(66, 133, 244, 0.85)), url("${aboutBg}") center/cover border-box` }}>
        <div className="grid-container">
          <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 8vw, 64px)' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 8vw, 3.5rem)', margin: '0 auto', color: '#FFFFFF', maxWidth: '100%' }}>About Our Chapter</h2>
          </div>
          <div className="flex-responsive" style={{ alignItems: 'center', gap: 'clamp(32px, 8vw, 48px)' }}>
            <div className="surface-card" style={{ padding: 'clamp(20px, 5vw, 48px)', maxWidth: '100%', margin: '0 auto', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(16px)' }}>
              <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)', color: '#FFFFFF', lineHeight: 1.8, textAlign: 'left' }}>
                Women Techmakers Hyderabad Pakistan is a highly active and inclusive community initiative by Women Techmakers. Built to concentrate the mentorship and empowerment efforts of professionals across Sindh, our goal is to help women from all professional fields, with a core focus on technology, to learn, scale, and become highly productive.
                <br /><br />
                We operate large-scale workshops, host our massive flagship International Women's Day events, and foster a culture of continuous knowledge transfer for women of every age and background.
              </p>
            </div>
            <div>
              <img src={communityImg} alt="WTM Community" className="side-frame-img" style={{ borderColor: '#FFFFFF', height: 'clamp(250px, 40vw, 400px)' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="layout-section" style={{ background: `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.9)), url("${partnersBg}") center/cover border-box`, transition: 'background-color var(--transition-standard)' }}>
        <div className="grid-container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '24px', textAlign: 'center' }}>Our Partners and Collaborators</h2>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '1.25rem', marginBottom: '64px' }}>Collaborating to empower the next generation of technical leaders.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px' }}>
            {partnersData.map((partner, i) => (
              <div key={i} className="surface-card" style={{ padding: '40px 32px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF' }}>
                 <img src={partner.logo} alt={partner.name} style={{ maxHeight: '60px', maxWidth: '100%', objectFit: 'contain' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="layout-section" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--surface-border)' }}>
        <div className="grid-container">
          <h2 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '64px' }}>Get Involved</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            <div id="sponsor" className="surface-card" style={{ padding: '48px', textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '16px', color: 'var(--google-blue)' }}>Sponsor Us</h3>
              <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '32px', flexGrow: 1 }}>Empower the ecosystem by partnering with our annual flagship initiatives.</p>
              <a href="mailto:women.techmakers.hyd.pk@gmail.com?subject=Sponsor Inquiry" className="btn-pill" style={{ borderColor: 'var(--google-blue)' }}>Email Partnership Team</a>
            </div>
            <div id="mentor" className="surface-card" style={{ padding: '48px', textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '16px', color: 'var(--vibrant-teal)' }}>Mentor or Speaker</h3>
              <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '32px', flexGrow: 1 }}>Share your journey, teach a workshop, and inspire the next generation.</p>
              <a href="mailto:women.techmakers.hyd.pk@gmail.com?subject=Speaker/Mentor Inquiry" className="btn-pill" style={{ borderColor: 'var(--vibrant-teal)' }}>Submit Interest</a>
            </div>
            <div id="join" className="surface-card" style={{ padding: '48px', textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '16px', color: 'var(--deep-blue)' }}>Join the Team</h3>
              <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '32px', flexGrow: 1 }}>We are actively looking for passionate community organizers to scale our mission.</p>
              <a href="mailto:women.techmakers.hyd.pk@gmail.com?subject=Team Application" className="btn-pill" style={{ borderColor: 'var(--deep-blue)' }}>Apply for Core</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
