import React from "react";

import { Container, Box, Grid, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';

import { ProductTile } from '../../../component/home';

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
              <ProductTile
                imgSrc={ImgConnect}
                heading="CliniOps Connect"
                summary="Puts patients at the center of the clinical trials, and enables seamless participation via telemedicine, from the comfort of their homes or at their regular care facility. It increases patient engagement, retention, and protocol adherence, with regular reminders, notifications, alerts, educational materials et al."
                link={RouterList.product.connect}
              />
            </Grid>
            <Grid item>
              <ProductTile
                imgSrc={ImgEdge}
                heading="CliniOps Edge"
                summary="Purpose-built for high quality &amp; real-time electronic data collection at source (eSource). The application runs on standard mobile devices in a complete offline mode, with all checks and balances, ensuring very clean and high-quality data, collected digitally at the point of care."
                link={RouterList.product.edge}
              />
            </Grid>
            <Grid item>
              <ProductTile
                imgSrc={ImgConduct}
                heading="CliniOps Conduct"
                summary="Unified platform to streamline Clinical data management, Clinical operations, and accelerated Regulatory submission processes. It enables central and remote monitoring (rSDV). Sponsors and CROs can view the data along with powerful dashboards, reports, and study KPIs, to support decentralized, virtual, or hybrid trials."
                link={RouterList.product.conduct}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
};

export default template;