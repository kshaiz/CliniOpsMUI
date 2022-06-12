import React from 'react';
import { HashLink as RouterLink } from 'react-router-hash-link';
import { Box, Typography, Button, Stack } from '@mui/material';

import { PageSectionLeftImg } from '../../../component/page';

import RouterList from '../../../router';

import ImgStudySetup from '../../../../img/service/_0/study-setup.jpeg';

const template = () => {
  return (
    <>
      <PageSectionLeftImg
        heading={
          <Stack direction="row" spacing={1} alignItems='center' justifyContent={{xs: 'center', md: 'flex-start'}}>
            <Typography variant="h2" component="h2" className="co-page-heading" sx={{ textAlign: { xs: 'center', md: 'left'} }}>
              Study Setup
            </Typography>
          </Stack>
        }
        imgUrl={ImgStudySetup}
        imgTitle="Study Setup"
      >
        <Typography sx={{ mt: 1 }}>
          CliniOps offers a comprehensive study setup services. Our customized services are designed to help you configure your trials more efficiently. We will not only complement your internal team to achieve your goals but will also ensure transparency and collaboration through out the duration of your trial. Subject-matter experts who have experience with everything from simple single arm studies to complex multi-arm randomized global studies will form the core of the study setup team and will ensure that real-world issues are taken into account. We ensure timely study build cycles with early review phases and testing opportunities. In fact, before we provide you your study for User Acceptance Testing, it will go through a rigorous quality assurance and clinical review cycle.
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button variant="text" to={RouterList.service.studysetup} component={RouterLink} sx={{ ml: -1 }}>Read More</Button>
        </Box>
      </PageSectionLeftImg>
    </>
  );
}

export default template;