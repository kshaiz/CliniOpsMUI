import React from "react";
import { HashLink as RouterLink } from 'react-router-hash-link';

import { Container, Box, Grid, Typography, Stack, Button } from '@mui/material';
import { blue, common } from '@mui/material/colors';

import RouterList from '../../../router';

import ImgConnect from '../../../../img/home/hm-co-connect.svg';
import ImgEdge from '../../../../img/home/hm-co-edge.svg';
import ImgConduct from '../../../../img/home/hm-co-conduct.svg';

const template = () => {
  return (
    <>
      <Box sx={{ py: 10, background: blue[50] }}>
        <Container>
          <Typography variant="h2" sx={{ textAlign: 'center' }}>
            CliniOps App Suite
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={4}
            pt={4}
          >
            <Grid item>
              <Stack direction="column" alignItems='center' spacing={1} p={3} sx={{ width: '350px', height: '100%', borderRadius: 2, textAlign: 'center', backgroundColor: common.white, boxShadow: '0 30px 60px -30px rgb(0 0 0 / 30%), 0 30px 60px -30px rgb(0 0 0 / 25%)' }}>
                <Box>
                  <img
                    src={`${ImgConnect}`}
                    className='co-image'
                    alt='CliniOps Connect'
                    title='CliniOps Connect'
                    style={{ height: '100px', minWidth: '90px' }}
                  />
                </Box>
                <Typography variant="h3">
                  <strong>CliniOps Connect</strong>
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: '24px', pt: 1 }}>
                  Puts patients at the center of the clinical trials, and enables seamless participation via telemedicine, from the comfort of their homes or at their regular care facility. It increases patient engagement, retention, and protocol adherence, with regular reminders, notifications, alerts, educational materials et al.
                </Typography>
                <Box sx={{ pt: 2 }}>
                  <Button to={RouterList.product.connect} component={RouterLink}>Learn More</Button>
                </Box>
              </Stack>
            </Grid>
            <Grid item>
              <Stack direction="column" alignItems='center' spacing={1} p={3} sx={{ width: '350px', height: '100%', borderRadius: 2, textAlign: 'center', backgroundColor: common.white, boxShadow: '0 30px 60px -30px rgb(0 0 0 / 30%), 0 30px 60px -30px rgb(0 0 0 / 25%)' }}>
                <Box>
                  <img
                    src={`${ImgEdge}`}
                    className='co-image'
                    alt='CliniOps Edge'
                    title='CliniOps Edge'
                    style={{ height: '100px', minWidth: '90px' }}
                  />
                </Box>
                <Typography variant="h3">
                  <strong>CliniOps Edge</strong>
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: '24px', pt: 1 }}>
                  Purpose-built for high quality &amp; real-time electronic data collection at source (eSource). The application runs on standard mobile devices in a complete offline mode, with all checks and balances, ensuring very clean and high-quality data, collected digitally at the point of care.
                </Typography>
                <Box sx={{ pt: 2 }}>
                  <Button to={RouterList.product.edge} component={RouterLink}>Learn More</Button>
                </Box>
              </Stack>
            </Grid>
            <Grid item>
              <Stack direction="column" alignItems='center' spacing={1} p={3} sx={{ width: '350px', height: '100%', borderRadius: 2, textAlign: 'center', backgroundColor: common.white, boxShadow: '0 30px 60px -30px rgb(0 0 0 / 30%), 0 30px 60px -30px rgb(0 0 0 / 25%)' }}>
                <Box>
                  <img
                    src={`${ImgConduct}`}
                    className='co-image'
                    alt='CliniOps Conduct'
                    title='CliniOps Conduct'
                    style={{ height: '100px', minWidth: '90px' }}
                  />
                </Box>
                <Typography variant="h3">
                  <strong>CliniOps Conduct</strong>
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: '24px', pt: 1 }}>
                  Unified platform to streamline Clinical data management, Clinical operations, and accelerated Regulatory submission processes. It enables central and remote monitoring (rSDV). Sponsors and CROs can view the data along with powerful dashboards, reports, and study KPIs, to support decentralized, virtual, or hybrid trials.
                </Typography>
                <Box sx={{ pt: 2 }}>
                  <Button to={RouterList.product.conduct} component={RouterLink}>Learn More</Button>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
};

export default template;