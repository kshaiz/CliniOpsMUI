import React from 'react';
import { Grid, Typography } from '@mui/material';

import RouterList from '../../../router';

import ImgTelemedicine from '../../../../img/product/_2/telemedicine.png';

const template = () => {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={6} textAlign="center">
          <img
            src={`${ImgTelemedicine}`}
            className='co-image'
            alt='Telemedicine'
            title='Telemedicine'
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h2" component="h2">
            Telemedicine
          </Typography>
          <Typography sx={{ mt: 1 }}>
            Telemedicine module offers the study team the option to interact with the patient, via a secure digital platform. The study team can initiate the interaction via the mobile app, or the web portal, over a built-in video conference functionality to connect with the patient on his/her Smartphone, Tablet or Web browser. This not only allows the site, an option to convert some in-person patient visits to tele-visits but also significantly increases the outreach for patient recruitment and brings diversity in clinical trials. It also helps with patient retention, increases patient engagement and protocol adherence, by constantly interacting with patients via alerts, reminders and notifications.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default template;