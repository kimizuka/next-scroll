import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import useScrollProgress from './useScrollProgress';

const Wrapper = styled.div`
  .spacer {
    height: 1000vh;
  }

  .logs {
    position: fixed;
    top: 0; left: 0;
    padding: 8px;
  }
`;

export default function ScrollHookSimplePageWithArguments() {
  const spacerRef = useRef(null);
  const [ parentElement, setParentElement ] = useState<Window>(null);
  const [ scrollElement, setScrollElement ] = useState<HTMLElement>(null);
  const [ setScrollProgress, scrollProgress ] = useScrollProgress(parentElement, scrollElement);

  useEffect(() => {
    setParentElement(window);
    setScrollElement(document.getElementById('__next'));
  }, []);

  return (
    <Wrapper>
      <div className="spacer">
        
      </div>
      <div className="logs">
        <p>progress: { scrollProgress * 100 }%</p>
      </div>
    </Wrapper>
  );
}