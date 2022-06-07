import React from 'react';
import { HashLink as RouterLink } from 'react-router-hash-link';
import { Grid, Box, Typography, Button } from '@mui/material';

import RouterList from '../../../router';

import ImgCliniOpsConnect from '../../../../img/product/_0/patient-app.jpeg';

const template = () => {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <img
            src={`${ImgCliniOpsConnect}`}
            className='co-image'
            alt='CliniOps Connect'
            title='CliniOps Connect'
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h2" component="h2">
            CliniOps Connect
          </Typography>
          <Typography sx={{ mt: 1 }}>
            Puts patients at the center of the clinical trials, and enables seamless participation via telemedicine, from the comfort of their homes or at their regular care facility. It increases patient engagement, retention, and protocol adherence, with regular reminders, notifications, alerts, educational materials et al.
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Button variant="text" to={RouterList.product._0_1} component={RouterLink} sx={{ ml: -1 }}>Read More</Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default template;