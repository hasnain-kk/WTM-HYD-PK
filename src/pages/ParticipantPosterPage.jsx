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
  const workbenchRef = useRef(null);

  // Auto-scroll on upload (Perfect for Mobile)
  useEffect(() => {
    if (image && window.innerWidth < 992) {
      workbenchRef.current?.scrollBy({ top: 300, behavior: 'smooth' });
    }
  }, [image]);

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

  const bgRef = useRef(null);
  const overlayRef = useRef(null);

  // 1. Pre-load Assets for Instant Rendering
  useEffect(() => {
    const bg = new Image();
    bg.crossOrigin = "anonymous";
    bg.src = posterBg;
    bg.onload = () => { bgRef.current = bg; };

    const ov = new Image();
    ov.crossOrigin = "anonymous";
    ov.src = posterOverlay;
    ov.onload = () => { overlayRef.current = ov; };
  }, []);

  // 2. Optimized "Live" Drawing Engine
  const drawPoster = () => {
    if (!name || !image || !bgRef.current || !overlayRef.current) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // 1. Background
    ctx.clearRect(0, 0, POSTER_WIDTH, POSTER_HEIGHT);
    ctx.drawImage(bgRef.current, 0, 0, POSTER_WIDTH, POSTER_HEIGHT);

    // 2. User Photo
    ctx.save();
    ctx.beginPath();
    ctx.rect(PHOTO_FRAME.x, PHOTO_FRAME.y, PHOTO_FRAME.w, PHOTO_FRAME.h);
    ctx.clip();
    const scale = Math.max(PHOTO_FRAME.w / image.width, PHOTO_FRAME.h / image.height);
    const drawW = image.width * scale;
    const drawH = image.height * scale;
    const offsetX = PHOTO_FRAME.x + (PHOTO_FRAME.w - drawW) / 2;
    const offsetY = PHOTO_FRAME.y + (PHOTO_FRAME.h - drawH) / 2;
    ctx.drawImage(image, offsetX, offsetY, drawW, drawH);
    ctx.restore();

    // 3. Overlay
    ctx.drawImage(overlayRef.current, 0, 0, POSTER_WIDTH, POSTER_HEIGHT);

    // 4. Name Text (Live Sync)
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
      if (metrics.width > MAX_TEXT_WIDTH && n > 0) {
        ctx.fillText(line, TEXT_FRAME.x, currentY);
        line = words[n] + ' ';
        currentY += lineHeight;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, TEXT_FRAME.x, currentY);
    
    setIsReady(true);
  };

  // 3. Effect: Live Update on Input
  useEffect(() => {
    if (name && image) {
      drawPoster();
    } else {
      setIsReady(false);
    }
  }, [name, image]);

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
    <div className="poster-container" style={{ paddingTop: '140px', paddingBottom: '100px' }}>
      <div ref={workbenchRef} className={`poster-workbench ${isCelebrating ? 'celebrate' : ''}`} style={{ 
        maxWidth: image ? '1200px' : '650px',
        margin: '0 auto',
        display: 'block' 
      }}>
        <div className={`workbench-dynamic-grid ${image ? 'expanded' : ''}`} style={{ 
          margin: '0 auto',
          width: '100%'
        }}>
          
          {/* Left Column: Inputs & Instructions */}
          <div className="workbench-inputs" style={{ 
            textAlign: image ? 'left' : 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100%'
          }}>
            <div style={{ marginBottom: '40px' }}>
              <h1 style={{ color: 'var(--deep-blue)', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 'bold', marginBottom: '12px' }}>Welcome!</h1>
              <p style={{ color: 'var(--vibrant-teal)', fontSize: 'clamp(1rem, 2.5vw, 1.3rem)', fontWeight: '700', letterSpacing: '0.5px', marginBottom: '16px' }}>
                Congratulations for Being Shortlisted for IWD 26 Baithak
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: '600' }}>
                Participants Poster Generator
              </p>
              <div style={{ height: '4px', width: '80px', background: 'var(--google-blue)', marginTop: '24px', margin: image ? '24px 0 0 0' : '24px auto 0 auto' }}></div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '500px', margin: image ? '0' : '0 auto' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'left' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                  <span style={{ background: 'var(--google-blue)', color: '#FFF', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 'bold' }}>1</span>
                  <label style={{ color: 'var(--deep-blue)', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Verify Your Name</label>
                </div>
                <input 
                  type="text" 
                  className="generator-input-field" 
                  placeholder="Full name for the badge..." 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{ background: '#F8F9FA', color: 'var(--deep-blue)', border: '2px solid rgba(25, 118, 210, 0.1)', width: '100%', boxSizing: 'border-box' }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'left' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                  <span style={{ background: 'var(--google-blue)', color: '#FFF', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 'bold' }}>2</span>
                  <label style={{ color: 'var(--deep-blue)', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Professional Portrait</label>
                </div>
                <div style={{ position: 'relative', width: '100%' }}>
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleImageUpload}
                    style={{ position: 'absolute', opacity: 0, width: '100%', height: '100%', cursor: 'pointer', zIndex: 2 }}
                  />
                  <div className="generator-input-field" style={{ 
                    background: image ? 'rgba(0, 196, 163, 0.08)' : '#F8F9FA', 
                    borderColor: image ? 'var(--vibrant-teal)' : 'rgba(25, 118, 210, 0.1)', 
                    textAlign: 'center', 
                    cursor: 'pointer',
                    color: image ? 'var(--vibrant-teal)' : 'var(--text-secondary)',
                    width: '100%',
                    boxSizing: 'border-box',
                    fontWeight: 'bold',
                    transition: 'all 0.3s ease'
                  }}>
                    {image ? '✓ Portrait Selected' : 'Choose File...'}
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '16px', padding: '20px', background: 'rgba(0, 196, 163, 0.05)', borderRadius: '16px', border: '1px dashed var(--vibrant-teal)', textAlign: 'center' }}>
                <p style={{ color: 'var(--vibrant-teal)', fontSize: '0.9rem', fontWeight: 'bold', margin: 0 }}>
                  {isReady ? '✓ Real-Time Studio Active' : 'Waiting for Name & Portrait...'}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Reveal Preview Area only after Upload */}
          {image && (
            <div className="workbench-preview img-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="canvas-preview-box" style={{ boxShadow: isReady ? '0 30px 80px rgba(0, 196, 163, 0.2)' : '0 30px 80px rgba(25, 118, 210, 0.1)' }}>
                <canvas 
                  ref={canvasRef} 
                  width={POSTER_WIDTH} 
                  height={POSTER_HEIGHT}
                  style={{ display: isReady ? 'block' : 'none', width: '100%', height: 'auto' }}
                />
                {!isReady && (
                  <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F8F9FA', color: 'var(--text-secondary)', textAlign: 'center', padding: '40px' }}>
                    <div>
                      <div className="dot-loader" style={{ marginBottom: '24px' }}>
                        <div className="dot" style={{ background: 'var(--google-blue)' }}></div>
                        <div className="dot" style={{ background: 'var(--vibrant-teal)' }}></div>
                        <div className="dot" style={{ background: 'var(--google-red)' }}></div>
                      </div>
                      <p style={{ fontSize: '1.1rem', fontWeight: '500' }}>Mastering Identity...</p>
                    </div>
                  </div>
                )}
              </div>

              {isReady && (
                <div className="reveal-celebration img-fade-in" style={{ marginTop: '40px', textAlign: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px', justifyContent: 'center' }}>
                    <span style={{ background: 'var(--google-blue)', color: '#FFF', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 'bold' }}>3</span>
                    <label style={{ color: 'var(--deep-blue)', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Take Your Milestone Home</label>
                  </div>

                  <button 
                    className="btn-pill" 
                    onClick={downloadPoster}
                    style={{ width: '100%', background: 'var(--deep-blue)', color: '#FFFFFF', padding: '18px', fontSize: '1.1rem', marginBottom: '32px', boxShadow: '0 10px 30px rgba(25, 118, 210, 0.3)' }}
                  >
                    Download High-Res Poster
                  </button>

                  <div style={{ background: '#F8F9FA', padding: '24px', borderRadius: '24px', border: '1px solid rgba(25, 118, 210, 0.1)' }}>
                    <p style={{ color: 'var(--deep-blue)', fontWeight: 'bold', marginBottom: '8px' }}>Share Your Pride!</p>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '16px' }}>Use the caption below:</p>
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
          )}

        </div>
      </div>
    </div>
  );
};

export default ParticipantPosterPage;
