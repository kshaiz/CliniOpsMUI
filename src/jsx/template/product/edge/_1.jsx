import React from 'react';
import { Grid, Typography } from '@mui/material';

import ImgESource from '../../../../img/product/edge/esource.png';

const template = () => {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={6} textAlign="center">
          <img
            src={`${ImgESource}`}
            className='co-image'
            alt='eSource'
            title='eSource'
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h2" component="h2">
            eSource
          </Typography>
          <Typography sx={{ mt: 1 }}>
            CliniOps eSource solution is a mobile, cloud-based digital solution where data is collected at sites, via mobile tablets, with complete offline functionality. Powerful edit checks within the eSource solution ensures that data collected at the 'point of care' is of the highest quality. Data is then automatically uploaded in near real-time to the central data hub, once network connection is available. CliniOps eSource solution has been designed as per FDA guidelines and the data collected on the mobile device is considered 'source data' (aka eSource), that eliminates the need for a separate paper record. Data can then be accessed and analyzed by the different modules of the CliniOps Suite.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default template;