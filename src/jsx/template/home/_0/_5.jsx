import React from "react";

import { Container, Box, Grid, Typography } from '@mui/material';
import { blueGrey, common } from '@mui/material/colors';

import { NewsTile } from '../../../component/home';

import ImgNews1 from '../../../../img/home/hm-news-1.png';
import ImgNews2 from '../../../../img/home/hm-news-2.png';
import ImgNews3 from '../../../../img/home/hm-news-3.png';

const template = () => {
  return (
    <>
      <Box sx={{ py: 10, background: blueGrey[50] }}>
        <Container>
          <Typography variant="h2" sx={{ textAlign: 'center' }}>
            News and Updates
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
              <NewsTile
                imgSrc={ImgNews1}
                source='Amazon AWS'
                summary='Running next generation hybrid and virtual clinical trials on AWS'
                link='https://aws.amazon.com/blogs/industries/running-next-generation-hybrid-and-virtual-clinical-trials-on-aws/'
              />
            </Grid>
            <Grid item>
              <NewsTile
                imgSrc={ImgNews2}
                source='Open Data Institute'
                summary='CliniOps collaborates with Microsoft, iKure &amp; McGill, for AI in the treatment of non-communicable disease (NCD)'
                link='https://theodi.org/article/the-six-data-collaborations-chosen-for-our-new-peer-learning-network/'
              />
            </Grid>
            <Grid item>
              <NewsTile
                imgSrc={ImgNews3}
                source='PubMed'
                summary='A PubMed publication on "The safety of combined triple drug therapy in the neglected tropical diseases co-endemic setting of Fiji"'
                link='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7098623/'
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
};

export default template;