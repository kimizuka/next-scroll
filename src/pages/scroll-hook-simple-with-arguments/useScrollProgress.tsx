import { useEffect, useState } from 'react';
import useResize from './useResize';
import useScroll from './useScroll';

export default function useScrollProgress(parentElement: Window | HTMLElement | null, scrollElement: HTMLElement | null): [
  (scrollProgress: number) => void,
  number
] {
  const [ scrollProgress, setClosureScrollProgress ] = useState(0);
  const [ clientHeight, setClientHeight ] = useState(0);
  const [ scrollLeft, scrollTop ] = useScroll(parentElement);
  const [ windowHeight ] = useResize();
  
  useEffect(() => {
    if (scrollElement && scrollElement.clientHeight) {
      setClientHeight(scrollElement.clientHeight);
    }
  }, [scrollElement])

  useEffect(() => {
    if (scrollElement) {
      setClosureScrollProgress(Math.max(Math.min(scrollTop / (clientHeight - windowHeight), 1), 0));
    }
  }, [scrollTop, windowHeight]);

  function setScrollProgress(scrollProgress: number) {
    if (parentElement && parentElement.scrollTo) {
      parentElement.scrollTo(0, scrollProgress * (clientHeight - windowHeight));
    }
  }

  return [ setScrollProgress, scrollProgress ];
}