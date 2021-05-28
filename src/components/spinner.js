import React from 'react';
import { Backdrop, CircularProgress } from '@material-ui/core';

const Spinner = () => {
  return (
    <Backdrop className={"backdrop"} open={true}>
      <CircularProgress />
    </Backdrop>
  );
};

export default Spinner;
