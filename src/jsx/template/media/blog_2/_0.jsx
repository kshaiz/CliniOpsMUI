import React from 'react';
import { Typography } from '@mui/material';

import { blueGrey } from '@mui/material/colors';

const template = () => {
  return (
    <>
      <Typography variant="h1" component="h1">
      Avik Pal, the founder, CliniOps, with Nagesh Jadhav, Director Stefanini discussing "What the Future Holds for Clinical Trials, Post Covid-19"
      </Typography>
      <Typography variant="body2" color={blueGrey[400]}>
        Fremont, CA, June 10, 2020
      </Typography>
    </>
  );
}

export default template;