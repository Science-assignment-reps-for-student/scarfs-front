import React, { FC } from 'react';
import * as S from '../../../../style/Main';

const UserInfoButton: FC = () => {
  return (
    <S.UserInfoButton>
      <div>
        <div className="logout" />
        <p>LOGOUT</p>
      </div>
    </S.UserInfoButton>
  );
};

export default UserInfoButton;
