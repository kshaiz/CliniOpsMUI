import React from 'react';
import { Grid, Typography } from '@mui/material';

import ImgEhrIntegration from '../../../../img/product/edge/ehr-integration.png';

const template = () => {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={6} textAlign="center">
          <img
            src={`${ImgEhrIntegration}`}
            className='co-image'
            alt='EHR Integration'
            title='EHR Integration'
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h2" component="h2">
            EHR Integration
          </Typography>
          <Typography sx={{ mt: 1 }}>
            CliniOps offers standard APIs to integrate with 3rd party applications. Electronic Health Records have remained isolated Islands for years. Now, with CliniOps and its partner ecosystem, you have access to over 450 sites, available with integrated EHR to EDC data to get your clinical trials started rapidly. SMART on FHIR standards for data transfer GCP-compliant process for controlling the data. CliniOps is agnostic to the Data Source and makes standardized data available from over 55 EHR systems.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default template;