import React from 'react';
import { HashLink as RouterLink } from 'react-router-hash-link';
import { Grid, Typography, Stack } from '@mui/material';

import { PageSectionLeftImg } from '../../../component/page';

import RouterList from '../../../router';

import ImgEcoa from '../../../../img/product/connect/ecoa.png';

const template = () => {
  return (
    <>
      <PageSectionLeftImg
        heading={
          <Stack direction="row" spacing={1} alignItems='center' justifyContent={{xs: 'center', md: 'flex-start'}}>
            <Typography variant="h2" component="h2" className="co-page-heading" sx={{ textAlign: { xs: 'center', md: 'left'} }}>
              eCOA/QoL
            </Typography>
          </Stack>
        }
        imgUrl={ImgEcoa}
        imgTitle="eCOA/QoL"
      >
        <Typography sx={{ mt: 1 }}>
          CliniOps eCOA module is designed to engage patients via smartphones, allowing them to report clinical outcome data remotely and more frequently. Supports rapid configuration and rollout of standard eCOA instruments, including Quality of Life Questionnaire (QoL) instruments for measuring the quality of an individual's life across a broad range of specific areas. Patient outcome data can be collected on either a provisioned device or in a BYOD (Bring Your Own Device) model. It also supports automated alerts and notifications to both patients and sites, via SMS, email or push notifications, as configured.
        </Typography>
      </PageSectionLeftImg>
    </>
  );
}

export default template;