import React from 'react';
import { Grid, Stack } from '@mui/material';
import { orange } from '@mui/material/colors';

import { PageHero, PageContent } from '../../component/page';

// Page Imports
import _0 from './newsroom/_0';
import _2022 from './newsroom/_2022';
import _2021 from './newsroom/_2021';
import _2020 from './newsroom/_2020';
import _2019 from './newsroom/_2019';
import _2018 from './newsroom/_2018';
import _2017 from './newsroom/_2017';
import _2016 from './newsroom/_2016';
import _2015 from './newsroom/_2015';
import _2014 from './newsroom/_2014';

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
            <_2020 />
            <_2019 />
            <_2018 />
            <_2017 />
            <_2016 />
            <_2015 />
            <_2014 />
          </Stack>
        </Grid>
      </PageContent>
    </>
  );
}

export default template;