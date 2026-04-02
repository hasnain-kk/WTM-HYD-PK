import React from 'react';

const PressPage = () => {
  const posts = [
    { id: 1, type: 'Release', title: 'WTM Hyderabad Announces IWD 2026 Theme', author: 'Hasnain KK', snippet: 'International Women\'s Day returns to Hyderabad as the flagship technical event of the year, focusing on new architectural paradigms and diversity in engineering.', height: '320px' },
    { id: 2, type: 'News', title: 'Concentrating Developer Efforts in Sindh', author: 'WTM Core', snippet: 'Mirroring global benchmarks, we are officially expanding our local networking initiatives to create stronger pipelines for junior developers.', height: '420px' },
    { id: 3, type: 'Blog', title: 'Deep Dive: Frontend Architecture', author: 'Sara Khan', snippet: 'How we modularize React components using CSS variables to create scalable, accessible systems without relying on bloated libraries.', height: '280px' },
    { id: 4, type: 'News', title: 'Recap: Building the Open Source Pipeline', author: 'Ayesha Ali', snippet: 'Highlights from our most successful networking event connecting Hyderabad talent with international open-source maintainers.', height: '300px' },
  ];
  return (
    <div className="press-page">
      <div className="layout-section" style={{ background: 'linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.95)), url("./src/WTM Events Pictures/478132654_596286623367389_7431807413535639842_n.jpg") center/cover border-box' }}>
        <div className="grid-container">
          <h1 className="cloud-next-gradient-text" style={{ fontSize: '4rem', marginBottom: '24px', textAlign: 'center', paddingBottom: '10px' }}>Press & Announcements</h1>
          <p style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '80px' }}>
            Official WTM Hyderabad releases, news, and community blog posts.
          </p>
          
          <div style={{ columnCount: 2, columnGap: '40px' }}>
            {posts.map(post => (
              <div key={post.id} className="surface-card" style={{ padding: '40px', marginBottom: '40px', breakInside: 'avoid', display: 'flex', flexDirection: 'column', height: post.height }}>
                <span className="text-mono" style={{ display: 'inline-block', backgroundColor: 'var(--input-bg)', padding: '6px 12px', borderRadius: '4px', border: '1px solid var(--surface-border)', marginBottom: '16px', width: 'fit-content', color: 'var(--google-blue)'}}>{post.type}</span>
                <h3 style={{ fontSize: '1.75rem', marginBottom: '16px', lineHeight: 1.3 }}>{post.title}</h3>
                <p className="text-mono" style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>Author: {post.author}</p>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.125rem', flexGrow: 1 }}>{post.snippet}</p>
                <a href="#" style={{ marginTop: 'auto', display: 'inline-block', fontWeight: 'bold', color: 'var(--google-blue)', fontSize: '1.125rem' }}>Read Article -&gt;</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressPage;
