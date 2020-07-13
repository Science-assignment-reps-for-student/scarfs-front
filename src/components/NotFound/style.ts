import styled from 'styled-components';
import ScarfsBlack from '../../assets/NotFound/SCARFS_black.png';

const TEXT_COLOR = '#1D73FF';

export const NotFoundWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Main = styled.main`
  text-align: center;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Title = styled.span`
  font-size: 80px;
  font-weight: 300;
  color: ${TEXT_COLOR};
`;

export const Explain = styled.p`
  font-size: 25px;
  font-weight: 100;
  margin-bottom: 35px;
`;

export const GoBackButton = styled.span`
  color: ${TEXT_COLOR};
  font-weight: bold;
  cursor: pointer;
`;

export const Logo = styled.img.attrs({
  src: ScarfsBlack,
})`
  width: 90px;
  height: 30px;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
`;
