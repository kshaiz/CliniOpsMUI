import React from 'react';
import { Grid, Typography } from '@mui/material';

import ImgDataManagementPlan from '../../../../img/service/clinical-data-management/dataManagementPlan.jpeg';

const template = () => {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <img
            src={`${ImgDataManagementPlan}`}
            className='co-image'
            alt='Data Management Plan (DMP)'
            title='Data Management Plan (DMP)'
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h2" component="h2">
            Data Management Plan (DMP)
          </Typography>
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
        </Grid>
      </Grid>
    </>
  );
}

export default template;