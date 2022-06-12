import React from 'react';
import { Grid, Typography, Stack } from '@mui/material';

import { PageSectionLeftImg } from '../../../component/page';

import ImgEhrIntegration from '../../../../img/product/edge/ehr-integration.png';

const template = () => {
  return (
    <>
      <PageSectionLeftImg
        heading={
          <Stack direction="row" spacing={1} alignItems='center' justifyContent={{xs: 'center', md: 'flex-start'}}>
            <Typography variant="h2" component="h2" className="co-page-heading">
              EHR Integration
            </Typography>
          </Stack>
        }
        imgUrl={ImgEhrIntegration}
        imgTitle="EHR Integration"
      >
        <Typography sx={{ mt: 1 }}>
          CliniOps offers standard APIs to integrate with 3rd party applications. Electronic Health Records have remained isolated Islands for years. Now, with CliniOps and its partner ecosystem, you have access to over 450 sites, available with integrated EHR to EDC data to get your clinical trials started rapidly. SMART on FHIR standards for data transfer GCP-compliant process for controlling the data. CliniOps is agnostic to the Data Source and makes standardized data available from over 55 EHR systems.
        </Typography>
      </PageSectionLeftImg>
    </>
  );
}

export default template;