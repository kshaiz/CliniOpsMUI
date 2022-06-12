import React from 'react';
import { Grid, Typography, Stack } from '@mui/material';

import { PageSectionRightImg } from '../../../component/page';

import ImgEConsent from '../../../../img/product/conduct/econsentcro.png';

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
          CliniOps eConsent module facilitate the consent process. CRO can use this module to monitor the compliance of the sites' consent process without compromising on patient PHI information. PHI information is redacted based on access control. Signed informed consent forms with the time stamp and geo location can be accessed through this module.
        </Typography>
      </PageSectionRightImg>
    </>
  );
}

export default template;