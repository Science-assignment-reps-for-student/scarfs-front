import React, { FC, useState } from 'react';
import { Wave } from '../../../components';

const WaveContainer: FC = () => {
  const [colors, colorChange] = useState<string[]>([
    'rgba(77, 88, 255, 0.54)',
    'rgba(101, 131, 200, 0.79)',
  ]);
  return <Wave colors={colors} />;
};

export default WaveContainer;
