import React from 'react';
import { Grid, Typography, Stack } from '@mui/material';

import { PageSectionRightImg } from '../../../component/page';

import ImgEConsent from '../../../../img/product/connect/econsent.png';

const template = () => {
  return (
    <>
      <PageSectionRightImg
        heading={
          <Stack direction="row" spacing={1} alignItems='center' justifyContent={{xs: 'center', md: 'flex-start'}}>
            <Typography variant="h2" component="h2" className="co-page-heading" sx={{ textAlign: { xs: 'center', md: 'left'} }}>
              eConsent
            </Typography>
          </Stack>
        }
        imgUrl={ImgEConsent}
        imgTitle="eConsent"
      >
        <Typography sx={{ mt: 1 }}>
          CliniOps eConsent module ensures patient understanding of the study requirements and expectations and enforces study compliance. This module guides the subject through the consent process so that they can get all the right information regarding the risk and benefits in the trials and hence make more informed decision regarding enrolling in a study. Subjects can sign the informed consent either in-person at the clinic or remotely over a tele-visit session.
        </Typography>
      </PageSectionRightImg>
    </>
  );
}

export default template;