import React, { FC } from 'react';

import * as S from './style';

interface Props {
  goCallback: () => void;
}

const PeerEvaluationModal: FC<Props> = ({ goCallback }) => {
  return (
    <S.EvaluationStatusBox>
      <S.BlueText>완료</S.BlueText>
      <S.ViewButton onClick={goCallback} />
    </S.EvaluationStatusBox>
  );
};

export default PeerEvaluationModal;
