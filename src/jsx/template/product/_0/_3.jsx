import React from 'react';
import { HashLink as RouterLink } from 'react-router-hash-link';
import { Grid, Box, Typography, Button } from '@mui/material';

import RouterList from '../../../router';

import ImgCliniOpsConduct from '../../../../img/product/_0/study-portal.jpeg';

const template = () => {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <img
            src={`${ImgCliniOpsConduct}`}
            className='co-image'
            alt='CliniOps Conduct'
            title='CliniOps Conduct'
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h2" component="h2">
            CliniOps Conduct
          </Typography>
          <Typography sx={{ mt: 1 }}>
            Unified platform to streamline Clinical data management, Clinical operations, and accelerated Regulatory submission processes. It enables central and remote monitoring (rSDV). Sponsors and CROs can view the data along with powerful dashboards, reports, and study KPIs, to support decentralized, virtual, or hybrid trials.
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Button variant="text" to={RouterList.product._0_3} component={RouterLink} sx={{ ml: -1 }}>Read More</Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default template;