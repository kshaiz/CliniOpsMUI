import React from 'react';
import { Grid, Typography } from '@mui/material';

import ImgCTMS from '../../../../img/product/conduct/ctmscro.png';

const template = () => {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={6} textAlign="center">
          <img
            src={`${ImgCTMS}`}
            className='co-image'
            alt='CTMS'
            title='CTMS'
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h2" component="h2">
            IRT
          </Typography>
          <Typography sx={{ mt: 1 }}>
            CliniOps CTMS module is designed to monitor study progress and performance, along with tracking deadlines and milestones. This module supports the clinical operations team with an adaptive framework, and exceptional breadth of functionality that enables rapid and flexible deployment, all with the power of other built-in modules. This module offers comprehensive management of trial planning, document management, country and site progress, monitoring activities, along with state-of-the-art reporting capabilities.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default template;