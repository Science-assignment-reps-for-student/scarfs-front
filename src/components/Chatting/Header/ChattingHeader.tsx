import React, { FC, useCallback } from 'react';
import * as S from '../style';
interface Props {
  selectedPerson: string;
  headerChange: (value: string) => void;
}

const ChattingHeader: FC<Props> = ({ selectedPerson, headerChange }) => {
  const isSelected = useCallback(
    (person: string) => {
      return selectedPerson === person ? true : false;
    },
    [selectedPerson],
  );
  const headerChangeHandler = useCallback((payload: string) => {
    headerChange(payload);
  }, []);
  return (
    <S.ChattingHeader>
      <S.ChattingHeaderContent
        isSelected={isSelected('박지연 선생님')}
        onClick={() => headerChangeHandler('박지연 선생님')}
      >
        박지연 선생님
      </S.ChattingHeaderContent>
      <S.ChattingHeaderContent
        isSelected={isSelected('스카프 관리자')}
        onClick={() => headerChangeHandler('스카프 관리자')}
      >
        스카프 관리자
      </S.ChattingHeaderContent>
    </S.ChattingHeader>
  );
};

export default ChattingHeader;
