import styled, { keyframes } from 'styled-components';
import { mainPlanet, subPlanet1, subPlanet2 } from '../../../assets/Loding';

const sun = 322;
const earthOrbit = 600;
const moonOrbit = 600;
const earthPlanet = 85;
const moonPlanet = 40;

export const orbitAnimation = keyframes`
  0% {
    transform: rotateZ(0deg) rotateX(360deg);
  }

  100% {
    transform: rotateZ(-360deg) rotateX(0deg);
  }
`;

export const moonOrbitAnimation = keyframes`
  0% {
    transform: rotateZ(0deg) rotateX(0deg);
  }

  100% {
    transform: rotateZ(360deg) rotateX(360deg);
  }
`;

export const planetAnimation = keyframes`
  0% {
    transform: rotateX(-90deg) rotateY(360deg) rotateZ(0deg);
  }

  100% {
    transform: rotateX(-90deg) rotateY(0deg) rotateZ(0deg);
  }
`;

export const LodingBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transform: rotateX(75deg);
`;

export const orbit = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  transform-style: preserve-3d;
  border: 1px solid black;
  border-radius: 50%;
`;

export const EearthOrbit = styled(orbit)`
  width: ${earthOrbit}px;
  height: ${earthOrbit}px;
  margin-top: -${earthOrbit / 2}px;
  margin-left: -${earthOrbit / 2}px;
  animation-duration: 10s;
  transform: rotateX(75deg);
  animation-name: ${orbitAnimation};
`;

export const MoonOrbit = styled(orbit)`
  width: ${moonOrbit}px;
  height: ${moonOrbit}px;
  margin-top: -${moonOrbit / 2}px;
  margin-left: -${moonOrbit / 2}px;
  animation-duration: 5s;
  transform: rotateX(45deg) rotateY(45deg);
  animation-name: ${moonOrbitAnimation};
`;

export const planet = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  animation: ${planetAnimation} infinite;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  transform-style: preserve-3d;
`;

export const Sun = styled(planet)`
  width: ${sun}px;
  height: ${sun}px;
  margin-top: -${sun / 2}px;
  margin-left: -${sun / 2}px;
  background-image: url(${mainPlanet});
  transform: rotateX(90deg);
`;

export const Moon = styled(planet)`
  left: 0;
  width: ${moonPlanet}px;
  height: ${moonPlanet}px;
  background-image: url(${subPlanet2});
  animation-duration: 1s;
  transform-style: preserve-3d;
  animation-timing-function: linear;
`;

export const Earth = styled(planet)`
  left: 0px;
  width: ${earthPlanet}px;
  height: ${earthPlanet}px;
  background-image: url(${subPlanet1});
  animation-duration: 1s;
  animation-timing-function: linear;
  transform-style: preserve-3d;
`;
