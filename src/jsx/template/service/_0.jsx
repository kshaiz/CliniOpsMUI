import React from 'react';
import { Container, Grid, Divider } from '@mui/material';

// Page Imports
import _0 from './_0/_0';
import _1 from './_0/_1';
import _2 from './_0/_2';
import _3 from './_0/_3';

const template = () => {
  return (
    <>
      <Container>
        <Grid container spacing={10} direction='column' sx={{ py: 10 }}>
          <Grid item>
            <_0 />
          </Grid>
          <Grid item>
            <Divider />
          </Grid>
          <Grid item>
            <_1 />
          </Grid>
          <Grid item>
            <Divider />
          </Grid>
          <Grid item>
            <_2 />
          </Grid>
          <Grid item>
            <Divider />
          </Grid>
          <Grid item>
            <_3 />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default template;