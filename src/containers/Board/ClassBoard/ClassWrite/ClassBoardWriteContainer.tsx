import React, { FC } from 'react';
import { ClassBoardWrite, AlertModal } from '../../../../components';

const ClassBoardWriteContainer: FC = () => {
  return (
    <AlertModal type='notify'>
      <ClassBoardWrite />
    </AlertModal>
  );
};

export default ClassBoardWriteContainer;
