import React, { FC, ReactElement } from 'react';
import * as S from './style';
import adminO from '../../assets/Admin/adminO.svg';
import adminX from '../../assets/Admin/adminX.svg';

interface Props {
  onlyPersonal: boolean;
}

const ClassListMembers: FC<Props> = ({ onlyPersonal }): ReactElement => {
  return (
    <S.SubjectClsContentMembers>
      {onlyPersonal && <h5>동료평가</h5>}
      <ul>
        <li>
          <span>학번</span>
          <span>이름</span>
          <span>제출여부</span>
        </li>
        {Array(20)
          .fill(0)
          .map((_, i) => {
            return (
              <li>
                <span>120{i + 1}</span>
                <span>이름</span>
                <span>
                  <img src={i % 2 === 0 ? adminO : adminX} alt="notComplete" title="notComplete" />
                </span>
              </li>
            );
          })}
      </ul>
    </S.SubjectClsContentMembers>
  );
};

export default ClassListMembers;
