import React from 'react';
import ChartesComponent from './chartesComponent';
import chartConfig1 from '../configs/chart1';

const Analytics = () => {
  return (
    <div>
      <ChartesComponent chartConfig={chartConfig1} title={'Accelerometer'} />
      <ChartesComponent chartConfig={chartConfig1} title={'Accelerometer'} />
      <ChartesComponent chartConfig={chartConfig1} title={'Accelerometer'} />
    </div>
  );
};

export default Analytics;
