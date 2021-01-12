import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Animation from '../assets/js/Animation';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0; bottom: 0;
  left: 0; right: 0;
`;

export default function AnimationPage() {
  const [ animation, setAnimation ] = useState(new Animation({
    startValue: 0,
    targetValue: 0,
    duration: 1
  }));

  useEffect(() => {
    return () => {
      animation.stop();
    }
  }, [animation]);

  function handleClickBtn() {
    setAnimation(new Animation({
      startValue: 0,
      targetValue: 1,
      duration: 1000,
      step: (progress) => {
        console.log(progress);
      },
      complete: (progress) => {
        console.log(progress);
      }
    }));
  }

  return (
    <Wrapper>
      <button onClick={ handleClickBtn }>start</button>
    </Wrapper>
  );
}
