import React from 'react';
import { Typography, Grid } from '@mui/material';

import ImgCliniOpsEdge from '../../../../img/product/edge/co-edge.svg';


const template = () => {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={2}>
          <img
            src={`${ImgCliniOpsEdge}`}
            className='co-image'
            alt='CliniOps Edge'
            title='CliniOps Edge'
            style={{ width: '100%' }}
          />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="h1" component="h1">
            CliniOps Edge
          </Typography>
          <Typography variant="subtitle1" sx={{ mt: 1 }}>
            Purpose-built for high quality &amp; real-time electronic data collection at source (eSource). The application runs on standard mobile devices in a complete offline mode, with all checks and balances, ensuring very clean and high-quality data, collected digitally at the point of care.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default template;