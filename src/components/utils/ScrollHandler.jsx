import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollHandler = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Always scroll to top first for a clean state on route change
    window.scrollTo(0, 0);

    // If there's a hash (e.g., #sponsor), scroll to that element after a short delay
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollHandler;
