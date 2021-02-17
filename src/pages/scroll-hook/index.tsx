import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import useScroll from './useScroll';

let colors = [
  '#E0F2F1',
  '#B2DFDB',
  '#80CBC4',
  '#4DB6AC',
  '#26A69A',
  '#009688',
  '#00897B',
  '#00796B',
  '#00695C',
  '#004D40'
];

const Wrapper = styled.div`
  position: relative;
  transition: opacity .2s ease-in-out;

  .list {
    position: relative;
    height: ${ 100 * colors.length }vh;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 64px;
      font-weight: bold;
    }

    ${(() => {
      let styles = '';

      for (let i = 0; i < colors.length; ++i) {
        styles += `
          li:nth-child(${ i + 1 }) {
            height: ${ 100 / colors.length }%;
            background: ${ colors[i] };

            &:before {
              color: ${ i < 7 || 9 < i ? '#000' : '#fff' };
              content: '${ i === 10 ? 0 : i }';
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
      cursor: pointer;
      background: rgba(0, 0, 0, .4);

      + li {
        margin-top: 2px;
      }
    }
  }
`;

export default function ScrollHookPage() {
  const [ progress, setProgressWithAnimation ] = useScroll();

  function handleClickBtn(targetProgress: number) {
    setProgressWithAnimation(targetProgress);
  }

  return (
    <Wrapper>
      <ol className="list"> {
        colors.map((_, i) => {
          return (
            <li key={ i } />
          );
        })
      } </ol>
      <div className="debug">
        <div>
          <p>{ (progress * 100).toFixed(2) }</p>
        </div>
      </div>
      <ol className="btns">
        {
          colors.map((_, i, arr) => {
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