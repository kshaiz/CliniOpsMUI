import React from 'react';
import { Grid, Typography, Stack } from '@mui/material';

import { PageSectionRightImg } from '../../../component/page';

import ImgCoderCro from '../../../../img/product/conduct/codercro.png';

const template = () => {
  return (
    <>
      <PageSectionRightImg
        heading={
          <Stack direction="row" spacing={1} alignItems='center' justifyContent={{xs: 'center', md: 'flex-start'}}>
            <Typography variant="h2" component="h2" className="co-page-heading" sx={{ textAlign: { xs: 'center', md: 'left'} }}>
              Coder
            </Typography>
          </Stack>
        }
        altHeading={false}
        imgUrl={ImgCoderCro}
        imgTitle="Coder"
      >
        <Typography sx={{ mt: 1 }}>
          CliniOps Coder module provides auto-coding functionality with speed and accuracy to support coding for any clinical trial, including customizable workflows for manual coding when needed. This module maps verbatim terms to standard codes based on World Health Organization Drug Dictionaries (WHODrug) and the Medical Dictionary for Regulatory Affairs (MedDRA). This module seamlessly integrates with EDC and Coded values are stored directly within the CliniOps EDC database.
        </Typography>
      </PageSectionRightImg>
    </>
  );
}

export default template;