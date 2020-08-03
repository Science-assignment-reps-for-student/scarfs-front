import React, { FC } from 'react';
import * as S from './style';
import { Modal } from '../../Modal';
import { useHistory, useRouteMatch } from 'react-router-dom';

const PeerEvaluationModal: FC<{}> = () => {
  const history = useHistory();
  const paramId = location.pathname.split('/')[3];
  return (
    <Modal>
      <S.PeerEvaluationModalBox>
        <S.Label>본인</S.Label>
        <S.StudentBox>
          <S.StudentInfoBox>
            <S.BlueText>1219</S.BlueText>
            <S.BlueText>임용성</S.BlueText>
          </S.StudentInfoBox>
          <S.EvaluationStatusBox>
            <S.BlueText>완료</S.BlueText>
            <S.ViewButton
              onClick={() =>
                history.push(`/board/assignment-guide/${paramId}/evaluation?type=self`)
              }
            />
          </S.EvaluationStatusBox>
        </S.StudentBox>
        <S.Label>팀원</S.Label>
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <React.Fragment key={i}>
              <S.StudentBox>
                <S.StudentInfoBox>
                  <S.OrangeText>1219</S.OrangeText>
                  <S.OrangeText>임용성</S.OrangeText>
                </S.StudentInfoBox>
                <S.EvaluationStatusBox>
                  <S.OrangeText>미완료</S.OrangeText>
                  <S.EditButton
                    onClick={() =>
                      history.push(`/board/assignment-guide/${paramId}/evaluation?type=mutual`)
                    }
                  />
                </S.EvaluationStatusBox>
              </S.StudentBox>
            </React.Fragment>
          ))}
      </S.PeerEvaluationModalBox>
      <S.AllEvaluateButton
        onClick={() => history.push(`/board/assignment-guide/${paramId}/evaluation?type=all`)}
      >
        전체 평가
      </S.AllEvaluateButton>
    </Modal>
  );
};

export default PeerEvaluationModal;
