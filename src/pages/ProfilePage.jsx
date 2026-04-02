import React from 'react';

const ProfilePage = ({ member }) => {
  return (
    <div className="profile-page" style={{minHeight:'100vh'}}>
      <div className="layout-section">
        <div className="grid-container">
          
          <section style={{ marginBottom: '48px' }}>
            <a href="/team" className="text-mono" style={{ display: 'inline-block', marginBottom: '32px', color: 'var(--text-secondary)', cursor: 'pointer' }}>
              &lt; Return to Parent
            </a>
            <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
              <div style={{ width: '160px', height: '160px', borderRadius: '50%', border: '2px solid var(--surface-border)', overflow: 'hidden' }}>
                 <img src={`https://ui-avatars.com/api/?name=Hasnain+KK&background=0A0A0A&color=4285F4&size=200&bold=true`} style={{width:'100%'}}/>
              </div>
              <div>
                <h1 style={{ fontSize: '3rem', margin: '0 0 8px 0' }}>Hasnain KK</h1>
                <p className="text-mono" style={{ fontSize: '1rem', color: 'var(--google-blue)', margin: 0 }}>&lt;sys-role&gt;WTM Lead&lt;/sys-role&gt;</p>
              </div>
            </div>
          </section>

          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '32px' }}>
            <section className="surface-card" style={{ padding: '40px' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '24px', borderBottom: '1px solid var(--surface-border)', paddingBottom: '16px' }}>Biography</h2>
              <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>Hasnain has been instrumental in organizing large-scale community events across Sindh, focusing on empowering women developers and supporting new initiatives in the local tech ecosystem. With a background in frontend architecture, he leads by example.</p>
            </section>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <section className="surface-card" style={{ padding: '40px' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '24px', borderBottom: '1px solid var(--surface-border)', paddingBottom: '16px' }}>Commits</h2>
                <div style={{ padding: '12px 16px', background: 'var(--input-bg)', borderRadius: '8px', marginBottom: '12px', fontWeight: 500, border: '1px solid var(--surface-border)' }}>Impact the Future 2024</div>
                <div style={{ padding: '12px 16px', background: 'var(--input-bg)', borderRadius: '8px', fontWeight: 500, border: '1px solid var(--surface-border)' }}>IWD Baithak 2023</div>
              </section>

              <section className="surface-card" style={{ padding: '40px' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '24px', borderBottom: '1px solid var(--surface-border)', paddingBottom: '16px' }}>Interfaces</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <a href="#" className="btn-pill" style={{textAlign:'center', width:'100%', boxSizing:'border-box'}}>LinkedIn Profile</a>
                  <a href="#" className="btn-pill" style={{textAlign:'center', width:'100%', boxSizing:'border-box'}}>X (Twitter) Profile</a>
                </div>
              </section>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
