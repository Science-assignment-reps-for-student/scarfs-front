import React, { FC, useState } from 'react';
import { Wave } from '../../../components';

export type WaveType = {
  color: string;
  pointNumber: number;
};

const WaveContainer: FC = () => {
  const waveData = [
    {
      color: 'rgba(84, 0, 255, 0.3)',
      pointNumber: 40,
    },
    {
      color: 'rgba(77, 88, 255, 0.34)',
      pointNumber: 30,
    },
    {
      color: 'rgba(101, 131, 200, 0.29)',
      pointNumber: 20,
    },
  ];
  return <Wave waveData={waveData} />;
};

export default WaveContainer;
