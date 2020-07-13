import React, { FC, ReactElement } from 'react';
import * as S from './style';

interface Props {}

const AdminAside: FC<Props> = (): ReactElement => {
  const classList = [1, 2, 3, 4];
  const subjectList = [
    {
      id: 'personal',
      text: '개인',
    },
    {
      id: 'team',
      text: '팀',
    },
    {
      id: 'experiment',
      text: '과제',
    },
  ];

  return (
    <S.AdminAside>
      <S.AdminAsideTitle>필터</S.AdminAsideTitle>
      <S.AdminAsideList>
        {classList.map(classNum => {
          return (
            <S.AdminAsideItem key={classNum}>
              <S.AdminAsideCheckBox type='checkbox' id={`class${classNum}`} />
              <S.AdminAsideLabel htmlFor={`class${classNum}`}>{classNum}반</S.AdminAsideLabel>
            </S.AdminAsideItem>
          );
        })}
        {subjectList.map(({ id, text }) => {
          return (
            <S.AdminAsideItem key={id}>
              <S.AdminAsideCheckBox type='checkbox' id={id} />
              <S.AdminAsideLabel htmlFor={id}>{text}</S.AdminAsideLabel>
            </S.AdminAsideItem>
          );
        })}
      </S.AdminAsideList>
    </S.AdminAside>
  );
};

export default AdminAside;
