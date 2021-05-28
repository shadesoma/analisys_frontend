import React from 'react';
import { Line } from 'react-chartjs-2';
import { Typography } from '@material-ui/core';

const ChartesComponent = ({chartConfig, title}) => {
  return (
    <div style={{
      width: '924px',
      height: '558px',
      background: '#f9f9fb',
      borderRadius: '28px',
      padding: '40px',
      marginBottom: '26px'
    }}>
      <Typography variant="h6">{title}</Typography>
      <Line data={chartConfig.data} options={chartConfig.options}  type={'Line'}/>
    </div>
  );
};

export default ChartesComponent;
