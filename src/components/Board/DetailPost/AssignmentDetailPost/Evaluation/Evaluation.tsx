import React, { FC } from 'react';
import queryString from 'query-string';
import { Redirect } from 'react-router-dom';

import { EvaluationFormWrapper } from './style';
import { Header, QuestionAll, QuestionSelf, QuestionMutual } from './';

export const SCIENTIFIC = 'scientific' as const;
export const COMMUNICATION = 'communication' as const;
export const COOPERATION = 'cooperation' as const;
export const SELF = 'self' as const;
export const MUTUAL = 'mutual' as const;
export const ALL = 'all' as const;

export type EvaluationTypes = typeof SELF | typeof MUTUAL | typeof ALL;
export type EvaluationCategory = typeof SCIENTIFIC | typeof COMMUNICATION | typeof COOPERATION;

interface Props {}

const Evaluation: FC<Props> = () => {
  const { type, target } = queryString.parse(location.search);
  if ([SELF, MUTUAL, ALL].indexOf(type as EvaluationTypes) === -1 || typeof target === 'object')
    return <Redirect to='/error' />;
  const evaluationType = type as string;

  return (
    <>
      <Header />
      <EvaluationFormWrapper>
        {evaluationType === ALL && <QuestionAll />}
        {evaluationType === MUTUAL && !(target === undefined || target === '') && (
          <QuestionMutual target={target} />
        )}
        {evaluationType === SELF && <QuestionSelf />}
      </EvaluationFormWrapper>
    </>
  );
};

export default Evaluation;
