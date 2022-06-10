import React from 'react';
import { Grid, Typography } from '@mui/material';

import ImgLabIntegration from '../../../../img/product/edge/lab-integration.png';

const template = () => {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <Typography variant="h2" component="h2" className="co-page-heading">
            Lab Integration
          </Typography>
          <Typography sx={{ mt: 1 }}>
            CliniOps offers standard APIs to integrate with 3rd party laboratories. A study can get data from one or more central labs and each lab can be configured for lab normal ranges based on the protocol and lab manuals provided by the labs. CROs can get near real time access to lab data and reconcile those with the study data to speed up the review process and make faster decisions.
          </Typography>
        </Grid>
        <Grid item xs={6} textAlign="center">
          <img
            src={`${ImgLabIntegration}`}
            className='co-image'
            alt='Lab Integration'
            title='Lab Integration'
          />
        </Grid>
      </Grid>
    </>
  );
}

export default template;