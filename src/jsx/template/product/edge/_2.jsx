import React from 'react';
import { Grid, Typography, Stack } from '@mui/material';

import { PageSectionRightImg } from '../../../component/page';

import ImgEConsent from '../../../../img/product/edge/econsent.png';

const template = () => {
  return (
    <>
      <PageSectionRightImg
        heading={
          <Stack direction="row" spacing={1} alignItems='center' justifyContent={{xs: 'center', md: 'flex-start'}}>
            <Typography variant="h2" component="h2" className="co-page-heading">
              eConsent
            </Typography>
          </Stack>
        }
        imgUrl={ImgEConsent}
        imgTitle="eConsent"
      >
        <Typography sx={{ mt: 1 }}>
        CliniOps eConsent module ensures patient understanding of the study requirements and expectations and enforces study compliance. This allows the sites to conduct the eConsent process either in-person or remotely, including Ascent, LAR (Legally Authorized Representative) and other modes of consent. The module provides a controlled workflow with checks and balances to ensure the consent form is signed before any other study data is collected. During the consent process, the patient signature is seamlessly captured on the mobile device, along with the geo-location and the system-timestamp. Thus making the whole consenting process completely paperless and transparent. It also has the capabilities to ensure that the patient has the appropriate understanding of the study before they provide the consent.
        </Typography>
      </PageSectionRightImg>
    </>
  );
}

export default template;