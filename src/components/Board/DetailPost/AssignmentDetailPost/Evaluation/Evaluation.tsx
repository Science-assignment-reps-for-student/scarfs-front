import React, { FC, useState } from 'react';
import { EvaluationFormWrapper, SubmitButton } from './style';
import { Header, QuestionAll, QuestionOne } from './';
import queryString from 'query-string';
import { Redirect } from 'react-router-dom';

const types = ['self', 'mutual', 'all'];
const submitStatus = {
  studentNo: 2116,
  name: '이우찬',
  scientificAccuracy: 1,
  communication: 2,
  cooperation: 3,
};

interface Props {
  submitSelf: () => void;
  submitMutal: () => void;
}

const Evaluation: FC<Props> = ({ submitSelf, submitMutal }) => {
  const { type, target } = queryString.parse(location.search);
  if (types.indexOf(type as string) === -1 || typeof target === 'object')
    return <Redirect to='/error' />;
  const evaluationType = type as string;
  const submitMethod = {
    self: submitSelf,
    mutal: submitMutal,
    all: submitMutal,
  };
  return (
    <>
      <Header />
      <EvaluationFormWrapper>
        {evaluationType === 'all' && <QuestionAll />}
        {(evaluationType === 'mutual' || evaluationType === 'self') && (
          <QuestionOne type={evaluationType} submitStatus={submitStatus} />
        )}
      </EvaluationFormWrapper>
      {!!submitStatus.studentNo && (
        <SubmitButton onClick={submitMethod[evaluationType]}>제출하기</SubmitButton>
      )}
    </>
  );
};

export default Evaluation;
