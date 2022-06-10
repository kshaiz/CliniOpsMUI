import React from 'react';
import { Grid, Typography } from '@mui/material';


import ImgEConsent from '../../../../img/product/connect/econsent.png';

const template = () => {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <Typography variant="h2" component="h2" className="co-page-heading">
            eConsent
          </Typography>
          <Typography sx={{ mt: 1 }}>
            CliniOps eConsent module ensures patient understanding of the study requirements and expectations and enforces study compliance. This module guides the subject through the consent process so that they can get all the right information regarding the risk and benefits in the trials and hence make more informed decision regarding enrolling in a study. Subjects can sign the informed consent either in-person at the clinic or remotely over a tele-visit session.
          </Typography>
        </Grid>
        <Grid item xs={6} textAlign="center">
          <img
            src={`${ImgEConsent}`}
            className='co-image'
            alt='eConsent'
            title='eConsent'
          />
        </Grid>
      </Grid>
    </>
  );
}

export default template;