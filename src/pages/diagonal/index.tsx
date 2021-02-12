import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import Animation, { easeInOut } from '../../assets/js/Animation';

let cardLength = 6;

const Wrapper = styled.div`
  position: relative;
  transition: opacity .2s ease-in-out;

  .spacer {
    position: relative;
    height: ${ 100 * (cardLength + 1) }vh;
  }

  .card {
    position: fixed;
    top: 50%; left: 50%;
    margin: -150px;
    border-radius: 12px;
    width: 300px; height: 300px;
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
              background-image: url(${ process.env.NODE_ENV === 'production' ? '/next-scroll/' : '/' }overflow/${ i + 1 }.png);
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

    div {
      text-align: center;
    }
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
      color: #fff;
      background: rgba(0, 0, 0, .4);
      cursor: pointer;

      + li {
        margin-top: 2px;
      }
    }
  }
`;

export default function DiagonalPage() {
  const [ direction, setDirection ] = useState('');
  const [ progress, setProgress ] = useState(0);
  const [ lastProgress, setLastProgress ] = useState(0);
  const [ localProgress, setLocalProgress ] = useState(0);
  const [ scrollProgress, setScrollProgress ] = useState(null);
  const [ currentCardIndex, setCurrentCardIndex ] = useState(0);
  const [ contentsHeight, setContentsHeight ] = useState(0);
  const [ windowWidth, setWindowWidth ] = useState(0);
  const [ windowHeight, setWindowHeight ] = useState(0);
  const [ scrollY, setScrollY ] = useState(0);
  const [ animation, setAnimation ] = useState(new Animation({
    startValue: 0,
    targetValue: 0,
    duration: 1
  }));

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
    setLocalProgress(progress / (1 / cardLength) % 1);
    setCurrentCardIndex(0 | progress / (1 / cardLength));
  }, [progress]);

  useEffect(() => {
    if (typeof scrollProgress !== 'number') {
      return;
    }

    window.scrollTo(window.scrollX, (contentsHeight - windowHeight) * scrollProgress);
    setScrollProgress(null);
  }, [scrollProgress]);

  useEffect(() => {
    if (contentsHeight - windowHeight) {
      setProgress(scrollY / (contentsHeight - windowHeight));
    }
  }, [scrollY]);

  useEffect(() => {
    window.addEventListener('mousedown', cancelScroll, {
      passive: false
    });
    window.addEventListener('wheel', cancelScroll, {
      passive: false
    });
    window.addEventListener('touchstart', cancelScroll, {
      passive: false
    });

    return () => {
      animation.stop();
      window.removeEventListener('mousedown', cancelScroll);
      window.removeEventListener('wheel', cancelScroll);
      window.removeEventListener('touchstart', cancelScroll);
    }

    function cancelScroll() {
      animation.stop();
    }
  }, [animation]);

  function init(): void {
    window.addEventListener('resize', handleResize, {
      passive: true
    });

    document.addEventListener('scroll', handleScroll, {
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

  function handleResize(): void {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
    setContentsHeight(document.getElementById('app').clientHeight);
  }

  function handleScroll(): void {
    setScrollY(window.scrollY);
  }

  function handleClickBtn(targetProgress: number) {
    const startProgress = progress;
    const isReverse = Math.abs(targetProgress - startProgress) > .5;
    const diff = targetProgress - startProgress;

    setAnimation(
      new Animation({
        startValue: 0,
        targetValue: targetProgress,
        duration: 800,
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
    return Math.max(.0002, Math.min(val, .9999));
  }

  function getTranslate(index: number) {
    const distance = {
      x: 160,
      y: 320
    };

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
    ) rotate(${ -24 * index + 24 * (localProgress + cardIndex) }deg)`;
  }

  return (
    <Wrapper className={ !!direction ? '' : 'transparent' }>
      <Head>
        <title>diagonal</title>
        <meta name="description" content="diagonal" />
        <style>html {'{'} background: #EDEDED; {'}'}</style>
      </Head>
      <div className="spacer" />
      <ol className="cards"> {
        (new Array(cardLength).fill(null)).map((_, i) => {
          return (
            <li
              key={ i }
              onClick={ () => handleClickBtn(i / cardLength) }
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
      <div className="debug">
        <div>
          <p>{ (progress * 100).toFixed(2) }</p>
          <p>{ (localProgress * 100).toFixed(2) }</p>
          <p>{ currentCardIndex }</p>
          <p>{ direction }</p>
        </div>
      </div>
      <ol className="btns">
        {
          (new Array(cardLength + 1).fill(null)).map((_, i, arr) => {
            if (i === arr.length - 1) {
              return;
            }

            const progress = i / (arr.length - 1);

            return (
              <li
                key={ i }
                onClick={ () => handleClickBtn(progress) }
              >{ (progress * 100).toFixed(2) }</li>
            );
          })
        }
        <li onClick={ () => handleClickBtn(1) }>100</li>
      </ol>
    </Wrapper>
  );
}