import React from "react";

import { Container, Box, Grid, Typography, Stack } from '@mui/material';
import { teal, common } from '@mui/material/colors';

import ImgTestimonial1 from '../../../../img/home/hm-testimonial-1.png';
import ImgTestimonial2 from '../../../../img/home/hm-testimonial-2.png';
import ImgTestimonial3 from '../../../../img/home/hm-testimonial-3.png';

const template = () => {
  return (
    <>
      <Box sx={{ py: 10, background: teal[50] }}>
        <Container>
          <Typography variant="h2" sx={{ textAlign: 'center' }}>
            Testimonials
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={4}
            pt={4}
          >
            <Grid item>
              <Stack direction="column" alignItems='center' spacing={1} p={3} sx={{ width: '350px', borderRadius: 2, textAlign: 'center', height: '100%', backgroundColor: common.white, boxShadow: '0 30px 60px -30px rgb(0 0 0 / 30%), 0 30px 60px -30px rgb(0 0 0 / 25%)' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '120px' }}>
                  <img
                    src={`${ImgTestimonial1}`}
                    className='co-image'
                    alt='California Pacific Medical Center'
                    title='California Pacific Medical Center'
                    style={{ minWidth: '80%' }}
                  />
                </Box>
                <Typography variant="body1" sx={{ lineHeight: '24px', pt: 1 }}>
                  <em>CliniOps is innovative, easy to use, and has the potential to transform how we recruit and consent subiects. I believe that it is a real innovative improvement in clinical research.</em>
                </Typography>
                <Box sx={{ pt: 2 }}>
                  <Typography variant="body2">
                    <strong>Dr. John Mendelson</strong>
                  </Typography>
                  <Typography variant="body2">
                    Chair, IRB, California Pacific Medical Center
                  </Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid item>
              <Stack direction="column" alignItems='center' spacing={1} p={3} sx={{ width: '350px', borderRadius: 2, textAlign: 'center', height: '100%', backgroundColor: common.white, boxShadow: '0 30px 60px -30px rgb(0 0 0 / 30%), 0 30px 60px -30px rgb(0 0 0 / 25%)' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '120px' }}>
                  <img
                    src={`${ImgTestimonial2}`}
                    className='co-image'
                    alt='Elizabeth Glaser Pediatric AIDS Foundation'
                    title='Elizabeth Glaser Pediatric AIDS Foundation'
                    style={{ minWidth: '80%' }}
                  />
                </Box>
                <Typography variant="body1" sx={{ lineHeight: '24px', pt: 1 }}>
                  <em>I have to say that now personally having gone through each and every form on the tablet, I really appreciate what a great system this is and how it will help us to have better data in the long run.</em>
                </Typography>
                <Box sx={{ pt: 2 }}>
                  <Typography variant="body2">
                    <strong>Dr. Laura Guay</strong>
                  </Typography>
                  <Typography variant="body2">
                    Vice President for Research, Elizabeth Glaser Pediatric AIDS Foundation
                  </Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid item>
              <Stack direction="column" alignItems='center' spacing={1} p={3} sx={{ width: '350px', borderRadius: 2, textAlign: 'center', height: '100%', backgroundColor: common.white, boxShadow: '0 30px 60px -30px rgb(0 0 0 / 30%), 0 30px 60px -30px rgb(0 0 0 / 25%)' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '120px' }}>
                  <img
                    src={`${ImgTestimonial3}`}
                    className='co-image'
                    alt='Scanadu'
                    title='Scanadu'
                    style={{ minWidth: '80%' }}
                  />
                </Box>
                <Typography variant="body1" sx={{ lineHeight: '24px', pt: 1 }}>
                  <em>eSource solution is a great compliment for Clinical trials. The off-line data capture with point-of-care edit checks gives us quality data in real time. The solution provides integrated workflows, flexible configuration and a simple user interface design. CliniOps provided excellent customer support and stood by us for clinical trials supporting FDA submissions.</em>
                </Typography>
                <Box sx={{ pt: 2 }}>
                  <Typography variant="body2">
                    <strong>Daya Ranamukhaarachchi, PhD</strong>
                  </Typography>
                  <Typography variant="body2">
                    VP/Regulatory Affairs, Scanadu
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