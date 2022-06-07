import React from 'react';
import { HashLink as RouterLink } from 'react-router-hash-link';
import { Grid, Box, Typography, Button } from '@mui/material';

import RouterList from '../../../router';

import ImgCliniOpsEdge from '../../../../img/product/_0/site-app.jpeg';

const template = () => {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <Typography variant="h2" component="h2">
            CliniOps Edge
          </Typography>
          <Typography sx={{ mt: 1 }}>
            Purpose-built for high quality &amp; real-time electronic data collection at source (eSource). The application runs on standard mobile devices in a complete offline mode, with all checks and balances, ensuring very clean and high-quality data, collected digitally at the point of care.
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Button variant="text" to={RouterList.product._0_2} component={RouterLink} sx={{ ml: -1 }}>Read More</Button>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img
            src={`${ImgCliniOpsEdge}`}
            className='co-image'
            alt='CliniOps Edge'
            title='CliniOps Edge'
          />
        </Grid>
      </Grid>
    </>
  );
}

export default template;