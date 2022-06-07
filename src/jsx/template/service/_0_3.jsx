import React from 'react';
import { Container, Box, Grid, Divider } from '@mui/material';
import { yellow } from '@mui/material/colors';

// Page Imports
import _0 from './_0_3/_0';
import _1 from './_0_3/_1';
import _2 from './_0_3/_2';
import _3 from './_0_3/_3';

const template = () => {
  return (
    <>
      <Box sx={{ py: 10, backgroundColor: yellow[50] }}>
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
            <Divider className="co-divider" />
          </Grid>
          <Grid item>
            <_2 />
          </Grid>
          <Grid item>
            <Divider className="co-divider" />
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