import React from 'react';
import { HashLink as RouterLink } from 'react-router-hash-link';
import { Typography, Link, Grid, Card, CardHeader, CardActions, Button, alpha } from '@mui/material';
import { blue, blueGrey, grey } from '@mui/material/colors';

import RouterList from '../../../router';

const template = () => {
  return (
    <>
      <Typography>
        We are growing rapidly and it's important for us to hire people who can make an impact. We are looking for individuals who embrace challenges as opportunities and thrive in dynamic environments. So whether you're looking for an internship, entry-level, professional position, or a seasoned pro, you will have an opportunity to make a difference.
      </Typography>
      <Typography sx={{ mt: 1 }}>
        Our employee experience is as important to us as our customer experience. We foster an environment where people can learn, grow and thrive. You will get an opportunity to work with a strong management team with decades of experience in Technology, Business and Life Sciences, and also with our extremely dedicated, passionate and talented team. If you enjoy building great products or enjoy working with global customers, we have something for you. Please drop us a note at <Link variant="link" underline="hover" href="mailto:careers@cliniops.com">careers@cliniops.com</Link>.
      </Typography>
      <Grid container spacing={6} sx={{ mt:4 }}>
        <Grid item xs={6} md={4}>
          <Card variant="outlined" sx={{ border: 0, backgroundColor: alpha(blueGrey[50], .75), height: '100%' }}>
            <CardHeader
              title="Project Manager"
              subheader={<Typography sx={{ color: 'black' }} variant="body2">Fremont, CA or Kolkata, India</Typography>}
            />
            <CardActions disableSpacing>
              <Button to={RouterList.about.career_1} component={RouterLink}>View Details</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={6} md={4}>
          <Card variant="outlined" sx={{ border: 0, backgroundColor: alpha(blueGrey[50], .75), height: '100%' }}>
            <CardHeader
              title="Biostatistician"
              subheader={<Typography sx={{ color: 'black' }} variant="body2">Fremont, CA or Kolkata, India</Typography>}
            />
            <CardActions disableSpacing>
              <Button to={RouterList.about.career_2} component={RouterLink}>View Details</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={6} md={4}>
          <Card variant="outlined" sx={{ border: 0, backgroundColor: alpha(blueGrey[50], .75), height: '100%' }}>
            <CardHeader
              title="Sales Executive"
              subheader={<Typography sx={{ color: 'black' }} variant="body2">Fremont, CA or Kolkata, India</Typography>}
            />
            <CardActions disableSpacing>
              <Button to={RouterList.about.career_3} component={RouterLink}>View Details</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={6} md={4}>
          <Card variant="outlined" sx={{ border: 0, backgroundColor: alpha(blueGrey[50], .75), height: '100%' }}>
            <CardHeader
              title="Software Engineer, Full Stack"
              subheader={<Typography sx={{ color: 'black' }} variant="body2">Fremont, CA or Kolkata, India</Typography>}
            />
            <CardActions disableSpacing>
              <Button to={RouterList.about.career_4} component={RouterLink}>View Details</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={6} md={4}>
          <Card variant="outlined" sx={{ border: 0, backgroundColor: alpha(blueGrey[50], .75), height: '100%' }}>
            <CardHeader
              title="Software Engineer, Mobile Development"
              subheader={<Typography sx={{ color: 'black' }} variant="body2">Fremont, CA or Kolkata, India</Typography>}
            />
            <CardActions disableSpacing>
              <Button to={RouterList.about.career_5} component={RouterLink}>View Details</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={6} md={4}>
          <Card variant="outlined" sx={{ border: 0, backgroundColor: alpha(blueGrey[50], .75), height: '100%' }}>
            <CardHeader
              title="Clinical Data Management"
              subheader={<Typography sx={{ color: 'black' }} variant="body2">Fremont, CA or Kolkata, India</Typography>}
            />
            <CardActions disableSpacing>
              <Button to={RouterList.about.career_6} component={RouterLink}>View Details</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={6} md={4}>
          <Card variant="outlined" sx={{ border: 0, backgroundColor: alpha(blueGrey[50], .75), height: '100%' }}>
            <CardHeader
              title="Manager, Quality Control"
              subheader={<Typography sx={{ color: 'black' }} variant="body2">Fremont, CA or Kolkata, India</Typography>}
            />
            <CardActions disableSpacing>
              <Button to={RouterList.about.career_7} component={RouterLink}>View Details</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={6} md={4}>
          <Card variant="outlined" sx={{ border: 0, backgroundColor: alpha(blueGrey[50], .75), height: '100%' }}>
            <CardHeader
              title="Senior Software Engineer"
              subheader={<Typography sx={{ color: 'black' }} variant="body2">Fremont, CA or Kolkata, India</Typography>}
            />
            <CardActions disableSpacing>
              <Button to={RouterList.about.career_8} component={RouterLink}>View Details</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default template;