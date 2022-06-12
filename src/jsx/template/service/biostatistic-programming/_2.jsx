import React from 'react';
import { Grid, Typography } from '@mui/material';

import ImgProgramming from '../../../../img/service/biostatistic-programming/programming.jpeg';

const template = () => {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <Typography variant="h2" component="h2" className="co-page-heading" sx={{ textAlign: { xs: 'center', md: 'left'} }}>
            Statistical Analysis &amp; Programming
          </Typography>
          <Typography sx={{ mt: 1 }}>
            We offer comprehensive statistical analysis services such as interim statistical analysis for adaptive designs and data and safety monitoring boards (DSMBs), data analysis for preparing integrated study reports, exploratory analysis for publications, abstracts, and marketing, and analysis of non-clinical trial data from epidemiologic studies and pre-clinical studies.
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <img
            src={`${ImgProgramming}`}
            className='co-image'
            alt='Statistical Analysis &amp; Programming'
            title='Statistical Analysis &amp; Programming'
          />
        </Grid>
      </Grid>
    </>
  );
}

export default template;