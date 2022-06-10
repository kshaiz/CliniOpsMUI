import React from 'react';
import { Grid, Typography } from '@mui/material';

import ImgCoderCro from '../../../../img/product/conduct/codercro.png';

const template = () => {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <Typography variant="h2" component="h2" className="co-page-heading">
            Coder
          </Typography>
          <Typography sx={{ mt: 1 }}>
            CliniOps Coder module provides auto-coding functionality with speed and accuracy to support coding for any clinical trial, including customizable workflows for manual coding when needed. This module maps verbatim terms to standard codes based on World Health Organization Drug Dictionaries (WHODrug) and the Medical Dictionary for Regulatory Affairs (MedDRA). This module seamlessly integrates with EDC and Coded values are stored directly within the CliniOps EDC database.
          </Typography>
        </Grid>
        <Grid item xs={6} textAlign="center">
          <img
            src={`${ImgCoderCro}`}
            className='co-image'
            alt='Coder'
            title='Coder'
          />
        </Grid>
      </Grid>
    </>
  );
}

export default template;