import React from 'react';
import { Grid, Typography, Stack } from '@mui/material';

import { PageSectionLeftImg } from '../../../component/page';

import ImgEDC from '../../../../img/product/conduct/edccro.png';

const template = () => {
  return (
    <>
      <PageSectionLeftImg
        heading={
          <Stack direction="row" spacing={1} alignItems='center' justifyContent={{xs: 'center', md: 'flex-start'}}>
            <Typography variant="h2" component="h2" className="co-page-heading" sx={{ textAlign: { xs: 'center', md: 'left'} }}>
              EDC
            </Typography>
          </Stack>
        }
        imgUrl={ImgEDC}
        imgTitle="EDC"
      >
        <Typography sx={{ mt: 1 }}>
          CliniOps EDC module supports all the clinical data management activities that are performed throughout the study including study setup, study conduct and study closeout phase. Data managers can generate real-time queries and engage with the sites in collaborative manner, while Data monitors get instant visibility of study KPI's with real-time dashboards, reports, analytics and several rich capabilities. Instant access to the study data shortens study timelines, lowers cost, and significantly increases data quality. Data can also be seamlessly exported in various formats including but not limited to xls, CDISC odm, xpt, pdf et al.
        </Typography>
      </PageSectionLeftImg>
    </>
  );
}

export default template;