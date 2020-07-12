import React, { FC, ReactElement } from 'react';
import * as S from './style';
import Subject from './Subject';

interface Props {}

interface ISubject {
  subject: string;
  onlyPersonal: boolean;
}

const AdminSection: FC<Props> = (): ReactElement => {
  const subjectList: ISubject[] = [
    {
      subject: '[개인] 정우영의 전구공장',
      onlyPersonal: false,
    },
    {
      subject: '[팀] 정우영의 전구공장',
      onlyPersonal: true,
    },
    {
      subject: '[실험] 정우영의 전구공장',
      onlyPersonal: true,
    },
  ];

  return (
    <S.AdminSection>
      {subjectList.map(({ subject, onlyPersonal }, i: number) => {
        return <Subject key={i} subject={subject} onlyPersonal={onlyPersonal} />;
      })}
    </S.AdminSection>
  );
};

export default AdminSection;
