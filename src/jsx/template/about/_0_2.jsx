import React from 'react';
import { Container, Typography } from '@mui/material';
import { green } from '@mui/material/colors';

import { PageHero } from '../../component/page';

// Page Imports
import _1 from './_0_2/_1';
import _2 from './_0_2/_2';

const template = () => {
  return (
    <>
      <PageHero color={green}>
        <Typography variant="h1" component="h1">
          Management
        </Typography>
      </PageHero>
      <Container sx={{ pt: 5, pb: 10 }}>
        <_1 />
      </Container>
      <PageHero color={green}>
        <Typography variant="h1" component="h1">
          Advisory
        </Typography>
      </PageHero>
      <Container sx={{ pt: 5, pb: 10 }}>
        <_2 />
      </Container>
    </>
  );
}

export default template;