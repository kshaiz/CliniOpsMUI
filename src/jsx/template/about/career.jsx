import React from 'react';
import { Grid } from '@mui/material';
import { yellow } from '@mui/material/colors';

import { PageHero, PageContent } from '../../component/page';

// Page Imports
import _0 from './career/_0';
import _1 from './career/_1';

const template = () => {
  return (
    <>
      <PageHero color={yellow}>
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