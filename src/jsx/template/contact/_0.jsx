import React from 'react';
import { Grid, Divider, Stack } from '@mui/material';
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
        <Grid item xs={12}>
          <Grid container spacing={{xs:5, md:10}}>
            <Grid item xs={12} md={6}>
              <_1 />
            </Grid>
            <Grid item xs={12} md={6}>
              <Divider sx={{ mb: 3, mt: -2, display: {xs:'block', md:'none'} }} />
              <Stack spacing={4}>
                <_2 />
                <Divider />
                <_3 />
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </PageContent>
    </>
  );
}

export default template;