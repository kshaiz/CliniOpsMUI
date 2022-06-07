import React from 'react';
import { Container, Grid, Box, Divider } from '@mui/material';
import { orange } from '@mui/material/colors';

// Page Imports
import _0 from './_0_2/_0';
import _1 from './_0_2/_1';
import _2 from './_0_2/_2';
import _3 from './_0_2/_3';
import _4 from './_0_2/_4';
import _5 from './_0_2/_5';

const template = () => {
  return (
    <>
      <Box sx={{ py: 10, backgroundColor: orange[50] }}>
        <Container>
          <_0 />
        </Container>
      </Box>
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