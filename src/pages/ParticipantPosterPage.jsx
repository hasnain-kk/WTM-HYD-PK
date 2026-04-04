import React, { useState, useRef, useEffect } from 'react';
import useSEO from '../hooks/useSEO';

// Asset Imports
import posterBg from '../WTM Events Pictures/Participent Poster/baithak-bg.jpg';
import posterOverlay from '../WTM Events Pictures/Participent Poster/IWD 26 Baithak Posters (3).png';

const ParticipantPosterPage = () => {
  useSEO({
    title: 'Participant Badge Generator | IWD 2026',
    description: 'Generate your official IWD 26 Baithak participant poster. Join the "Break the Pattern" movement at WTM Hyderabad.',
    image: '/og-iwd.jpg'
  });

  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isCelebrating, setIsCelebrating] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  
  const canvasRef = useRef(null);

  const POSTER_WIDTH = 1080;
  const POSTER_HEIGHT = 1440;

  // Exact coordinates from user
  const PHOTO_FRAME = { x: 584, y: 680, w: 379, h: 408 };
  const TEXT_FRAME = { x: 50, y: 841, w: 468, h: 175 };

  const captionText = `Im attending IWD 26 Break The Pattern Baithak Hyderabad PK.\n\nMention us @Women Techmakers Hyderabad Pakistan @Technovation @WomenTechmakers \n\n#BreakThePattern #IWD26 #WTMHydPK`;

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          setImage(img);
          setIsReady(false);
          setIsCelebrating(false);
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const generatePoster = async () => {
    if (!image) return;
    setIsProcessing(true);
    setIsCelebrating(false);
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // 1. Clear & Draw Background
    ctx.clearRect(0, 0, POSTER_WIDTH, POSTER_HEIGHT);
    const bgImg = new Image();
    bgImg.crossOrigin = "anonymous";
    bgImg.src = posterBg;
    await new Promise(r => bgImg.onload = r);
    ctx.drawImage(bgImg, 0, 0, POSTER_WIDTH, POSTER_HEIGHT);

    // 2. Draw User Photo (Direct Upload - High Fidelity)
    // Exact Clip to the Photo Frame to prevent "Bleeding"
    ctx.save();
    ctx.beginPath();
    ctx.rect(PHOTO_FRAME.x, PHOTO_FRAME.y, PHOTO_FRAME.w, PHOTO_FRAME.h);
    ctx.clip();

    // Calculate scaling to fit the box (379x408)
    const scale = Math.max(PHOTO_FRAME.w / image.width, PHOTO_FRAME.h / image.height);
    const drawW = image.width * scale;
    const drawH = image.height * scale;
    const offsetX = PHOTO_FRAME.x + (PHOTO_FRAME.w - drawW) / 2;
    const offsetY = PHOTO_FRAME.y + (PHOTO_FRAME.h - drawH) / 2;

    ctx.drawImage(image, offsetX, offsetY, drawW, drawH);
    ctx.restore(); // Exit Clip

    // 3. Draw Transparent Overlay
    const overlayImg = new Image();
    overlayImg.crossOrigin = "anonymous";
    overlayImg.src = posterOverlay;
    await new Promise(r => overlayImg.onload = r);
    ctx.drawImage(overlayImg, 0, 0, POSTER_WIDTH, POSTER_HEIGHT);

    // 4. Draw Name Text (BOLD, MULTI-LINE WRAPPING)
    ctx.fillStyle = '#FFFFFF';
    const fontSize = 70;
    const lineHeight = fontSize * 1.1;
    ctx.font = `bold ${fontSize}px 'Product Sans', sans-serif`;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    
    const MAX_TEXT_WIDTH = TEXT_FRAME.w;
    const words = name.toUpperCase().split(' ');
    let line = '';
    let currentY = TEXT_FRAME.y;

    for (let n = 0; n < words.length; n++) {
      let testLine = line + words[n] + ' ';
      let metrics = ctx.measureText(testLine);
      let testWidth = metrics.width;

      if (testWidth > MAX_TEXT_WIDTH && n > 0) {
        ctx.fillText(line, TEXT_FRAME.x, currentY);
        line = words[n] + ' ';
        currentY += lineHeight;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, TEXT_FRAME.x, currentY);

    setIsProcessing(false);
    setIsReady(true);
    setIsCelebrating(true);
    setTimeout(() => setIsCelebrating(false), 2000);
  };

  const downloadPoster = () => {
    const link = document.createElement('a');
    link.download = `IWD26_Poster_${name.replace(/\s+/g, '_')}.png`;
    link.href = canvasRef.current.toDataURL('image/png', 1.0);
    link.click();
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(captionText);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <div className="poster-container">
      <div className={`poster-workbench ${isCelebrating ? 'celebrate' : ''}`}>
        <div className="workbench-grid">
          
          {/* Left Column: Inputs & Instructions */}
          <div className="workbench-inputs">
            <div style={{ marginBottom: '40px' }}>
              <h1 style={{ color: 'var(--deep-blue)', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 'bold', marginBottom: '12px' }}>Welcome!</h1>
              <p style={{ color: 'var(--vibrant-teal)', fontSize: 'clamp(1rem, 2.5vw, 1.3rem)', fontWeight: '700', letterSpacing: '0.5px', marginBottom: '16px' }}>
                Congratulations for Being Shortlisted for IWD 26 Baithak
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: '600' }}>
                Participants Poster Generator
              </p>
              <div style={{ height: '4px', width: '80px', background: 'var(--google-blue)', marginTop: '24px' }}></div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <label style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase' }}>1. Enter Your Name</label>
                <input 
                  type="text" 
                  className="generator-input-field" 
                  placeholder="Full name as you'd like it on the badge..." 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{ background: '#F8F9FA', color: 'var(--deep-blue)', border: '2px solid rgba(25, 118, 210, 0.1)' }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <label style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase' }}>2. Upload Portrait Photo</label>
                <div style={{ position: 'relative' }}>
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleImageUpload}
                    style={{ position: 'absolute', opacity: 0, width: '100%', height: '100%', cursor: 'pointer', zIndex: 2 }}
                  />
                  <div className="generator-input-field" style={{ 
                    background: image ? 'rgba(0, 196, 163, 0.05)' : '#F8F9FA', 
                    borderColor: image ? 'var(--vibrant-teal)' : 'rgba(25, 118, 210, 0.1)', 
                    textAlign: 'center', 
                    cursor: 'pointer',
                    color: image ? 'var(--vibrant-teal)' : 'var(--text-secondary)'
                  }}>
                    {image ? '✓ Portrait Selected' : 'Choose File...'}
                  </div>
                </div>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', opacity: 0.7 }}>Recommended: High-resolution vertical portrait.</p>
              </div>

              <button 
                className="btn-pill primary" 
                onClick={generatePoster}
                disabled={!image || !name || isProcessing}
                style={{ 
                  width: '100%', 
                  padding: '24px',
                  fontSize: '1.25rem',
                  marginTop: '16px',
                  opacity: (!image || !name || isProcessing) ? 0.4 : 1,
                  boxShadow: '0 10px 30px rgba(25, 118, 210, 0.2)'
                }}
              >
                {isProcessing ? 'Mastering Your Poster...' : 'Generate My Poster'}
              </button>
            </div>
          </div>

          {/* Right Column: Live Preview & Ready Actions */}
          <div className="workbench-preview">
            <div className="canvas-preview-box">
              {isProcessing && (
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
                  <div style={{ textAlign: 'center' }}>
                    <div className="dot-loader" style={{ marginBottom: '16px' }}>
                      <div className="dot" style={{ background: 'var(--google-blue)' }}></div>
                      <div className="dot" style={{ background: 'var(--vibrant-teal)' }}></div>
                      <div className="dot" style={{ background: 'var(--google-red)' }}></div>
                    </div>
                    <p style={{ color: 'var(--google-blue)', fontWeight: 'bold', fontSize: '0.8rem', letterSpacing: '2px' }}>PROCESSING...</p>
                  </div>
                </div>
              )}
              <canvas 
                ref={canvasRef} 
                width={POSTER_WIDTH} 
                height={POSTER_HEIGHT}
                style={{ display: isReady ? 'block' : 'none', width: '100%', height: 'auto' }}
              />
              {!isReady && !isProcessing && (
                <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F8F9FA', color: 'var(--text-secondary)', textAlign: 'center', padding: '40px' }}>
                  <div>
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.2, marginBottom: '24px' }}>
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                      <circle cx="8.5" cy="8.5" r="1.5"/>
                      <polyline points="21 15 16 10 5 21"/>
                    </svg>
                    <p style={{ fontSize: '1.1rem', fontWeight: '500' }}>Live Preview Area</p>
                    <p style={{ fontSize: '0.85rem', marginTop: '8px', opacity: 0.7 }}>Fill details to see your badge</p>
                  </div>
                </div>
              )}
            </div>

            {isReady && (
              <div className="reveal-celebration" style={{ marginTop: '40px', textAlign: 'center' }}>
                <button 
                  className="btn-pill" 
                  onClick={downloadPoster}
                  style={{ width: '100%', background: 'var(--deep-blue)', color: '#FFFFFF', padding: '18px', fontSize: '1.1rem', marginBottom: '32px' }}
                >
                  Download High-Res Poster
                </button>

                <div style={{ background: '#F8F9FA', padding: '24px', borderRadius: '24px', border: '1px solid rgba(25, 118, 210, 0.1)' }}>
                  <p style={{ color: 'var(--deep-blue)', fontWeight: 'bold', marginBottom: '8px' }}>Share Your Milestone!</p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '20px' }}>Mention us! Use the caption below:</p>
                  
                  <div style={{ background: '#FFFFFF', padding: '16px', borderRadius: '16px', fontSize: '0.85rem', color: 'var(--text-primary)', whiteSpace: 'pre-line', marginBottom: '20px', border: '1px solid rgba(25, 118, 210, 0.05)', textAlign: 'left', lineHeight: 1.6 }}>
                    {captionText}
                  </div>
                  <button 
                    className="copy-btn" 
                    onClick={copyToClipboard}
                    style={{ background: copySuccess ? '#34A853' : 'var(--google-blue)', width: '100%', borderRadius: '12px' }}
                  >
                    {copySuccess ? '✓ Caption Copied!' : 'Copy Caption & Hashtags'}
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ParticipantPosterPage;
