import React from 'react';
import { Grid, Typography, Stack } from '@mui/material';

import { PageSectionRightImg } from '../../../component/page';

import ImgETMF from '../../../../img/product/conduct/eTMF.png';

const template = () => {
  return (
    <>
      <PageSectionRightImg
        heading={
          <Stack direction="row" spacing={1} alignItems='center' justifyContent={{xs: 'center', md: 'flex-start'}}>
            <Typography variant="h2" component="h2" className="co-page-heading">
              eTMF
            </Typography>
          </Stack>
        }
        imgUrl={ImgETMF}
        imgTitle="eTMF"
      >
        <Typography sx={{ mt: 1 }}>
          CliniOps eTMF module is architected out of the DIA Reference model, and brings the trial master file requirements from source, to provide the clinical trials a very rich trial experience. End to End Audit Trails, helps you stay inspection ready throughout the study, and meet any inspection and compliance requirements. The eTMF module also offers customizable dashboards to keep track of essential study metrics on document status.
        </Typography>
      </PageSectionRightImg>
    </>
  );
}

export default template;