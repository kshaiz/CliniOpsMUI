import React from 'react';
import { Container, Grid, Divider } from '@mui/material';

// Page Imports
import _1 from './_2/_1';
import _2 from './_2/_2';

const template = () => {
  return (
    <>
      <Container>
        <Grid container spacing={10} direction='column' sx={{ py: 10 }}>
          <Grid item>
            <_1 />
          </Grid>
          <Grid item>
            <Divider />
          </Grid>
          <Grid item>
            <_2 />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default template;