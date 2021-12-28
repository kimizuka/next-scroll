import styled from 'styled-components';
import { useEffect, useState } from 'react';
import useScrollProgress from './useScrollProgress';

const Wrapper = styled.div`
  height: 1000vh;

  .logs {
    position: fixed;
    top: 0; left: 0;
    padding: 8px;
  }

  button {
    margin-top: 8px;
  }
`;

export default function ScrollHookSimplePageWithArguments() {
  const [ parentElement, setParentElement ] = useState<Window>(null);
  const [ scrollElement, setScrollElement ] = useState<HTMLElement>(null);
  const [ setScrollProgress, scrollProgress ] = useScrollProgress(parentElement, scrollElement);

  useEffect(() => {
    setParentElement(window);
    setScrollElement(document.getElementById('__next'));
  }, []);

  return (
    <Wrapper>
      <div className="logs">
        <p>progress: { scrollProgress * 100 }%</p>
        <button onClick={ () => setScrollProgress(.5) }>50%</button>
      </div>
    </Wrapper>
  );
}