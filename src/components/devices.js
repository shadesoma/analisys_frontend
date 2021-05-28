import React from 'react';
import {
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';
import CardsContainer from './cardsContainer';
import SensorData from './sensorData';
import Analytics from './analytics';

const Devices = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="devices" style={{ marginLeft: '10px' }}>
      <Typography variant="h6"
                  style={{ marginTop: '15px', marginBottom: '15px' }}>
        Active Programs
      </Typography>

      <CardsContainer/>

      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
        style={{marginBottom: '45px'}}
      >
        <Tab label="Sensors Data"/>
        <Tab label="Analytics"/>
      </Tabs>

      {value === 0 ? (
        <SensorData/>
      ) : (
        <Analytics/>
      )}
    </div>
  );
}
;

export default Devices;
