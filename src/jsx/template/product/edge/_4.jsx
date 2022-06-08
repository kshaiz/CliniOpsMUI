import React from 'react';
import { Grid, Typography } from '@mui/material';

import ImgEIrt from '../../../../img/product/edge/eirt.png';

const template = () => {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <Typography variant="h2" component="h2">
            eIRT
          </Typography>
          <Typography sx={{ mt: 1 }}>
            CliniOps eIRT module (Electronic Interactive Response Technology) leverages various web and mobile technologies to support patient randomization for blinded studies. It can support studies with simple randomization to complex stratified randomization including cross-over trials. It also simplifies the process of assigning randomization codes based on barcodes and minimize errors.
          </Typography>
        </Grid>
        <Grid item xs={6} textAlign="center">
          <img
            src={`${ImgEIrt}`}
            className='co-image'
            alt='eIRT'
            title='eIRT'
          />
        </Grid>
      </Grid>
    </>
  );
}

export default template;