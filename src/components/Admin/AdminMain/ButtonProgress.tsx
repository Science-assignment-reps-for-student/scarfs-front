import React, { FC, ReactElement } from 'react';

import * as S from './style';

interface Props {
  progress: number;
}

const ButtonProgress: FC<Props> = ({ progress }): ReactElement => {
  return (
    <S.ButtonProgressWrap width={progress}>
      <S.ButtonProgress>
        <S.ButtonProgressBar />
      </S.ButtonProgress>
    </S.ButtonProgressWrap>
  );
};

export default ButtonProgress;
