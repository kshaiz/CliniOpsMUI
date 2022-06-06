import React from 'react';
import { Container, Grid, Box, Typography, Link } from '@mui/material';

// import RouterLink from '../../../router';

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
          {/* <Box sx={{ mt: 2 }}>
            <Link className='co-link-more' underline="hover" href={RouterLink.product._1}>Read More</Link>
          </Box> */}
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