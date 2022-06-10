import React from 'react';
import { Grid, Typography } from '@mui/material';

import ImgOtherData from '../../../../img/service/clinical-data-management/otherData.jpeg';

const template = () => {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <img
            src={`${ImgOtherData}`}
            className='co-image'
            alt='Other Data Management Services'
            title='Other Data Management Services'
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h2" component="h2" className="co-page-heading">
            Other Data Management Services
          </Typography>
          <Typography sx={{ mt: 1 }}>
            <ul>
              <li>e-Source data capture and integration training.</li>
              <li>Development of dashboards and custom reports.</li>
              <li>24/7 helpdesk support</li>
              <li>Data quality control audits</li>
            </ul>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default template;