import React from 'react';
import { Grid, Typography } from '@mui/material';

import ImgEConsent from '../../../../img/product/edge/econsent.png';

const template = () => {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <Typography variant="h2" component="h2">
            eConsent
          </Typography>
          <Typography sx={{ mt: 1 }}>
            CliniOps eConsent module ensures patient understanding of the study requirements and expectations and enforces study compliance. This allows the sites to conduct the eConsent process either in-person or remotely, including Ascent, LAR (Legally Authorized Representative) and other modes of consent. The module provides a controlled workflow with checks and balances to ensure the consent form is signed before any other study data is collected. During the consent process, the patient signature is seamlessly captured on the mobile device, along with the geo-location and the system-timestamp. Thus making the whole consenting process completely paperless and transparent. It also has the capabilities to ensure that the patient has the appropriate understanding of the study before they provide the consent.
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