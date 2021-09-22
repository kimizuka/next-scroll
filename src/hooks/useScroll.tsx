import { useEffect, useState } from 'react';

export default function useScroll(parentElement: Window | HTMLElement | null) {
  const [ target, setTarget] = useState(null);
  const [ scrollTop, setScrollTop ] = useState(0);
  const [ scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    if (parentElement) {
      setTarget(parentElement);
    }
  }, [parentElement]);

  useEffect(() => {
    if (target) {
      target.removeEventListener('scroll', handleScroll);
      target.addEventListener('scroll', handleScroll, {
        passive: true
      });

      handleScroll();
    }

    return () => {
      if (target) {
        target.removeEventListener('scroll', handleScroll);
      }
    }
  }, [target]);

  function handleScroll() {
    setScrollTop(target.scrollTop || target.scrollY || 0);
  }

  return { scrollLeft, scrollTop };
}