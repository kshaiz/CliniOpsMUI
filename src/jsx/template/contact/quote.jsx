import React from 'react';
import { Grid, Divider } from '@mui/material';
import { teal } from '@mui/material/colors';

import { PageHero, PageContent } from '../../component/page';

// Page Imports
import _0 from './quote/_0';
import _1 from './quote/_1';

const template = () => {
  return (
    <>
      <PageHero color={teal}>
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