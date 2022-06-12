import React from 'react';
import { HashLink as RouterLink } from 'react-router-hash-link';
import { Box, Typography, Button, Stack } from '@mui/material';

import { PageSectionLeftImg } from '../../../component/page';

import RouterList from '../../../router';

import ImgCliniOpsConnect from '../../../../img/product/_0/patient-app.jpeg';
import ImgLogo from '../../../../img/product/connect/co-connect.svg';

const template = () => {
  return (
    <>
      <PageSectionLeftImg
        heading={
          <Stack direction="row" spacing={1} alignItems='center' justifyContent={{xs: 'center', md: 'flex-start'}}>
            <img
              src={ImgLogo}
              alt='CliniOps Connect'
              title='CliniOps Connect'
              style={{ height: '44px' }}
            />
            <Typography variant="h2" component="h2" className="co-page-heading" sx={{ textAlign: { xs: 'center', md: 'left'} }}>
              CliniOps Connect
            </Typography>
          </Stack>
        }
        imgUrl={ImgCliniOpsConnect}
        imgTitle="CliniOps Connect"
      >
        <Typography sx={{ mt: 1, textAlign: {xs: 'center', md: 'left'} }}>
          Puts patients at the center of the clinical trials, and enables seamless participation via telemedicine, from the comfort of their homes or at their regular care facility. It increases patient engagement, retention, and protocol adherence, with regular reminders, notifications, alerts, educational materials et al.
        </Typography>
        <Box sx={{ mt: 2, textAlign: {xs: 'center', md: 'left'} }}>
          <Button variant="text" to={RouterList.product.connect} component={RouterLink} sx={{ ml: -1 }}>Read More</Button>
        </Box>
      </PageSectionLeftImg>
    </>
  );
}

export default template;