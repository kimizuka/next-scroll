import Animation from '../../assets/js/Animation';
import styled, { createGlobalStyle, css } from 'styled-components';
import Head from 'next/head';
import { useEffect, useState } from 'react';

let length = 9;

const Wrapper = styled.div`
  position: relative;
  transition: opacity .2s ease-in-out;

  .list {
    position: relative;
    height: ${ 100 * length }vh;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      color: rgba(0, 0, 255, .04);
      font-size: 50vh;
      font-weight: bold;

      &:last-child {
        &:before {
          content: '0' !important;
        }
      }
    }

    ${(() => {
      let styles = '';

      for (let i = 0; i < length; ++i) {
        styles += `
          li:nth-child(${ i + 1 }) {
            height: ${ 100 / length }%;

            &:before {
              content: '${ i === length - 1 ? 0 : i }';
            }
          }
        `;
      }

      return css`${ styles }`;
    })()}
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

      for (let i = 0; i < length - 1; ++i) {
        styles += `
          &[data-index='${ i }'] {
            background-position: center ${ 100 / (length - 2) * i }%;
          }
        `;
      }

      return css`${ styles }`;
    })()}

    &[data-index='${ length - 1 }'] {
      background-position: center top;
    }
  }
`;

export default function CrawlPage() {
  const [ direction, setDirection ] = useState('');
  const [ progress, setProgress ] = useState(0);
  const [ scrollProgress, setScrollProgress ] = useState(0);
  const [ lastProgress, setLastProgress ] = useState(0);
  const [ contentsHeight, setContentsHeight ] = useState(0);
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
  }, [progress]);

  useEffect(() => {
    window.scrollTo(window.scrollX, (contentsHeight - windowHeight) * scrollProgress);
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

  function warp(): void {
    if (1 <= progress && direction === 'down') {
      window.scrollTo(window.scrollX, 1);
    } else if (progress <= 0 && direction === 'up') {
      window.scrollTo(window.scrollX, contentsHeight - windowHeight - 1);
    }
  }

  function handleResize(): void {
    setContentsHeight(document.getElementById('app').clientHeight);
    setWindowHeight(window.innerHeight);
  }

  function handleScroll(): void {
    setScrollY(window.scrollY);
  }

  function handleClickBtn(targetProgress: number): void {
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

  function normalize(val: number): number {
    return Math.max(.0002, Math.min(val, .9999));
  }

  return (
    <Wrapper className={ !!direction ? '' : 'transparent' }>
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
      <ol className="list"> {
        (new Array(length).fill(null)).map((_, i) => {
          return (
            <li key={ i } />
          );
        })
      } </ol>
      <div className="debug">
        <div>
          <p>{ (progress * 100).toFixed(2) }</p>
          <p>{ direction }</p>
        </div>
      </div>
      <ol className="btns">
        {
          (new Array(length ).fill(null)).map((_, i, arr) => {
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
        data-index={ 0 | (length - 1) * progress }
        className="crawl"
      />
    </Wrapper>
  );
}

export async function getStaticProps({ params }) {
  return {
    props: {}
  }
}

export async function getStaticPaths() {
  return {
    paths: [{
      params: { id: 'index' }
    }],
    fallback: false,
  }
}
