import React from 'react';
import { Container, Box, Grid, Divider } from '@mui/material';
import { purple } from '@mui/material/colors';



// Page Imports
import _0 from './_0/_0';
import _1 from './_0/_1';
import _2 from './_0/_2';
import _3 from './_0/_3';
import _4 from './_0/_4';
import _5 from './_0/_5';

const template = () => {
  return (
    <>
      <Box sx={{ py: 10, backgroundColor: purple[50] }}>
        <Container>
          <_0 />
          </Container>
      </Box>
      <Container>
        <Grid container spacing={10} direction='column' sx={{ py: 10 }}>
          <Grid item>
            <_0 />
          </Grid>
          <Grid item>
            <Divider />
          </Grid>
          <Grid item id='cliniops-connect'>
            <_1 />
          </Grid>
          <Grid item>
            <Divider />
          </Grid>
          <Grid item id='cliniops-edge'>
            <_2 />
          </Grid>
          <Grid item>
            <Divider />
          </Grid>
          <Grid item id='cliniops-conduct'>
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