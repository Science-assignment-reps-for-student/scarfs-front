import styled, { keyframes } from 'styled-components';
import { BubbleImage, BubbleImage2, BubbleImage3 } from '../../../../assets/Board/Default';

interface BoardWrapperProps {
  isDetailBoard: boolean;
}

export const BoardWrapper = styled.div<BoardWrapperProps>`
  margin-top: ${({ isDetailBoard }) => (isDetailBoard ? '-120' : '0')}px;
  background-color: #ffffff;
  width: 100%;
  min-width: 1340px;
  position: relative;
  // transition: margin-top 1s;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  z-index: 2;
  margin: 0 auto;
  width: 100%;
  max-width: 1340px;
  box-sizing: border-box;
  padding: 30px;
  position: relative;
`;

export const RotatedSubject = styled.span`
  transform: rotate(90deg) translate(108px, 67px);
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
  user-select: none;
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
    transform: translateX(calc(-100vw - 320px)); 
  }
`;

export const MovingBubble = styled.img.attrs({
  src: BubbleImage,
})`
  user-select: none;
  position: absolute;
  top: 0;
  right: -320px;
  width: 320px;
  height: 320px;
  object-fit: contain;
  will-change: transform, opacity;
  animation: ${left} 26s infinite;
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

interface RotateBoxProps {
  cycleSecond: number;
}

export const RotateBox = styled.div<RotateBoxProps>`
  user-select: none;
  position: fixed;
  width: 800px;
  height: 800px;
  left: 3%;
  bottom: 0;
  will-change: transform;
  animation: ${rotate} ${({ cycleSecond }) => cycleSecond}s infinite linear;
`;

export const MovingBubble2 = styled.img.attrs({
  src: BubbleImage2,
})<RotateBoxProps>`
  user-select: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 85px;
  height: 85px;
  object-fit: contain;
  will-change: transform, opacity;
  animation: ${rotate} ${({ cycleSecond }) => cycleSecond}s infinite linear;
`;

export const MovingBubble3 = styled.img.attrs({
  src: BubbleImage3,
})<RotateBoxProps>`
  user-select: none;
  position: absolute;
  bottom: 0;
  left: 320px;
  width: 40px;
  height: 40px;
  object-fit: contain;
  will-change: transform, opacity;
  animation: ${rotate} ${({ cycleSecond }) => cycleSecond}s infinite linear;
`;

export const MovingBubble4 = styled.img.attrs({
  src: BubbleImage,
})<RotateBoxProps>`
  user-select: none;
  position: absolute;
  top: 71px;
  right: 0;
  width: 16px;
  height: 16px;
  object-fit: contain;
  will-change: transform, opacity;
  animation: ${rotate} ${({ cycleSecond }) => cycleSecond}s infinite linear;
`;
