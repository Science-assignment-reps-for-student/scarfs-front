import React, { FC } from 'react';

import * as S from './style';
import SuccessBox from './SuccessBox';
import FailedBox from './FailedBox';

interface Props {
  student_number: string;
  student_name: string;
  finish: boolean;
  goPeerEvaluation: () => void;
}

const Peers: FC<Props> = ({ finish, goPeerEvaluation, student_name, student_number }) => {
  return (
    <React.Fragment>
      <S.StudentBox>
        <S.StudentInfoBox>
          <S.OrangeText>{student_number}</S.OrangeText>
          <S.OrangeText>{student_name}</S.OrangeText>
        </S.StudentInfoBox>
        {finish ? (
          <SuccessBox goCallback={goPeerEvaluation} />
        ) : (
          <FailedBox goCallback={goPeerEvaluation} />
        )}
      </S.StudentBox>
    </React.Fragment>
  );
};

export default Peers;
