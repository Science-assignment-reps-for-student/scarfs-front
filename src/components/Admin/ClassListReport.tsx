import React, { FC, ReactElement } from 'react';
import * as S from './style';
import adminO from '../../assets/Admin/adminO.svg';
import adminX from '../../assets/Admin/adminX.svg';

interface Props {
  onlyPersonal: boolean;
}

const ClassListReport: FC<Props> = ({ onlyPersonal }): ReactElement => {
  return (
    <S.SubjectClsContentReport>
      {onlyPersonal && (
        <>
          <h5>팀보고서</h5>
          <ul>
            <li>
              <span>팀이름</span>
              <span>학번</span>
              <span>이름</span>
              <span>제출여부</span>
            </li>
            {Array(16)
              .fill(0)
              .map((_, i) => {
                return (
                  <li key={i}>
                    <span>{i % 4 === 0 && '팀이름'}</span>
                    <span>1201</span>
                    <span>이름</span>
                    <span>
                      {i % 4 === 0 && (
                        <img src={i % 2 === 0 ? adminO : adminX} alt="complete" title="complete" />
                      )}
                    </span>
                  </li>
                );
              })}
          </ul>
        </>
      )}
    </S.SubjectClsContentReport>
  );
};

export default ClassListReport;
