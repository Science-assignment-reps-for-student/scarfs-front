import React, { FC, ReactElement } from 'react';
import { save, trash } from '../../assets/Admin';
import * as S from './style';

interface Props {
  imgType: string;
  text: string;
  onClick: any;
}

enum Img {
  saveImg = save,
  trashImg = trash,
}

const OptionButton: FC<Props> = ({ imgType, text, onClick }): ReactElement => {
  return (
    <S.Button onClick={onClick}>
      <S.ButtonImg src={Img[imgType]} alt={imgType} title={imgType} />
      <S.ButtonText>{text}</S.ButtonText>
    </S.Button>
  );
};

export default OptionButton;
