import React, { useState } from "react";
import { Container, Box, Grid, Typography, Button } from '@mui/material';
import { common } from '@mui/material/colors';

import { HeroTile } from '../../../component/home';

import ImgModelGraphic from '../../../../img/home/co-model-graphic.png';

const template = () => {
  return (
    <>
      <Box sx={{ py: 10, background: 'linear-gradient(180deg, #526980 0%, #162F4B 100%)' }}>
        <Container>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={7}>
              <Box>
                <Typography variant="h1" component="body1" color={common.white}>
                  Delivering the promise of Hybrid and Decentralized Clinical Trials (DCT)
                </Typography>
              </Box>
              <Box mt={1}>
                <Typography variant="subtitle1" component="body1" color={common.white}>
                  Making drug trials accessible, inclusive, faster, and cheaper with a unified platform enabling home-visit, site-visit, tele-visit, lab-visit, devices, sensors &amp; more...
                </Typography>
              </Box>
              <Box mt={2}>
                <Button variant="contained">Request a Demo</Button>
              </Box>
            </Grid>
            <Grid item xs={5}>
              <img
                src={`${ImgModelGraphic}`}
                className='co-image'
                alt='CliniOps Model'
                title='CliniOps Model'
                style={{ maxHeight: '100%' }}
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
                <HeroTile heading="50M+" subheading="Patient Records" />
                <HeroTile heading="1M+" subheading="Visits" />
                <HeroTile heading="100K+" subheading="Patients" />
                <HeroTile heading="175+" subheading="Sites" />
                <HeroTile heading="40+" subheading="Studies" />
                <HeroTile heading="30+" subheading="Countries" />
                <HeroTile heading="10+" subheading="FDA Approvals" />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
};

export default template;