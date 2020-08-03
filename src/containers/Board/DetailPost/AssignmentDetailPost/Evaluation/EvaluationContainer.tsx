import React, { FC } from 'react';
import { Evaluation } from '../../../../../components';

const EvaluationContainer: FC = () => {
  const submitSelf = () => console.log('self');
  const submitMutal = () => console.log('mutal');
  return <Evaluation submitSelf={submitSelf} submitMutal={submitMutal} />;
};

export default EvaluationContainer;
