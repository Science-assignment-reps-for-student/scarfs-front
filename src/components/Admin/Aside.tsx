import React, { FC, ReactElement } from 'react';
import * as S from './style';

interface Props {}

const AdminAside: FC<Props> = (): ReactElement => {
  return (
    <S.AdminAside>
      <h3>필터</h3>
      <ul>
        {Array(4)
          .fill(0)
          .map((_, i) => {
            return (
              <li key={i}>
                <input type="checkbox" id={`class${i + 1}`} />
                <label htmlFor={`class${i + 1}`}>{i + 1}반</label>
              </li>
            );
          })}
        <hr />
        {[
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
        ].map(({ id, text }, i) => {
          return (
            <li key={id}>
              <input type="checkbox" id={id} />
              <label htmlFor={id}>{text}</label>
            </li>
          );
        })}
      </ul>
    </S.AdminAside>
  );
};

export default AdminAside;
