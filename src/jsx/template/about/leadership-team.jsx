import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { green } from '@mui/material/colors';

import { PageHero } from '../../component/page';

// Page Imports
import _1 from './leadership-team/_1';
import _2 from './leadership-team/_2';

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
      <Box
        sx={{ py: 5 }}
        style={{
            backgroundColor: green[50]
        }}>
        <Container>
          <Typography variant="h1" component="h1">
            Advisory
          </Typography>
        </Container>
      </Box>
      <Container sx={{ pt: 5, pb: 10 }}>
        <_2 />
      </Container>
    </>
  );
}

export default template;