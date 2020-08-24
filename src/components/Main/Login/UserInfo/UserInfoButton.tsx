import React, { FC } from 'react';
import * as S from '../../style';

interface Props {
  logoutButtonHandler: () => void;
}

const UserInfoButton: FC<Props> = ({ logoutButtonHandler }) => {
  return (
    <S.UserInfoButton onClick={logoutButtonHandler}>
      <div>
        <div className='logout' />
        <p>LOGOUT</p>
      </div>
    </S.UserInfoButton>
  );
};

export default UserInfoButton;
