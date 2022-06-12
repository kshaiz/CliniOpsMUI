import React from 'react';
import { Typography, Stack } from '@mui/material';

import { PageSectionRightImg } from '../../../component/page';

import ImgProgramming from '../../../../img/service/biostatistic-programming/programming.jpeg';

const template = () => {
  return (
    <>
      <PageSectionRightImg
        heading={
          <Stack direction="row" spacing={1} alignItems='center' justifyContent={{xs: 'center', md: 'flex-start'}}>
            <Typography variant="h2" component="h2" className="co-page-heading" sx={{ textAlign: {xs: 'center', md: 'left'} }}>
              Statistical Analysis &amp; Programming
            </Typography>
          </Stack>
        }
        imgUrl={ImgProgramming}
        imgTitle="Statistical Analysis &amp; Programming"
      >
        <Typography sx={{ mt: 1 }}>
          We offer comprehensive statistical analysis services such as interim statistical analysis for adaptive designs and data and safety monitoring boards (DSMBs), data analysis for preparing integrated study reports, exploratory analysis for publications, abstracts, and marketing, and analysis of non-clinical trial data from epidemiologic studies and pre-clinical studies.
        </Typography>
      </PageSectionRightImg>
    </>
  );
}

export default template;