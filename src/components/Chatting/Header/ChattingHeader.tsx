import React, { FC, useCallback } from 'react';
import * as S from '../style';

interface Props {
  selectedPerson: string;
}

const ChattingHeader: FC<Props> = ({ selectedPerson }) => {
  const isSelected = useCallback((person: string) => {
    return selectedPerson === person ? true : false;
  }, []);
  return (
    <S.ChattingHeader>
      <S.ChattingDeleteButton />
      <S.ChattingHeaderContent isSelected={isSelected('박지연 선생님')}>
        박지연 선생님
      </S.ChattingHeaderContent>
      <S.ChattingHeaderContent isSelected={isSelected('스카프 관리자')}>
        스카프 관리자
      </S.ChattingHeaderContent>
    </S.ChattingHeader>
  );
};

export default ChattingHeader;
