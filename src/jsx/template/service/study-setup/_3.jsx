import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';

import { PageSectionLeftImg } from '../../../component/page';

import ImgDataValidation from '../../../../img/service/study-setup/dataValidation.jpeg';

const template = () => {
  return (
    <>
      <PageSectionLeftImg
        heading={
          <Stack direction="row" spacing={1} alignItems='center' justifyContent={{xs: 'center', md: 'flex-start'}}>
            <Typography variant="h2" component="h2" className="co-page-heading" sx={{ textAlign: { xs: 'center', md: 'left'} }}>
              Edit Checks &amp; Data Validation
            </Typography>
          </Stack>
        }
        imgUrl={ImgDataValidation}
        imgTitle="Edit Checks &amp; Data Validation"
      >
        <Typography sx={{ mt: 1 }}>
          We work closely with sponsors to determine and document the checks, appropriate code lists, and the procedures that will be used for invalid results.
        </Typography>
        <Typography sx={{ mt: 1 }}>
          We implement and test the checks and codes in the clinical database management system.
        </Typography>
        <Typography sx={{ mt: 1 }}>
          Checks are run real time during data entry or at intervals and invalid results are fixed.
        </Typography>
      </PageSectionLeftImg>
    </>
  );
}

export default template;