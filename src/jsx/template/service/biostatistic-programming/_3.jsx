import React from 'react';
import { Grid, Typography } from '@mui/material';

import ImgReporting from '../../../../img/service/biostatistic-programming/reporting.jpeg';

const template = () => {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <img
            src={`${ImgReporting}`}
            className='co-image'
            alt='Reporting'
            title='Reporting'
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h2" component="h2" className="co-page-heading" sx={{ textAlign: { xs: 'center', md: 'left'} }}>
            Reporting
          </Typography>
          <Typography sx={{ mt: 1 }}>
            Our seasoned biostatisticians are committed to excellence in preparing your statistical reports, writing statistical sections of clinical study reports, writing statistical sections of integrated study reports, and writing statistical portions of manuscripts.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default template;