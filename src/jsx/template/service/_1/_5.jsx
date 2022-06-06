import React from 'react';
import { Grid, Typography } from '@mui/material';

import ImgUat from '../../../../img/service/_1/uat.jpeg';

const template = () => {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <img
            src={`${ImgUat}`}
            className='co-image'
            alt='Validation &amp; UAT'
            title='Validation &amp; UAT'
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h2" component="h2">
            Validation &amp; UAT
          </Typography>
          <Typography sx={{ mt: 1 }}>
            We perform self-testing of the configuration and setup before releasing it for UAT.
          </Typography>
          <Typography sx={{ mt: 1 }}>
            Our designers address UAT findings to finally build a data entry system that will be accurate, complete, and user friendly.
          </Typography>
          <Typography sx={{ mt: 1 }}>
            We provide complete validation documentation (IQ, OQ &amp; PQ) as per regulatory standards.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default template;