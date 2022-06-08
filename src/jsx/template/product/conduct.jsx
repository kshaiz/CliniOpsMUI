import React from 'react';
import { Grid, Divider } from '@mui/material';
import { purple } from '@mui/material/colors';

import { PageHero, PageContent } from '../../component/page';

// Page Imports
import _0 from './conduct/_0';
import _1 from './conduct/_1';
import _2 from './conduct/_2';
import _3 from './conduct/_3';
import _4 from './conduct/_4';
import _5 from './conduct/_5';
import _6 from './conduct/_6';
import _7 from './conduct/_7';
import _8 from './conduct/_8';

const template = () => {
  return (
    <>
      <PageHero color={purple}>
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
        <Grid item>
          <Divider className="co-divider" />
        </Grid>
        <Grid item>
          <_7 />
        </Grid>
        <Grid item>
          <Divider className="co-divider" />
        </Grid>
        <Grid item>
          <_8 />
        </Grid>
      </PageContent>
    </>
  );
}

export default template;