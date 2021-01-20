import styled, { css, keyframes } from 'styled-components';

const Load = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Attack = keyframes`
  0% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1.4, 1.4);
  }
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0; bottom: 0;
  left: 0; right: 0;
  background: rgba(255, 255, 255, .2);
  pointer-events: auto;
  transition: opacity .2s ease-in-out;

  &[data-is-show='false'] {
    opacity: 0;
    pointer-events: none;
  }

  .circle {
    position: absolute;
    top: 50%; left: 50%;
    margin: -50px;
    border-radius: 50%;
    width: 100px; height: 100px;
    animation: ${ Load } 1.2s ease infinite normal;

    .dot {
      position: absolute;
      margin: -5px;
      top: 50%; left: 50%;
      border-radius: 50%;
      width: 10px; height: 10px;
      background: rgba(0, 0, 0, .4);
      animation: ${ Attack } .6s ease infinite alternate;

      &:nth-child(1) {
        margin-top: calc(-30px - 5px);
      }

      &:nth-child(2) {
        margin-top: calc(-9.27px - 5px);
        margin-left: calc(28.53px - 5px);
      }

      &:nth-child(3) {
        margin-top: calc(-9.27px - 5px);
        margin-left: calc(-28.53px - 5px);
      }

      &:nth-child(4) {
        margin-top: calc(24.27px - 5px);
        margin-left: calc(17.63px - 5px);
      }

      &:nth-child(5) {
        margin-top: calc(24.27px - 5px);
        margin-left: calc(-17.63px - 5px);
      }
    }
  }
`;

export default function Loading({ isShow }: {
  isShow: boolean;
}) {
  return (
    <Wrapper data-is-show={ String(isShow) }>
      <ul className="circle">
        <li className="dot" />
        <li className="dot" />
        <li className="dot" />
        <li className="dot" />
        <li className="dot" />
      </ul>
    </Wrapper>
  );
}