import { useEffect } from 'react';

/**
 * useSEO Hook: Manages standard/social metadata dynamically.
 * Works even in SPAs for browsers and some modern social crawlers.
 */
const useSEO = ({ title, description, image, url }) => {
  useEffect(() => {
    // 1. Update Document Title
    if (title) document.title = title;

    // 2. Metadata Updates Generator
    const updateMeta = (selector, content) => {
      if (!content) return;
      const el = document.querySelector(selector);
      if (el) el.setAttribute('content', content);
    };

    // 3. Apply Metadata
    const baseUrl = 'https://wtm-hyd-pk.vercel.app';
    const finalImage = image?.startsWith('http') ? image : `${baseUrl}${image}`;

    updateMeta('meta[name="title"]', title);
    updateMeta('meta[name="description"]', description);
    
    // Open Graph
    updateMeta('meta[property="og:title"]', title);
    updateMeta('meta[property="og:description"]', description);
    updateMeta('meta[property="og:image"]', finalImage);
    updateMeta('meta[property="og:url"]', url);

    // Twitter
    updateMeta('meta[property="twitter:title"]', title);
    updateMeta('meta[property="twitter:description"]', description);
    updateMeta('meta[property="twitter:image"]', finalImage);
    updateMeta('meta[property="twitter:url"]', url);

  }, [title, description, image, url]);
};

export default useSEO;
