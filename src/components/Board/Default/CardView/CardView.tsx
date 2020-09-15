import React, { FC } from 'react';
import * as S from './style';
import { AssignmentGuideBoard, ClassBoard, NoticeBoard } from '../TableView';

interface Props {
  boards: Array<AssignmentGuideBoard | ClassBoard | NoticeBoard>;
  CardTemplate?: React.FC<any>;
}

const CardView: FC<Props> = ({ boards, CardTemplate }) => {
  return (
    <S.CardViewWrapper>
      <S.Top>
        {(() => {
          const jsx = [];
          for (let i = 0; i < 3; i++) {
            if (typeof boards[i] === 'undefined') break;
            jsx.push(<CardTemplate key={boards[i].id} board={boards[i]} />);
          }
          return jsx;
        })()}
      </S.Top>
      <S.Bottom>
        {(() => {
          const jsx = [];
          for (let i = 3; i < 7; i++) {
            if (typeof boards[i] === 'undefined') break;
            jsx.push(<CardTemplate key={boards[i].id} board={boards[i]} />);
          }
          return jsx;
        })()}
      </S.Bottom>
    </S.CardViewWrapper>
  );
};

export default CardView;
