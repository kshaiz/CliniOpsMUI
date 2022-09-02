import React from 'react';
import { Grid, Box, Stack, Typography } from '@mui/material';
import { teal, blueGrey } from '@mui/material/colors';

import { PageHero, PageContent } from '../../component/page';

// Page Imports
import _0 from './customer-story/_0';
import ImgRob from '../../../img/media/customer-story/_1/rob_krummen.jpg';

const template = () => {
  return (
    <>
      <PageHero color={teal}>
        <_0 />
      </PageHero>
      <PageContent>
        <Grid item>
          <Typography variant="h4" paragraph>Configurable Platform Speeds Development of Complex Workflows in Ground-Breaking Clinical Study</Typography>
          <Typography paragraph>The database setup for the clinical study for Vektor Medical's ground-breaking non-invasive cardiac arrhythmia mapping tool (vMap®) required complex workflows to eliminate any testing bias for their proprietary algorithms. This meant that expert clinical investigators using vMap must necessarily be blinded from the clinical ground truth in order to truly ascertain the accuracy of Vektor's mapping tool.</Typography>
          <Typography paragraph>The company explored multiple options available in the market to support their unique requirements. However, they were unable to find one that could efficiently flex and customize their database to seamlessly handle the level of complex workflow for the study. Unfortunately, with most database-providers, development and testing of custom codes to meet Vektor's needs was going to be expensive and time-consuming.</Typography>
          <Typography paragraph>Unable to find an off-the-shelf product, Vektor approached CliniOps, to help develop the study database including crafting the solution for this critical step in their workflow management. This required randomizing and assigning the vMap data process to its own site known as the “Ground Truth”. Separate sites were used for capturing data from the study cases. These were blinded from the Ground Truth and a separate team was utilized to reconcile the Ground Truth data and the vMap data. This entire process involved complex workflows, notifications, and custom randomization to ensure seamless collaboration across stakeholders. Because CliniOps' platform is highly configurable, CliniOps was able to make changes to the database without writing new code. The customized platform was ready to use in a matter of weeks. It was also significantly cost effective.</Typography>
          <blockquote style={{ borderLeft: `4px solid ${blueGrey[100]}`, marginLeft: -1 }}>
            <Stack spacing={4} sx={{ pl: 4 }} direction="row">
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  minWidth: '220px',
                  width: '220px',
                  height: '220px',
                  borderRadius: 2,
                  backgroundImage: `url(${ImgRob})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'top center'
                }}
              />
              <Box>
                <Typography paragraph>
                  <em>
                    "Vektor Medical was looking to design a custom database that allowed for a gold-standard multi-center,
                    blinded clinical study. We found CliniOps's platform to be flexible and adaptable, offering features that
                    handled our complex clinical workflow seamlessly. Their team was excellent and their responsiveness was
                    impressive. CliniOps listened to our requirements and configured the system the way it needed to be done.
                    CliniOps's platform was a key reason that we were able to successfully complete our study on time and on budget.
                    In terms of our clinical trial plans going forward, when we are ready for our next study, CliniOps will be among our
                    first calls."</em>
                </Typography>
                <Typography variant="overline" paragraph>
                  <strong>Robert J. Krummen, Esq., Chief Executive Officer, Vektor Medical, Inc.</strong>
                </Typography>
              </Box>
            </Stack>
          </blockquote>
          <Typography paragraph>Vektor Medical's vMap® received US FDA 510(k) clearance in November 2021 and is the first and only non-invasive mapping tool that uses 12-lead ECG data to help physicians rapidly locate potential cardiac arrhythmia sources.</Typography>
        </Grid>
      </PageContent>
    </>
  );
}

export default template;