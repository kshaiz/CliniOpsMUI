import React from 'react';
import { Typography } from '@mui/material';

import { blueGrey } from '@mui/material/colors';

const template = () => {
  return (
    <>
      <Typography variant="h1" component="h1">
      TeleMedicine Is the Answer to Clinical Trials During Covid -19
      </Typography>
      <Typography variant="body2" color={blueGrey[400]}>
      Fremont, CA, June 09, 2020
      </Typography>
    </>
  );
}

export default template;