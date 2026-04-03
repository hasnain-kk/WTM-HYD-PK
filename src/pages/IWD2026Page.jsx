import React from 'react';

import flipImg1 from '../WTM Events Pictures/RAH00558.jpeg';
import flipImg2 from '../WTM Events Pictures/476613968_592980670364651_2431061071089222586_n.jpg';
import flipImg3 from '../WTM Events Pictures/478132654_596286623367389_7431807413535639842_n.jpg';
import flipImg4 from '../WTM Events Pictures/480666990_600547282941323_3708877212823527868_n.jpg';
import flipImg5 from '../WTM Events Pictures/DSC00696.jpg';
import flipImg6 from '../WTM Events Pictures/DSC01149.jpeg';

import heroBg from '../WTM Events Pictures/480567138_600547222941329_1479957266069263379_n.jpg';
import iwdLogo from '../WTM Events Pictures/IWD26/IWD26 Logo.png';
import baithakLogo from '../WTM Events Pictures/IWD26/Baithak.png';
import eventDetailsBg from '../WTM Events Pictures/DSC09710 - Copy.jpg';

import logoNic from '../WTM Events Pictures/Partners/Nic Hyderabad.png';
import logoWTM from '../WTM Events Pictures/Partners/WTM.png';
import logoGGD from '../WTM Events Pictures/Partners/Google For Developers.png';
import logoGDE from '../WTM Events Pictures/Partners/Google Developer Expert.png';
import logoVibe from '../WTM Events Pictures/Partners/Vibe Coders Pakistan.png';
import logoSheCloud from '../WTM Events Pictures/Partners/She Cloud.jpg';
import logoTech from '../WTM Events Pictures/Partners/Technovation.png';



// IWD 2026 Team Imports
import teamAzhar from '../WTM Events Pictures/IWD 26 Team/Azhar Ali.jpeg';
import teamFaaiz from '../WTM Events Pictures/IWD 26 Team/Faaiz Ali.jpeg';
import teamHasnain from '../WTM Events Pictures/IWD 26 Team/Hasnain KK.jpeg';
import teamHurain from '../WTM Events Pictures/IWD 26 Team/Hurain.jpeg';
import teamRobina from '../WTM Events Pictures/IWD 26 Team/Robina Mirbahar.jpeg';
import teamSandia from '../WTM Events Pictures/IWD 26 Team/Sandia.jpeg';
import teamTunhina from '../WTM Events Pictures/IWD 26 Team/Tunhina.jpeg';

import useSEO from '../hooks/useSEO';


const IWD2026Page = () => {
  useSEO({
    title: 'IWD 26 Baithak',
    description: 'Join WTM Hyderabad for the 2026 Flagship "Break the Pattern" event. A day of technical leadership, networking, and professional scaling.',
    image: '/og-iwd.jpg',
    url: window.location.href
  });

  const bgBlue = '#0033BD';
  const textWhite = '#FFFFFF';
  const accentTeal = '#00E5FF';

  const flipItems = [
    { img: flipImg1, text: 'Break the Pattern' },
    { img: flipImg2, text: 'Redefine Possible' },
    { img: flipImg3, text: 'Together We Lead' },
    { img: flipImg4, text: 'Together We Rise' },
    { img: flipImg5, text: 'Empowering Women' },
    { img: flipImg6, text: 'Tech Leadership' }
  ];

  const eventTeam = [
    { name: 'Robina Mirbahar', img: teamRobina },
    { name: 'Hasnain KK', img: teamHasnain },
    { name: 'Tunhina', img: teamTunhina },
    { name: 'Hurain', img: teamHurain },
    { name: 'Azhar Ali', img: teamAzhar },
    { name: 'Faaiz Ali', img: teamFaaiz },
    { name: 'Sandia', img: teamSandia }
  ];

  return (
    <div className="iwd-page" style={{ color: textWhite, minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        {[...Array(150)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            width: Math.random() * 15 + 5 + 'px',
            height: Math.random() * 15 + 5 + 'px',
            backgroundColor: i % 2 === 0 ? accentTeal : '#FFFFFF',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.1,
            animation: `pixelFloat ${Math.random() * 12 + 10}s infinite ease-in-out, pixelPulse ${Math.random() * 4 + 2}s infinite alternate`,
            animationDelay: `${Math.random() * 5}s`,
            borderRadius: '2px'
          }}></div>
        ))}
      </div>

      <section className="layout-section" style={{
        backgroundColor: '#FFFFFF',
        minHeight: 'clamp(60vh, 70vw, 85vh)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 1,
        paddingBottom: '80px',
        background: `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url("${heroBg}") center/cover`
      }}>
        <div className="grid-container" style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-block' }}>
            <img
              src={iwdLogo}
              alt="IWD 2026 Logo"
              style={{
                maxWidth: '850px',
                width: '100%',
                borderRadius: '24px'
              }}
            />
          </div>
        </div>
      </section>

      <div style={{ backgroundColor: '#1CE9B6', color: '#FFFFFF', padding: '12px 0', overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <div className="ticker-animate" style={{ display: 'inline-block', fontSize: '1.1rem', fontWeight: 'bold', letterSpacing: '4px', textTransform: 'uppercase' }}>
          {[...Array(10)].map((_, i) => (
            <span key={i}>International Women's Day 2026    -    </span>
          ))}
        </div>
      </div>

      <section style={{ backgroundColor: '#FFFFFF', padding: 'clamp(20px, 5vw, 40px) 0 20px 0', textAlign: 'center', overflow: 'hidden' }}>
        <h2 className="urdu-text-header" style={{
          fontSize: 'clamp(4rem, 15vw, 10rem)',
          margin: 0,
          color: '#000000',
          fontFamily: '"Noto Sans Arabic", "Simplified Arabic", serif',
          transform: 'scaleX(1.5)',
          transformOrigin: 'center',
          display: 'block',
          width: '100%',
          textAlign: 'center',
          opacity: 1,
          fontWeight: 'bold',
        }}>
          حیدرآباد
        </h2>
      </section>

      <div style={{ backgroundColor: '#1CE9B6', color: '#FFFFFF', padding: '12px 0', overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <div className="ticker-animate-reverse" style={{ display: 'inline-block', fontSize: '1.1rem', fontWeight: 'bold', letterSpacing: '4px', textTransform: 'uppercase' }}>
          {[...Array(10)].map((_, i) => (
            <span key={i}>Break The Pattern    -    </span>
          ))}
        </div>
      </div>

      <div style={{ backgroundColor: bgBlue }}>

        <section className="layout-section">
          <div className="grid-container">
            <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 8vw, 100px)' }}>
              <h2 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', fontWeight: 'bold', marginBottom: '24px', color: '#FFFFFF' }}>About Event</h2>
              <div style={{ height: '4px', width: '120px', background: accentTeal, margin: '0 auto' }}></div>
            </div>

            <div className="flex-responsive" style={{ alignItems: 'center', gap: 'clamp(32px, 8vw, 80px)' }}>
              <div style={{ flex: 1, textAlign: 'center' }}>
                <img src={baithakLogo} alt="Event Logo" style={{ maxWidth: '100%', marginBottom: '40px' }} />
                <p style={{ fontSize: 'clamp(1.2rem, 4vw, 1.75rem)', lineHeight: 1.6, opacity: 1, color: '#FFFFFF' }}>
                  This Year We are Organizing a flagship gathering where technical leadership meets local heritage.
                </p>
              </div>
              <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(150px, 40%, 250px), 1fr))', gap: 'clamp(16px, 3vw, 32px)' }}>
                {[
                  { title: 'Panels', desc: 'Expert technical discussions' },
                  { title: 'Workshops', desc: 'Hands-on learning sessions' },
                  { title: 'Activity', desc: 'Interactive community building' },
                  { title: 'Lunch', desc: 'Networking over meals' }
                ].map((item, i) => (
                  <div key={i} style={{ padding: 'clamp(16px, 4vw, 32px)', borderRadius: '24px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <h4 style={{ fontSize: 'clamp(1.2rem, 4.5vw, 1.8rem)', color: accentTeal, marginBottom: '16px', fontWeight: 'bold', opacity: 1 }}>{item.title}</h4>
                    <p style={{ margin: 0, opacity: 1, fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', color: '#FFFFFF', fontWeight: '500' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="layout-section" style={{
          position: 'relative',
          background: `url("${eventDetailsBg}") center/cover fixed`,
        }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: `${bgBlue}F9`, backdropFilter: 'blur(20px)', zIndex: 1 }}></div>
          <div className="grid-container" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 8vw, 3.5rem)', marginBottom: 'clamp(40px, 8vw, 80px)', letterSpacing: '2px', color: '#FFFFFF', opacity: 1 }}>EVENT DETAILS</h2>

            <div className="flex-responsive" style={{ gap: 'clamp(24px, 5vw, 48px)', justifyContent: 'center' }}>
              <div style={{ flex: 1, padding: 'clamp(32px, 8vw, 64px) clamp(24px, 5vw, 48px)', background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)', borderRadius: '48px', border: '1px solid rgba(255,255,255,0.15)', textAlign: 'center', boxShadow: '0 24px 64px rgba(0,0,0,0.3)' }}>
                <div style={{ color: accentTeal, fontSize: '1rem', fontWeight: 'bold', marginBottom: '24px', letterSpacing: '3px' }}>TIME & PLACE</div>
                <p style={{ fontSize: 'clamp(2.2rem, 8vw, 3.5rem)', margin: '0 0 12px 0', fontWeight: 'bold', lineHeight: 1.1, color: '#FFFFFF' }}>13 APRIL <br /><span style={{ fontSize: '0.75em', color: '#FFFFFF' }}>2026</span></p>
                <p style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', color: accentTeal, fontWeight: 'bold', marginTop: '32px' }}>NIC HYDERABAD</p>
              </div>

              <div style={{ flex: 1, padding: 'clamp(32px, 8vw, 64px) clamp(24px, 5vw, 48px)', background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)', borderRadius: '48px', border: '1px solid rgba(255,255,255,0.15)', textAlign: 'center', boxShadow: '0 24px 64px rgba(0,0,0,0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ color: accentTeal, fontSize: '1rem', fontWeight: 'bold', marginBottom: '32px', letterSpacing: '3px' }}>ELIGIBILITY</div>
                <p style={{ fontSize: 'clamp(1.3rem, 4vw, 1.75rem)', lineHeight: 1.5, margin: 0, color: '#FFFFFF' }}>
                  Open to <strong>everyone</strong> regardless of Gender, Profession, or Age.
                </p>
                <p style={{ fontSize: '1rem', marginTop: '32px', padding: '12px 24px', background: 'rgba(0, 229, 255, 0.2)', borderRadius: '100px', display: 'inline-block', color: accentTeal, fontWeight: 'bold' }}>• INVITE ONLY ACCESS</p>
              </div>
            </div>

            <div style={{ marginTop: 'clamp(40px, 10vw, 100px)' }}>
              <a
                href="https://luma.com/event/evt-WbCg1FNBS1W7OdG"
                className="luma-checkout--button btn-pill"
                data-luma-action="checkout"
                data-luma-event-id="evt-WbCg1FNBS1W7OdG"
                style={{ backgroundColor: accentTeal, border: 'none', color: bgBlue, padding: 'clamp(16px, 4vw, 24px) clamp(32px, 10vw, 100px)', fontSize: 'clamp(1.2rem, 5vw, 2rem)', fontWeight: 'bold', cursor: 'pointer', display: 'inline-block', borderRadius: '100px', textDecoration: 'none', boxShadow: `0 20px 80px rgba(0,229,255,0.4)` }}
              >
                Register Now
              </a>
            </div>
          </div>
        </section>

        <section className="layout-section">
          <div className="grid-container" style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 8vw, 3.5rem)', marginBottom: '40px', color: '#FFFFFF' }}>Our Speakers</h2>
            <div style={{ padding: 'clamp(32px, 8vw, 64px)', borderRadius: '48px', background: 'rgba(255,255,255,0.1)', border: '1px dashed rgba(255,255,255,0.3)' }}>
              <p style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', fontWeight: 'bold', color: '#FFFFFF', margin: 0 }}>Note: Coming Soon</p>
            </div>
          </div>
        </section>

        <section className="layout-section" style={{ backgroundColor: bgBlue, color: textWhite }}>
          <div className="grid-container" style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(2.2rem, 6vw, 4rem)', marginBottom: 'clamp(32px, 8vw, 64px)' }}>Meet the Organizers</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(200px, 45%, 280px), 1fr))', gap: 'clamp(24px, 5vw, 48px)', justifyContent: 'center' }}>
              {eventTeam.map((member, i) => (
                <div key={i} className="surface-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ width: 'clamp(120px, 20vw, 150px)', height: 'clamp(120px, 20vw, 150px)', borderRadius: '50%', overflow: 'hidden', marginBottom: '20px', border: `3px solid ${accentTeal}` }}>
                    <img src={member.img} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <h3 style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)', color: '#FFFFFF', margin: 0, fontWeight: 'bold' }}>{member.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="layout-section" style={{ backgroundColor: '#FFFFFF', color: bgBlue, padding: '120px 0' }}>
          <div className="grid-container">
            <h3 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '100px', color: '#000000', fontWeight: 'bold' }}>Our Partner for this Event</h3>

            <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', position: 'relative', marginBottom: '80px' }}>
              <div className="ticker-animate" style={{ display: 'flex', gap: '80px', width: 'fit-content', alignItems: 'center' }}>
                {[
                  logoNic, logoWTM, logoGGD, logoGDE,
                  logoNic, logoWTM, logoGGD, logoGDE
                ].map((logo, i) => (
                  <img key={i} src={logo} alt="Partner" style={{ height: 'clamp(30px, 5vw, 60px)', width: 'auto', opacity: 1, transition: '0.3s' }} />
                ))}
              </div>
            </div>

            <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', position: 'relative', marginBottom: '80px' }}>
              <div className="ticker-animate-reverse" style={{ display: 'flex', gap: '80px', width: 'fit-content', alignItems: 'center' }}>
                {[
                  logoVibe, logoSheCloud, logoTech, logoWTM,
                  logoVibe, logoSheCloud, logoTech, logoWTM
                ].map((logo, i) => (
                  <img key={i} src={logo} alt="Partner" style={{ height: 'clamp(30px, 5vw, 60px)', width: 'auto', opacity: 1, transition: '0.3s' }} />
                ))}
              </div>
            </div>

            <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', position: 'relative' }}>
              <div className="ticker-animate" style={{ display: 'flex', gap: '80px', width: 'fit-content', alignItems: 'center' }}>
                {[
                  logoGGD, logoGDE, logoNic, logoSheCloud,
                  logoGGD, logoGDE, logoNic, logoSheCloud
                ].map((logo, i) => (
                  <img key={i} src={logo} alt="Partner" style={{ height: 'clamp(30px, 5vw, 60px)', width: 'auto', opacity: 1, transition: '0.3s' }} />
                ))}
              </div>
            </div>
          </div>
        </section>


        <div style={{ backgroundColor: '#1CE9B6', color: '#FFFFFF', padding: '12px 0', overflow: 'hidden', whiteSpace: 'nowrap' }}>
          <div className="ticker-animate-reverse" style={{ display: 'inline-block', fontSize: '1.1rem', fontWeight: 'bold', letterSpacing: '4px', textTransform: 'uppercase' }}>
            {[...Array(10)].map((_, i) => (
              <span key={i}>International Women's Day 2026    -    </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IWD2026Page;
