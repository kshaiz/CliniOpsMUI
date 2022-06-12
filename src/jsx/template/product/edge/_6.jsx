import React from 'react';
import { Grid, Typography, Stack } from '@mui/material';

import { PageSectionRightImg } from '../../../component/page';

import ImgLabIntegration from '../../../../img/product/edge/lab-integration.png';

const template = () => {
  return (
    <>
      <PageSectionRightImg
        heading={
          <Stack direction="row" spacing={1} alignItems='center' justifyContent={{xs: 'center', md: 'flex-start'}}>
            <Typography variant="h2" component="h2" className="co-page-heading">
              Lab Integration
            </Typography>
          </Stack>
        }
        imgUrl={ImgLabIntegration}
        imgTitle="Lab Integration"
      >
        <Typography sx={{ mt: 1 }}>
          CliniOps offers standard APIs to integrate with 3rd party laboratories. A study can get data from one or more central labs and each lab can be configured for lab normal ranges based on the protocol and lab manuals provided by the labs. CROs can get near real time access to lab data and reconcile those with the study data to speed up the review process and make faster decisions.
        </Typography>
      </PageSectionRightImg>
    </>
  );
}

export default template;