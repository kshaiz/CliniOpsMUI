import React from 'react';
import { Typography } from '@mui/material';

const template = () => {
  return (
    <>
      <Typography variant="h1" component="h1">
      Request a Demo
      </Typography>
      <Typography variant="subtitle1" sx={{ mt: 1 }}>
      Interested in the CliniOps Advantage? Please fill out the form and we'll schedule a live demo at a time that suits you
      </Typography>
    </>
  );
}

export default template;