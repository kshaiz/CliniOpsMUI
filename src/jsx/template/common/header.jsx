import React from 'react';
import { Container, Grid, Box, Divider, Typography, Link } from '@mui/material';
import { grey } from '@mui/material/colors';

import RouterLink from '../../router';

const template = () => {
  return (
    <>
      <Box sx={{ py: 6, backgroundColor: grey[50] }}>
        <Container>
          <Grid container spacing={4} direction="row">
            <Grid item>
              <Link href={RouterLink.home._0}>Home</Link>
            </Grid>
            <Grid item>
              <Link href={RouterLink.product._0}>Products</Link>
            </Grid>
            <Grid item>
              <Link href={RouterLink.service._0}>Services</Link>
            </Grid>
            <Grid item>
              <Link href={RouterLink.about._1}>Mission</Link>
            </Grid>
            <Grid item>
              <Link href={RouterLink.about._2}>Leadership Team</Link>
            </Grid>
            <Grid item>
              <Link href={RouterLink.about._3}>Career</Link>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default template;