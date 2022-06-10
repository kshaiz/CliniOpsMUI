import React from 'react';
import { Grid, Typography } from '@mui/material';

import ImgEConsent from '../../../../img/product/conduct/econsentcro.png';

const template = () => {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <Typography variant="h2" component="h2" className="co-page-heading">
            eConsent
          </Typography>
          <Typography sx={{ mt: 1 }}>
            CliniOps eConsent module facilitate the consent process. CRO can use this module to monitor the compliance of the sites' consent process without compromising on patient PHI information. PHI information is redacted based on access control. Signed informed consent forms with the time stamp and geo location can be accessed through this module.
          </Typography>
        </Grid>
        <Grid item xs={6} textAlign="center">
          <img
            src={`${ImgEConsent}`}
            className='co-image'
            alt='eConsent'
            title='eConsent'
          />
        </Grid>
      </Grid>
    </>
  );
}

export default template;