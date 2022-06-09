import React from 'react';
import { Typography } from '@mui/material';

import { blueGrey } from '@mui/material/colors';

const template = () => {
  return (
    <>
      <Typography variant="h1" component="h1">
      COVID-19 Pandemic stalls Clinical trials worldwide!
      </Typography>
      <Typography variant="body2" color={blueGrey[400]}>
      Fremont, CA, May 28, 2020
      </Typography>
    </>
  );
}

export default template;