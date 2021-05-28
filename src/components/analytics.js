import React from 'react';
import ChartesComponent from './chartesComponent';
import chartConfig4 from '../configs/chart4';
import chartConfig5 from '../configs/chart5';
import chartConfig6 from '../configs/chart6';

const Analytics = () => {
  return (
    <div>
      <ChartesComponent chartConfig={chartConfig4} title={'Accelerometer'} />
      <ChartesComponent chartConfig={chartConfig5} title={'Accelerometer'} />
      <ChartesComponent chartConfig={chartConfig6} title={'Accelerometer'} />
    </div>
  );
};

export default Analytics;
