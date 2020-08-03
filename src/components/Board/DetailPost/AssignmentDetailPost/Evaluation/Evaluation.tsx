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
  class Submit {
    static self() {
      submitSelf();
    }
    static mutal() {
      submitMutal();
    }
    static all() {
      submitMutal();
    }
  }
  const { type, target } = queryString.parse(location.search);
  if (types.indexOf(type as string) === -1 || typeof target === 'object')
    return <Redirect to='/error' />;
  return (
    <>
      <Header />
      <EvaluationFormWrapper>
        {(type as string) === 'all' && <QuestionAll />}
        {((type as string) === 'mutual' || (type as string) === 'self') && (
          <QuestionOne type={type as string} submitStatus={submitStatus} />
        )}
      </EvaluationFormWrapper>
      {!!submitStatus.studentNo && (
        <SubmitButton onClick={Submit[type as string]}>제출하기</SubmitButton>
      )}
    </>
  );
};

export default Evaluation;
