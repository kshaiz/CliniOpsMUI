import React from 'react';
import { Grid, Typography } from '@mui/material';

import ImgIRT from '../../../../img/product/_3/eirtcro.png';

const template = () => {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={6} textAlign="center">
          <img
            src={`${ImgIRT}`}
            className='co-image'
            alt='IRT'
            title='IRT'
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h2" component="h2">
            IRT
          </Typography>
          <Typography sx={{ mt: 1 }}>
            CliniOps IRT module (Interactive Response Technology) leverages interactive web response systems (IWRS) to support patient randomization for blinded studies. CROs can use this module to monitor the IP inventory at site on a real-time basis and take decisions accordingly.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default template;