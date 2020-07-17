import React, { FC, ReactElement, useMemo, MouseEvent } from 'react';
import * as S from './style';
import SkeletonAside from './SkeletonAside';
import { useSelector } from 'react-redux';
import { StoreState } from 'src/modules/reducer/Admin';

interface Props {
  toggleFilter: (e: MouseEvent) => void;
}

const AdminAside: FC<Props> = ({ toggleFilter }): ReactElement => {
  const { loading } = useSelector((state: StoreState) => state.admin);
  const classes = ['class1', 'class2', 'class3', 'class4'];
  const subjects = [
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

  const classesFilter = useMemo(
    () =>
      classes.map((classNum, i) => (
        <S.AdminAsideItem key={classNum}>
          <S.AdminAsideLabel htmlFor={classNum}>
            <S.AdminAsideCheckBox
              type='checkbox'
              id={classNum}
              onClick={toggleFilter}
              defaultChecked={true}
            />
            {i + 1}반
          </S.AdminAsideLabel>
        </S.AdminAsideItem>
      )),
    [toggleFilter],
  );
  const subjectsFilter = useMemo(
    () =>
      subjects.map(({ id, text }) => (
        <S.AdminAsideItem key={id}>
          <S.AdminAsideLabel htmlFor={id}>
            <S.AdminAsideCheckBox
              type='checkbox'
              onClick={toggleFilter}
              id={id}
              defaultChecked={true}
            />
            {text}
          </S.AdminAsideLabel>
        </S.AdminAsideItem>
      )),
    [toggleFilter],
  );

  return (
    <>
      {loading ? (
        <SkeletonAside />
      ) : (
        <S.AdminAside>
          <S.AdminAsideTitle>필터</S.AdminAsideTitle>
          <S.AdminAsideList>
            {classesFilter}
            {subjectsFilter}
          </S.AdminAsideList>
        </S.AdminAside>
      )}
    </>
  );
};

export default AdminAside;