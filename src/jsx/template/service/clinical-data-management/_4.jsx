import React from 'react';
import { Grid, Typography } from '@mui/material';

import ImgExportData from '../../../../img/service/clinical-data-management/exportData.jpeg';

const template = () => {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <Typography variant="h2" component="h2" className="co-page-heading">
            Import of External Data
          </Typography>
          <Typography sx={{ mt: 1 }}>
            Import, Integration, and cleaning of external data (lab data, ECG, biological assays, Patient Diary, data from remote clinical monitoring devices, etc.) are an integral part of all studies. We design and validate programs to import and format data from third party vendors to ensure the integrity of the data. Our programs use verification checks to guarantee that the data imported from each external vendor is accurate and complete.
          </Typography>
        </Grid>
        <Grid item xs={6} sx={{ textAlign: 'center' }}>
          <img
            src={`${ImgExportData}`}
            className='co-image'
            alt='Import of External Data'
            title='Import of External Data'
          />
        </Grid>
      </Grid>
    </>
  );
}

export default template;