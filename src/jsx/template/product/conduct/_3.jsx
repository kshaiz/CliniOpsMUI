import React from 'react';
import { Grid, Typography } from '@mui/material';

import ImgRSDV from '../../../../img/product/conduct/rsdv.png';

const template = () => {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={6} textAlign="center">
          <img
            src={`${ImgRSDV}`}
            className='co-image'
            alt='rSDV'
            title='rSDV'
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h2" component="h2">
            rSDV
          </Typography>
          <Typography sx={{ mt: 1 }}>
            CliniOps offers remote video interaction between CROs and sites for site initiation and other remote monitoring activities. CliniOps also offers remote source data verification through centralized access control of specific users to access site data remotely. In addition, data that requires SDV are configured ahead of time that drastically minimizes the on-site SDV effort, since most data is collected as electronic source (eSource) at the site, and may not need SDV. The ability to remotely perform this task in lieu of on-site SDV saves significant time, money and effort, reduces travel to sites, and keeps the study moving forward without interruptions.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default template;