import React from 'react';
import { Typography, Link, Grid, Card, CardHeader, CardActions, Button } from '@mui/material';

import RouterList from '../../../router';

const template = () => {
  return (
    <>
      <Typography>
        We are growing rapidly and it's important for us to hire people who can make an impact. We are looking for individuals who embrace challenges as opportunities and thrive in dynamic environments. So whether you're looking for an internship, entry-level, professional position, or a seasoned pro, you will have an opportunity to make a difference.
      </Typography>
      <Typography sx={{ mt: 1 }}>
        Our employee experience is as important to us as our customer experience. We foster an environment where people can learn, grow and thrive. You will get an opportunity to work with a strong management team with decades of experience in Technology, Business and Life Sciences, and also with our extremely dedicated, passionate and talented team. If you enjoy building great products or enjoy working with global customers, we have something for you. Please drop us a note at <Link underline="hover" href="mailto:careers@cliniops.com">careers@cliniops.com</Link>.
      </Typography>
      <Grid container spacing={6} sx={{ mt:4 }}>
        <Grid item xs={4}>
          <Card variant="outlined">
            <CardHeader
              title="Project Manager"
              subheader="Fremont, CA or Kolkata, India"
            />
            <CardActions disableSpacing>
              <Button href={RouterList.about._0_3_1}>View Details</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card variant="outlined">
            <CardHeader
              title="Biostatistician"
              subheader="Fremont, CA or Kolkata, India"
            />
            <CardActions disableSpacing>
              <Button href={RouterList.about._0_3_2}>View Details</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card variant="outlined">
            <CardHeader
              title="Sales Executive"
              subheader="Fremont, CA or Kolkata, India"
            />
            <CardActions disableSpacing>
              <Button href={RouterList.about._0_3_3}>View Details</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card variant="outlined">
            <CardHeader
              title="Software Engineer, Full Stack"
              subheader="Fremont, CA or Kolkata, India"
            />
            <CardActions disableSpacing>
              <Button href={RouterList.about._0_3_4}>View Details</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card variant="outlined">
            <CardHeader
              title="Software Engineer, Mobile Development"
              subheader="Fremont, CA or Kolkata, India"
            />
            <CardActions disableSpacing>
              <Button href={RouterList.about._0_3_5}>View Details</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card variant="outlined">
            <CardHeader
              title="Clinical Data Management"
              subheader="Fremont, CA or Kolkata, India"
            />
            <CardActions disableSpacing>
              <Button href={RouterList.about._0_3_6}>View Details</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card variant="outlined">
            <CardHeader
              title="Manager, Quality Control"
              subheader="Fremont, CA or Kolkata, India"
            />
            <CardActions disableSpacing>
              <Button href={RouterList.about._0_3_7}>View Details</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card variant="outlined">
            <CardHeader
              title="Senior Software Engineer"
              subheader="Fremont, CA or Kolkata, India"
            />
            <CardActions disableSpacing>
              <Button href={RouterList.about._0_3_8}>View Details</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default template;