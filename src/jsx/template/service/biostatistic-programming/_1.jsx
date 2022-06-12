import React from 'react';
import { Typography, Stack } from '@mui/material';

import { PageSectionLeftImg } from '../../../component/page';

import ImgStatisticalAnalysisPlan from '../../../../img/service/biostatistic-programming/statisticalAnalysisPlan.jpeg';

const template = () => {
  return (
    <>
      <PageSectionLeftImg
        heading={
          <Stack direction="row" spacing={1} alignItems='center' justifyContent={{xs: 'center', md: 'flex-start'}}>
            <Typography variant="h2" component="h2" className="co-page-heading" sx={{ textAlign: { xs: 'center', md: 'left'} }}>
              Statistical Analysis Plan (SAP)
            </Typography>
          </Stack>
        }
        imgUrl={ImgStatisticalAnalysisPlan}
        imgTitle="Statistical Analysis Plan (SAP)"
      >
        <Typography sx={{ mt: 1 }}>
          For any phase of drug development, our highly experienced biostatisticians and programmers work closely with the study team to develop study design, perform sample size calculation and power determination, develop randomization scheme, write statistical analysis section of protocols, and write SAP detailing statistical methodologies. The SAP includes detailed descriptions of data consistency checks, data listings, and tables and graphs. Our professional programmers create and finalize programming processes for data consistency checks, data listings, and graphics.
        </Typography>
      </PageSectionLeftImg>
    </>
  );
}

export default template;