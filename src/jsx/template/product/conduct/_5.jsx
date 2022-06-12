import React from 'react';
import { Grid, Typography, Stack } from '@mui/material';

import { PageSectionLeftImg } from '../../../component/page';

import ImgIRT from '../../../../img/product/conduct/eirtcro.png';

const template = () => {
  return (
    <>
      <PageSectionLeftImg
        heading={
          <Stack direction="row" spacing={1} alignItems='center' justifyContent={{xs: 'center', md: 'flex-start'}}>
            <Typography variant="h2" component="h2" className="co-page-heading" sx={{ textAlign: { xs: 'center', md: 'left'} }}>
              IRT
            </Typography>
          </Stack>
        }
        imgUrl={ImgIRT}
        imgTitle="IRT"
      >
        <Typography sx={{ mt: 1 }}>
          CliniOps IRT module (Interactive Response Technology) leverages interactive web response systems (IWRS) to support patient randomization for blinded studies. CROs can use this module to monitor the IP inventory at site on a real-time basis and take decisions accordingly.
        </Typography>
      </PageSectionLeftImg>
    </>
  );
}

export default template;