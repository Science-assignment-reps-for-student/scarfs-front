import React, { FC } from 'react';
import * as S from '../style';

interface Props {
  approveCallback: () => void;
  cancelCallback: () => void;
  text: string;
}

const DeleteAlert: FC<Props> = ({ approveCallback, cancelCallback, text }) => {
  return (
    <S.DeleteAlertBackground>
      <S.DeleteAlertBody>
        <S.DeleteAlertText>{text}</S.DeleteAlertText>
        <S.DeleteAlertButtonWrapper>
          <S.DeleteAlertButton isApproveButton={true} onClick={approveCallback}>
            삭제
          </S.DeleteAlertButton>
          <S.DeleteAlertButton isApproveButton={false} onClick={cancelCallback}>
            취소
          </S.DeleteAlertButton>
        </S.DeleteAlertButtonWrapper>
      </S.DeleteAlertBody>
    </S.DeleteAlertBackground>
  );
};

export default DeleteAlert;
