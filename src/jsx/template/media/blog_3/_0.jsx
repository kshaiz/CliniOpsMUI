import React from 'react';
import { Typography } from '@mui/material';

import { blueGrey } from '@mui/material/colors';

const template = () => {
  return (
    <>
      <Typography variant="h1" component="h1">
      Initial Impact of Covid-19 on Clinical Trials and Technology Solutions
      </Typography>
      <Typography variant="body2" color={blueGrey[400]}>
      Fremont, CA, June 09, 2020
      </Typography>
    </>
  );
}

export default template;