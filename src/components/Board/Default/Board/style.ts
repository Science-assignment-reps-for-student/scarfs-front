import styled, { keyframes } from 'styled-components';
import { BubbleImage, BubbleImage2, BubbleImage3 } from '../../../../assets/Board/Default';

export const BoardWrapper = styled.div`
  margin-top: 40px;
  background-color: #ffffff;
  width: 100%;
  min-width: 1240px;
  position: relative;
`;

export const Main = styled.main`
  z-index: 2;
  margin: 0 auto;
  width: 100%;
  max-width: 1240px;
  box-sizing: border-box;
  padding: 30px;
  position: relative;
`;

export const RotatedSubject = styled.span`
  transform: rotate(90deg) translate(63px, 67px);
  position: absolute;
  top: 0;
  left: 0;
  font-size: 15px;
  font-weight: bold;
  color: #505bff;
  letter-spacing: 5px;
`;

const wobble = keyframes`
  
  33% {
    transform: translateY(-50px);
  } 66% {
    transform: translateY(50px);
  }
`;

export const WobbleBox = styled.div`
  z-index: 0;
  position: fixed;
  bottom: 400px;
  right: 0;
  animation: ${wobble} 10s 275ms infinite linear;
`;

const left = keyframes`
  0% { 
    opacity: 0; 
  } 10%, 90% { 
    opacity: 1; 
  } 100% { 
    opacity: 0;
    transform: translateX(-100vw); 
  }
`;

export const MovingBubble = styled.img.attrs({
  src: BubbleImage,
})`
  position: absolute;
  top: 0;
  right: 0;
  width: 320px;
  height: 320px;
  object-fit: contain;
  will-change: transform, opacity;
  animation: ${left} 13s infinite;
`;

const rotate = keyframes`
  0% {
  } 25% {
    transform: rotate(90deg);
  } 50% {
    transform: rotate(180deg);
  } 75% {
      transform: rotate(270deg);
  } 100% {
    transform: rotate(360deg);
  }
`;

export const RotateBox = styled.div`
  position: fixed;
  width: 300px;
  height: 300px;
  left: 3%;
  bottom: 10%;
  will-change: transform;
  animation: ${rotate} 8s infinite linear;
`;

export const MovingBubble2 = styled.img.attrs({
  src: BubbleImage2,
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 85px;
  height: 85px;
  object-fit: contain;
  will-change: transform, opacity;
  animation: ${rotate} 6s infinite linear;
`;

export const MovingBubble3 = styled.img.attrs({
  src: BubbleImage3,
})`
  position: absolute;
  top: 93px;
  left: 49px;
  width: 40px;
  height: 40px;
  object-fit: contain;
  will-change: transform, opacity;
  animation: ${rotate} 3s infinite linear;
`;

export const MovingBubble4 = styled.img.attrs({
  src: BubbleImage,
})`
  position: absolute;
  top: 71px;
  left: 83px;
  width: 16px;
  height: 16px;
  object-fit: contain;
  will-change: transform, opacity;
  animation: ${rotate} 1s infinite linear;
`;
