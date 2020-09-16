import React, { FC, ReactElement, useMemo, MouseEvent } from 'react';
import { useSelector } from 'react-redux';

import * as S from './style';
import SkeletonAside from './SkeletonAside';

import { reducerType } from '../../../modules/reducer';

interface Props {
  toggleFilter: (e: MouseEvent) => void;
}

interface SubjectFilter {
  id: string;
  text: string;
}

const classes: string[] = ['class1', 'class2', 'class3', 'class4'];
const subjects: SubjectFilter[] = [
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
    text: '실험',
  },
];

const AdminAside: FC<Props> = ({ toggleFilter }): ReactElement => {
  const { loading } = useSelector((state: reducerType) => state.Admin);

  const classesFilter = useMemo(
    () =>
      classes.map(classNum => (
        <S.AdminAsideItem key={classNum}>
          <S.AdminAsideLabel htmlFor={classNum}>
            <S.AdminAsideCheckBox
              type='checkbox'
              id={classNum}
              onClick={toggleFilter}
              defaultChecked={true}
            />
            {classNum[classNum.length - 1]}반
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
