import React from "react";

import { Container, Box, Grid, Typography, Stack, Link } from '@mui/material';
import { teal, common } from '@mui/material/colors';

import ImgAward1 from '../../../../img/home/hm-award-1-col.png';
import ImgAward2 from '../../../../img/home/hm-award-2-col.png';
import ImgAward3 from '../../../../img/home/hm-award-3-col.png';
import ImgAward4 from '../../../../img/home/hm-award-4-col.png';

const template = () => {
  return (
    <>
      <Box sx={{ py: 10, background: teal[50] }}>
        <Container>
          <Typography variant="h2" sx={{ textAlign: 'center' }}>
            Awards and Recognition
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
              <Link underline="none" href="https://www.gartner.com/en/documents/3989136" target="_blank" sx={{ height: '100%' }}>
                <Stack direction="column" alignItems='center' spacing={1} pt={1} pb={3} sx={{ width: '260px', borderRadius: 2, textAlign: 'center', height: '100%', backgroundColor: common.white, boxShadow: '0 30px 60px -30px rgb(0 0 0 / 30%), 0 30px 60px -30px rgb(0 0 0 / 25%)' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '120px' }}>
                    <img
                      src={`${ImgAward1}`}
                      alt='Gartner'
                      title='Gartner'
                      style={{ width: '260px' }}
                    />
                  </Box>
                  <Typography variant="body1" sx={{ lineHeight: '24px'}} color="common.black">
                    Hype Cycle for Life Sciences
                  </Typography>
                </Stack>
              </Link>
            </Grid>
            <Grid item>
              <Link underline="none" href="https://www.prweb.com/releases/2017/06/prweb14414347.htm" target="_blank" sx={{ height: '100%' }}>
                <Stack direction="column" alignItems='center' spacing={1} pt={1} pb={3} sx={{ width: '260px', borderRadius: 2, textAlign: 'center', height: '100%', backgroundColor: common.white, boxShadow: '0 30px 60px -30px rgb(0 0 0 / 30%), 0 30px 60px -30px rgb(0 0 0 / 25%)' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '120px' }}>
                    <img
                      src={`${ImgAward2}`}
                      alt='Frost &amp; Sullivan'
                      title='Frost &amp; Sullivan'
                      style={{ width: '260px' }}
                    />
                  </Box>
                  <Typography variant="body1" sx={{ lineHeight: '24px'}} color="common.black">
                    Technology Leadership Award
                  </Typography>
                </Stack>
              </Link>
            </Grid>
            <Grid item>
              <Link underline="none" href="https://www.fda.gov/about-fda/innovation-fda/innovate-today-summit-2019" target="_blank" sx={{ height: '100%' }}>
                <Stack direction="column" alignItems='center' spacing={1} pt={1} pb={3} sx={{ width: '260px', borderRadius: 2, textAlign: 'center', height: '100%', backgroundColor: common.white, boxShadow: '0 30px 60px -30px rgb(0 0 0 / 30%), 0 30px 60px -30px rgb(0 0 0 / 25%)' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '120px' }}>
                    <img
                      src={`${ImgAward3}`}
                      alt='FDA'
                      title='FDA'
                      style={{ width: '150px' }}
                    />
                  </Box>
                  <Typography variant="body1" sx={{ lineHeight: '24px'}} color="common.black">
                    FDA Innovation Summit
                  </Typography>
                </Stack>
              </Link>
            </Grid>
            <Grid item>
              <Link underline="none" href="https://www.pharmavoice.com/news/innovations-technologies/615901/" target="_blank" sx={{ height: '100%' }}>
                <Stack direction="column" alignItems='center' spacing={1} pt={1} pb={3} sx={{ width: '260px', borderRadius: 2, textAlign: 'center', height: '100%', backgroundColor: common.white, boxShadow: '0 30px 60px -30px rgb(0 0 0 / 30%), 0 30px 60px -30px rgb(0 0 0 / 25%)' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '120px' }}>
                    <img
                      src={`${ImgAward4}`}
                      alt='Pharma Voice'
                      title='Pharma Voice'
                      style={{ width: '206px' }}
                    />
                  </Box>
                  <Typography variant="body1" sx={{ lineHeight: '24px'}} color="common.black">
                    Technology Innovation
                  </Typography>
                </Stack>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
};

export default template;