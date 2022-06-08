import React from 'react';
import { Container, Box, Grid, Divider } from '@mui/material';
import { teal } from '@mui/material/colors';

import { PageHero, PageContent } from '../../component/page';

// Page Imports
import _0 from './study-setup/_0';
import _1 from './study-setup/_1';
import _2 from './study-setup/_2';
import _3 from './study-setup/_3';
import _4 from './study-setup/_4';
import _5 from './study-setup/_5';

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
      </PageContent>
    </>
  );
}

export default template;