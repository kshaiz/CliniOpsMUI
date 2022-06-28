import React from 'react';
import { Grid, Divider } from '@mui/material';
import { teal } from '@mui/material/colors';

import { PageHero, PageContent } from '../../component/page';

// Page Imports
import _0 from './connect/_0';
import _1 from './connect/_1';
import _2 from './connect/_2';
import _3 from './connect/_3';
import _4 from './connect/_4';
import _5 from './connect/_5';
import _6 from './connect/_6';

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
        <Grid item>
          <Divider className="co-divider" />
        </Grid>
        <Grid item>
          <_4 />
        </Grid>
        <Grid item>
          <Divider className="co-divider" />
        </Grid>
        <Grid item>
          <_5 />
        </Grid>
        <Grid item>
          <Divider className="co-divider" />
        </Grid>
        <Grid item>
          <_6 />
        </Grid>
      </PageContent>
    </>
  );
}

export default template;