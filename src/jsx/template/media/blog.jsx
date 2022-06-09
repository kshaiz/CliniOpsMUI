import React from 'react';
import { Grid, Stack } from '@mui/material';
import { orange } from '@mui/material/colors';

import { PageHero, PageContent } from '../../component/page';


// Page Imports
import _0 from './blog/_0';
import _1 from './blog/_1';

const template = () => {
  return (
    <>
      <PageHero color={orange}>
        <_0 />
      </PageHero>
      <PageContent>
        <Grid item>
          <_1 />
        </Grid>
      </PageContent>
    </>
  );
}

export default template;