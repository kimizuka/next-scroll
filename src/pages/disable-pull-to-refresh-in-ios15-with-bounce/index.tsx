import styled from 'styled-components';
import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import useScrollProgress from '../../hooks/useScrollProgress';

const Wrapper = styled.div`
  &[data-is-disable-pull-to-refresh='true'] {
    position: absolute;
    top: 0; bottom: 0;
    left: 0; right: 0;
    overflow-y: auto;
  }

  .scroll {
    width: 100%; height: 101%;
    overflow-y: auto;
  }

  .content {
    width: 100%; height: 1000vh;
    background: linear-gradient(#dead45, #e38ab8);
  }

  label {
    position: fixed;
    top: 8px; left: 8px;
  }
`;

export default function DisablePullToRefreshInIos15WithBounce() {
  const [ count, setCount ] = useState(0);
  const [ isDisablePullToRefresh, setIsDisablePullToRefresh ] = useState(false);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  const scrollInnerRef = useRef<HTMLDivElement>(null);
  const { setScrollProgress, scrollProgress } = useScrollProgress(
    scrollWrapperRef.current,
    scrollInnerRef.current
  );

  useEffect(() => {
    if (count < 3) {
      setScrollProgress(.01);
      setCount(count + 1);
    }
  }, [setScrollProgress]);

  useEffect(() => {
    setScrollProgress(.01);
  }, [scrollProgress]);

  useEffect(() => {
    if (isDisablePullToRefresh) {
      setScrollProgress(.01);
    }
  }, [isDisablePullToRefresh])

  return (
    <Wrapper
      data-is-disable-pull-to-refresh={ String(isDisablePullToRefresh) }
      ref={ scrollWrapperRef }
    >
      <div className="scroll">
        <div
          ref={ scrollInnerRef }
          className="content"
        />
      </div>
      <label>
        <input
          type="checkbox"
          checked={ isDisablePullToRefresh }
          onChange={ () => setIsDisablePullToRefresh(!isDisablePullToRefresh) }
        />
        disable pull to refresh
      </label>
    </Wrapper>
  );
}