import React from 'react';
import { Container, Box, Grid, Typography } from '@mui/material';
import { teal } from '@mui/material/colors';

// Page Imports
import _0 from './_3/_0';

const template = () => {
  return (
    <>
      <Box sx={{ py: 10, backgroundColor: teal[50] }}>
        <Container>
          <Typography variant="h1" component="h1">
            Come work with Us!!
          </Typography>
          <Typography variant="subtitle1" sx={{ mt: 1 }}>
            CliniOps is looking for dreamers, believers and builders.
          </Typography>
        </Container>
      </Box>
      <Container>
        <Grid container spacing={10} direction='column' sx={{ py: 10 }}>
          <Grid item>
            <_0 />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default template;