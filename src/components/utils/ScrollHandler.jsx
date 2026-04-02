import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollHandler = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash (e.g., #sponsor), scroll to that element
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    // Otherwise, always scroll to top on page change
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollHandler;
