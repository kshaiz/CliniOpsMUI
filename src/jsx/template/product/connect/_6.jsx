import React from 'react';
import { Grid, Typography } from '@mui/material';


import ImgNewsletter from '../../../../img/product/connect/newsletters.png';

const template = () => {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <Typography variant="h2" component="h2">
            Videos &amp; Newsletters
          </Typography>
          <Typography sx={{ mt: 1 }}>
            An important aspect of decentralized trials is to keep the patient constantly engaged with the study team. This will ensure that the patient dosent feel disconnected and gradually gains the confidence and gets comfortable with the remote model. One important way to achieve this, is to keep the patient constantly aware of study related details throughout the process. The Patient App supports study documents, videos, newsletters and other related information that can be shared by the study as the study progresses.
          </Typography>
        </Grid>
        <Grid item xs={6} textAlign="center">
          <img
            src={`${ImgNewsletter}`}
            className='co-image'
            alt='Videos &amp; Newsletters'
            title='Videos &amp; Newsletters'
          />
        </Grid>
      </Grid>
    </>
  );
}

export default template;