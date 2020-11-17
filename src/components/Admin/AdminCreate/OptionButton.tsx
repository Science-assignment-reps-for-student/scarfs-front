import React, { FC, ReactElement } from 'react';

import * as S from './style';

import { save, trash } from '../../../assets/Admin';

interface Props {
  imgType: string;
  onClick: any;
}

enum Img {
  saveImg = save,
  trashImg = trash,
}

const OptionButton: FC<Props> = ({ imgType, children, onClick }): ReactElement => {
  return (
    <S.Button onClick={onClick}>
      <S.ButtonImg src={Img[imgType]} alt={imgType} title={imgType} />
      <S.ButtonText>{children}</S.ButtonText>
    </S.Button>
  );
};

export default OptionButton;
