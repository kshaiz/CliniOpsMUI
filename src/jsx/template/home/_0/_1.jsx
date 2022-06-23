import React from "react";
import { Container, Box, Grid, Typography, Stack } from '@mui/material';
import { green } from '@mui/material/colors';

import { InnovationTile } from '../../../component/home';

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
      <Box sx={{ py: 10}}>
        <Container>
          <Stack spacing={0} sx={{ textAlign: 'center' }}>
            <Typography variant="h2" className="co-page-heading">We have delivered industry leading innovations</Typography>
            <Typography variant="subtitle2">Entrust your clinical trials with the most innovative DCT platform</Typography>
          </Stack>
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
              <InnovationTile
                imgSrc={ImgPlatform}
                label='Unified platform (Patients, Sites, Sponsors and CROs)'
              />
            </Grid>
            <Grid item>
              <InnovationTile
                imgSrc={ImgIntegration}
                label='Medical device integration &amp; continuous data collection'
              />
            </Grid>
            <Grid item>
              <InnovationTile
                imgSrc={ImgDataScience}
                label='Unified platform with built-in DataScience (AI/ML/NLP)'
              />
            </Grid>
            <Grid item>
              <InnovationTile
                imgSrc={ImgElectronic}
                label='Electronic patient enrollment with e-consent'
              />
            </Grid>
            <Grid item>
              <InnovationTile
                imgSrc={ImgRemote}
                label='Remote Monitoring &amp; remote source data verification (rSDV)'
              />
            </Grid>
            <Grid item>
              <InnovationTile
                imgSrc={ImgSmart}
                label='Smart Study setup'
              />
            </Grid>
            <Grid item>
              <InnovationTile
                imgSrc={ImgProtocol}
                label='Patient Engagement &amp; Protocol Adherence'
              />
            </Grid>
            <Grid item>
              <InnovationTile
                imgSrc={ImgTelemedicine}
                label='Built-in telemedicine in Clinical trials'
              />
            </Grid>
            <Grid item>
              <InnovationTile
                imgSrc={ImgCloud}
                label='Cloud first architecture with AWS'
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
};

export default template;