import React from 'react';
import { Grid, Typography, Stack } from '@mui/material';

import { PageSectionLeftImg } from '../../../component/page';

import ImgTelemedicine from '../../../../img/product/edge/telemedicine.png';

const template = () => {
  return (
    <>
      <PageSectionLeftImg
        heading={
          <Stack direction="row" spacing={1} alignItems='center' justifyContent={{xs: 'center', md: 'flex-start'}}>
            <Typography variant="h2" component="h2" className="co-page-heading" sx={{ textAlign: { xs: 'center', md: 'left'} }}>
              Telemedicine
            </Typography>
          </Stack>
        }
        imgUrl={ImgTelemedicine}
        imgTitle="Telemedicine"
      >
        <Typography sx={{ mt: 1 }}>
          Telemedicine module offers the study team the option to interact with the patient, via a secure digital platform. The study team can initiate the interaction via the mobile app, or the web portal, over a built-in video conference functionality to connect with the patient on his/her Smartphone, Tablet or Web browser. This not only allows the site, an option to convert some in-person patient visits to tele-visits but also significantly increases the outreach for patient recruitment and brings diversity in clinical trials. It also helps with patient retention, increases patient engagement and protocol adherence, by constantly interacting with patients via alerts, reminders and notifications.
        </Typography>
      </PageSectionLeftImg>
    </>
  );
}

export default template;