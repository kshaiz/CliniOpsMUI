import React from 'react';
import { Grid, Divider } from '@mui/material';
import { teal } from '@mui/material/colors';

import { PageHero, PageContent } from '../../component/page';

// Page Imports
import _0 from './clinical-data-management/_0';
import _1 from './clinical-data-management/_1';
import _2 from './clinical-data-management/_2';
import _3 from './clinical-data-management/_3';
import _4 from './clinical-data-management/_4';
import _5 from './clinical-data-management/_5';

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
        <Grid item>
          <Divider />
        </Grid>
        <Grid item>
          <_2 />
        </Grid>
        <Grid item>
          <Divider />
        </Grid>
        <Grid item>
          <_3 />
        </Grid>
        <Grid item>
          <Divider />
        </Grid>
        <Grid item>
          <_4 />
        </Grid>
        <Grid item>
          <Divider />
        </Grid>
        <Grid item>
          <_5 />
        </Grid>
      </PageContent>
    </>
  );
}

export default template;