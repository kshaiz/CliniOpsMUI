import React from "react";
import { HashLink as RouterLink } from 'react-router-hash-link';

import { Container, Box, Grid, Typography, Button, Stack } from '@mui/material';
import { common } from '@mui/material/colors';

import RouterList from '../../../router';
import { HeroTile } from '../../../component/home';

import ImgModelGraphic from '../../../../img/home/co-model-graphic.png';

const template = () => {
  return (
    <>
      <Box sx={{ py: { xs: 15, md: 10}, background: 'linear-gradient(180deg, #526980 0%, #162F4B 100%)' }}>
        <Container>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={7}>
              <Stack spacing={2} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <Typography variant="h1" color={common.white}>Delivering the promise of Hybrid and Decentralized Clinical Trials (DCT)</Typography>
                <Typography variant="subtitle1" color={common.white}>Making drug trials accessible, inclusive, faster, and cheaper with a unified platform enabling home-visit, site-visit, tele-visit, lab-visit, devices, sensors &amp; more...</Typography>
                <Box mt={2}>
                  <Button size="large" variant="contained" to={RouterList.contact.demo} component={RouterLink}>Request a Demo</Button>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} md={5} sx={{ textAlign: 'center' }}>
              <img
                src={`${ImgModelGraphic}`}
                alt='CliniOps Model'
                title='CliniOps Model'
                style={{ maxHeight: '100%', maxWidth: '100%', padding: `16px 0` }}
              />
            </Grid>
            <Grid item xs={12}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="stretch"
                spacing={2}
                pt={1}
              >
                <Grid item>
                  <HeroTile heading="50M+" subheading="Patient Records" />
                </Grid>
                <Grid item>
                  <HeroTile heading="1M+" subheading="Visits" />
                </Grid>
                <Grid item>
                  <HeroTile heading="100K+" subheading="Patients" />
                </Grid>
                <Grid item>
                  <HeroTile heading="175+" subheading="Sites" />
                </Grid>
                <Grid item>
                  <HeroTile heading="40+" subheading="Studies" />
                </Grid>
                <Grid item>
                  <HeroTile heading="30+" subheading="Countries" />
                </Grid>
                <Grid item>
                  <HeroTile heading="10+" subheading="FDA Approvals" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
};

export default template;