import React from 'react';
import { Grid } from '@mui/material';
import { blueGrey } from '@mui/material/colors';

import { PageHero, PageContent } from '../../component/page';

// Page Imports
import _0 from './cookie/_0';
import _1 from './cookie/_1';

const template = () => {
  return (
    <>
      <PageHero color={blueGrey}>
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