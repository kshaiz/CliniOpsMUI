import React from 'react';
import { Grid, Typography } from '@mui/material';

import ImgDataConfig from '../../../../img/service/_1/dataConfig.jpeg';

const template = () => {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <Typography variant="h2" component="h2">
            eCRF and ePRO Configuration
          </Typography>
          <Typography sx={{ mt: 1 }}>
            Our experts will take care of your complicated electronic data collection forms, design branching questions, and develop in-form and cross-form validations and edit checks to maximize data cleaning at the field level.
          </Typography>
          <Typography sx={{ mt: 1 }}>
            Our product also offers a library of forms in various therapeutic areas which are CDASH and CDISC compliant as per industry standards.
          </Typography>
          <Typography sx={{ mt: 1 }}>
            We also provide configuration support for multi-lingual eCRF forms, and any localization support needed to configure the application workflow to align with the site’s local processes.
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <img
            src={`${ImgDataConfig}`}
            className='co-image'
            alt='eCRF and ePRO Configuration'
            title='eCRF and ePRO Configuration'
          />
        </Grid>
      </Grid>
    </>
  );
}

export default template;