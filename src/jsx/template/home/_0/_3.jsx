import React from "react";
import { Container, Box, Grid, Typography } from '@mui/material';
import { yellow } from '@mui/material/colors';

import { TechnologyTile } from '../../../component/home';

import ImgImprovementData from '../../../../img/home/hm-improvement-data.svg';
import ImgImprovementRetention from '../../../../img/home/hm-improvement-retention.svg';
import ImgImprovementCost from '../../../../img/home/hm-improvement-cost.svg';
import ImgImprovementSetup from '../../../../img/home/hm-improvement-setup.svg';
import ImgImprovementCloseout from '../../../../img/home/hm-improvement-closeout.svg';

const template = () => {
  return (
    <>
      <Box sx={{ py: 10 }}>
        <Container>
          <Typography variant="h2" className="co-page-heading" sx={{ textAlign: 'center' }}>
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
              <TechnologyTile
                imgSrc={ImgImprovementData}
                heading='5000X'
                summary='Improvement in Data Quality'
              />
            </Grid>
            <Grid item>
              <TechnologyTile
                imgSrc={ImgImprovementRetention}
                heading='3X'
                summary='Better patient retention'
              />
            </Grid>
            <Grid item>
              <TechnologyTile
                imgSrc={ImgImprovementCost}
                heading='50%'
                summary='Reduction in Clinical Trial Cost'
              />
            </Grid>
            <Grid item>
              <TechnologyTile
                imgSrc={ImgImprovementSetup}
                heading='10X'
                summary='Improvement in the clinical trial study setup'
              />
            </Grid>
            <Grid item>
              <TechnologyTile
                imgSrc={ImgImprovementData}
                heading='5X'
                summary='Improvement in data access with real time data collection and AI analysis'
              />
            </Grid>
            <Grid item>
              <TechnologyTile
                imgSrc={ImgImprovementCloseout}
                heading='5X'
                summary='Improvement in time for study closeout'
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
};

export default template;