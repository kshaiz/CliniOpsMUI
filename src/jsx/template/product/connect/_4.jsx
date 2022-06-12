import React from 'react';
import { Grid, Typography, Stack } from '@mui/material';

import { PageSectionRightImg } from '../../../component/page';


import ImgEPro from '../../../../img/product/connect/epro.png';

const template = () => {
  return (
    <>
      <PageSectionRightImg
        heading={
          <Stack direction="row" spacing={1} alignItems='center' justifyContent={{xs: 'center', md: 'flex-start'}}>
            <Typography variant="h2" component="h2" className="co-page-heading" sx={{ textAlign: { xs: 'center', md: 'left'} }}>
              ePRO/eDiary
            </Typography>
          </Stack>
        }
        imgUrl={ImgEPro}
        imgTitle="ePRO/eDiary"
      >
        <Typography sx={{ mt: 1 }}>
          CliniOps ePRO module is designed to engage patients via smartphones, allowing them to report patient data remotely and more frequently. It also allows for seamless site-patient interactions, with various patient engagement features. This module has proven to increase both patient retention and protocol adherence. Patient data can be collected on either a provisioned device or in a BYOD (Bring Your Own Device) model. It also supports automated alerts and notifications to both patients and sites, via SMS, email or push notifications, as configured.
        </Typography>
      </PageSectionRightImg>
    </>
  );
}

export default template;