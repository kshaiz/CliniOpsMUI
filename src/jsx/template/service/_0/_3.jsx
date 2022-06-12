import React from 'react';
import { HashLink as RouterLink } from 'react-router-hash-link';
import { Grid, Box, Typography, Button, Stack } from '@mui/material';

import { PageSectionLeftImg } from '../../../component/page';

import RouterList from '../../../router';

import ImgBiostatistics from '../../../../img/service/_0/biostatistics.jpeg';

const template = () => {
  return (
    <>
      <PageSectionLeftImg
        heading={
          <Stack direction="row" spacing={1} alignItems='center' justifyContent={{xs: 'center', md: 'flex-start'}}>
            <Typography variant="h2" component="h2" className="co-page-heading" sx={{ textAlign: {xs: 'center', md: 'left'} }}>
              Biostatistics &amp; Statistical Programming
            </Typography>
          </Stack>
        }
        imgUrl={ImgBiostatistics}
        imgTitle="Biostatistics &amp; Statistical Programming"
      >
        <Typography sx={{ mt: 1 }}>
          At CliniOps we offer you high-quality, cost-effective, best in class biostatistics services. We have rich experience in biostatistics analysis &amp; reporting. Our biostatistics services offer you accurate data analysis and the ability to comply with regulatory requirements. Our services include Trial Design, Randomization, Statistical Analysis Plan (SAP), Statistical Programming, Tables, Listings and Figures (TLFs) and Clinical Study Report (CSR) generation. We have extensive experience in designing, analyzing and reporting clinical studies across a broad range of therapeutic areas, supported by robust processes. Our deep regulatory knowledge &amp; domain expertise in biostatistics services helps you to navigate the complexities of study design, calculation of sample sizes, study randomization, Data Visualization etc.
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button variant="text" to={RouterList.service.biostatisticprogramming} component={RouterLink} sx={{ ml: -1 }}>Read More</Button>
        </Box>
      </PageSectionLeftImg>
    </>
  );
}

export default template;