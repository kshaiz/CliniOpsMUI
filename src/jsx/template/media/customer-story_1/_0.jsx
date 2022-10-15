import React from 'react';
import { Typography } from '@mui/material';

import { blueGrey } from '@mui/material/colors';

const template = () => {
  return (
    <>
      <Typography variant="h1" component="h1">
        Configurable Platform Speeds Development of Complex Workflows in Ground-Breaking Clinical Study
      </Typography>
      <Typography variant="body2" color={blueGrey[400]}>
        Vektor Medical, Inc.
      </Typography>
    </>
  );
}

export default template;