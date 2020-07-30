import React, { FC, ReactElement } from 'react';
import * as S from './style';
import ModalItem from './ModalItem';

interface Props {}

const AdminQnAModal: FC<Props> = (): ReactElement => {
  return (
    <S.ModalSection>
      <S.SectionList>
        <h3>1반</h3>
        {Array(20)
          .fill(0)
          .map((_, i) => (
            <ModalItem key={i} name='이성진' student_number={1101} />
          ))}
      </S.SectionList>
    </S.ModalSection>
  );
};

export default AdminQnAModal;
