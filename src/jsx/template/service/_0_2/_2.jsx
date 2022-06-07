import React from 'react';
import { Grid, Typography } from '@mui/material';

import ImgDatabaseDesign from '../../../../img/service/_2/databaseDesign.jpeg';

const template = () => {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <Typography variant="h2" component="h2">
            Database Design
          </Typography>
          <Typography sx={{ mt: 1 }}>
            Our expert database designers works closely with multidiscipline trial team to incorporate and implement protocol requirements and user specifications for database design.
          </Typography>
          <Typography sx={{ mt: 1 }}>
            Our database development will include FDA compliance, database validation and documentation, version control tracking and documentation, product accountability.
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <img
            src={`${ImgDatabaseDesign}`}
            className='co-image'
            alt='Database Design'
            title='Database Design'
          />
        </Grid>
      </Grid>
    </>
  );
}

export default template;