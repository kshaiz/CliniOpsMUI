import React from 'react';
import { Typography, Grid } from '@mui/material';

import ImgCliniOpsConnect from '../../../../img/product/connect/co-connect.svg';


const template = () => {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12} md="auto">
          <img
            src={`${ImgCliniOpsConnect}`}
            className='co-image'
            alt='CliniOps Connect'
            title='CliniOps Connect'
            style={{ width: '150px' }}
          />
        </Grid>
        <Grid item xs={12} md>
          <Typography variant="h1" component="h1">
            CliniOps Connect
          </Typography>
          <Typography variant="subtitle1" sx={{ mt: 1 }}>
            Puts patients at the center of the clinical trials, and enables seamless participation via telemedicine, from the comfort of their homes or at their regular care facility. It increases patient engagement, retention, and protocol adherence, with regular reminders, notifications, alerts, educational materials et al.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default template;