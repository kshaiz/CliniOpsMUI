import React from 'react';
import { Container, Grid, Divider } from '@mui/material';

// Page Imports
import _0 from './_1/_0';
import _1 from './_1/_1';
import _2 from './_1/_2';
import _3 from './_1/_3';
import _4 from './_1/_4';
import _5 from './_1/_5';

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
          <Grid item>
            <Divider />
          </Grid>
          <Grid item>
            <_4 />
          </Grid>
          <Grid item>
            <Divider />
          </Grid>
          <Grid item>
            <_5 />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default template;