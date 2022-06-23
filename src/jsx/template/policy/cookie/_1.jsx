import React from 'react';
import { Stack, Typography, Box, Link, Card, CardContent, Grid, Divider } from '@mui/material';

import RouterList from '../../../router';

const template = () => {
  return (
    <>
      <Stack spacing={8}>
        <Stack spacing={4}>
          <Typography variant="h2" component="h2">Interpretation and Definitions</Typography>
          <Box>
            <Stack spacing={1}>
              <Typography variant="h3" component="h3">Interpretation</Typography>
              <Typography variant="body1">The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</Typography>
            </Stack>
          </Box>
          <Box>
            <Stack spacing={1}>
              <Typography variant="h3" component="h3">Definitions</Typography>
              <Typography variant="body1">For the purposes of this Cookies Policy:</Typography>
              <Typography variant="body1"><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Cookies Policy) refers to CliniOps, Inc., 38750 Paseo Padre Pkwy, Suite C8, Fremont, CA 94536.</Typography>
              <Typography variant="body1"><strong>Cookies</strong> means small files that are placed on Your computer, mobile device or any other device by a website, containing details of your browsing history on that website among its many uses.</Typography>
              <Typography variant="body1"><strong>Website</strong> refers to CliniOps, accessible from https://cliniops.com/</Typography>
              <Typography variant="body1"><strong>You</strong> means the individual accessing or using the Website, or a company, or any legal entity on behalf of which such individual is accessing or using the Website, as applicable.</Typography>
            </Stack>
          </Box>
          <Typography variant="h2" component="h2">The use of the Cookies</Typography>
          <Box>
            <Stack spacing={1}>
              <Typography variant="h3" component="h3">Type of Cookies We Use</Typography>
              <Typography variant="body1">Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close your web browser.</Typography>
              <Typography variant="body1">We use both session and persistent Cookies for the purposes set out below:</Typography>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="body1">
                    <strong>Necessary / Essential Cookies</strong>
                  </Typography>
                  <Divider sx={{ my: 1 }} />
                  <Grid container spacing={1}>
                    <Grid item xs={2}>
                      <Typography variant="body1">Type:</Typography>
                    </Grid>
                    <Grid item xs={10}>
                      <Typography variant="body1">Session Cookies</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography variant="body1">Administered by:</Typography>
                    </Grid>
                    <Grid item xs={10}>
                      <Typography variant="body1">Us</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography variant="body1">Purpose:</Typography>
                    </Grid>
                    <Grid item xs={10}>
                      <Typography variant="body1">These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="body1">
                    <strong>Cookies Policy / Notice Acceptance Cookies</strong>
                  </Typography>
                  <Divider sx={{ my: 1 }} />
                  <Grid container spacing={1}>
                    <Grid item xs={2}>
                      <Typography variant="body1">Type:</Typography>
                    </Grid>
                    <Grid item xs={10}>
                      <Typography variant="body1">Persistent Cookies</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography variant="body1">Administered by:</Typography>
                    </Grid>
                    <Grid item xs={10}>
                      <Typography variant="body1">Us</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography variant="body1">Purpose:</Typography>
                    </Grid>
                    <Grid item xs={10}>
                      <Typography variant="body1">These Cookies identify if users have accepted the use of cookies on the Website.</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="body1">
                    <strong>Functionality Cookies</strong>
                  </Typography>
                  <Divider sx={{ my: 1 }} />
                  <Grid container spacing={1}>
                    <Grid item xs={2}>
                      <Typography variant="body1">Type:</Typography>
                    </Grid>
                    <Grid item xs={10}>
                      <Typography variant="body1">Persistent Cookies</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography variant="body1">Administered by:</Typography>
                    </Grid>
                    <Grid item xs={10}>
                      <Typography variant="body1">Us</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography variant="body1">Purpose:</Typography>
                    </Grid>
                    <Grid item xs={10}>
                      <Typography variant="body1">These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="body1">
                    <strong>Tracking and Performance Cookies</strong>
                  </Typography>
                  <Divider sx={{ my: 1 }} />
                  <Grid container spacing={1}>
                    <Grid item xs={2}>
                      <Typography variant="body1">Type:</Typography>
                    </Grid>
                    <Grid item xs={10}>
                      <Typography variant="body1">Persistent Cookies</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography variant="body1">Administered by:</Typography>
                    </Grid>
                    <Grid item xs={10}>
                      <Typography variant="body1">Us</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography variant="body1">Purpose:</Typography>
                    </Grid>
                    <Grid item xs={10}>
                      <Typography variant="body1">These Cookies are used to track information about traffic to the Website and how users use the Website. The information gathered via these Cookies may directly or indirectly identify you as an individual visitor. This is because the information collected is typically linked to a pseudonymous identifier associated with the device you use to access the Website. We may also use these Cookies to test new pages, features or new functionality of the Website to see how our users react to them.</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Stack>
          </Box>
          <Box>
            <Stack spacing={1}>
              <Typography variant="h3" component="h3">Your Choices Regarding Cookies</Typography>
              <Typography variant="body1">If You prefer to avoid the use of Cookies on the Website, first You must disable the use of Cookies in your browser and then delete the Cookies saved in your browser associated with this website. You may use this option for preventing the use of Cookies at any time.</Typography>
              <Typography variant="body1">If You do not accept Our Cookies, You may experience some inconvenience in your use of the Website and some features may not function properly.</Typography>
              <Typography variant="body1">If You'd like to delete Cookies or instruct your web browser to delete or refuse Cookies, please visit the help pages of your web browser.</Typography>
              <Typography variant="body1">For the Chrome web browser, please visit this page from Google: <Link variant="link" href="https://support.google.com/accounts/answer/32050" target="_blank" underline="hover">https://support.google.com/accounts/answer/32050</Link></Typography>
              <Typography variant="body1">For the Internet Explorer web browser, please visit this page from Microsoft: <Link variant="link" href="https://support.microsoft.com/kb/278835" target="_blank" underline="hover">https://support.microsoft.com/kb/278835</Link></Typography>
              <Typography variant="body1">For the Firefox web browser, please visit this page from Mozilla: <Link variant="link" href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored" target="_blank" underline="hover">https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored</Link></Typography>
              <Typography variant="body1">For the Safari web browser, please visit this page from Apple: <Link variant="link" href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" underline="hover">https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac</Link></Typography>
              <Typography variant="body1">For any other web browser, please visit your web browser's official web pages.</Typography>
            </Stack>
          </Box>
          <Box>
            <Stack spacing={1}>
              <Typography variant="h3" component="h3">More Information about Cookies</Typography>
              <Typography variant="body1">You can learn more about cookies here: <Link variant="link" href="https://www.termsfeed.com/blog/cookies/" target="_blank" underline="hover">All about cookies by TermsFeed</Link></Typography>
            </Stack>
          </Box>
          <Box>
            <Stack spacing={1}>
              <Typography variant="h3" component="h3">Contact Us</Typography>
              <Typography variant="body1">By email: <Link variant="link" href="mailto:dpo@cliniops.com" underline="hover">dpo@cliniops.com</Link></Typography>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </>
  );
}

export default template;