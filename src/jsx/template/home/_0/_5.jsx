import React from "react";

import { Container, Box, Grid, Typography, Stack, Link } from '@mui/material';
import { blueGrey, common } from '@mui/material/colors';

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
              <Stack direction="column" alignItems='center' spacing={1} p={3} sx={{ width: '350px', borderRadius: 2, textAlign: 'center', height: '100%', backgroundColor: common.white, boxShadow: '0 30px 60px -30px rgb(0 0 0 / 30%), 0 30px 60px -30px rgb(0 0 0 / 25%)' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '120px' }}>
                  <img
                    src={`${ImgNews1}`}
                    alt='Amazon AWS'
                    title='Amazon AWS'
                    style={{ height: '100px', minWidth: '90px' }}
                  />
                </Box>
                <Typography variant="body1" sx={{ lineHeight: '24px', pt: 1 }}>
                  Running next generation hybrid and virtual clinical trials on AWS
                </Typography>
                <Box sx={{ pt: 2 }}>
                  <Link href="https://aws.amazon.com/blogs/industries/running-next-generation-hybrid-and-virtual-clinical-trials-on-aws/" target="_blank" underline="hover">LEARN MORE</Link>
                </Box>
              </Stack>
            </Grid>
            <Grid item>
              <Stack direction="column" alignItems='center' spacing={1} p={3} sx={{ width: '350px', borderRadius: 2, textAlign: 'center', height: '100%', backgroundColor: common.white, boxShadow: '0 30px 60px -30px rgb(0 0 0 / 30%), 0 30px 60px -30px rgb(0 0 0 / 25%)' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '120px' }}>
                  <img
                    src={`${ImgNews2}`}
                    alt='Open Data Institute'
                    title='Open Data Institute'
                    style={{ height: '100px', minWidth: '90px' }}
                  />
                </Box>
                <Typography variant="body1" sx={{ lineHeight: '24px', pt: 1 }}>
                  CliniOps collaborates with Microsoft, iKure &amp; McGill, for AI in the treatment of non-communicable disease (NCD)
                </Typography>
                <Box sx={{ pt: 2 }}>
                  <Link href="https://theodi.org/article/the-six-data-collaborations-chosen-for-our-new-peer-learning-network/" target="_blank" underline="hover">LEARN MORE</Link>
                </Box>
              </Stack>
            </Grid>
            <Grid item>
              <Stack direction="column" alignItems='center' spacing={1} p={3} sx={{ width: '350px', borderRadius: 2, textAlign: 'center', height: '100%', backgroundColor: common.white, boxShadow: '0 30px 60px -30px rgb(0 0 0 / 30%), 0 30px 60px -30px rgb(0 0 0 / 25%)' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '120px' }}>
                  <img
                    src={`${ImgNews3}`}
                    alt='PubMed'
                    title='PubMed'
                    style={{ height: '100px', minWidth: '90px' }}
                  />
                </Box>
                <Typography variant="body1" sx={{ lineHeight: '24px', pt: 1 }}>
                  A PubMed publication on 'The safety of combined triple drug therapy in the neglected tropical diseases co-endemic setting of Fiji'
                </Typography>
                <Box sx={{ pt: 2 }}>
                  <Link href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7098623/" target="_blank" underline="hover">LEARN MORE</Link>
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