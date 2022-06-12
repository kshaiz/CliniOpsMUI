import React from 'react';
import { Grid, Typography, Stack } from '@mui/material';

import { PageSectionLeftImg } from '../../../component/page';

import ImgTelemedicine from '../../../../img/product/connect/telemedicineone.png';

const template = () => {
  return (
    <>
      <PageSectionLeftImg
        heading={
          <Stack direction="row" spacing={1} alignItems='center' justifyContent={{xs: 'center', md: 'flex-start'}}>
            <Typography variant="h2" component="h2" className="co-page-heading">
              Telemedicine
            </Typography>
          </Stack>
        }
        imgUrl={ImgTelemedicine}
        imgTitle="Telemedicine"
      >
        <Typography sx={{ mt: 1 }}>
          Telemedicine module offers the patient the option to interact with the physician and/or nurse, from the comfort of their home. This is conducted via the mobile app over a built-in video conference functionality on the patient's Smartphone, Tablet or Web browser over a secured network. So, patient has the choice of an onsite visit, tele-visit, or even a home visit by a mobile visiting nurse or a phlebotomist. This significantly increases patient retention, patient engagement and protocol adherence.
        </Typography>
      </PageSectionLeftImg>
    </>
  );
}

export default template;