import React from 'react';
import { HashLink as RouterLink } from 'react-router-hash-link';
import { Grid, Box, Typography, Button } from '@mui/material';

import RouterList from '../../../router';

import ImgEcoa from '../../../../img/product/connect/ecoa.png';

const template = () => {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={6} textAlign="center">
          <img
            src={`${ImgEcoa}`}
            className='co-image'
            alt='eCOA/QoL'
            title='eCOA/QoL'
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h2" component="h2" className="co-page-heading">
            eCOA/QoL
          </Typography>
          <Typography sx={{ mt: 1 }}>
            CliniOps eCOA module is designed to engage patients via smartphones, allowing them to report clinical outcome data remotely and more frequently. Supports rapid configuration and rollout of standard eCOA instruments, including Quality of Life Questionnaire (QoL) instruments for measuring the quality of an individual's life across a broad range of specific areas. Patient outcome data can be collected on either a provisioned device or in a BYOD (Bring Your Own Device) model. It also supports automated alerts and notifications to both patients and sites, via SMS, email or push notifications, as configured.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default template;