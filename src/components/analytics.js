import React from 'react';
import ChartesComponent from './chartesComponent';
import chartConfig1 from '../configs/chart1';
import chartConfig2 from '../configs/chart2';
import chartConfig3 from '../configs/chart3';

const Analytics = () => {
  return (
    <div>
      <ChartesComponent chartConfig={chartConfig1} title={'Accelerometer'} />
      <ChartesComponent chartConfig={chartConfig2} title={'Accelerometer'} />
      <ChartesComponent chartConfig={chartConfig3} title={'Accelerometer'} />
    </div>
  );
};

export default Analytics;
