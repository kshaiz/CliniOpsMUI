import React from "react";

import { Container, Box, Grid, Typography } from '@mui/material';
import { teal, common } from '@mui/material/colors';

import { TestimonialTile } from '../../../component/home';

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
              <TestimonialTile
                imgSrc={ImgTestimonial1}
                organization='California Pacific Medical Center'
                quote='CliniOps is innovative, easy to use, and has the potential to transform how we recruit and consent subiects. I believe that it is a real innovative improvement in clinical research.'
                name='Dr. John Mendelson'
                position='Chair, IRB'
              />
            </Grid>
            <Grid item>
              <TestimonialTile
                imgSrc={ImgTestimonial2}
                organization='Elizabeth Glaser Pediatric AIDS Foundation'
                quote='I have to say that now personally having gone through each and every form on the tablet, I really appreciate what a great system this is and how it will help us to have better data in the long run.'
                name='Dr. Laura Guay'
                position='Vice President for Research'
              />
            </Grid>
            <Grid item>
              <TestimonialTile
                imgSrc={ImgTestimonial3}
                organization='Scanadu'
                quote='eSource solution is a great compliment for Clinical trials. The off-line data capture with point-of-care edit checks gives us quality data in real time. The solution provides integrated workflows, flexible configuration and a simple user interface design. CliniOps provided excellent customer support and stood by us for clinical trials supporting FDA submissions.'
                name='Daya Ranamukhaarachchi, PhD'
                position='VP/Regulatory Affairs'
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
};

export default template;