import React from 'react';
import { Grid, Typography } from '@mui/material';

import ImgTelemedicine from '../../../../img/product/connect/telemedicineone.png';

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
          <Typography variant="h2" component="h2" className="co-page-heading">
            Telemedicine
          </Typography>
          <Typography sx={{ mt: 1 }}>
            Telemedicine module offers the patient the option to interact with the physician and/or nurse, from the comfort of their home. This is conducted via the mobile app over a built-in video conference functionality on the patient's Smartphone, Tablet or Web browser over a secured network. So, patient has the choice of an onsite visit, tele-visit, or even a home visit by a mobile visiting nurse or a phlebotomist. This significantly increases patient retention, patient engagement and protocol adherence.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default template;