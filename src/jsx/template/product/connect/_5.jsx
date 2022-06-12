import React from 'react';
import { HashLink as RouterLink } from 'react-router-hash-link';
import { Grid, Typography, Stack } from '@mui/material';

import { PageSectionLeftImg } from '../../../component/page';

import RouterList from '../../../router';

import ImgWearables from '../../../../img/product/connect/wearablesnew.png';

const template = () => {
  return (
    <>
      <PageSectionLeftImg
        heading={
          <Stack direction="row" spacing={1} alignItems='center' justifyContent={{xs: 'center', md: 'flex-start'}}>
            <Typography variant="h2" component="h2" className="co-page-heading" sx={{ textAlign: {xs: 'center', md: 'left'} }}>
              Wearables &amp; Connected Devices
            </Typography>
          </Stack>
        }
        imgUrl={ImgWearables}
        imgTitle="Wearables &amp; Connected Devices"
      >
        <Typography sx={{ mt: 1 }}>
          CliniOps mobile app can seamlessly connect with several wearables, sensors and connected devices. CliniOps system is integrated with devices to collect heart rate, blood oxygen, electrocardiogram, respiratory rate, blood pressure, temperature et al, to name a few. Device data is collected via the app from patient home and is transmitted to the patient database that can be accessed securely by the study team based on their access control. The system supports several data formats including alpha, numeric, image, voice, video, wave formats etc. CliniOps also has built in real-time alerts, that gets triggered if the device data shows abnormal fluctuations, or beyond normal ranges.
        </Typography>
      </PageSectionLeftImg>
    </>
  );
}

export default template;