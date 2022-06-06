import React from 'react';
import { Container, Grid, Box, Divider, Typography, Link } from '@mui/material';
import { grey } from '@mui/material/colors';

import RouterLink from '../../router';

import ImgLogoCliniOps from '../../../img/footer/logo-cliniops.svg';
import ImgLogoGDPR from '../../../img/footer/logo-gdpr.png';
import ImgLogoUKPrivacy from '../../../img/footer/logo-uk-privacy.png';
import ImgLogoFacebook from '../../../img/footer/logo-facebook.svg';
import ImgLogoTwitter from '../../../img/footer/logo-twitter.svg';
import ImgLogoLinkedIn from '../../../img/footer/logo-linkedin.svg';

const template = () => {
  return (
    <>
      <Box sx={{ py: 6, backgroundColor: grey[50] }}>
        <Container>
          <Grid container direction='column' spacing={4}>
            <Grid item>
              <Grid container spacing={6} justifyContent="space-between" alignItems="center">
                <Grid item>
                  <img
                    src={`${ImgLogoCliniOps}`}
                    alt='CliniOps Logo'
                    title='CliniOps Logo'
                  />
                </Grid>
                <Grid item>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <a href='https://prighter.com/verify/13827389066' target='_blank'>
                        <img
                          src={`${ImgLogoGDPR}`}
                          alt='CliniOps Logo'
                          title='CliniOps Logo'
                        />
                      </a>
                    </Grid>
                    <Grid item>
                      <a href='https://prighter.com/ukrep/verify/13827389066' target='_blank'>
                        <img
                          src={`${ImgLogoUKPrivacy}`}
                          alt='UK Privacy Logo'
                          title='UK Privacy Logo'
                        />
                      </a>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Divider />
            </Grid>
            <Grid item>
              <Grid container direction="row" justifyContent="space-between" alignItems="flex-start">
                <Grid item>
                  <Grid container direction="column" spacing={1}>
                    <Grid item>
                      <Box className='co-ftr__text'>Home</Box>
                    </Grid>
                    <Grid item>
                      <a className='co-ftr__link' href={RouterLink.about._1}>Mission</a>
                    </Grid>
                    <Grid item>
                      <a className='co-ftr__link' href={RouterLink.media._1}>Newsroom</a>
                    </Grid>
                    <Grid item>
                      <a className='co-ftr__link' href={RouterLink.media._2}>Blogs</a>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container direction="column" spacing={1}>
                    <Grid item>
                      <Box className='co-ftr__text'>Products</Box>
                    </Grid>
                    <Grid item>
                      <a className='co-ftr__link' href={RouterLink.product._1}>CliniOps Connect</a>
                    </Grid>
                    <Grid item>
                      <a className='co-ftr__link' href={RouterLink.product._2}>CliniOps Edge</a>
                    </Grid>
                    <Grid item>
                      <a className='co-ftr__link' href={RouterLink.product._3}>CliniOps Conduct</a>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container direction="column" spacing={1}>
                    <Grid item>
                      <Box className='co-ftr__text'>Services</Box>
                    </Grid>
                    <Grid item>
                      <a className='co-ftr__link' href={RouterLink.service._1}>Study Setup</a>
                    </Grid>
                    <Grid item>
                      <a className='co-ftr__link' href={RouterLink.service._2}>Clinical Data Management</a>
                    </Grid>
                    <Grid item>
                      <a className='co-ftr__link' href={RouterLink.service._3}>Biostatistics &amp; Programming</a>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container direction="column" spacing={1}>
                    <Grid item>
                      <Box className='co-ftr__text'>Contact Us</Box>
                    </Grid>
                    <Grid item>
                      <a className='co-ftr__link' href="mailto:info@cliniops.com">info@cliniops.com</a>
                    </Grid>
                    <Grid item>
                      <a className='co-ftr__link' href="tel:+1-408-829-4677">+1-408-829-4677</a>
                    </Grid>
                    <Grid item>
                      <a className='co-ftr__link' href="www.cliniops.com">www.cliniops.com</a>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Divider />
            </Grid>
            <Grid item>
              <Grid container spacing={6} justifyContent="space-between" alignItems="center">
                <Grid item>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <a href='https://www.facebook.com/cliniops/' target='_blank'>
                        <img
                          src={`${ImgLogoFacebook}`}
                          alt='Facebook Logo'
                          title='CliniOps Facebook Page'
                        />
                      </a>
                    </Grid>
                    <Grid item>
                      <a href='https://twitter.com/cliniops' target='_blank'>
                        <img
                          src={`${ImgLogoTwitter}`}
                          alt='Twitter Logo'
                          title='CliniOps Twitter Page'
                        />
                      </a>
                    </Grid>
                    <Grid item>
                      <a href='https://www.linkedin.com/company/cliniops-inc/' target='_blank'>
                        <img
                          src={`${ImgLogoLinkedIn}`}
                          alt='LinkedIn Logo'
                          title='CliniOps LinkedIn Page'
                        />
                      </a>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <Typography variant="body2">
                        © 2022 CliniOps, Inc.
                      </Typography>
                    </Grid>
                    <Grid item>
                      <a className='co-ftr__link' href="/privacy-policy/">Privacy Policy</a>
                    </Grid>
                    <Grid item>
                      <a className='co-ftr__link' href="/cookie-policy/">Cookie Policy</a>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default template;