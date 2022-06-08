import React from "react";
import { Container, Box, Grid, Typography, Stack } from '@mui/material';
import { yellow } from '@mui/material/colors';

import ImgImprovementData from '../../../../img/home/hm-improvement-data.svg';
import ImgImprovementRetention from '../../../../img/home/hm-improvement-retention.svg';
import ImgImprovementCost from '../../../../img/home/hm-improvement-cost.svg';
import ImgImprovementSetup from '../../../../img/home/hm-improvement-setup.svg';
import ImgImprovementCloseout from '../../../../img/home/hm-improvement-closeout.svg';

const template = () => {
  return (
    <>
      <Box sx={{ py: 10, background: yellow[50] }}>
        <Container>
          <Typography variant="h2" sx={{ textAlign: 'center' }}>
            Our patented technology drives superior results
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            rowSpacing={1}
            columnSpacing={4}
            pt={6}
          >
            <Grid item>
              <Stack direction="row" alignItems='center' spacing={1} sx={{ width: '350px' }}>
                <Box>
                  <img
                    src={`${ImgImprovementData}`}
                    className='co-image'
                    alt='Improvement in Data Quality'
                    title='Improvement in Data Quality'
                    style={{ height: '80px', minWidth: '80px' }}
                  />
                </Box>
                <Box>
                  <Typography variant="h4">
                    5000X
                  </Typography>
                  <Typography variant="body1">
                    Improvement in Data Quality
                  </Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid item>
              <Stack direction="row" alignItems='center' spacing={1} sx={{ width: '350px' }}>
                <Box>
                  <img
                    src={`${ImgImprovementRetention}`}
                    className='co-image'
                    alt='Better patient retention'
                    title='Better patient retention'
                    style={{ height: '80px', minWidth: '80px' }}
                  />
                </Box>
                <Box>
                  <Typography variant="h4">
                    3X
                  </Typography>
                  <Typography variant="body1">
                    Better patient retention
                  </Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid item>
              <Stack direction="row" alignItems='center' spacing={1} sx={{ width: '350px' }}>
                <Box>
                  <img
                    src={`${ImgImprovementCost}`}
                    className='co-image'
                    alt='Reduction in Clinical Trial Cost'
                    title='Reduction in Clinical Trial Cost'
                    style={{ height: '80px', minWidth: '80px' }}
                  />
                </Box>
                <Box>
                  <Typography variant="h4">
                    50%
                  </Typography>
                  <Typography variant="body1">
                    Reduction in Clinical Trial Cost
                  </Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid item>
              <Stack direction="row" alignItems='center' spacing={1} sx={{ width: '350px' }}>
                <Box>
                  <img
                    src={`${ImgImprovementSetup}`}
                    className='co-image'
                    alt='Improvement in the clinical trial study setup'
                    title='Improvement in the clinical trial study setup'
                    style={{ height: '70px', minWidth: '80px' }}
                  />
                </Box>
                <Box>
                  <Typography variant="h4">
                    10X
                  </Typography>
                  <Typography variant="body1">
                    Improvement in the clinical trial study setup
                  </Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid item>
              <Stack direction="row" alignItems='center' spacing={1} sx={{ width: '350px' }}>
                <Box>
                  <img
                    src={`${ImgImprovementData}`}
                    className='co-image'
                    alt='Improvement in data access'
                    title='Improvement in data access'
                    style={{ height: '80px', minWidth: '80px' }}
                  />
                </Box>
                <Box>
                  <Typography variant="h4">
                    5X
                  </Typography>
                  <Typography variant="body1">
                    Improvement in data access with real time data collection and AI analysis
                  </Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid item>
              <Stack direction="row" alignItems='center' spacing={1} sx={{ width: '350px' }}>
                <Box>
                  <img
                    src={`${ImgImprovementCloseout}`}
                    className='co-image'
                    alt='Improvement in time for study closeout'
                    title='Improvement in time for study closeout'
                    style={{ height: '80px', minWidth: '80px' }}
                  />
                </Box>
                <Box>
                  <Typography variant="h4">
                    5X
                  </Typography>
                  <Typography variant="body1">
                    Improvement in time for study closeout
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
};

export default template;