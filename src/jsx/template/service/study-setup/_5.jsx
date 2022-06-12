import React from 'react';
import { Grid, Typography, Stack } from '@mui/material';

import { PageSectionLeftImg } from '../../../component/page';

import ImgUat from '../../../../img/service/study-setup/uat.jpeg';

const template = () => {
  return (
    <>
      <PageSectionLeftImg
        heading={
          <Stack direction="row" spacing={1} alignItems='center' justifyContent={{xs: 'center', md: 'flex-start'}}>
            <Typography variant="h2" component="h2" className="co-page-heading" sx={{ textAlign: { xs: 'center', md: 'left'} }}>
              Validation &amp; UAT
            </Typography>
          </Stack>
        }
        imgUrl={ImgUat}
        imgTitle="Validation &amp; UAT"
      >
        <Typography sx={{ mt: 1 }}>
          We perform self-testing of the configuration and setup before releasing it for UAT.
        </Typography>
        <Typography sx={{ mt: 1 }}>
          Our designers address UAT findings to finally build a data entry system that will be accurate, complete, and user friendly.
        </Typography>
        <Typography sx={{ mt: 1 }}>
          We provide complete validation documentation (IQ, OQ &amp; PQ) as per regulatory standards.
        </Typography>
      </PageSectionLeftImg>
    </>
  );
}

export default template;