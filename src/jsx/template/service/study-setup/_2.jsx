import React from 'react';
import { Typography, Stack } from '@mui/material';

import { PageSectionRightImg } from '../../../component/page';

import ImgDataConfig from '../../../../img/service/study-setup/dataConfig.jpeg';

const template = () => {
  return (
    <>
      <PageSectionRightImg
        heading={
          <Stack direction="row" spacing={1} alignItems='center' justifyContent={{xs: 'center', md: 'flex-start'}}>
            <Typography variant="h2" component="h2" className="co-page-heading" sx={{ textAlign: {xs: 'center', md: 'left'} }}>
              eCRF and ePRO Configuration
            </Typography>
          </Stack>
        }
        imgUrl={ImgDataConfig}
        imgTitle="eCRF and ePRO Configuration"
      >
        <Typography sx={{ mt: 1 }}>
          Our experts will take care of your complicated electronic data collection forms, design branching questions, and develop in-form and cross-form validations and edit checks to maximize data cleaning at the field level.
        </Typography>
        <Typography sx={{ mt: 1 }}>
          Our product also offers a library of forms in various therapeutic areas which are CDASH and CDISC compliant as per industry standards.
        </Typography>
        <Typography sx={{ mt: 1 }}>
          We also provide configuration support for multi-lingual eCRF forms, and any localization support needed to configure the application workflow to align with the site’s local processes.
        </Typography>
      </PageSectionRightImg>
    </>
  );
}

export default template;