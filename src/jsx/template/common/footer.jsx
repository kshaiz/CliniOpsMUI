import React from 'react';
import { HashLink as RouterLink } from 'react-router-hash-link';

import { Container, Grid, Box, Divider, Typography, Link } from '@mui/material';
import { grey } from '@mui/material/colors';

import RouterList from '../../router';

import ImgLogoCliniOps from '../../../img/footer/logo-cliniops.svg';
import ImgLogoGDPR from '../../../img/footer/logo-gdpr.png';
import ImgLogoUKPrivacy from '../../../img/footer/logo-uk-privacy.png';
import ImgLogoFacebook from '../../../img/footer/logo-facebook.svg';
import ImgLogoTwitter from '../../../img/footer/logo-twitter.svg';
import ImgLogoLinkedIn from '../../../img/footer/logo-linkedin.svg';

const template = () => {
  return (
    <>
      <Box sx={{ py: 6, backgroundColor: grey[200] }}>
        <Container>
          <Grid container direction='column' spacing={4}>
            <Grid item>
              <Grid container spacing={1} justifyContent="space-between" alignItems="center">
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
              <Grid container direction="row" spacing={4} justifyContent="space-between" alignItems="flex-start">
                <Grid item xs={6} md>
                  <Grid container direction="column" spacing={1}>
                    <Grid item>
                      <Box className='co-ftr__text'>Home</Box>
                    </Grid>
                    <Grid item>
                      <a className='co-ftr__link' href={RouterList.about.mission} component={RouterLink}>Mission</a>
                    </Grid>
                    <Grid item>
                      <a className='co-ftr__link' href={RouterList.media._1} component={RouterLink}>Newsroom</a>
                    </Grid>
                    <Grid item>
                      <a className='co-ftr__link' href={RouterList.media._2} component={RouterLink}>Blogs</a>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6} md>
                  <Grid container direction="column" spacing={1}>
                    <Grid item>
                      <Box className='co-ftr__text'>Products</Box>
                    </Grid>
                    <Grid item>
                      <a className='co-ftr__link' href={RouterList.product.connect} component={RouterLink}>CliniOps Connect</a>
                    </Grid>
                    <Grid item>
                      <a className='co-ftr__link' href={RouterList.product.edge} component={RouterLink}>CliniOps Edge</a>
                    </Grid>
                    <Grid item>
                      <a className='co-ftr__link' href={RouterList.product.conduct} component={RouterLink}>CliniOps Conduct</a>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6} md>
                  <Grid container direction="column" spacing={1}>
                    <Grid item>
                      <Box className='co-ftr__text'>Services</Box>
                    </Grid>
                    <Grid item>
                      <a className='co-ftr__link' href={RouterList.service.studysetup} component={RouterLink}>Study Setup</a>
                    </Grid>
                    <Grid item>
                      <a className='co-ftr__link' href={RouterList.service.clinicaldatamanagement} component={RouterLink}>Clinical Data Management</a>
                    </Grid>
                    <Grid item>
                      <a className='co-ftr__link' href={RouterList.service.biostatisticprogramming} component={RouterLink}>Biostatistics &amp; Programming</a>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6} md>
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
              <Grid container spacing={1} justifyContent="space-between" alignItems="center">
                <Grid item xs={12} md='auto'>
                  <Grid container spacing={2} alignItems="center" justifyContent='center'>
                    <Grid item>
                      <a href='https://www.linkedin.com/company/cliniops-inc/' target='_blank'>
                        <img
                          src={`${ImgLogoLinkedIn}`}
                          alt='LinkedIn Logo'
                          title='CliniOps LinkedIn Page'
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
                      <a href='https://www.facebook.com/cliniops/' target='_blank'>
                        <img
                          src={`${ImgLogoFacebook}`}
                          alt='Facebook Logo'
                          title='CliniOps Facebook Page'
                        />
                      </a>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md='auto'>
                  <Grid container spacing={2} alignItems="center" justifyContent='center'>
                    <Grid item>
                      <Typography variant="body2">
                        © 2022 CliniOps, Inc.
                      </Typography>
                    </Grid>
                    <Grid item>
                      <a className='co-ftr__link' href={RouterList.policy.privacy} component={RouterLink}>Privacy Policy</a>
                    </Grid>
                    <Grid item>
                      <a className='co-ftr__link' href={RouterList.policy.cookie} component={RouterLink}>Cookie Policy</a>
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