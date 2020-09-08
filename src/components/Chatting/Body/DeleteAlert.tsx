import React, { FC, useEffect, useState } from 'react';
import * as S from '../style';

interface Props {
  approveCallback: () => void;
  cancelCallback: () => void;
  text: string;
}

const DeleteAlert: FC<Props> = ({ approveCallback, cancelCallback, text }) => {
  const [animation, animationChange] = useState(false);
  useEffect(() => {
    animationChange(true);
  }, []);
  return (
    <S.DeleteAlertBackground>
      <div className={animation ? 'move' : ''}>
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
      </div>
    </S.DeleteAlertBackground>
  );
};

export default DeleteAlert;
