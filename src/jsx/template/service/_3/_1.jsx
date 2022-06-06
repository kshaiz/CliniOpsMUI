import React from 'react';
import { Grid, Typography } from '@mui/material';

import ImgStatisticalAnalysisPlan from '../../../../img/service/_3/statisticalAnalysisPlan.jpeg';

const template = () => {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <img
            src={`${ImgStatisticalAnalysisPlan}`}
            className='co-image'
            alt='Statistical Analysis Plan (SAP)'
            title='Statistical Analysis Plan (SAP)'
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h2" component="h2">
            Statistical Analysis Plan (SAP)
          </Typography>
          <Typography sx={{ mt: 1 }}>
            For any phase of drug development, our highly experienced biostatisticians and programmers work closely with the study team to develop study design, perform sample size calculation and power determination, develop randomization scheme, write statistical analysis section of protocols, and write SAP detailing statistical methodologies. The SAP includes detailed descriptions of data consistency checks, data listings, and tables and graphs. Our professional programmers create and finalize programming processes for data consistency checks, data listings, and graphics.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default template;