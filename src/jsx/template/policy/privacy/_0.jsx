import React from 'react';
import { Typography, Link, Grid, Card, CardHeader, CardActions, Button } from '@mui/material';

import { blueGrey } from '@mui/material/colors';

const template = () => {
  return (
    <>
      <Typography variant="h1" component="h1">
        Privacy Policy
      </Typography>
      <Typography variant="caption" color={blueGrey[400]}>
        Last updated: August 08, 2021
      </Typography>
      <Typography variant="subtitle1" mt={1}>
        This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
      </Typography>
      <Typography variant="subtitle1" mt={1}>
        We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This policy is specifc to the users of CliniOps corporate website. CliniOps product specific privacy policy is mentioned late in this document.
      </Typography>
    </>
  );
}

export default template;