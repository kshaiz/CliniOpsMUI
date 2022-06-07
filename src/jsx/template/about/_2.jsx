import React from 'react';
import { Container, Box, Grid, Typography } from '@mui/material';
import { teal } from '@mui/material/colors';

// Page Imports
import _1 from './_2/_1';
import _2 from './_2/_2';

const template = () => {
  return (
    <>
      <Box sx={{ py: 5, backgroundColor: teal[50] }}>
        <Container>
          <Typography variant="h1" component="h1" sx={{ textAlign: 'center' }}>
            Management
          </Typography>
        </Container>
      </Box>
      <Container sx={{ pt: 5, pb: 10 }}>
        <_1 />
      </Container>
      <Box sx={{ py: 5, backgroundColor: teal[50] }}>
        <Container>
          <Typography variant="h1" component="h1" sx={{ textAlign: 'center' }}>
            Advisory
          </Typography>
        </Container>
      </Box>
      <Container sx={{ pt: 5, pb: 10 }}>
        <_2 />
      </Container>
    </>
  );
}

export default template;