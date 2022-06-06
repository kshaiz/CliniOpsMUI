import React from 'react';
import { Typography } from '@mui/material';

const template = () => {
  return (
    <>
      <Typography variant="h1" component="h1">
        Biostatistics &amp; Statistical Programming
      </Typography>
      <Typography variant="subtitle1" sx={{ mt: 1 }}>
        At CliniOps we offer you high-quality, cost-effective, best in class biostatistics services. We have rich experience in biostatistics analysis &amp; reporting. Our biostatistics services offer you accurate data analysis and the ability to comply with regulatory requirements. Our services include Trial Design, Randomization, Statistical Analysis Plan (SAP), Statistical Programming, Tables, Listings and Figures (TLFs) and Clinical Study Report (CSR) generation. We have extensive experience in designing, analyzing and reporting clinical studies across a broad range of therapeutic areas, supported by robust processes. Our deep regulatory knowledge &amp; domain expertise in biostatistics services helps you to navigate the complexities of study design, calculation of sample sizes, study randomization, Data Visualization etc.
      </Typography>
    </>
  );
}

export default template;