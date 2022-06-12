import React from 'react';
import { Typography, Stack } from '@mui/material';

import { PageSectionLeftImg } from '../../../component/page';

import ImgDataManagementPlan from '../../../../img/service/clinical-data-management/dataManagementPlan.jpeg';

const template = () => {
  return (
    <>
      <PageSectionLeftImg
        heading={
          <Stack direction="row" spacing={1} alignItems='center' justifyContent={{xs: 'center', md: 'flex-start'}}>
            <Typography variant="h2" component="h2" className="co-page-heading" sx={{ textAlign: { xs: 'center', md: 'left'} }}>
              Data Management Plan (DMP)
            </Typography>
          </Stack>
        }
        imgUrl={ImgDataManagementPlan}
        imgTitle="Data Management Plan (DMP)"
      >
        <Typography sx={{ mt: 1 }}>
          We develop comprehensive end to end DMP which includes:
          <ul>
            <li>Data entry and data tracking guidelines</li>
            <li>Quality control measures</li>
            <li>SAE reconciliation guidelines</li>
            <li>Discrepancy management</li>
            <li>Data transfer/extraction</li>
            <li>Database locking guidelines</li>
            <li>The team works on a robust portfolio and strives to ensure the highest quality.</li>
          </ul>
        </Typography>
      </PageSectionLeftImg>
    </>
  );
}

export default template;