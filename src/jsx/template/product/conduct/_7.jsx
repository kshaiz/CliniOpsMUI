import React from 'react';
import { Grid, Typography, Stack } from '@mui/material';

import { PageSectionLeftImg } from '../../../component/page';

import ImgCTMS from '../../../../img/product/conduct/ctmscro.png';

const template = () => {
  return (
    <>
      <PageSectionLeftImg
        heading={
          <Stack direction="row" spacing={1} alignItems='center' justifyContent={{xs: 'center', md: 'flex-start'}}>
            <Typography variant="h2" component="h2" className="co-page-heading" sx={{ textAlign: { xs: 'center', md: 'left'} }}>
              CTMS
            </Typography>
          </Stack>
        }
        imgUrl={ImgCTMS}
        imgTitle="CTMS"
      >
        <Typography sx={{ mt: 1 }}>
        CliniOps CTMS module is designed to monitor study progress and performance, along with tracking deadlines and milestones. This module supports the clinical operations team with an adaptive framework, and exceptional breadth of functionality that enables rapid and flexible deployment, all with the power of other built-in modules. This module offers comprehensive management of trial planning, document management, country and site progress, monitoring activities, along with state-of-the-art reporting capabilities.
        </Typography>
      </PageSectionLeftImg>
    </>
  );
}

export default template;