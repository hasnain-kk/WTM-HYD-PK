import React, { useState, useRef, useEffect } from 'react';
import useSEO from '../hooks/useSEO';

// Asset Imports
import posterBg from '../WTM Events Pictures/Participent Poster/IWD 26 Baithak Posters (1).png';
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

    setTimeout(() => {
      setIsProcessing(false);
      setIsReady(true);
      setIsCelebrating(true);
    }, 1000); // Smooth production delay
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
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ color: '#FFFFFF', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 'bold', marginBottom: '8px' }}>Welcome!</h1>
          <p style={{ color: 'var(--vibrant-teal)', fontSize: 'clamp(1rem, 3.5vw, 1.4rem)', opacity: 1, fontWeight: '700', letterSpacing: '0.5px' }}>
            Congratulations for Being Shortlisted for IWD 26 Baithak
          </p>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '3px' }}>
            Participants Poster Generator
          </p>
          <div style={{ height: '3px', width: '80px', background: 'var(--vibrant-teal)', margin: '24px auto' }}></div>
        </div>

        <div className="canvas-preview-box">
          {isProcessing && (
            <div className="ai-loading-aura">
              <div className="pulsing-aura"></div>
              <p style={{ color: '#FFFFFF', marginTop: '20px', fontWeight: 'bold', letterSpacing: '2px', fontSize: '0.8rem' }}>MASTERING YOUR POSTER...</p>
            </div>
          )}
          <canvas 
            ref={canvasRef} 
            width={POSTER_WIDTH} 
            height={POSTER_HEIGHT}
            style={{ display: isReady ? 'block' : 'none' }}
          />
          {!isReady && !isProcessing && (
            <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF', color: '#5F6368', textAlign: 'center', padding: '40px' }}>
              <div>
                <p style={{ fontSize: '1.2rem', fontWeight: '500' }}>Your Poster Preview will appear here</p>
                <p style={{ fontSize: '0.85rem', marginTop: '8px' }}>Uplode your SelfProtrait Picture Below</p>
              </div>
            </div>
          )}
        </div>

        <div className="generator-controls">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', fontWeight: 'bold', marginLeft: '20px' }}>PARTICIPANT NAME</label>
              <input 
                type="text" 
                className="generator-input-field" 
                placeholder="Type your name..." 
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', fontWeight: 'bold', marginLeft: '20px' }}>UPLODE PORTRAIT</label>
              <div style={{ position: 'relative' }}>
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handleImageUpload}
                  style={{ position: 'absolute', opacity: 0, width: '100%', height: '100%', cursor: 'pointer', zIndex: 2 }}
                />
                <div className="generator-input-field" style={{ background: image ? 'rgba(0, 229, 255, 0.15)' : 'rgba(255,255,255,0.05)', borderColor: image ? 'var(--vibrant-teal)' : 'rgba(255,255,255,0.15)', textAlign: 'center', cursor: 'pointer' }}>
                  {image ? '✓ Photo Selected' : 'Choose Photo...'}
                </div>
              </div>
            </div>
          </div>

          <button 
            className="btn-pill btn-cta-animated" 
            onClick={generatePoster}
            disabled={!image || !name || isProcessing}
            style={{ 
              width: '100%', 
              background: (!image || !name || isProcessing) ? '#5F6368' : 'var(--vibrant-teal)', 
              color: '#000B29', 
              fontSize: '1.2rem', 
              padding: '20px',
              opacity: (!image || !name || isProcessing) ? 0.5 : 1,
              marginTop: '10px'
            }}
          >
            {isProcessing ? 'Generating...' : 'Now Generate the Poster for Attending'}
          </button>

          {isReady && (
            <div className="reveal-celebration">
              <button 
                className="btn-pill" 
                onClick={downloadPoster}
                style={{ width: '100%', background: '#FFFFFF', color: '#000B29', marginTop: '16px' }}
              >
                Download Poster
              </button>

              <div className="copy-strip" style={{ textAlign: 'center' }}>
                <p style={{ color: '#FFFFFF', fontWeight: '600', marginBottom: '8px' }}>Share this Poster on your Socials!</p>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginBottom: '16px' }}>Mention us! We love to see your posters.</p>
                
                <div style={{ background: 'rgba(255,255,255,0.1)', padding: '16px', borderRadius: '12px', fontSize: '0.85rem', color: '#FFFFFF', whiteSpace: 'pre-line', marginBottom: '16px', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'left' }}>
                  {captionText}
                </div>
                <button 
                  className="copy-btn" 
                  onClick={copyToClipboard}
                  style={{ background: copySuccess ? '#34A853' : 'var(--google-blue)', width: '100%' }}
                >
                  {copySuccess ? '✓ Caption Copied!' : 'Copy Posting Caption'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ParticipantPosterPage;
