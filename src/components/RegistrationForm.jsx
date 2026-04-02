import React, { useState } from 'react';

export default function RegistrationForm() {
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    const roleLower = role.toLowerCase();
    if (!roleLower.includes('developer') && !roleLower.includes('engineer') && !roleLower.includes('professional') && roleLower !== 'tech') {
      setError("ERR_REQ_DECLINED: Looking for 'Tech Professional' aligned roles at this time.");
      return;
    }

    setError('');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="layout-section" style={{minHeight:'100vh'}}>
        <div className="grid-container">
          <div className="surface-card" style={{ textAlign: 'center', padding: '64px', maxWidth: '600px', margin: '0 auto', border: '1px solid var(--google-green)' }}>
            <p className="text-mono" style={{ color: 'var(--google-green)', marginBottom: '16px' }}>&gt; STATUS 200 OK</p>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Registration Received</h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              Here's the thing: we've received your request for the Baithak. We're reviewing invitations now to keep the circle intimate. We'll deploy an email to you soon.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="layout-section" style={{minHeight:'100vh'}}>
      <div className="grid-container">
        <form className="surface-card" onSubmit={handleRegister} style={{ padding: '64px', maxWidth: '600px', margin: '0 auto' }}>
          <p className="text-mono" style={{ color: 'var(--google-red)', marginBottom: '16px' }}>&gt; ACCESS LEVEL: SECURE</p>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '32px' }}>Request Baithak Invitation</h2>
          
          {error && <p className="text-mono" style={{ color: 'var(--google-red)', marginBottom: '24px' }}>{error}</p>}
          
          <div style={{ marginBottom: '24px' }}>
            <label htmlFor="email" className="text-mono" style={{ display: 'block', marginBottom: '12px' }}>Email Address</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              style={{ width: '100%', padding: '16px', boxSizing: 'border-box' }}
            />
          </div>

          <div style={{ marginBottom: '40px' }}>
            <label htmlFor="role" className="text-mono" style={{ display: 'block', marginBottom: '12px' }}>Current System Role</label>
            <input 
              type="text" 
              id="role" 
              placeholder="e.g. Lead Engineer, Tech Professional" 
              value={role} 
              onChange={(e) => setRole(e.target.value)} 
              required 
              style={{ width: '100%', padding: '16px', boxSizing: 'border-box' }}
            />
          </div>

          <button type="submit" className="btn-pill primary" style={{ width: '100%' }}>
            Execute Request
          </button>
        </form>
      </div>
    </div>
  );
}
