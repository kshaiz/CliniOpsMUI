import React from 'react';
import { Grid, Box, Typography, Link } from '@mui/material';

import RouterLink from '../../../router';

import ImgClinicalDataManagement from '../../../../img/service/_0/data-mgmt.jpeg';

const template = () => {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <Typography variant="h2" component="h2">
            Clinical Data Management
          </Typography>
          <Typography sx={{ mt: 1 }}>
            Our team of experienced professionals can help you in all aspects of clinical data management challenges and collaborate with you in the process of collection, cleaning, and management of subject data in compliance with regulatory standards. Our goal is to provide you with error free, valid and statistically sound data for analysis. Our clinical data management specialists will translate your clinical trial protocol into an intuitively designed data capture system that will accurately meet the data capture requirements of your study. So, while our team of professionals manages all your data, you spend less time on training and more time running the trial efficiently. With continuous access to your data and total transparency in the entire process, you stay in complete control of your data.
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Link className='co-link-more' underline="hover" href={RouterLink.service._2}>Read More</Link>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img
            src={`${ImgClinicalDataManagement}`}
            className='co-image'
            alt='Clinical Data Management'
            title='Clinical Data Management'
          />
        </Grid>
      </Grid>
    </>
  );
}

export default template;