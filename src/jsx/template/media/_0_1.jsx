import React from 'react';
import { Grid, Stack } from '@mui/material';
import { orange } from '@mui/material/colors';

import { PageHero, PageContent } from '../../component/page';

// Page Imports
import _0 from './_0_1/_0';
import _2022 from './_0_1/_2022';
import _2021 from './_0_1/_2021';

const template = () => {
  return (
    <>
      <PageHero color={orange}>
        <_0 />
      </PageHero>
      <PageContent>
        <Grid item>
          <Stack direction="column" spacing={10} style={{ maxWidth: '100%' }}>
            <_2022 />
            <_2021 />
          </Stack>
        </Grid>
      </PageContent>
    </>
  );
}

export default template;