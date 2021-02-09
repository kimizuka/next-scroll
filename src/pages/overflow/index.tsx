import { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import Animation, { easeInOut } from '../../assets/js/Animation';

let cardLength = 6;

const Wrapper = styled.div`
  position: fixed;
  top: 0; bottom: 0;
  left: 0; right: 0;
  transition: opacity .2s ease-in-out;
  overflow: scroll;

  .list {
    position: relative;
    height: ${ 100 * (cardLength + 1) }vh;
  }

  .cards {
    &[data-is-scrolling='true'] {
      pointer-events: none;
    }
  }

  .card {
    position: fixed;
    top: 50%; left: 50%;
    margin: -150px;
    border-radius: 36px;
    width: 312px; height: 312px;
    background: #fff;
    overflow: hidden;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
    transform: translate(0, 0);
    cursor: pointer;

    ${(() => {
      let styles = '';

      for (let i = 0; i < cardLength + 1; ++i) {
        styles += `
          &:nth-child(${ i + 1 }) {
            .cover {
              background-image: url(/overflow/${ i + 1 }.png);
            }
          }
        `;
      }

      return css`${ styles }`;
    })()}

    .cover {
      width: 100%;
      background: center no-repeat;
      background-size: cover;
      pointer-events: none;

      &:before {
        display: block;
        width: 100%; padding-top: 100%;
        content: '';
        transition: padding-top .2s ease-in-out;
      }
    }
  }

  .debug {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0; right: 0;
    width: 80px; height: 80px;
    color: #fff;
    font-size: 10px;
    background: rgba(0, 0, 0, .4);
  }

  .btns {
    position: fixed;
    top: 0; left: 0;
    font-size: 10px;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 44px; height: 44px;
      cursor: pointer;
      background: rgba(0, 0, 0, .4);

      + li {
        margin-top: 2px;
      }
    }
  }

  .checkboxes {
    position: fixed;
    margin: 8px;
    bottom: 0;
    font-size: 10px;

    &[data-is-right-hand='true'] {
      right: 0;
    }

    &[data-is-right-hand='false'] {
      left: 0;
    }

    label {
      display: block;
    }

    .checkbox {
      margin: 8px;
    }
  }
`;

export default function ScrollWrapper() {
  const [ direction, setDirection ] = useState('');
  const [ progress, setProgress ] = useState(0);
  const [ lastProgress, setLastProgress ] = useState(0);
  const [ localProgress, setLocalProgress ] = useState(0);
  const [ scrollProgress, setScrollProgress ] = useState(null);
  const [ currentCardIndex, setCurrentCardIndex ] = useState(0);
  const [ contentsHeight, setContentsHeight ] = useState(0);
  const [ windowHeight, setWindowHeight ] = useState(0);
  const [ scrollY, setScrollY ] = useState(0);
  const [ animation, setAnimation ] = useState(new Animation({
    startValue: 0,
    targetValue: 0,
    duration: 1
  }));
  const [ isScrolling, setIsScrolling ] = useState(false);
  const [ isRightHand, setIsRightHand ] = useState(true);
  const [ isEasing, setIsEasing ] = useState(false);
  const [ isScrollingTimer, setIsScrollingTimer ] = useState(setTimeout(() => {}, 0));
  const wrapperRef = useRef(null);
  const wrapperInnerRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    if (!direction) {
      init();

      return;
    }

    warp();
  }, [direction]);

  useEffect(() => {
    const diff = lastProgress - progress;

    if (diff < 0) {
      if (Math.abs(diff) > .99) {
        setDirection('up');
      } else {
        setDirection('down');
      }
    } else {
      if (Math.abs(diff) > .99) {
        setDirection('down');
      } else {
        setDirection('up');
      }
    }

    warp();
    setLastProgress(progress);

    if (isEasing) {
      setLocalProgress(
        easeInOut(progress / (1 / cardLength) % 1)
      );
    } else {
      setLocalProgress(progress / (1 / cardLength) % 1);
    }
    setCurrentCardIndex(0 | progress / (1 / cardLength));
    setIsScrolling(true);
    clearTimeout(isScrollingTimer);
    setIsScrollingTimer(setTimeout(() => {
      setIsScrolling(false);
    }, 40));
  }, [progress]);

  useEffect(() => {
    if (typeof scrollProgress !== 'number') {
      return;
    }

    wrapperRef.current.scrollTo(window.scrollX, (contentsHeight - windowHeight) * scrollProgress);
    setScrollProgress(null);
  }, [scrollProgress]);

  useEffect(() => {
    if (contentsHeight - windowHeight) {
      setProgress(easeInOut(scrollY / (contentsHeight - windowHeight)));
    }
  }, [scrollY]);

  useEffect(() => {
    wrapperRef.current.addEventListener('mousedown', cancelScroll, {
      passive: false
    });
    wrapperRef.current.addEventListener('wheel', cancelScroll, {
      passive: false
    });
    wrapperRef.current.addEventListener('touchstart', cancelScroll, {
      passive: false
    });

    return () => {
      animation.stop();
      wrapperRef.current.removeEventListener('mousedown', cancelScroll);
      wrapperRef.current.removeEventListener('wheel', cancelScroll);
      wrapperRef.current.removeEventListener('touchstart', cancelScroll);
    }

    function cancelScroll() {
      animation.stop();
    }
  }, [animation]);

  function init() {
    window.addEventListener('resize', handleResize, {
      passive: true
    });

    handleResize();
    setScrollProgress(normalize(0));
  }

  function warp() {
    if (1 <= progress && direction === 'down') {
      setScrollProgress(normalize(0));
    } else if (progress <= 0 && direction === 'up') {
      setScrollProgress(normalize(1));
    }
  }

  function handleResize() {
    setWindowHeight(window.innerHeight);
    setContentsHeight(wrapperInnerRef.current.clientHeight);
  }

  function handleScroll() {
    setScrollY(wrapperRef.current.scrollTop);
  }

  function handleWheel() {
    setIsScrolling(true);
  }

  function handleClickBtn(targetProgress: number) {
    const startProgress = progress;
    const isReverse = Math.abs(targetProgress - startProgress) > .5;
    const diff = targetProgress - startProgress;

    setAnimation(
      new Animation({
        startValue: 0,
        targetValue: targetProgress,
        duration: 400,
        easing: 'easeInOut',
        step: isReverse ? (val: number) => {
          const direction = diff < 0 ? 1 : -1;

          val = startProgress + direction * ((1 - Math.abs(diff)) * val);

          if (val < 0) {
            val = 1 + val;
          } else if (1 < val) {
            val = val - 1;
          }

          setScrollProgress(normalize(val));
        } : (val: number) => {
          val = startProgress + diff * val;

          setScrollProgress(normalize(val));
        }
      })
    );
  }

  function normalize(val: number) {
    return Math.max(.0004, Math.min(val, .9999));
  }

  function getTranslate(index: number) {
    const distance = isRightHand ? {
      x: 160,
      y: 320
    } : {
      x: -160,
      y: 320
    };
    const direction = isRightHand ? 1 : -1;

    let cardIndex = currentCardIndex;

    for (let i = 0; i < cardLength; ++i) {
      if (index === i) {
        if (i + cardLength / 2 < cardIndex) {
          cardIndex -= cardLength;
        } else if (cardIndex < i - cardLength / 2) {
          cardIndex += cardLength;
        }
      }
    }

    return `translate(
      ${ distance.x * (localProgress + cardIndex) - distance.x * index }px,
      ${ distance.y * index - distance.y * (localProgress + cardIndex) }px
    ) rotate(${ -24 * direction * index + 24 * direction * (localProgress + cardIndex) }deg)`;
  }

  return (
    <Wrapper
      onScroll={ handleScroll }
      onWheel={ handleWheel }
      ref={ wrapperRef }
      className={ !!direction ? '' : 'transparent' }
    >
      <div ref={ wrapperInnerRef }>
        <ol className="list"> {
          (new Array(cardLength + 1).fill(null)).map((_, i) => {
            return (
              <li key={ i } />
            );
          })
        } </ol>
        <ol
          ref={ cardsRef }
          data-is-scrolling={ isScrolling }
          className="cards"
        > {
          (new Array(cardLength).fill(null)).map((_, i) => {
            return (
              <li
                onClick={ () => handleClickBtn(i / cardLength) }
                key={ i }
                className="card"
                style={{
                  transform: getTranslate(i)
                }}
              >
                <div className="cover" />
              </li>
            );
          })
        } </ol>
      </div>
      <div
        style={ { display: 'none' } }
        className="debug"
      >
        <div>
          <p>{ scrollY }</p>
          <p>{ (progress * 100).toFixed(2) }</p>
          <p>{ (localProgress * 100).toFixed(2) }</p>
          <p>{ currentCardIndex }</p>
          <p>{ direction }</p>
          <p>{ String(isScrolling) }</p>
        </div>
      </div>
      <div
        data-is-right-hand={ String(isRightHand) }
        className="checkboxes"
      >
        <label>
          <input
            onChange={ () => setIsRightHand(!isRightHand) }
            checked={ isRightHand }
            type="checkbox"
          />
          <span>isRightHand</span>
        </label>
        <label>
          <input
            onChange={ () => setIsEasing(!isEasing) }
            checked={ isEasing }
            type="checkbox"
          />
          <span>Easing</span>
        </label>
      </div>
    </Wrapper>
  );
}