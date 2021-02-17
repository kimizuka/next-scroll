import * as THREE from 'three';
import { GLTFLoader } from '../../../node_modules/three/examples/jsm/loaders/GLTFLoader';
import Animation from '../../assets/js/Animation';
import styled, { createGlobalStyle, css } from 'styled-components';
import Head from 'next/head';
import Loading from '../../components/atoms/Loading';
import { useEffect, useRef, useState } from 'react';

let animationLength = 10;

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

  canvas {
    display: block;
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    pointer-events: none;
  }
`;

export default function DancePage() {
  const [ isShowLoading, setIsShowLoading ] = useState(false);
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
  const [ aspect, setAspect ] = useState(0);
  const [ renderer, setRenderer ] = useState(null);
  const [ camera, setCamera ] = useState(null);
  const [ action, setAction ] = useState(null);
  const [ isScrolling, setIsScrolling ] = useState(false);
  const [ isScrollingTimer, setIsScrollingTimer ] = useState(setTimeout(() => {}, 0));
  const wrapperRef = useRef(null);
  const wrapperInnerRef = useRef(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

    if (action) {
      action.time = 2.4 * progress;
    }
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

  useEffect(() => {
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true
    });
    const scene = new THREE.Scene();
    const width = window.innerWidth;
    const height = window.innerHeight;

    renderer.setPixelRatio(1);
    renderer.setSize(width, height);
    renderer.outputEncoding = THREE.GammaEncoding;

    setRenderer(renderer);

    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 100);

    camera.position.set(0, 0, 6);

    setCamera(camera);

    const light = new THREE.DirectionalLight(0xFFFFFF);

    light.position.set(1, 1, 1);
    scene.add(light);

    const loader = new GLTFLoader();
    const url = './model.glb';
    const clock = new THREE.Clock();

    let model;
    let mixer;

    loader.load(
      url,
      (gltf) => {
        model = gltf.scene;
        const animations = gltf.animations;

        if (animations && animations.length) {
          mixer = new THREE.AnimationMixer(model);

          for (let i = 0; i < animations.length; i++) {
            const animation = animations[i];

            setAction(mixer.clipAction(animation));
          }
        }

        model.scale.set(1.8, 1.8, 1.8);
        model.position.set(0, -2, 0);
        scene.add(gltf.scene);

        renderer.setAnimationLoop(tick);

        function tick() {
          if (mixer) {
            setIsShowLoading(false);
            mixer.update(clock.getDelta());
          }

          renderer.render(scene, camera);
        }
      },
      (err) => {
        console.error(err);
      }
    );
  }, [canvasRef]);

  useEffect(() => {
    if (action) {
      action.play();
      action.paused = true;
    }
  }, [action]);

  useEffect(() => {
    if (renderer) {
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(windowHeight * aspect, windowHeight);
    }

    if (camera) {
      camera.aspect = aspect;
      camera.updateProjectionMatrix();
    }
  }, [aspect])

  function init() {
    setIsShowLoading(true);

    wrapperRef.current.addEventListener('resize', handleResize, {
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
    setAspect(window.innerWidth / window.innerHeight);
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
        <title>scroll + dance</title>
        <meta name="description" content="scroll + dance" />
        <meta property="og:title" content="scroll + dance" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kimizuka.github.io/next-scroll/dance/" />
        <meta property="og:image" content="https://kimizuka.github.io/next-scroll/dance/ogp.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="600" />
        <meta property="og:site_name" content="scrawl" />
        <meta property="og:description" content="scroll + dance" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ki_230" />
        <meta name="twitter:creator" content="@ki_230" />
        <meta name="twitter:title" content="scroll + dance" />
        <meta name="twitter:description" content="scroll + dance" />
        <meta name="twitter:image:src" content="https://kimizuka.github.io/next-scroll/dance/ogp.png" />
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
      </div>
      <canvas ref={ canvasRef } />
      <Loading isShow={ isShowLoading }  />
    </Wrapper>
  );
}