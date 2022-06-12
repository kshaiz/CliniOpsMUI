import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { teal } from '@mui/material/colors';

import { PageHero, PageContent } from '../../component/page';

import ImgMission from '../../../img/about/mission/mission.jpg';
import ImgVisionStatement from '../../../img/about/mission/vision.png';
import ImgMissionStatement from '../../../img/about/mission/mission.png';
import ImgCoreValue from '../../../img/about/mission/values.png';

const template = () => {
  return (
    <>
      <PageHero color={teal}>
        <Typography variant="h1" component="h1">
          Our Mission
        </Typography>
      </PageHero>
      <PageContent>
        <Grid item>
          <Grid container spacing={6}>
            <Grid item xs={6} sx={{ display: {xs: 'none', md: 'block'} }}>
              <img
                src={`${ImgMission}`}
                className='co-image'
                alt='CliniOps Mission'
                title='CliniOps Mission'
                style={{ maxHeight: '100%' }}
              />
            </Grid>
            <Grid item xs={12} md={6} >
              <Box sx={{ mt: 4 }}>
                <Grid container direction='row' alignItems='center'>
                  <Grid item sx={{ height: '40px', width: '40px', mr: 2 }}>
                    <img
                      src={`${ImgVisionStatement}`}
                      className='co-image'
                      alt='CliniOps Vision Statement'
                      title='CliniOps Vision Statement'
                    />
                  </Grid>
                  <Grid item>
                    <Typography variant="h2" component="h2" className='co-page-heading'>
                      Vision Statement
                    </Typography>
                  </Grid>
                </Grid>
                <Typography sx={{ mt: 1, pl: 7 }}>
                  To enable complete digitalization of clinical trials, drug safety &amp; patient care.
                </Typography>
              </Box>
              <Box sx={{ mt: 4 }}>
                <Grid container direction='row' alignItems='center'>
                  <Grid item sx={{ height: '40px', width: '40px', mr: 2 }}>
                    <img
                      src={`${ImgMissionStatement}`}
                      className='co-image'
                      alt='CliniOps Mission Statement'
                      title='CliniOps Mission Statement'
                    />
                  </Grid>
                  <Grid item>
                    <Typography variant="h2" component="h2" className='co-page-heading'>
                      Mission Statement
                    </Typography>
                  </Grid>
                </Grid>
                <Typography sx={{ mt: 1, pl: 7 }}>
                  eSourcing of data through a multi-channel integration of several electronic sources (Eg: EMR, Med Device, Lab Data, ICF etc.) into a central data hub, in a fully integrated clinical trial workflow.
                </Typography>
                <Typography sx={{ mt: 1, pl: 7 }}>
                  Improve Monitoring function through efficient and timely information exchange via mobile &amp; collaboration technology.
                </Typography>
                <Typography sx={{ mt: 1, pl: 7 }}>
                  Improve Patient Engagement through better communication and collaboration, and thereby also increase patient adherence.
                </Typography>
              </Box>
              <Box sx={{ mt: 4 }}>
                <Grid container direction='row' alignItems='center'>
                  <Grid item sx={{ height: '40px', width: '40px', mr: 2 }}>
                    <img
                      src={`${ImgCoreValue}`}
                      className='co-image'
                      alt='CliniOps Core Values'
                      title='CliniOps Core Values'
                    />
                  </Grid>
                  <Grid item>
                    <Typography variant="h2" component="h2" className='co-page-heading'>
                      Core Values
                    </Typography>
                  </Grid>
                </Grid>
                <Typography sx={{ mt: 1, pl: 7 }}>
                  Inspirational Excellence with Integrity, Commitment and Compassion.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </PageContent>
    </>
  );
}

export default template;