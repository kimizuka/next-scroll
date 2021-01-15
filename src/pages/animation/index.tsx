import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Animation from '../../assets/js/Animation';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0; bottom: 0;
  left: 0; right: 0;
  transition: opacity .2s ease-in-out;
`;

export default function AnimationPage() {
  const [ isInit, setIsInit ] = useState(false);
  const [ animation, setAnimation ] = useState(new Animation({
    startValue: 0,
    targetValue: 0,
    duration: 1
  }));

  useEffect(() => {
    if (isInit) {
      return;
    }

    setIsInit(true);

  }, [isInit]);

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
    <Wrapper className={ isInit ? '' : 'transparent' }>
      <button onClick={ handleClickBtn }>start</button>
    </Wrapper>
  );
}
