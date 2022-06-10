import React from 'react';
import { Grid, Typography } from '@mui/material';

import ImgMedicalCoding from '../../../../img/service/clinical-data-management/medicalCoding.jpeg';

const template = () => {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <img
            src={`${ImgMedicalCoding}`}
            className='co-image'
            alt='Medical Coding'
            title='Medical Coding'
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h2" component="h2" className="co-page-heading">
            Medical Coding
          </Typography>
          <Typography sx={{ mt: 1 }}>
            Irrespective of the type of dictionary your study needs, our highly adaptable and automated dictionary coding platform will accurately and reproducibly code your medical history, therapy, procedure, and adverse event terms.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default template;