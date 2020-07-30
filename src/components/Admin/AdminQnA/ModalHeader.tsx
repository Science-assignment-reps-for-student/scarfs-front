import React, { FC, ReactElement } from 'react';
import * as S from './style';
import { close, search } from '../../../assets/Admin';

interface Props {
  onClickToggleModal: any;
}

const AdminQnAModal: FC<Props> = ({ onClickToggleModal }): ReactElement => {
  return (
    <S.ModalHeader>
      <S.HeaderCloseWrap className='close'>
        <S.HeaderClose src={close} alt='close' title='close' onClick={onClickToggleModal} />
      </S.HeaderCloseWrap>
      <S.HeaderInputWrap className='inputWrap'>
        <S.HeaderInputInner>
          <img src={search} alt='search' title='search' />
          <S.HeaderInput type='text' placeholder='학번이나 이름으로 검색하세요.' />
        </S.HeaderInputInner>
      </S.HeaderInputWrap>
    </S.ModalHeader>
  );
};

export default AdminQnAModal;
