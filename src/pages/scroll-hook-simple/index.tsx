import styled from 'styled-components';
import useResize from './useResize';
import useScroll from './useScroll';

const Wrapper = styled.div`
  width: 1000vw; height: 1000vh;

  div {
    position: fixed;
    top: 0; left: 0;
    padding: 8px;
  }
`;

export default function ScrollHookSimplePage() {
  const [ windowWidth, windowHeight ] = useResize();
  const [ scrollLeft, scrollTop ] = useScroll();

  return (
    <Wrapper>
      <div>
        <p>width: { windowWidth }px</p>
        <p>height: { windowHeight }px</p>
        <p>scrollLeft: { scrollLeft }px</p>
        <p>scrollTop: { scrollTop }px</p>
      </div>
    </Wrapper>
  );
}