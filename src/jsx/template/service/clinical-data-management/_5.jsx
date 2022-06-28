import React from 'react';
import { Typography, Stack } from '@mui/material';

import { PageSectionLeftImg } from '../../../component/page';

import ImgOtherData from '../../../../img/service/clinical-data-management/otherData.jpeg';

const template = () => {
  return (
    <>
      <PageSectionLeftImg
        heading={
          <Stack direction="row" spacing={1} alignItems='center' justifyContent={{xs: 'center', md: 'flex-start'}}>
            <Typography variant="h2" component="h2" className="co-page-heading" sx={{ textAlign: { xs: 'center', md: 'left'} }}>
              Other Data Management Services
            </Typography>
          </Stack>
        }
        imgUrl={ImgOtherData}
        imgTitle="Other Data Management Services"
      >
        <Typography sx={{ mt: 1 }}>
          <ul style={{ listStylePosition: "inside" }}>
            <li>e-Source data capture and integration training.</li>
            <li>Development of dashboards and custom reports.</li>
            <li>24/7 helpdesk support</li>
            <li>Data quality control audits</li>
          </ul>
        </Typography>
      </PageSectionLeftImg>
    </>
  );
}

export default template;