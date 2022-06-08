import React from 'react';
import { Grid, Typography } from '@mui/material';

import ImgETMF from '../../../../img/product/conduct/eTMF.png';

const template = () => {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <Typography variant="h2" component="h2">
            eTMF
          </Typography>
          <Typography sx={{ mt: 1 }}>
            CliniOps eTMF module is architected out of the DIA Reference model, and brings the trial master file requirements from source, to provide the clinical trials a very rich trial experience. End to End Audit Trails, helps you stay inspection ready throughout the study, and meet any inspection and compliance requirements. The eTMF module also offers customizable dashboards to keep track of essential study metrics on document status.
          </Typography>
        </Grid>
        <Grid item xs={6} textAlign="center">
          <img
            src={`${ImgETMF}`}
            className='co-image'
            alt='eTMF'
            title='eTMF'
          />
        </Grid>
      </Grid>
    </>
  );
}

export default template;