import React from 'react';
import { Grid, Typography, Stack } from '@mui/material';

import { PageSectionRightImg } from '../../../component/page';

import ImgEIrt from '../../../../img/product/edge/eirt.png';

const template = () => {
  return (
    <>
      <PageSectionRightImg
        heading={
          <Stack direction="row" spacing={1} alignItems='center' justifyContent={{xs: 'center', md: 'flex-start'}}>
            <Typography variant="h2" component="h2" className="co-page-heading" sx={{ textAlign: { xs: 'center', md: 'left'} }}>
              eIRT
            </Typography>
          </Stack>
        }
        imgUrl={ImgEIrt}
        imgTitle="eIRT"
      >
        <Typography sx={{ mt: 1 }}>
        CliniOps eIRT module (Electronic Interactive Response Technology) leverages various web and mobile technologies to support patient randomization for blinded studies. It can support studies with simple randomization to complex stratified randomization including cross-over trials. It also simplifies the process of assigning randomization codes based on barcodes and minimize errors.
        </Typography>
      </PageSectionRightImg>
    </>
  );
}

export default template;