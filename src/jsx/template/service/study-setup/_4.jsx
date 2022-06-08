import React from 'react';
import { Grid, Typography } from '@mui/material';

import ImgConfig from '../../../../img/service/study-setup/config.jpeg';

const template = () => {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <Typography variant="h2" component="h2">
            Interactive Response Technology (IRT) setup &amp; Configuration
          </Typography>
          <Typography sx={{ mt: 1 }}>
            Our IVRS/IWRS integrations provide real-time data tracking for randomization.
          </Typography>
          <Typography sx={{ mt: 1 }}>
            It can seamlessly integrate with the eClinical landscape, is compliant with all regulatory requirements, and meets international standards.
          </Typography>
        </Grid>
        <Grid item xs={6} sx={{ textAlign: 'center' }}>
          <img
            src={`${ImgConfig}`}
            className='co-image'
            alt='Interactive Response Technology (IRT) setup &amp; Configuration'
            title='Interactive Response Technology (IRT) setup &amp; Configuration'
          />
        </Grid>
      </Grid>
    </>
  );
}

export default template;