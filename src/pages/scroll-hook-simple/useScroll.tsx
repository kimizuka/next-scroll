import { useEffect, useState } from 'react';

export default function useScroll() {
  const [ scrollTop, setScrollTop ] = useState(0);
  const [ scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    window.removeEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  function handleScroll() {
    setScrollTop(window.scrollY);
    setScrollLeft(window.scrollX);
  }

  return { scrollLeft, scrollTop }
}