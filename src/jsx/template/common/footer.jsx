import React from 'react';
import { HashLink as RouterLink } from 'react-router-hash-link';

import { Container, Grid, Box, Divider, Typography, Link } from '@mui/material';
import { grey } from '@mui/material/colors';

import RouterList from '../../router';

import ImgLogoCliniOps from '../../../img/footer/logo-cliniops.svg';
import ImgLogoGDPR from '../../../img/footer/logo-gdpr.png';
import ImgLogoUKPrivacy from '../../../img/footer/logo-uk-privacy.png';
import ImgLogoIso27001 from '../../../img/footer/iso27001.png';
import ImgLogoHipaa from '../../../img/footer/hipaa.png';
import ImgLogoFda from '../../../img/footer/fda.png';
import ImgLogoCdisc from '../../../img/footer/cdisc.svg';
import ImgLogoFacebook from '../../../img/footer/logo-facebook.svg';
import ImgLogoTwitter from '../../../img/footer/logo-twitter.svg';
import ImgLogoLinkedIn from '../../../img/footer/logo-linkedin.svg';
import ImgLogoYoutube from '../../../img/footer/logo-youtube.svg';

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
                    alt='Logo'
                    title='CliniOps Logo'
                  />
                </Grid>
                <Grid item>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <a href='https://prighter.com/verify/13827389066' target='_blank'>
                        <img
                          src={`${ImgLogoGDPR}`}
                          alt='Logo'
                          title='GDPR Logo'
                        />
                      </a>
                    </Grid>
                    <Grid item>
                      <a href='https://prighter.com/ukrep/verify/13827389066' target='_blank'>
                        <img
                          src={`${ImgLogoUKPrivacy}`}
                          alt='Logo'
                          title='UK Privacy Logo'
                        />
                      </a>
                    </Grid>
                    <Grid item>
                      {/* <a href='https://prighter.com/ukrep/verify/13827389066' target='_blank'> */}
                        <img
                          src={`${ImgLogoHipaa}`}
                          alt='Logo'
                          title='HIPAA Compliant'
                          style={{ maxHeight: "60px"}}
                        />
                      {/* </a> */}
                    </Grid>
                    <Grid item>
                      {/* <a href='https://prighter.com/ukrep/verify/13827389066' target='_blank'> */}
                        <img
                          src={`${ImgLogoIso27001}`}
                          alt='Logo'
                          title='ISO 27001 Certified'
                          style={{ maxWidth: "109px", maxHeight: "60px"}}
                        />
                      {/* </a> */}
                    </Grid>
                    <Grid item>
                      {/* <a href='https://prighter.com/ukrep/verify/13827389066' target='_blank'> */}
                        <img
                          src={`${ImgLogoFda}`}
                          alt='Logo'
                          title='FDA 21 CFR Part 11'
                          style={{ maxWidth: "109px", maxHeight: "60px"}}
                        />
                      {/* </a> */}
                    </Grid>
                    <Grid item>
                      {/* <a href='https://prighter.com/ukrep/verify/13827389066' target='_blank'> */}
                        <img
                          src={`${ImgLogoCdisc}`}
                          alt='Logo'
                          title='CDISC'
                          style={{ maxWidth: "109px", maxHeight: "60px"}}
                        />
                      {/* </a> */}
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
                    <Grid item>
                      <a href='https://www.youtube.com/channel/UCTjLNXcWwlyaFvLoAblzm0Q' target='_blank'>
                        <img
                          src={`${ImgLogoYoutube}`}
                          alt='YouTube Logo'
                          title='CliniOps YouTube Page'
                        />
                      </a>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md='auto'>
                  <Grid container spacing={1} alignItems="center" justifyContent='center'>
                    <Grid item>
                      <Typography variant="body2" sx={{ fontSize: "14px" }}>
                        © 2022 CliniOps, Inc.
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Link variant="body2" underline="hover" sx={{ fontSize: "14px" }} to={RouterList.policy.privacy} component={RouterLink}>Privacy Policy</Link>
                    </Grid>
                    <Grid item>
                      <Link variant="body2" underline="hover" sx={{ fontSize: "14px" }} to={RouterList.policy.cookie} component={RouterLink}>Cookie Policy</Link>
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