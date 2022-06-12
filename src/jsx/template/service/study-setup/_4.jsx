import React from 'react';
import { Grid, Box, Typography, Button, Stack } from '@mui/material';

import { PageSectionRightImg } from '../../../component/page';

import ImgConfig from '../../../../img/service/study-setup/config.jpeg';

const template = () => {
  return (
    <>
      <PageSectionRightImg
        heading={
          <Stack direction="row" spacing={1} alignItems='center' justifyContent={{xs: 'center', md: 'flex-start'}}>
            <Typography variant="h2" component="h2" className="co-page-heading" sx={{ textAlign: { xs: 'center', md: 'left'} }}>
              Interactive Response Technology (IRT) setup &amp; Configuration
            </Typography>
          </Stack>
        }
        imgUrl={ImgConfig}
        imgTitle="Interactive Response Technology (IRT) setup &amp; Configuration"
      >
        <Typography sx={{ mt: 1 }}>
          Our IVRS/IWRS integrations provide real-time data tracking for randomization.
        </Typography>
        <Typography sx={{ mt: 1 }}>
          It can seamlessly integrate with the eClinical landscape, is compliant with all regulatory requirements, and meets international standards.
        </Typography>
      </PageSectionRightImg>
    </>
  );
}

export default template;