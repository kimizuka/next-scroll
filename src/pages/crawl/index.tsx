import Animation from '../../assets/js/Animation';
import styled, { css } from 'styled-components';
import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';

let animationLength = 8;

const Wrapper = styled.div`
  position: fixed;
  top: 0; bottom: 0;
  left: 0; right: 0;
  transition: opacity .2s ease-in-out;
  overflow: scroll;

  .spacer {
    position: relative;
    height: ${ 100 * (animationLength + 1) }vh;
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
      color: #fff;
      background: rgba(0, 0, 0, .4);
      cursor: pointer;

      + li {
        margin-top: 2px;
      }
    }
  }

  .crawl {
    position: fixed;
    top: 50%; left: 50%;
    margin: auto;
    max-width: 600px; max-height: 300px;
    width: 100%;
    background: url(${ process.env.NODE_ENV === 'production' ? '/next-scroll/' : '/' }crawl/img.png) center top no-repeat;
    background-size: cover;
    transform: translate(-50%, -50%);
    pointer-events: none;

    &:after {
      display: block;
      padding-top: 50%;
      content: '';
    }

    ${(() => {
      let styles = '';

      for (let i = 0; i < animationLength; ++i) {
        styles += `
          &[data-index='${ i }'] {
            background-position: center ${ 100 / (animationLength - 1) * i }%;
          }
        `;
      }

      return css`${ styles }`;
    })()}

    &[data-index='${ animationLength }'] {
      background-position: center top;
    }
  }
`;

export default function CrawlPage() {
  const [ direction, setDirection ] = useState('');
  const [ progress, setProgress ] = useState(0);
  const [ lastProgress, setLastProgress ] = useState(0);
  const [ scrollProgress, setScrollProgress ] = useState(null);
  const [ contentsHeight, setContentsHeight ] = useState(0);
  const [ windowHeight, setWindowHeight ] = useState(0);
  const [ scrollY, setScrollY ] = useState(0);
  const [ animation, setAnimation ] = useState(new Animation({
    startValue: 0,
    targetValue: 0,
    duration: 1
  }));
  const [ isScrolling, setIsScrolling ] = useState(false);
  const [ isScrollingTimer, setIsScrollingTimer ] = useState(setTimeout(() => {}, 0));
  const wrapperRef = useRef(null);
  const wrapperInnerRef = useRef(null);

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
      setProgress(scrollY / (contentsHeight - windowHeight));
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

  return (
    <Wrapper
      onScroll={ handleScroll }
      onWheel={ handleWheel }
      ref={ wrapperRef }
      className={ !!direction ? '' : 'transparent' }
    >
      <Head>
        <title>scrawl</title>
        <meta name="description" content="scrawl = scroll + crawl" />
        <meta property="og:title" content="scrawl" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kimizuka.github.io/next-scroll/crawl/" />
        <meta property="og:image" content="https://kimizuka.github.io/next-scroll/crawl/ogp.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="600" />
        <meta property="og:site_name" content="scrawl" />
        <meta property="og:description" content="scrawl = scroll + crawl" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ki_230" />
        <meta name="twitter:creator" content="@ki_230" />
        <meta name="twitter:title" content="scrawl" />
        <meta name="twitter:description" content="scrawl = scroll + crawl" />
        <meta name="twitter:image:src" content="https://kimizuka.github.io/next-scroll/crawl/ogp.png" />
        <style>html {'{'} background: #0277BD; {'}'}</style>
      </Head>
      <div ref={ wrapperInnerRef }>
        <div className="spacer" />
        <div className="debug">
          <div>
            <p>{ (progress * 100).toFixed(2) }</p>
            <p>{ direction }</p>
          </div>
        </div>
        <ol className="btns">
          {
            (new Array(animationLength + 1).fill(null)).map((_, i, arr) => {
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
        <div
          data-index={ Math.round(animationLength * progress) }
          className="crawl"
        />
      </div>
    </Wrapper>
  );
}