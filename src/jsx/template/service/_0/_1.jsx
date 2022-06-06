import React from 'react';
import { Grid, Box, Typography, Link } from '@mui/material';

import RouterLink from '../../../router';

import ImgStudySetup from '../../../../img/service/_0/study-setup.jpeg';

const template = () => {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <img
            src={`${ImgStudySetup}`}
            className='co-image'
            alt='Study Setup'
            title='Study Setup'
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h2" component="h2">
            Study Setup
          </Typography>
          <Typography sx={{ mt: 1 }}>
            CliniOps offers a comprehensive study setup services. Our customized services are designed to help you configure your trials more efficiently. We will not only complement your internal team to achieve your goals but will also ensure transparency and collaboration through out the duration of your trial. Subject-matter experts who have experience with everything from simple single arm studies to complex multi-arm randomized global studies will form the core of the study setup team and will ensure that real-world issues are taken into account. We ensure timely study build cycles with early review phases and testing opportunities. In fact, before we provide you your study for User Acceptance Testing, it will go through a rigorous quality assurance and clinical review cycle.
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Link className='co-link-more' underline="hover" href={RouterLink.service._1}>Read More</Link>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default template;