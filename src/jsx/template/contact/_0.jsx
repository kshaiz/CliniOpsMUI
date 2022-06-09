import React from 'react';
import { Grid, Divider } from '@mui/material';
import { teal } from '@mui/material/colors';

import { PageHero, PageContent } from '../../component/page';

// Page Imports
import _0 from './_0/_0';
import _1 from './_0/_1';
import _2 from './_0/_2';
import _3 from './_0/_3';

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
          <Divider className="co-divider" />
        </Grid>
        <Grid item>
          <_2 />
        </Grid>
        <Grid item>
          <Divider className="co-divider" />
        </Grid>
        <Grid item>
          <_3 />
        </Grid>
      </PageContent>
    </>
  );
}

export default template;