import React from 'react';
import { Grid, Typography } from '@mui/material';

import ImgProtocol from '../../../../img/service/study-setup/protocol.jpeg';

const template = () => {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <img
            src={`${ImgProtocol}`}
            className='co-image'
            alt='Protocol Development'
            title='Protocol Development'
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h2" component="h2">
            Protocol Development
          </Typography>
          <Typography sx={{ mt: 1 }}>
            We offer comprehensive protocol development services utilizing our extensive and cross-functional scientific expertise.
          </Typography>
          <Typography sx={{ mt: 1 }}>
            We form an early partnership with clients to ensure development of an executable trial with minimal protocol amendments.
          </Typography>
          <Typography sx={{ mt: 1 }}>
            Our expertise in regulatory affairs and knowledge of acceptable endpoints increases the probability that our protocols will be accepted by regulatory agencies across the world.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default template;