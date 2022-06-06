import React from 'react';
import { Grid, Typography } from '@mui/material';

import ImgDataValidation from '../../../../img/service/_1/dataValidation.jpeg';

const template = () => {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <img
            src={`${ImgDataValidation}`}
            className='co-image'
            alt='Edit Checks &amp; Data Validation'
            title='Edit Checks &amp; Data Validation'
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h2" component="h2">
            Edit Checks &amp; Data Validation
          </Typography>
          <Typography sx={{ mt: 1 }}>
            We work closely with sponsors to determine and document the checks, appropriate code lists, and the procedures that will be used for invalid results.
          </Typography>
          <Typography sx={{ mt: 1 }}>
            We implement and test the checks and codes in the clinical database management system.
          </Typography>
          <Typography sx={{ mt: 1 }}>
            Checks are run real time during data entry or at intervals and invalid results are fixed.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default template;