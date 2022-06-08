import React from "react";
import { Container, Box, Grid, Typography, Stack } from '@mui/material';
import { green } from '@mui/material/colors';

import ImgPlatform from '../../../../img/home/hm-platform.svg';
import ImgIntegration from '../../../../img/home/hm-integration.svg';
import ImgDataScience from '../../../../img/home/hm-data-science.svg';
import ImgElectronic from '../../../../img/home/hm-electronic.svg';
import ImgRemote from '../../../../img/home/hm-remote.svg';
import ImgSmart from '../../../../img/home/hm-smart.svg';
import ImgProtocol from '../../../../img/home/hm-protocol.svg';
import ImgTelemedicine from '../../../../img/home/hm-telemedicine.svg';
import ImgCloud from '../../../../img/home/hm-cloud.svg';

const template = () => {
  return (
    <>
      <Box sx={{ py: 10, background: green[50] }}>
        <Container>
          <Typography variant="h2" sx={{ textAlign: 'center' }}>
            We have delivered industry leading innovations
          </Typography>
          <Typography variant="subtitle1" sx={{ textAlign: 'center' }}>
            Entrust your clinical trials with the most innovative DCT platform
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            rowSpacing={1}
            columnSpacing={4}
            pt={4}
          >
            <Grid item>
              <Stack direction="row" alignItems='center' spacing={1} sx={{ width: '350px' }}>
                <Box>
                  <img
                    src={`${ImgPlatform}`}
                    className='co-image'
                    alt='Platform'
                    title='Platform'
                    style={{ height: '80px', minWidth: '80px' }}
                  />
                </Box>
                <Typography variant="body1">
                  Unified platform (Patients, Sites, Sponsors and CROs)
                </Typography>
              </Stack>
            </Grid>
            <Grid item>
              <Stack direction="row" alignItems='center' spacing={1} sx={{ width: '350px' }}>
                <Box>
                  <img
                    src={`${ImgIntegration}`}
                    className='co-image'
                    alt='Integration'
                    title='Integration'
                    style={{ height: '80px', minWidth: '80px' }}
                  />
                </Box>
                <Typography variant="body1">
                  Medical device integration &amp; continuous data collection
                </Typography>
              </Stack>
            </Grid>
            <Grid item>
              <Stack direction="row" alignItems='center' spacing={1} sx={{ width: '350px' }}>
                <Box>
                  <img
                    src={`${ImgDataScience}`}
                    className='co-image'
                    alt='Data Science'
                    title='Data Science'
                    style={{ height: '80px', minWidth: '80px' }}
                  />
                </Box>
                <Typography variant="body1">
                  Unified platform with built-in DataScience (AI/ML/NLP)
                </Typography>
              </Stack>
            </Grid>
            <Grid item>
              <Stack direction="row" alignItems='center' spacing={1} sx={{ width: '350px' }}>
                <Box>
                  <img
                    src={`${ImgElectronic}`}
                    className='co-image'
                    alt='Electronic'
                    title='Electronic'
                    style={{ height: '80px', minWidth: '80px' }}
                  />
                </Box>
                <Typography variant="body1">
                  Electronic patient enrollment with e-consent
                </Typography>
              </Stack>
            </Grid>
            <Grid item>
              <Stack direction="row" alignItems='center' spacing={1} sx={{ width: '350px' }}>
                <Box>
                  <img
                    src={`${ImgRemote}`}
                    className='co-image'
                    alt='Remote'
                    title='Remote'
                    style={{ height: '80px', minWidth: '80px' }}
                  />
                </Box>
                <Typography variant="body1">
                  Remote Monitoring &amp; remote source data verification (rSDV)
                </Typography>
              </Stack>
            </Grid>
            <Grid item>
              <Stack direction="row" alignItems='center' spacing={1} sx={{ width: '350px' }}>
                <Box>
                  <img
                    src={`${ImgSmart}`}
                    className='co-image'
                    alt='Smart'
                    title='Smart'
                    style={{ height: '80px', minWidth: '80px' }}
                  />
                </Box>
                <Typography variant="body1">
                  Smart Study setup
                </Typography>
              </Stack>
            </Grid>
            <Grid item>
              <Stack direction="row" alignItems='center' spacing={1} sx={{ width: '350px' }}>
                <Box>
                  <img
                    src={`${ImgProtocol}`}
                    className='co-image'
                    alt='Protocol'
                    title='Protocol'
                    style={{ height: '80px', minWidth: '80px' }}
                  />
                </Box>
                <Typography variant="body1">
                  Patient Engagement &amp; Protocol Adherence
                </Typography>
              </Stack>
            </Grid>
            <Grid item>
              <Stack direction="row" alignItems='center' spacing={1} sx={{ width: '350px' }}>
                <Box>
                  <img
                    src={`${ImgTelemedicine}`}
                    className='co-image'
                    alt='Telemedicine'
                    title='Telemedicine'
                    style={{ height: '80px', minWidth: '80px' }}
                  />
                </Box>
                <Typography variant="body1">
                  Built-in telemedicine in Clinical trials
                </Typography>
              </Stack>
            </Grid>
            <Grid item>
              <Stack direction="row" alignItems='center' spacing={1} sx={{ width: '350px' }}>
                <Box>
                  <img
                    src={`${ImgCloud}`}
                    className='co-image'
                    alt='Cloud'
                    title='Cloud'
                    style={{ height: '80px', minWidth: '80px' }}
                  />
                </Box>
                <Typography variant="body1">
                  Cloud first architecture with AWS
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
};

export default template;