import React from 'react';
import { HashLink as RouterLink } from 'react-router-hash-link';
import { Grid, Box, Typography, Button, Stack } from '@mui/material';

import { PageSectionRightImg } from '../../../component/page';

import RouterList from '../../../router';

import ImgClinicalDataManagement from '../../../../img/service/_0/data-mgmt.jpeg';

const template = () => {
  return (
    <>
      <PageSectionRightImg
        heading={
          <Stack direction="row" spacing={1} alignItems='center' justifyContent={{xs: 'center', md: 'flex-start'}}>
            <Typography variant="h2" component="h2" className="co-page-heading" sx={{ textAlign: { xs: 'center', md: 'left'} }}>
              Clinical Data Management
            </Typography>
          </Stack>
        }
        imgUrl={ImgClinicalDataManagement}
        imgTitle="Clinical Data Management"
      >
        <Typography sx={{ mt: 1 }}>
          Our team of experienced professionals can help you in all aspects of clinical data management challenges and collaborate with you in the process of collection, cleaning, and management of subject data in compliance with regulatory standards. Our goal is to provide you with error free, valid and statistically sound data for analysis. Our clinical data management specialists will translate your clinical trial protocol into an intuitively designed data capture system that will accurately meet the data capture requirements of your study. So, while our team of professionals manages all your data, you spend less time on training and more time running the trial efficiently. With continuous access to your data and total transparency in the entire process, you stay in complete control of your data.
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button variant="text" to={RouterList.service.clinicaldatamanagement} component={RouterLink} sx={{ ml: -1 }}>Read More</Button>
        </Box>
      </PageSectionRightImg>
    </>
  );
}

export default template;