import React from 'react';
import { Typography, Grid } from '@mui/material';

import ImgCliniOpsConduct from '../../../../img/product/conduct/co-conduct.svg';

const template = () => {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={2}>
          <img
            src={`${ImgCliniOpsConduct}`}
            className='co-image'
            alt='CliniOps Conduct'
            title='CliniOps Conduct'
            style={{ width: '100%' }}
          />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="h1" component="h1">
            CliniOps Conduct
          </Typography>
          <Typography variant="subtitle1" sx={{ mt: 1 }}>
            Unified platform to streamline Clinical data management, Clinical operations, and accelerated Regulatory submission processes. It enables central and remote monitoring (rSDV). Sponsors and CROs can view the data along with powerful dashboards, reports, and study KPIs, to support decentralized, virtual, or hybrid trials.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default template;