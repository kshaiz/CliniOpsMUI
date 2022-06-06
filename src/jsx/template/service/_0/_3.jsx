import React from 'react';
import { Grid, Box, Typography, Link } from '@mui/material';
import { blue } from '@mui/material/colors';

import RouterLink from '../../../router';

import ImgBiostatistics from '../../../../img/service/_0/biostatistics.jpeg';

const template = () => {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <img
            src={`${ImgBiostatistics}`}
            className='co-image'
            alt='Biostatistics &amp; Statistical Programming'
            title='Biostatistics &amp; Statistical Programming'
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h2" component="h2">
            Biostatistics &amp; Statistical Programming
          </Typography>
          <Typography sx={{ mt: 1 }}>
            At CliniOps we offer you high-quality, cost-effective, best in class biostatistics services. We have rich experience in biostatistics analysis &amp; reporting. Our biostatistics services offer you accurate data analysis and the ability to comply with regulatory requirements. Our services include Trial Design, Randomization, Statistical Analysis Plan (SAP), Statistical Programming, Tables, Listings and Figures (TLFs) and Clinical Study Report (CSR) generation. We have extensive experience in designing, analyzing and reporting clinical studies across a broad range of therapeutic areas, supported by robust processes. Our deep regulatory knowledge &amp; domain expertise in biostatistics services helps you to navigate the complexities of study design, calculation of sample sizes, study randomization, Data Visualization etc.
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Link className='co-link-more' underline="hover" href={RouterLink.service._3}>Read More</Link>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default template;