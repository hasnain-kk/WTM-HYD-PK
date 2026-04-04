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
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // 1. Background (Always draw if loaded)
    ctx.clearRect(0, 0, POSTER_WIDTH, POSTER_HEIGHT);
    if (bgRef.current) {
      ctx.drawImage(bgRef.current, 0, 0, POSTER_WIDTH, POSTER_HEIGHT);
    } else {
      // Placeholder while loading
      ctx.fillStyle = '#F8F9FA';
      ctx.fillRect(0, 0, POSTER_WIDTH, POSTER_HEIGHT);
    }

    // 2. User Photo (Only if present)
    if (image) {
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
    }

    // 3. Overlay (Always draw if loaded)
    if (overlayRef.current) {
      ctx.drawImage(overlayRef.current, 0, 0, POSTER_WIDTH, POSTER_HEIGHT);
    }

    // 4. Name Text (Live Sync)
    if (name) {
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
    }
    
    setIsReady(true);
  };

  // 3. Effect: Continuous Live Update
  useEffect(() => {
    drawPoster();
  }, [name, image]);

  const downloadPoster = () => {
    if (!name || !image) return;
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
      <div ref={workbenchRef} className="poster-workbench">
        
        {/* Tier 1: Grand Header */}
        <div style={{ marginBottom: '60px', textAlign: 'center', borderBottom: '1px solid rgba(25, 118, 210, 0.05)', paddingBottom: '40px' }}>
          <h1 style={{ color: 'var(--deep-blue)', fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 'bold', marginBottom: '16px' }}>Welcome!</h1>
          <p style={{ color: 'var(--vibrant-teal)', fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', fontWeight: '800', letterSpacing: '0.5px', marginBottom: '12px' }}>
            Congratulations for Being Shortlisted for IWD 26 Baithak
          </p>
          <div style={{ display: 'inline-block', height: '4px', width: '120px', background: 'var(--google-blue)', borderRadius: '2px' }}></div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '4px', fontWeight: '700', marginTop: '24px' }}>
            Official Participant Badge Generator
          </p>
        </div>

        {/* Tier 2: Studio Body (Single Column Flow) */}
        <div className="workbench-dynamic-grid">
          
          {/* Step 1 & 2: Inputs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%', maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                <span style={{ background: 'var(--google-blue)', color: '#FFF', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 'bold' }}>1</span>
                <label style={{ color: 'var(--deep-blue)', fontSize: '0.9rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Verify Your Name</label>
              </div>
              <input 
                type="text" 
                className="generator-input-field" 
                placeholder="Type your name..." 
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ background: '#F8F9FA', color: 'var(--deep-blue)', border: '2px solid rgba(25, 118, 210, 0.1)', width: '100%', boxSizing: 'border-box' }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                <span style={{ background: 'var(--google-blue)', color: '#FFF', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 'bold' }}>2</span>
                <label style={{ color: 'var(--deep-blue)', fontSize: '0.9rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Professional Portrait</label>
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
                  fontWeight: 'bold'
                }}>
                  {image ? '✓ Portrait Selected' : 'Choose File...'}
                </div>
              </div>
            </div>
          </div>

          {/* Live Preview Section (Below Photo) */}
          <div className="workbench-preview" style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
            <div className="canvas-preview-box" style={{ boxShadow: name && image ? '0 30px 80px rgba(0, 196, 163, 0.15)' : '0 10px 40px rgba(0, 0, 0, 0.05)' }}>
              <canvas 
                ref={canvasRef} 
                width={POSTER_WIDTH} 
                height={POSTER_HEIGHT}
                style={{ display: 'block', width: '100%', height: 'auto', borderRadius: '12px' }}
              />
            </div>
            <div style={{ marginTop: '16px', textAlign: 'center' }}>
              <p style={{ color: 'var(--vibrant-teal)', fontSize: '0.85rem', fontWeight: 'bold', margin: 0 }}>
                {isReady && name && image ? '✓ Ready to Download' : '⌨️ Live Identity Preview'}
              </p>
            </div>
          </div>
        </div>

        {/* Tier 3: Sharing Hub */}
        <div style={{ marginTop: '60px', paddingTop: '40px', borderTop: '1px solid rgba(25, 118, 210, 0.05)', textAlign: 'center', width: '100%', maxWidth: '700px', margin: '60px auto 0 auto' }}>
          <div className="reveal-celebration" style={{ opacity: name && image ? 1 : 0.4, transition: 'opacity 0.5s ease' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '32px', justifyContent: 'center' }}>
              <span style={{ background: 'var(--google-blue)', color: '#FFF', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', fontWeight: 'bold' }}>3</span>
              <label style={{ color: 'var(--deep-blue)', fontSize: '1rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px' }}>Take Your Milestone Home</label>
            </div>

            <button 
              className="btn-pill" 
              onClick={downloadPoster}
              disabled={!name || !image}
              style={{ width: '100%', maxWidth: '500px', background: 'var(--google-blue)', color: '#FFFFFF', padding: '24px', fontSize: '1.2rem', marginBottom: '40px', boxShadow: '0 15px 40px rgba(25, 118, 210, 0.25)', cursor: (!name || !image) ? 'not-allowed' : 'pointer', fontWeight: 'bold' }}
            >
              Download High-Res Poster
            </button>

            <div style={{ background: '#F8F9FA', padding: '32px', borderRadius: '32px', border: '1px solid rgba(25, 118, 210, 0.1)', textAlign: 'center' }}>
              <p style={{ color: 'var(--deep-blue)', fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '12px' }}>Share Your Pride! 🥂</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '24px' }}>Use the caption below to mention the movement:</p>
              
              <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: '20px', fontSize: '0.9rem', color: 'var(--text-primary)', whiteSpace: 'pre-line', marginBottom: '32px', border: '1px solid rgba(25, 118, 210, 0.05)', textAlign: 'left', lineHeight: 1.8, boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)' }}>
                {captionText}
              </div>
              <button 
                className="copy-btn" 
                onClick={copyToClipboard}
                style={{ background: copySuccess ? '#34A853' : 'var(--google-blue)', color: '#FFF', width: '100%', maxWidth: '400px', borderRadius: '16px', padding: '16px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}
              >
                {copySuccess ? '✓ Caption Copied!' : 'Copy Caption & Hashtags'}
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ParticipantPosterPage;
